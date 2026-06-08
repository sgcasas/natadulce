/**
 * @file Unit conversion utilities for baking measurements.
 *
 * Provides volume and weight unit definitions, cross-unit conversion,
 * type-checking helpers, and a significant-digits rounding utility.
 * All labels are in Spanish as used by the BakingHelper application.
 */

// ─── Round to N significant digits helper ──────────────────────────

/**
 * Rounds a numeric value to the specified number of significant digits.
 *
 * @param {number} value - The number to round.
 * @param {number} [digits=4] - How many significant digits to keep (default 4).
 * @returns {number} The rounded number.
 */
function roundToSignificantDigits(value, digits = 4) {
    if (value === 0) return 0;
    const shift = Math.pow(10, digits - 1 - Math.floor(Math.log10(Math.abs(value))));
    return Math.round(value * shift) / shift;
}

// ─── Volume units ──────────────────────────────────────────────────

/**
 * Mapping of volume unit keys to their Spanish label and milliliter factor.
 *
 * @type {Record<string, { label: string, toMl: number }>}
 */
const VOLUME_UNITS = {
    tsp:  { label: 'cdta',       toMl: 4.92892        }, // cucharadita
    tbsp: { label: 'cda',        toMl: 14.7868        }, // cuchara
    floz: { label: 'fl oz',      toMl: 29.5735        },
    cup:  { label: 'taza',       toMl: 236.588        },
    pt:   { label: 'pt',         toMl: 473.176        }, // pinta
    qt:   { label: 'qt',         toMl: 946.353        }, // cuarto de galón
    ml:   { label: 'ml',         toMl: 1              },
    l:    { label: 'l',          toMl: 1000           }
};

// ─── Weight units ──────────────────────────────────────────────────

/**
 * Mapping of weight unit keys to their Spanish label and grams factor.
 *
 * @type {Record<string, { label: string, toG: number }>}
 */
const WEIGHT_UNITS = {
    g:   { label: 'g',  toG: 1        },
    kg:  { label: 'kg', toG: 1000     },
    oz:  { label: 'oz', toG: 28.3495  },
    lb:  { label: 'lb', toG: 453.592  }
};

// ─── Unit type checks ─────────────────────────────────────────────

/**
 * Returns true if the given unit key belongs to a volume unit.
 *
 * @param {string} unitKey - The unit identifier (e.g., "tsp", "ml").
 * @returns {boolean}
 */
function isVolumeUnit(unitKey) {
    return unitKey in VOLUME_UNITS;
}

/**
 * Returns true if the given unit key belongs to a weight unit.
 *
 * @param {string} unitKey - The unit identifier (e.g., "g", "oz").
 * @returns {boolean}
 */
function isWeightUnit(unitKey) {
    return unitKey in WEIGHT_UNITS;
}

// ─── Conversion function ──────────────────────────────────────────

/**
 * Converts a numeric value from one unit to another within the same
 * measurement category (volume or weight).
 *
 * Conversion proceeds through an intermediate base:
 *   volume → mL → target,  weight → g → target.
 *
 * Results are rounded to 4 significant digits.
 *
 * @param {number} value - The numeric amount to convert.
 * @param {string} fromUnit - Source unit key (e.g., "cup", "oz").
 * @param {string} toUnit - Destination unit key (e.g., "ml", "g").
 * @returns {number} The converted value, rounded to 4 significant digits.
 * @throws {Error} If mixing volume and weight units.
 */
function convertUnit(value, fromUnit, toUnit) {
    const fromVolume = isVolumeUnit(fromUnit);
    const fromWeight = isWeightUnit(fromUnit);

    // Reject unknown units or mixed-category conversions
    if (!fromVolume && !fromWeight) {
        throw new Error(`Unidad desconocida: "${fromUnit}"`);
    }
    if (fromVolume !== isVolumeUnit(toUnit)) {
        throw new Error(
            'No se pueden convertir unidades de volumen a peso directamente. Necesitas la densidad del ingrediente.'
        );
    }

    // Same unit → no-op (already the right value)
    if (fromUnit === toUnit) return roundToSignificantDigits(value, 4);

    let intermediate;

    if (fromVolume) {
        const fromFactor = VOLUME_UNITS[fromUnit].toMl;
        const toFactor   = VOLUME_UNITS[toUnit].toMl;
        intermediate     = value * fromFactor / toFactor;
    } else {
        const fromFactor = WEIGHT_UNITS[fromUnit].toG;
        const toFactor   = WEIGHT_UNITS[toUnit].toG;
        intermediate     = value * fromFactor / toFactor;
    }

    return roundToSignificantDigits(intermediate, 4);
}

// ─── Exports ──────────────────────────────────────────────────────

export {
    VOLUME_UNITS,
    WEIGHT_UNITS,
    convertUnit,
    isVolumeUnit,
    isWeightUnit,
    roundToSignificantDigits
};

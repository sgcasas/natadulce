import React, { useState } from 'react';
import {
  VOLUME_UNITS,
  WEIGHT_UNITS,
  convertUnit,
  isVolumeUnit,
  isWeightUnit,
} from '../utils/conversions';

const ALL_UNITS = [
  ...Object.entries(VOLUME_UNITS).map(([key, { label }]) => ({ key, label, type: 'volumen' })),
  ...Object.entries(WEIGHT_UNITS).map(([key, { label }]) => ({ key, label, type: 'peso' })),
];

const CATEGORY_LABELS = {
  volumen: 'Unidades de Volumen',
  peso: 'Unidades de Peso',
};

export default function UnitConverter() {
  const [valueStr, setValueStr] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');

  // ---- helpers ----

  const getFilteredUnits = (cat) => ALL_UNITS.filter((u) => u.type === cat);

  const handleFromUnitChange = (e) => {
    const newKey = e.target.value;
    setFromUnit(newKey);

    if (!newKey) {
      setCategory('');
      // If destination is outside the current filter, reset it
      if (toUnit) {
        setToUnit('');
      }
      clearResult();
      return;
    }

    const newCategory = isVolumeUnit(newKey) ? 'volumen' : 'peso';
    setCategory(newCategory);

    // Auto-reset destination if it belongs to the wrong category
    if (toUnit) {
      if ((newCategory === 'volumen' && isWeightUnit(toUnit)) || (newCategory === 'peso' && isVolumeUnit(toUnit))) {
        setToUnit('');
      }
    }

    clearResult();
  };

  const handleValueChange = (e) => {
    setValueStr(e.target.value);
    clearResult();
  };

  const handleToUnitChange = (e) => {
    setToUnit(e.target.value);
    clearResult();
  };

  const clearResult = () => {
    setResult(null);
    setError('');
  };

  // ---- conversion logic ----

  const handleConvert = (e) => {
    e.preventDefault();
    clearResult();

    // --- validation ---
    if (!valueStr.trim()) {
      setError('Por favor ingresa un valor numérico.');
      return;
    }

    const numValue = Number(valueStr);
    if (isNaN(numValue)) {
      setError('El valor debe ser un número válido.');
      return;
    }

    if (numValue < 0) {
      setError('El valor no puede ser negativo.');
      return;
    }

    if (!fromUnit) {
      setError('Por favor selecciona una unidad original.');
      return;
    }

    if (!toUnit) {
      setError('Por favor selecciona una unidad destino.');
      return;
    }

    // --- convert ---
    try {
      const converted = convertUnit(numValue, fromUnit, toUnit);
      setResult(converted);
    } catch (err) {
      setError(err.message);
    }
  };

  // ---- render lists ----

  const filteredUnits = category ? getFilteredUnits(category) : ALL_UNITS;

  return (
    <div className="unit-converter">
      <h2 className="unit-converter__title">Convertidor de Unidades</h2>

      <form className="unit-converter__form" onSubmit={handleConvert}>
        {/* Value input */}
        <div className="unit-converter__field">
          <label htmlFor="converter-value" className="unit-converter__label">
            Valor
          </label>
          <input
            id="converter-value"
            type="text"
            className="unit-converter__input"
            placeholder="Ingresa un número"
            value={valueStr}
            onChange={handleValueChange}
          />
        </div>

        {/* From unit */}
        <div className="unit-converter__field">
          <label htmlFor="converter-from" className="unit-converter__label">
            Unidad original
          </label>
          <select
            id="converter-from"
            className="unit-converter__select"
            value={fromUnit}
            onChange={handleFromUnitChange}
          >
            <option value="">-- Selecciona --</option>
            {Object.entries(CATEGORY_LABELS).map(([catKey, catLabel]) => (
              <optgroup key={catKey} label={catLabel}>
                {getFilteredUnits(catKey).map((u) => (
                  <option key={u.key} value={u.key}>
                    {u.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {/* To unit */}
        <div className="unit-converter__field">
          <label htmlFor="converter-to" className="unit-converter__label">
            Unidad destino
          </label>
          <select
            id="converter-to"
            className="unit-converter__select"
            value={toUnit}
            onChange={handleToUnitChange}
            disabled={!fromUnit}
          >
            <option value="">-- Selecciona --</option>
            {filteredUnits.map((u) => (
              <option key={u.key} value={u.key}>
                {u.label}
              </option>
            ))}
          </select>
        </div>

        {/* Convert button */}
        <button type="submit" className="unit-converter__button">
          Convertir
        </button>
      </form>

      {/* Error display */}
      {error && <p className="unit-converter__error">{error}</p>}

      {/* Result display */}
      {result !== null && (
        <div className="unit-converter__result">
          <span className="unit-converter__result-value">{result}</span>
          <span className="unit-converter__result-label">
            {' '}
            {ALL_UNITS.find((u) => u.key === toUnit)?.label ?? toUnit}
          </span>
        </div>
      )}
    </div>
  );
}

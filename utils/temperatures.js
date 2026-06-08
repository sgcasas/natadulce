/**
 * BakingHelper — Oven temperatures (named in Spanish) and conversion utilities.
 */

/**
 * @typedef {Object} OvenTemp
 * @property {string} name - Human-readable temperature level (Spanish).
 * @property {number} celsius - Temperature in degrees Celsius.
 * @property {number} fahrenheit - Temperature in degrees Fahrenheit.
 */

/**
 * Named oven temperatures ordered from lowest to highest.
 * @type {OvenTemp[]}
 */
export const OVEN_TEMPERATURES = [
  { name: 'Muy baja', celsius: 120, fahrenheit: 250 },
  { name: 'Baja', celsius: 150, fahrenheit: 300 },
  { name: 'Media-baja', celsius: 160, fahrenheit: 325 },
  { name: 'Media', celsius: 175, fahrenheit: 350 },
  { name: 'Media-alta', celsius: 190, fahrenheit: 375 },
  { name: 'Alta', celsius: 200, fahrenheit: 400 },
  { name: 'Muy alta', celsius: 220, fahrenheit: 425 },
  { name: 'Extremadamente alta', celsius: 230, fahrenheit: 450 },
  { name: 'Grill/Broil', celsius: 260, fahrenheit: 500 },
];

/**
 * Convert Celsius to Fahrenheit.
 * @param {number} c - Temperature in degrees Celsius.
 * @returns {number} Temperature in degrees Fahrenheit.
 */
export function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

/**
 * Convert Fahrenheit to Celsius.
 * @param {number} f - Temperature in degrees Fahrenheit.
 * @returns {number} Temperature in degrees Celsius.
 */
export function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}

/**
 * Convert Celsius to Kelvin.
 * @param {number} c - Temperature in degrees Celsius.
 * @returns {number} Temperature in Kelvin.
 */
export function celsiusToKelvin(c) {
  return c + 273.15;
}

/**
 * Convert Kelvin to Celsius.
 * @param {number} k - Temperature in Kelvin.
 * @returns {number} Temperature in degrees Celsius.
 */
export function kelvinToCelsius(k) {
  return k - 273.15;
}

/**
 * Find the closest named oven temperature to a given Celsius value.
 * Returns null if the nearest match is more than 40 °C away.
 * @param {number} celsius - Temperature in degrees Celsius.
 * @returns {OvenTemp|null} The nearest oven temperature entry, or null.
 */
function findClosestOvenTemp(celsius) {
  let closest = null;
  let minDiff = Infinity;

  for (const temp of OVEN_TEMPERATURES) {
    const diff = Math.abs(temp.celsius - celsius);
    if (diff < minDiff) {
      minDiff = diff;
      closest = temp;
    }
  }

  return minDiff <= 40 ? closest : null;
}

/**
 * Convert a temperature value between Celsius ("C"), Fahrenheit ("F"), and Kelvin ("K").
 * Also finds the closest named oven temperature when available.
 * @param {number} value - The numeric temperature to convert.
 * @param {"C"|"F"|"K"} fromScale - Source scale.
 * @param {"C"|"F"|"K"} toScale - Target scale.
 * @returns {{ result: number, closestOvenTemp: OvenTemp|null }} Converted value and nearest named temperature.
 */
export function convertTemperature(value, fromScale, toScale) {
  // Normalize everything to Celsius first
  let celsius;
  switch (fromScale.toUpperCase()) {
    case 'C':
      celsius = value;
      break;
    case 'F':
      celsius = fahrenheitToCelsius(value);
      break;
    case 'K':
      celsius = kelvinToCelsius(value);
      break;
    default:
      throw new Error(`Unknown scale: ${fromScale}. Expected "C", "F", or "K".`);
  }

  // Convert from Celsius to the target scale
  let result;
  switch (toScale.toUpperCase()) {
    case 'C':
      result = celsius;
      break;
    case 'F':
      result = celsiusToFahrenheit(celsius);
      break;
    case 'K':
      result = celsiusToKelvin(celsius);
      break;
    default:
      throw new Error(`Unknown scale: ${toScale}. Expected "C", "F", or "K".`);
  }

  // Round to 1 decimal place
  result = Math.round(result * 10) / 10;

  return {
    result,
    closestOvenTemp: findClosestOvenTemp(celsius),
  };
}

/**
 * Format a temperature value with the appropriate unit symbol.
 * @param {number} value - The numeric temperature.
 * @param {"C"|"F"|"K"} scale - The temperature scale.
 * @returns {string} Formatted string (e.g. "23.5°C", "74.3°F", "296.6 K").
 */
export function formatTemperature(value, scale) {
  const rounded = Math.round(value * 10) / 10;

  switch (scale.toUpperCase()) {
    case 'C':
      return `${rounded}°C`;
    case 'F':
      return `${rounded}°F`;
    case 'K':
      return `${rounded} K`;
    default:
      throw new Error(`Unknown scale: ${scale}. Expected "C", "F", or "K".`);
  }
}

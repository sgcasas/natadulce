import React, { useState } from 'react';
import { convertTemperature, formatTemperature } from '../../utils/temperatures';

const SCALES = [
  { key: 'C', label: 'Celsius' },
  { key: 'F', label: 'Fahrenheit' },
  { key: 'K', label: 'Kelvin' },
];

export default function TemperatureConverter() {
  const [valueStr, setValueStr] = useState('');
  const [fromScale, setFromScale] = useState('C');
  const [results, setResults] = useState(null);
  const [closestOvenTemp, setClosestOvenTemp] = useState(null);
  const [error, setError] = useState('');

  const handleValueChange = (e) => {
    setValueStr(e.target.value);
    clearResult();
  };

  const handleScaleChange = (e) => {
    setFromScale(e.target.value);
    clearResult();
  };

  const clearResult = () => {
    setResults(null);
    setClosestOvenTemp(null);
    setError('');
  };

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

    // Calculate absolute zero for the selected scale
    let absoluteZero;
    switch (fromScale) {
      case 'C':
        absoluteZero = -273.15;
        break;
      case 'F':
        absoluteZero = -459.67;
        break;
      case 'K':
        absoluteZero = 0;
        break;
      default:
        absoluteZero = -273.15;
    }

    if (numValue < absoluteZero) {
      setError(`La temperatura no puede ser menor al cero absoluto (${formatTemperature(absoluteZero, fromScale)}).`);
      return;
    }

    // --- convert to all three scales ---
    try {
      const celsius = convertTemperature(numValue, fromScale, 'C');
      const fahrenheit = convertTemperature(numValue, fromScale, 'F');
      const kelvin = convertTemperature(numValue, fromScale, 'K');

      setResults({
        celsius: formatTemperature(celsius.result, 'C'),
        fahrenheit: formatTemperature(fahrenheit.result, 'F'),
        kelvin: formatTemperature(kelvin.result, 'K'),
      });

      // Use the celsius conversion to find closest oven temp
      setClosestOvenTemp(celsius.closestOvenTemp);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="temp-converter">
      <h2 className="temp-converter__title">Conversor de Temperatura</h2>

      <form className="temp-converter__form" onSubmit={handleConvert}>
        {/* Value input */}
        <div className="temp-converter__field">
          <label htmlFor="temp-value" className="temp-converter__label">
            Valor
          </label>
          <input
            id="temp-value"
            type="number"
            step="any"
            className="temp-converter__input"
            placeholder="Ingresa una temperatura"
            value={valueStr}
            onChange={handleValueChange}
          />
        </div>

        {/* Scale selection - radio buttons */}
        <fieldset className="temp-converter__scale-fieldset">
          <legend className="temp-converter__label">Escala original</legend>
          {SCALES.map((scale) => (
            <label key={scale.key} className="temp-converter__scale-option">
              <input
                type="radio"
                name="fromScale"
                value={scale.key}
                checked={fromScale === scale.key}
                onChange={handleScaleChange}
              />
              {scale.label}
            </label>
          ))}
        </fieldset>

        {/* Convert button */}
        <button type="submit" className="temp-converter__button">
          Convertir
        </button>
      </form>

      {/* Error display */}
      {error && <p className="temp-converter__error">{error}</p>}

      {/* Results display - all three scales */}
      {results && (
        <div className="temp-converter__results">
          <h3 className="temp-converter__results-title">Resultados</h3>
          <div className="temp-converter__result-row">
            <span className="temp-converter__result-scale">Celsius:</span>
            <span className="temp-converter__result-value">{results.celsius}</span>
          </div>
          <div className="temp-converter__result-row">
            <span className="temp-converter__result-scale">Fahrenheit:</span>
            <span className="temp-converter__result-value">{results.fahrenheit}</span>
          </div>
          <div className="temp-converter__result-row">
            <span className="temp-converter__result-scale">Kelvin:</span>
            <span className="temp-converter__result-value">{results.kelvin}</span>
          </div>
        </div>
      )}

      {/* Closest oven temperature match */}
      {results && (
        <div className="temp-converter__oven">
          <h3 className="temp-converter__results-title">Ajuste del Horno</h3>
          {closestOvenTemp ? (
            <div className="temp-converter__oven-match">
              <span className="temp-converter__oven-name">{closestOvenTemp.name}</span>
              <span className="temp-converter__oven-values">
                ({formatTemperature(closestOvenTemp.celsius, 'C')} /{' '}
                {formatTemperature(closestOvenTemp.fahrenheit, 'F')})
              </span>
            </div>
          ) : (
            <p className="temp-converter__oven-no-match">
              Esta temperatura no corresponde a un ajuste estándar de horno.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

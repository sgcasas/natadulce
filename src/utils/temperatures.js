const OVEN_NAMES = [
  { name: 'Muy bajo', celsius: 120 },
  { name: 'Bajo', celsius: 150 },
  { name: 'Moderado-bajo', celsius: 160 },
  { name: 'Moderado', celsius: 175 },
  { name: 'Moderado-alto', celsius: 190 },
  { name: 'Caliente', celsius: 200 },
  { name: 'Muy caliente', celsius: 220 },
  { name: 'Extremadamente caliente', celsius: 230 },
  { name: 'Gratinar', celsius: 260 },
];

export function convertTemperature(value, from, to) {
  let celsius;
  if (from === 'C') celsius = value;
  else if (from === 'F') celsius = (value - 32) * 5 / 9;
  else if (from === 'K') celsius = value - 273.15;

  if (to === 'C') return celsius;
  if (to === 'F') return celsius * 9 / 5 + 32;
  if (to === 'K') return celsius + 273.15;
}

export function getClosestOvenName(celsius) {
  return OVEN_NAMES.reduce((prev, curr) =>
    Math.abs(curr.celsius - celsius) < Math.abs(prev.celsius - celsius) ? curr : prev
  ).name;
}

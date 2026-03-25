export const COLORS = {
  white: '#ffffff',
  black: '#000000',
  woodsmoke: '#0a0b0b',
  mineShaft: '#3c3c3c',
  capeCod: '#393b3c',
  fiord: '#45526e',
  boulder: '#747474',
  melrose: '#b4a9ff',
  bittersweet: '#ff7575',
  heliotrope: '#dc5dfc',
  blueMarguerite: '#6a5dc2',
  cornflowerBlue: '#67a5eb',

  white25: 'rgba(255, 255, 255, 0.25)',
  white33: 'rgba(255, 255, 255, 0.33)',
  white50: 'rgba(255, 255, 255, 0.5)',
  white70: 'rgba(255, 255, 255, 0.7)',
  white80: 'rgba(255, 255, 255, 0.8)',

  black40: 'rgba(0, 0, 0, 0.4)',
  woodsmoke50: 'rgba(10, 11, 11, 0.5)',

  bgGradientStart: 'rgb(10, 25, 45)',
  bgGradientMiddle: 'rgb(37, 43, 62)',
  bgGradientEnd: 'rgb(57, 57, 75)',
} as const;

export type ColorName = keyof typeof COLORS;

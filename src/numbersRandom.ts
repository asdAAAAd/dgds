export function twoNumbersRandom(): { xPosition: number; yPosition: number } {
  let xPosition = Math.random() * 900;
  let yPosition = Math.random() * 600;

  xPosition = Math.round(xPosition)
  yPosition = Math.round(yPosition)

  return { xPosition, yPosition };
}

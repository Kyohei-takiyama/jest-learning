export class ZeroDivisorError extends Error {}

export function divide(a: number, b: number): number {
  if (b === 0) {
    throw new ZeroDivisorError("0で割ることはできません");
  }
  return a / b;
}

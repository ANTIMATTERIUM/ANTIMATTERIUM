export const C = 299792458;

export function annihilationJoulesFromAntimatterKg(antimatterKg) {
  if (!Number.isFinite(antimatterKg) || antimatterKg < 0) {
    throw new Error("antimatterKg must be a non-negative finite number");
  }
  return 2 * antimatterKg * C * C;
}

export function antimatterKgForJoules(joules) {
  if (!Number.isFinite(joules) || joules < 0) {
    throw new Error("joules must be a non-negative finite number");
  }
  return joules / (2 * C * C);
}

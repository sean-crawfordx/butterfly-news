// Checks if a property is an object that is not null

export function isNonNullObject(
  value: unknown,
): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

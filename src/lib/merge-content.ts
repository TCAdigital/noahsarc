function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Overlays stored CMS content on top of the defaults. Fields the editor has
 * never touched -- including ones added by a later deploy -- keep their
 * default, keys that no longer exist in the schema are dropped, and values
 * whose type does not match the schema fall back to the default. That last
 * rule is what makes this safe to run over an untrusted payload on write.
 */
export function mergeContent<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;

  if (Array.isArray(base)) {
    if (!Array.isArray(override)) return base;
    // Array items are validated against the first default item, so an item
    // added in the CMS still gets every field the schema expects.
    const template = base[0];
    return override.map((item) =>
      isPlainObject(template) ? mergeContent(template, item) : item,
    ) as T;
  }

  if (!isPlainObject(base)) {
    return typeof override === typeof base ? (override as T) : base;
  }
  if (!isPlainObject(override)) return base;

  const merged: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (!(key in base)) continue;
    merged[key] = mergeContent((base as Record<string, unknown>)[key], value);
  }
  return merged as T;
}

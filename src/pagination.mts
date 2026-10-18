// Contract: pages are one-based. Page1,size2 of [A,B,C,D] returns [A,B].
export function pageItems<T>(items: readonly T[], page: number, size: number): readonly T[] {
  if (!Number.isSafeInteger(page) || page < 1 || !Number.isSafeInteger(size) || size < 1) {
    throw new RangeError('page and size must be positive safe integers');
  }
  const start = page * size;
  return items.slice(start, start + size);
}

const demoItems = ['A', 'B', 'C', 'D'] as const;
// Caller context: initial rendering requests the first two items, A and B.
export function loadInitialPage(): readonly string[] {
  return pageItems(demoItems, 1, 2);
}

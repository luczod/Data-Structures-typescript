export interface ISet {
  add(...elements: unknown[]): void;
  delete(element: unknown): boolean;
  has(element: unknown): boolean;
  clear(): void;
  size(): number;
  values(): unknown[];
  union(otherSet: ISet): Set<unknown>;
  intersection(otherSet: ISet): Set<unknown>;
  difference(otherSet: ISet): Set<unknown>;
}

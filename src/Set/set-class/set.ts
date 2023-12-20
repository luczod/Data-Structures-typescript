export interface ISet {
  add(...elements: unknown[]): void;
  delete(element: unknown): boolean;
  has(element: unknown): boolean;
  clear(): void;
  size(): number;
  values(): unknown[];
  union(otherSet: ISet): ISet;
  intersection(otherSet: ISet): ISet;
  difference(otherSet: ISet): ISet;
}

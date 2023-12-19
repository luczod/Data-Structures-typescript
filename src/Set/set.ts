import { SetCls } from './set-class';

export interface ISet {
  add(...elements: unknown[]): void;
  delete(element: unknown): boolean;
  has(element: unknown): boolean;
  clear(): void;
  size(): number;
  values(): unknown[];
  union(otherSet: ISet): Set<unknown>;
}

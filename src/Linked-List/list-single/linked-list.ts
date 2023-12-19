export interface ILinkedList {
  push(element: unknown): void;
  insert(element: unknown, index: number): boolean;
  getElementAt(index: number): unknown;
  remove(element: unknown): unknown;
  indexOF(element: unknown): number;
  removeAt(index: number): unknown;
  getHead(): unknown;
  isEmpty(): boolean;
  size(): number;
}

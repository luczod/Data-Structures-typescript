export interface ITree {
  insert(key: unknown): boolean;
  search(key: unknown): boolean;
  inOrderTraverse(callback: (key: unknown) => any): void;
  preOrderTraverse(callback: (key: unknown) => any): void;
  postOrderTraverse(callback: (key: unknown) => any): void;
  min(): unknown;
  max(): unknown;
  remove(key: unknown): unknown;
  isEmpty(): boolean;
  size(): number;
}

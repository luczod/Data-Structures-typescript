export interface ITree {
  insert(key: unknown): boolean;
  search(key: unknown): boolean;
  inOrderTraverse(): void;
  preOrderTraverse(): void;
  postOrderTraverse(): void;
  min(): unknown;
  max(): unknown;
  remove(key: unknown): unknown;
  isEmpty(): boolean;
  size(): number;
}

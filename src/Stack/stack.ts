export interface IStack {
  push(element: unknown): void;
  pop(): unknown;
  peek(): unknown;
  isEmpty(): boolean;
  clear(): void;
  size(): number;
}

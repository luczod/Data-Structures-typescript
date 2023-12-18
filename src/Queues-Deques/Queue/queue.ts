export interface IQueue {
  enqueue(element: unknown): void;
  dequeue(): unknown;
  peek(): unknown;
  isEmpty(): boolean;
  size(): number;
}

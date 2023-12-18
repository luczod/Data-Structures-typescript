/* In computer science, a common application of a deque is in storing a list of operations to undo actions (undo).
Whenever a user performs an operation in the software, a push This operation will be done on the deque (exactly like on a stack).
When the user clicks the Undo button, a pop operation will be performed on the deque, which means that this operation will
be removed from the Final. After a predefined number of operations, the most
old ones will be removed from the front of the deck. How does deque implement the
principles of both FIFO and LIFO, we can also say that the
deque combines the queue and stack data structures. */

export interface IDeque {
  addFront(element: unknown): void;
  addBack(element: unknown): void;
  removeFront(): unknown;
  removeBack(): unknown;
  peekFront(): unknown;
  peekBack(): unknown;
  isEmpty(): boolean;
  size(): number;
}

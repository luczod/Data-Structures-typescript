declare global {
  interface Array<T> {
    removeFirstPosition(): T[];
    reIndex<T>(myArray: []): T[];
    insertFirstPosition(value: number): void;
  }
}

/* namespace ArrayExtensions {
  export interface Array<T> {
    removeFirstPosition(): T[];
    reIndex<T>(myArray: []): T[];
  }
} */

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}

export enum BalanceFactor {
  UNBALANCED_RIGHT = 1,
  SLIGHTLY_UNBALANCED_RIGHT = 2,
  BALANCED = 3,
  SLIGHTLY_UNBALANCED_LEFT = 4,
  UNBALANCED_LEFT = 5,
}

export enum Colors {
  RED = 0,
  BLACK = 1,
}

export type TEqualsFunction<T> = (a: T, b: T) => boolean;
export type TCompareFunction<T> = (a: T, b: T) => number;

export enum Compare {
  LESS_THAN = -1,
  BIGGER_THAN = 1,
  EQUALS = 0,
}
export type TEqualsFunction<T> = (a: T, b: T) => boolean;
export type TCompareFunction<T> = (a: T, b: T) => number;

interface IDictionaryCls {
  set(key: unknown, value: unknown): boolean;
  remove(key: unknown): boolean;
  hasKey(key: unknown): boolean;
  get(key: unknown): unknown;
  clear(): void;
  size(): number;
  isEmpty(): boolean;
  keys(): unknown;
  values(): unknown[];
  keyValues(): unknown[];
  // like Array.every()
  forEach(callBackFn: (key: unknown, value?: unknown) => boolean): void;
}

export function minCoinChange(coins: number[], amount: number) {
  const cache: Array<number[]> = []; // memorization

  const makeChange = (amount: number): number[] => {
    if (amount < 0) {
      return [];
    }

    if (cache[amount]) {
      return cache[amount];
    }

    let min: number[] = [];
    let newMin!: number[];
    let newAmount: number;

    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      newAmount = amount - coin;

      if (newAmount >= 0) {
        newMin = makeChange(newAmount);
      }

      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin);
        // console.log('new Min ' + min + ' for ' + amount);
      }
    }

    return (cache[amount] = min);
  };

  return makeChange(amount);
}

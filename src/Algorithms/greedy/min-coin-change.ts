export function minCoinChangeGreedy(coins: number[], amount: number) {
  const change: number[] = [];
  let total = 0;

  for (let i = coins.length; i >= 0; i--) {
    const coin = coins[i];
    //from largest to smallest
    while (total + coin <= amount) {
      change.push(coin);
      total += coin;
    }
  }

  return change;
}

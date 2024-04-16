import { Tokens } from "./tokens";

export const tokenDecimals: { [key in Tokens]: number } = {
  [Tokens.Moon]: 18,
  [Tokens.USDC]: 6,
  [Tokens.USDCE]: 6,
  [Tokens.WETH]: 18,
  [Tokens.WBTC]: 8,
  [Tokens.USDT]: 6,
  [Tokens.SNX]: 18,
  [Tokens.WSTETH]: 18,
  [Tokens.DAI]: 18,
};

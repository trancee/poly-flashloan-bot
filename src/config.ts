import { ethers } from "ethers";
import { erc20Address } from "./constrants/addresses";

//  fixed thresholds for buying and selling
export const threshold = 0.03;

// interval of price check (ms)
export const interval = 10 * 1000;

// amount of DAI token trading per a single buy/sell action
export const baseTradingAmount = ethers.utils.parseUnits("3.0", 18);

export const chainId = 137;

export const provider = new ethers.providers.JsonRpcProvider(
  process.env.ALCHEMY_POLYGON_RPC_URL
);

export const explorerURL = "https://polygonscan.com";

type ERC20Map = { [erc20: string]: string };

// Token pair the bot trading
export const baseToken = erc20Address.USDC;
export const tradingTokens: ERC20Map = {
  DAI: erc20Address.DAI,
  WMATIC: erc20Address.WMATIC,
  USDT: erc20Address.USDT,
  WETH: erc20Address.WETH,
};

export const flashloanAddress = "0xe43A0003955f8745c77A2A987Afa316D6B9828B3";

export const protocols =
  "POLYGON_SUSHISWAP,POLYGON_QUICKSWAP,POLYGON_APESWAP,POLYGON_JETSWAP,POLYGON_WAULTSWAP";

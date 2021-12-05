import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
import { checkArbitrage } from "./inchPrice";
import { baseToken, interval, tradingTokens } from "./config";
import { flashloan } from "./flashloan";
require("log-timestamp");

export const main = async () => {
  setInterval(async () => {
    for (const tradingTokenName in tradingTokens) {
      const tradingToken = tradingTokens[tradingTokenName];
      // console.log("Checking arbitrage", tradingTokenName);
      const [isProfitable, firstRoutes, secondRoutes] = await checkArbitrage(
        baseToken,
        tradingToken,
        18
      );

      if (isProfitable) {
        console.log("Arbitrage detected", tradingTokenName);
        if (firstRoutes && secondRoutes) {
          await flashloan(baseToken, tradingToken, firstRoutes, secondRoutes);
        } else {
          console.log("No routes found", tradingTokenName);
        }
      }
    }
  }, interval);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

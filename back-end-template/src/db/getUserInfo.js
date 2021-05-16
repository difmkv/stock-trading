import { getUser } from "./getUser";
import { getCurrentSharePrice } from "./getCurrentSharePrice";

export const getUserInfo = async (stockHistory) => {
  const currentSharePrince = await getCurrentSharePrice(stockHistory);
  const { cashValue, numberOfSharesOwned } = await getUser();
  const sharesValue = currentSharePrince * numberOfSharesOwned;
  return {
    cashValue,
    numberOfSharesOwned,
    sharesValue,
  };
};

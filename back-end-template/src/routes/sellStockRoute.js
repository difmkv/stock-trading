import { getCurrentSharePrice, getUserInfo, sellStock } from "../db";

export const sellStockRoute = {
  method: "post",
  path: "/stock/sell",
  handler: async (req, res) => {
    const numberOfShares = Number(req.body.numberOfShares);
    const stockHistory = req.app.locals.stockHistory;
    const currentSharePrice = Number(await getCurrentSharePrice(stockHistory));
    const userInfo = await getUserInfo(stockHistory);
    const numberOfSharesOwned = Number(userInfo.numberOfSharesOwned);

    if (numberOfShares > numberOfSharesOwned) {
      return res
        .status(400)
        .json({ message: "User doesn't have that many shares" });
    }

    await sellStock(numberOfShares, currentSharePrice);
    const updatedUserInfo = await getUserInfo(stockHistory);

    res.status(200).json(updatedUserInfo);
  },
};

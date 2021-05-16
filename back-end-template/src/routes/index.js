import { getUserInfoRoute } from "./getUserInfoRoute";
import { getStockHistoryRoute } from "./getStockHistoryRoute";
import { buyStockRoute } from "./buyStockRoute";
import { sellStockRoute } from "./sellStockRoute";

export const routes = [
  getUserInfoRoute,
  getStockHistoryRoute,
  buyStockRoute,
  sellStockRoute,
];

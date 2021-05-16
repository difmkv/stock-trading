import { createRefreshStockPricesTasks } from "./createRefreshStockPricesTasks";

const SYMBOL = "TSLA";

export { scheduleTask } from "./scheduleTask";
export const tasks = [createRefreshStockPricesTasks(SYMBOL)];

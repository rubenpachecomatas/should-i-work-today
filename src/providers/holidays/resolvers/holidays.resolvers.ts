// Services
import { getHolidays } from "../services/holidays.services";

const holidaysResolver = async () => {
  const data = await getHolidays();

  return data;
};

export { holidaysResolver };

// Constants
import axios from "axios";
import {
  GET_HOLIDAYS_ENDPOINT,
  GET_HOLIDAYS_OPTIONS,
} from "./constants/holidays.services.constants";

const getHolidays = async () => {
  const data = await axios
    .get(GET_HOLIDAYS_ENDPOINT, GET_HOLIDAYS_OPTIONS)
    .then((response) => response.data?.holidays);

  return data;
};

export { getHolidays };

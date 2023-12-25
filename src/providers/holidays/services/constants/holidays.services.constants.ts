const GET_HOLIDAYS_ENDPOINT = "https://api.getfestivo.com/v2/holidays";
const GET_HOLIDAYS_OPTIONS = {
  params: {
    api_key: import.meta.env.VITE_HOLIDAYS_API_KEY,
    country: "ES",
    year: 2022,
  },
};

export { GET_HOLIDAYS_ENDPOINT, GET_HOLIDAYS_OPTIONS };

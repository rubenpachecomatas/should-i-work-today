export type HolidayType = {
  id: string;
  name: string;
  date: string;
  observed: string;
  substitute: boolean;
  start: string;
  end: string;
  type: string;
  public: boolean;
  country: string;
  subdivisions?: null[] | null;
};

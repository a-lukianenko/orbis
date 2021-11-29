import { getPreviousWeekDay } from "../getPreviousWeekDay";

describe("getPreviousWeekDay", () => {
  it("finds previous business day", () => {
    const actual = getPreviousWeekDay(new Date(2021, 10, 30));
    const expected = "2021-11-29";
    expect(actual).toBe(expected);
  });

  it("finds previous business day before weekend", () => {
    const actual = getPreviousWeekDay(new Date(2021, 10, 29));
    const expected = "2021-11-26";
    expect(actual).toBe(expected);
  });
});

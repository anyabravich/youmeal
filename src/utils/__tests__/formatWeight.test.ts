import { formatWeight } from "../formatWeight";

describe("formatWeight", () => {
  it("should format weight in grams when less than 1000", () => {
    expect(formatWeight(500)).toBe("500г.");
    expect(formatWeight(999)).toBe("999г.");
  });

  it("should format weight in kilograms when 1000 or more", () => {
    expect(formatWeight(1000)).toBe("1кг");
    expect(formatWeight(1500)).toBe("1.5кг");
    expect(formatWeight(2000)).toBe("2кг");
    expect(formatWeight(1250)).toBe("1.25кг");
  });
});

import { renderHook, act } from "@testing-library/react";
import { useBasket } from "../useBasket";
import { IBasketItem } from "../../../../../types/basket";
import { ProductCategory } from "../../../../../types";

const mockBasketItems: IBasketItem[] = [
  {
    id: 1,
    title: "Test Item",
    price: 100,
    quantity: 2,
    image: "test.jpg",
    weight: 200,
    category: ProductCategory.BURGERS,
  },
  {
    id: 2,
    title: "Test Item 2",
    price: 50,
    quantity: 1,
    image: "test2.jpg",
    weight: 150,
    category: ProductCategory.SNACKS,
  },
];

describe("useBasket", () => {
  it("should initialize with closed basket", () => {
    const { result } = renderHook(() => useBasket(mockBasketItems));

    expect(result.current.isOpenBasket).toBe(false);
  });

  it("should toggle basket state", () => {
    const { result } = renderHook(() => useBasket(mockBasketItems));

    act(() => {
      result.current.toggleBasket();
    });

    expect(result.current.isOpenBasket).toBe(true);

    act(() => {
      result.current.toggleBasket();
    });

    expect(result.current.isOpenBasket).toBe(false);
  });

  it("should calculate total price correctly", () => {
    const { result } = renderHook(() => useBasket(mockBasketItems));

    // 100 * 2 + 50 * 1 = 250
    expect(result.current.totalPrice).toBe(250);
  });
});

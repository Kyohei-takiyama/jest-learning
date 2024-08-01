// tobe
it("数値のテスト", () => {
  expect(1 + 2).toBe(3);
});

it("文字列のテスト", () => {
  expect("Hello" + " " + "World").toBe("Hello World");
});

it("Biileanのテスト", () => {
  expect(true).toBe(true);
});

// toEqual ObjectとかArrayの比較に使う
it("オブジェクトのテスト", () => {
  expect({ name: "Taro" }).toEqual({ name: "Taro" });
});

it("配列のテスト", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

// not
it("1 + 2は5ではない", () => {
  expect(1 + 2).not.toBe(4);
});

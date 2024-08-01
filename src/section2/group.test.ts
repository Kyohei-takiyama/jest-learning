// Jestのグループ化に関するテスト
// describeはネストすることができる

describe("配列に関するテスト", () => {
  it("配列に要素を追加する", () => {
    const array: number[] = [];
    array.push(1);
    expect(array).toEqual([1]);
  });

  it("配列の長さが正しい", () => {
    const array: number[] = [1, 2, 3];
    expect(array.length).toBe(3);
  });

  describe("配列の検索に関するテスト", () => {
    it("配列に要素が含まれている", () => {
      const array: number[] = [1, 2, 3];
      expect(array).toContain(2);
    });

    it("配列に要素が含まれていない", () => {
      const array: number[] = [1, 2, 3];
      expect(array).not.toContain(4);
    });
  });
});

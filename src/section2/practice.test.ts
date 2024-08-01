/**
 * 【演習】
 *  1. `addItem`メソッドが、アイテムをリストに追加できることを確認するテストケース
 *  2. `removeItem`メソッドが、アイテムをリストから削除できることを確認するテストケース
 *  3. `removeItem`メソッドが、存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース
 */

import { ShoppingList } from "./practice";

describe("ShoppingListクラスのテスト", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  it("アイテムをリストに追加できる", () => {
    shoppingList.addItem("apple");
    expect(shoppingList.list).toContain("apple");
  });

  it("アイテムをリストから削除できる", () => {
    shoppingList.addItem("apple");
    shoppingList.addItem("banana");
    shoppingList.removeItem("apple");
    expect(shoppingList.list).not.toContain("apple");
  });

  it("存在しないアイテムの削除を試みたときにエラーをスローする", () => {
    const item = "apple";
    expect(() => shoppingList.removeItem(item)).toThrow(
      `アイテム: ${item} は存在しません`
    );
  });
});

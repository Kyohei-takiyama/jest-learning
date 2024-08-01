import { delay } from "./async_func";

it("delay関数のテスト", async () => {
  // 非同期の関数テストは、async/awaitを使う
  // その後に、expectで結果を検証する
  const result = await delay("Hello Jest", 1000);
  expect(result).toBe("Hello Jest");
});

it("delay関数のエラーテスト", async () => {
  // 非同期の関数テストは、try-catchを使う
  // その後にcatchでexpectでエラーメッセージを検証する
  try {
    const result = await delay("Hello Jest", -1000);
  } catch (e: any) {
    expect(e.message).toBe("timeは0以上で指定してください");
  }
});

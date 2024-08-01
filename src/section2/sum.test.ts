import { sum } from "./sum";

// it("1と2を足すと3になる", () => {
//   // tobeはmatcher関数
//   expect(sum(1, 2)).toBe(3);
// });

// it("1と-2を足すと3になる", () => {
//   // tobeはmatcher関数
//   expect(sum(1, -2)).toBe(-1);
// });

// パラメータ化テスト
it.each`
  a    | b     | expected
  ${1} | ${2}  | ${3}
  ${1} | ${-2} | ${-1}
`("sum($a, $b)は$expectedを返す", ({ a, b, expected }) => {
  expect(sum(a, b)).toBe(expected);
});

// TODO: 数値の配列を用意（任意の値でOK）
const number = [41, 11, 6, 29, 7]; // 例: [12, 5, 33, 18, 27]

// TODO: for または while を使い、合計・平均を算出して Console 出力
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i];
}
console.log(sum);
console.log(sum / number.length);

// TODO: 同配列から最小値・最大値を算出して Console 出力
let min = number[0];
let max = number[0];
for (let i = 0; i < number.length; i++) {
  if (number[i] < min) min = number[i];
  if (number[i] > max) max = number[i];
}
console.log(min, max);

// TODO: 一時変数の「初期化位置」「更新順序」の意図をコメントで説明
// 一時変数は、ループの外で初期化することで毎回同じ基準から計算できるようにしている。
// ループ内では、配列の値を順番に比較してから変数を更新する必要がある。


// TODO: do...while が適する場面を1行コメントで示す（例：最低1回は実行したい入力確認など）
// do...while は、条件に関係なく最低1回は処理を行いたい場面で使う。
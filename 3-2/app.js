// TODO: let / const を使い分けて、以下を各1つずつ宣言
// 数値 / 文字列 / 真偽値 / null / undefined / 配列 / オブジェクト
// TODO: 実行前に「予想される型」をコメントで書く

// 数値
let number = 100;

// 文字列
const string = "hello";

// 真偽値
let isOk = true;

// null
let user = null;

// undefined
let notSet = undefined;

// 配列
const numbers = [1, 2, 3];

// オブジェクト
const object = { name: "Seo" };

// TODO: typeof（配列は Array.isArray も）で実測結果を Console 出力

// 予想：number
console.log(typeof number);

// 予想：string
console.log(typeof string);

// 予想：boolean
console.log(typeof isOk);

// 予想：object
console.log(typeof user);

// 予想：undefined
console.log(typeof notSet);

// 予想：true
console.log(Array.isArray(numbers));

// 予想：object
console.log(typeof object);

// TODO: const で宣言したオブジェクトの『プロパティ変更』を行い、
//      変更できる理由（再代入とプロパティ変更の違い）をコメントで説明

// const で宣言した変数は、別のオブジェクトを再代入することはできない。
// オブジェクトの中身（プロパティ）を変更することは可能。
// const は「参照」を固定するだけで、中身を固定するわけではない。
object.name = "New Name";
console.log(object);

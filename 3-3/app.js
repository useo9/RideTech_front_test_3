// TODO: 数値 score を受け取り、'合格' / '追試' / '不合格' を返す関数 judgeIf(score) を作成
// 条件：80以上→合格、50〜79→追試、それ以外→不合格

function judgeIf(score) {
  if (score >= 80) {
    return "合格";
  } else if (score >= 50) {
    return "追試";
  } else {
    return "不合格";
  }
}

// TODO: 上と同じ判定を行う judgeSwitch(score) を作成（switch を用いる）

function judgeSwitch(score) {
  switch (true) {
    case score >= 80:
      return "合格";
    case score >= 50:
      return "追試";
    default:
      return "不合格";
  }
}

const scores = [90, 65, 40];

scores.forEach((score) => {
  console.log(score, judgeIf(score), judgeSwitch(score));
});

// TODO: 複数の score をテストし、両者の戻り値を Console 出力

console.log(judgeIf(90), judgeSwitch(90));
console.log(judgeIf(60), judgeSwitch(60));
console.log(judgeIf(30), judgeSwitch(30));

// TODO: 「範囲条件には if、固定値マッチには switch が向く」等、読みやすさの観点をコメントで述べる

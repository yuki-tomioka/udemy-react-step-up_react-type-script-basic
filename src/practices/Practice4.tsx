export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPrictice = () => calcTotalFee(1000);

  return (
    <div>
      <p>練習問題：　設定ファイルを触ってみる</p>
      <button onClick={onClickPrictice}>練習問題4を実行</button>
    </div>
  );
};

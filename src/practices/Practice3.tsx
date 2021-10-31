export const Practice3 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total.toString();
  };

  const onClickPrictice = () => {
    let total: number = 0;
    total = getTotalFee(1000); // わざとエラーにしている
    console.log(total);
  };

  return (
    <div>
      <p>練習問題：　引数の型指定</p>
      <button onClick={onClickPrictice}>練習問題3を実行</button>
    </div>
  );
};

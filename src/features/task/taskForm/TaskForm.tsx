import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import styles from "./TaskForm.module.scss";

//typeでInputs変数を用意する
type Inputs = {
  //taskTitleをstringに型を決める。（文字列）
  taskTitle: string;
};

export const TaskForm: React.FC = () => {
  //react-hook-formで用意されている関数で、使いたい関数を定義
  const { register, handleSubmit, reset } = useForm();
  //(data: Inputs)←taskTitleがdata型で渡される。
  //register（レジスター）として登録されたものに対してがdataとしてhandleCreateにわたされる
  const handleCreate = (data: Inputs) => {
    console.log(data);
    reset();
  };
  return (
    <div className={styles.root}>
      <form
        //handleSubmit（ハンドルサブミット）関数の中に16行目で定義した関数を渡す。
        //そうする事でevent.target.valueと定義しなくてもreact-hook-formでフォームでの入力・編集の処理を簡単に実装できる。
        onSubmit={handleSubmit(handleCreate)}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          //パラメータ（エラー）
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          //material-uiにreact-hook-formを追加する際に必要
          {...register("taskTitle")}
          //dataの中にtaskTitleといったものが渡される
          className={styles.text_field}
        />
      </form>
    </div>
  );
};

{
  /* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>; */
}

//↑Boxが毎回ついてくるこれなに

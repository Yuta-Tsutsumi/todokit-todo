import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  createTask,
  editTask,
  handleModalOpen,
  selectSelectedTask,
} from "../taskSlice";
import styles from "./TaskForm.module.scss";

//typeでInputs変数を用意する
type Inputs = {
  //taskTitleをstringに型を決める。（文字列）
  taskTitle: string;
};

type PropTypes = {
  edit?: boolean;
};

export const TaskForm: React.FC<PropTypes> = ({ edit }) => {
  const dispatch = useDispatch();
  const selectedTask = useSelector(selectSelectedTask);
  //react-hook-formで用意されている関数で、使いたい関数を定義
  const { register, handleSubmit, reset } = useForm();
  //(data: Inputs)←taskTitleがdata型で渡される。
  //register（レジスター）として登録されたものに対してがdataとしてhandleCreateにわたされる
  const handleCreate = (data: Inputs) => {
    // aaaと入力したものが想定通りだったら、下記のdata.taskTitleに反映され、画面に表示されるはず
    // しかし、現状は画面に反映されていない
    dispatch(createTask(data.taskTitle));
    reset();
  };
  const handleEdit = (data: Inputs) => {
    const sendData = { ...selectedTask, title: data.taskTitle };
    dispatch(editTask(sendData));
    dispatch(handleModalOpen(false));
    console.log(data);
  };
  return (
    <div className={styles.root}>
      <form
        //handleSubmit（ハンドルサブミット）関数の中に16行目で定義した関数を渡す。
        //そうする事でevent.target.valueと定義しなくてもreact-hook-formでフォームでの入力・編集の処理を簡単に実装できる。
        onSubmit={edit ? handleSubmit(handleEdit) : handleSubmit(handleCreate)}
        className={styles.form}
        noValidate
        autoComplete="off"
      >
        <input
          //パラメータ（エラー）
          id="outlined-basic"
          placeholder={edit ? "edit Task" : "New Task"}
          defaultValue={edit ? selectedTask.title : ""}
          type="text"
          {...register("taskTitle", { required: true })}
          name="taskTitle"
          className={styles.text_field}
        />
        {edit ? (
          <div className={styles.button_wrapper}>
            <button type="submit" className={styles.submit_button}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => dispatch(handleModalOpen(false))}
              className={styles.cancel_button}
            >
              Cancel
            </button>
          </div>
        ) : null}
      </form>
    </div>
  );
};

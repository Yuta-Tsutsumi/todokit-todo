import { Attachment, StarRate } from "@material-ui/icons";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState, AppThunk } from "../../app/store";
// import { fetchCount } from "./counterAPI";

interface TaskState {
  //taskが何個あるかを管理する
  idCount: number;
  //storeに保存するtaskの一覧
  tasks: { id: number; title: string; completed: boolean }[];
  //taskのtitleを編集する際にどのtaskが選択されているか
  selectedTask: { id: number; title: string; completed: boolean };
  //Modalを開くか閉じるかのフラグ
  isModalOpen: boolean;
}

const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: "Task A", completed: false }],
  selectedTask: { id: 0, title: "", completed: false },
  isModalOpen: false,
  // status: "idle",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    //taskの作成
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
    //Modalを開くか閉じるかのフラグ管理
    handleModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { createTask, handleModalOpen } = taskSlice.actions;

export const selectTask = (state: RootState): TaskState["tasks"] =>
  state.task.tasks;

export const selectIsModalOpen = (state: RootState): TaskState["isModalOpen"] =>
  state.task.isModalOpen;

export default taskSlice.reducer;

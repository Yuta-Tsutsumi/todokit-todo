import React from "react";
import { Header } from "./components/header/Header";
import { TaskForm } from "./features/task/taskForm/TaskForm";
import { TaskList } from "./features/task/taskList/TaskList";
import styles from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </div>
  );
};

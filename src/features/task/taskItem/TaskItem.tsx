import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import EventNoteIcon from "@material-ui/icons/EventNote";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./TaskItem.module.scss";

interface PropTypes {
  task: { id: number; title: string; completed: boolean };
}

export const TaskItem: React.FC<PropTypes> = ({ task }) => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <EventNoteIcon />
        <div className={styles.title_text}>{styles.title}</div>
      </div>
      <div className={styles.right_item}>
        <Checkbox
          //チェックボックス
          checked={task.completed}
          onClick={() => console.log(`check ${task.id}`)}
          className={styles.checkbox}
        />
        <button
          onClick={() => console.log(`edit ${task.id}`)}
          className={styles.edit_button}
        >
          <EventNoteIcon className={styles.icon} />
        </button>
        <button
          onClick={() => console.log(`delete ${task.id}`)}
          className={styles.delete_button}
        >
          <DeleteIcon className={styles.icon} />
        </button>
      </div>
    </div>
  );
};

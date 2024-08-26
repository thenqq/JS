import { useState } from "react";
// import classes from "./TaskComponent.module.css";
import "./TaskComponent.css";
import TaskMenuButtons from "./TaskMenuButtons";

const TaskComponent = ({ num, description, setTasks, taskIndex }) => {
  const editTask = () => {
    setTasks((prevVal) => {
      const findedTask = prevVal.find((task) => task.num === num);
      if (!findedTask) return;

      const filteredTasks = prevVal.filter((task) => task.num !== num);

      return [{ num, description: edit }, ...filteredTasks].sort(
        (a, b) => +a.num - +b.num
      );
    });
    setMode(null);
  };
  const deleteTask = () => {
    setTasks((prevVal) => {
      const filteredTasks = prevVal.filter((task) => task.num !== num);
      return filteredTasks;
    });
  };
  const doneTask = () => {
    setClassDecor((prevVal) => {
      return "taskDone";
    });
  };

  const buttonNames = {
    edit: "edit",
    delete: "delete",
    done: "done",
  };

  const [edit, setEdit] = useState(1);

  const [mode, setMode] = useState(null);

  const [classDecor, setClassDecor] = useState("task");

  return (
    <div className={classDecor}>
      {mode !== buttonNames.edit ? (
        <span id={num}>
          {taskIndex}. {description}
        </span>
      ) : (
        <textarea onChange={(event) => setEdit(event.target.value)} />
      )}
      <div className="buttons">
        {mode !== buttonNames.edit && mode !== buttonNames.done ? (
          <>
            <button
              onClick={() => {
                setMode(buttonNames.edit);
              }}
            >
              edit
            </button>
            <button onClick={deleteTask}>delete</button>
            <button
              onClick={() => {
                doneTask();
                setMode(buttonNames.done);
              }}
            >
              done
            </button>
          </>
        ) : mode === buttonNames.edit ? (
          <button onClick={editTask}>editDone</button>
        ) : (
          <button onClick={deleteTask}>clear</button>
        )}
      </div>
    </div>
  );
};

export default TaskComponent;

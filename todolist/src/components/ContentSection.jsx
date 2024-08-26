import { useState, useMemo, useEffect } from "react";
import TaskComponent from "./TaskComponent/TaskComponent";
import { tasks } from "../data.js";
import FilterComponent from "./FilterComponent/FilterComponent.jsx";

const defaultTasks = [
  { num: "1", description: "qwe" },
  { num: "2", description: "asd" },
  { num: "3", description: "zxc" },
];

let taskCounter = tasks.length + 1;

const ContentSection = () => {
  const addTask = () => {
    taskCounter++;
    setTasks((prevVal) => {
      prevVal.push({ num: `${taskCounter}`, description: String(edit) });
      return prevVal;
    });
    setAddMode("noAdd");
  };

  const [edit, setEdit] = useState(1);

  const [tasks, setTasks] = useState(defaultTasks);
  const [filterValue, setFilterValue] = useState("");

  const filteredTasks = useMemo(() => {
    if (!filterValue.length) return tasks;
    return tasks.filter((task) => task.description.includes(filterValue));
  }, [filterValue, tasks]);

  const [addMode, setAddMode] = useState("noAdd");

  return (
    <section>
      <FilterComponent
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      {filteredTasks?.map((task, index) => {
        return (
          <TaskComponent
            key={task.num}
            taskIndex={index + 1}
            num={task.num}
            description={task.description}
            setTasks={setTasks}
          />
        );
      })}

      {addMode === "Add" ? (
        <>
          <textarea
            onChange={(event) => setEdit(event.target.value)}
          ></textarea>
          <button onClick={addTask}>add task</button>
        </>
      ) : (
        <button
          onClick={() => {
            setAddMode("Add");
          }}
        >
          add new
        </button>
      )}
    </section>
  );
};
export default ContentSection;

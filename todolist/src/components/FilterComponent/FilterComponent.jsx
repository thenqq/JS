import { useState, memo } from "react";

const FilterComponent = ({ filterValue, setFilterValue }) => {
  // const [tempSave, setTempSave] = useState(props.tasks);
  // console.log(tempSave, "123");
  // const [isFilterActive, setFilterMode] = useState(0);
  // const filtFunc = (event) => {
  //   if (isFilterActive) {
  //     props.setTasks((prevVal) => {
  //       if (event.target.value.length > 0) {
  //         let result = prevVal
  //           .map((task) => {
  //             if (task.description.includes(event.target.value)) {
  //               return task;
  //             }
  //           })
  //           .filter((task) => task);
  //         console.log("prevVal");
  //         console.log(prevVal);
  //         console.log("tempSave");
  //         console.log(tempSave);

  //         return result;
  //       } else {
  //         setFilterMode(0);
  //         return tempSave;
  //       }
  //     });
  //   } else {
  //     setFilterMode(1);
  //     return;
  //   }
  // };

  return (
    <input
      value={filterValue}
      type="text"
      onInput={(event) => {
        setFilterValue(event.target.value);
      }}
    />
  );
};
export default FilterComponent;

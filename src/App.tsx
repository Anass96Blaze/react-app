// import Message from "./Message";
import { useState } from "react";

function App() {
  // const [tags, setTags] = useState(["happy", "cheerful"]);

  // const addClick = () => {
  //   // Add
  //   setTags([...tags, "exciting"]);
  // };

  // const updateClick = () => {
  //   // Update
  //   setTags(tags.map((tag) => (tag === "cheerful" ? "Happy Anass" : tag)));
  // };

  // const removeClick = () => {
  //   // Remove
  //   setTags(tags.filter((tag) => tag !== "happy"));
  // };

  const [bugs, setBugs] = useState([
    { title: "Bug1", isFixed: false },
    { title: "Bug2", isFixed: false },
  ]);

  // Update
  const handleClick = () => {
    setBugs(
      bugs.map((bug) =>
        bug.title === "Bug1" ? { ...bug, isFixed: true } : bug
      )
    );
  };

  return (
    <div>
      {/* <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
      <button onClick={addClick}>Add</button>
      <button onClick={updateClick}>Update</button>
      <button onClick={removeClick}>Remove</button> */}

      <ul>
        {bugs.map((bug, index) => (
          <li
            key={index}
          >{`The name bug is ${bug.title} the status is ${bug.isFixed}`}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;

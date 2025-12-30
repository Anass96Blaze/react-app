import { useState } from "react";
import Like from "./components/Like";

// import Alert from "./components/Alert";
// import Button from "./components/Button/";
// import ListGroup from "./components/ListGroup/";
// import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  const [isLiked, setIsLiked] = useState(false);

  const handleToggle = () => setIsLiked(!isLiked);

  console.log("Parent Anass");

  return (
    <>
      <Like isLiked={isLiked} onToggle={handleToggle} />
    </>
  );
}

export default App;

// let items = ["Casablanca", "Berkane", "Oujda", "Tanger", "Asila"];

// const handelSelectedItem = (item: string) => {
//   console.log(item);
// };

// const [alertVisible, setAlertVisible] = useState(false);

// return (
//   <div>
//     {alertVisible ? (
//       <Alert
//         onColseClick={() => {
//           setAlertVisible(false);
//         }}
//       >
//         My <span>Alert</span>
//       </Alert>
//     ) : null}

//     <Button
//       color="primary"
//       onClickButton={() => {
//         setAlertVisible(true);
//       }}
//     >
//       primary
//     </Button>
//   </div>
// );

// return (
//   <ListGroup
//     items={items}
//     heading="Cities"
//     onSelectedItem={handelSelectedItem}
//   />
// );

// return (
//   <div>
//     <Button
//       onClickButton={() => {
//         console.log("Test");
//       }}
//     >
//       My Button
//     </Button>
//   </div>
// );

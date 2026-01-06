import { useState } from "react";

// import Like from "./components/Like";

// import Alert from "./components/Alert";
// import Button from "./components/Button/";
// import ListGroup from "./components/ListGroup/";
// import { BsFillCalendarFill } from "react-icons/bs";

const Test = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    addressStreet: "",
    addressCity: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setVisibility] = useState(false);
  const [isApproved, setIsApproved] = useState(true);
  return;
};

export default Test;

// const [drink, setDrink] = useState({ title: "Coffe", price: 5 });

// const handleClick = () => {
//   setDrink({ ...drink, price: 7 });
// };

// return (
//   <div>
//     <h1>{drink.price}</h1>
//     <button onClick={handleClick}>Click Me</button>
//   </div>
// );

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

// const [isLiked, setIsLiked] = useState(false);

// const handleToggle = () => setIsLiked(!isLiked);

// console.log("Parent Anass");

// return (
//   <>
//     <Like isLiked={isLiked} onToggle={handleToggle} />
//   </>
// );

// let count = 0;

// console.log("Top function " + isVisible);
// const handleClick = () => {
//   setVisibility(!isVisible);
//   count++;
//   console.log(count);
// };

// console.log("Outside function " + isVisible);

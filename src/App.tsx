// // import Message from "./Message";
// import ListGroup from "./components/ListGroup";

// function App() {
//   let items = ["New York", "San Francisco", "London", "Michigan", "Tokyo"];

//   const handleSelectedItem = (item: string) => {
//     console.log(item);
//   };
//   // return <div><Message/></div>
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectedItem={handleSelectedItem}
//       />
//       {/* <ListGroup /> */}
//     </div>
//   );
// }
// export default App;

// -------------------------------------------------------------
// import Alert from "./components/Alert";

// const App = () => {
//   return (
//     <div>
//       <Alert>
//         Hello <i>world</i>
//       </Alert>
//     </div>
//   );
// };

// export default App;
// -------------------------------------------------------------
// import React from "react";
// import Exercise from "./components/Exercise";

// const App = () => {
//   return (
//     <div>
//       <Exercise>Click</Exercise>
//     </div>
//   );
// };

// export default App;
// -------------------------------------------------------------
import React, { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";

const App = () => {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
};

export default App;

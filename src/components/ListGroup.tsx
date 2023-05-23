import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectedItem: (item: string) => void;
}
// import { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectedItem }: Props) {
  // let selectedIndex = 0;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0]; //variable(selectedIndex)
  // arr[1]; //updater function
  // Event handler
  // const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // className="list-group-item active"
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
            // onClick={handleClick}
            // onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

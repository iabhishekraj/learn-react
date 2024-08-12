import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onHandleSelect: (item: string) => void;
}

function ListGroup({ items, heading, onHandleSelect }: Props) {
  const message = items.length === 0 ? <p>No data found</p> : null;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const itemClicked = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <h1>{heading}:</h1>
      {message}
      <ul>
        {items.map((item, index) => (
          <li
            className={index === selectedIndex ? "active" : ""}
            key={index}
            onClick={() => {
              itemClicked(index);
              onHandleSelect(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

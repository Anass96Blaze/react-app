import { useState } from "react";
import styled from "styled-components";

interface Props {
  items: String[];
  heading: String;
  onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {
  // items = [];
  let [selectedIndex, setSelectedIndex] = useState(0);
  // const handelClick = (event: MouseEvent) => console.log(event);

  const List = styled.ul`
    list-style: none;
    padding: 0;
  `;

  interface ListItemProps {
    active: boolean;
  }

  const ListItem = styled.li<ListItemProps>`
    paddig: 5px 0;
    background: ${(props) => (props.active ? "blue" : "none")};
  `;

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={selectedIndex === index ? true : false}
            key={item.toString()}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item.toString());
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;

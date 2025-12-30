import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface Props {
  isLiked: boolean;
  onToggle: () => void;
}

const Like = ({ isLiked, onToggle }: Props) => {
  console.log("Like is " + isLiked);

  return (
    <div onClick={onToggle} style={{ cursor: "pointer" }}>
      {isLiked ? <BsHeartFill color="red" size="40" /> : <BsHeart size="40" />}
    </div>
  );
};

export default Like;

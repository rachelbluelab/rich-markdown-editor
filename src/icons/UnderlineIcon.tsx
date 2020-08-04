import * as React from "react";
import { FiUnderline } from "react-icons/fi";

type IProps = {
  size?: string | number;
  color?: string;
};

function UnderlineIcon({ size, color }: IProps) {
  return (
    <span style={{ color: color }}>
      <FiUnderline size={size} />
    </span>
  );
}

export default UnderlineIcon;

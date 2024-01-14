/* eslint-disable react/display-name */
import { CheckIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";
import stylex from "@stylexjs/stylex";
import React from "react";

const selectItemStyles = stylex.create({
  base: {
    fontSize: "13px",
    lineHeight: "1",
    color: "var(--violet-11)",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    height: "25px",
    padding: "0 35px 0 25px",
    position: "relative",
    userSelect: "none",
    border: "none",
    ":hover": {
      borderWidth: "0px",
    },
  },
  green: {
    background: {
      default: "white",
      ":hover": "rgba(183, 250, 172, 1)",
    },
  },
  blue: {
    background: {
      default: "white",
      ":hover": "rgba(183, 250, 172, 1)",
    },
  },
});

interface ISelectItem extends Select.SelectItemProps {
  ref?: React.Ref<HTMLDivElement>;
  color?: "green" | "blue";
}

const StyledSelectItem = React.forwardRef(
  ({ children, color = "green", ...props }: ISelectItem, ref) => {
    return (
      <Select.Item
        {...stylex.props(selectItemStyles.base, selectItemStyles[color])}
        {...props}
        ref={ref as any}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

export default StyledSelectItem;

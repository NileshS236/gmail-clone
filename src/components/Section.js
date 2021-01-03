import { Button } from "@material-ui/core";
import React from "react";
import "../styles/Section.css";

const Section = ({ Icon, title, color, selected }) => {
  return (
    <Button
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected ? color : "grey"}`,
      }}
      startIcon={Icon}
    >
      {title}
    </Button>
  );
};

export default Section;

import { Typography } from "@mui/material";

import "./TechnicianName.css";
import { useState } from "react";

interface TechnicianNameProps {
  name: string;
  isOut: boolean;
  updateTechniciansList: (name: string) => void;
  disabled: boolean;
}

export const TechnicianName = ({
  name,
  isOut,
  updateTechniciansList,
  disabled,
}: TechnicianNameProps): JSX.Element => {
  const [classSelected, setClassSelected] = useState<boolean>(isOut);

  const handleClick = (): void => {
    if (!disabled) {
      updateTechniciansList(name);
      setClassSelected((prevState) => !prevState);
    }
  };

  return (
    <Typography
      px={1}
      mb={1 / 2}
      sx={{
        border: "1px grey solid",
        borderRadius: "4px",
        textAlign: "center",
      }}
      onClick={handleClick}
      className={classSelected ? "selected" : ""}
    >
      {name}
    </Typography>
  );
};

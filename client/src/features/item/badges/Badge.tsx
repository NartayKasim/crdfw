import classes from "./Badge.module.css";
import { BadgeProps } from "./types";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import CategoryIcon from "@mui/icons-material/Category";
import LabelIcon from "@mui/icons-material/Label";
import DescriptionIcon from "@mui/icons-material/Description";
import NotesIcon from "@mui/icons-material/Notes";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Grid3x3Icon from "@mui/icons-material/Grid3x3";
import CircleIcon from "@mui/icons-material/Circle";

const iconsLib = {
   check: <CheckCircleOutlineIcon />,
   x: <CancelIcon />,
   exclamation: <PriorityHighIcon />,
   category: <CategoryIcon />,
   label: <LabelIcon />,
   description: <DescriptionIcon />,
   note: <NotesIcon />,
   downArrow: <ArrowDropDownIcon />,
   edit: <EditIcon />,
   id: <Grid3x3Icon />,
   circle: <CircleIcon />,
};

const colorsLib = {
   red: "var(--red)",
   yellow: "var(--yellow)",
   green: "var(--green)",
   black: "var(--charleston-green)",
   white: "var(--cultured)",
   blue: "var(--blue)",
};

export default function Badge({ color, text, icon }: BadgeProps) {
   return (
      <div
         className={classes.badge}
         style={{
            color: colorsLib[color],
         }}
      >
         <div className={classes.iconWrapper}>{iconsLib[icon]}</div>
         <div className={classes.textWrapper}>{text}</div>
      </div>
   );
}

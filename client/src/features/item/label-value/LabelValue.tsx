import classes from "./LabelValue.module.css";
import { LabelValueProps } from "../itemTypes";

export default function LabelValue({
   label,
   value,
   itemKey,
   onChange,
   editState,
}: LabelValueProps) {
   return (
      <div className={classes.labelValue}>
         <div className={classes.label}>{label}</div>
         <div className={classes.value}>{value ? value : `n/a`}</div>
      </div>
   );
}

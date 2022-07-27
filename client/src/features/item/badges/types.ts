export interface BadgeProps {
   color: "red" | "yellow" | "green" | "black" | "white" | "blue";
   text: string;
   icon:
      | "check"
      | "x"
      | "exclamation"
      | "category"
      | "label"
      | "description"
      | "note"
      | "downArrow"
      | "edit"
      | "id"
      | "circle";
}

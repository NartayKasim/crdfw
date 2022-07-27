import classes from "./QuickLook.module.css";
import { QuickLookProps } from "../itemTypes";
import Badge from "../badges/Badge";

export default function QuickLook({ item }: QuickLookProps) {
   return (
      <div className={classes.quickLook}>
         {item.description.length > 10 ? (
            <Badge
               color={"green"}
               text={"has description"}
               icon={"description"}
            />
         ) : (
            <Badge color={"red"} text={"no description"} icon={"x"} />
         )}
         {item.thumbnail ? (
            <Badge color={"green"} text={"has images"} icon={"check"} />
         ) : (
            <Badge color={"red"} text={"no images"} icon={"x"} />
         )}
         {item.brand ? (
            <Badge color={"green"} text={"has brand"} icon={"label"} />
         ) : (
            <Badge color={"red"} text={"no brand"} icon={"x"} />
         )}
         {item.category ? (
            <Badge color={"green"} text={"has category"} icon={"category"} />
         ) : (
            <Badge color={"yellow"} text={"no category"} icon={"exclamation"} />
         )}
         {item.list_price ? (
            <Badge color={"green"} text={"has list price"} icon={"check"} />
         ) : (
            <Badge color={"red"} text={"no list price"} icon={"x"} />
         )}
         {item.sale_date ? (
            <Badge color={"red"} text={"sold"} icon={"check"} />
         ) : (
            <Badge color={"green"} text={"not sold"} icon={"circle"} />
         )}
      </div>
   );
}

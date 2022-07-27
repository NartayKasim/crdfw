import classes from "./Display.module.css";
import { v4 as uuidv4 } from "uuid";
import { DisplayProps } from "../inventoryTypes";
import Loading from "../../../common/loading/Loading";
import NoResults from "../../../common/no-results/NoResults";
import ItemCard from "../../item/card/ItemCard";

export default function Display({ page, isLoading }: DisplayProps) {
   return (
      <div className={classes.display}>
         {!page.length && <NoResults />}
         {isLoading && <Loading />}
         {page.length > 0 &&
            !isLoading &&
            page.map((item) => <ItemCard key={uuidv4()} {...item} />)}
      </div>
   );
}

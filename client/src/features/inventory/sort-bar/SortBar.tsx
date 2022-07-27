import { SortBarProps } from "../inventoryTypes";
import { v4 as uuidv4 } from "uuid";
import classes from "./SortBar.module.css";

export default function SortBar({
   sortBy,
   sortOrder,
   setSortBy,
   toggleSortOrder,
}: SortBarProps) {
   return (
      <div className={classes.sortBar}>
         <div className={classes.section}>
            <span>Sort By:</span>

            {[
               "id",
               "title",
               "category",
               "condition",
               "item_type",
               "brand",
               "description",
            ].map((category) => (
               <button
                  onClick={() => setSortBy(category)}
                  key={uuidv4()}
                  className={
                     sortBy === category
                        ? classes.sortByButtonActive
                        : classes.sortByButton
                  }
               >
                  {category}
               </button>
            ))}
         </div>
         <section className={classes.section}>
            <span>Sort Order:</span>
            <button
               className={
                  sortOrder === "asc"
                     ? classes.sortOrderButtonActive
                     : classes.sortOrderButton
               }
               onClick={() => toggleSortOrder()}
            >
               Ascending
            </button>
            <button
               className={
                  sortOrder === "desc"
                     ? classes.sortOrderButtonActive
                     : classes.sortOrderButton
               }
               onClick={() => toggleSortOrder()}
            >
               Descending
            </button>
         </section>
      </div>
   );
}

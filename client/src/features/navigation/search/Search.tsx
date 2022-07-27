import classes from "./Search.module.css";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export default function Search() {
   const [searchInput, setSearchInput] = useState("none");
   const [searchParams, setSearchParams] = useSearchParams();

   const onSearchClick = () => {
      setSearchParams({
         orderBy: "id",
         sortOrder: "asc",
         term: searchInput,
      });
   };
   return (
      <div className={classes.search}>
         <input
            className={classes.searchInput}
            type="text"
            placeholder="Search Inventory"
            onChange={(e) => setSearchInput(e.target.value)}
         />
         <button className={classes.searchButton} onClick={onSearchClick}>
            Search
         </button>
      </div>
   );
}

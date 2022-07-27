import classes from "./Inventory.module.css";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useInventoryAPI from "./inventoryHooks";
import SortBar from "./sort-bar/SortBar";
import PageBar from "./page-bar/PageBar";
import Display from "./display/Display";

export default function Inventory() {
   const [currentPageIdx, setCurrentPageIdx] = useState<number>(0);

   const [searchParams, setSearchParams] = useSearchParams();
   const sortBy = searchParams.get("sortBy") || "id";
   const sortOrder = searchParams.get("sortOrder") || "asc";
   const term = searchParams.get("term") || "none";

   const inventoryAPI = useInventoryAPI({ sortBy, sortOrder, term });
   const hasResults = inventoryAPI.inventory.resultsCount > 0 ? true : false;
   const isLoading = inventoryAPI.inventory.loading;
   const pages = inventoryAPI.inventory.pages;

   const handlePageChange = (param: "up" | "down" | number) => {
      if (param === "up")
         return setCurrentPageIdx((currentPageIdx) => currentPageIdx + 1);
      else if (param === "down")
         return setCurrentPageIdx((currentPageIdx) => currentPageIdx - 1);
      else {
         const newPageNumber = param - 1;
         return setCurrentPageIdx(newPageNumber);
      }
   };

   const setSortBy = (sortBy: string) => {
      setSearchParams({ sortBy, sortOrder, term });
   };

   const toggleSortOrder = () => {
      const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
      setSearchParams({ sortBy, sortOrder: newSortOrder, term });
   };

   return (
      <div className={classes.inventory}>
         <SortBar
            sortBy={sortBy}
            sortOrder={sortOrder}
            setSortBy={setSortBy}
            toggleSortOrder={toggleSortOrder}
         />
         {hasResults && (
            <PageBar
               handlePageChange={handlePageChange}
               currentPageIdx={currentPageIdx}
               pageCount={pages.length}
            />
         )}
         <Display page={pages[currentPageIdx] || []} isLoading={isLoading} />
         {hasResults && (
            <PageBar
               handlePageChange={handlePageChange}
               currentPageIdx={currentPageIdx}
               pageCount={pages.length}
            />
         )}
      </div>
   );
}

// export default function Inventory({ sortBy, sortOrder, term }: QueryParams) {
//    const [currentPageIdx, setCurrentPageIdx] = useState<number>(0);
//    const [searchParams, setSearchParams] = useState({
//       sortBy,
//       sortOrder,
//       term,
//    });

//    console.log(term);

//    const inventoryAPI = useInventoryAPI({ sortBy, sortOrder, term });
//    const hasResults = inventoryAPI.inventory.resultsCount > 0 ? true : false;
//    const isLoading = inventoryAPI.inventory.loading;
//    const pages = inventoryAPI.inventory.pages;
//    const navigate = useNavigate();

//    const handlePageChange = (param: "up" | "down" | number) => {
//       if (param === "up")
//          return setCurrentPageIdx((currentPageIdx) => currentPageIdx + 1);
//       else if (param === "down")
//          return setCurrentPageIdx((currentPageIdx) => currentPageIdx - 1);
//       else {
//          const newPageNumber = param - 1;
//          return setCurrentPageIdx(newPageNumber);
//       }
//    };

//    const getURL = () => {
//       setCurrentPageIdx(0);
//       return navigate(
//          `/inventory/?sortBy=${searchParams.sortBy}&sortOrder=${searchParams.sortOrder}&term=${searchParams.term}`
//       );
//    };

//    const setSortBy = (sortType: string) => {
//       setSearchParams({ ...searchParams, sortBy: sortType });
//    };

//    const toggleSortOrder = () => {
//       const newSortOrder = searchParams.sortOrder === "asc" ? "desc" : "asc";
//       setSearchParams({ ...searchParams, sortOrder: newSortOrder });
//    };

//    useEffect(() => {
//       getURL();
//    }, [searchParams.sortBy, searchParams.sortOrder, searchParams.term]);

//    return (
//       <div className={classes.inventory}>
//          {hasResults && (
//             <SortBar
//                sortBy={sortBy}
//                sortOrder={searchParams.sortOrder}
//                setSortBy={setSortBy}
//                toggleSortOrder={toggleSortOrder}
//             />
//          )}
//          {hasResults && (
//             <PageBar
//                handlePageChange={handlePageChange}
//                currentPageIdx={currentPageIdx}
//                pageCount={pages.length}
//             />
//          )}
//          <Display page={pages[currentPageIdx] || []} isLoading={isLoading} />
//          {hasResults && (
//             <PageBar
//                handlePageChange={handlePageChange}
//                currentPageIdx={currentPageIdx}
//                pageCount={pages.length}
//             />
//          )}
//       </div>
//    );
// }

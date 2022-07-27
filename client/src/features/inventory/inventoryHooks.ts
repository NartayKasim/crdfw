import axios from "axios";
import { useState, useEffect } from "react";
import { QueryParams, InventoryProps } from "./inventoryTypes";
import { ItemObj } from "../item/itemTypes";

export default function useInventoryAPI({
   sortBy,
   sortOrder,
   term,
}: QueryParams) {
   const [inventory, setInventory] = useState<InventoryProps>({
      loading: false,
      error: false,
      pages: [],
      resultsCount: 0,
   });

   const getItems = async ({ sortBy, sortOrder, term }: QueryParams) => {
      setInventory({ ...inventory, loading: true });
      const apiURL = `/api/inventory/search/sortBy=${sortBy}/sortOrder=${sortOrder}/term=${term}`;
      const response = await axios.get(apiURL);
      if (response.data) paginateItems(response.data);
      else setInventory({ ...inventory, loading: false, error: true });
   };

   const paginateItems = (items: ItemObj[]) => {
      const itemCount = items.length;
      if (itemCount < 25) {
         setInventory({
            ...inventory,
            loading: false,
            pages: [items],
            resultsCount: items.length,
         });
      } else {
         let numberOfPages = Math.ceil(itemCount / 25);
         let start = 0;
         let end = 24;
         let pages = [];
         for (let i = 0; i < numberOfPages; i++) {
            start = i === 0 ? i : i * 25;
            end = start + 25 > itemCount ? itemCount : start + 25;
            let page = items.slice(start, end);
            pages.push(page);
         }
         setInventory({
            ...inventory,
            loading: false,
            pages: pages,
            resultsCount: items.length,
         });
      }
   };

   useEffect(() => {
      if (!inventory.loading && !inventory.error)
         getItems({ sortBy, sortOrder, term });
   }, [sortBy, sortOrder, term]);

   return { inventory, getItems };
}

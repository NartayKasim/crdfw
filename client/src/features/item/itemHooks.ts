import { useEffect, useState } from "react";
import { ItemObj, UseGetItemProps } from "./itemTypes";
import axios from "axios";

export default function useGetItem({ item, expandItem }: UseGetItemProps) {
   const [status, setStatus] = useState<{
      loading: boolean;
      error?: boolean;
      item: ItemObj;
   }>({
      loading: false,
      error: false,
      item: item,
   });

   const updateItem = async (newItem: ItemObj) => {
      console.log(newItem);
      setStatus({ ...status, loading: true });
      const response = await axios.put(`/api/inventory/item/update`, {
         item: newItem,
      });
      if (response.data) {
         setStatus({ loading: false, item: response.data });
      } else {
         setStatus({ loading: false, error: true, item: item });
      }
   };

   const getItem = async () => {
      setStatus({ ...status, loading: true });
      const response = await axios.get(`/api/inventory/item/id=${item.id}`);
      if (response.data) setStatus({ loading: false, item: response.data });
      else setStatus({ loading: false, error: true, item: item });
   };

   const createNote = async (note: string) => {
      const response = await axios.post("/api/inventory/item/note", {
         id: item.id,
         note,
      });
      if (response.data) getItem();
      else setStatus({ loading: false, error: true, item: item });
   };

   return { ...status, updateItem, getItem, createNote };
}

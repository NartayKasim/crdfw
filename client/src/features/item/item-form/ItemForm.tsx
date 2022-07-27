import { useState } from "react";
import { ItemObj } from "../itemTypes";
import classes from "./ItemForm.module.css";

export interface ItemFormProps {
   itemObj: ItemObj;
   editItem: boolean;
   toggleEditItem: () => void;
   onUpdateItemClick: (itemObj: ItemObj) => void;
}

export default function ItemForm({
   itemObj,
   editItem,
   toggleEditItem,
   onUpdateItemClick,
}: ItemFormProps) {
   const [item, setItem] = useState<ItemObj>(itemObj);

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const target = event.target;
      const value = target.value;
      const name = target.name;
      setItem({ ...item, [name]: value });
   };

   const onCancel = () => {
      setItem(itemObj);
      toggleEditItem();
   };

   return (
      <div className={classes.formWrapper}>
         <form className={classes.itemForm}>
            <label className={classes.label}>
               title
               <input
                  disabled={editItem ? false : true}
                  className={classes.input}
                  type="text"
                  name="title"
                  value={item.title}
                  onChange={(e) => handleChange(e)}
               />
            </label>
            <label className={classes.label}>
               category
               <input
                  disabled={editItem ? false : true}
                  className={classes.input}
                  type="text"
                  name="category"
                  value={item.category || ""}
                  onChange={(e) => handleChange(e)}
               />
            </label>
            <label className={classes.label}>
               brand
               <input
                  disabled={editItem ? false : true}
                  className={classes.input}
                  type="text"
                  name="brand"
                  value={item.brand || ""}
                  onChange={(e) => handleChange(e)}
               />
            </label>
            <label className={classes.label}>
               location
               <input
                  disabled={editItem ? false : true}
                  className={classes.input}
                  type="text"
                  name="location"
                  value={item.location || ""}
                  onChange={(e) => handleChange(e)}
               />
            </label>
            <label className={classes.label}>
               condition
               <input
                  disabled={editItem ? false : true}
                  className={classes.input}
                  type="text"
                  name="condition"
                  value={item.condition || ""}
                  onChange={(e) => handleChange(e)}
               />
            </label>
         </form>
         <div className={classes.formControls}>
            {!editItem && (
               <button className={classes.button} onClick={() => onCancel()}>
                  Edit Item Details
               </button>
            )}
            {editItem && (
               <button
                  className={classes.button}
                  onClick={() => onUpdateItemClick(item)}
               >
                  Submit
               </button>
            )}
            {editItem && (
               <button className={classes.button} onClick={() => onCancel()}>
                  Cancel
               </button>
            )}
         </div>
      </div>
   );
}

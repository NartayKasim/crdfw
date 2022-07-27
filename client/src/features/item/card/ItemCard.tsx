import classes from "./ItemCard.module.css";
import { useState } from "react";
import { ItemObj } from "../itemTypes";
import parse from "html-react-parser";
import QuickLook from "../quick-look/QuickLook";
import useGetItem from "../itemHooks";
import ItemForm from "../item-form/ItemForm";
import { RichTextEditor } from "@mantine/rte";

export default function ItemCard(props: ItemObj) {
   const [expandItem, setExpandItem] = useState<boolean>(false);
   const [item, setItem] = useState<ItemObj>(props);
   const itemAPI = useGetItem({ item, expandItem });

   const [editItem, setEditItem] = useState<boolean>(false);

   const toggleExpandItem = () => {
      setExpandItem(!expandItem);
   };

   const toggleEditItem = () => {
      setItem(props);
      setEditItem(!editItem);
   };

   const onUpdateItemClick = (itemObj: ItemObj) => {
      console.log(itemObj);
      setItem(itemObj);
      setEditItem(!editItem);
      // toggleEditItem();
      itemAPI.updateItem(itemObj);
   };

   return (
      <div className={classes.itemCard}>
         <div className={classes.cardHeader}>
            <div className={classes.titleWrapper}>{item.title}</div>
            <div className={classes.quickLookWrapper}>
               <QuickLook item={item} />
            </div>
         </div>
         <div className={classes.row}>
            <div className={classes.leftColumn}>
               <div className={classes.thumbnailWrapper}>
                  <img
                     src={item.thumbnail}
                     alt=""
                     className={classes.thumbnail}
                  />
               </div>
            </div>
            <div className={classes.column}>
               <div className={classes.valuesWrapper}>
                  <ItemForm
                     itemObj={item}
                     editItem={editItem}
                     toggleEditItem={toggleEditItem}
                     onUpdateItemClick={onUpdateItemClick}
                  />
               </div>
               {expandItem && (
                  <div className={classes.column}>
                     {editItem && (
                        <RichTextEditor
                           classNames={{
                              toolbar: "mantine-RichTextEditor-toolbar",
                              root: "	.mantine-RichTextEditor-root",
                           }}
                           styles={{
                              toolbar: {
                                 backgroundColor: "var(--cultured-2)",
                              },
                              root: {
                                 backgroundColor: "var(--cultured-2)",
                                 height: "60rem",
                                 overflow: "scroll",
                                 width: "100%",
                              },
                           }}
                           value={item.description}
                           onChange={(e) =>
                              setItem({ ...item, description: e })
                           }
                        />
                     )}
                     {item.description && parse(item.description)}
                  </div>
               )}
            </div>
         </div>

         <div className={classes.cardFooter}>
            <button
               className={classes.button}
               onClick={() => window.open(item.item_link)}
            >
               Item Link
            </button>
            <button
               className={classes.button}
               onClick={() => toggleExpandItem()}
            >
               {expandItem ? "Minimize Item" : "Expand Item"}
            </button>
            <button className={classes.button} onClick={() => toggleEditItem()}>
               {editItem ? "Cancel" : "Edit Item"}
            </button>
            {editItem && expandItem && (
               <button
                  className={classes.button}
                  onClick={() => onUpdateItemClick(item)}
               >
                  Save Changes
               </button>
            )}
         </div>
      </div>
   );
}

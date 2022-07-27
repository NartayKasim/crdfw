import classes from "./Item.module.css";
import QuickLook from "./quick-look/QuickLook";
import parse from "html-react-parser";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemObj } from "./itemTypes";

export default function Item() {
   const [item, setItem] = useState<ItemObj>();
   const [searchParams, setSearchParams] = useSearchParams();
   const id = searchParams.get("id");
   const navigate = useNavigate();

   const getItem = async () => {
      const response = await axios.get(`/api/inventory/item/id=${id}`);
      if (!response.data) return navigate("/");
      const item = response.data;
      setItem(item);
   };

   useEffect(() => {
      if (!id) navigate("/");
      else {
         if (!item) getItem();
      }
   }, [item]);

   console.log(item);

   return (
      <div className={classes.item}>
         <div className={classes.itemInner}>
            <div className={classes.column}>
               <div className={classes.titleWrapper}>{item && item.title}</div>
               <div className={classes.quickLookWrapper}>
                  {item && <QuickLook item={item} />}
               </div>
               <div className={classes.section}>
                  <span> Location:</span> {item && item.location}
               </div>
               <div className={classes.section}>
                  <span>ID: </span>
                  {item && item.id}
               </div>
               <div className={classes.section}>
                  <span>SKU: </span>
                  {item && item.sku}
               </div>
               <div className={classes.section}>
                  <span> Condition:</span> {item && item.condition}
               </div>
               <div className={classes.section}>
                  <span> Auction Price:</span> {item && item.auction_price}
               </div>
               <div className={classes.section}>
                  <span> List Price: </span>
                  {item && item.list_price}
               </div>
               <div className={classes.section}>
                  <span> Retail Price: </span>
                  {item && item.retail_price}
               </div>
               <div className={classes.section}>
                  <span></span>
                  {item && (
                     <button
                        className={classes.itemLink}
                        onClick={() => window.open(item.item_link)}
                     >
                        Item Link
                     </button>
                  )}
               </div>
               <div className={classes.brandWrapper}>
                  <div className={classes.sectionHeader}>Brand</div>{" "}
                  <div className={classes.sectionBody}>
                     {item && item.brand}
                  </div>
               </div>
               <div className={classes.brandWrapper}>
                  <div className={classes.sectionHeader}>Category</div>{" "}
                  <div className={classes.sectionBody}>
                     {item && item.category}
                  </div>
               </div>
            </div>
            <div className={classes.row}>
               <div className={classes.imagesWrapper}>
                  {item &&
                     item.images?.map((image) => (
                        <img
                           className={classes.image}
                           key={uuidv4()}
                           alt="item-image"
                           src={image}
                        />
                     ))}
               </div>
            </div>
            <div className={classes.row}>
               <div className={classes.imageLinksWrapper}>
                  <div className={classes.sectionHeader}>Image Links</div>
                  <div className={classes.imageLinks}>
                     {item &&
                        item.images?.map((image, idx) => (
                           <ul className={classes.imageLink} key={uuidv4()}>
                              <b className={classes.idx}>{idx}</b>{" "}
                              <span>{image}</span>
                           </ul>
                        ))}
                  </div>
               </div>
            </div>
            <div className={classes.column}>
               <div className={classes.descriptionWrapper}>
                  <div className={classes.sectionHeader}>Description</div>
                  <div className={classes.descriptionBody}>
                     {item && parse(item.description)}
                  </div>
               </div>
            </div>
            <div className={classes.column}>
               <div className={classes.sectionHeader}>Notes</div>
               <div className={classes.sectionBody}>
                  {item &&
                     item.notes?.map((note) => (
                        <div className={classes.note} key={uuidv4()}>
                           <div className={classes.noteDate}>{note}</div>
                        </div>
                     ))}
               </div>
            </div>
         </div>
      </div>
   );
}

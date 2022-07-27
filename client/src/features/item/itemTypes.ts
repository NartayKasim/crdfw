export interface ItemObj {
   id: string;
   sku: number;
   title: string;
   category: string | null;
   brand: string | null;
   location: string | "UNKNOWN";
   condition: string | "UNKNOWN";
   auction_price: string | null;
   retail_price: string | null;
   list_price: string | null;
   sale_price: string | null;
   sale_date: string | null;
   thumbnail: string;
   description: string;
   item_link: string;
   images?: string[];
   notes?: string[];
}

export interface ItemCardProps {
   item: ItemObj;
}

export interface ItemProps {
   item: ItemObj;
}

export interface BadgeProps {
   color: "red" | "yellow" | "green" | "black" | "white" | "blue";
   text: string;
   icon:
      | "check"
      | "x"
      | "exclamation"
      | "category"
      | "label"
      | "description"
      | "note"
      | "downArrow"
      | "edit"
      | "id"
      | "circle";
}

export interface QuickLookProps {
   item: ItemObj;
}

export interface LabelValueProps {
   label: string;
   value: string | number | null;
   itemKey: string;
   onChange: (key: string, value: string) => void;
   editState: boolean;
}

export interface ToggleExpandProps {
   toggleExpand: () => void;
}

export interface ItemDisplayProps {
   item: ItemObj;
}

export interface UseGetItemProps {
   item: ItemObj;
   expandItem: boolean;
}

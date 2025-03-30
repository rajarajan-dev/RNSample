// Define possible status values (union type)
type ItemStatus = "Todo" | "In Progress" | "Done";

// Interface for a checklist item (e.g., "Milk", "Finish React Native App")
interface ChecklistItem {
  itemId: string;
  name: string;
  status: ItemStatus;
}

// Interface for a checklist category (e.g., "My Shopping", "Work Tasks")
interface ChecklistCategory {
  titleId: string;
  titleName: string;
  createdAt: string; // Optional (not all categories have it)
  lastItemAdded: string; // Optional (only some categories track this)
  items: ChecklistItem[]; // Array of items in this category
}

// Top-level structure
interface MyCheckListData {
  MyCheckList: ChecklistCategory[]; // Array of categories
}

// Export all types for reuse
export type { ItemStatus, ChecklistItem, ChecklistCategory, MyCheckListData };

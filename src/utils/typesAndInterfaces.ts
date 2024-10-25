import * as Yup from 'yup';

//apiGetResponse
export interface GetResponse {
    result: {
      items: {
        nameAR: string;
        nameEN: string;
        photoPath: string;
        id: string;
        createBy: string;
        modifyBy: string | null;
        deletedBy: string | null;
        createAt: string;
        modifyAt: string | null;
        deletedAt: string | null;
        isActive: boolean;
        isDeleted: boolean;
      }[];
      total: number;
    };
    isSuccess: boolean;
    message: string;
  }

export interface InputField {
    name: string;
    label: string;
    type: 'text' | 'image' | 'radio';
    validation: Yup.AnySchema; 
    options?: { value: string; label: string }[]; // Only applicable for radio inputs
  }
// Interface for a category item
export interface CategoryItem {
    nameAR: string; // Arabic name of the category
    nameEN: string; // English name of the category
    photoPath: string; // Path to the category image
    id: string; // Unique identifier for the category
    createBy: string; // User who created the category
    modifyBy: string | null; // User who last modified the category
    deletedBy: string | null; // User who deleted the category
    createAt: string; // Creation timestamp
    modifyAt: string | null; // Last modification timestamp
    deletedAt: string | null; // Deletion timestamp
    isActive: boolean; // Active status of the category
    isDeleted: boolean; // Deletion status of the category
  }
  
  // Interface for a subcategory item
  export interface SubCategoryItem extends CategoryItem {
    categoryId: string; // ID of the parent category
  }
  
  // Interface for a brand item
  export interface BrandItem {
    nameAR: string; // Arabic name of the brand
    nameEN: string; // English name of the brand
    id: string; // Unique identifier for the brand
    createBy: string; // User who created the brand
    modifyBy: string | null; // User who last modified the brand
    deletedBy: string | null; // User who deleted the brand
    createAt: string; // Creation timestamp
    modifyAt: string | null; // Last modification timestamp
    deletedAt: string | null; // Deletion timestamp
    isActive: boolean; // Active status of the brand
    isDeleted: boolean; // Deletion status of the brand
  }
  
  // Interface for the response containing categories
  export interface Result {
    items: CategoryItem[]; // Array of category items
    total: number; // Total number of categories
  }
  
  // Interface for the API response
  export interface ApiResponse {
    result: Result; // Result object containing categories
    isSuccess: boolean; // Success status of the API call
    message: string; // Message from the API
  }
  

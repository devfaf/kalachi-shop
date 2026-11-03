export type Product = {
  id: string;
  persianName: string;
  englishName: string;
  price: number;
  stock: number;
  isAmazingOffer: boolean;
  categoryId: string;
  category: {
    id: string;
    name: string;
  };
  images: {
    id: string;
    url: string;
    sortOrder: number;
  }[];
};

export type ProductFormData = {
  persianName: string;
  englishName: string;
  description: string;
  categoryId: string;
  guarantee: string;
  originalPrice: string;
  price: string;
  stock: string;
};

export type StockFilter = "all" | "available" | "unavailable";

export type Category = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
};
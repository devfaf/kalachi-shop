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

export type StockFilter = "all" | "available" | "unavailable";
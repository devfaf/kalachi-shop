import type { Category, ProductFormData } from "../../_components/products-types";

export type ExistingImage = {
  id: string;
  url: string;
  sortOrder: number;
};

export type InitialProduct = {
  id: string;
  persianName: string;
  englishName: string;
  description: string;
  categoryId: string;
  guarantee: string;
  originalPrice: number;
  price: number;
  stock: number;
  images: ExistingImage[];
  colors: { name: string; value: string }[];
  features: { label: string; value: string }[];
};

export type ProductFormProps = {
  role: "ADMIN" | "DEMO";
  productId?: string;
};

export type ProductFormFieldsProps = {
  formData: ProductFormData;
  categories: Category[];
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
};
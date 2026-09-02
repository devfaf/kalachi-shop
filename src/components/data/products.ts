export type Product = {
    readonly id: string;
    name: string;
    slug: string;
    price: number;
    discountPrice?: number;
    image: string;
    categoryId: string;
    stock: number;
}

export const products: Product[] = [
    {
        id: '1',
        name: 'تی وی',
        slug: "tv",
        price: 12_000_000,
        image: "/products/tv.jpg",
        categoryId: "tv",
        stock: 10,
    },
    {
        id: '2',
        name: 'گوشی موبایل',
        slug: "mobile-phone",
        price: 12_000_000,
        image: "/products/phone.jpg",
        categoryId: "mobile",
        stock: 17,
    },
    {
        id: '3',
        name: 'لپ تاپ',
        slug: "laptop",
        price: 12_000_000,
        image: "/products/laptop.jpg",
        categoryId: "laptop",
        stock: 7,
    },
]

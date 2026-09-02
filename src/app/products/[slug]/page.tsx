import { products } from "@/components/data/products";
import { Box } from "@mui/material";
import { notFound } from "next/navigation";

type Props = {
    params: Promise<{ slug: string }>
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = products.find((p) => p.slug === slug)
    if (!product) {
        notFound()
    }

    return (

        <Box>
            <Box>{product.name}</Box>
            <Box>{product.price}</Box>
        </Box>

    )
}
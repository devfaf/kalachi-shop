"use client"

import Link from "next/link"
import { useSelectedLayoutSegments } from "next/navigation"
import { categories } from "@/data/categories"
import { products } from "@/data/products"
import { usePathname } from "next/navigation"


const Breadcrumb = () => {
    const pathname = usePathname()
    const segments = pathname.split("/").filter(Boolean)
    
    const breadcrumbs = [
        {
            label:"خانه",
            href: "/"
        }
    ]

      if (segments[0] === "products" && segments[1]) {
    const product = products.find(
      (product) => product.slug === segments[1]
    );

    if (product) {
      const category = categories.find(
        (category) => category.id === product.categoryId
      );

      if (category) {
        breadcrumbs.push({
          label: category.name,
          href: `/category/${category.slug}`,
        });
      }

      breadcrumbs.push({
        label: product.info.persianName,
        href: `/products/${product.slug}`,
      });
    }
  }

    return (
        <div className="w-full py-4">
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-2 text-xs">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={breadcrumb.href} className="flex items-center gap-2">
            {index > 0 && (
              <span className="text-muted-foreground">/</span>
            )}

            {index === breadcrumbs.length - 1 ? (
              <span className="text-muted-foreground">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>

        </div>
    )
}
export default Breadcrumb
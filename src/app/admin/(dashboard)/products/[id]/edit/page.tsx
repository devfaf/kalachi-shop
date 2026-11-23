import { Package } from "lucide-react";
import { ProductForm } from "../../new/_components/productForm";
import { getCurrentUserRole } from "@/lib/auth";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function EditProductPage({ params }: Props) {
  const { id } = await params;
  const role = await getCurrentUserRole();

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <Package size={24} className="text-[var(--primary)]" />

        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">
            ویرایش محصول
          </h1>

          <p className="mt-1 text-sm text-[var(--muted-foreground)]">
            اطلاعات محصول را ویرایش کن.
          </p>
        </div>
      </div>

      <ProductForm
        role={role === "ADMIN" ? "ADMIN" : "DEMO"}
        productId={id}
      />
    </section>
  );
}
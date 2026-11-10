
import { PackagePlus } from "lucide-react";
import { ProductForm } from "./_components/product-form";
import { getCurrentUserRole } from "@/lib/auth";

export default async function NewProductPage() {
    const role = await getCurrentUserRole();

    return (
        <section className="space-y-6">
            <div className="flex items-center gap-3">
                <PackagePlus size={24} className="text-[var(--primary)]" />
                <div>
                    <h1 className="text-2xl font-bold text-[var(--foreground)]">
                        افزودن محصول جدید
                    </h1>
                    <p className="mt-1 text-sm text-[var(--muted-foreground)]">
                        اطلاعات محصول جدید را وارد کن.
                    </p>
                </div>
            </div>

            <ProductForm role={role === "ADMIN" ? "ADMIN" : "DEMO"} />
        </section>
    );
}

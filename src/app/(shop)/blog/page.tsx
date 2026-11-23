
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "راهنمای خرید بهترین لپ تاپ برای استفاده روزمره",
    description:
      "اگر قصد خرید لپ تاپ دارید، قبل از انتخاب بهتر است با مهم‌ترین مشخصات و نکاتی که باید در نظر بگیرید آشنا شوید.",
    image: "/images/blog/1.jpg",
    date: "۱۴۰۵/۰۸/۲۰",
    category: "راهنمای خرید",
  },
  {
    id: 2,
    title: "هنگام خرید گوشی موبایل به چه نکاتی توجه کنیم؟",
    description:
      "از کیفیت دوربین گرفته تا باتری و پردازنده؛ با مهم‌ترین معیارهای انتخاب یک گوشی مناسب آشنا شوید.",
    image: "/images/blog/2.jpg",
    date: "۱۴۰۵/۰۸/۱۵",
    category: "موبایل",
  },
  {
    id: 3,
    title: "چطور لوازم جانبی مناسب برای گوشی خود انتخاب کنیم؟",
    description:
      "انتخاب لوازم جانبی باکیفیت می‌تواند به افزایش عمر دستگاه و تجربه بهتر استفاده از آن کمک کند.",
    image: "/images/blog/3.jpg",
    date: "۱۴۰۵/۰۸/۱۰",
    category: "لوازم جانبی",
  },
  {
    id: 4,
    title: "راهنمای انتخاب هدفون مناسب برای موسیقی و مکالمه",
    description:
      "با انواع هدفون و ویژگی‌های مهمی مثل کیفیت صدا، حذف نویز و عمر باتری آشنا شوید.",
    image: "/images/blog/4.jpg",
    date: "۱۴۰۵/۰۸/۰۵",
    category: "صوتی و تصویری",
  },
  {
    id: 5,
    title: "لوازم کاربردی که هر خانه‌ای به آن نیاز دارد",
    description:
      "در این مطلب با چند وسیله کاربردی آشنا می‌شوید که می‌توانند کارهای روزمره خانه را آسان‌تر کنند.",
    image: "/images/blog/5.jpg",
    date: "۱۴۰۵/۰۷/۲۸",
    category: "لوازم خانگی",
  },
  {
    id: 6,
    title: "چند نکته مهم برای نگهداری بهتر از وسایل دیجیتال",
    description:
      "با رعایت چند نکته ساده می‌توانید از وسایل دیجیتال خود بهتر مراقبت کنید و عمر مفید آن‌ها را افزایش دهید.",
    image: "/images/blog/6.jpg",
    date: "۱۴۰۵/۰۷/۲۰",
    category: "آموزش",
  },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:py-12">
      <section className="space-y-3 text-center">
        <h1 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          وبلاگ کالاچی
        </h1>

        <p className="mx-auto max-w-2xl text-sm leading-8 text-[var(--muted-foreground)] sm:text-base">
          جدیدترین مطالب، راهنمای خرید و نکات کاربردی درباره دنیای
          تکنولوژی و لوازم خانگی را در وبلاگ کالاچی دنبال کنید.
        </p>
      </section>

      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[16/9] bg-muted">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col p-5">
              <span className="w-fit rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-[var(--primary)]">
                {article.category}
              </span>

              <h2 className="mt-4 line-clamp-2 text-base font-bold leading-7 text-[var(--foreground)]">
                {article.title}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm leading-7 text-[var(--muted-foreground)]">
                {article.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
                <span className="flex items-center gap-2 text-xs text-[var(--muted-foreground)]">
                  <CalendarDays size={15} />
                  {article.date}
                </span>

                <Link
                  href="#"
                  className="flex items-center gap-1 text-sm font-medium text-[var(--primary)] transition-opacity hover:opacity-75"
                >
                  مطالعه مطلب
                  <ArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}


import { Mail, MessageCircle, Phone } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "تماس تلفنی",
    description: "برای دریافت راهنمایی و پاسخ به سوالات خود با ما تماس بگیرید.",
    value: "091212345678",
  },
  {
    icon: Mail,
    title: "ایمیل",
    description: "می‌توانید سوالات و پیشنهادهای خود را از طریق ایمیل ارسال کنید.",
    value: "fake.support@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "پشتیبانی",
    description: "برای پیگیری سفارش‌ها و دریافت راهنمایی با پشتیبانی در ارتباط باشید.",
    value: "@kalachi",
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-10 px-4 py-12 sm:px-6">
      <section className="space-y-4 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--primary)]">
          <MessageCircle size={32} />
        </div>

        <h1 className="text-3xl font-bold text-[var(--foreground)]">
          تماس با ما
        </h1>

        <p className="mx-auto max-w-2xl text-sm leading-8 text-[var(--muted-foreground)] sm:text-base">
          در کالاچی همیشه آماده شنیدن سوالات، پیشنهادها و نظرات شما هستیم.
          برای ارتباط با ما می‌توانید از راه‌های زیر استفاده کنید.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {contactMethods.map(({ icon: Icon, title, description, value }) => (
          <div
            key={title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-[var(--accent)] text-[var(--primary)]">
              <Icon size={24} />
            </div>

            <h2 className="font-semibold text-[var(--foreground)]">
              {title}
            </h2>

            <p className="mt-2 min-h-14 text-sm leading-7 text-[var(--muted-foreground)]">
              {description}
            </p>

            <p className="mt-4 border-t border-[var(--border)] pt-4 text-sm font-medium text-[var(--primary)]">
              {value}
            </p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center sm:p-8">
        <h2 className="text-lg font-bold text-[var(--foreground)]">
          همراه شما هستیم
        </h2>

        <p className="mt-3 text-sm leading-8 text-[var(--muted-foreground)]">
          رضایت شما برای ما اهمیت دارد. تلاش می‌کنیم تجربه خریدی ساده و
          مطمئن برایتان فراهم کنیم و در صورت نیاز پاسخگوی شما باشیم.
        </p>
      </section>
    </main>
  );
}

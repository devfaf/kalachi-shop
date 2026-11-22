
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const questions = [
  {
    question: "چطور می‌توانم از کالاچی خرید کنم؟",
    answer:
      "ابتدا محصول مورد نظر خود را انتخاب کنید، سپس آن را به سبد خرید اضافه کرده و مراحل ثبت سفارش و پرداخت را تکمیل کنید.",
  },
  {
    question: "چطور سفارش خود را پیگیری کنم؟",
    answer:
      "از بخش پیگیری سفارش می‌توانید با وارد کردن اطلاعات مورد نیاز، وضعیت سفارش خود را مشاهده کنید.",
  },
  {
    question: "آیا امکان لغو سفارش وجود دارد؟",
    answer:
      "امکان لغو سفارش به وضعیت پردازش آن بستگی دارد. برای بررسی شرایط سفارش خود با پشتیبانی تماس بگیرید.",
  },
  {
    question: "روش‌های پرداخت در کالاچی چیست؟",
    answer:
      "در حال حاضر می‌توانید هزینه سفارش خود را از طریق درگاه پرداخت اینترنتی کالاچی پرداخت کنید.",
  },
  {
    question: "سفارش‌ها چقدر زمان می‌برند تا ارسال شوند؟",
    answer:
      "زمان ارسال سفارش با توجه به مقصد و شرایط پردازش سفارش متفاوت است.",
  },
  {
    question: "آیا می‌توانم اطلاعات حساب کاربری خود را تغییر دهم؟",
    answer:
      "برای مدیریت اطلاعات حساب خود می‌توانید به پنل کاربری مراجعه کنید.",
  },
  {
    question: "اگر محصولی مشکل داشته باشد چه کار کنم؟",
    answer:
      "در صورت وجود مشکل در محصول، لطفا از طریق صفحه تماس با ما موضوع را با پشتیبانی کالاچی در میان بگذارید.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-10 sm:px-6 lg:py-14">
      <section className="space-y-4 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--primary)]">
          <HelpCircle size={32} />
        </div>

        <h1 className="text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
          سوالی دارید؟
        </h1>

        <p className="mx-auto max-w-2xl text-sm leading-8 text-[var(--muted-foreground)] sm:text-base">
          پاسخ سوالات متداول خود درباره خرید، ثبت سفارش و استفاده از
          خدمات کالاچی را در این صفحه پیدا کنید.
        </p>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 sm:p-6">
        <Accordion multiple className="w-full">
          {questions.map((item, index) => (
            <AccordionItem key={index} value={`question-${index}`}>
              <AccordionTrigger className="py-5 text-right text-sm font-semibold text-[var(--foreground)] hover:no-underline sm:text-base">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="text-sm leading-8 text-[var(--muted-foreground)]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center">
        <h2 className="font-bold text-[var(--foreground)]">
          پاسخ سوال خود را پیدا نکردید؟
        </h2>

        <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
          می‌توانید از طریق صفحه تماس با ما با پشتیبانی کالاچی در ارتباط باشید.
        </p>

        <a
          href="/contact"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          تماس با ما
        </a>
      </section>
    </main>
  );
}

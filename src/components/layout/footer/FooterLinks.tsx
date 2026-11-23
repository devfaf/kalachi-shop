
"use client";

import { useState } from "react";
import Link from "next/link";
import { HiOutlineChevronDown } from "react-icons/hi2";
import { footerData } from "./footerData";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const AccordionItem = ({
  title,
  isOpen,
  onToggle,
  children,
}: AccordionItemProps) => {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-center gap-2 py-4 text-center text-sm font-bold text-foreground transition-colors hover:text-primary"
      >
        {title}

        <HiOutlineChevronDown
          size={18}
          className={cn(
            "text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-200",
          isOpen ? "grid-rows-[1fr] pb-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <ul className="m-0 flex list-none flex-col items-center gap-3 p-0">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FooterLinks = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="hidden grid-cols-3 gap-8 md:grid">
        {footerData.map((group) => (
          <div key={group.title} className="text-center">
            <h3 className="mb-5 text-base font-bold text-foreground">
              {group.title}
            </h3>

            <ul className="m-0 flex list-none flex-col items-center gap-4 p-0">
              {group.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:hidden">
        {footerData.map((group, index) => (
          <AccordionItem
            key={group.title}
            title={group.title}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            {group.links.map((link) => (
              <li key={link.title}>
                <Link
                  href={link.href}
                  className="text-center text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;

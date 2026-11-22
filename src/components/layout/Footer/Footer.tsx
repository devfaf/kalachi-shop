
import FooterContacts from "./FooterContacts";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import FooterAbout from "./FooterAbout";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-muted/20 text-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Contact */}
        <FooterContacts />

        {/* Links + Socials */}
        <div className="grid grid-cols-1 gap-10 border-b border-border py-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div className="flex items-start justify-center">
            <div className="w-full">
              <FooterLinks />
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <FooterSocials />
          </div>
        </div>

        {/* About + Validity */}
        <FooterAbout />

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs leading-7 text-muted-foreground sm:text-sm">
            استفاده از مطالب فروشگاه اینترنتی کالاچی فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است.
            کلیه حقوق این سایت متعلق به فروشگاه اینترنتی کالاچی می‌باشد.
            Copyright © 2020 - 2026
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

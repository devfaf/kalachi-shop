import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="فروشگاه اینترنتی کالاچی"
      className="flex shrink-0 items-center"
    >
      <div className="flex w-[102px] md:w-[130px]">
        <Image
          src="/logo/logo.png"
          alt="کالاچی"
          width={130}
          height={50}
          priority
          className="h-auto w-full"
        />
      </div>
    </Link>
  );
};

export default Logo;
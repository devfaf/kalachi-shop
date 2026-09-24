import { PiPhoneCallLight } from "react-icons/pi";

const Contact = () => {
  return (
    <a
      href="tel:+986153510225"
      aria-label="تماس با پشتیبانی"
      className="inline-flex items-center justify-center text-muted-foreground transition-colors hover:text-primary"
    >
      <PiPhoneCallLight
        size={30}
        className="transition-transform duration-200 hover:-translate-y-[3px]"
      />
    </a>
  );
};

export default Contact;
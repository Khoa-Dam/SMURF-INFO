import React from "react";

// Optional: Add metadata specific to the contact page
export const metadata = {
  title: "Contact Us",
  description: "Get in touch with our team",
};

interface ContactLayoutProps {
  children: React.ReactNode;
}

const ContactLayout: React.FC<ContactLayoutProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default ContactLayout;

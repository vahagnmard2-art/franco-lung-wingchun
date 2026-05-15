import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Grandmaster Franco Lung to arrange your first class. Wing Chun martial arts in Temple City, CA for all ages. Call (626) 233-2882 or send a message online.",
};

export default function ContactPage() {
  return <ContactClient />;
}

import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Franco Lung Wing Chun in Temple City, CA — classes, students, and Grandmaster Lung in action.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}

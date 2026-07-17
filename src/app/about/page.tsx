import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About — Devora",
  description: "Devora is a custom software studio for businesses that have outgrown off-the-shelf tools.",
};

export default function About() {
  return <AboutContent />;
}

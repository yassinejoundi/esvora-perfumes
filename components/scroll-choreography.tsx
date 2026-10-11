"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function ScrollChoreography() {
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(element, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
      });
      gsap.utils.toArray<HTMLElement>("[data-image-reveal]").forEach((element) => {
        gsap.fromTo(element, { opacity: 0.65, scale: 0.88 }, { opacity: 1, scale: 1, ease: "none", scrollTrigger: { trigger: element, start: "top 92%", end: "center 48%", scrub: 1 } });
      });
      const words = gsap.utils.toArray<HTMLElement>("[data-story-word]");
      gsap.fromTo(words, { opacity: 0.18 }, { opacity: 1, stagger: 0.055, ease: "none", scrollTrigger: { trigger: ".story-words", start: "top 82%", end: "bottom 42%", scrub: 1 } });
    });
    media.add("(min-width: 960px) and (prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.create({ trigger: ".philosophy-inner", start: "top top+=110", end: "bottom bottom-=90", pin: "#story-pin", pinSpacing: false });
    });
    return () => media.revert();
  }, []);
  return null;
}

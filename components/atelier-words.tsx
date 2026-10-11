"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const lines = ["Some feelings never fade.", "There is more than one way to be you.", "Leave something beautiful behind."];

export function AtelierWords() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const move = (step: number) => setActive((active + step + lines.length) % lines.length);
  return <section className="atelier-words section-space page-gutter" aria-label="Words from the Esvora atelier"><p className="eyebrow">From the atelier</p><motion.p key={active} className="atelier-quote" aria-live="polite" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>&ldquo;{lines[active]}&rdquo;</motion.p><div className="quote-controls"><span>{String(active + 1).padStart(2, "0")} / 03</span><button type="button" onClick={() => move(-1)} aria-label="Previous thought"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" /></button><button type="button" onClick={() => move(1)} aria-label="Next thought"><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></button></div></section>;
}

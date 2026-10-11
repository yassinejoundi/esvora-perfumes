"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const moods = [
  { name: "Aura", cue: "A fresh beginning", note: "Bergamot, pear, and white musk", image: "/images/aura.webp", color: "#E8D5A9" },
  { name: "Muse", cue: "A tender moment", note: "Rose, lychee, and cashmere woods", image: "/images/muse.webp", color: "#D6A5B1" },
  { name: "Noir", cue: "After the light fades", note: "Black cherry, dark rose, and amber", image: "/images/noir.webp", color: "#5A273E" },
];

export function ScentFinder() {
  const [selected, setSelected] = useState(1);
  const reduceMotion = useReducedMotion();
  const scent = moods[selected];
  return <section id="find-your-scent" className="finder section-space page-gutter" aria-labelledby="finder-title"><div className="finder-intro" data-reveal><p className="eyebrow">A scent for this moment</p><h2 id="finder-title">How do you want <em>to feel?</em></h2><p>Choose the mood that speaks to you. Your scent follows.</p></div><div className="finder-shell"><div className="finder-options" role="group" aria-label="Choose a fragrance mood">{moods.map((mood, index) => <button type="button" className={`mood-option${selected === index ? " active" : ""}`} key={mood.name} aria-pressed={selected === index} onClick={() => setSelected(index)}><span className="mood-swatch" style={{ backgroundColor: mood.color }} aria-hidden="true" /><span><strong>{mood.cue}</strong><small>{mood.name}</small></span><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></button>)}</div><div className="finder-result" aria-live="polite"><motion.div key={scent.name} className="finder-visual" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}><Image src={scent.image} alt={`${scent.name} perfume bottle`} fill sizes="(max-width: 760px) 90vw, 42vw" /></motion.div><div className="finder-result-copy"><span>Your moment, in a scent</span><h3>{scent.name}</h3><p>{scent.note}</p></div></div></div></section>;
}

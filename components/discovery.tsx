import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Discovery() {
  return <section id="discovery" className="discovery section-space" aria-labelledby="discovery-title"><div className="discovery-inner page-gutter"><div className="discovery-copy" data-reveal><p className="eyebrow">The discovery set</p><h2 id="discovery-title">Every side of you, <em>in one place.</em></h2><p>Meet Aura, Muse, and Noir together. A small invitation to explore your own way of wearing fragrance.</p><Link className="button button-light" href="#collection">Meet the three scents <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link><small>Discovery set imagery is a concept preview.</small></div><div className="discovery-image" data-image-reveal><Image src="/images/discovery-set.webp" alt="Concept presentation box with three miniature fragrances" fill sizes="(max-width: 900px) 100vw, 53vw" /></div></div></section>;
}

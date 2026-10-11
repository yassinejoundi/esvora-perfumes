import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";

export function Hero() {
  return <section id="top" className="hero" aria-labelledby="hero-title">
    <div className="hero-copy page-gutter"><p className="eyebrow">The art of being unforgettable</p><h1 id="hero-title">A feeling <em>that stays.</em></h1><p className="hero-intro">Three fragrances. Three expressions of you. Meet the scent that feels like your own.</p><div className="hero-actions"><Link className="button button-dark" href="#collection">Explore the collection <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link><Link className="text-link" href="#find-your-scent">Find your scent <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></Link></div></div>
    <div className="hero-image-wrap"><Image src="/images/hero-campaign.webp" alt="Blush perfume bottle on a sunlit stone ledge" fill priority sizes="100vw" className="hero-image" /><div className="hero-image-caption"><span>ESVORA / THE SIGNATURE COLLECTION</span><Link href="#collection" aria-label="Scroll to the collection"><FontAwesomeIcon icon={faArrowDown} aria-hidden="true" /></Link></div></div>
  </section>;
}

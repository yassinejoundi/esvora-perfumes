import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return <footer className="site-footer page-gutter"><div className="footer-top"><div><p className="eyebrow">Your story, your scent</p><h2>Leave a little <em>lasting beauty.</em></h2></div><Link className="button button-light" href="#collection">Explore ESVORA <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></Link></div><div className="footer-bottom"><Link className="footer-wordmark" href="#top">ESVORA</Link><nav aria-label="Footer navigation"><Link href="#collection">Collection</Link><Link href="#philosophy">Our story</Link><Link href="#find-your-scent">Find your scent</Link><Link href="#discovery">Discovery set</Link></nav></div><div className="footer-legal"><span>ESVORA. A fragrance concept.</span><span>A feeling that stays.</span></div></footer>;
}

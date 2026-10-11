import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const scents = [
  { name: "Aura", mood: "The light", notes: "Bergamot · Pear · White musk", description: "The freshness of an early morning, held a little longer.", image: "/images/aura.webp", alt: "Champagne-tinted Aura perfume bottle beside pale peonies", tone: "aura" },
  { name: "Muse", mood: "The heart", notes: "Pink pepper · Rose · Cashmere woods", description: "Soft, expressive, and impossible to mistake for anyone else.", image: "/images/muse.webp", alt: "Blush Muse perfume bottle on rose silk", tone: "muse" },
  { name: "Noir", mood: "The mystery", notes: "Black cherry · Dark rose · Amber", description: "A warm after-dark impression that lingers close.", image: "/images/noir.webp", alt: "Deep plum Noir perfume bottle with dark rose and cherries", tone: "noir" },
];

export function Collection() {
  return <section id="collection" className="collection section-space page-gutter" aria-labelledby="collection-title">
    <div className="section-heading" data-reveal><p className="eyebrow">The signature collection</p><h2 id="collection-title">There is more than one way <em>to be you.</em></h2><p>Three scents shaped around the moments you want to keep.</p></div>
    <div className="collection-grid grid-flow-dense">{scents.map((scent) => <article className={`scent-card ${scent.tone}`} key={scent.name} data-reveal><Link href="#find-your-scent" className="scent-image-link" aria-label={`Compare ${scent.name} in the scent finder`}><Image src={scent.image} alt={scent.alt} fill sizes="(max-width: 760px) 100vw, 33vw" className="scent-image" /><span className="card-corner" aria-hidden="true"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></Link><div className="scent-copy"><span className="scent-mood">{scent.mood}</span><h3>{scent.name}</h3><p>{scent.description}</p><span className="scent-notes">{scent.notes}</span></div></article>)}</div>
  </section>;
}

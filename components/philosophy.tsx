import Image from "next/image";

const words = "A scent can take you back to a moment, a place, a person. We make room for all the versions of you.".split(" ");

export function Philosophy() {
  return <section id="philosophy" className="philosophy section-space" aria-labelledby="philosophy-title"><div className="philosophy-inner page-gutter"><div className="philosophy-heading" id="story-pin"><p className="eyebrow">The Esvora philosophy</p><h2 id="philosophy-title">What stays <em>with us.</em></h2><p>Fragrance is personal. It holds the details words cannot.</p></div><div className="philosophy-flow"><div className="philosophy-image" data-image-reveal><Image src="/images/philosophy.webp" alt="Warm light falling across silk and limestone" fill sizes="(max-width: 900px) 100vw, 48vw" /></div><p className="sr-only">{words.join(" ")}</p><p className="story-words" aria-hidden="true">{words.map((word, index) => <span data-story-word key={index}>{word} </span>)}</p><div className="inline-editorial" data-reveal><h3>Made for the moments <span className="inline-image"><Image src="/images/collection-still-life.webp" alt="" fill sizes="110px" /></span> that become yours.</h3><p>Quiet by nature. Lasting by feeling.</p></div></div></div></section>;
}

export function Marquee() {
  return <div className="marquee" aria-label="Three moods, one identity"><div className="marquee-track" aria-hidden="true">{Array.from({ length: 4 }, (_, index) => <span key={index}>Three moods <i>✦</i> one identity <i>✦</i></span>)}</div></div>;
}

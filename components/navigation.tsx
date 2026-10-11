"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <nav className="nav-inner" aria-label="Main navigation">
      <div className="nav-links nav-left"><Link href="#collection">The collection</Link><Link href="#philosophy">Our story</Link></div>
      <Link className="wordmark" href="#top" aria-label="ESVORA, back to top" onClick={close}>ESVORA</Link>
      <div className="nav-links nav-right"><Link href="#find-your-scent">Find your scent</Link><Link href="#discovery" className="nav-discover">Discovery set <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></Link></div>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}><FontAwesomeIcon icon={open ? faXmark : faBars} aria-hidden="true" /></button>
    </nav>
    <div id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} hidden={!open}><Link href="#collection" onClick={close}>The collection</Link><Link href="#philosophy" onClick={close}>Our story</Link><Link href="#find-your-scent" onClick={close}>Find your scent</Link><Link href="#discovery" onClick={close}>Discovery set</Link></div>
  </header>;
}

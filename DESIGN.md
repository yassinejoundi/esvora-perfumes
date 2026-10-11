# ESVORA digital design

## Brand promise

ESVORA is a contemporary feminine fragrance concept. Its line is **A feeling that stays.** Three scents express three moods: Aura is luminous, Muse is romantic, Noir is intimate. The site should feel like a fashion editorial with a clear route to the collection. The products, prices, and availability are still conceptual; never claim they are manufactured, tested, or ready to ship.

## Visual direction

- Quiet confidence. Use generous ivory space, sculptural still-life photography, fine rules, and a measured asymmetry.
- Core colors: ivory `#F7F2ED`, soft white `#FFFCF8`, espresso `#30232B`, blush `#E9D2D1`, dusty rose `#B98D91`, champagne `#C4A77D`.
- Scent accents: Aura `#E8D5A9`, Muse `#D6A5B1`, Noir `#5A273E`. Reserve accents for their own chapters, not every control.
- Use Cormorant Garamond for expressive headlines and Geist for navigation and body text. Keep body copy at least 16px. Large headings stay broad and short, with a maximum of three lines on narrow screens.
- Photography is original and cohesive: thick-base rectangular glass, brushed champagne cap, warm natural light, tactile silk and stone. Avoid generic stock images, fake customer portraits, and in-image text.

## Layout and conversion

1. Sticky minimal navigation with visible collection and story paths.
2. Cinematic hero with one promise and direct collection CTA.
3. Three-card collection that distinguishes scents by mood, notes, and image.
4. Short philosophy chapter about scent and memory.
5. A discover-your-mood interaction that recommends one of the three scents without pretending to diagnose taste.
6. Discovery set story and final collection CTA.
7. Footer with working on-page links and honest concept-stage language.

Use wide compositions and substantial section spacing. Text and controls stay within safe gutters. At 320px and 200% zoom, content remains reachable without horizontal scrolling. Avoid invented prices, shipping promises, reviews, or newsletter capture without a service.

## Motion

GSAP ScrollTrigger guides images and text between chapters, with a pinned collection heading only where the viewport can support it. Motion for local button and card feedback uses Motion or CSS. Anchor navigation remains native. Every animated element is fully readable when animation is absent, and `prefers-reduced-motion` disables scrolling and transform choreography.

## Components and assets

Each homepage section owns its own file in `components/`. Keep the page composition readable in `app/page.tsx`; put only interactive sections behind a client boundary. Original generated photographs live in `public/images/` with stable descriptive names. Use `next/image` with meaningful alt text and reserved dimensions.

## Quality gate

Check build and lint. Inspect desktop and narrow layouts, keyboard focus, menu controls, image loading, working anchors, and reduced motion. Do not add a checkout or submit flow until real commerce requirements exist.

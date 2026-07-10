import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.defaults({ ease: 'power3.out', duration: 0.7 });

/**
 * Landing-page motion: one hero timeline + purposeful scroll reveals.
 * Respects prefers-reduced-motion via gsap.matchMedia().
 */
export function initMotion(root: ParentNode = document): void {
  const mm = gsap.matchMedia();

  mm.add(
    {
      motionOk: '(prefers-reduced-motion: no-preference)',
      reduceMotion: '(prefers-reduced-motion: reduce)',
    },
    (context) => {
      const { reduceMotion } = context.conditions as {
        motionOk: boolean;
        reduceMotion: boolean;
      };

      if (reduceMotion) {
        gsap.set(
          root.querySelectorAll(
            '[data-hero-brand], [data-hero-title], [data-hero-sub], [data-hero-cta], [data-hero-meta], [data-hero-shot], [data-pain], [data-feature-copy], [data-feature-shot], [data-roadmap-card], [data-download-platform], [data-section-head]',
          ),
          { clearProps: 'all' },
        );
        return;
      }

      const hero = root.querySelector<HTMLElement>('[data-hero]');
      if (hero) {
        const brand = hero.querySelector('[data-hero-brand]');
        const title = hero.querySelector('[data-hero-title]');
        const sub = hero.querySelector('[data-hero-sub]');
        const ctas = hero.querySelectorAll('[data-hero-cta]');
        const meta = hero.querySelector('[data-hero-meta]');
        const shot = hero.querySelector('[data-hero-shot]');

        gsap.set([brand, title, sub, ctas, meta, shot].filter(Boolean), {
          autoAlpha: 0,
        });
        gsap.set([title, sub, meta].filter(Boolean), { y: 28 });
        gsap.set(ctas, { y: 16 });
        gsap.set(shot, { y: 40, scale: 0.97 });
        gsap.set(brand, { y: 12, scale: 0.92 });

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.to(brand, { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 }, 0.05)
          .to(title, { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.25')
          .to(sub, { autoAlpha: 1, y: 0, duration: 0.55 }, '-=0.4')
          .to(
            ctas,
            { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08 },
            '-=0.3',
          )
          .to(meta, { autoAlpha: 1, y: 0, duration: 0.4 }, '-=0.25')
          .to(
            shot,
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.85, ease: 'power2.out' },
            '-=0.2',
          );

        if (shot) {
          gsap.to(shot, {
            y: -24,
            ease: 'none',
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.6,
            },
          });
        }
      }

      const pain = root.querySelector('[data-pain]');
      if (pain) {
        const line = pain.querySelector('[data-pain-line]');
        const fix = pain.querySelector('[data-pain-fix]');
        gsap.from([line, fix].filter(Boolean), {
          autoAlpha: 0,
          y: 24,
          duration: 0.65,
          stagger: 0.12,
          scrollTrigger: {
            trigger: pain,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        });
      }

      root.querySelectorAll<HTMLElement>('[data-feature]').forEach((feature, i) => {
        const copy = feature.querySelector('[data-feature-copy]');
        const shotEl = feature.querySelector('[data-feature-shot]');
        const fromX = i % 2 === 0 ? -28 : 28;

        if (copy) {
          gsap.from(copy, {
            autoAlpha: 0,
            x: fromX,
            duration: 0.7,
            scrollTrigger: {
              trigger: feature,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }

        if (shotEl) {
          gsap.from(shotEl, {
            autoAlpha: 0,
            y: 36,
            scale: 0.98,
            duration: 0.8,
            delay: 0.08,
            scrollTrigger: {
              trigger: feature,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
      });

      const roadmap = root.querySelector('[data-roadmap]');
      if (roadmap) {
        const head = roadmap.querySelector('[data-section-head]');
        const cards = roadmap.querySelectorAll('[data-roadmap-card]');
        if (head) {
          gsap.from(head, {
            autoAlpha: 0,
            y: 20,
            duration: 0.55,
            scrollTrigger: {
              trigger: roadmap,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
        if (cards.length) {
          gsap.from(cards, {
            autoAlpha: 0,
            y: 28,
            duration: 0.55,
            stagger: 0.1,
            scrollTrigger: {
              trigger: roadmap,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
          });
        }
      }

      const download = root.querySelector('[data-download]');
      if (download) {
        const head = download.querySelector('[data-section-head]');
        const platforms = download.querySelectorAll('[data-download-platform]');
        if (head) {
          gsap.from(head, {
            autoAlpha: 0,
            y: 20,
            duration: 0.55,
            scrollTrigger: {
              trigger: download,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          });
        }
        if (platforms.length) {
          gsap.from(platforms, {
            autoAlpha: 0,
            y: 24,
            duration: 0.5,
            stagger: 0.1,
            scrollTrigger: {
              trigger: download,
              start: 'top 72%',
              toggleActions: 'play none none none',
            },
          });
        }
      }

      const refresh = () => ScrollTrigger.refresh();
      root.querySelectorAll('img').forEach((img) => {
        if (!img.complete) {
          img.addEventListener('load', refresh, { once: true });
        }
      });
      window.addEventListener('load', refresh, { once: true });

      return () => {
        window.removeEventListener('load', refresh);
      };
    },
  );
}

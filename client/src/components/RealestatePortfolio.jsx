import React, { useEffect } from 'react';
import './realestate-portfolio.css';

export default function RealestatePortfolio({ onClose }) {
  useEffect(() => {
    // Cursor
    const cur = document.getElementById('cur');
    const ring = document.getElementById('cur-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    const mm = (e) => { mx = e.clientX; my = e.clientY; if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; } };
    document.addEventListener('mousemove', mm);
    let rafId;
    const anim = () => { rx += (mx - rx) * .12; ry += (my - ry) * .12; if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; } rafId = requestAnimationFrame(anim); };
    anim();

    // Loader hide simulation
    const loader = document.getElementById('loader');
    const hideLoader = () => { if (loader) loader.classList.add('out'); };
    window.addEventListener('load', hideLoader);

    // Scroll reveal
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }); }, { threshold: .1 });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));

    return () => { document.removeEventListener('mousemove', mm); cancelAnimationFrame(rafId); window.removeEventListener('load', hideLoader); obs.disconnect(); };
  }, []);

  return (
    <div className="real-overlay">
      <div className="real-close" onClick={onClose}>✕</div>

      <div id="cur" className="cursor"></div>
      <div id="cur-ring" className="cursor-ring"></div>

      <div className="loader" id="loader">
        <div className="loader-name">A · M</div>
        <div className="loader-bar-wrap"><div className="loader-bar"></div></div>
      </div>

      <nav className="real-nav">
        <div className="nav-brand">Aryan <span>Malik</span></div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#properties">Properties</a>
          <a href="#services">Services</a>
          <a href="#process">Process</a>
        </div>
        <a className="nav-contact">Book Consultation</a>
      </nav>

      <section className="hero">
        <div className="hero-bg parallax-bg"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">Luxury Real Estate Portfolio</div>
          <h1 className="hero-h1">Find Your<br /><em>Perfect</em><br />Residence</h1>
          <p className="hero-sub">Curating exceptional properties for discerning clients.</p>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-left reveal-left">
          <div className="section-eyebrow">Who I Am</div>
          <h2 className="section-title">Crafting <em>Exceptional</em><br />Real Estate Journeys</h2>
          <p className="about-desc">With over a decade navigating India's most prestigious real estate markets, I bring market intelligence, negotiation mastery, and a commitment to finding the perfect space.</p>
        </div>
        <div className="about-right reveal-right">
          <div className="about-img-frame">
            <div className="about-portrait-placeholder">Portrait</div>
          </div>
        </div>
      </section>

      <section className="properties" id="properties">
        <div className="props-header reveal">
          <div>
            <div className="section-eyebrow">Featured Listings</div>
            <h2 className="section-title">Selected <em>Properties</em></h2>
          </div>
        </div>

        <div className="props-grid">
          <div className="prop-card reveal">
            <div className="prop-visual">
              <div className="prop-inner-bg"></div>
              <span className="prop-tag">Featured</span>
              <div className="prop-info">
                <div className="prop-loc">Juhu, Mumbai</div>
                <div className="prop-name">Villa Aurum</div>
                <div className="prop-price">₹ 18.5 Crore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="real-footer">
        <div className="foot-brand">Aryan Malik · Real Estate</div>
      </footer>
    </div>
  );
}

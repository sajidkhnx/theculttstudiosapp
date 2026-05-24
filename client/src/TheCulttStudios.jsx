import React, { useEffect, useState } from 'react';
import './theculttstudios.css';
// external full-page HTML will open in a new tab from `client/public`

export default function TheCulttStudios() {
  // no overlay; work items open full pages in new tab
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      setTimeout(() => {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
      }, 60);
    };

    document.addEventListener('mousemove', handleMouseMove);

    const interactiveEls = Array.from(document.querySelectorAll('a, button'));
    const enterHandler = () => {
      cursor.style.width = '6px';
      cursor.style.height = '6px';
      ring.style.width = '60px';
      ring.style.height = '60px';
    };
    const leaveHandler = () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      ring.style.width = '40px';
      ring.style.height = '40px';
    };

    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', enterHandler);
      el.addEventListener('mouseleave', leaveHandler);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const fadeEls = Array.from(document.querySelectorAll('.fade-up'));
    fadeEls.forEach((el) => observer.observe(el));

    const heroEls = Array.from(document.querySelectorAll('.hero .fade-up'));
    const timeouts = [];
    heroEls.forEach((el, i) => {
      const t = setTimeout(() => el.classList.add('visible'), 200 + i * 150);
      timeouts.push(t);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', enterHandler);
        el.removeEventListener('mouseleave', leaveHandler);
      });
      observer.disconnect();
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursor-ring"></div>

      <nav>
        <a href="#" className="nav-logo">
          <img src="https://scontent.cdninstagram.com/v/t51.82787-19/695843590_17925167370338107_6530331016353766863_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=111&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy40ODEuQzMifQ%3D%3D&_nc_ohc=nfuNDdygN_MQ7kNvwEAkJDg&_nc_oc=AdpHrMadBSj5DNNTOB-GZGjxWvgGpnDRNH76VsxZpRQplOiuaFHnphdtcYWmrdETG7Ujw1nU5erZLVwUEu4UR0WQ&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=06kz6D4EZdtNDEUfKyTarA&_nc_ss=7b6a8&oh=00_Af4SPSYIYkjXe4FkVJX3ekcbiVR79HfJn2ZhfzTZvmWSUw&oe=6A12FBA8"
            alt="The Cultt Studio"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <span className="glitch">THE CULTT</span>
        </a>

        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="nav-cta">Start Project</a>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <div className="hero-tag fade-up">Digital Creative Agency</div>
          <h1 className="fade-up">WE BUILD<br /><span className="accent-text">DIGITAL</span><br />STORIES</h1>
          <p className="hero-desc fade-up">Tech-driven, frame-perfect, story-first. We design apps, craft edits, and build experiences that don't just look good — they feel unforgettable.</p>
          <div className="hero-btns fade-up">
            <a href="#work" className="btn-primary">View Our Work</a>
            <a href="#contact" className="btn-secondary">
              Let's Talk
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="hero-scroll">
            <span className="scroll-line"></span>
            Scroll to explore
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <div className="hero-img-container">
              <div className="hero-img-glow"></div>
              <img src="/images/thebanner.png" alt="The Cultt Studio banner" />
            </div>
            <span className="floating-badge badge-1">App Dev</span>
            <span className="floating-badge badge-2">Video Edits</span>
            <span className="floating-badge badge-3">UI / UX</span>
          </div>
        </div>
      </section>

      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-item"><span className="marquee-dot"></span>App Development</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Video Editing</div>
          <div className="marquee-item"><span className="marquee-dot"></span>UI/UX Design</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Brand Identity</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Motion Graphics</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Digital Stories</div>
          <div className="marquee-item"><span className="marquee-dot"></span>App Development</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Video Editing</div>
          <div className="marquee-item"><span className="marquee-dot"></span>UI/UX Design</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Brand Identity</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Motion Graphics</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Digital Stories</div>
        </div>
      </div>

      <section className="services" id="services">
        <div className="section-header">
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our Services</h2>
          </div>
          <div className="section-count">03 — services</div>
        </div>

        <div className="services-grid">
          <div className="service-card fade-up">
            <div className="service-num">01</div>
            <span className="service-icon">⚡</span>
            <div className="service-name">Tech & Apps</div>
            <p className="service-desc">We build fast, scalable, and beautiful applications from concept to deployment. Mobile or web — we make it real.</p>
            <div className="service-arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div className="service-card fade-up">
            <div className="service-num">02</div>
            <span className="service-icon">🎞</span>
            <div className="service-name">Frames & Design</div>
            <p className="service-desc">Precision UI/UX, visual identities, and interface design that frames your brand in its most powerful light.</p>
            <div className="service-arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div className="service-card fade-up">
            <div className="service-num">03</div>
            <span className="service-icon">🎬</span>
            <div className="service-name">Edits & Stories</div>
            <p className="service-desc">Cinematic video edits, reels, and motion content that make your story hit different. Every frame, intentional.</p>
            <div className="service-arrow">
              <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="stat-item fade-up">
          <div className="stat-num">50+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div className="stat-item fade-up">
          <div className="stat-num">100%</div>
          <div className="stat-label">Client Satisfaction</div>
        </div>
        <div className="stat-item fade-up">
          <div className="stat-num">3</div>
          <div className="stat-label">Core Disciplines</div>
        </div>
        <div className="stat-item fade-up">
          <div className="stat-num">∞</div>
          <div className="stat-label">Creative Limits</div>
        </div>
      </div>

      <section className="work" id="work">
        <div className="section-header">
          <div>
            <div className="section-label">Selected Works</div>
            <h2 className="section-title">Our Portfolio</h2>
          </div>
          <div className="section-count">Latest Projects</div>
        </div>

        <div className="work-grid">
          <a
            className="work-item pattern-1 fade-up"
            href="/realestate-portfolio.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundImage: "url('/images/realstate.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <img className="work-img" src="/images/realstate.png" alt="Project preview" />
            <div className="work-overlay">
              <div className="work-cat">Web and App Development</div>
              <div className="work-title">Full-Stack Experience</div>
            </div>
          </a>
          <a className="work-item pattern-2 fade-up" href="/realestate-portfolio.html" target="_blank" rel="noopener noreferrer">
            <div className="work-overlay">
              <div className="work-cat">Video Edit</div>
              <div className="work-title">Cinematic Brand Reel</div>
            </div>
          </a>
          <a className="work-item pattern-3 fade-up" href="/project-dashboard.html" target="_blank" rel="noopener noreferrer">
            <img className="work-img" src="/images/photos-dash.png" alt="Dashboard preview" />
            <div className="work-overlay">
              <div className="work-cat">Data Analysis</div>
              <div className="work-title">Dashboard Interface System</div>
            </div>
          </a>
        </div>
      </section>

      {/* full pages open in new tabs; components retained in repo if you want in-app overlays later */}

      <section className="process" id="process">
        <div className="section-header">
          <div>
            <div className="section-label">How It Works</div>
            <h2 className="section-title">Our Process</h2>
          </div>
          <div className="section-count">04 steps</div>
        </div>

        <div className="process-steps">
          <div className="process-step fade-up">
            <div className="step-num">01</div>
            <div className="step-name">Discovery</div>
            <p className="step-desc">Deep dive into your brand, goals, and audience to understand what we're building and why it matters.</p>
          </div>
          <div className="process-step fade-up">
            <div className="step-num">02</div>
            <div className="step-name">Strategy</div>
            <p className="step-desc">We map out the plan — tech stack, design direction, content flow — before a single pixel is moved.</p>
          </div>
          <div className="process-step fade-up">
            <div className="step-num">03</div>
            <div className="step-name">Creation</div>
            <p className="step-desc">This is where the magic happens. Design, build, edit — crafted with obsessive attention to every detail.</p>
          </div>
          <div className="process-step fade-up">
            <div className="step-num">04</div>
            <div className="step-name">Launch</div>
            <p className="step-desc">Deploy, publish, and amplify. We make sure your work gets seen by the right people the right way.</p>
          </div>
        </div>
      </section>

      <section className="cta" id="contact">
        <div className="cta-label">Ready to Create?</div>
        <h2>Let's Build<br />Something<br />Iconic</h2>
        <p className="cta-desc">Whether you have a clear vision or just a spark of an idea — we're the studio to make it real, beautiful, and unforgettable.</p>
        <a href="https://www.instagram.com/yootidy/" className="cta-email" target="_blank" rel="noopener noreferrer">
          @theculttstudios ↗
        </a>
      </section>

      <footer>
        <div className="footer-logo">
          <img
            src="https://scontent.cdninstagram.com/v/t51.82787-19/695843590_17925167370338107_6530331016353766863_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=111&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy40ODEuQzMifQ%3D%3D&_nc_ohc=nfuNDdygN_MQ7kNvwEAkJDg&_nc_oc=AdpHrMadBSj5DNNTOB-GZGjxWvgGpnDRNH76VsxZpRQplOiuaFHnphdtcYWmrdETG7Ujw1nU5erZLVwUEu4UR0WQ&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=06kz6D4EZdtNDEUfKyTarA&_nc_ss=7b6a8&oh=00_Af4SPSYIYkjXe4FkVJX3ekcbiVR79HfJn2ZhfzTZvmWSUw&oe=6A12FBA8"
            alt=""
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          The Cultt Studio
        </div>
        <div className="footer-mid">© 2026 The Cultt Studio. All Rights Reserved.</div>
        <div className="footer-social">
          <a href="https://www.instagram.com/yootidy/" target="_blank" rel="noopener noreferrer">Instagram</a>
          
        </div>
      </footer>
    </>
  );
}

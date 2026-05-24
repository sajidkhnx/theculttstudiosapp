import React, { useEffect } from 'react';
import './project-dashboard.css';

export default function ProjectDashboard({ onClose }) {
  useEffect(() => {
    // Cursor
    const cur = document.getElementById('cur');
    const trail = document.getElementById('cur-trail');
    let mx = 0, my = 0, tx = 0, ty = 0;
    const mm = (e) => { mx = e.clientX; my = e.clientY; if (cur) { cur.style.left = mx + 'px'; cur.style.top = my + 'px'; } };
    document.addEventListener('mousemove', mm);
    let rafId;
    const loop = () => { tx += (mx - tx) * .15; ty += (my - ty) * .15; if (trail) { trail.style.left = tx + 'px'; trail.style.top = ty + 'px'; } rafId = requestAnimationFrame(loop); };
    loop();

    // Hover states
    const els = Array.from(document.querySelectorAll('a,button,.proj-row,.kpi-card,.stack-pill,.tl-item'));
    const enter = () => document.body.classList.add('cursor-big');
    const leave = () => document.body.classList.remove('cursor-big');
    els.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave); });

    // Clock
    const tick = () => {
      const now = new Date();
      const el = document.getElementById('clock');
      if (el) el.textContent = now.toLocaleTimeString('en-IN', { hour12: false });
    };
    tick();
    const clk = setInterval(tick, 1000);

    // Progress bars animate on mount
    const onLoadAnim = () => {
      document.querySelectorAll('.prog-fill').forEach(el => {
        const w = el.style.width; el.style.width = '0';
        setTimeout(() => { el.style.transition = 'width 1s ease'; el.style.width = w; }, 300);
      });
    };
    setTimeout(onLoadAnim, 80);

    return () => {
      document.removeEventListener('mousemove', mm);
      cancelAnimationFrame(rafId);
      els.forEach(el => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave); });
      clearInterval(clk);
    };
  }, []);

  return (
    <div className="proj-overlay">
      <div className="proj-close" onClick={onClose}>✕</div>
      <div className="os-wrap">
        <div id="cur" className="cursor"></div>
        <div id="cur-trail" className="cursor-trail"></div>

        <header className="topbar">
          <div className="tb-logo">Portfolio OS <span className="tb-path">/ Dashboard</span></div>
          <div className="tb-right">
            <div className="tb-status">Online</div>
            <div className="tb-time" id="clock">--:--:--</div>
            <div className="tb-avatar">AM</div>
          </div>
        </header>

        <aside className="sidebar">
          <div className="sb-section">Overview</div>
          <a className="sb-item active">Projects</a>
          <a className="sb-item">Teams</a>
          <a className="sb-item">Calendar</a>
          <div className="sb-footer">
            <div className="sb-user">
              <div className="sb-user-av">AM</div>
              <div>
                <div className="sb-user-name">The Cultt</div>
                <div className="sb-user-role">Agency</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="main">
          <div className="page-header">
            <div>
              <div className="page-title">Project Dashboard</div>
              <div className="page-sub">Active projects and team activity</div>
            </div>
            <div className="header-actions">
              <button className="btn-filter">Filter</button>
              <button className="btn-new">New Project</button>
            </div>
          </div>

          <div className="kpi-strip">
            <div className="kpi-card c-cyan">
              <div className="kpi-label">Total Projects</div>
              <div className="kpi-val">12</div>
            </div>
            <div className="kpi-card c-violet">
              <div className="kpi-label">In Progress</div>
              <div className="kpi-val">5</div>
            </div>
            <div className="kpi-card c-pink">
              <div className="kpi-label">Completed</div>
              <div className="kpi-val">7</div>
            </div>
            <div className="kpi-card c-amber">
              <div className="kpi-label">Client Rating</div>
              <div className="kpi-val">4.9</div>
            </div>
          </div>

          <div className="two-col">
            <div className="panel">
              <div className="panel-head">
                <div className="panel-title"><span className="dot dot-cyan"></span> Active Projects</div>
                <button className="panel-action">View all →</button>
              </div>
              <div className="proj-row header">
                <div className="col">Project</div>
                <div className="col">Category</div>
                <div className="col">Progress</div>
                <div className="col">Team</div>
                <div className="col">Status</div>
              </div>
              {/* sample rows omitted for brevity (styles handle layout) */}
              <div className="proj-row">
                <div className="col">
                  <div className="proj-name-wrap">
                    <div className="proj-icon pi-cyan">⚡</div>
                    <div>
                      <div className="proj-name">NeoBank App</div>
                      <div className="proj-type">React Native · FinTech</div>
                    </div>
                  </div>
                </div>
                <div className="col"><span className="tag tag-cyan">App Dev</span></div>
                <div className="col"><div className="prog-wrap"><div className="prog-bar"><div className="prog-fill prog-cyan" style={{width:'78%'}}></div></div><span className="prog-pct">78%</span></div></div>
                <div className="col"><div className="av-stack"><div className="av av-c">AM</div><div className="av av-v">RK</div></div></div>
                <div className="col"><span className="tag tag-cyan">Active</span></div>
              </div>
            </div>

            <div className="right-col">
              <div className="panel">
                <div className="panel-head"><div className="panel-title"><span className="dot dot-violet"></span> Recent Activity</div></div>
                <div className="activity-list">
                  <div className="activity-item">
                    <div className="act-line"><div className="act-dot" style={{background:'var(--cyan)'}}></div><div className="act-connector"></div></div>
                    <div className="act-body"><div className="act-text"><strong>NeoBank</strong> — pushed build v0.7.2 to staging</div><div className="act-time">2 min ago</div></div>
                  </div>
                </div>
              </div>

              <div className="panel">
                <div className="panel-head"><div className="panel-title"><span className="dot dot-pink"></span> Skill Stack</div></div>
                <div className="skills-bars">
                  <div className="skill-row"><div className="skill-meta"><span className="skill-name">React / Next.js</span><span className="skill-pct">95%</span></div><div className="skill-track"><div className="skill-fill" style={{width:'95%',background:'var(--cyan)'}}></div></div></div>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Award, Star, Calendar } from 'lucide-react';

export default function Hero({ onExploreClick, onScheduleClick, onCarClick, heroCar }) {
  const stats = [
    { number: '500+', label: 'Exotic Vehicles', sub: 'In Showroom Stock' },
    { number: '99.4%', label: 'Satisfied Buyers', sub: 'Verified 5-Star Reviews' },
    { number: '24/7', label: 'VIP Concierge', sub: 'Nationwide Transport' },
    { number: '15+', label: 'Industry Awards', sub: 'Excellence in Automotive' }
  ];

  return (
    <section style={{
      position: 'relative',
      padding: '60px 0 80px 0',
      background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(229, 9, 20, 0.18), transparent 70%)',
      borderBottom: '1px solid var(--border-color)',
      overflow: 'hidden'
    }}>
      <div className="container">
        
        {/* Top Hero Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column Text Content */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <span className="badge badge-red" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                <Zap size={14} /> Official DMS Certified Showroom
              </span>
            </div>

            <h1 style={{
              fontSize: '3.6rem',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Elevate Your Drive. <br />
              <span style={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #E50914 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Unmatched Power.
              </span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              marginBottom: '32px',
              maxWidth: '540px',
              lineHeight: 1.6
            }}>
              Discover elite performance engineering. Explore rare exotic supercars, luxury SUVs, and high-performance exotics inspected with our 150-point certified guarantee.
            </p>

            {/* Dual CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <button 
                onClick={onExploreClick}
                className="btn btn-primary"
                style={{ padding: '14px 28px', fontSize: '1rem' }}
              >
                Explore Inventory <ArrowRight size={18} />
              </button>

              <button 
                onClick={onScheduleClick}
                className="btn btn-secondary"
                style={{ padding: '14px 28px', fontSize: '1rem' }}
              >
                <Calendar size={18} color="var(--primary)" /> Schedule Test Drive
              </button>
            </div>

            {/* Micro Rating Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px 18px',
              background: 'rgba(255,255,255,0.03)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(255,255,255,0.06)',
              width: 'fit-content'
            }}>
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} color="#FBBF24" fill="#FBBF24" />
                ))}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong style={{ color: '#FFF' }}>4.95 / 5.0</strong> Rated by 1,200+ Exotic Owners
              </div>
            </div>
          </div>

          {/* Right Column Hero Car Stage */}
          <div style={{ position: 'relative' }}>
            {/* Glowing Accent Ring */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '110%',
              height: '110%',
              background: 'radial-gradient(circle, rgba(229, 9, 20, 0.22) 0%, transparent 65%)',
              zIndex: 0,
              pointerEvents: 'none'
            }} />

            {/* Main Featured Hero Card */}
            <div 
              onClick={() => onCarClick(heroCar)}
              className="glass-panel red-glow-box"
              style={{
                position: 'relative',
                zIndex: 1,
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                padding: '16px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ position: 'relative', height: '320px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                <img 
                  src={heroCar.mainImage} 
                  alt={heroCar.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                
                {/* Overlay Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  display: 'flex',
                  gap: '8px'
                }}>
                  <span className="badge badge-red"><Zap size={12} /> Showroom Hero</span>
                  <span className="badge badge-gold"><ShieldCheck size={12} /> Certified</span>
                </div>

                {/* Price Pill */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  right: '16px',
                  background: 'rgba(11, 14, 20, 0.85)',
                  backdropFilter: 'blur(10px)',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  border: '1px solid rgba(229,9,20,0.4)',
                  color: '#FFF',
                  fontWeight: 800,
                  fontSize: '1.2rem'
                }}>
                  ${heroCar.price.toLocaleString()}
                </div>
              </div>

              {/* Title & Quick Spec Row */}
              <div style={{ padding: '16px 8px 6px 8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.4rem', color: '#FFF' }}>{heroCar.name}</h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 700 }}>
                    Est. ${heroCar.monthlyEstimate}/mo
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  marginTop: '14px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)'
                }}>
                  <div><strong style={{ color: '#FFF' }}>{heroCar.hp} HP</strong> Engine</div>
                  <div><strong style={{ color: '#FFF' }}>{heroCar.zeroToSixty}</strong> (0-60 mph)</div>
                  <div><strong style={{ color: '#FFF' }}>{heroCar.topSpeed}</strong> Top Speed</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Key Stats Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginTop: '60px',
          padding: '24px',
          background: 'rgba(20, 25, 35, 0.4)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }} className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '2.2rem',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1
              }}>
                {stat.number}
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', marginTop: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 500px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

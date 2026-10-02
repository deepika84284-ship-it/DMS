import React from 'react';
import { Award, ShieldCheck, Users, Trophy, Sparkles } from 'lucide-react';

export default function AboutPage({ setActiveTab }) {
  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Hero Banner */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="section-subtitle">Excellence in Automotive</span>
          <h1 style={{ fontSize: '3.2rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>
            About DMS Car Store
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '14px auto 0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Founded on a passion for motorsport heritage and automotive perfection, DMS Car Store has served collectors and automotive enthusiasts for over two decades.
          </p>
        </div>

        {/* Story Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
          marginBottom: '80px'
        }} className="about-grid">
          <div>
            <span className="badge badge-red" style={{ marginBottom: '12px' }}>
              <Trophy size={14} /> Our Mission
            </span>
            <h2 style={{ color: '#FFF', fontSize: '2.2rem', fontFamily: 'var(--font-heading)', marginBottom: '18px' }}>
              Redefining the Luxury Car Purchasing Experience
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
              At DMS Car Store, we believe acquiring an exotic vehicle should be as thrilling as driving one. Every supercar in our inventory undergoes a rigorous 150-point technical certification before reaching our showroom floor.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
              Our concierge team coordinates seamless nationwide delivery in enclosed climate-controlled transporters, ensuring your dream car arrives in pristine factory condition.
            </p>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80" 
              alt="Showroom" 
              style={{ width: '100%', height: '360px', borderRadius: 'var(--radius-xl)', objectFit: 'cover', border: '1px solid rgba(255,255,255,0.1)' }}
            />
          </div>
        </div>

        {/* Core Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {[
            { title: '100% Authentic Provenance', desc: 'Carfax verified history reports and documented service records for total peace of mind.', icon: <ShieldCheck size={28} color="var(--primary)" /> },
            { title: 'Bespoke Private Allocations', desc: 'Access to off-market rare exotic builds and limited production track cars.', icon: <Sparkles size={28} color="#FBBF24" /> },
            { title: 'White-Glove VIP Service', desc: 'Personalized concierge handling all paperwork, trade-ins, and transport arrangements.', icon: <Users size={28} color="#34D399" /> }
          ].map((card, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ marginBottom: '16px' }}>{card.icon}</div>
              <h3 style={{ color: '#FFF', fontSize: '1.25rem', marginBottom: '8px' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{card.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

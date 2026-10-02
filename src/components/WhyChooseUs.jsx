import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Award, Lock, Sparkles } from 'lucide-react';

export default function WhyChooseUs({ onTradeInClick }) {
  const perks = [
    {
      icon: <ShieldCheck size={32} color="var(--primary)" />,
      title: "150-Point CPO Inspection",
      desc: "Every supercar undergoes rigorous diagnostic testing, mechanical verification, and road testing before being certified."
    },
    {
      icon: <Truck size={32} color="#FBBF24" />,
      title: "Enclosed Transport Delivery",
      desc: "White-glove climate-controlled enclosed trailer delivery straight to your driveway anywhere in the continental United States."
    },
    {
      icon: <RefreshCw size={32} color="#34D399" />,
      title: "7-Day Return Guarantee",
      desc: "Drive with absolute peace of mind. Full return policy within 7 days or 500 miles if not 100% satisfied."
    },
    {
      icon: <Lock size={32} color="#60A5FA" />,
      title: "Guaranteed Clear Titles",
      desc: "Carfax verified clean histories, zero hidden accident records, and guaranteed authentic mileage documentation."
    }
  ];

  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, #111520 100%)',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">The DMS Distinction</span>
          <h2 className="section-title">Why Exotic Buyers Choose DMS</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', maxWidth: '600px', margin: '8px auto 0 auto' }}>
            Setting the global benchmark for luxury automotive sales, transparency, and owner satisfaction.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {perks.map((perk, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '32px 24px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.04)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                border: '1px solid rgba(255,255,255,0.08)'
              }}>
                {perk.icon}
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
                {perk.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trade-In Banner Box */}
        <div className="glass-panel red-glow-box" style={{
          marginTop: '60px',
          padding: '32px 40px',
          borderRadius: 'var(--radius-xl)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          border: '1px solid rgba(229, 9, 20, 0.3)',
          background: 'linear-gradient(90deg, rgba(229, 9, 20, 0.12) 0%, rgba(20, 25, 35, 0.9) 100%)'
        }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '8px' }}>
              <Sparkles size={12} /> Instant Valuation Tool
            </span>
            <h3 style={{ fontSize: '1.6rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>
              Looking to Trade-In or Sell Your Luxury Vehicle?
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '4px' }}>
              Get a guaranteed cash offer within 24 hours based on real-time market data.
            </p>
          </div>

          <button
            onClick={onTradeInClick}
            className="btn btn-primary"
            style={{ padding: '14px 28px', fontSize: '0.95rem' }}
          >
            Get Instant Trade Offer
          </button>
        </div>

      </div>
    </section>
  );
}

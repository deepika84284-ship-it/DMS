import React, { useState } from 'react';
import { SERVICE_PACKAGES } from '../data/cars';
import { Wrench, Cpu, ShieldCheck, Compass, Clock, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicePipelineSection({ onBookService }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Wrench': return <Wrench size={24} color="var(--primary)" />;
      case 'Cpu': return <Cpu size={24} color="#FBBF24" />;
      case 'ShieldCheck': return <ShieldCheck size={24} color="#34D399" />;
      case 'Compass': return <Compass size={24} color="#60A5FA" />;
      default: return <Wrench size={24} color="var(--primary)" />;
    }
  };

  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <span className="section-subtitle">DMS Service & Performance Pipeline</span>
          <h2 className="section-title">Master Automotive Tuning & Care</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', maxWidth: '640px', margin: '8px auto 0 auto' }}>
            Factory-trained master technicians equipped with OEM diagnostic tools, dyno calibration, and exotic paint protection.
          </p>
        </div>

        {/* Packages Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.08)'
                  }}>
                    {getIcon(pkg.icon)}
                  </div>
                  <span className="badge badge-red">{pkg.badge}</span>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>
                  {pkg.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '20px' }}>
                  {pkg.description}
                </p>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  marginBottom: '16px'
                }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', display: 'block' }}>Starting At</span>
                    <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', fontFamily: 'var(--font-heading)' }}>{pkg.price}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    <Clock size={14} color="var(--primary)" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <button
                  onClick={() => onBookService(pkg)}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.9rem' }}
                >
                  Schedule Service <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

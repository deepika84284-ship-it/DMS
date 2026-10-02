import React from 'react';
import { TESTIMONIALS } from '../data/cars';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        
        <div className="section-header">
          <span className="section-subtitle">Verified Owner Feedback</span>
          <h2 className="section-title">Client Stories & Reviews</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
            Hear from enthusiasts and collectors who purchased their dream machines through DMS.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '3px' }}>
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} size={16} color="#FBBF24" fill="#FBBF24" />
                    ))}
                  </div>
                  <Quote size={24} color="rgba(229, 9, 20, 0.3)" />
                </div>

                <p style={{
                  color: '#E2E8F0',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '20px'
                }}>
                  "{item.comment}"
                </p>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255,255,255,0.06)'
              }}>
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover' }}
                />

                <div>
                  <div style={{ color: '#FFF', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {item.name}
                    <CheckCircle2 size={14} color="var(--primary)" />
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>
                    Purchased: {item.car}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

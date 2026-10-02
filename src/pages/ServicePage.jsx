import React from 'react';
import ServicePipelineSection from '../components/ServicePipelineSection';
import { Wrench, Cpu, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function ServicePage({ onBookService }) {
  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-subtitle">Exotic Motorsport Tuning</span>
          <h1 style={{ fontSize: '3rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>
            DMS Master Performance & Service Center
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '12px auto 0 auto' }}>
            State-of-the-art diagnostic bays, factory-certified technicians, and bespoke performance enhancements for elite exotics.
          </p>
        </div>

        {/* Diagnostic Bays Highlight */}
        <div className="glass-panel" style={{
          padding: '40px',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          alignItems: 'center',
          border: '1px solid rgba(229, 9, 20, 0.3)'
        }}>
          <div>
            <span className="badge badge-red" style={{ marginBottom: '12px' }}>
              <Wrench size={12} /> Master Technicians
            </span>
            <h2 style={{ color: '#FFF', fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '16px' }}>
              Factory Trained on Porsche, Ferrari, Audi R8 & AMG
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
              From routine synthetic fluid servicing to custom ECU dyno tuning, our service department handles your investment with meticulous care and original OEM parts.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {['100% Genuine Factory OEM Replacement Parts', 'All-Wheel Drive Dyno Tuning & Track Calibration', 'Climate-Controlled Cleanrooms for Ceramic Coating', 'Complimentary VIP Transport Service Included'].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#FFF', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--primary)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1000&q=80" 
              alt="Service Bay"
              style={{ width: '100%', height: '320px', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }} 
            />
          </div>
        </div>

      </div>

      <ServicePipelineSection onBookService={onBookService} />
    </div>
  );
}

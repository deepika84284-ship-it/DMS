import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage({ onSubmitContact }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Buying an Exotic Car',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitContact(`Thank you ${formData.name}! Your message has been routed to our Senior VIP Sales Concierge.`);
    setFormData({ name: '', email: '', phone: '', interest: 'Buying an Exotic Car', message: '' });
  };

  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="section-subtitle">Connect With Concierge</span>
          <h1 style={{ fontSize: '3rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>
            Contact DMS Car Store
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '12px auto 0 auto' }}>
            Reach out to our sales concierge, schedule a private showroom appointment, or inquire about off-market inventory.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '40px',
          alignItems: 'flex-start'
        }} className="contact-grid">
          
          {/* Left Column: Direct Details */}
          <div>
            <div className="glass-panel" style={{
              padding: '32px',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
                Showroom Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(229,9,20,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin color="var(--primary)" size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '1rem', margin: 0 }}>Flagship Showroom</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                      100 Exotic Motors Blvd, Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(229,9,20,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone color="var(--primary)" size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '1rem', margin: 0 }}>Direct Concierge Hotline</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                      +1 (800) 555-EXOTIC / (310) 555-0199
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(229,9,20,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail color="var(--primary)" size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '1rem', margin: 0 }}>Email Enquiries</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                      vip-concierge@dmscarstore.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(229,9,20,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock color="var(--primary)" size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: '#FFF', fontSize: '1rem', margin: 0 }}>Operating Hours</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                      Mon - Sat: 9:00 AM - 8:00 PM EST<br />Sun: Private Appointments Only
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="glass-panel" style={{
            padding: '36px',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(229, 9, 20, 0.3)'
          }}>
            <h3 style={{ color: '#FFF', fontSize: '1.4rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Your Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Christian Miller"
                  className="input-field"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="christian@example.com"
                    className="input-field"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+1 (555) 000-0000"
                    className="input-field"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Topic of Interest</label>
                <select
                  className="input-field select-field"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                >
                  <option value="Buying an Exotic Car">Acquiring an Exotic Vehicle</option>
                  <option value="Selling or Trading-In">Selling or Trading-In Vehicle</option>
                  <option value="Financing or Leasing">Lease & Capital Financing</option>
                  <option value="Service & Performance Tuning">Service & Performance Tuning</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Message Details *</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Please specify any particular car models, options, or questions..."
                  className="input-field"
                  style={{ resize: 'vertical' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ padding: '14px' }}>
                Send Concierge Message <Send size={16} />
              </button>
            </form>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

import React, { useState } from 'react';
import { Car, Mail, Phone, MapPin, Clock, Send, ShieldCheck, Globe, Share2, MessageSquare } from 'lucide-react';

export default function Footer({ setActiveTab, onSubscribeNewsletter }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    onSubscribeNewsletter(`Subscribed ${email} to VIP DMS Supercar Insider Newsletter!`);
    setEmail('');
  };

  return (
    <footer style={{
      background: '#07090E',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      color: 'var(--text-muted)',
      paddingTop: '70px',
      paddingBottom: '30px'
    }}>
      <div className="container">
        
        {/* Top Newsletter CTA Box */}
        <div className="glass-panel" style={{
          padding: '36px 40px',
          borderRadius: 'var(--radius-xl)',
          marginBottom: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <div>
            <span className="badge badge-red" style={{ marginBottom: '8px' }}>
              <Mail size={12} /> VIP Supercar Insider
            </span>
            <h3 style={{ color: '#FFF', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', margin: '4px 0' }}>
              Receive First-Access to Off-Market Exotic Drops
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Join 15,000+ luxury car collectors receiving private allocation alerts.
            </p>
          </div>

          <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '10px', width: '100%', maxWidth: '420px' }}>
            <input
              type="email"
              placeholder="Enter your VIP email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
              style={{ borderRadius: 'var(--radius-md)' }}
            />
            <button type="submit" className="btn btn-primary">
              Subscribe <Send size={16} />
            </button>
          </form>
        </div>

        {/* 4 Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '40px',
          marginBottom: '50px'
        }} className="footer-grid">
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #E50914 0%, #990000 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Car size={20} color="#FFF" />
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 900, color: '#FFF' }}>
                DMS <span style={{ color: 'var(--primary)' }}>CAR STORE</span>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '20px' }}>
              North America's premier certified luxury performance & exotic supercar dealership. Dedicated to delivering bespoke automotive perfection with white-glove nationwide concierge delivery.
            </p>

            <div style={{ display: 'flex', gap: '12px' }}>
              {[Globe, Share2, MessageSquare, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--primary)';
                    e.currentTarget.style.color = '#FFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'inventory', label: 'Exotic Inventory' },
                { id: 'finance', label: 'Finance & Lease' },
                { id: 'service', label: 'Service & Tuning' },
                { id: 'about', label: 'About DMS Motors' },
                { id: 'contact', label: 'Contact Showroom' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-muted)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Vehicle Categories */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
              Categories
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              {['Supercars & Exotics', 'Luxury SUVs', 'High-Performance Sedans', 'Electric & Hybrid', 'Certified Pre-Owned', 'Off-Market Allocations'].map((cat, i) => (
                <li key={i}>
                  <button
                    onClick={() => {
                      setActiveTab('inventory');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: 0 }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Showroom */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1.05rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>
              Showroom Concierge
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>100 Exotic Motors Blvd, Beverly Hills, CA 90210</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>+1 (800) 555-EXOTIC / (310) 555-0199</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>vip-concierge@dmscarstore.com</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                <span>Mon-Sat: 9am - 8pm EST | Sun: By Appointment</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8rem'
        }}>
          <div>
            © 2026 <strong>DMS Car Store</strong>. All Rights Reserved. Designed with Precision.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>CPO Guarantee Terms</a>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 550px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

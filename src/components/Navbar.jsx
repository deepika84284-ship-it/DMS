import React, { useState } from 'react';
import { 
  Car, 
  Search, 
  Heart, 
  SlidersHorizontal, 
  PhoneCall, 
  Clock, 
  Globe, 
  Menu, 
  X,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  wishlistCount, 
  openWishlist, 
  compareCount, 
  openCompare,
  openTestDrive,
  searchQuery,
  setSearchQuery
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD ($)');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'inventory', label: 'Inventory' },
    { id: 'finance', label: 'Finance & Lease' },
    { id: 'service', label: 'Service & Tuning' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, width: '100%' }}>
      {/* Announcement / Top Info Bar */}
      <div style={{
        background: '#070A0F',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        padding: '6px 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <PhoneCall size={13} color="var(--primary)" /> 
              <span>VIP Concierge: <strong>+1 (800) 555-EXOTIC</strong></span>
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }} className="hide-mobile">
              <Clock size={13} color="var(--primary)" /> 
              <span>Mon - Sat: 9:00 AM - 8:00 PM EST</span>
            </span>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <Globe size={13} color="var(--text-muted)" />
              <select 
                value={currency} 
                onChange={(e) => setCurrency(e.target.value)}
                style={{
                  background: 'transparent',
                  color: 'var(--text-muted)',
                  border: 'none',
                  fontSize: '0.8rem',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="USD ($)" style={{ background: '#141923' }}>USD ($)</option>
                <option value="EUR (€)" style={{ background: '#141923' }}>EUR (€)</option>
                <option value="GBP (£)" style={{ background: '#141923' }}>GBP (£)</option>
                <option value="AED (د.إ)" style={{ background: '#141923' }}>AED (د.إ)</option>
              </select>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span 
              onClick={() => setActiveTab('inventory')} 
              style={{ color: '#FBBF24', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
            >
              <Sparkles size={12} /> Certified CPO Guarantee
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-panel" style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px' }}>
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('home')} 
            style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', userSelect: 'none' }}
          >
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #E50914 0%, #990000 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(229, 9, 20, 0.4)'
            }}>
              <Car size={24} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1 }}>
                DMS <span style={{ color: 'var(--primary)' }}>CAR STORE</span>
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase' }}>
                Exotic & Luxury Motors
              </div>
            </div>
          </div>

          {/* Nav Links (Desktop) */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }} className="hide-mobile">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === link.id ? '#FFFFFF' : 'var(--text-muted)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.95rem',
                  fontWeight: activeTab === link.id ? 700 : 500,
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '6px 2px',
                  transition: 'color 0.2s ease'
                }}
              >
                {link.label}
                {activeTab === link.id && (
                  <span style={{
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: 'var(--primary)',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px rgba(229, 9, 20, 0.8)'
                  }} />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Icons & Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            
            {/* Quick Search Input */}
            <div style={{ position: 'relative' }} className="hide-mobile">
              <Search 
                size={16} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input
                type="text"
                placeholder="Search Porsche, R8, V10..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (activeTab !== 'inventory') setActiveTab('inventory');
                }}
                style={{
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  padding: '8px 14px 8px 36px',
                  color: 'var(--text-main)',
                  fontSize: '0.85rem',
                  outline: 'none',
                  width: '190px',
                  transition: 'all 0.25s ease'
                }}
              />
            </div>

            {/* Wishlist Button */}
            <button
              onClick={openWishlist}
              title="Saved Wishlist"
              className="btn-icon btn-secondary"
              style={{ position: 'relative' }}
            >
              <Heart size={19} color={wishlistCount > 0 ? '#E50914' : 'currentColor'} fill={wishlistCount > 0 ? '#E50914' : 'none'} />
              {wishlistCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: 'var(--primary)',
                  color: '#FFF',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(229,9,20,0.5)'
                }}>
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Compare Button */}
            <button
              onClick={openCompare}
              title="Compare Vehicles"
              className="btn-icon btn-secondary"
              style={{ position: 'relative' }}
            >
              <SlidersHorizontal size={19} />
              {compareCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  background: '#F59E0B',
                  color: '#000',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  width: '18px',
                  height: '18px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {compareCount}
                </span>
              )}
            </button>

            {/* Test Drive CTA */}
            <button 
              onClick={() => openTestDrive()}
              className="btn btn-primary hide-mobile" 
              style={{ fontSize: '0.875rem', padding: '10px 18px' }}
            >
              <Calendar size={16} /> Test Drive
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="btn-icon btn-secondary"
              style={{ display: 'none' }}
              className="show-mobile-flex"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            background: '#10141D',
            borderTop: '1px solid var(--border-color)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px'
          }}>
            <div style={{ position: 'relative', marginBottom: '8px' }}>
              <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search models or makes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setActiveTab('inventory')}
                style={{
                  width: '100%',
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '10px 14px 10px 36px',
                  color: '#FFF',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: activeTab === link.id ? 'rgba(229, 9, 20, 0.12)' : 'transparent',
                  border: activeTab === link.id ? '1px solid rgba(229, 9, 20, 0.3)' : 'none',
                  borderRadius: '8px',
                  color: activeTab === link.id ? '#FFF' : 'var(--text-muted)',
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {link.label}
              </button>
            ))}

            <button 
              onClick={() => {
                setMobileMenuOpen(false);
                openTestDrive();
              }}
              className="btn btn-primary"
              style={{ width: '100%', marginTop: '8px' }}
            >
              <Calendar size={16} /> Schedule Test Drive
            </button>
          </div>
        )}
      </nav>
      
      {/* Mobile responsive helper styles */}
      <style>{`
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .show-mobile-flex { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile-flex { display: none !important; }
        }
      `}</style>
    </header>
  );
}

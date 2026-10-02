import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Mail, Phone, CheckCircle2 } from 'lucide-react';

export default function TestDriveModal({ isOpen, onClose, selectedCar, onSubmitSuccess }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    locationType: 'showroom', // 'showroom' or 'home_delivery'
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitSuccess(`Test drive scheduled for ${selectedCar ? selectedCar.name : 'Selected Vehicle'}! Confirmation sent to ${formData.email || 'your email'}.`);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1100,
      background: 'rgba(5, 7, 11, 0.85)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div 
        className="glass-panel animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '560px',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          border: '1px solid rgba(229, 9, 20, 0.3)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(229,9,20,0.2)'
        }}
      >
        
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#0F131C'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={20} color="var(--primary)" />
            <div>
              <h3 style={{ color: '#FFF', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', margin: 0 }}>
                Schedule VIP Test Drive
              </h3>
              {selectedCar && (
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Targeting: <strong style={{ color: '#FFF' }}>{selectedCar.name}</strong>
                </span>
              )}
            </div>
          </div>

          <button onClick={onClose} className="btn-icon btn-secondary">
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Full Name *</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Alexander Wright"
              className="input-field"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Email Address *</label>
              <input 
                type="email" 
                required
                placeholder="alexander@example.com"
                className="input-field"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Phone Number *</label>
              <input 
                type="tel" 
                required
                placeholder="+1 (555) 000-0000"
                className="input-field"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Preferred Date *</label>
              <input 
                type="date" 
                required
                className="input-field"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Time Slot</label>
              <select
                className="input-field select-field"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              >
                <option value="10:00 AM">10:00 AM - Morning</option>
                <option value="01:00 PM">01:00 PM - Afternoon</option>
                <option value="04:00 PM">04:00 PM - Late Afternoon</option>
                <option value="06:30 PM">06:30 PM - Evening VIP</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Experience Type</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, locationType: 'showroom' })}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: formData.locationType === 'showroom' ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                  background: formData.locationType === 'showroom' ? 'rgba(229,9,20,0.15)' : 'var(--bg-input)',
                  color: '#FFF',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                In-Showroom VIP Concierge
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, locationType: 'home_delivery' })}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: formData.locationType === 'home_delivery' ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                  background: formData.locationType === 'home_delivery' ? 'rgba(229,9,20,0.15)' : 'var(--bg-input)',
                  color: '#FFF',
                  fontSize: '0.85rem',
                  cursor: 'pointer'
                }}
              >
                At-Home Private Test Drive
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px', padding: '14px' }}>
            Confirm Test Drive Reservation
          </button>

        </form>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, Sparkles, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TradeInModal({ isOpen, onClose, onSubmitSuccess }) {
  if (!isOpen) return null;

  const [tradeData, setTradeData] = useState({
    year: '2021',
    make: 'Porsche',
    model: '911 Carrera S',
    mileage: '12500',
    condition: 'Excellent',
    email: ''
  });

  const [calculatedQuote, setCalculatedQuote] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    // Generate realistic instant appraisal based on inputs
    const baseVal = tradeData.make === 'Porsche' || tradeData.make === 'Ferrari' ? 145000 : 85000;
    const estVal = baseVal - (Number(tradeData.mileage) * 1.2);
    setCalculatedQuote(Math.max(45000, Math.round(estVal)));
  };

  const handleConfirmQuote = () => {
    onSubmitSuccess(`Trade-in offer reserved! A DMS senior buyer will contact ${tradeData.email || 'you'} within 1 hour.`);
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
          maxWidth: '540px',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          border: '1px solid rgba(245, 158, 11, 0.4)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 25px rgba(245, 158, 11, 0.2)'
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
            <Sparkles size={20} color="#FBBF24" />
            <h3 style={{ color: '#FFF', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', margin: 0 }}>
              Instant Trade-In Valuation
            </h3>
          </div>

          <button onClick={onClose} className="btn-icon btn-secondary">
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        {!calculatedQuote ? (
          <form onSubmit={handleCalculate} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Year</label>
                <input 
                  type="number" 
                  required
                  className="input-field"
                  value={tradeData.year}
                  onChange={(e) => setTradeData({ ...tradeData, year: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Make</label>
                <input 
                  type="text" 
                  required
                  className="input-field"
                  value={tradeData.make}
                  onChange={(e) => setTradeData({ ...tradeData, make: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Model & Trim</label>
              <input 
                type="text" 
                required
                className="input-field"
                value={tradeData.model}
                onChange={(e) => setTradeData({ ...tradeData, model: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Approx. Mileage</label>
                <input 
                  type="number" 
                  required
                  className="input-field"
                  value={tradeData.mileage}
                  onChange={(e) => setTradeData({ ...tradeData, mileage: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Condition</label>
                <select
                  className="input-field select-field"
                  value={tradeData.condition}
                  onChange={(e) => setTradeData({ ...tradeData, condition: e.target.value })}
                >
                  <option value="Excellent">Mint / Showroom Condition</option>
                  <option value="Good">Very Good - Minor Wear</option>
                  <option value="Fair">Fair Condition</option>
                </select>
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>Your Email (To Lock In Offer)</label>
              <input 
                type="email" 
                required
                placeholder="your.email@example.com"
                className="input-field"
                value={tradeData.email}
                onChange={(e) => setTradeData({ ...tradeData, email: e.target.value })}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '8px' }}>
              Calculate Guaranteed Trade Value
            </button>
          </form>
        ) : (
          <div style={{ padding: '32px', textAlign: 'center' }}>
            <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
              <CheckCircle2 size={14} /> Instant Market Valuation Complete
            </span>

            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.9rem', uppercase: 'uppercase', marginTop: '10px' }}>
              Estimated Cash Trade Offer For Your {tradeData.year} {tradeData.make} {tradeData.model}
            </h4>

            <div style={{
              fontSize: '3.2rem',
              fontWeight: 900,
              color: '#FBBF24',
              fontFamily: 'var(--font-heading)',
              margin: '16px 0 24px 0'
            }}>
              ${calculatedQuote.toLocaleString()}
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              This offer is valid for 7 days and can be applied directly towards any vehicle in our showroom.
            </p>

            <button onClick={handleConfirmQuote} className="btn btn-primary" style={{ width: '100%', padding: '14px' }}>
              Accept Offer & Lock In Trade-In <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

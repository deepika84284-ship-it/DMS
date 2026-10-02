import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';

export default function FinanceCalculatorSection({ onApplyFinance }) {
  const [vehiclePrice, setVehiclePrice] = useState(250000);
  const [downPayment, setDownPayment] = useState(50000);
  const [interestRate, setInterestRate] = useState(5.4);
  const [loanTerm, setLoanTerm] = useState(60);

  const principal = Math.max(0, vehiclePrice - downPayment);
  const monthlyRate = interestRate / 100 / 12;
  const estimatedMonthly = monthlyRate > 0 
    ? Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1))
    : Math.round(principal / loanTerm);

  const totalPayment = estimatedMonthly * loanTerm;
  const totalInterest = Math.max(0, totalPayment - principal);

  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, var(--bg-dark) 0%, #0F1420 50%, var(--bg-dark) 100%)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Finance & Lease Concierge</span>
          <h2 className="section-title">Interactive Auto Loan Calculator</h2>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px', maxWidth: '600px', margin: '8px auto 0 auto' }}>
            Customize your lease or purchase terms with competitive exotic car financing rates. Instant pre-approval available.
          </p>
        </div>

        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '36px',
          alignItems: 'center'
        }} className="calc-grid">
          
          {/* Left Controls Box */}
          <div className="glass-panel" style={{
            padding: '36px',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px', color: 'var(--primary)', fontWeight: 700 }}>
              <Calculator size={22} />
              <span style={{ fontSize: '1.1rem', color: '#FFF' }}>Adjust Financing Parameters</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Vehicle Price */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
                  <span style={{ color: 'var(--text-muted)' }}>Vehicle Purchase Price</span>
                  <span style={{ color: '#FFF', fontSize: '1.1rem' }}>${vehiclePrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="600000"
                  step="5000"
                  value={vehiclePrice}
                  onChange={(e) => setVehiclePrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Down Payment */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontWeight: 600 }}>
                  <span style={{ color: 'var(--text-muted)' }}>Down Payment Amount</span>
                  <span style={{ color: '#FFF', fontSize: '1.1rem' }}>${downPayment.toLocaleString()} ({Math.round((downPayment/vehiclePrice)*100)}%)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={vehiclePrice * 0.6}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer' }}
                />
              </div>

              {/* Interest Rate & Term Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Estimated APR (% Rate)
                  </label>
                  <select
                    className="input-field select-field"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                  >
                    <option value={3.9}>3.9% - Tier 1 Excellent</option>
                    <option value={5.4}>5.4% - Preferred Rate</option>
                    <option value={6.9}>6.9% - Standard Auto</option>
                    <option value={8.5}>8.5% - Flexible Rate</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Loan Term (Months)
                  </label>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {[36, 48, 60, 72].map((term) => (
                      <button
                        key={term}
                        onClick={() => setLoanTerm(term)}
                        style={{
                          flex: 1,
                          padding: '10px 4px',
                          borderRadius: 'var(--radius-sm)',
                          border: loanTerm === term ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                          background: loanTerm === term ? 'var(--primary)' : 'var(--bg-input)',
                          color: '#FFF',
                          fontWeight: 700,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {term}m
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Summary Display */}
          <div className="glass-panel red-glow-box" style={{
            padding: '40px',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, rgba(20, 25, 35, 0.9) 0%, rgba(229, 9, 20, 0.12) 100%)',
            border: '1px solid rgba(229, 9, 20, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '12px' }}>
                <CheckCircle2 size={12} /> Soft Credit Check (No Impact)
              </span>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '10px' }}>
                Estimated Monthly Payment
              </div>

              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '3.4rem',
                fontWeight: 900,
                color: '#FFFFFF',
                lineHeight: 1.1,
                margin: '8px 0 20px 0',
                textShadow: '0 0 25px rgba(229, 9, 20, 0.4)'
              }}>
                ${estimatedMonthly.toLocaleString()}<span style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: 700 }}>/mo</span>
              </div>

              <div style={{
                padding: '16px',
                background: 'rgba(11, 14, 20, 0.6)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontSize: '0.9rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Net Financed Principal:</span>
                  <strong style={{ color: '#FFF' }}>${principal.toLocaleString()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Total Estimated Interest:</span>
                  <strong style={{ color: '#FFF' }}>${totalInterest.toLocaleString()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Total Out of Pocket:</span>
                  <strong style={{ color: 'var(--primary)' }}>${totalPayment.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <button
              onClick={() => onApplyFinance({ vehiclePrice, downPayment, loanTerm, estimatedMonthly })}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '16px',
                fontSize: '1rem',
                marginTop: '28px'
              }}
            >
              Apply For Pre-Approval <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .calc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

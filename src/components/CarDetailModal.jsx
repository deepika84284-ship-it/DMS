import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  SlidersHorizontal, 
  Zap, 
  Gauge, 
  Fuel, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  DollarSign, 
  Share2, 
  Award,
  ChevronRight
} from 'lucide-react';

export default function CarDetailModal({ 
  car, 
  onClose, 
  onToggleWishlist, 
  isWishlisted, 
  onToggleCompare, 
  isCompared,
  onScheduleTestDrive,
  onReserveCar 
}) {
  if (!car) return null;

  const [activeImage, setActiveImage] = useState(car.mainImage);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs', 'features', 'finance'

  // Quick Finance Calculator State
  const [downPayment, setDownPayment] = useState(Math.round(car.price * 0.2));
  const [termMonths, setTermMonths] = useState(60);
  const interestRate = 5.9; // % APR

  // Calculation
  const loanAmount = Math.max(0, car.price - downPayment);
  const monthlyInterestRate = interestRate / 100 / 12;
  const calculatedMonthly = Math.round(
    (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termMonths)) /
    (Math.pow(1 + monthlyInterestRate, termMonths) - 1)
  );

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(5, 7, 11, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflowY: 'auto'
    }}>
      <div 
        className="glass-panel animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '1050px',
          maxHeight: '92vh',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(229, 9, 20, 0.2)'
        }}
      >
        
        {/* Modal Header */}
        <div style={{
          padding: '18px 28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#0F131C'
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {car.year} • {car.make} {car.category}
            </div>
            <h2 style={{ fontSize: '1.6rem', color: '#FFF', margin: 0, fontFamily: 'var(--font-heading)' }}>
              {car.name}
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => onToggleWishlist(car)}
              className="btn-icon btn-secondary"
              title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
            >
              <Heart size={18} fill={isWishlisted ? "var(--primary)" : "none"} color={isWishlisted ? "var(--primary)" : "#FFF"} />
            </button>

            <button
              onClick={() => onToggleCompare(car)}
              className="btn-icon btn-secondary"
              title={isCompared ? "Remove from Compare" : "Compare Specs"}
            >
              <SlidersHorizontal size={18} color={isCompared ? "#FBBF24" : "#FFF"} />
            </button>

            <button
              onClick={onClose}
              className="btn-icon btn-secondary"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body Grid */}
        <div style={{
          padding: '24px 28px',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: '30px'
        }} className="modal-body-grid">
          
          {/* Left Column: Image Viewer */}
          <div>
            <div style={{
              position: 'relative',
              height: '340px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              marginBottom: '16px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <img 
                src={activeImage} 
                alt={car.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              
              <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                <span className="badge badge-red">{car.badge}</span>
              </div>
            </div>

            {/* Thumbnail Gallery Row */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {(car.gallery || [car.mainImage]).map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  style={{
                    width: '80px',
                    height: '60px',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: activeImage === img ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                    opacity: activeImage === img ? 1 : 0.6,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <img src={img} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            {/* Description Text */}
            <div style={{ marginTop: '24px', background: 'rgba(10,14,22,0.4)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.04)' }}>
              <h4 style={{ fontSize: '0.95rem', color: '#FFF', marginBottom: '8px' }}>Vehicle Summary</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {car.description}
              </p>
            </div>
          </div>

          {/* Right Column: Pricing & Tabs */}
          <div>
            {/* Price Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(229, 9, 20, 0.15) 0%, rgba(20, 25, 35, 0.6) 100%)',
              border: '1px solid rgba(229, 9, 20, 0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: '20px',
              marginBottom: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', uppercase: 'uppercase', fontWeight: 600 }}>Showroom List Price</span>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: '#FFF', fontFamily: 'var(--font-heading)' }}>
                  ${car.price.toLocaleString()}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Est. Monthly Lease</span>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
                  ${calculatedMonthly.toLocaleString()}/mo
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
              <button
                onClick={() => {
                  onClose();
                  onScheduleTestDrive(car);
                }}
                className="btn btn-secondary"
                style={{ padding: '12px', fontSize: '0.9rem' }}
              >
                <Calendar size={16} color="var(--primary)" /> Schedule Drive
              </button>

              <button
                onClick={() => {
                  onClose();
                  onReserveCar(car);
                }}
                className="btn btn-primary"
                style={{ padding: '12px', fontSize: '0.9rem' }}
              >
                <ShieldCheck size={16} /> Reserve Vehicle
              </button>
            </div>

            {/* Tab Selectors */}
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '16px' }}>
              {[
                { id: 'specs', label: 'Technical Specs' },
                { id: 'features', label: 'Key Features' },
                { id: 'finance', label: 'Loan Estimator' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '10px 16px',
                    color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)',
                    fontWeight: activeTab === tab.id ? 700 : 500,
                    fontSize: '0.9rem',
                    borderBottom: activeTab === tab.id ? '2px solid var(--primary)' : '2px solid transparent',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Technical Specs */}
            {activeTab === 'specs' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem' }}>
                <div className="spec-row"><span>Engine:</span> <strong>{car.engine}</strong></div>
                <div className="spec-row"><span>Horsepower:</span> <strong>{car.hp} HP</strong></div>
                <div className="spec-row"><span>Acceleration:</span> <strong>{car.zeroToSixty} (0-60)</strong></div>
                <div className="spec-row"><span>Top Speed:</span> <strong>{car.topSpeed}</strong></div>
                <div className="spec-row"><span>Transmission:</span> <strong>{car.transmission}</strong></div>
                <div className="spec-row"><span>Drivetrain:</span> <strong>{car.drivetrain}</strong></div>
                <div className="spec-row"><span>Exterior Color:</span> <strong>{car.color}</strong></div>
                <div className="spec-row"><span>Interior:</span> <strong>{car.interior}</strong></div>
              </div>
            )}

            {/* Tab 2: Key Features */}
            {activeTab === 'features' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {car.features.map((feat, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#FFF' }}>
                    <CheckCircle2 size={16} color="var(--primary)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 3: Finance Estimator */}
            {activeTab === 'finance' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    <span>Down Payment</span>
                    <strong style={{ color: '#FFF' }}>${downPayment.toLocaleString()}</strong>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max={car.price * 0.5}
                    step="5000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--primary)' }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    <span>Loan Duration</span>
                    <strong style={{ color: '#FFF' }}>{termMonths} Months</strong>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[36, 48, 60, 72].map((m) => (
                      <button
                        key={m}
                        onClick={() => setTermMonths(m)}
                        style={{
                          flex: 1,
                          padding: '6px',
                          borderRadius: '6px',
                          border: termMonths === m ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                          background: termMonths === m ? 'rgba(229,9,20,0.2)' : 'rgba(255,255,255,0.05)',
                          color: '#FFF',
                          fontSize: '0.8rem',
                          cursor: 'pointer'
                        }}
                      >
                        {m}m
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: '12px',
                  background: 'rgba(10,14,22,0.6)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  fontSize: '0.85rem'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Loan Amount:</span>
                    <strong>${loanAmount.toLocaleString()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Est. APR:</span>
                    <strong>5.9% Fixed</strong>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

      <style>{`
        .spec-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
          color: var(--text-muted);
        }
        .spec-row strong {
          color: #FFF;
        }
        @media (max-width: 850px) {
          .modal-body-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import { X, SlidersHorizontal, Trash2, CheckCircle, Calendar } from 'lucide-react';

export default function CompareModal({ 
  isOpen, 
  onClose, 
  compareCars, 
  onRemoveFromCompare,
  onScheduleTestDrive 
}) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1050,
      background: 'rgba(5, 7, 11, 0.85)',
      backdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div 
        className="glass-panel animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '1080px',
          maxHeight: '90vh',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid rgba(255, 255, 255, 0.15)'
        }}
      >
        
        {/* Header */}
        <div style={{
          padding: '18px 28px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#0F131C'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <SlidersHorizontal size={20} color="#FBBF24" />
            <h3 style={{ color: '#FFF', fontSize: '1.3rem', fontFamily: 'var(--font-heading)', margin: 0 }}>
              Vehicle Specs Comparison ({compareCars.length}/3)
            </h3>
          </div>

          <button onClick={onClose} className="btn-icon btn-secondary">
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div style={{ flexGrow: 1, padding: '24px', overflowY: 'auto' }}>
          {compareCars.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
              <SlidersHorizontal size={48} color="var(--text-dim)" style={{ marginBottom: '16px', opacity: 0.5 }} />
              <h4 style={{ color: '#FFF', marginBottom: '8px' }}>No Cars Selected for Comparison</h4>
              <p style={{ fontSize: '0.875rem' }}>
                Click the compare icon on vehicle cards to compare technical specifications side-by-side.
              </p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '16px', textAlign: 'left', background: 'rgba(255,255,255,0.02)', color: 'var(--text-muted)', width: '200px' }}>
                      Specification
                    </th>
                    {compareCars.map((car) => (
                      <th key={car.id} style={{ padding: '16px', textAlign: 'center', background: 'rgba(255,255,255,0.04)', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ position: 'relative' }}>
                          <button
                            onClick={() => onRemoveFromCompare(car)}
                            style={{
                              position: 'absolute',
                              top: -8,
                              right: -8,
                              background: 'rgba(229,9,20,0.2)',
                              border: 'none',
                              color: '#FF4D56',
                              borderRadius: '50%',
                              width: '24px',
                              height: '24px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <X size={14} />
                          </button>

                          <img 
                            src={car.mainImage} 
                            alt={car.name} 
                            style={{ width: '120px', height: '80px', borderRadius: '8px', objectFit: 'cover', margin: '0 auto 8px auto', display: 'block' }}
                          />
                          <h4 style={{ color: '#FFF', fontSize: '1rem', margin: 0 }}>{car.name}</h4>
                          <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>{car.year} {car.make}</span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: 'List Price', key: (c) => `$${c.price.toLocaleString()}` },
                    { label: 'Est. Monthly Lease', key: (c) => `$${c.monthlyEstimate}/mo` },
                    { label: 'Horsepower', key: (c) => `${c.hp} HP` },
                    { label: '0-60 mph Time', key: (c) => c.zeroToSixty },
                    { label: 'Top Speed', key: (c) => c.topSpeed },
                    { label: 'Transmission', key: (c) => c.transmission },
                    { label: 'Drivetrain', key: (c) => c.drivetrain },
                    { label: 'Engine', key: (c) => c.engine },
                    { label: 'Fuel / Energy Type', key: (c) => c.fuelType },
                    { label: 'Condition', key: (c) => c.condition },
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <td style={{ padding: '14px 16px', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.875rem' }}>
                        {row.label}
                      </td>
                      {compareCars.map((car) => (
                        <td key={car.id} style={{ padding: '14px 16px', textAlign: 'center', color: '#FFF', fontWeight: 700, fontSize: '0.9rem', borderLeft: '1px solid rgba(255,255,255,0.06)' }}>
                          {row.key(car)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { X, Trash2, Calendar, Eye, Heart, ArrowRight } from 'lucide-react';

export default function WishlistDrawer({ 
  isOpen, 
  onClose, 
  wishlistCars, 
  onRemoveFromWishlist, 
  onSelectCar,
  onScheduleTestDrive 
}) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1050,
      background: 'rgba(5, 7, 11, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      justifyContent: 'flex-end'
    }}>
      <div 
        className="animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          background: '#0F131D',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.6)'
        }}
      >
        
        {/* Drawer Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#0B0E14'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Heart size={20} color="var(--primary)" fill="var(--primary)" />
            <h3 style={{ color: '#FFF', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', margin: 0 }}>
              Saved Wishlist ({wishlistCars.length})
            </h3>
          </div>

          <button onClick={onClose} className="btn-icon btn-secondary">
            <X size={18} />
          </button>
        </div>

        {/* Drawer Content */}
        <div style={{ flexGrow: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {wishlistCars.length === 0 ? (
            <div style={{ textAlignment: 'center', padding: '60px 20px', color: 'var(--text-muted)', textAlign: 'center' }}>
              <Heart size={48} color="var(--text-dim)" style={{ marginBottom: '16px', opacity: 0.5 }} />
              <h4 style={{ color: '#FFF', marginBottom: '8px' }}>Your Wishlist is Empty</h4>
              <p style={{ fontSize: '0.875rem' }}>
                Click the heart icon on any supercar to save it for quick reference and spec comparisons.
              </p>
            </div>
          ) : (
            wishlistCars.map((car) => (
              <div
                key={car.id}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'center'
                }}
              >
                <img 
                  src={car.mainImage} 
                  alt={car.name} 
                  style={{ width: '85px', height: '65px', borderRadius: '8px', objectFit: 'cover' }}
                />

                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 700 }}>
                    {car.year} • {car.make}
                  </div>
                  <h4 
                    onClick={() => {
                      onClose();
                      onSelectCar(car);
                    }}
                    style={{ fontSize: '0.95rem', color: '#FFF', cursor: 'pointer', margin: '2px 0 4px 0' }}
                  >
                    {car.name}
                  </h4>
                  <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FFF' }}>
                    ${car.price.toLocaleString()}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectCar(car);
                    }}
                    title="View Details"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: 'none',
                      color: '#FFF',
                      padding: '6px',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <Eye size={14} />
                  </button>

                  <button
                    onClick={() => onRemoveFromWishlist(car)}
                    title="Remove"
                    style={{
                      background: 'rgba(229, 9, 20, 0.15)',
                      border: 'none',
                      color: '#FF4D56',
                      padding: '6px',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistCars.length > 0 && (
          <div style={{
            padding: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            background: '#0B0E14'
          }}>
            <button
              onClick={() => {
                onClose();
                onScheduleTestDrive(wishlistCars[0]);
              }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              <Calendar size={16} /> Schedule Drive for Saved Cars
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

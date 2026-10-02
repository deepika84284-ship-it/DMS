import React from 'react';
import { Heart, SlidersHorizontal, Gauge, Zap, Fuel, Calendar, Eye, ShieldCheck } from 'lucide-react';

export default function CarCard({ 
  car, 
  onSelect, 
  onToggleWishlist, 
  isWishlisted, 
  onToggleCompare, 
  isCompared,
  onScheduleTestDrive
}) {
  const getBadgeClass = (type) => {
    switch (type) {
      case 'red': return 'badge-red';
      case 'gold': return 'badge-gold';
      case 'emerald': return 'badge-emerald';
      case 'blue': return 'badge-blue';
      default: return 'badge-red';
    }
  };

  return (
    <div 
      className="glass-card"
      style={{
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.borderColor = 'rgba(229, 9, 20, 0.4)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(229, 9, 20, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      
      {/* Thumbnail Container */}
      <div style={{ position: 'relative', height: '220px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => onSelect(car)}>
        <img 
          src={car.mainImage} 
          alt={car.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease'
          }}
          className="car-card-img"
        />
        
        {/* Subtle Bottom Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(11,14,20,0.3) 0%, transparent 40%, rgba(20,25,35,0.9) 100%)'
        }} />

        {/* Top Badges */}
        <div style={{ position: 'absolute', top: '14px', left: '14px', display: 'flex', gap: '6px' }}>
          <span className={`badge ${getBadgeClass(car.badgeType)}`}>
            {car.badge}
          </span>
          {car.condition === 'Certified Pre-Owned' && (
            <span className="badge badge-gold" title="150-Point Certified Guarantee">
              <ShieldCheck size={11} /> CPO
            </span>
          )}
        </div>

        {/* Action Overlay Buttons (Wishlist & Compare) */}
        <div style={{ position: 'absolute', top: '14px', right: '14px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(car);
            }}
            title={isWishlisted ? "Remove from Wishlist" : "Save to Wishlist"}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: isWishlisted ? 'var(--primary)' : 'rgba(11, 14, 20, 0.7)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FFF',
              transition: 'all 0.2s ease'
            }}
          >
            <Heart size={16} fill={isWishlisted ? "#FFF" : "none"} color="#FFF" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare(car);
            }}
            title={isCompared ? "Remove from Compare" : "Compare Specs"}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: isCompared ? '#F59E0B' : 'rgba(11, 14, 20, 0.7)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isCompared ? '#000' : '#FFF',
              transition: 'all 0.2s ease'
            }}
          >
            <SlidersHorizontal size={16} />
          </button>

        </div>

      </div>

      {/* Card Content Body */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
        
        <div>
          {/* Subtitle / Year / Body */}
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>
            {car.year} • {car.make} • {car.bodyType}
          </div>

          {/* Car Title */}
          <h3 
            onClick={() => onSelect(car)}
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '14px',
              cursor: 'pointer',
              fontFamily: 'var(--font-heading)'
            }}
          >
            {car.name}
          </h3>

          {/* Key Specs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
            background: 'rgba(10, 14, 22, 0.5)',
            padding: '10px 12px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.04)',
            marginBottom: '18px'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Zap size={14} color="var(--primary)" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFF', marginTop: '2px' }}>{car.hp} HP</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>Power</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Gauge size={14} color="#FBBF24" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFF', marginTop: '2px' }}>{car.zeroToSixty}</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>0-60 mph</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Fuel size={14} color="#60A5FA" />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#FFF', marginTop: '2px' }}>{car.fuelType}</span>
              <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>Type</span>
            </div>
          </div>
        </div>

        {/* Price & Action Row */}
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block', uppercase: 'uppercase' }}>Purchase Price</span>
              <span style={{ fontSize: '1.4rem', fontWeight: 900, color: '#FFF', fontFamily: 'var(--font-heading)' }}>
                ${car.price.toLocaleString()}
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', display: 'block' }}>Est. Lease</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--primary)' }}>
                ${car.monthlyEstimate}/mo
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button
              onClick={() => onSelect(car)}
              className="btn btn-secondary"
              style={{ padding: '8px 12px', fontSize: '0.85rem' }}
            >
              <Eye size={14} /> Details
            </button>
            <button
              onClick={() => onScheduleTestDrive(car)}
              className="btn btn-primary"
              style={{ padding: '8px 12px', fontSize: '0.85rem' }}
            >
              <Calendar size={14} /> Drive
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .glass-card:hover .car-card-img {
          transform: scale(1.08);
        }
      `}</style>
    </div>
  );
}

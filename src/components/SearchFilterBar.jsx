import React from 'react';
import { Search, SlidersHorizontal, RotateCcw, Filter } from 'lucide-react';

export default function SearchFilterBar({ 
  filters, 
  setFilters, 
  resetFilters, 
  makes, 
  categories, 
  totalResults 
}) {
  return (
    <div style={{
      marginTop: '-35px',
      position: 'relative',
      zIndex: 10,
      marginBottom: '50px'
    }}>
      <div className="container">
        <div className="glass-panel" style={{
          padding: '24px 30px',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.12)'
        }}>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '20px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
            paddingBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
              <Filter size={18} color="var(--primary)" />
              <span>Quick Search & Filter</span>
              <span className="badge badge-red" style={{ marginLeft: '8px' }}>
                {totalResults} Vehicles Available
              </span>
            </div>

            <button
              onClick={resetFilters}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFF'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              <RotateCcw size={14} /> Reset Filters
            </button>
          </div>

          {/* Controls Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            alignItems: 'center'
          }}>
            
            {/* Make Selector */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', uppercase: 'uppercase', marginBottom: '6px' }}>
                Make / Manufacturer
              </label>
              <select
                className="input-field select-field"
                value={filters.make}
                onChange={(e) => setFilters({ ...filters, make: e.target.value })}
              >
                <option value="All">All Makes</option>
                {makes.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Category / Body Style */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', uppercase: 'uppercase', marginBottom: '6px' }}>
                Vehicle Category
              </label>
              <select
                className="input-field select-field"
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
              >
                <option value="All">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Condition */}
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', uppercase: 'uppercase', marginBottom: '6px' }}>
                Condition
              </label>
              <select
                className="input-field select-field"
                value={filters.condition}
                onChange={(e) => setFilters({ ...filters, condition: e.target.value })}
              >
                <option value="All">All Conditions</option>
                <option value="New">Brand New</option>
                <option value="Certified Pre-Owned">Certified Pre-Owned</option>
              </select>
            </div>

            {/* Price Slider */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                <span>Max Budget</span>
                <span style={{ color: 'var(--primary)' }}>${Number(filters.maxPrice).toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="100000"
                max="500000"
                step="10000"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
                style={{
                  width: '100%',
                  accentColor: 'var(--primary)',
                  cursor: 'pointer'
                }}
              />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

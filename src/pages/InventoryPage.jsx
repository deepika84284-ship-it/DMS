import React, { useState, useMemo } from 'react';
import CarCard from '../components/CarCard';
import { Search, Filter, RotateCcw, LayoutGrid, List, SlidersHorizontal, Sparkles } from 'lucide-react';

export default function InventoryPage({ 
  cars, 
  onSelectCar, 
  onToggleWishlist, 
  wishlistCars, 
  onToggleCompare, 
  compareCars,
  onScheduleTestDrive,
  searchQuery,
  setSearchQuery
}) {
  const [selectedMake, setSelectedMake] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [maxPrice, setMaxPrice] = useState(500000);
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-asc', 'price-desc', 'hp-desc', 'year-desc'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const makes = useMemo(() => ['All', ...new Set(cars.map(c => c.make))], [cars]);
  const categories = useMemo(() => ['All', ...new Set(cars.map(c => c.category))], [cars]);

  // Filtering Logic
  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      const matchQuery = searchQuery === '' || 
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.bodyType.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchMake = selectedMake === 'All' || car.make === selectedMake;
      const matchCategory = selectedCategory === 'All' || car.category === selectedCategory;
      const matchCondition = selectedCondition === 'All' || car.condition === selectedCondition;
      const matchPrice = car.price <= maxPrice;

      return matchQuery && matchMake && matchCategory && matchCondition && matchPrice;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'hp-desc') return b.hp - a.hp;
      if (sortBy === 'year-desc') return b.year - a.year;
      return 0;
    });
  }, [cars, searchQuery, selectedMake, selectedCategory, selectedCondition, maxPrice, sortBy]);

  const resetAllFilters = () => {
    setSelectedMake('All');
    setSelectedCategory('All');
    setSelectedCondition('All');
    setMaxPrice(500000);
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div style={{ padding: '40px 0 80px 0', minHeight: '80vh' }}>
      <div className="container">
        
        {/* Page Title Header */}
        <div style={{ marginBottom: '32px' }}>
          <span className="section-subtitle">Exotic Showroom Catalog</span>
          <h1 style={{ fontSize: '2.8rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>
            Exotic & Luxury Vehicle Inventory
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            Explore our curated inventory of 150-point certified exotics, luxury SUVs, and supercars.
          </p>
        </div>

        {/* Layout Grid: Sidebar Filters + Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '270px 1fr',
          gap: '30px'
        }} className="inventory-layout">
          
          {/* Left Sidebar Filter Controls */}
          <div className="glass-panel" style={{
            padding: '24px',
            borderRadius: 'var(--radius-lg)',
            height: 'fit-content',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700 }}>
                <Filter size={18} color="var(--primary)" />
                <span style={{ color: '#FFF' }}>Filter Vehicles</span>
              </div>
              <button onClick={resetAllFilters} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.8rem', cursor: 'pointer' }}>
                Reset
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Search Bar */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  SEARCH MODEL
                </label>
                <div style={{ position: 'relative' }}>
                  <Search size={14} color="var(--text-muted)" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="e.g. GT3, R8..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input-field"
                    style={{ paddingLeft: '32px', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              {/* Make Filter */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  MANUFACTURER
                </label>
                <select
                  className="input-field select-field"
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  style={{ fontSize: '0.85rem' }}
                >
                  {makes.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* Category */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  BODY CATEGORY
                </label>
                <select
                  className="input-field select-field"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  style={{ fontSize: '0.85rem' }}
                >
                  {categories.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Condition */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  CONDITION
                </label>
                <select
                  className="input-field select-field"
                  value={selectedCondition}
                  onChange={(e) => setSelectedCondition(e.target.value)}
                  style={{ fontSize: '0.85rem' }}
                >
                  <option value="All">All Conditions</option>
                  <option value="New">Brand New</option>
                  <option value="Certified Pre-Owned">Certified Pre-Owned</option>
                </select>
              </div>

              {/* Price Slider */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '6px' }}>
                  <span>MAX PRICE</span>
                  <span style={{ color: 'var(--primary)' }}>${maxPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="500000"
                  step="10000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary)', cursor: 'pointer' }}
                />
              </div>

            </div>
          </div>

          {/* Right Main Grid */}
          <div>
            
            {/* Top Toolbar: Results count & Sort selector */}
            <div className="glass-panel" style={{
              padding: '14px 20px',
              borderRadius: 'var(--radius-md)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Showing <strong style={{ color: '#FFF' }}>{filteredCars.length}</strong> of {cars.length} Vehicles
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{
                      background: 'var(--bg-input)',
                      color: '#FFF',
                      border: '1px solid var(--border-color)',
                      borderRadius: '6px',
                      padding: '6px 12px',
                      fontSize: '0.85rem',
                      outline: 'none'
                    }}
                  >
                    <option value="featured">Featured First</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="hp-desc">Power: Highest HP</option>
                    <option value="year-desc">Year: Newest First</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Car Cards Grid */}
            {filteredCars.length === 0 ? (
              <div className="glass-panel" style={{ textAlign: 'center', padding: '60px 20px', borderRadius: 'var(--radius-lg)' }}>
                <Search size={48} color="var(--text-dim)" style={{ marginBottom: '16px' }} />
                <h3 style={{ color: '#FFF', marginBottom: '8px' }}>No Matching Vehicles Found</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>
                  Try adjusting your filters or price limit to see available exotic cars.
                </p>
                <button onClick={resetAllFilters} className="btn btn-primary">
                  <RotateCcw size={16} /> Reset All Filters
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                {filteredCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    onSelect={onSelectCar}
                    onToggleWishlist={onToggleWishlist}
                    isWishlisted={wishlistCars.some(c => c.id === car.id)}
                    onToggleCompare={onToggleCompare}
                    isCompared={compareCars.some(c => c.id === car.id)}
                    onScheduleTestDrive={onScheduleTestDrive}
                  />
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .inventory-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

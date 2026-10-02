import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SearchFilterBar from './components/SearchFilterBar';
import CarCard from './components/CarCard';
import CarDetailModal from './components/CarDetailModal';
import FinanceCalculatorSection from './components/FinanceCalculatorSection';
import ServicePipelineSection from './components/ServicePipelineSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import WishlistDrawer from './components/WishlistDrawer';
import CompareModal from './components/CompareModal';
import TestDriveModal from './components/TestDriveModal';
import TradeInModal from './components/TradeInModal';
import Footer from './components/Footer';
import Toast from './components/Toast';

import InventoryPage from './pages/InventoryPage';
import FinancePage from './pages/FinancePage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { CARS_DATA } from './data/cars';
import { Sparkles, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');

  // Wishlist & Compare State
  const [wishlistCars, setWishlistCars] = useState([CARS_DATA[0]]);
  const [compareCars, setCompareCars] = useState([CARS_DATA[0], CARS_DATA[1]]);

  // Modals & Drawers
  const [selectedCar, setSelectedCar] = useState(null);
  const [testDriveCar, setTestDriveCar] = useState(null);
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isTradeInOpen, setIsTradeInOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  // Quick Filters for Home Page
  const [homeFilters, setHomeFilters] = useState({
    make: 'All',
    category: 'All',
    condition: 'All',
    maxPrice: 500000
  });

  const resetHomeFilters = () => {
    setHomeFilters({
      make: 'All',
      category: 'All',
      condition: 'All',
      maxPrice: 500000
    });
  };

  // Wishlist Toggle
  const toggleWishlist = (car) => {
    if (wishlistCars.some(c => c.id === car.id)) {
      setWishlistCars(wishlistCars.filter(c => c.id !== car.id));
      showToast(`Removed ${car.name} from Wishlist.`);
    } else {
      setWishlistCars([...wishlistCars, car]);
      showToast(`Added ${car.name} to Wishlist!`);
    }
  };

  // Compare Toggle
  const toggleCompare = (car) => {
    if (compareCars.some(c => c.id === car.id)) {
      setCompareCars(compareCars.filter(c => c.id !== car.id));
      showToast(`Removed ${car.name} from Compare list.`);
    } else {
      if (compareCars.length >= 3) {
        showToast("Maximum 3 vehicles can be compared simultaneously.");
        return;
      }
      setCompareCars([...compareCars, car]);
      showToast(`Added ${car.name} to Compare list!`);
    }
  };

  // Test Drive Modal Trigger
  const handleOpenTestDrive = (car = null) => {
    setTestDriveCar(car || CARS_DATA[0]);
    setIsTestDriveOpen(true);
  };

  // Filtered cars for Home Page grid
  const homeFilteredCars = useMemo(() => {
    return CARS_DATA.filter(car => {
      const matchMake = homeFilters.make === 'All' || car.make === homeFilters.make;
      const matchCategory = homeFilters.category === 'All' || car.category === homeFilters.category;
      const matchCondition = homeFilters.condition === 'All' || car.condition === homeFilters.condition;
      const matchPrice = car.price <= homeFilters.maxPrice;
      return matchMake && matchCategory && matchCondition && matchPrice;
    });
  }, [homeFilters]);

  // Unique makes & categories for filters
  const uniqueMakes = useMemo(() => [...new Set(CARS_DATA.map(c => c.make))], []);
  const uniqueCategories = useMemo(() => [...new Set(CARS_DATA.map(c => c.category))], []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-dark)' }}>
      
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        wishlistCount={wishlistCars.length}
        openWishlist={() => setIsWishlistOpen(true)}
        compareCount={compareCars.length}
        openCompare={() => setIsCompareOpen(true)}
        openTestDrive={handleOpenTestDrive}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Dynamic View Router */}
      <main style={{ flexGrow: 1 }}>
        {activeTab === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              heroCar={CARS_DATA[0]}
              onExploreClick={() => {
                setActiveTab('inventory');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onScheduleClick={() => handleOpenTestDrive(CARS_DATA[0])}
              onCarClick={(car) => setSelectedCar(car)}
            />

            {/* Quick Filter Bar */}
            <SearchFilterBar
              filters={homeFilters}
              setFilters={setHomeFilters}
              resetFilters={resetHomeFilters}
              makes={uniqueMakes}
              categories={uniqueCategories}
              totalResults={homeFilteredCars.length}
            />

            {/* Featured Cars Section */}
            <section style={{ padding: '20px 0 80px 0' }}>
              <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <span className="section-subtitle" style={{ textAlign: 'left' }}>
                      Handpicked Vehicles
                    </span>
                    <h2 style={{ fontSize: '2.4rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>
                      Featured Exotic Supercars
                    </h2>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('inventory');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn btn-secondary"
                  >
                    View All Inventory ({CARS_DATA.length}) <ArrowRight size={16} />
                  </button>
                </div>

                {/* Cars Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '28px'
                }}>
                  {homeFilteredCars.map((car) => (
                    <CarCard
                      key={car.id}
                      car={car}
                      onSelect={(c) => setSelectedCar(c)}
                      onToggleWishlist={toggleWishlist}
                      isWishlisted={wishlistCars.some(c => c.id === car.id)}
                      onToggleCompare={toggleCompare}
                      isCompared={compareCars.some(c => c.id === car.id)}
                      onScheduleTestDrive={handleOpenTestDrive}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Auto Loan / Financing Section */}
            <FinanceCalculatorSection
              onApplyFinance={(details) => {
                showToast(`Finance pre-approval request submitted for $${details.estimatedMonthly}/mo!`);
              }}
            />

            {/* Service & Tuning Pipeline */}
            <ServicePipelineSection
              onBookService={(pkg) => {
                showToast(`Service appointment requested for ${pkg.title}!`);
              }}
            />

            {/* Why Choose Us & Trade-in */}
            <WhyChooseUs
              onTradeInClick={() => setIsTradeInOpen(true)}
            />

            {/* Client Testimonials */}
            <Testimonials />
          </>
        )}

        {activeTab === 'inventory' && (
          <InventoryPage
            cars={CARS_DATA}
            onSelectCar={(car) => setSelectedCar(car)}
            onToggleWishlist={toggleWishlist}
            wishlistCars={wishlistCars}
            onToggleCompare={toggleCompare}
            compareCars={compareCars}
            onScheduleTestDrive={handleOpenTestDrive}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {activeTab === 'finance' && (
          <FinancePage
            onApplyFinance={(details) => {
              showToast(`Pre-approval request processed! Financial specialist will contact you shortly.`);
            }}
          />
        )}

        {activeTab === 'service' && (
          <ServicePage
            onBookService={(pkg) => {
              showToast(`Service scheduled for ${pkg.title}! Technician will confirm your slot.`);
            }}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'contact' && (
          <ContactPage
            onSubmitContact={(msg) => showToast(msg)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onSubscribeNewsletter={(msg) => showToast(msg)}
      />

      {/* Drawers & Modals */}
      <CarDetailModal
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
        onToggleWishlist={toggleWishlist}
        isWishlisted={selectedCar && wishlistCars.some(c => c.id === selectedCar.id)}
        onToggleCompare={toggleCompare}
        isCompared={selectedCar && compareCars.some(c => c.id === selectedCar.id)}
        onScheduleTestDrive={handleOpenTestDrive}
        onReserveCar={(car) => {
          showToast(`Deposit reserved for ${car.name}! VIP concierge will lock this VIN.`);
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistCars={wishlistCars}
        onRemoveFromWishlist={toggleWishlist}
        onSelectCar={(car) => setSelectedCar(car)}
        onScheduleTestDrive={handleOpenTestDrive}
      />

      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        compareCars={compareCars}
        onRemoveFromCompare={toggleCompare}
        onScheduleTestDrive={handleOpenTestDrive}
      />

      <TestDriveModal
        isOpen={isTestDriveOpen}
        onClose={() => setIsTestDriveOpen(false)}
        selectedCar={testDriveCar}
        onSubmitSuccess={(msg) => showToast(msg)}
      />

      <TradeInModal
        isOpen={isTradeInOpen}
        onClose={() => setIsTradeInOpen(false)}
        onSubmitSuccess={(msg) => showToast(msg)}
      />

      {/* Global Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}

import React, { useState } from 'react';
import FinanceCalculatorSection from '../components/FinanceCalculatorSection';
import { ShieldCheck, CreditCard, Award, CheckCircle2, HelpCircle } from 'lucide-react';

export default function FinancePage({ onApplyFinance }) {
  const [faqs, setFaqs] = useState([
    { q: "What credit score is required for exotic car leasing?", a: "We work with top tier lending partners specializing in luxury exotics (680+ FICO preferred). Flexible structures available for international buyers and corporate entities.", open: true },
    { q: "Can I finance an exotic supercar through my business or LLC?", a: "Yes, over 65% of our clients acquire vehicles through corporate structures, LLCs, or revocable trusts for tax optimization.", open: false },
    { q: "Is nationwide delivery included in the lease agreement?", a: "Yes! Enclosed white-glove climate-controlled delivery can be rolled directly into your single monthly lease payment.", open: false }
  ]);

  const toggleFaq = (index) => {
    setFaqs(faqs.map((f, i) => i === index ? { ...f, open: !f.open } : f));
  };

  return (
    <div style={{ padding: '40px 0 80px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlignment: 'center', textAlign: 'center', marginBottom: '40px' }}>
          <span className="section-subtitle">Exotic Capital & Financial Services</span>
          <h1 style={{ fontSize: '3rem', color: '#FFF', fontFamily: 'var(--font-heading)' }}>
            Tailored Luxury Auto Finance & Leasing
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '12px auto 0 auto' }}>
            Structured financing solutions, open-end leases, and low-APR capital loans tailored for high-net-worth collectors and corporate buyers.
          </p>
        </div>

        {/* Benefits Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {[
            { title: 'Open-End Leasing', desc: 'Custom residual values, no mileage restrictions, and flexible lease buyout options.', icon: <CreditCard size={28} color="var(--primary)" /> },
            { title: 'Corporate LLC Financing', desc: 'Structure ownership through corporate entities with privacy protection and tax write-offs.', icon: <ShieldCheck size={28} color="#FBBF24" /> },
            { title: 'Sub-4.0% Tier 1 Rates', desc: 'Direct relationship with premier exotic auto lenders providing low fixed interest rates.', icon: <Award size={28} color="#34D399" /> }
          ].map((item, i) => (
            <div key={i} className="glass-card" style={{ padding: '28px', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Main Interactive Calculator */}
      <FinanceCalculatorSection onApplyFinance={onApplyFinance} />

      {/* FAQ Accordion Section */}
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="section-header">
          <span className="section-subtitle">Common Questions</span>
          <h2 className="section-title">Financing & Leasing FAQ</h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card"
              onClick={() => toggleFaq(i)}
              style={{
                padding: '20px 24px',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#FFF', fontWeight: 700, fontSize: '1.05rem' }}>
                <span>{faq.q}</span>
                <span style={{ color: 'var(--primary)', fontSize: '1.4rem' }}>{faq.open ? '−' : '+'}</span>
              </div>

              {faq.open && (
                <p style={{ marginTop: '12px', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 2000,
      background: '#141923',
      border: '1px solid rgba(229, 9, 20, 0.5)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 20px',
      color: '#FFFFFF',
      boxShadow: '0 10px 30px rgba(0,0,0,0.7), 0 0 20px rgba(229, 9, 20, 0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      maxWidth: '420px',
      animation: 'fadeIn 0.3s ease-out'
    }}>
      <CheckCircle2 size={20} color="var(--primary)" />
      <span style={{ fontSize: '0.9rem', fontWeight: 500, flexGrow: 1 }}>{message}</span>
      <button 
        onClick={onClose}
        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}
      >
        <X size={16} />
      </button>
    </div>
  );
}

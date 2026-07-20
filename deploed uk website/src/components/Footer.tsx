import React from 'react';
import { BUSINESS_INFO } from '../data';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! You have successfully joined the NI Drip Central Electronics VIP mailing list. We'll send you exclusive appliance deals and local delivery updates!");
  };

  return (
    <footer id="footer" className="footer">
      <div className="main-footer">
        <div className="container">
          {/* Newsletter Block */}
          <div className="newsletter-block" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="contents-40">
              <div className="_30px-title-white" style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>
                Join our VIP mailing list &amp; get exclusive appliance offers
              </div>
            </div>
            <div className="newsletter-form w-form">
              <form onSubmit={handleNewsletterSubmit} className="newsletter-grid" style={{ display: 'flex', gap: '10px' }}>
                <input 
                  className="newsletter-input w-input" 
                  maxLength={256} 
                  placeholder="Enter your email address" 
                  type="email" 
                  required 
                  style={{ background: '#222', border: '1px solid #446', padding: '12px 15px', color: '#fff', borderRadius: '4px', minWidth: '260px' }}
                />
                <div className="custom-button-wrapper">
                  <input type="submit" className="custom-button-white w-button" value="Subscribe" style={{ background: '#fff', color: '#111', fontWeight: 'bold', padding: '12px 25px', borderRadius: '4px', cursor: 'pointer', border: 'none' }} />
                </div>
              </form>
            </div>
          </div>

          {/* Footer Grid Links */}
          <div className="footer-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', paddingTop: '40px' }}>
            <div className="footer-block first-block">
              <a href="/" onClick={(e) => { e.preventDefault(); onPageChange('home'); }} className="navbar-logo-wrapper w-nav-brand" style={{ display: 'inline-block', textDecoration: 'none', marginBottom: '15px' }}>
                <Logo variant="dark" />
              </a>
              <p className="footer-paragraph" style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                At NI Drip Central Electronics, we're dedicated to providing Northern Ireland with the absolute best in home appliance innovation, custom kitchen integrations, and premium smart entertainment solutions. Visit our Boucher Road showroom in Belfast today.
              </p>
              <div className="w-layout-vflex vertical-15px-gap-left-align" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div className="horizontal-block-10px-gap" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ccc' }}>
                  <Phone size={16} style={{ color: '#0194da' }} />
                  <div className="footer-paragraph" style={{ fontSize: '14px' }}>{BUSINESS_INFO.phone}</div>
                </div>
                <div className="horizontal-block-10px-gap" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ccc' }}>
                  <Mail size={16} style={{ color: '#0194da' }} />
                  <div className="footer-paragraph" style={{ fontSize: '14px' }}>{BUSINESS_INFO.email}</div>
                </div>
                <div className="horizontal-block-10px-gap" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ccc' }}>
                  <MapPin size={16} style={{ color: '#0194da' }} />
                  <div className="footer-paragraph" style={{ fontSize: '13px', lineHeight: '1.2' }}>{BUSINESS_INFO.address}</div>
                </div>
              </div>
            </div>

            <div className="footer-block">
              <div className="footer-title" style={{ color: '#fff', fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}>Useful Links</div>
              <div className="list-block" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="#home" onClick={(e) => { e.preventDefault(); onPageChange('home'); }} className="footer-links w-inline-block" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#ccc' }}>
                  <div className="title-divider-20px"></div>
                  <div>Home</div>
                </a>
                <a href="#about" onClick={(e) => { e.preventDefault(); onPageChange('about'); }} className="footer-links w-inline-block" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#ccc' }}>
                  <div className="title-divider-20px"></div>
                  <div>About</div>
                </a>
                <a href="#shop" onClick={(e) => { e.preventDefault(); onPageChange('shop'); }} className="footer-links w-inline-block" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#ccc' }}>
                  <div className="title-divider-20px"></div>
                  <div>Shop Catalogs</div>
                </a>
                <a href="#blog" onClick={(e) => { e.preventDefault(); onPageChange('blog'); }} className="footer-links w-inline-block" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#ccc' }}>
                  <div className="title-divider-20px"></div>
                  <div>Appliance Blog</div>
                </a>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onPageChange('contact'); }} className="footer-links w-inline-block" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#ccc' }}>
                  <div className="title-divider-20px"></div>
                  <div>Contact &amp; Map</div>
                </a>
              </div>
            </div>

            <div className="footer-block">
              <div className="footer-title" style={{ color: '#fff', fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}>Our Services</div>
              <div className="list-block" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ color: '#ccc', fontSize: '14px' }}>• Express Belfast Delivery</div>
                <div style={{ color: '#ccc', fontSize: '14px' }}>• Full Integrated Installation</div>
                <div style={{ color: '#ccc', fontSize: '14px' }}>• WEEE Recycling Service</div>
                <div style={{ color: '#ccc', fontSize: '14px' }}>• Multi-buy Landlord Package</div>
                <div style={{ color: '#ccc', fontSize: '14px' }}>• Manufacturer Warranties</div>
                <div style={{ color: '#ccc', fontSize: '14px' }}>• Expert Technical Support</div>
              </div>
            </div>

            <div className="footer-block full-block">
              <div className="footer-title" style={{ color: '#fff', fontWeight: 700, fontSize: '18px', marginBottom: '20px' }}>Opening Hours</div>
              <div className="list-block" style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#ccc', fontSize: '14px', lineHeight: '1.6' }}>
                <div><strong>Monday - Friday:</strong><br/>9:00 AM - 6:00 PM</div>
                <div><strong>Saturday:</strong><br/>9:00 AM - 5:30 PM</div>
                <div><strong>Sunday:</strong><br/>1:00 PM - 5:30 PM</div>
                <div style={{ marginTop: '10px', fontSize: '12px', color: '#9aa' }}>Showroom parking is free for all customers on Boucher Road.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', marginTop: '40px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div className="footer-copyright" style={{ color: '#aaa', fontSize: '13px' }}>
            Copyright © 2026 {BUSINESS_INFO.legalName}. All Rights Reserved. Co. Reg. NI690226.
          </div>
          <div className="social-share-icon-container" style={{ display: 'flex', gap: '10px' }}>
            <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href={BUSINESS_INFO.socials.twitter} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href={BUSINESS_INFO.socials.pinterest} target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Pinterest">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

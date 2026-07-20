import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Layers, Search, User, ShoppingCart } from 'lucide-react';
import { BUSINESS_INFO, CATEGORIES } from '../data';
import { CartItem } from '../types';
import Logo from './Logo';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string, categoryFilter?: string) => void;
  cartItems: CartItem[];
  onRemoveFromCart: (productId: string) => void;
  onUpdateCartQuantity: (productId: string, qty: number) => void;
  onClearCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Header({
  currentPage,
  onPageChange,
  cartItems,
  onRemoveFromCart,
  onUpdateCartQuantity,
  onClearCart,
  searchQuery,
  onSearchChange
}: HeaderProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchOpen(false);
    onPageChange('shop');
  };

  const handleCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Thank you for choosing NI Drip Central Electronics!\n\nYour order subtotal is £${cartSubtotal}. This is a demonstration of our fully offline-enabled React shopping cart checkout flow.`);
    onClearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      <section className="header-section">
        {/* Top Notice Bar */}
        <section className="top-notice-bar" style={{ overflow: 'hidden' }}>
          <div className="infinity" style={{ display: 'flex', gap: '40px', whiteSpace: 'nowrap', animation: 'scroll-left 20s linear infinite' }}>
            <div className="w-layout-hflex flash-sale-text">
              <div className="sale-icon">flash_on</div>
              <div>Summer Extravaganza! Up to 30% Off Selected Kitchen &amp; Laundry Appliances. <a href="#shop" onClick={(e) => { e.preventDefault(); onPageChange('shop'); }} className="sale-link white">View Products</a></div>
            </div>
            <div className="w-layout-hflex flash-sale-text">
              <div className="sale-icon">flash_on</div>
              <div>Free Delivery Across Northern Ireland on Orders Over £150. <a href="#shop" onClick={(e) => { e.preventDefault(); onPageChange('shop'); }} className="sale-link white">Browse Showroom</a></div>
            </div>
            <div className="w-layout-hflex flash-sale-text">
              <div className="sale-icon">flash_on</div>
              <div>Authorised Dealer for Samsung, LG, Bosch, Neff, and Beko. <a href="#about" onClick={(e) => { e.preventDefault(); onPageChange('about'); }} className="sale-link white">Learn More</a></div>
            </div>
          </div>
        </section>

        {/* Brand Header */}
        <div className="container">
          <div className="header" style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <a href="/" onClick={(e) => { e.preventDefault(); onPageChange('home'); }} className="site-logo-wrapper w-nav-brand" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <Logo variant="light" />
            </a>

            <div className="header-info-block-on-desktop" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <div className="horizontal-left-center-15px-gap">
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(1, 148, 218, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0194da' }}>
                  <Phone size={18} />
                </div>
                <div className="w-layout-vflex">
                  <div className="_14px-primary-700" style={{ color: '#0194da' }}>Call Us</div>
                  <p className="_14px-text" style={{ fontSize: '14px', margin: 0, fontWeight: 600 }}>{BUSINESS_INFO.phone}</p>
                </div>
              </div>
              <div className="divider-40px-height"></div>
              <div className="horizontal-left-center-15px-gap">
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(1, 148, 218, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0194da' }}>
                  <Mail size={18} />
                </div>
                <div className="w-layout-vflex">
                  <div className="_14px-primary-700" style={{ color: '#0194da' }}>Mail Us</div>
                  <p className="_14px-text" style={{ fontSize: '14px', margin: 0, fontWeight: 600 }}>{BUSINESS_INFO.email}</p>
                </div>
              </div>
              <div className="divider-40px-height"></div>
              <div className="horizontal-left-center-15px-gap">
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(1, 148, 218, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0194da' }}>
                  <MapPin size={18} />
                </div>
                <div className="w-layout-vflex header-info">
                  <div className="_14px-primary-700" style={{ color: '#0194da' }}>Visit Us</div>
                  <p className="_14px-text" style={{ fontSize: '13px', margin: 0, fontWeight: 600, maxWidth: '200px', lineHeight: '1.2' }}>Boucher Road, Belfast</p>
                </div>
              </div>
            </div>

            <div className="social-icons-desktop" style={{ display: 'flex', gap: '10px' }}>
              <a href={BUSINESS_INFO.socials.facebook} target="_blank" rel="noreferrer" className="social-icon-transparent-border" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href={BUSINESS_INFO.socials.instagram} target="_blank" rel="noreferrer" className="social-icon-transparent-border instagram" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href={BUSINESS_INFO.socials.twitter} target="_blank" rel="noreferrer" className="social-icon-transparent-border twitter" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href={BUSINESS_INFO.socials.pinterest} target="_blank" rel="noreferrer" className="social-icon-transparent-border pinterest" aria-label="Pinterest">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <div data-animation="over-left" className="navbar-rounded w-nav" style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#fff' }}>
        <div className="navbar-ounded-container" style={{ width: '100%', maxWidth: '1240px', margin: '0 auto', padding: '0 20px' }}>
          <div className="navbar-main" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
            
            {/* Left sidebar triggers and Dropdown */}
            <div className="category-hamburger-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '20px', position: 'relative', zIndex: 10005 }}>
              <div 
                className="hamburger-menu w-nav-button" 
                onClick={() => setIsNavMenuOpen(!isNavMenuOpen)} 
                style={{ 
                  cursor: 'pointer', 
                  zIndex: 10005, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  borderRadius: '4px',
                  background: isNavMenuOpen ? 'rgba(0,0,0,0.05)' : 'transparent',
                  transition: 'background 0.2s'
                }}
              >
                {isNavMenuOpen ? (
                  <X size={24} style={{ color: '#111' }} />
                ) : (
                  <Menu size={24} style={{ color: '#111' }} />
                )}
              </div>

              {/* Browse Categories dropdown */}
              <div className={`category-dropdown w-dropdown ${isCategoryOpen ? 'w--open' : ''}`} style={{ position: 'relative' }}>
                <div 
                  className="browse-categories-block w-dropdown-toggle" 
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)} 
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}
                >
                  <Layers size={18} style={{ color: '#0194da' }} />
                  <div className="_14px-text-uppercase hide-in-mobile" style={{ fontWeight: 700 }}>Appliances</div>
                </div>

                {isCategoryOpen && (
                  <nav className="category-dropdown-on-hover w-dropdown-list w--open" style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid #ddd', minWidth: '240px', zIndex: 1100, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <div className="w-dyn-list">
                      <div role="list" className="product-categories-vertical-droddown-block w-dyn-items" style={{ padding: '10px 0' }}>
                        {CATEGORIES.map((cat) => (
                          <div key={cat.slug} role="listitem" className="w-dyn-item" style={{ width: '100%' }}>
                            <a 
                              href={`#category-${cat.slug}`} 
                              onClick={(e) => {
                                e.preventDefault();
                                setIsCategoryOpen(false);
                                onPageChange('shop', cat.name);
                              }}
                              className="category-sidebar-open w-inline-block"
                              style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', textDecoration: 'none', color: '#333', gap: '12px', transition: 'background-color 0.2s' }}
                            >
                              <div className="category-dropdown-side" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img alt={cat.name} loading="lazy" src={cat.image} referrerPolicy="no-referrer" className="_24px-image" style={{ width: '24px', height: '24px', borderRadius: '4px', objectFit: 'cover' }} />
                                <div style={{ fontSize: '14px', fontWeight: 600 }}>{cat.name}</div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </nav>
                )}
              </div>
            </div>

            {/* Middle Nav Links */}
            {isNavMenuOpen && (
              <div 
                className="mobile-backdrop"
                onClick={() => setIsNavMenuOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.4)',
                  backdropFilter: 'blur(2px)',
                  zIndex: 999
                }}
              />
            )}

            <nav role="navigation" className={`nav-menu-wrapper-full w-nav-menu ${isNavMenuOpen ? 'w--open' : ''}`}>
              <div className="mobile-only-header" style={{ display: 'none', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '15px 20px', borderBottom: '1px solid #eee', marginBottom: '15px' }}>
                <span style={{ fontWeight: 800, fontFamily: 'Rajdhani, sans-serif', fontSize: '18px', color: '#111' }}>NAVIGATION</span>
                <button 
                  onClick={() => setIsNavMenuOpen(false)}
                  style={{ background: 'none', border: 'none', fontSize: '28px', cursor: 'pointer', fontWeight: 'bold', color: '#111', padding: '0 5px' }}
                  aria-label="Close Menu"
                >
                  &times;
                </button>
              </div>
              <div className="nav-menu-left-sidebar" style={{ display: 'flex', gap: '20px' }}>
                <div className="nav-list">
                  <a href="#home" onClick={(e) => { e.preventDefault(); setIsNavMenuOpen(false); onPageChange('home'); }} className={`nav-link w-inline-block ${currentPage === 'home' ? 'w--current' : ''}`}>
                    <div style={{ fontWeight: 700 }}>Home</div>
                  </a>
                </div>
                <div className="nav-list">
                  <a href="#about" onClick={(e) => { e.preventDefault(); setIsNavMenuOpen(false); onPageChange('about'); }} className={`nav-link w-inline-block ${currentPage === 'about' ? 'w--current' : ''}`}>
                    <div style={{ fontWeight: 700 }}>About</div>
                  </a>
                </div>
                <div className="nav-list">
                  <a href="#shop" onClick={(e) => { e.preventDefault(); setIsNavMenuOpen(false); onPageChange('shop'); }} className={`nav-link w-inline-block ${currentPage === 'shop' ? 'w--current' : ''}`}>
                    <div style={{ fontWeight: 700 }}>Shop</div>
                  </a>
                </div>
                <div className="nav-list">
                  <a href="#blog" onClick={(e) => { e.preventDefault(); setIsNavMenuOpen(false); onPageChange('blog'); }} className={`nav-link w-inline-block ${currentPage === 'blog' ? 'w--current' : ''}`}>
                    <div style={{ fontWeight: 700 }}>Blog</div>
                  </a>
                </div>
                <div className="nav-list">
                  <a href="#contact" onClick={(e) => { e.preventDefault(); setIsNavMenuOpen(false); onPageChange('contact'); }} className={`nav-link w-inline-block ${currentPage === 'contact' ? 'w--current' : ''}`}>
                    <div style={{ fontWeight: 700 }}>Contact</div>
                  </a>
                </div>
              </div>
            </nav>

            {/* Right icons (Search, Account, Cart) */}
            <div className="search-button-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div className="pointer" onClick={() => setIsSearchOpen(true)} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                <Search size={20} style={{ color: '#111' }} />
              </div>
              
              <a href="#about" onClick={(e) => { e.preventDefault(); onPageChange('about'); }} className="account-link-block w-inline-block" style={{ display: 'flex', alignItems: 'center' }}>
                <User size={20} style={{ color: '#111' }} />
              </a>

              {/* Cart Open and Drawer */}
              <div className="w-commerce-commercecartwrapper">
                <a 
                  className="w-commerce-commercecartopenlink cart-button w-inline-block" 
                  role="button" 
                  onClick={(e) => { e.preventDefault(); setIsCartOpen(true); }}
                  href="#cart"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', background: '#0194da', padding: '6px 12px', borderRadius: '20px', color: '#fff' }}
                >
                  <ShoppingCart size={16} style={{ color: '#fff' }} />
                  <div className="cart-quantity-primary" style={{ fontWeight: 700 }}>{cartCount}</div>
                </a>

                {/* Cart Side Drawer */}
                {isCartOpen && (
                  <div className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar cart-wrapper" style={{ display: 'block', position: 'fixed', top: 0, right: 0, bottom: 0, left: 0, zIndex: 9999, background: 'rgba(0,0,0,0.5)' }}>
                    <div role="dialog" className="w-commerce-commercecartcontainer cart-container" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '100%', maxWidth: '420px', background: '#fff', padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                      
                      {/* Cart Header */}
                      <div className="w-commerce-commercecartheader cart-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '20px' }}>
                        <h4 className="w-commerce-commercecartheading _20px-title-primary" style={{ margin: 0, fontWeight: 700 }}>Your Cart</h4>
                        <a className="w-commerce-commercecartcloselink close-button-top-right w-inline-block" role="button" onClick={() => setIsCartOpen(false)} style={{ cursor: 'pointer' }}>
                          <div className="close-icons" style={{ fontSize: '20px', fontWeight: 'bold' }}>close</div>
                        </a>
                      </div>

                      {/* Cart Body */}
                      <div className="w-commerce-commercecartformwrapper" style={{ flex: 1, overflowY: 'auto', marginBottom: '20px' }}>
                        {cartItems.length === 0 ? (
                          <div className="w-commerce-commercecartemptystate" style={{ padding: '40px 0', textAlign: 'center', color: '#777' }}>
                            <div>No items found in your basket.</div>
                          </div>
                        ) : (
                          <div className="w-commerce-commercecartlist cart-list" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {cartItems.map((item) => (
                              <div key={item.product.id} className="w-commerce-commercecartitem cart-item" style={{ display: 'flex', gap: '15px', paddingBottom: '15px', borderBottom: '1px solid #f5f5f5', alignItems: 'center' }}>
                                <div className="card-popup-image-thumbnail" style={{ width: '70px', height: '70px', flexShrink: 0 }}>
                                  <img src={item.product.mainImage} alt={item.product.name} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} />
                                </div>
                                <div className="w-commerce-commercecartiteminfo cart-qty-info-block" style={{ flex: 1 }}>
                                  <div className="w-commerce-commercecartproductname _18px-title" style={{ fontSize: '14px', fontWeight: 700, lineHeight: '1.3', marginBottom: '4px' }}>
                                    {item.product.name}
                                  </div>
                                  <div className="cart-price" style={{ fontWeight: 600, color: '#0194da' }}>
                                    £{item.product.price} <span style={{ fontSize: '12px', color: '#999' }}>each</span>
                                  </div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '6px' }}>
                                    <label style={{ fontSize: '12px', color: '#666' }}>Qty:</label>
                                    <input 
                                      type="number" 
                                      min="1" 
                                      className="cart-qty" 
                                      value={item.quantity} 
                                      onChange={(e) => onUpdateCartQuantity(item.product.id, parseInt(e.target.value) || 1)}
                                      style={{ width: '50px', padding: '2px 4px', border: '1px solid #ccc', borderRadius: '4px', textAlign: 'center' }} 
                                    />
                                  </div>
                                </div>
                                <a role="button" onClick={() => onRemoveFromCart(item.product.id)} style={{ cursor: 'pointer', color: '#ff4d4d' }}>
                                  <div className="icon-2" style={{ fontSize: '18px' }}>cancel</div>
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Cart Footer */}
                      {cartItems.length > 0 && (
                        <div className="w-commerce-commercecartfooter cart-footer" style={{ borderTop: '1px solid #eee', paddingTop: '15px' }}>
                          <div className="w-commerce-commercecartlineitem cart-line-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', alignItems: 'center' }}>
                            <div className="_16px-bold-title" style={{ fontWeight: 700 }}>Basket Subtotal</div>
                            <div className="cart-total-price" style={{ fontSize: '20px', fontWeight: 800, color: '#111' }}>£{cartSubtotal}</div>
                          </div>
                          <div className="custom-button-wrapper" style={{ width: '100%' }}>
                            <a 
                              href="#checkout" 
                              onClick={handleCheckout}
                              className="w-commerce-commercecartcheckoutbutton custom-button white" 
                              style={{ display: 'block', textAlign: 'center', width: '100%', background: '#0194da', color: '#fff', textDecoration: 'none', padding: '12px', borderRadius: '6px', fontWeight: 700 }}
                            >
                              Continue to Checkout
                            </a>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Global Search Popup */}
      {isSearchOpen && (
        <div className="search-popup" style={{ display: 'block', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', zIndex: 99999 }}>
          <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <form onSubmit={handleSearchSubmit} className="search-field-wrapper w-form" style={{ width: '100%', maxWidth: '600px', display: 'flex', gap: '10px' }}>
              <input 
                className="popup-search-input w-input" 
                maxLength={256} 
                name="query" 
                placeholder="Search premium appliances (e.g. Samsung, Bosch)..." 
                type="search" 
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                required 
                style={{ flex: 1, padding: '15px 20px', fontSize: '18px', border: 'none', borderRadius: '4px' }}
              />
              <input type="submit" className="search-button-absolute w-button" value="Search" style={{ background: '#0194da', color: '#fff', border: 'none', padding: '0 25px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }} />
            </form>
            <div onClick={() => setIsSearchOpen(false)} className="close-icon-white" style={{ position: 'absolute', top: '30px', right: '30px', color: '#fff', fontSize: '30px', cursor: 'pointer', fontWeight: 'bold' }}>close</div>
          </div>
        </div>
      )}
    </>
  );
}

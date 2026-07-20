import { useState, useEffect } from 'react';
import { CATEGORIES, PRODUCTS, BLOG_POSTS, TESTIMONIALS } from '../data';
import { Product } from '../types';

interface HomeViewProps {
  onPageChange: (page: string, categoryFilter?: string) => void;
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export default function HomeView({ onPageChange, onAddToCart, onSelectProduct }: HomeViewProps) {
  // Hero Slider State
  const [activeSlide, setActiveSlide] = useState(0);
  const heroSlides = [
    {
      title: "Bosch Serie 6 Laundry",
      subtitle: "Silent, Smart Washing",
      image: "https://images.unsplash.com/photo-1582730147233-ac8112440fd5?auto=format&fit=crop&w=1200&q=80",
      product: PRODUCTS[0],
      bgClass: "bg-color-1",
      layerClass: "layer-color-1"
    },
    {
      title: "Samsung SpaceMax Refrigeration",
      subtitle: "Luxury Side-by-Side Fridge Freezers",
      image: "https://images.unsplash.com/photo-1571175432247-fe033656ec62?auto=format&fit=crop&w=1200&q=80",
      product: PRODUCTS[1],
      bgClass: "bg-color-2",
      layerClass: "layer-color-2"
    },
    {
      title: "LG AI OLED Smart TVs",
      subtitle: "Ultimate Contrast and Cinema Quality",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
      product: PRODUCTS[4],
      bgClass: "bg-color-3",
      layerClass: "layer-color-3"
    }
  ];

  // Auto-play hero slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Accordion State
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  // Before & After slider value (range 0 to 100)
  const [sliderPos, setSliderValue] = useState(50);

  // Testimonials slide state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="page-wrapper">
      {/* Hero Carousel Section */}
      <div className="slider w-slider" style={{ position: 'relative', height: '580px', overflow: 'hidden', background: '#111' }}>
        <div className="w-slider-mask" style={{ height: '100%', position: 'relative' }}>
          {heroSlides.map((slide, idx) => (
            <div 
              key={idx} 
              className="w-slide" 
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                opacity: activeSlide === idx ? 1 : 0, 
                transition: 'opacity 0.8s ease-in-out',
                zIndex: activeSlide === idx ? 1 : 0,
                pointerEvents: activeSlide === idx ? 'auto' : 'none'
              }}
            >
              <section className="hero-section" style={{ height: '100%', display: 'flex', alignItems: 'center', background: 'transparent' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'center' }}>
                  <div className="contents" style={{ paddingRight: '20px', zIndex: 10 }}>
                    <div className="mb-50px">
                      <div className="mask">
                        <span style={{ color: '#ec4899', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '14px', display: 'block', marginBottom: '10px' }}>
                          {slide.subtitle}
                        </span>
                      </div>
                      <div className="mask">
                        <h1 className="white-heading" style={{ fontSize: '44px', fontWeight: 800, color: '#fff', lineHeight: '1.1', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                          {slide.title}
                        </h1>
                      </div>
                    </div>
                    <div className="mask" style={{ marginTop: '30px' }}>
                      <a 
                        href="#buy" 
                        onClick={(e) => { e.preventDefault(); if (slide.product) onSelectProduct(slide.product); }}
                        className="primary-button white-btn w-inline-block"
                        style={{ display: 'inline-block', background: '#fff', color: '#111', fontWeight: 'bold', padding: '12px 30px', textDecoration: 'none', borderRadius: '4px', textTransform: 'uppercase', transition: 'background-color 0.2s' }}
                      >
                        <div className="button-text-wrapper">
                          <div className="default-text">View Specifications</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="image-wrapper" style={{ position: 'relative', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img 
                      loading="lazy" 
                      alt={slide.title} 
                      src={slide.image} 
                      referrerPolicy="no-referrer"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }} 
                    />
                    <div className="hero-image-bg-rounded" style={{ position: 'absolute', zIndex: -1, width: '90%', height: '90%', background: '#0194da', opacity: 0.15, borderRadius: '50%', filter: 'blur(40px)' }}></div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>

        {/* Slide Controls */}
        <div 
          className="navigation-arrow-40px" 
          onClick={() => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)} 
          style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 100, cursor: 'pointer', background: 'rgba(255,255,255,0.1)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span className="material-icons" style={{ fontSize: '24px' }}>chevron_left</span>
        </div>
        <div 
          className="navigation-arrow-40px right-60px" 
          onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)} 
          style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 100, cursor: 'pointer', background: 'rgba(255,255,255,0.1)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <span className="material-icons" style={{ fontSize: '24px' }}>chevron_right</span>
        </div>

        {/* Slide Indicators */}
        <div className="slide-nav-150px-bottom w-slider-nav" style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 100, display: 'flex', gap: '8px' }}>
          {heroSlides.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveSlide(idx)}
              className={`w-slider-dot ${activeSlide === idx ? 'w-active' : ''}`} 
              style={{ 
                width: activeSlide === idx ? '25px' : '8px', 
                height: '8px', 
                borderRadius: '4px', 
                background: activeSlide === idx ? '#ec4899' : '#666', 
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Appliance Categories Section */}
      <div className="container negative-margin" style={{ marginTop: '-40px', position: 'relative', zIndex: 100 }}>
        <div className="w-dyn-list">
          <div role="list" className="category-grid w-dyn-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
            {CATEGORIES.map((cat) => (
              <div key={cat.slug} role="listitem" className="w-dyn-item">
                <a 
                  href={`#category-${cat.slug}`} 
                  onClick={(e) => { e.preventDefault(); onPageChange('shop', cat.name); }} 
                  className="category-card-with-image w-inline-block"
                  style={{ display: 'block', position: 'relative', height: '180px', borderRadius: '8px', overflow: 'hidden', textDecoration: 'none' }}
                >
                  <div className="category-title" style={{ position: 'absolute', bottom: '15px', left: '15px', color: '#fff', zIndex: 10, fontSize: '18px', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                    {cat.name}
                  </div>
                  <div className="category-image-wrapper" style={{ width: '100%', height: '100%' }}>
                    <img 
                      src={cat.image} 
                      loading="lazy" 
                      alt={cat.name} 
                      referrerPolicy="no-referrer"
                      className="full-image" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} 
                    />
                    <div className="black-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)' }}></div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Promotional Banner Row */}
      <section className="section" style={{ padding: '60px 0 30px' }}>
        <div className="container">
          <div className="banners" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' }}>
            <a 
              href="#deals" 
              onClick={(e) => { e.preventDefault(); onPageChange('shop'); }} 
              className="top-category landscape w-inline-block"
              style={{ display: 'block', position: 'relative', height: '240px', borderRadius: '8px', overflow: 'hidden' }}
            >
              <img 
                sizes="(max-width: 479px) 100vw, 70px" 
                alt="Appliance Deals" 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" 
                referrerPolicy="no-referrer"
                className="top-category-image landscape"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="linear-background-category" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '25px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))', color: '#fff' }}>
                <div className="_22px-text-white" style={{ fontSize: '24px', fontWeight: 800 }}>Exclusive Kitchen Packages</div>
                <p className="semi-white-text" style={{ margin: '5px 0 0', opacity: 0.9 }}>Upgrade your entire kitchen and save up to £300. Multi-buy savings on ovens, hobs &amp; hoods.</p>
              </div>
            </a>

            <a 
              href="#tvs" 
              onClick={(e) => { e.preventDefault(); onPageChange('shop', 'Smart TVs'); }} 
              className="top-category w-inline-block"
              style={{ display: 'block', position: 'relative', height: '240px', borderRadius: '8px', overflow: 'hidden' }}
            >
              <img 
                alt="Smart Entertainment" 
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80" 
                referrerPolicy="no-referrer"
                className="top-category-image square"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="linear-background-category" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))', color: '#fff' }}>
                <div className="_22px-text-white" style={{ fontSize: '18px', fontWeight: 800 }}>Smart Home Cinema</div>
                <p className="semi-white-text" style={{ margin: '5px 0 0', opacity: 0.9, fontSize: '13px' }}>4K OLED &amp; QLED TVs on display.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="section bg-section" style={{ padding: '60px 0', background: '#f9f9f9' }}>
        <div className="container">
          <div className="title-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
            <div className="_2px-height-border" style={{ flex: 1, height: '2px', background: '#ddd' }}></div>
            <div className="product-bar-texts-vertical" style={{ padding: '0 25px', textAlign: 'center' }}>
              <div className="sub-title" style={{ color: '#0194da', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '12px', marginBottom: '5px' }}>Trending Showroom Models</div>
              <div className="text-merge-title" style={{ position: 'relative' }}>
                <h2 className="heading" style={{ fontSize: '30px', fontWeight: 800, margin: 0 }}>Best Selling Appliances</h2>
              </div>
            </div>
            <div className="_2px-height-border" style={{ flex: 1, height: '2px', background: '#ddd' }}></div>
          </div>

          <div className="w-dyn-list">
            <div role="list" className="_4-column-grid w-dyn-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '30px' }}>
              {PRODUCTS.slice(0, 4).map((prod) => (
                <div key={prod.id} role="listitem" className="w-dyn-item">
                  <div className="product-card-with-bg" style={{ background: '#fff', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee', transition: 'all 0.3s' }}>
                    <div className="product-thumbnail-wrapper-with-bg" style={{ position: 'relative', height: '220px', overflow: 'hidden', background: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <img 
                        alt={prod.name} 
                        src={prod.mainImage} 
                        referrerPolicy="no-referrer"
                        className="product-thumbnail" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      <a href={`#prod-${prod.id}`} onClick={(e) => { e.preventDefault(); onSelectProduct(prod); }} className="w-inline-block" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, background: 'rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.3s' }}>
                        <span style={{ background: '#fff', color: '#111', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', fontSize: '12px' }}>View Specs</span>
                      </a>
                      {prod.isSale && (
                        <div className="sale-tag" style={{ position: 'absolute', top: '12px', left: '12px', background: '#ff3b30', color: '#fff', padding: '4px 10px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px' }}>
                          On Sale
                        </div>
                      )}
                    </div>
                    
                    <div style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', gap: '2px', color: '#ffcc00', marginBottom: '8px' }}>
                        {Array.from({ length: 5 }).map((_, sIdx) => (
                          <span key={sIdx} className="material-icons" style={{ fontSize: '16px' }}>
                            {sIdx < prod.rating ? 'star' : 'star_border'}
                          </span>
                        ))}
                      </div>
                      
                      <a href={`#prod-${prod.id}`} onClick={(e) => { e.preventDefault(); onSelectProduct(prod); }} className="mask w-inline-block" style={{ textDecoration: 'none' }}>
                        <h3 className="product-name-on-card" style={{ fontSize: '15px', fontWeight: 700, color: '#111', margin: '0 0 10px', height: '36px', overflow: 'hidden', lineBreak: 'anywhere' }}>
                          {prod.name}
                        </h3>
                      </a>
                      
                      <div className="w-layout-hflex product-price-block" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                        <div className="card-price-18px" style={{ fontSize: '18px', fontWeight: 800, color: '#0194da' }}>
                          £{prod.price}
                        </div>
                        {prod.compareAtPrice && (
                          <div className="card-compare-prices" style={{ textDecoration: 'line-through', color: '#999', fontSize: '14px' }}>
                            £{prod.compareAtPrice}
                          </div>
                        )}
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button 
                          onClick={() => onAddToCart(prod)}
                          className="w-commerce-commerceaddtocartbutton custom-button"
                          style={{ flex: 1, background: '#111', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', transition: 'background-color 0.2s' }}
                        >
                          Add to Basket
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion / Spotlight Section */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="_2-column-block reverse" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div className="contents">
              <div className="title-horizontal" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                <div className="title-divider" style={{ width: '40px', height: '2px', background: '#ec4899' }}></div>
                <div className="_20px-title-primary" style={{ fontSize: '14px', fontWeight: 700, color: '#ec4899', textTransform: 'uppercase', letterSpacing: '2px' }}>Showroom Focus</div>
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#111', lineHeight: '1.2', margin: '0 0 25px' }}>
                Expertly Integrated<br/>Consciously Designed
              </h2>

              {/* Accordion List */}
              <div className="hover-category-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                
                {/* Accordion 1 */}
                <div 
                  className={`category-dropdown-block ${activeAccordion === 0 ? 'active' : ''}`}
                  onClick={() => setActiveAccordion(0)}
                  style={{ border: '1px solid #eee', borderRadius: '6px', padding: '15px 20px', cursor: 'pointer', background: activeAccordion === 0 ? '#fafafa' : '#fff' }}
                >
                  <div className="category-switch" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="horizontal-left-center-12px" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div className="_18px-500-primary-title" style={{ color: '#ec4899', fontWeight: 700, fontSize: '16px' }}>01.</div>
                      <div className="dropdown-title-black" style={{ fontWeight: 700, color: '#111' }}>Premium Laundry Appliances</div>
                    </div>
                    <span className="material-icons" style={{ transform: activeAccordion === 0 ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s', color: '#666' }}>chevron_right</span>
                  </div>
                  {activeAccordion === 0 && (
                    <div style={{ marginTop: '10px', color: '#555', fontSize: '14px', lineHeight: '1.5' }}>
                      Keep your garments in absolute pristine condition with our collection of front-loading washing machines, heat-pump tumble dryers, and smart integrated washer-dryer stacks.
                    </div>
                  )}
                </div>

                {/* Accordion 2 */}
                <div 
                  className={`category-dropdown-block ${activeAccordion === 1 ? 'active' : ''}`}
                  onClick={() => setActiveAccordion(1)}
                  style={{ border: '1px solid #eee', borderRadius: '6px', padding: '15px 20px', cursor: 'pointer', background: activeAccordion === 1 ? '#fafafa' : '#fff' }}
                >
                  <div className="category-switch" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="horizontal-left-center-12px" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div className="_18px-500-primary-title" style={{ color: '#ec4899', fontWeight: 700, fontSize: '16px' }}>02.</div>
                      <div className="dropdown-title-black" style={{ fontWeight: 700, color: '#111' }}>Luxury American Refrigeration</div>
                    </div>
                    <span className="material-icons" style={{ transform: activeAccordion === 1 ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s', color: '#666' }}>chevron_right</span>
                  </div>
                  {activeAccordion === 1 && (
                    <div style={{ marginTop: '10px', color: '#555', fontSize: '14px', lineHeight: '1.5' }}>
                      Maximize your food storage with multi-door cooling zones, built-in ice makers, and smart compressor systems that maintain continuous temperature with low energy usage.
                    </div>
                  )}
                </div>

                {/* Accordion 3 */}
                <div 
                  className={`category-dropdown-block ${activeAccordion === 2 ? 'active' : ''}`}
                  onClick={() => setActiveAccordion(2)}
                  style={{ border: '1px solid #eee', borderRadius: '6px', padding: '15px 20px', cursor: 'pointer', background: activeAccordion === 2 ? '#fafafa' : '#fff' }}
                >
                  <div className="category-switch" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="horizontal-left-center-12px" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div className="_18px-500-primary-title" style={{ color: '#ec4899', fontWeight: 700, fontSize: '16px' }}>03.</div>
                      <div className="dropdown-title-black" style={{ fontWeight: 700, color: '#111' }}>Built-in Cooking &amp; Ovens</div>
                    </div>
                    <span className="material-icons" style={{ transform: activeAccordion === 2 ? 'rotate(90deg)' : 'none', transition: 'transform 0.3s', color: '#666' }}>chevron_right</span>
                  </div>
                  {activeAccordion === 2 && (
                    <div style={{ marginTop: '10px', color: '#555', fontSize: '14px', lineHeight: '1.5' }}>
                      Craft your kitchen exactly the way you want with integrated ovens, Pyrolytic self-cleaning cookers, high-output induction hobs, and powerful extraction hoods.
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Dynamic image switching based on active Accordion */}
            <div className="image-wrapper" style={{ position: 'relative', height: '420px', borderRadius: '8px', overflow: 'hidden' }}>
              <img 
                src={
                  activeAccordion === 0 
                    ? "https://images.unsplash.com/photo-1582730147233-ac8112440fd5?auto=format&fit=crop&w=800&q=80" 
                    : activeAccordion === 1 
                    ? "https://images.unsplash.com/photo-1571175432247-fe033656ec62?auto=format&fit=crop&w=800&q=80" 
                    : "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&w=800&q=80"
                } 
                loading="lazy" 
                alt="Appliance Preview" 
                referrerPolicy="no-referrer"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease' }} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Interactive Kitchen Design Section */}
      <section className="section" style={{ padding: '60px 0', background: '#fafafa' }}>
        <div className="container">
          <div className="_2-column-block" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
            <div className="contents">
              <div className="_20px-title-primary" style={{ color: '#0194da', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Kitchen Makeovers</div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 15px', color: '#111' }}>Integrated Design Solutions</h2>
              <p className="mb-50px" style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
                Slide the control handle to see how replacing standard stand-alone products with our professional Neff and Bosch built-in integrated appliances transforms a cluttered kitchen space into an ultra-modern culinary oasis.
              </p>
              
              {/* Interactive range input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', background: '#fff', padding: '15px', borderRadius: '6px', border: '1px solid #eee' }}>
                <label style={{ fontSize: '13px', fontWeight: 700, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Interactive Kitchen Slider:</span>
                  <span style={{ color: '#ec4899' }}>{sliderPos}% Revealed</span>
                </label>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={sliderPos} 
                  onChange={(e) => setSliderValue(parseInt(e.target.value))} 
                  style={{ width: '100%', accentColor: '#ec4899', cursor: 'pointer' }}
                />
              </div>

              <div style={{ marginTop: '20px' }}>
                <a 
                  href="#contact" 
                  onClick={(e) => { e.preventDefault(); onPageChange('contact'); }} 
                  className="black-button w-inline-block"
                  style={{ display: 'inline-block', background: '#111', color: '#fff', textDecoration: 'none', padding: '12px 25px', borderRadius: '4px', fontWeight: 'bold' }}
                >
                  <div className="button-text-wrapper">
                    <div className="default-text">Book Installation Design</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Before / After Slider Graphic */}
            <div className="before-after-slider" style={{ position: 'relative', height: '360px', borderRadius: '8px', overflow: 'hidden', userSelect: 'none' }}>
              {/* Before View (Base Image) */}
              <div className="before-image" style={{ width: '100%', height: '100%' }}>
                <img 
                  alt="Cluttered Kitchen" 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" 
                  referrerPolicy="no-referrer"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 8px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px' }}>
                  Before (Cluttered Space)
                </div>
              </div>

              {/* After View (Overlaid Image with width based on state) */}
              <div 
                className="after-image-absolute" 
                style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: 0, 
                  bottom: 0, 
                  width: `${sliderPos}%`, 
                  overflow: 'hidden', 
                  transition: 'width 0.1s ease',
                  borderRight: '3px solid #0194da'
                }}
              >
                <div className="fixed-width-wrapper" style={{ width: '450px', height: '100%', minWidth: '400px' }}>
                  <img 
                    alt="Luxury Integrated Kitchen" 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                    referrerPolicy="no-referrer"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#0194da', color: '#fff', padding: '4px 8px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px' }}>
                    After (Built-in Design)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider Section */}
      <section className="section bg-section" style={{ padding: '60px 0', background: '#f5f5f5' }}>
        <div className="container">
          <div className="product-bar" style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
            <div className="product-bar-texts-vertical" style={{ textAlign: 'center' }}>
              <div className="sub-title" style={{ color: '#0194da', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '12px', marginBottom: '5px' }}>Customer Reviews</div>
              <h2 className="heading" style={{ fontSize: '30px', fontWeight: 800 }}>Reviews From Verified Buyers</h2>
            </div>
          </div>

          <div style={{ position: 'relative', background: '#fff', padding: '40px', borderRadius: '8px', border: '1px solid #eee', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px', alignItems: 'center' }}>
            <div className="client-image-block" style={{ width: '100%', height: '240px', borderRadius: '8px', overflow: 'hidden' }}>
              <img 
                src={TESTIMONIALS[activeTestimonial].clientImage} 
                alt={TESTIMONIALS[activeTestimonial].name} 
                referrerPolicy="no-referrer"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>
            
            <div>
              <span className="material-icons" style={{ fontSize: '48px', color: '#0194da', opacity: 0.3 }}>format_quote</span>
              <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 10px', color: '#111' }}>
                "{TESTIMONIALS[activeTestimonial].title}"
              </h3>
              <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                {TESTIMONIALS[activeTestimonial].comment}
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: 0, fontWeight: 700, color: '#111' }}>{TESTIMONIALS[activeTestimonial].name}</h4>
                  <span style={{ fontSize: '13px', color: '#777' }}>{TESTIMONIALS[activeTestimonial].role}</span>
                </div>
                
                {/* Dots to cycle */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {TESTIMONIALS.map((_, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => setActiveTestimonial(idx)}
                      style={{ 
                        width: '10px', 
                        height: '10px', 
                        borderRadius: '50%', 
                        background: activeTestimonial === idx ? '#ec4899' : '#ddd', 
                        cursor: 'pointer' 
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Previews Row */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="title-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px' }}>
            <div className="_2px-height-border" style={{ flex: 1, height: '2px', background: '#ddd' }}></div>
            <div className="product-bar-texts-vertical" style={{ padding: '0 25px', textAlign: 'center' }}>
              <div className="sub-title" style={{ color: '#0194da', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '12px', marginBottom: '5px' }}>Expert Insights</div>
              <h2 className="heading" style={{ fontSize: '30px', fontWeight: 800 }}>Read Our Appliance Blog</h2>
            </div>
            <div className="_2px-height-border" style={{ flex: 1, height: '2px', background: '#ddd' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {BLOG_POSTS.slice(0, 2).map((post) => (
              <div key={post.id} className="blog-list-card" style={{ background: '#fff', borderRadius: '8px', border: '1px solid #eee', overflow: 'hidden' }}>
                <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                  <img src={post.image} alt={post.title} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#0194da', color: '#fff', padding: '4px 10px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px' }}>
                    {post.category}
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ fontSize: '12px', color: '#777', marginBottom: '8px' }}>
                    {post.date} | By <strong>{post.author}</strong>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111', margin: '0 0 10px', lineHeight: '1.4' }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.5', marginBottom: '20px' }}>
                    {post.summary}
                  </p>
                  <a 
                    href="#blog-detail" 
                    onClick={(e) => { e.preventDefault(); onPageChange('blog'); }} 
                    style={{ color: '#0194da', fontWeight: 700, textDecoration: 'none', fontSize: '14px' }}
                  >
                    Read Full Article &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid (Free Delivery, Secure Payment, Support, etc.) */}
      <section style={{ padding: '30px 0 60px' }}>
        <div className="container">
          <div className="service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            <div className="service-card" style={{ display: 'flex', gap: '15px', alignItems: 'center', background: '#fff', padding: '20px', borderRadius: '6px', border: '1px solid #eee' }}>
              <span className="material-icons" style={{ fontSize: '36px', color: '#0194da' }}>local_shipping</span>
              <div className="w-layout-vflex _6px-gap">
                <div className="_18px-text-700" style={{ fontWeight: 700, fontSize: '16px' }}>FREE DELIVERY</div>
                <p className="_14px-paragraph" style={{ margin: 0, fontSize: '13px', color: '#666' }}>On NI orders over £150</p>
              </div>
            </div>

            <div className="service-card" style={{ display: 'flex', gap: '15px', alignItems: 'center', background: '#fff', padding: '20px', borderRadius: '6px', border: '1px solid #eee' }}>
              <span className="material-icons" style={{ fontSize: '36px', color: '#0194da' }}>support_agent</span>
              <div className="w-layout-vflex _6px-gap">
                <div className="_18px-text-700" style={{ fontWeight: 700, fontSize: '16px' }}>EXPERT ADVICE</div>
                <p className="_14px-paragraph" style={{ margin: 0, fontSize: '13px', color: '#666' }}>Boucher Rd Showroom Team</p>
              </div>
            </div>

            <div className="service-card" style={{ display: 'flex', gap: '15px', alignItems: 'center', background: '#fff', padding: '20px', borderRadius: '6px', border: '1px solid #eee' }}>
              <span className="material-icons" style={{ fontSize: '36px', color: '#0194da' }}>verified_user</span>
              <div className="w-layout-vflex _6px-gap">
                <div className="_18px-text-700" style={{ fontWeight: 700, fontSize: '16px' }}>WARRANTY GUARANTEE</div>
                <p className="_14px-paragraph" style={{ margin: 0, fontSize: '13px', color: '#666' }}>Authorized UK Warranties</p>
              </div>
            </div>

            <div className="service-card" style={{ display: 'flex', gap: '15px', alignItems: 'center', background: '#fff', padding: '20px', borderRadius: '6px', border: '1px solid #eee' }}>
              <span className="material-icons" style={{ fontSize: '36px', color: '#0194da' }}>security</span>
              <div className="w-layout-vflex _6px-gap">
                <div className="_18px-text-700" style={{ fontWeight: 700, fontSize: '16px' }}>SECURE BASKET</div>
                <p className="_14px-paragraph" style={{ margin: 0, fontSize: '13px', color: '#666' }}>Fully protected transactions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

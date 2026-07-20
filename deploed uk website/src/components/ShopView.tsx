import { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '../data';
import { Product } from '../types';

interface ShopViewProps {
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  categoryFilter?: string;
  onCategoryFilterClear?: () => void;
  onPageChange?: (page: string, categoryFilter?: string) => void;
}

export default function ShopView({
  onAddToCart,
  onSelectProduct,
  categoryFilter,
  onCategoryFilterClear,
  onPageChange
}: ShopViewProps) {
  const [showFiltersOnMobile, setShowFiltersOnMobile] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Filter States
  const [searchVal, setSearchVal] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  // Available brands in our catalog
  const brands = ["Samsung", "LG", "Bosch", "Beko", "Neff", "Hotpoint"];

  // Filter logic
  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchVal.toLowerCase()) || 
      prod.brand.toLowerCase().includes(searchVal.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchVal.toLowerCase());
    
    const matchesCategory = !categoryFilter || prod.category === categoryFilter;
    const matchesBrand = !selectedBrand || prod.brand === selectedBrand;
    const matchesRating = !selectedRating || prod.rating >= selectedRating;

    return matchesSearch && matchesCategory && matchesBrand && matchesRating;
  });

  const handleResetFilters = () => {
    setSearchVal('');
    setSelectedBrand(null);
    setSelectedRating(null);
    if (onCategoryFilterClear) onCategoryFilterClear();
  };

  return (
    <div className="page-wrapper" style={{ padding: '40px 0' }}>
      <div className="container _2-column-container" style={{ display: 'grid', gridTemplateColumns: showFiltersOnMobile ? '1fr' : '1fr 3fr', gap: '30px' }}>
        
        {/* Sidebar Filters */}
        <div 
          className={`sidebar-container ${showFiltersOnMobile ? 'w--open' : ''}`} 
          style={{ 
            display: !showFiltersOnMobile ? 'block' : 'block',
            background: '#fff', 
            padding: '25px', 
            borderRadius: '8px', 
            border: '1px solid #eee',
            height: 'fit-content'
          }}
        >
          {showFiltersOnMobile && (
            <div 
              className="hide-filter-bar" 
              onClick={() => setShowFiltersOnMobile(false)}
              style={{ display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer', fontWeight: 700, color: '#ff3b30', marginBottom: '20px' }}
            >
              <span className="material-icons">filter_alt_off</span>
              <div>Hide Filters</div>
            </div>
          )}

          {/* Search form inside sidebar */}
          <div className="search-widget" style={{ marginBottom: '25px' }}>
            <div style={{ fontWeight: 700, fontSize: '14px', marginBottom: '8px', color: '#111' }}>Search Products</div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <input 
                className="sidebar-search-input w-input" 
                placeholder="Model, keyword..." 
                type="search" 
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                style={{ flex: 1, padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
              />
            </div>
          </div>

          {/* Category Filter list */}
          <div className="w-layout-vflex widget-wrapper" style={{ marginBottom: '25px' }}>
            <div className="_20px-bold-title" style={{ fontSize: '16px', fontWeight: 800, color: '#111', borderBottom: '2px solid #eee', paddingBottom: '8px', marginBottom: '15px' }}>
              Showroom Categories
            </div>
            <div className="widget" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href="#all-cat"
                onClick={(e) => { e.preventDefault(); if (onCategoryFilterClear) onCategoryFilterClear(); }}
                className="checkbox-field w-inline-block"
                style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: !categoryFilter ? '#ec4899' : '#555', fontWeight: !categoryFilter ? 700 : 500 }}
              >
                <div style={{ fontSize: '14px' }}>All Appliances</div>
                <span className="material-icons" style={{ fontSize: '16px' }}>chevron_right</span>
              </a>
              {CATEGORIES.map((cat) => (
                <a 
                  key={cat.slug}
                  href={`#cat-${cat.slug}`}
                  onClick={(e) => { e.preventDefault(); if (onCategoryFilterClear) onCategoryFilterClear(); onCategoryFilterClear?.(); onCategoryFilterClear ? onPageChange ? onPageChange('shop', cat.name) : onCategoryFilterClear() : null; }} // Fallback
                  style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: categoryFilter === cat.name ? '#ec4899' : '#555', fontWeight: categoryFilter === cat.name ? 700 : 500 }}
                  className="checkbox-field w-inline-block"
                >
                  <div style={{ fontSize: '14px' }}>{cat.name}</div>
                  <span className="material-icons" style={{ fontSize: '16px' }}>chevron_right</span>
                </a>
              ))}
            </div>
          </div>

          {/* Brand Filters */}
          <div className="w-layout-vflex widget-wrapper" style={{ marginBottom: '25px' }}>
            <div className="_20px-bold-title" style={{ fontSize: '16px', fontWeight: 800, color: '#111', borderBottom: '2px solid #eee', paddingBottom: '8px', marginBottom: '15px' }}>
              Appliance Brands
            </div>
            <div className="widget" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a 
                href="#all-brands"
                onClick={(e) => { e.preventDefault(); setSelectedBrand(null); }}
                className="checkbox-field w-inline-block"
                style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: !selectedBrand ? '#ec4899' : '#555', fontWeight: !selectedBrand ? 700 : 500 }}
              >
                <div style={{ fontSize: '14px' }}>All Brands</div>
                <span className="material-icons" style={{ fontSize: '16px' }}>chevron_right</span>
              </a>
              {brands.map((brand) => (
                <a 
                  key={brand}
                  href={`#brand-${brand}`}
                  onClick={(e) => { e.preventDefault(); setSelectedBrand(brand); }}
                  className="checkbox-field w-inline-block"
                  style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: selectedBrand === brand ? '#ec4899' : '#555', fontWeight: selectedBrand === brand ? 700 : 500 }}
                >
                  <div style={{ fontSize: '14px' }}>{brand}</div>
                  <span className="material-icons" style={{ fontSize: '16px' }}>chevron_right</span>
                </a>
              ))}
            </div>
          </div>

          {/* Ratings Filters */}
          <div className="w-layout-vflex widget-wrapper" style={{ marginBottom: '25px' }}>
            <div className="_20px-bold-title" style={{ fontSize: '16px', fontWeight: 800, color: '#111', borderBottom: '2px solid #eee', paddingBottom: '8px', marginBottom: '15px' }}>
              Minimum Ratings
            </div>
            <div className="widget" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a 
                href="#all-ratings"
                onClick={(e) => { e.preventDefault(); setSelectedRating(null); }}
                className="checkbox-field w-inline-block"
                style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', color: !selectedRating ? '#ec4899' : '#555', fontWeight: !selectedRating ? 700 : 500 }}
              >
                <div style={{ fontSize: '14px' }}>Any Rating</div>
                <span className="material-icons" style={{ fontSize: '16px' }}>chevron_right</span>
              </a>
              {[5, 4, 3].map((rate) => (
                <a 
                  key={rate}
                  href={`#rate-${rate}`}
                  onClick={(e) => { e.preventDefault(); setSelectedRating(rate); }}
                  className="checkbox-field w-inline-block"
                  style={{ display: 'flex', justifyContent: 'space-between', textDecoration: 'none', alignItems: 'center' }}
                >
                  <div style={{ display: 'flex', gap: '2px', color: '#ffcc00' }}>
                    {Array.from({ length: 5 }).map((_, rIdx) => (
                      <span key={rIdx} className="material-icons" style={{ fontSize: '14px' }}>
                        {rIdx < rate ? 'star' : 'star_border'}
                      </span>
                    ))}
                    <span style={{ fontSize: '12px', color: '#666', marginLeft: '6px', fontWeight: selectedRating === rate ? 700 : 500 }}>&amp; Up</span>
                  </div>
                  <span className="material-icons" style={{ fontSize: '16px', color: selectedRating === rate ? '#ec4899' : '#666' }}>chevron_right</span>
                </a>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(categoryFilter || selectedBrand || selectedRating || searchVal) && (
            <button 
              onClick={handleResetFilters}
              style={{ width: '100%', background: '#ff3b30', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
            >
              Reset All Filters
            </button>
          )}

        </div>

        {/* Main Products Grid block */}
        {!showFiltersOnMobile && (
          <div className="main-block">
            <div className="relative-block">
              <div className="w-tabs" style={{ marginBottom: '25px' }}>
                <div className="shop-bar w-tab-menu" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '10px 20px', borderRadius: '8px', border: '1px solid #eee' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#666' }}>
                    Showing <span style={{ color: '#111', fontWeight: 800 }}>{filteredProducts.length}</span> appliances found
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      onClick={() => setViewMode('grid')}
                      className={`grid-list-view ${viewMode === 'grid' ? 'active' : ''}`}
                      style={{ border: 'none', cursor: 'pointer', padding: '6px', borderRadius: '4px', background: viewMode === 'grid' ? '#f5f5f5' : 'transparent' }}
                    >
                      <img loading="lazy" src="https://cdn.prod.website-files.com/66c5934366ec1f0519f21b52/66d54a260fc3cf99a3d0215f_menu.avif" alt="Grid View" referrerPolicy="no-referrer" className="_20px-image" style={{ width: '16px' }} />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')}
                      className={`grid-list-view ${viewMode === 'list' ? 'active' : ''}`}
                      style={{ border: 'none', cursor: 'pointer', padding: '6px', borderRadius: '4px', background: viewMode === 'list' ? '#f5f5f5' : 'transparent' }}
                    >
                      <img loading="lazy" src="https://cdn.prod.website-files.com/66c5934366ec1f0519f21b52/66d54a34977bda45b82732b8_menu%20(1).avif" alt="List View" referrerPolicy="no-referrer" className="_20px-image" style={{ width: '16px' }} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product catalog display */}
              {filteredProducts.length === 0 ? (
                <div style={{ background: '#fff', padding: '80px', borderRadius: '8px', border: '1px solid #eee', textAlign: 'center', color: '#666' }}>
                  <span className="material-icons" style={{ fontSize: '48px', color: '#ccc', marginBottom: '15px' }}>inventory_2</span>
                  <h3>No Appliances Found</h3>
                  <p>Try resetting the search terms or applying a different category filter.</p>
                  <button onClick={handleResetFilters} style={{ background: '#0194da', color: '#fff', padding: '10px 20px', borderRadius: '4px', border: 'none', fontWeight: 'bold', cursor: 'pointer', marginTop: '15px' }}>
                    Reset All Filters
                  </button>
                </div>
              ) : viewMode === 'grid' ? (
                <div className="full-width w-dyn-list">
                  <div role="list" className="_3-column-grid w-dyn-items" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px' }}>
                    {filteredProducts.map((prod) => (
                      <div key={prod.id} role="listitem" className="w-dyn-item">
                        <div className="product-card-with-bg" style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', transition: 'all 0.3s' }}>
                          <div className="product-thumbnail-wrapper-with-bg" style={{ position: 'relative', height: '200px', background: '#fcfcfc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={prod.mainImage} alt={prod.name} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="product-thumbnail" />
                            <a href={`#prod-${prod.id}`} onClick={(e) => { e.preventDefault(); onSelectProduct(prod); }} className="w-inline-block" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, background: 'rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.3s' }}>
                              <span style={{ background: '#fff', color: '#111', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold', fontSize: '11px' }}>View Details</span>
                            </a>
                            {prod.isSale && (
                              <div className="sale-tag" style={{ position: 'absolute', top: '10px', left: '10px', background: '#ff3b30', color: '#fff', padding: '3px 8px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '4px' }}>On Sale</div>
                            )}
                          </div>
                          <div style={{ padding: '20px' }}>
                            <div style={{ display: 'flex', gap: '2px', color: '#ffcc00', marginBottom: '8px' }}>
                              {Array.from({ length: 5 }).map((_, sIdx) => (
                                <span key={sIdx} className="material-icons" style={{ fontSize: '15px' }}>
                                  {sIdx < prod.rating ? 'star' : 'star_border'}
                                </span>
                              ))}
                            </div>
                            <a href={`#prod-${prod.id}`} onClick={(e) => { e.preventDefault(); onSelectProduct(prod); }} className="mask w-inline-block" style={{ textDecoration: 'none' }}>
                              <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#111', margin: '0 0 10px', height: '36px', overflow: 'hidden', lineHeight: '1.3' }}>{prod.name}</h3>
                            </a>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
                              <span style={{ fontSize: '18px', fontWeight: 800, color: '#0194da' }}>£{prod.price}</span>
                              {prod.compareAtPrice && (
                                <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '13px' }}>£{prod.compareAtPrice}</span>
                              )}
                            </div>
                            <button 
                              onClick={() => onAddToCart(prod)}
                              style={{ width: '100%', background: '#111', color: '#fff', border: 'none', padding: '10px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}
                            >
                              Add to Basket
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* List View Layout */
                <div className="full-width w-dyn-list">
                  <div role="list" className="vertical-left-stretch-20px-gap w-dyn-items" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {filteredProducts.map((prod) => (
                      <div key={prod.id} role="listitem" className="w-dyn-item">
                        <div className="product-card-with-bg-list" style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '15px' }}>
                          <div className="product-thumbnail-wrapper-list" style={{ width: '180px', height: '140px', flexShrink: 0, position: 'relative', background: '#f9f9f9', borderRadius: '4px', overflow: 'hidden' }}>
                            <img src={prod.mainImage} alt={prod.name} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            {prod.isSale && (
                              <div className="sale-tag" style={{ position: 'absolute', top: '10px', left: '10px', background: '#ff3b30', color: '#fff', padding: '3px 8px', fontSize: '9px', fontWeight: 'bold', borderRadius: '4px' }}>On Sale</div>
                            )}
                          </div>
                          <div className="product-list-body-14px-gap" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                              <div style={{ display: 'flex', gap: '2px', color: '#ffcc00', marginBottom: '6px' }}>
                                {Array.from({ length: 5 }).map((_, sIdx) => (
                                  <span key={sIdx} className="material-icons" style={{ fontSize: '14px' }}>
                                    {sIdx < prod.rating ? 'star' : 'star_border'}
                                  </span>
                                ))}
                              </div>
                              <a href={`#prod-${prod.id}`} onClick={(e) => { e.preventDefault(); onSelectProduct(prod); }} style={{ textDecoration: 'none' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', margin: '0 0 5px' }}>{prod.name}</h3>
                              </a>
                              <p style={{ fontSize: '13px', color: '#666', margin: '0 0 10px', lineHeight: '1.4' }}>{prod.description}</p>
                              <div style={{ fontSize: '12px', color: '#777' }}>SKU: <strong>{prod.sku}</strong> | Brand: <strong>{prod.brand}</strong></div>
                            </div>
                            
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '18px', fontWeight: 800, color: '#0194da' }}>£{prod.price}</span>
                                {prod.compareAtPrice && (
                                  <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '13px' }}>£{prod.compareAtPrice}</span>
                                )}
                              </div>
                              <div style={{ display: 'flex', gap: '10px' }}>
                                <button 
                                  onClick={() => onSelectProduct(prod)}
                                  style={{ background: '#f5f5f5', color: '#111', border: '1px solid #ccc', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}
                                >
                                  View Specs
                                </button>
                                <button 
                                  onClick={() => onAddToCart(prod)}
                                  style={{ background: '#111', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}
                                >
                                  Add to Basket
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Show Filters on Mobile bar at bottom */}
      <div 
        className="show-filter-block" 
        onClick={() => setShowFiltersOnMobile(!showFiltersOnMobile)}
        style={{ 
          cursor: 'pointer', 
          background: '#0194da', 
          color: '#fff', 
          display: 'inline-flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '8px', 
          width: 'auto', 
          minWidth: '160px',
          maxWidth: 'max-content',
          whiteSpace: 'nowrap'
        }}
      >
        <span className="material-icons" style={{ fontSize: '18px' }}>filter_alt</span>
        <span>{showFiltersOnMobile ? "Apply Filters" : "Filter Appliances"}</span>
      </div>

    </div>
  );
}

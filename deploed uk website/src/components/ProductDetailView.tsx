import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data';

interface ProductDetailViewProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onBackToShop: () => void;
  onSelectProduct: (product: Product) => void;
}

export default function ProductDetailView({
  product,
  onAddToCart,
  onBackToShop,
  onSelectProduct
}: ProductDetailViewProps) {
  const [mainImage, setMainImage] = useState(product.mainImage);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'specs' | 'install' | 'recycling'>('specs');
  const [selectedWarranty, setSelectedWarranty] = useState<'standard' | 'extended'>('standard');

  // Multi-images list
  const images = [product.mainImage, product.hoverImage];

  // Fetch related products (same category, excluding current product)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToBasket = () => {
    // Add multiple quantities
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    alert(`Successfully added ${quantity}x ${product.name} to your basket!`);
  };

  return (
    <div className="page-wrapper" style={{ padding: '40px 0' }}>
      <div className="container">
        
        {/* Breadcrumb row */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: '#666', marginBottom: '30px' }}>
          <a href="#shop" onClick={(e) => { e.preventDefault(); onBackToShop(); }} style={{ textDecoration: 'none', color: '#0194da', fontWeight: 600 }}>Shop</a>
          <span>/</span>
          <span style={{ color: '#aaa' }}>{product.category}</span>
          <span>/</span>
          <span style={{ color: '#111', fontWeight: 700 }}>{product.name}</span>
        </div>

        {/* Product Details Grid */}
        <div className="_2-column-block" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr', gap: '50px', alignItems: 'flex-start', marginBottom: '60px' }}>
          
          {/* Left Side: Images Swapper */}
          <div>
            <div className="main-image-wrapper" style={{ height: '420px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #eee', background: '#fcfcfc', marginBottom: '15px' }}>
              <img src={mainImage} alt={product.name} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {images.map((img, idx) => (
                <div 
                  key={idx}
                  onClick={() => setMainImage(img)}
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '4px', 
                    overflow: 'hidden', 
                    border: mainImage === img ? '2px solid #0194da' : '1px solid #ddd', 
                    cursor: 'pointer',
                    background: '#f9f9f9'
                  }}
                >
                  <img src={img} alt={`Thumb ${idx}`} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Specs & Buying Actions */}
          <div className="product-details-content">
            <span style={{ background: '#e0f2fe', color: '#0194da', padding: '4px 10px', fontSize: '11px', fontWeight: 'bold', borderRadius: '4px', textTransform: 'uppercase' }}>
              {product.brand} Showroom Model
            </span>
            <h1 style={{ fontSize: '30px', fontWeight: 800, color: '#111', margin: '10px 0 10px', lineHeight: '1.2' }}>
              {product.name}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '2px', color: '#ffcc00' }}>
                {Array.from({ length: 5 }).map((_, sIdx) => (
                  <span key={sIdx} className="material-icons" style={{ fontSize: '18px' }}>
                    {sIdx < product.rating ? 'star' : 'star_border'}
                  </span>
                ))}
              </div>
              <span style={{ fontSize: '13px', color: '#666' }}>({product.rating}.0 Customer Rating)</span>
              <span style={{ fontSize: '13px', color: '#aaa' }}>|</span>
              <span style={{ fontSize: '13px', color: '#44c767', fontWeight: 700 }}>In Showroom Stock</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '25px', padding: '15px', background: '#fcfcfc', borderRadius: '6px', border: '1px solid #eee' }}>
              <span style={{ fontSize: '32px', fontWeight: 800, color: '#0194da' }}>£{product.price}</span>
              {product.compareAtPrice && (
                <span style={{ textDecoration: 'line-through', color: '#999', fontSize: '16px' }}>£{product.compareAtPrice}</span>
              )}
              <span style={{ fontSize: '12px', color: '#22af50', fontWeight: 700, marginLeft: 'auto' }}>Free Belfast Showroom Delivery</span>
            </div>

            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '25px' }}>
              {product.description}
            </p>

            {/* SKU and Brand info */}
            <div style={{ fontSize: '13px', color: '#777', display: 'grid', gridTemplateColumns: '120px 1fr', gap: '10px', marginBottom: '25px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
              <div>Availability:</div>
              <div style={{ color: '#22af50', fontWeight: 'bold' }}>Available for Same-Day Collection</div>
              <div>SKU Model:</div>
              <div style={{ color: '#111', fontWeight: 600 }}>{product.sku}</div>
              <div>Brand Warranty:</div>
              <div style={{ color: '#111', fontWeight: 600 }}>2-Year Authorized UK Manufacturer</div>
            </div>

            {/* Warranty Selector */}
            <div style={{ marginBottom: '25px' }}>
              <div style={{ fontWeight: 700, fontSize: '13px', color: '#333', marginBottom: '8px' }}>Choose Authorized Warranty Option:</div>
              <div style={{ display: 'flex', gap: '15px' }}>
                <div 
                  onClick={() => setSelectedWarranty('standard')}
                  style={{ flex: 1, padding: '12px', border: selectedWarranty === 'standard' ? '2px solid #0194da' : '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', background: selectedWarranty === 'standard' ? '#e0f2fe' : '#fff' }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#111' }}>Standard Warranty</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>2-Year Parts &amp; Labor (Included)</div>
                </div>
                <div 
                  onClick={() => setSelectedWarranty('extended')}
                  style={{ flex: 1, padding: '12px', border: selectedWarranty === 'extended' ? '2px solid #0194da' : '1px solid #ddd', borderRadius: '6px', cursor: 'pointer', background: selectedWarranty === 'extended' ? '#e0f2fe' : '#fff' }}
                >
                  <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#111' }}>Extended Warranty</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>5-Year Complete Protection (+£79)</div>
                </div>
              </div>
            </div>

            {/* Quantity and Actions */}
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden', height: '48px' }}>
                <button 
                  onClick={handleDecrement}
                  style={{ width: '40px', height: '100%', background: '#fff', border: 'none', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}
                >
                  -
                </button>
                <input 
                  type="text" 
                  readOnly 
                  value={quantity} 
                  style={{ width: '40px', height: '100%', border: 'none', borderLeft: '1px solid #ccc', borderRight: '1px solid #ccc', textAlign: 'center', fontSize: '14px', fontWeight: 'bold' }} 
                />
                <button 
                  onClick={handleIncrement}
                  style={{ width: '40px', height: '100%', background: '#fff', border: 'none', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToBasket}
                style={{ flex: 1, background: '#111', color: '#fff', border: 'none', height: '48px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', textTransform: 'uppercase', transition: 'background-color 0.2s' }}
              >
                Add to Basket
              </button>

              <button 
                onClick={onBackToShop}
                style={{ background: '#f5f5f5', color: '#111', border: '1px solid #ccc', height: '48px', padding: '0 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Back To Shop
              </button>
            </div>

          </div>
        </div>

        {/* Technical Specification and Shipping Information tabs */}
        <div className="specs-tabs" style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', borderBottom: '2px solid #eee', gap: '20px', marginBottom: '25px' }}>
            <button 
              onClick={() => setActiveTab('specs')}
              style={{ padding: '12px 20px', background: 'transparent', border: 'none', borderBottom: activeTab === 'specs' ? '3px solid #0194da' : 'none', color: activeTab === 'specs' ? '#0194da' : '#555', fontWeight: 700, cursor: 'pointer' }}
            >
              Technical Specifications
            </button>
            <button 
              onClick={() => setActiveTab('install')}
              style={{ padding: '12px 20px', background: 'transparent', border: 'none', borderBottom: activeTab === 'install' ? '3px solid #0194da' : 'none', color: activeTab === 'install' ? '#0194da' : '#555', fontWeight: 700, cursor: 'pointer' }}
            >
              Showroom Delivery &amp; Fitment
            </button>
            <button 
              onClick={() => setActiveTab('recycling')}
              style={{ padding: '12px 20px', background: 'transparent', border: 'none', borderBottom: activeTab === 'recycling' ? '3px solid #0194da' : 'none', color: activeTab === 'recycling' ? '#0194da' : '#555', fontWeight: 700, cursor: 'pointer' }}
            >
              WEEE Recycling Service
            </button>
          </div>

          <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee' }}>
            {activeTab === 'specs' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111', marginBottom: '15px' }}>Full Showroom Specifications</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0' }}>
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <div key={key} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', padding: '12px 15px', borderBottom: '1px solid #eee', background: index % 2 === 0 ? '#fafafa' : '#fff', fontSize: '14px' }}>
                      <div style={{ fontWeight: 700, color: '#555', textTransform: 'capitalize' }}>{key.replace(/([A-Z])/g, ' $1')}</div>
                      <div style={{ color: '#111', fontWeight: 600 }}>{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'install' && (
              <div style={{ lineHeight: '1.6', fontSize: '14px', color: '#555' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111', marginBottom: '15px' }}>Belfast Showroom Delivery &amp; Fitment Options</h3>
                <p>We provide standard courier dispatch as well as a professional team of appliance fitters to safely install and set up your new appliances inside Northern Irish homes.</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li><strong>Boucher Road Click &amp; Collect:</strong> Free same-day collection from our Belfast storefront.</li>
                  <li><strong>Standard NI Shipping:</strong> Free delivery on orders over £150. Delivery takes 1-3 business days.</li>
                  <li><strong>Premium Built-in Kitchen Installation:</strong> Our certified appliance fitters can plumb, wire, and integrate your new hobs, ovens, fridge-freezers, and washing machines safely into custom cabinetry. You can select this at showroom checkout.</li>
                </ul>
              </div>
            )}

            {activeTab === 'recycling' && (
              <div style={{ lineHeight: '1.6', fontSize: '14px', color: '#555' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#111', marginBottom: '15px' }}>WEEE Recycling Policy</h3>
                <p>In accordance with UK environmental laws, NI Drip Central Electronics provides a full take-back recycling service for old and broken appliances on a like-for-like basis when you purchase a replacement model.</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Simply bring your old washing machine, refrigerator, cooker, or TV back to our Boucher Road recycling dock.</li>
                  <li>If choosing our direct home installation service, we can extract and carry your old appliance away for certified ecological disassembly and recovery for a nominal environmental collection fee of £20.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Related products row */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#111', marginBottom: '20px' }}>Related Appliances</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px' }}>
              {relatedProducts.map((p) => (
                <div key={p.id} className="product-card-with-bg" style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                  <div style={{ height: '180px', position: 'relative', background: '#fafafa' }}>
                    <img src={p.mainImage} alt={p.name} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <a href={`#prod-${p.id}`} onClick={(e) => { e.preventDefault(); onSelectProduct(p); }} className="w-inline-block" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, background: 'rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'opacity 0.3s' }}>
                       <span style={{ background: '#fff', color: '#111', padding: '6px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '11px' }}>View Specs</span>
                    </a>
                  </div>
                  <div style={{ padding: '15px' }}>
                    <a href={`#prod-${p.id}`} onClick={(e) => { e.preventDefault(); onSelectProduct(p); }} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#111', margin: '0 0 5px', height: '36px', overflow: 'hidden' }}>{p.name}</h3>
                    </a>
                    <span style={{ fontSize: '15px', fontWeight: 800, color: '#0194da' }}>£{p.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

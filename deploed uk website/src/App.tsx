import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';
import ShopView from './components/ShopView';
import ProductDetailView from './components/ProductDetailView';
import { CartItem, Product } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [categoryFilter, setCategoryFilter] = useState<string | undefined>(undefined);
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Cart State, synchronized to localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ni_drip_central_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('ni_drip_central_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Handle unique SEO document titles
  useEffect(() => {
    let title = "NI Drip Central Electronics | Premium Belfast Home Appliances";
    switch (currentPage) {
      case 'home':
        title = "NI Drip Central Electronics | Premium Belfast Home Appliances";
        break;
      case 'shop':
        title = categoryFilter 
          ? `Buy ${categoryFilter} | NI Drip Central Electronics Belfast` 
          : "Shop Kitchen & Laundry Appliances | NI Drip Central Belfast";
        break;
      case 'about':
        title = "About NI Drip Central Electronics | Northern Ireland's Independent Store";
        break;
      case 'blog':
        title = "Home Appliance News & Buying Advice | NI Drip Central";
        break;
      case 'contact':
        title = "Contact Boucher Road Showroom | NI Drip Central Belfast";
        break;
      case 'product-detail':
        if (selectedProduct) {
          title = `${selectedProduct.name} - ${selectedProduct.brand} Specs | NI Drip Central`;
        }
        break;
    }
    document.title = title;
  }, [currentPage, categoryFilter, selectedProduct]);

  // Page switcher
  const handlePageChange = (page: string, category?: string) => {
    setCurrentPage(page);
    if (category) {
      setCategoryFilter(category);
    } else if (page !== 'shop') {
      setCategoryFilter(undefined);
    }
    // Always scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryFilterClear = () => {
    setCategoryFilter(undefined);
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cart Management
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleUpdateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Render sub-views dynamically
  const renderActiveView = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomeView 
            onPageChange={handlePageChange} 
            onAddToCart={handleAddToCart} 
            onSelectProduct={handleSelectProduct} 
          />
        );
      case 'about':
        return <AboutView onPageChange={handlePageChange} />;
      case 'blog':
        return <BlogView onPageChange={handlePageChange} />;
      case 'contact':
        return <ContactView />;
      case 'shop':
        return (
          <ShopView 
            onAddToCart={handleAddToCart} 
            onSelectProduct={handleSelectProduct} 
            categoryFilter={categoryFilter}
            onCategoryFilterClear={handleCategoryFilterClear}
            onPageChange={handlePageChange}
          />
        );
      case 'product-detail':
        if (selectedProduct) {
          return (
            <ProductDetailView 
              product={selectedProduct} 
              onAddToCart={handleAddToCart} 
              onBackToShop={() => handlePageChange('shop')} 
              onSelectProduct={handleSelectProduct}
            />
          );
        }
        return <HomeView onPageChange={handlePageChange} onAddToCart={handleAddToCart} onSelectProduct={handleSelectProduct} />;
      default:
        return <HomeView onPageChange={handlePageChange} onAddToCart={handleAddToCart} onSelectProduct={handleSelectProduct} />;
    }
  };

  return (
    <div className="layout-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#ffffff' }}>
      {/* Header */}
      <Header 
        currentPage={currentPage}
        onPageChange={handlePageChange}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
        onUpdateCartQuantity={handleUpdateCartQuantity}
        onClearCart={handleClearCart}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Interactive Main Viewport with Page Fade Transitions */}
      <main style={{ flex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage + (categoryFilter || '')}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

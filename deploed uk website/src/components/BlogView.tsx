import { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

interface BlogViewProps {
  onPageChange: (page: string) => void;
}

export default function BlogView({ onPageChange }: BlogViewProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [blogSearch, setBlogSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter posts based on search input and active category
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(blogSearch.toLowerCase()) || 
      post.summary.toLowerCase().includes(blogSearch.toLowerCase());
    const matchesCategory = !activeCategory || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const blogCategories = ["Laundry Appliances", "Kitchen Appliances", "Maintenance Tips"];
  const blogTags = ["Buying Guide", "Washing Machine", "Refrigerator", "Neff", "Bosch", "Belfast", "Energy Savings"];

  return (
    <div className="page-wrapper" style={{ padding: '40px 0' }}>
      
      {/* Blog Detail Reader Modal/Overlay */}
      {selectedPost && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#fff', borderRadius: '8px', width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', padding: '30px', position: 'relative' }}>
            <span 
              onClick={() => setSelectedPost(null)}
              className="material-icons" 
              style={{ position: 'absolute', top: '20px', right: '20px', cursor: 'pointer', fontSize: '28px', color: '#666', fontWeight: 'bold' }}
            >
              close
            </span>
            <span style={{ background: '#0194da', color: '#fff', padding: '4px 10px', fontSize: '11px', fontWeight: 'bold', borderRadius: '4px', textTransform: 'uppercase' }}>
              {selectedPost.category}
            </span>
            <h1 style={{ fontSize: '28px', fontWeight: 800, margin: '15px 0 10px', color: '#111', lineHeight: '1.3' }}>
              {selectedPost.title}
            </h1>
            <div style={{ fontSize: '13px', color: '#777', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
              Published on <strong>{selectedPost.date}</strong> | By <strong>{selectedPost.author}</strong>
            </div>
            
            <div style={{ width: '100%', height: '340px', borderRadius: '6px', overflow: 'hidden', marginBottom: '25px' }}>
              <img src={selectedPost.image} alt={selectedPost.title} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <div style={{ fontSize: '16px', color: '#333', lineHeight: '1.7', whiteSpace: 'pre-line' }}>
              {selectedPost.content}
            </div>

            <div style={{ marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button 
                onClick={() => setSelectedPost(null)}
                style={{ background: '#111', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Close Article
              </button>
              <button 
                onClick={() => { setSelectedPost(null); onPageChange('shop'); }}
                style={{ background: '#0194da', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                Go to Shop
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Featured Blog Slider Carousel */}
      <div className="container" style={{ marginBottom: '50px' }}>
        <div className="section-50px" style={{ padding: 0 }}>
          <div className="blog-slider w-slider" style={{ position: 'relative', height: '380px', borderRadius: '8px', overflow: 'hidden', background: '#111' }}>
            <div className="hero-mask w-slider-mask" style={{ height: '100%' }}>
              {BLOG_POSTS.map((post, index) => (
                <div 
                  key={post.id} 
                  className="blog-slide w-slide" 
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    opacity: activeSlide === index ? 1 : 0, 
                    transition: 'opacity 0.6s ease',
                    zIndex: activeSlide === index ? 1 : 0,
                    pointerEvents: activeSlide === index ? 'auto' : 'none'
                  }}
                >
                  <div className="blog-slider-contents" style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', zIndex: 10, color: '#fff', maxWidth: '600px' }}>
                    <a href="#cat" onClick={(e) => { e.preventDefault(); setActiveCategory(post.category); }} className="mask w-inline-block">
                      <div className="sub-title" style={{ background: '#0194da', padding: '4px 10px', borderRadius: '4px', display: 'inline-block', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '10px', color: '#fff' }}>
                        {post.category}
                      </div>
                    </a>
                    <a href="#post" onClick={(e) => { e.preventDefault(); setSelectedPost(post); }} className="mask w-inline-block" style={{ textDecoration: 'none' }}>
                      <h2 className="white-heading" style={{ fontSize: '32px', fontWeight: 800, color: '#fff', lineHeight: '1.2', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                        {post.title}
                      </h2>
                    </a>
                    <p style={{ margin: '10px 0 15px', color: '#ccc', textShadow: '0 1px 2px rgba(0,0,0,0.8)', fontSize: '14px' }}>
                      {post.summary}
                    </p>
                    <a 
                      href="#post" 
                      onClick={(e) => { e.preventDefault(); setSelectedPost(post); }} 
                      className="primary-button secondary w-inline-block"
                      style={{ display: 'inline-block', background: '#fff', color: '#111', fontWeight: 'bold', padding: '10px 20px', borderRadius: '4px', textDecoration: 'none', textTransform: 'uppercase', fontSize: '12px' }}
                    >
                      Read Article
                    </a>
                  </div>
                  <div className="blog-image-absolute" style={{ width: '100%', height: '100%' }}>
                    <img loading="lazy" src={post.image} alt={post.title} referrerPolicy="no-referrer" className="full-height-image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="hero-image-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 100%)' }}></div>
                  </div>
                </div>
              ))}
            </div>
            {/* Slider Dots */}
            <div style={{ position: 'absolute', bottom: '20px', right: '40px', zIndex: 100, display: 'flex', gap: '6px' }}>
              {BLOG_POSTS.map((_, index) => (
                <div 
                  key={index} 
                  onClick={() => setActiveSlide(index)}
                  style={{ 
                    width: activeSlide === index ? '24px' : '8px', 
                    height: '8px', 
                    borderRadius: '4px', 
                    background: activeSlide === index ? '#0194da' : '#aaa', 
                    cursor: 'pointer',
                    transition: 'all 0.3s' 
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Blog Catalog and Sidebar Row */}
      <section className="section-50px" style={{ padding: 0 }}>
        <div className="container _2-column-container" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
          
          {/* Left: Articles List */}
          <div className="w-dyn-list">
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#111', marginBottom: '25px', paddingBottom: '10px', borderBottom: '2px solid #0194da', display: 'inline-block' }}>
              {activeCategory ? `${activeCategory} Articles` : "Latest Publications"}
            </h2>

            {filteredPosts.length === 0 ? (
              <div style={{ background: '#fff', padding: '40px', textAlign: 'center', border: '1px solid #eee', borderRadius: '8px', color: '#777' }}>
                No articles match your search or filters. Click "Show All" below.
                <div style={{ marginTop: '15px' }}>
                  <button 
                    onClick={() => { setBlogSearch(''); setActiveCategory(null); }}
                    style={{ background: '#0194da', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Show All Articles
                  </button>
                </div>
              </div>
            ) : (
              <div role="list" className="vertical-left-stretch-30px-gap w-dyn-items" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {filteredPosts.map((post) => (
                  <div key={post.id} role="listitem" className="w-dyn-item">
                    <div className="blog-list-card" style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', display: 'flex', gap: '20px', flexWrap: 'wrap', padding: '15px' }}>
                      <div className="blog-thumbnail-wrapper" style={{ width: '220px', height: '170px', borderRadius: '6px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                        <a href="#read" onClick={(e) => { e.preventDefault(); setSelectedPost(post); }} className="mask _6px-rounded-border w-inline-block">
                          <img src={post.image} alt={post.title} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="blog-thumbnail-300px" />
                        </a>
                        <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#111', color: '#fff', fontSize: '10px', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
                          {post.category}
                        </span>
                      </div>
                      
                      <div className="w-layout-vflex blog-list-body" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div className="w-layout-vflex heading-category-wrapper">
                          <div style={{ fontSize: '12px', color: '#777', display: 'flex', gap: '8px', marginBottom: '6px' }}>
                            <div>{post.date}</div>
                            <div>/</div>
                            <div>By <strong>{post.author}</strong></div>
                          </div>
                          <a href="#post" onClick={(e) => { e.preventDefault(); setSelectedPost(post); }} className="w-inline-block" style={{ textDecoration: 'none' }}>
                            <h3 className="_18px-link" style={{ fontSize: '18px', fontWeight: 700, color: '#111', margin: '0 0 8px' }}>
                              {post.title}
                            </h3>
                          </a>
                          <div style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
                            {post.summary}
                          </div>
                        </div>
                        <div style={{ marginTop: '12px' }}>
                          <a 
                            href="#read" 
                            onClick={(e) => { e.preventDefault(); setSelectedPost(post); }} 
                            className="read-more-link w-inline-block"
                            style={{ fontWeight: 700, color: '#0194da', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '4px' }}
                          >
                            <div>Read More</div>
                            <span className="material-icons" style={{ fontSize: '16px' }}>east</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="blog-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Search filter form */}
            <div className="sidebar-search-filter w-form" style={{ background: '#fff', border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
              <div style={{ fontWeight: 700, fontSize: '15px', color: '#111', marginBottom: '10px' }}>Search Blog</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <input 
                  className="sidebar-search-input w-input" 
                  placeholder="Enter keywords..." 
                  type="search" 
                  value={blogSearch}
                  onChange={(e) => setBlogSearch(e.target.value)}
                  style={{ flex: 1, padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
                />
              </div>
            </div>

            {/* Popular Posts */}
            <div className="blog-widget" style={{ background: '#fff', border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
              <div className="sidebar-title" style={{ fontWeight: 800, fontSize: '16px', color: '#111', paddingBottom: '8px', borderBottom: '2px solid #eee', marginBottom: '15px' }}>
                Popular Posts
              </div>
              <div className="w-dyn-list">
                <div role="list" className="featured-properties-wrapper w-dyn-items" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {BLOG_POSTS.map((post) => (
                    <div key={post.id} role="listitem" className="w-dyn-item">
                      <div className="featured-blogs" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <a href="#read" onClick={(e) => { e.preventDefault(); setSelectedPost(post); }} className="mask related-post w-inline-block" style={{ width: '60px', height: '60px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0 }}>
                          <img alt={post.title} src={post.image} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </a>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontSize: '10px', color: '#0194da', fontWeight: 700, textTransform: 'uppercase' }}>{post.category}</span>
                          <a href="#read" onClick={(e) => { e.preventDefault(); setSelectedPost(post); }} style={{ fontSize: '13px', fontWeight: 600, color: '#111', textDecoration: 'none', lineHeight: '1.3', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                            {post.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="blog-widget" style={{ background: '#fff', border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
              <div className="sidebar-title" style={{ fontWeight: 800, fontSize: '16px', color: '#111', paddingBottom: '8px', borderBottom: '2px solid #eee', marginBottom: '15px' }}>
                Categories
              </div>
              <div className="w-dyn-list">
                <div role="list" className="category-container w-dyn-items" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div role="listitem" className="w-dyn-item">
                    <a 
                      href="#cat-all" 
                      onClick={(e) => { e.preventDefault(); setActiveCategory(null); }}
                      className="property-category-block w-inline-block"
                      style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', textDecoration: 'none', color: !activeCategory ? '#0194da' : '#555', fontWeight: !activeCategory ? 700 : 500, fontSize: '14px' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <span className="material-icons" style={{ fontSize: '16px' }}>navigate_next</span>
                        <span>Show All</span>
                      </div>
                      <span>({BLOG_POSTS.length})</span>
                    </a>
                  </div>
                  {blogCategories.map((cat) => {
                    const count = BLOG_POSTS.filter(p => p.category === cat).length;
                    return (
                      <div key={cat} role="listitem" className="w-dyn-item">
                        <a 
                          href={`#cat-${cat}`} 
                          onClick={(e) => { e.preventDefault(); setActiveCategory(cat); }}
                          className="property-category-block w-inline-block"
                          style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', textDecoration: 'none', color: activeCategory === cat ? '#0194da' : '#555', fontWeight: activeCategory === cat ? 700 : 500, fontSize: '14px' }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span className="material-icons" style={{ fontSize: '16px' }}>navigate_next</span>
                            <span>{cat}</span>
                          </div>
                          <span>({count})</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="blog-widget" style={{ background: '#fff', border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
              <div className="sidebar-title" style={{ fontWeight: 800, fontSize: '16px', color: '#111', paddingBottom: '8px', borderBottom: '2px solid #eee', marginBottom: '15px' }}>
                Showroom Tags
              </div>
              <div className="w-dyn-list">
                <div role="list" className="tags-container w-dyn-items" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {blogTags.map((tag) => (
                    <div key={tag} role="listitem" className="w-dyn-item">
                      <a 
                        href={`#tag-${tag}`} 
                        onClick={(e) => { e.preventDefault(); setBlogSearch(tag); }}
                        className="tag-button"
                        style={{ display: 'inline-block', background: '#f5f5f5', color: '#333', padding: '6px 12px', fontSize: '12px', borderRadius: '20px', textDecoration: 'none', transition: 'background-color 0.2s', fontWeight: 600 }}
                      >
                        {tag}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

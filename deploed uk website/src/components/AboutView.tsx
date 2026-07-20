import { useState } from 'react';
import { TEAM_MEMBERS, TESTIMONIALS } from '../data';

interface AboutViewProps {
  onPageChange: (page: string) => void;
}

export default function AboutView({ onPageChange }: AboutViewProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="page-wrapper">
      {/* Our Mission Section */}
      <section className="section-160px-margin" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="_2-column-block" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.5fr', gap: '50px', alignItems: 'center' }}>
            <div className="contents _480px-width" style={{ paddingRight: '20px' }}>
              <div className="_20px-title-primary" style={{ color: '#0194da', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700, fontSize: '14px', marginBottom: '10px' }}>About Us</div>
              <h2 className="heading" style={{ fontSize: '36px', fontWeight: 800, color: '#111', lineHeight: '1.2', margin: '0 0 20px' }}>Our Mission</h2>
              <div className="mt-20px" style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
                <p>
                  At NI Drip Central Electronics, we believe that high-quality home appliances are the building blocks of a comfortable, efficient home. Our mission is to supply Northern Irish households with state-of-the-art kitchen, laundry, and home entertainment systems that combine outstanding energy efficiency with long-term reliability.
                </p>
                <p style={{ marginTop: '15px' }}>
                  Whether you are a builder designing custom integrated kitchens or a family looking to upgrade your laundry room with quiet, water-saving wash systems, we stand as your dedicated independent partner from choosing the right model to full home installation and support.
                </p>
              </div>
              <div className="mb-60px">
                <a 
                  href="#shop" 
                  onClick={(e) => { e.preventDefault(); onPageChange('shop'); }} 
                  className="black-button w-inline-block"
                  style={{ display: 'inline-block', background: '#111', color: '#fff', textDecoration: 'none', padding: '12px 25px', borderRadius: '4px', fontWeight: 'bold' }}
                >
                  <div className="button-text-wrapper">
                    <div className="default-text">Browse Showroom</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Grid of Images */}
            <div className="double-image-wrapper" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                loading="lazy" 
                alt="Modern Built-in Kitchen" 
                referrerPolicy="no-referrer"
                className="_49-image" 
                style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '6px' }}
              />
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" 
                loading="lazy" 
                alt="Luxury Appliance Showroom" 
                referrerPolicy="no-referrer"
                className="_49-image" 
                style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '6px', marginTop: '30px' }}
              />
              <div className="background-absolute-image" style={{ position: 'absolute', zIndex: -1, background: '#0194da', opacity: 0.1, top: '40px', left: '-20px', right: '40px', bottom: '-40px', borderRadius: '8px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impactful Numbers / Stats Section */}
      <section className="section" style={{ padding: '60px 0', background: '#fcfcfc', borderTop: '1px solid #eee', borderBottom: '1px solid #eee' }}>
        <div className="container">
          <div className="w-layout-grid _2-column-block" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px', alignItems: 'center' }}>
            <div className="_50-block">
              <img 
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" 
                alt="Washing Machine Quality Testing" 
                referrerPolicy="no-referrer"
                className="_700px-portrait-image" 
                style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
            <div>
              <div className="_18px-500-primary-title" style={{ color: '#0194da', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Our Performance</div>
              <div className="margin-bottom-24px">
                <h2 className="heading" style={{ fontSize: '32px', fontWeight: 800, margin: '0 0 15px' }}>Reliable Showroom Stats</h2>
              </div>
              <div className="margin-bottom-32px" style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '30px' }}>
                <p>Over the years, we have built a proud reputation of exceptional local service. From initial choice to professional fitment, our figures demonstrate why NI Drip Central remains a highly trusted partner.</p>
              </div>

              {/* Counters Grid */}
              <div className="w-layout-grid _2-column-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="full-width" style={{ padding: '15px', background: '#fff', borderRadius: '6px', border: '1px solid #eee' }}>
                  <div className="animated-counter" style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontSize: '32px', fontWeight: 800, color: '#0194da' }}>
                    <span>99</span>
                    <span className="postfix" style={{ fontSize: '20px' }}>%</span>
                  </div>
                  <div className="mb-8px" style={{ fontWeight: 700, fontSize: '14px', color: '#111', margin: '4px 0' }}>Customer Satisfaction</div>
                  <p style={{ margin: 0, fontSize: '12px', color: '#666', lineHeight: '1.4' }}>Direct post-installation surveys in Belfast.</p>
                </div>

                <div className="full-width" style={{ padding: '15px', background: '#fff', borderRadius: '6px', border: '1px solid #eee' }}>
                  <div className="animated-counter" style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontSize: '32px', fontWeight: 800, color: '#0194da' }}>
                    <span>15</span>
                    <span className="postfix" style={{ fontSize: '20px' }}>K+</span>
                  </div>
                  <div className="mb-8px" style={{ fontWeight: 700, fontSize: '14px', color: '#111', margin: '4px 0' }}>NI Homes Served</div>
                  <p style={{ margin: 0, fontSize: '12px', color: '#666', lineHeight: '1.4' }}>Washing machines, hobs &amp; fridge freezers fit.</p>
                </div>

                <div className="full-width" style={{ padding: '15px', background: '#fff', borderRadius: '6px', border: '1px solid #eee' }}>
                  <div className="animated-counter" style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontSize: '32px', fontWeight: 800, color: '#0194da' }}>
                    <span>100</span>
                    <span className="postfix" style={{ fontSize: '20px' }}>%</span>
                  </div>
                  <div className="mb-8px" style={{ fontWeight: 700, fontSize: '14px', color: '#111', margin: '4px 0' }}>Authorized Warranties</div>
                  <p style={{ margin: 0, fontSize: '12px', color: '#666', lineHeight: '1.4' }}>All items supplied with real manufacturer warranty.</p>
                </div>

                <div className="full-width" style={{ padding: '15px', background: '#fff', borderRadius: '6px', border: '1px solid #eee' }}>
                  <div className="animated-counter" style={{ display: 'flex', alignItems: 'baseline', gap: '2px', fontSize: '32px', fontWeight: 800, color: '#0194da' }}>
                    <span>24</span>
                    <span className="postfix" style={{ fontSize: '20px' }}>/7</span>
                  </div>
                  <div className="mb-8px" style={{ fontWeight: 700, fontSize: '14px', color: '#111', margin: '4px 0' }}>Local Tech Support</div>
                  <p style={{ margin: 0, fontSize: '12px', color: '#666', lineHeight: '1.4' }}>Northern Irish specialists here to resolve your queries.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container">
          <div className="title-wrapper" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="mask">
              <h2 className="heading" style={{ fontSize: '32px', fontWeight: 800, margin: 0 }}>Our Showroom Leadership</h2>
            </div>
            <div className="mask" style={{ marginTop: '10px' }}>
              <p style={{ color: '#555', fontSize: '15px' }}>Meet the specialists dedicated to guiding you through Northern Ireland's premium home appliance selection.</p>
            </div>
          </div>

          <div className="w-layout-grid team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="team-card-margin" style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
                <div className="team-member-image" style={{ height: '300px', overflow: 'hidden' }}>
                  <img src={member.image} alt={member.name} referrerPolicy="no-referrer" className="team-member-thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="team-member-info-card" style={{ padding: '20px', textAlign: 'center' }}>
                  <div className="margin-bottom-24px" style={{ marginBottom: '15px' }}>
                    <h3 className="team-member-name" style={{ fontSize: '18px', fontWeight: 700, color: '#111', margin: '0 0 5px' }}>{member.name}</h3>
                    <div className="member-designation" style={{ fontSize: '13px', color: '#0194da', fontWeight: 600 }}>{member.role}</div>
                  </div>
                  <div className="w-layout-grid socials-links-wrapper" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    {member.socials.facebook && <a href={member.socials.facebook} target="_blank" rel="noreferrer" className="social-links"></a>}
                    {member.socials.instagram && <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="social-links instagram"></a>}
                    {member.socials.twitter && <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="social-links twitter"></a>}
                    {member.socials.pinterest && <a href={member.socials.pinterest} target="_blank" rel="noreferrer" className="social-links pinterest"></a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Testimonials Navigation Tabs Section */}
      <section className="section-100px" style={{ padding: '60px 0', background: '#fafafa', borderTop: '1px solid #eee' }}>
        <div className="container">
          <div className="title-wrapper" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="mask">
              <h2 className="heading" style={{ fontSize: '32px', fontWeight: 800, margin: 0 }}>Showroom Stories</h2>
            </div>
            <div className="mask" style={{ marginTop: '10px' }}>
              <p style={{ color: '#555', fontSize: '15px' }}>Read real accounts from homeowners who purchased wash systems and smart refrigeration from us.</p>
            </div>
          </div>

          <div className="testimonial-tab w-tabs" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '30px' }}>
            {/* Left Avatars Navigation */}
            <div className="testimonial-tabs-menu w-tab-menu" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {TESTIMONIALS.map((test, index) => (
                <a 
                  key={test.id}
                  onClick={(e) => { e.preventDefault(); setActiveTab(index); }}
                  className={`testimonial-tab-link w-inline-block w-tab-link ${activeTab === index ? 'w--current' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', borderRadius: '6px', border: activeTab === index ? '2px solid #0194da' : '1px solid #ddd', background: '#fff', cursor: 'pointer', textDecoration: 'none' }}
                >
                  <img alt={test.name} src={test.clientImage} referrerPolicy="no-referrer" className="client-image" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#111' }}>{test.name}</div>
                    <div style={{ fontSize: '11px', color: '#666' }}>{test.role}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Right Active Review Card */}
            <div className="testimonial-contents w-tab-content" style={{ background: '#fff', padding: '30px', borderRadius: '8px', border: '1px solid #eee', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              <div className="w-tab-pane w--tab-active" style={{ display: 'block' }}>
                <div className="testimonial" style={{ display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <div className="testimonial-image-wrapper-rounded" style={{ width: '120px', height: '120px', flexShrink: 0, borderRadius: '6px', overflow: 'hidden' }}>
                    <img src={TESTIMONIALS[activeTab].productImage} alt={TESTIMONIALS[activeTab].productName} referrerPolicy="no-referrer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div className="testimonial-contents-vertical" style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '2px', color: '#ffcc00', marginBottom: '10px' }}>
                      {Array.from({ length: 5 }).map((_, sIdx) => (
                        <span key={sIdx} className="material-icons" style={{ fontSize: '18px' }}>star</span>
                      ))}
                    </div>
                    <h3 className="_30px-title" style={{ fontSize: '20px', fontWeight: 700, color: '#111', margin: '0 0 10px' }}>
                      "{TESTIMONIALS[activeTab].title}"
                    </h3>
                    <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6', marginBottom: '15px' }}>
                      {TESTIMONIALS[activeTab].comment}
                    </p>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', background: '#e0f2fe', color: '#0194da', padding: '3px 8px', borderRadius: '4px', fontWeight: 700, textTransform: 'uppercase' }}>
                        Product purchased: {TESTIMONIALS[activeTab].productName}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

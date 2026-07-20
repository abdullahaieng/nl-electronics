import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data';

export default function ContactView() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeLocationTab, setActiveLocationTab] = useState(0);

  const [formData, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // clear form
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const locations = [
    {
      city: "Belfast Showroom",
      address: "Unit 2, Boucher Retail Park, Boucher Road, Belfast, BT12 6HR",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" // Showroom kitchen
    },
    {
      city: "Derry Collection Point",
      address: "Unit 4, Pennyburn Industrial Estate, Derry / Londonderry, BT48 0LU",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" // Appliance wall
    },
    {
      city: "Craigavon Dispatch",
      address: "Unit B, Silverwood Industrial Estate, Craigavon, Co. Armagh, BT66 6SB",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80" // Warehousing/Loading
    }
  ];

  return (
    <div className="page-wrapper">
      
      {/* Contact Cards Row */}
      <div className="section" style={{ padding: '60px 0 30px' }}>
        <div className="container max-width-1240 w-container">
          <div className="title-wrapper" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="mask">
              <h2 className="heading" style={{ fontSize: '32px', fontWeight: 800, margin: 0 }}>Get In Touch Today</h2>
            </div>
            <div className="mask" style={{ marginTop: '10px' }}>
              <p style={{ color: '#555', fontSize: '15px' }}>
                Our showroom is fully open, and our expert advisors are ready to help you plan your kitchen layout or laundry setup.
              </p>
            </div>
          </div>

          <div className="w-layout-grid _3-column-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax-280px, 1fr))', gap: '30px' }}>
            <div className="contact-card" style={{ padding: '30px', border: '1px solid #eee', borderRadius: '8px', background: '#fff', textAlign: 'center' }}>
              <div className="contact-icon" style={{ background: '#fce7f3', color: '#ec4899', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <span className="material-icons" style={{ fontSize: '28px' }}>business</span>
              </div>
              <h3 className="contact-card-title" style={{ fontSize: '18px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>Visit Our Showroom</h3>
              <p className="_18px-text" style={{ fontSize: '14px', color: '#555', lineHeight: '1.5', margin: 0 }}>
                {BUSINESS_INFO.address}
              </p>
            </div>

            <div className="contact-card" style={{ padding: '30px', border: '1px solid #eee', borderRadius: '8px', background: '#fff', textAlign: 'center' }}>
              <div className="contact-icon" style={{ background: '#fce7f3', color: '#ec4899', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <span className="material-icons" style={{ fontSize: '28px' }}>chat_bubble</span>
              </div>
              <h3 className="contact-card-title" style={{ fontSize: '18px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>Mail Us Now</h3>
              <p className="_18px-text" style={{ fontSize: '14px', color: '#555', lineHeight: '1.5', margin: 0 }}>
                {BUSINESS_INFO.email}<br/>{BUSINESS_INFO.altEmail}
              </p>
            </div>

            <div className="contact-card" style={{ padding: '30px', border: '1px solid #eee', borderRadius: '8px', background: '#fff', textAlign: 'center' }}>
              <div className="contact-icon" style={{ background: '#fce7f3', color: '#ec4899', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <span className="material-icons" style={{ fontSize: '28px' }}>contact_phone</span>
              </div>
              <h3 className="contact-card-title" style={{ fontSize: '18px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>Help &amp; Support</h3>
              <p className="_18px-text" style={{ fontSize: '14px', color: '#555', lineHeight: '1.5', margin: 0 }}>
                {BUSINESS_INFO.phone}<br/>{BUSINESS_INFO.altPhone}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Contact Form Section */}
      <div className="contact-section" style={{ position: 'relative', background: '#fcfcfc', borderTop: '1px solid #eee', padding: '60px 0' }}>
        <div className="container max-width-1240 w-container">
          <div className="_2-column-block" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px', alignItems: 'center' }}>
            
            <div className="vertical-wrapper">
              <div className="_18px-500-primary-title" style={{ color: '#ec4899', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '10px' }}>Contact Us</div>
              <div className="margin-bottom-15px">
                <h2 className="heading" style={{ fontSize: '32px', fontWeight: 800, color: '#111', margin: 0 }}>Get in touch today</h2>
              </div>
              <div className="margin-bottom-40px" style={{ margin: '15px 0 35px', color: '#555', fontSize: '15px', lineHeight: '1.6' }}>
                <p>Have specifications for built-in hobs, cookers, or double ovens? Fill in our quick contact sheet and one of our Northern Irish appliance installation experts will get back to you with advice and quotes.</p>
              </div>
              <div className="w-layout-grid _1-column-grid-auto" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="contact-icon-card w-inline-block" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', background: '#fff', border: '1px solid #eee', borderRadius: '6px', padding: '15px' }}>
                  <div className="contact-icon-sm" style={{ background: '#fce7f3', color: '#ec4899', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-icons" style={{ fontSize: '18px' }}>alternate_email</span>
                  </div>
                  <div>
                    <div className="_18px-text-600" style={{ fontWeight: 700, fontSize: '14px', color: '#111' }}>Email Us:</div>
                    <div className="contact-info" style={{ fontSize: '14px', color: '#ec4899' }}>{BUSINESS_INFO.email}</div>
                  </div>
                </a>
                
                <a href={`tel:${BUSINESS_INFO.phone}`} className="contact-icon-card w-inline-block" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none', background: '#fff', border: '1px solid #eee', borderRadius: '6px', padding: '15px' }}>
                  <div className="contact-icon-sm" style={{ background: '#fce7f3', color: '#ec4899', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="material-icons" style={{ fontSize: '18px' }}>headset_mic</span>
                  </div>
                  <div>
                    <div className="_18px-text-600" style={{ fontWeight: 700, fontSize: '14px', color: '#111' }}>Phone Us:</div>
                    <div className="contact-info" style={{ fontSize: '14px', color: '#ec4899' }}>{BUSINESS_INFO.phone}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form with Success State */}
            <div className="contact-form w-form" style={{ background: '#fff', border: '1px solid #eee', borderRadius: '8px', padding: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.02)' }}>
              {formSubmitted ? (
                <div className="success-message w-form-done" style={{ display: 'block', textAlign: 'center', padding: '40px 0' }}>
                  <img src="https://cdn.prod.website-files.com/66c5934366ec1f0519f21b52/66c5934366ec1f0519f21bdc_line-rounded-check-circle-white-brix-templates.svg" alt="Success" className="_30px-image" style={{ width: '60px', margin: '0 auto 20px', filter: 'hue-rotate(120deg)' }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 800, margin: '0 0 10px', color: '#111' }}>Thank you</h3>
                  <div style={{ color: '#555', fontSize: '14px' }}>Thanks for reaching out to NI Drip Central Electronics. We have received your query and our Boucher Road showroom specialists will get back to you shortly!</div>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    style={{ marginTop: '20px', background: '#ec4899', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="contact-form-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <label className="input-label" style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>Name</label>
                      <input 
                        className="input-field w-input" 
                        placeholder="John Doe" 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setForm({ ...formData, name: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
                      />
                    </div>
                    <div>
                      <label className="input-label" style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>Email Address</label>
                      <input 
                        className="input-field w-input" 
                        placeholder="example@email.com" 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setForm({ ...formData, email: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
                      />
                    </div>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div>
                      <label className="input-label" style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>Phone Number</label>
                      <input 
                        className="input-field w-input" 
                        placeholder="(028) 9032 4455" 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setForm({ ...formData, phone: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
                      />
                    </div>
                    <div>
                      <label className="input-label" style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>Subject / Appliance interest</label>
                      <input 
                        className="input-field w-input" 
                        placeholder="Washing Machines / Ovens" 
                        type="text" 
                        required
                        value={formData.subject}
                        onChange={(e) => setForm({ ...formData, subject: e.target.value })}
                        style={{ width: '100%', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="input-label" style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#333' }}>Leave us a message</label>
                    <textarea 
                      placeholder="Please type your appliance specifications or installation queries here..." 
                      required 
                      className="input-field text-area w-input"
                      value={formData.message}
                      onChange={(e) => setForm({ ...formData, message: e.target.value })}
                      style={{ width: '100%', height: '110px', padding: '10px 12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '14px', resize: 'vertical' }}
                    ></textarea>
                  </div>

                  <div className="custom-button-wrapper">
                    <input type="submit" className="custom-button white w-button" value="Send Message" style={{ width: '100%', background: '#ec4899', color: '#fff', border: 'none', padding: '12px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }} />
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Locations Tab Section */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container max-width-1240">
          <div className="title-wrapper" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="mask">
              <h2 className="heading" style={{ fontSize: '32px', fontWeight: 800, margin: 0 }}>Our Northern Ireland Displays</h2>
            </div>
            <div className="mask" style={{ marginTop: '10px' }}>
              <p style={{ color: '#555', fontSize: '15px' }}>
                We operate multiple pickup, dispatch, and display centers to serve households throughout County Antrim, County Down, County Armagh, and County Londonderry.
              </p>
            </div>
          </div>

          <div className="address-tab w-tabs" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' }}>
            <div className="address-tab-menu w-tab-menu" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {locations.map((loc, index) => (
                <a 
                  key={index}
                  onClick={(e) => { e.preventDefault(); setActiveLocationTab(index); }}
                  className={`address-tab-link w-inline-block w-tab-link ${activeLocationTab === index ? 'w--current' : ''}`}
                  style={{ display: 'block', padding: '15px 20px', borderRadius: '6px', border: activeLocationTab === index ? '2px solid #ec4899' : '1px solid #eee', background: '#fff', cursor: 'pointer', textDecoration: 'none', textAlign: 'left' }}
                >
                  <h3 className="state-name" style={{ fontSize: '16px', fontWeight: 700, color: '#111', margin: '0 0 5px' }}>{loc.city}</h3>
                  <div className="address-location" style={{ fontSize: '13px', color: '#666', lineHeight: '1.4' }}>{loc.address}</div>
                </a>
              ))}
            </div>

            <div className="w-tab-content">
              <div className="w-tab-pane w--tab-active" style={{ display: 'block' }}>
                <div className="map-wrapper" style={{ height: '320px', borderRadius: '8px', overflow: 'hidden' }}>
                  <img src={locations[activeLocationTab].image} alt={locations[activeLocationTab].city} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main>
      <h1>Contact Us</h1>
      <p>Get in touch about this project</p>

      <div style={{ maxWidth: '600px', margin: '32px auto' }}>
        {submitted ? (
          <div className="card" style={{ background: 'rgba(0, 212, 255, 0.1)', border: '2px solid #00d4ff', padding: '32px', textAlign: 'center' }}>
            <h2 style={{ color: '#00d4ff', margin: '0 0 12px 0' }}>✓ Message Sent!</h2>
            <p>Thank you for reaching out. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="name" style={{ fontWeight: '700', color: '#1a1f2e' }}>Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                disabled={isSubmitting}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email" style={{ fontWeight: '700', color: '#1a1f2e' }}>Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="subject" style={{ fontWeight: '700', color: '#1a1f2e' }}>Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject of your message"
                disabled={isSubmitting}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="message" style={{ fontWeight: '700', color: '#1a1f2e' }}>Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your project..."
                rows="6"
                disabled={isSubmitting}
                style={{ resize: 'vertical' }}
              />
            </div>

            <button type="submit" disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message} style={{ alignSelf: 'flex-start' }}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>

      <div style={{ marginTop: '64px', maxWidth: '1000px', margin: '64px auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>Other Ways to Connect</h2>
        
        {/* Contact Methods Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '64px' }}>
          {[
            { icon: '📧', label: 'Email', value: 'info@showcase.dev', link: 'mailto:info@showcase.dev' },
            { icon: '🐙', label: 'GitHub', value: 'github.com/showcase', link: '#' },
            { icon: '𝕏', label: 'Twitter', value: '@showcase_app', link: '#' },
            { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/company', link: '#' },
            { icon: '💬', label: 'Discord', value: 'Join our server', link: '#' },
            { icon: '🎯', label: 'Website', value: 'showcase.dev', link: '#' },
          ].map((contact, idx) => (
            <a key={idx} href={contact.link} style={{ textDecoration: 'none', display: 'block' }}>
              <div className="card" style={{ padding: '28px', textAlign: 'center', cursor: 'pointer' }}>
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>{contact.icon}</div>
                <h3 style={{ fontSize: '18px', color: '#1a1f2e', margin: '0 0 8px' }}>{contact.label}</h3>
                <p style={{ color: '#00d4ff', margin: 0, fontWeight: '700', fontSize: '14px' }}>{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={{ background: '#f0f9ff', border: '2px solid #00d4ff', borderRadius: '16px', padding: '40px', marginTop: '64px' }}>
          <h2 style={{ textAlign: 'center', marginTop: 0, marginBottom: '40px' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '16px', maxWidth: '700px', margin: '0 auto' }}>
            {[
              { q: 'How can I use these components in my project?', a: 'You can copy the component code or import it in your React application. Visit our GitHub for more details.' },
              { q: 'Are these components accessible?', a: 'Yes! All components follow WCAG guidelines with proper ARIA labels, keyboard support, and focus management.' },
              { q: 'Can I customize the styling?', a: 'Absolutely. All components use CSS variables and can be easily customized to match your brand.' },
              { q: 'Do you provide support?', a: 'Yes, reach out via email or join our Discord community for help and discussions.' },
              { q: 'Is this free to use?', a: 'Yes, this project is open-source and free for everyone to use and modify.' },
              { q: 'How often is this updated?', a: 'We continuously add new components and improvements based on community feedback.' },
            ].map((item, idx) => (
              <div key={idx} className="card" style={{ padding: '16px' }}>
                <p style={{ margin: '0 0 8px 0', fontWeight: '700', color: '#1a1f2e', fontSize: '15px' }}>Q: {item.q}</p>
                <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '64px', padding: '32px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e6f4fb 100%)', borderRadius: '16px', border: '2px solid #00d4ff' }}>
          <h3 style={{ fontSize: '24px', color: '#1a1f2e', margin: '0 0 16px' }}>Let's Build Something Together</h3>
          <p style={{ fontSize: '16px', color: '#666', margin: '0 0 24px' }}>Have a project in mind? We'd love to help bring it to life.</p>
          <button style={{ padding: '14px 32px', fontSize: '14px' }}>Start a Conversation</button>
        </div>
      </div>
    </main>
  );
}

export default Contact;
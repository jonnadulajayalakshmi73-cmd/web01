import { useState } from 'react';

function About() {
  const testimonials = [
    { name: 'Alex Chen', role: 'Frontend Engineer', text: 'Amazing resource for learning React patterns!' },
    { name: 'Maria Rodriguez', role: 'UX Designer', text: 'Great component library and well-built showcase.' },
    { name: 'James Wilson', role: 'Tech Lead', text: 'Perfect for teaching component architecture.' },
  ];

  return (
    <main>
      <h1>About This Project</h1>
      <p>A comprehensive modular component showcase built with React</p>

      <div style={{ maxWidth: '900px', margin: '32px auto', textAlign: 'left' }}>
        <section style={{ marginBottom: '32px' }}>
          <h2>Project Description</h2>
          <p>A SPA designed to demonstrate reusable UI components, their interactions, and behavior under different configurations. Focus is on <strong>component modularity, controlled state variations, prop-driven rendering, routing, and performance optimization</strong>. This is a meta-engineering project, ideal for practicing engineering concepts across all COs.</p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2>Key Architecture Goals</h2>
          <ul style={{ lineHeight: '1.8' }}>
            <li>Modular component library with reusable and configurable UI elements</li>
            <li>Controlled state management demonstrating prop drilling and state patterns</li>
            <li>Route-based organization of component categories or demos</li>
            <li>Performance optimization for multiple interactive components</li>
            <li>Conditional rendering to showcase different component states and variants</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2>Major Features</h2>
          <ul style={{ lineHeight: '1.8' }}>
            <li><strong>Library of Reusable UI Components:</strong> Buttons, Cards, Tables, Charts, Forms</li>
            <li><strong>Interactive Demos:</strong> Showcase controlled state and prop variations</li>
            <li><strong>Route-based Navigation:</strong> Across component categories or demos</li>
            <li><strong>Asynchronous Simulation:</strong> Of interactions or dynamic data updates</li>
            <li><strong>Conditional Rendering:</strong> For different component states and variants</li>
            <li><strong>Performance-Optimized Rendering:</strong> For multiple interactive demos</li>
            <li><strong>Accessible Components:</strong> Keyboard support, focus management, ARIA labels</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2>Technologies Used</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginTop: '16px' }}>
            {['React 18+', 'React Router v6', 'Vite', 'Modern CSS3', 'JavaScript ES6+', 'Hooks API'].map(tech => (
              <div key={tech} className="card" style={{ padding: '16px', textAlign: 'center' }}>
                <p style={{ margin: 0, fontWeight: '700', color: '#00d4ff' }}>{tech}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '32px', paddingTop: '32px', borderTop: '2px solid #e8e8e8' }}>
          <h2>What You'll Learn</h2>
          <ul style={{ lineHeight: '2', fontSize: '16px' }}>
            <li>✓ Building reusable component hierarchies</li>
            <li>✓ State management patterns and best practices</li>
            <li>✓ React Router routing and navigation</li>
            <li>✓ Async operations and API simulation</li>
            <li>✓ Form handling and validation</li>
            <li>✓ Performance optimization techniques</li>
            <li>✓ Responsive design patterns</li>
            <li>✓ Accessibility (a11y) best practices</li>
          </ul>
        </section>

        <section style={{ marginBottom: '32px', paddingTop: '32px', borderTop: '2px solid #e8e8e8' }}>
          <h2>Testimonials</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '20px' }}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="card" style={{ padding: '20px' }}>
                <p style={{ fontSize: '15px', color: '#555', marginBottom: '16px', fontStyle: 'italic' }}>"{testimonial.text}"</p>
                <p style={{ margin: 0, fontWeight: '700', color: '#00d4ff' }}>{testimonial.name}</p>
                <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#999' }}>{testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '32px', paddingTop: '32px', borderTop: '2px solid #e8e8e8' }}>
          <h2>Project Timeline</h2>
          <div style={{ marginTop: '20px' }}>
            {[
              { date: 'Phase 1', title: 'Foundation', desc: 'Setup React & Routing' },
              { date: 'Phase 2', title: 'Components', desc: 'Build UI component library' },
              { date: 'Phase 3', title: 'Interactivity', desc: 'Add state & handlers' },
              { date: 'Phase 4', title: 'Polish', desc: 'Styling & optimization' },
            ].map((phase, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '20px', marginBottom: '24px', paddingBottom: '24px', borderBottom: idx < 3 ? '2px solid #e8e8e8' : 'none' }}>
                <div style={{ minWidth: '100px' }}>
                  <span style={{ background: '#00d4ff', color: '#0a0e27', padding: '8px 16px', borderRadius: '8px', fontWeight: '700', fontSize: '13px' }}>{phase.date}</span>
                </div>
                <div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '18px', color: '#1a1f2e' }}>{phase.title}</h3>
                  <p style={{ margin: '0', color: '#666' }}>{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: '32px', paddingTop: '32px', borderTop: '2px solid #e8e8e8' }}>
          <h2>Get Started</h2>
          <div style={{ background: '#f0f9ff', border: '2px solid #00d4ff', borderRadius: '12px', padding: '32px', marginTop: '20px' }}>
            <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.8', margin: 0 }}>Ready to learn? Head to the <strong>Home</strong> page to explore interactive component demos. Use the <strong>Contact</strong> page to reach out with questions or feedback. Happy learning!</p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;
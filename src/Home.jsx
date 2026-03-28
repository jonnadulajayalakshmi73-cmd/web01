import { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState('buttons');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [selectedColor, setSelectedColor] = useState('#00d4ff');
  const [progress, setProgress] = useState(65);

  const handleAsync = async () => {
    setIsLoading(true);
    setMessage('');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setMessage('✓ Action completed successfully!');
    setIsLoading(false);
  };

  const handleProgress = () => {
    setProgress(Math.min(100, progress + 10));
  };

  const colors = ['#00d4ff', '#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#A8E6CF'];
  
  const stats = [
    { label: 'Components', value: '25+' },
    { label: 'Patterns', value: '50+' },
    { label: 'Developers', value: '1000+' },
    { label: 'Projects', value: '500+' },
  ];

  const components = {
    buttons: [
      { name: 'Primary Button', type: 'primary' },
      { name: 'Secondary Button', type: 'secondary' },
      { name: 'Disabled Button', disabled: true },
    ],
    components: [
      { name: 'Card Component', description: 'Reusable card with hover effects' },
      { name: 'Table Component', description: 'Responsive data table' },
      { name: 'Form Component', description: 'Accessible form inputs' },
    ],
  };

  const componentCode = {
    primaryButton: `// PrimaryButton.jsx - Main action button
export function PrimaryButton({ children, onClick, disabled }) {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      style={{
        background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
        color: 'white',
        border: 'none',
        padding: '14px 28px',
        borderRadius: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: '700',
        fontSize: '16px',
        boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
        transition: 'all 0.3s ease',
        opacity: disabled ? 0.6 : 1
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {children}
    </button>
  );
}`,
    secondaryButton: `// SecondaryButton.jsx - Alternative action button
export function SecondaryButton({ children, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{
        background: 'transparent',
        color: '#00d4ff',
        border: '2px solid #00d4ff',
        padding: '12px 26px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '16px',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#00d4ff';
        e.currentTarget.style.color = '#0a0e27';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.color = '#00d4ff';
      }}
    >
      {children}
    </button>
  );
}`,
    dangerButton: `// DangerButton.jsx - Destructive action button
export function DangerButton({ children, onClick, confirm }) {
  const [isConfirming, setIsConfirming] = React.useState(false);

  const handleClick = () => {
    if (confirm && !isConfirming) {
      setIsConfirming(true);
      setTimeout(() => setIsConfirming(false), 3000);
      return;
    }
    onClick?.();
    setIsConfirming(false);
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        background: isConfirming ? '#FF3333' : '#FF6B6B',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '16px',
        transition: 'all 0.3s ease'
      }}
    >
      {isConfirming ? '❌ Confirm Delete?' : children}
    </button>
  );
}`,
    disabledButton: `// DisabledButton.jsx - Inactive button state
export function DisabledButton({ children, reason }) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        disabled
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          background: '#cccccc',
          color: '#666666',
          border: 'none',
          padding: '12px 24px',
          borderRadius: '8px',
          cursor: 'not-allowed',
          fontWeight: '700',
          fontSize: '16px',
          opacity: 0.6
        }}
      >
        {children}
      </button>
      {showTooltip && reason && (
        <div style={{
          position: 'absolute',
          bottom: '120%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#333',
          color: 'white',
          padding: '8px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          whiteSpace: 'nowrap',
          zIndex: 1000
        }}>
          {reason}
        </div>
      )}
    </div>
  );
}`,
    card: `// Card.jsx - Flexible container component
export function Card({ title, children, icon, onClick, hoverable = true }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        background: 'white',
        border: isHovered ? '2px solid #00d4ff' : '1px solid #e8e8e8',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: isHovered 
          ? '0 12px 32px rgba(0, 212, 255, 0.25)' 
          : '0 2px 8px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: hoverable ? 'pointer' : 'default',
        transform: isHovered && hoverable ? 'translateY(-8px)' : 'translateY(0)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {icon && <div style={{ fontSize: '40px', marginBottom: '16px' }}>{icon}</div>}
      {title && <h3 style={{ margin: '0 0 12px', color: '#1a1f2e', fontSize: '18px', fontWeight: '700' }}>{title}</h3>}
      <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>{children}</p>
    </div>
  );
}`,
    alertCard: `// AlertCard.jsx - Warning/error notification card
export function AlertCard({ title, message, type = 'info', onClose }) {
  const colors = {
    info: { bg: '#e3f2fd', border: '#00d4ff', icon: 'ℹ️' },
    warning: { bg: '#fff3e0', border: '#FFB800', icon: '⚠️' },
    error: { bg: '#ffebee', border: '#FF6B6B', icon: '❌' },
    success: { bg: '#e8f5e9', border: '#4ECDC4', icon: '✓' }
  };
  
  const color = colors[type];

  return (
    <div style={{
      background: color.bg,
      border: \`2px solid \${color.border}\`,
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '16px'
    }}>
      <span style={{ fontSize: '24px' }}>{color.icon}</span>
      <div style={{ flex: 1 }}>
        {title && <h4 style={{ margin: '0 0 4px', color: '#1a1f2e' }}>{title}</h4>}
        <p style={{ margin: 0, color: '#666' }}>{message}</p>
      </div>
      {onClose && (
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px' }}>✕</button>
      )}
    </div>
  );
}`,
    table: `// DataTable.jsx - Sortable data display
export function DataTable({ data, columns, sortable = true }) {
  const [sortColumn, setSortColumn] = React.useState(null);
  const [sortDir, setSortDir] = React.useState('asc');

  const sortedData = sortable && sortColumn
    ? [...data].sort((a, b) => {
        const aVal = a[sortColumn];
        const bVal = b[sortColumn];
        return sortDir === 'asc' ? aVal > bVal ? 1 : -1 : bVal > aVal ? 1 : -1;
      })
    : data;

  const handleSort = (column) => {
    setSortColumn(sortColumn === column ? null : column);
    setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: 'white',
        fontSize: '14px'
      }}>
        <thead>
          <tr style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)' }}>
            {columns.map(col => (
              <th 
                key={col}
                onClick={() => handleSort(col)}
                style={{ 
                  padding: '16px',
                  color: 'white',
                  textAlign: 'left',
                  fontWeight: '700',
                  cursor: sortable ? 'pointer' : 'default',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  letterSpacing: '0.5px',
                  userSelect: 'none'
                }}
              >
                {col} {sortColumn === col && (sortDir === 'asc' ? '↑' : '↓')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <tr 
              key={idx}
              style={{ borderBottom: '1px solid #e8e8e8' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#f8f8f8'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
            >
              {columns.map(col => (
                <td key={col} style={{ padding: '16px', color: '#333' }}>
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`,
    badge: `// Badge.jsx - Status indicator
export function Badge({ children, variant = 'primary' }) {
  const variants = {
    primary: { bg: '#00d4ff', color: '#0a0e27' },
    success: { bg: '#4ECDC4', color: 'white' },
    warning: { bg: '#FFB800', color: '#0a0e27' },
    danger: { bg: '#FF6B6B', color: 'white' }
  };

  const style = variants[variant];

  return (
    <span style={{
      display: 'inline-block',
      background: style.bg,
      color: style.color,
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    }}>
      {children}
    </span>
  );
}`,
    form: `// ContactForm.jsx - Full form with validation
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name required';
    if (!formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject required';
    if (!formData.message.trim()) newErrors.message = 'Message required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    setStatus('Sending...');
    await new Promise(r => setTimeout(r, 1500));
    setStatus('✓ Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      {['name', 'email', 'subject'].map(field => (
        <div key={field}>
          <label style={{ fontWeight: '700', color: '#1a1f2e', display: 'block', marginBottom: '6px', textTransform: 'capitalize' }}>
            {field}
          </label>
          <input 
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={\`Enter \${field}...\`}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: errors[field] ? '2px solid #FF6B6B' : '1px solid #ddd',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
          {errors[field] && <p style={{ color: '#FF6B6B', fontSize: '12px', margin: '4px 0 0' }}>{errors[field]}</p>}
        </div>
      ))}
      <div>
        <label style={{ fontWeight: '700', color: '#1a1f2e', display: 'block', marginBottom: '6px' }}>
          Message
        </label>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows="5"
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: errors.message ? '2px solid #FF6B6B' : '1px solid #ddd',
            fontSize: '14px',
            boxSizing: 'border-box',
            fontFamily: 'inherit'
          }}
        />
        {errors.message && <p style={{ color: '#FF6B6B', fontSize: '12px', margin: '4px 0 0' }}>{errors.message}</p>}
      </div>
      <button type="submit" style={{
        background: '#00d4ff',
        color: '#0a0e27',
        border: 'none',
        padding: '14px',
        borderRadius: '8px',
        fontWeight: '700',
        cursor: 'pointer',
        transition: 'all 0.3s'
      }}>
        Send Message
      </button>
      {status && <p style={{ color: status.includes('✓') ? '#4ECDC4' : '#00d4ff', fontWeight: '700', textAlign: 'center' }}>{status}</p>}
    </form>
  );
}`,
    modal: `// Modal.jsx - Dialog component
export function Modal({ isOpen, title, children, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '32px',
        maxWidth: '500px',
        width: '90%',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        animation: 'slideIn 0.3s ease'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ margin: 0, color: '#1a1f2e' }}>{title}</h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>✕</button>
        </div>
        <div style={{ marginBottom: '24px' }}>{children}</div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
          <button onClick={onClose} style={{ padding: '10px 20px', border: '1px solid #ddd', borderRadius: '6px', background: 'white', cursor: 'pointer' }}>Cancel</button>
          {onConfirm && <button onClick={onConfirm} style={{ padding: '10px 20px', background: '#00d4ff', color: '#0a0e27', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>Confirm</button>}
        </div>
      </div>
    </div>
  );
}`
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert('Code copied to clipboard!');
  };

  return (
    <main>
      <h1>Modular Component Showcase</h1>
      <p>Interactive demonstration of reusable UI components</p>

      {/* Stats Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', margin: '48px 0', padding: '32px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e6f4fb 100%)', borderRadius: '16px', border: '2px solid #00d4ff' }}>
        {stats.map((stat, idx) => (
          <div key={idx} style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '36px', fontWeight: '900', color: '#00d4ff', marginBottom: '8px' }}>{stat.value}</div>
            <div style={{ fontSize: '14px', color: '#666', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Component Navigation */}
      <div style={{ margin: '32px 0', borderBottom: '2px solid #e8e8e8', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setActiveTab('buttons')}
          className={activeTab === 'buttons' ? 'active' : ''}
          style={{ 
            background: activeTab === 'buttons' ? '#00d4ff' : 'transparent',
            color: activeTab === 'buttons' ? '#0a0e27' : '#00d4ff',
            marginRight: '8px',
            border: '2px solid #00d4ff',
            marginBottom: '16px'
          }}
        >
          Buttons & States
        </button>
        <button 
          onClick={() => setActiveTab('components')}
          className={activeTab === 'components' ? 'active' : ''}
          style={{ 
            background: activeTab === 'components' ? '#00d4ff' : 'transparent',
            color: activeTab === 'components' ? '#0a0e27' : '#00d4ff',
            border: '2px solid #00d4ff',
            marginBottom: '16px'
          }}
        >
          Components
        </button>
        <button 
          onClick={() => setActiveTab('interactive')}
          className={activeTab === 'interactive' ? 'active' : ''}
          style={{ 
            background: activeTab === 'interactive' ? '#00d4ff' : 'transparent',
            color: activeTab === 'interactive' ? '#0a0e27' : '#00d4ff',
            border: '2px solid #00d4ff',
            marginBottom: '16px'
          }}
        >
          Interactive
        </button>
      </div>

      {/* Buttons Demo */}
      {activeTab === 'buttons' && (
        <div className="demo-section">
          <h2>Button Variants</h2>
          
          {/* Primary Button */}
          <div style={{ marginTop: '32px', marginBottom: '40px', padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8' }}>
            <h3 style={{ marginTop: 0, color: '#1a1f2e' }}>🎯 Primary Button</h3>
            <p style={{ color: '#666' }}>Main action button with gradient and hover effects</p>
            <div style={{ marginBottom: '16px' }}>
              <button onClick={() => setCount(count + 1)} style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '700',
                boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                Clicked: {count} times
              </button>
            </div>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px', marginTop: '12px' }}>
              <button onClick={() => copyCode(componentCode.primaryButton)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Primary Button Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.primaryButton.substring(0, 300)}...</pre>
            </div>
          </div>

          {/* Secondary Button */}
          <div style={{ marginBottom: '40px', padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8' }}>
            <h3 style={{ marginTop: 0, color: '#1a1f2e' }}>↔️ Secondary Button</h3>
            <p style={{ color: '#666' }}>Alternative action button with outline style</p>
            <div style={{ marginBottom: '16px' }}>
              <button style={{
                background: 'transparent',
                color: '#00d4ff',
                border: '2px solid #00d4ff',
                padding: '12px 26px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '700',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => { e.currentTarget.style.background = '#00d4ff'; e.currentTarget.style.color = '#0a0e27'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#00d4ff'; }}>
                Secondary Action
              </button>
            </div>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px' }}>
              <button onClick={() => copyCode(componentCode.secondaryButton)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Secondary Button Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.secondaryButton.substring(0, 300)}...</pre>
            </div>
          </div>

          {/* Danger Button */}
          <div style={{ marginBottom: '40px', padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8' }}>
            <h3 style={{ marginTop: 0, color: '#1a1f2e' }}>⚠️ Danger Button</h3>
            <p style={{ color: '#666' }}>Destructive action with confirmation</p>
            <div style={{ marginBottom: '16px' }}>
              <button onClick={() => alert('Delete confirmed!')} style={{
                background: '#FF6B6B',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '700',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => e.currentTarget.style.background = '#FF3333'} onMouseLeave={(e) => e.currentTarget.style.background = '#FF6B6B'}>
                Delete Item
              </button>
            </div>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px' }}>
              <button onClick={() => copyCode(componentCode.dangerButton)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Danger Button Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.dangerButton.substring(0, 300)}...</pre>
            </div>
          </div>

          {/* Disabled Button */}
          <div style={{ marginBottom: '40px', padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8' }}>
            <h3 style={{ marginTop: 0, color: '#1a1f2e' }}>🔒 Disabled Button</h3>
            <p style={{ color: '#666' }}>Inactive state with tooltip</p>
            <div style={{ marginBottom: '16px' }}>
              <button disabled style={{
                background: '#cccccc',
                color: '#666666',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                cursor: 'not-allowed',
                fontWeight: '700',
                opacity: 0.6
              }} title="Complete previous step first">
                Unavailable
              </button>
            </div>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px' }}>
              <button onClick={() => copyCode(componentCode.disabledButton)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Disabled Button Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.disabledButton.substring(0, 300)}...</pre>
            </div>
          </div>

          {/* Loading State Button */}
          <div style={{ marginBottom: '40px', padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8' }}>
            <h3 style={{ marginTop: 0, color: '#1a1f2e' }}>⏳ Loading Button</h3>
            <p style={{ color: '#666' }}>Async action with loading state</p>
            <div style={{ marginBottom: '16px' }}>
              <button onClick={handleAsync} disabled={isLoading} style={{
                background: isLoading ? '#0099cc' : 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
                color: 'white',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '8px',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                fontWeight: '700',
                boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                opacity: isLoading ? 0.8 : 1
              }}>
                {isLoading ? '⟳ Processing...' : 'Start Async Task'}
              </button>
            </div>
            {message && <p style={{ color: '#4ECDC4', fontWeight: 'bold', marginBottom: '16px' }}>{message}</p>}
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px' }}>
              <button onClick={() => copyCode(`// LoadingButton.jsx
export function LoadingButton({ children, isLoading, onClick }) {
  return (
    <button 
      onClick={onClick}
      disabled={isLoading}
      style={{
        background: isLoading ? '#0099cc' : 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
        color: 'white',
        padding: '14px 28px',
        borderRadius: '8px',
        cursor: isLoading ? 'not-allowed' : 'pointer',
        fontWeight: '700',
        border: 'none',
        opacity: isLoading ? 0.8 : 1
      }}
    >
      {isLoading ? '⟳ Processing...' : children}
    </button>
  );
}`)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Loading Button Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>// Loading state with visual feedback...</pre>
            </div>
          </div>
        </div>
      )}

      {/* Components Demo */}
      {activeTab === 'components' && (
        <div className="showcase-grid" style={{ marginTop: '24px' }}>
          {/* Card Component */}
          <div style={{ padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8', marginBottom: '30px' }}>
            <h2 style={{ marginTop: 0, color: '#1a1f2e' }}>📦 Card Component</h2>
            <p style={{ color: '#666' }}>Flexible container with hover effects</p>
            <div style={{ background: 'white', border: '1px solid #e8e8e8', borderRadius: '12px', padding: '24px', marginBottom: '16px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', transition: 'all 0.3s', cursor: 'pointer' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎨</div>
              <h3 style={{ margin: '0 0 12px', color: '#1a1f2e', fontSize: '18px', fontWeight: '700' }}>Beautiful Design</h3>
              <p style={{ margin: 0, color: '#666', lineHeight: '1.6' }}>Hover over this card to see interactive effects with smooth animations and elevation changes.</p>
            </div>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px' }}>
              <button onClick={() => copyCode(componentCode.card)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Card Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.card.substring(0, 250)}...</pre>
            </div>
          </div>

          {/* Alert Card Component */}
          <div style={{ padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8', marginBottom: '30px' }}>
            <h2 style={{ marginTop: 0, color: '#1a1f2e' }}>🔔 Alert Card Component</h2>
            <p style={{ color: '#666' }}>Status notifications with different variants</p>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ background: '#e3f2fd', border: '2px solid #00d4ff', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '24px' }}>ℹ️</span>
                <div>
                  <h4 style={{ margin: '0 0 4px', color: '#1a1f2e' }}>Info Alert</h4>
                  <p style={{ margin: 0, color: '#666' }}>This is informational content displayed in a styled alert card.</p>
                </div>
              </div>
              <div style={{ background: '#fff3e0', border: '2px solid #FFB800', borderRadius: '8px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px' }}>
                <span style={{ fontSize: '24px' }}>⚠️</span>
                <div>
                  <h4 style={{ margin: '0 0 4px', color: '#1a1f2e' }}>Warning Alert</h4>
                  <p style={{ margin: 0, color: '#666' }}>This is a warning message that requires attention.</p>
                </div>
              </div>
            </div>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px' }}>
              <button onClick={() => copyCode(componentCode.alertCard)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Alert Card Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.alertCard.substring(0, 250)}...</pre>
            </div>
          </div>

          {/* Badge Component */}
          <div style={{ padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8', marginBottom: '30px' }}>
            <h2 style={{ marginTop: 0, color: '#1a1f2e' }}>🏷️ Badge Component</h2>
            <p style={{ color: '#666' }}>Status indicators and labels</p>
            <div style={{ marginBottom: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-block', background: '#00d4ff', color: '#0a0e27', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Primary</span>
              <span style={{ display: 'inline-block', background: '#4ECDC4', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Success</span>
              <span style={{ display: 'inline-block', background: '#FFB800', color: '#0a0e27', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Warning</span>
              <span style={{ display: 'inline-block', background: '#FF6B6B', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Danger</span>
            </div>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px' }}>
              <button onClick={() => copyCode(componentCode.badge)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Badge Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.badge.substring(0, 250)}...</pre>
            </div>
          </div>

          {/* Data Table Component */}
          <div style={{ padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8', marginBottom: '30px' }}>
            <h2 style={{ marginTop: 0, color: '#1a1f2e' }}>📊 Data Table Component</h2>
            <p style={{ color: '#666' }}>Sortable data display (click headers)</p>
            <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)' }}>
                    <th style={{ padding: '16px', color: 'white', textAlign: 'left', fontWeight: '700', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.5px' }}>Feature</th>
                    <th style={{ padding: '16px', color: 'white', textAlign: 'left', fontWeight: '700', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '0.5px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[{ feature: 'Responsive Design', status: '✓' }, { feature: 'Sorting', status: '✓' }, { feature: 'Pagination', status: '✓' }].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #e8e8e8' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f8f8f8'} onMouseLeave={(e) => e.currentTarget.style.background = 'white'}>
                      <td style={{ padding: '16px', color: '#333' }}>{row.feature}</td>
                      <td style={{ padding: '16px', color: '#333' }}>{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px' }}>
              <button onClick={() => copyCode(componentCode.table)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Table Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.table.substring(0, 250)}...</pre>
            </div>
          </div>

          {/* Form Component */}
          <div style={{ padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8', marginBottom: '30px' }}>
            <h2 style={{ marginTop: 0, color: '#1a1f2e' }}>📝 Form Component</h2>
            <p style={{ color: '#666' }}>Validation with error states</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ fontWeight: '700', color: '#1a1f2e', display: 'block', marginBottom: '6px', textTransform: 'capitalize' }}>Email</label>
                <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ fontWeight: '700', color: '#1a1f2e', display: 'block', marginBottom: '6px' }}>Message</label>
                <textarea placeholder="Your message..." rows="4" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'inherit' }} />
              </div>
              <button type="submit" style={{ background: '#00d4ff', color: '#0a0e27', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>Send Message</button>
            </form>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px', marginTop: '16px' }}>
              <button onClick={() => copyCode(componentCode.form)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Form Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.form.substring(0, 250)}...</pre>
            </div>
          </div>

          {/* Modal Component */}
          <div style={{ padding: '24px', background: '#f9f9f9', borderRadius: '12px', border: '1px solid #e8e8e8', marginBottom: '30px' }}>
            <h2 style={{ marginTop: 0, color: '#1a1f2e' }}>🪟 Modal Component</h2>
            <p style={{ color: '#666' }}>Dialog box with backdrop overlay</p>
            <button onClick={() => alert('Modal would appear here with overlay backdrop')} style={{ background: '#00d4ff', color: '#0a0e27', border: 'none', padding: '12px 24px', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>Show Modal (Demo)</button>
            <div style={{ background: '#1a1f2e', color: '#00d4ff', padding: '16px', borderRadius: '8px', overflow: 'auto', fontSize: '11px', marginTop: '16px' }}>
              <button onClick={() => copyCode(componentCode.modal)} style={{ background: '#00d4ff', color: '#0a0e27', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', marginBottom: '8px', display: 'block', width: '100%' }}>Copy Modal Code</button>
              <pre style={{ margin: 0, fontFamily: 'monospace', lineHeight: '1.2' }}>{componentCode.modal.substring(0, 250)}...</pre>
            </div>
          </div>
        </div>
      )}

      {/* Features List */}
      <div style={{ marginTop: '64px', textAlign: 'left', maxWidth: '900px', margin: '64px auto 0' }}>
        <h2>Key Features & Capabilities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '32px' }}>
          <div className="card">
            <h3 style={{ fontSize: '18px', color: '#1a1f2e', marginBottom: '12px' }}>🧩 Modular</h3>
            <p>Reusable component library with configurable elements</p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', color: '#1a1f2e', marginBottom: '12px' }}>⚡ State Management</h3>
            <p>Controlled state and props patterns in action</p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', color: '#1a1f2e', marginBottom: '12px' }}>🛣️ Routing</h3>
            <p>Route-based organization of component pages</p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', color: '#1a1f2e', marginBottom: '12px' }}>⏱️ Async</h3>
            <p>Asynchronous operations and data simulation</p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', color: '#1a1f2e', marginBottom: '12px' }}>🚀 Performance</h3>
            <p>Optimized rendering and smooth animations</p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', color: '#1a1f2e', marginBottom: '12px' }}>♿ Accessible</h3>
            <p>WCAG-ready with keyboard and focus support</p>
          </div>
        </div>
      </div>

      {/* Interactive Tab */}
      {activeTab === 'interactive' && (
        <div className="demo-section">
          <h2>Interactive Components</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '32px' }}>
            {/* Progress Bar */}
            <div className="card">
              <h3 style={{ fontSize: '18px', marginBottom: '16px', color: '#1a1f2e' }}>Progress Bar</h3>
              <div style={{ marginBottom: '16px' }}>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>Progress: {progress}%</p>
                <div style={{ width: '100%', height: '8px', background: '#e8e8e8', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #00d4ff 0%, #0099cc 100%)', transition: 'width 0.3s ease' }}></div>
                </div>
              </div>
              <button onClick={handleProgress} style={{ marginTop: '12px' }}>Increase Progress</button>
            </div>

            {/* Rating */}
            <div className="card">
              <h3 style={{ fontSize: '18px', marginBottom: '16px', color: '#1a1f2e' }}>Star Rating</h3>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <span key={star} onClick={() => setRating(star)} style={{ fontSize: '32px', cursor: 'pointer', color: star <= rating ? '#FFE66D' : '#ddd', transition: 'all 0.2s' }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>{rating > 0 ? `You rated: ${rating}/5 stars` : 'Click to rate'}</p>
            </div>

            {/* Color Palette */}
            <div className="card">
              <h3 style={{ fontSize: '18px', marginBottom: '16px', color: '#1a1f2e' }}>Color Palette</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {colors.map(color => (
                  <div key={color} onClick={() => setSelectedColor(color)} style={{ width: '40px', height: '40px', background: color, borderRadius: '8px', cursor: 'pointer', border: selectedColor === color ? '3px solid #000' : '2px solid #ddd', transition: 'all 0.2s' }}></div>
                ))}
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '12px' }}>Selected: {selectedColor}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
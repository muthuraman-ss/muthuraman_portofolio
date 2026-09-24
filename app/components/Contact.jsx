import React, { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      setStatus({ type: 'error', message: 'All fields are required' });
      return;
    }

    if (!email.includes('@')) {
      setStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    setStatus({ type: 'success', message: 'Thanks — your message has been received.' });

    form.name.value = '';
    form.email.value = '';
    form.message.value = '';
  };

  return (
    <section id="contact" className="py-24 relative max-w-7xl mx-auto px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="font-bold text-4xl md:text-5xl tracking-tight mb-8"
          style={{
            color: 'var(--foreground)',
            fontFamily: 'Inter, Arial, Helvetica, sans-serif',
          }}
        >
          LET'S CONNECT
        </h2>
        {status !== null && (
          <div className="p-6 rounded-xl mb-8"
            style={{
              background: status.type === 'success' ? 'rgba(0, 212, 170, 0.1)' : 'rgba(255, 0, 0, 0.1)',
              border: `1px solid ${status.type === 'success' ? 'var(--accent)' : 'red'}`,
              color: status.type === 'success' ? 'var(--accent)' : 'red',
            }}
          >
            {status.message}
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4"
            style={{
              marginBottom: '1.5rem',
            }}
          >
            <label className="block text-sm font-medium mb-2"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-xl border p-4 bg-card transition-colors focus:outline-none focus:border-accent"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--muted)',
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            />
          </div>
          <div className="mb-6"
            style={{
              marginBottom: '1.5rem',
            }}
          >
            <label className="block text-sm font-medium mb-2"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border p-4 bg-card transition-colors focus:outline-none focus:border-accent"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--muted)',
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            />
          </div>
          <div className="mb-8"
            style={{
              marginBottom: '1.5rem',
            }}
          >
            <label className="block text-sm font-medium mb-2"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            >
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full rounded-xl border p-4 bg-card resize-none transition-colors focus:outline-none focus:border-accent"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--muted)',
                color: 'var(--foreground)',
                fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                resize: 'none',
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-accent text-background font-medium rounded-full hover:opacity-90 transition-opacity"
            style={{
              background: 'var(--accent)',
              color: 'var(--background)',
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
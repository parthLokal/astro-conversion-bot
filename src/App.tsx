import { useState } from 'react';
import { astrologers, conversationSeed, dashboardStats, quickReplies, servicePackages, tickets } from './data/mockData';

function App() {
  const [messages, setMessages] = useState(conversationSeed);
  const [input, setInput] = useState('');

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: trimmed },
      {
        sender: 'bot',
        text: 'I can help with that. Based on your concern, I recommend a guided consultation with a specialist. You can book a session or explore the available package options on the right.'
      }
    ]);
    setInput('');
  };

  return (
    <div className="app-shell">
      <div className="app-frame">
        <header className="topbar">
          <div className="brand">
            <div className="brand-mark">A</div>
            <div>
              <div className="brand-text">AstroHelp</div>
            </div>
          </div>

          <div className="top-actions">
            <span className="pill">Live demo</span>
            <button className="secondary-btn">New conversation</button>
            <button className="primary-btn">Book consult</button>
          </div>
        </header>

        <main className="layout-grid">
          <section className="left-panel">
            <div className="panel-section">
              <div className="section-head">
                <h2>Customer support chat</h2>
                <span className="pill">Bot active</span>
              </div>

              <div className="metric-row">
                <div className="metric-card">
                  <div className="metric-label">Active users</div>
                  <div className="metric-value">{dashboardStats.activeUsers.toLocaleString()}</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Booked</div>
                  <div className="metric-value">{dashboardStats.bookedConsultations}</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Avg. reply</div>
                  <div className="metric-value">{dashboardStats.avgResponseTime}</div>
                </div>
                <div className="metric-card">
                  <div className="metric-label">Conversion</div>
                  <div className="metric-value">{dashboardStats.conversionRate}</div>
                </div>
              </div>
            </div>

            <div className="panel-section">
              <div className="chat-window">
                <div className="chat-body">
                  {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                      {msg.text}
                    </div>
                  ))}
                </div>

                <div className="quick-replies">
                  {quickReplies.map((item) => (
                    <button
                      key={item}
                      className="quick-reply"
                      onClick={() => setInput(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="input-bar">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSend();
                    }}
                    className="text-input"
                    placeholder="Type your message..."
                  />
                  <button className="primary-btn" onClick={handleSend}>Send</button>
                </div>
              </div>
            </div>
          </section>

          <aside className="right-panel">
            <div className="card-stack">
              <div className="profile-card">
                <div className="profile-header">
                  <img
                    className="avatar"
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
                    alt="Customer profile"
                  />
                  <div>
                    <h3>Priya Sharma</h3>
                    <div className="rating">⭐ 4.9 customer sentiment</div>
                  </div>
                </div>

                <div className="mini-card">
                  <strong>Current need:</strong> Career clarity and job stability
                </div>
              </div>

              <div className="profile-card">
                <div className="section-head">
                  <h3>Recommended astrologers</h3>
                  <span className="pill">Top picks</span>
                </div>

                <div className="card-stack">
                  {astrologers.map((astrologer) => (
                    <div key={astrologer.id} className="package-card">
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                        <img src={astrologer.image} alt={astrologer.name} className="avatar" style={{ width: 44, height: 44 }} />
                        <div>
                          <strong>{astrologer.name}</strong>
                          <div style={{ fontSize: 12, color: 'rgba(27,27,27,0.7)' }}>{astrologer.specialty}</div>
                          <div style={{ fontSize: 12, color: 'rgba(27,27,27,0.7)' }}>{astrologer.experience} • ⭐ {astrologer.rating}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <strong>₹{astrologer.price}</strong>
                        <div style={{ fontSize: 12, color: 'rgba(27,27,27,0.7)' }}>{astrologer.availability}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="profile-card">
                <div className="section-head">
                  <h3>Packages</h3>
                  <button className="ghost-btn">View all</button>
                </div>

                <div className="package-list">
                  {servicePackages.map((pkg) => (
                    <div key={pkg.name} className="package-card">
                      <div>
                        <strong>{pkg.name}</strong>
                        <div style={{ color: 'rgba(27,27,27,0.7)', marginTop: 6 }}>{pkg.description}</div>
                      </div>
                      <div style={{ fontWeight: 700, color: 'var(--terracotta-dark)' }}>{pkg.price}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="profile-card">
                <div className="section-head">
                  <h3>Open tickets</h3>
                  <button className="ghost-btn">Track</button>
                </div>

                <div className="ticket-list">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="ticket-item">
                      <div>
                        <strong>{ticket.id}</strong>
                        <div style={{ color: 'rgba(27,27,27,0.7)', marginTop: 4 }}>{ticket.title}</div>
                        <div style={{ color: 'rgba(27,27,27,0.6)', fontSize: 12, marginTop: 6 }}>{ticket.updatedAt}</div>
                      </div>
                      <span className={`badge ${ticket.status.toLowerCase().replace(/\s+/g, '')}`}>
                        {ticket.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default App;

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [installed, setInstalled] = useState(false);

  // Capture the browser's install prompt
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    const onInstalled = () => setInstalled(true);
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') {
      setInstalled(true);
    }
    setInstallPrompt(null);
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="brand-logo" aria-label="DomisLink logo">
          <span>D</span>
        </div>
        <div className="brand-name">
          <h1>DomisLink International Services</h1>
          <p className="tagline">Your Trusted Logistics Partner</p>
        </div>
      </header>

      {/* Hero / Install prompt */}
      <section className="hero">
        <p className="hero-text">
          Fast, reliable international courier and logistics services — delivered to your door.
        </p>
        {!installed && installPrompt && (
          <button className="install-btn" onClick={handleInstall}>
            📲 Install App
          </button>
        )}
        {installed && (
          <p className="installed-msg">✅ App installed successfully!</p>
        )}
      </section>

      {/* Contact / Business Info */}
      <section className="contact-section" id="contact" aria-label="Contact information">
        <h2>Contact Us</h2>
        <ul className="contact-list">
          <li>
            <span className="contact-icon" aria-hidden="true">📍</span>
            <address>
              19 Powerline, Asiwaju Dada, Lagos, Nigeria
            </address>
          </li>
          <li>
            <span className="contact-icon" aria-hidden="true">📞</span>
            <a href="tel:+2349049837474">
              +234 904 983 7474
            </a>
          </li>
        </ul>
      </section>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} DomisLink International Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

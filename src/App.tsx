import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import ProductTour from './pages/ProductTour';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Signup from './pages/Signup';
import Success from './pages/Success';
import VsZendesk from './pages/VsZendesk';
import VsFreshdesk from './pages/VsFreshdesk';
import VsServiceNow from './pages/VsServiceNow';
import CookieConsent from './components/CookieConsent';
import { usePageTracking } from './hooks/usePageTracking';
import './index.css';

function AppContent() {
  // Track page visits automatically on route changes
  usePageTracking();

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="features" element={<Features />} />
          <Route path="product-tour" element={<ProductTour />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup/success" element={<Success />} />
          <Route path="vs-zendesk" element={<VsZendesk />} />
          <Route path="vs-freshdesk" element={<VsFreshdesk />} />
          <Route path="vs-servicenow" element={<VsServiceNow />} />
        </Route>
      </Routes>
      <CookieConsent />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;

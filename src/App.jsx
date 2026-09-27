import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Dedicated Individual Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import RolesPage from './pages/RolesPage';
import ProcessPage from './pages/ProcessPage';
import WhyUsPage from './pages/WhyUsPage';
import ExperiencePage from './pages/ExperiencePage';
import AboutPage from './pages/AboutPage';
import HiringRequestPage from './pages/HiringRequestPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import DisclaimerPage from './pages/DisclaimerPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Landing Route */}
          <Route index element={<Home />} />

          {/* Dedicated Individual Section Pages */}
          <Route path="services" element={<ServicesPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          <Route path="roles" element={<RolesPage />} />
          <Route path="process" element={<ProcessPage />} />
          <Route path="hiring-process" element={<Navigate to="/process" replace />} />
          <Route path="why-us" element={<WhyUsPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="request-hiring" element={<HiringRequestPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="disclaimer" element={<DisclaimerPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

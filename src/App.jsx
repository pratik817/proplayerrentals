import React from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { HomePage } from './pages/HomePage';
import { Cricket } from './pages/cricket';
import { Football } from './pages/football';
import { Tennis } from './pages/tennis';
import { Swimming } from './pages/Swimming';
import { Trekking } from './pages/trekking';
import { Cycling } from './pages/cycling';
import { ContactPage } from './pages/ContactPage';
import { Payment } from './pages/Payment';
import { Review } from './pages/Review';
import { FAQ } from './pages/faq';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/cricket" element={<Cricket />} />
      <Route path="/football" element={<Football />} />
      <Route path="/tennis" element={<Tennis />} />
      <Route path="/swimming" element={<Swimming />} />
      <Route path="/trekking" element={<Trekking />} />
      <Route path="/cycling" element={<Cycling />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/Review" element={<Review />} />
      <Route path="/FAQ" element={<FAQ />} />
    </Routes>
  );
}

export default App;

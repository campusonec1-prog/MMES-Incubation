import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Incubation from './Pages/Incubation';
import Facilities from './Pages/Facilities';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout>
            <About />
          </MainLayout>
        } />
        <Route path="/contact" element={
          <MainLayout>
            <Contact />
          </MainLayout>
        } />
        <Route path="/incubation" element={
          <MainLayout>
            <Incubation />
          </MainLayout>
        } />
        <Route path="/facilities" element={
          <MainLayout>
            <Facilities />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;


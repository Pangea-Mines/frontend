import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home               from './pages/Home';
import ResourceEvaluation from './pages/ResourceEvaluation';
import LaboratoryTesting  from './pages/LaboratoryTesting';
import MinePlanning       from './pages/MinePlanning';
import Environmental      from './pages/Environmental';
import ProjectDesign      from './pages/ProjectDesign';
import Permits            from './pages/Permits';
import Commissioning      from './pages/Commissioning';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ paddingTop: 52 }}>
        <Routes>
          <Route path="/"                    element={<Home />} />
          <Route path="/resource-evaluation" element={<ResourceEvaluation />} />
          <Route path="/laboratory"          element={<LaboratoryTesting />} />
          <Route path="/mine-planning"       element={<MinePlanning />} />
          <Route path="/environmental"       element={<Environmental />} />
          <Route path="/project-design"      element={<ProjectDesign />} />
          <Route path="/permits"             element={<Permits />} />
          <Route path="/commissioning"       element={<Commissioning />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

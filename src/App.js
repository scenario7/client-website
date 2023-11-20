import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';

import Error404 from './pages/Error404';
import CustomersPage from './pages/CustomersPage';
import ContactPage from './pages/ContactPage';
function App() {
  return (
    <div className="App bg-stone-900 overscroll-none">
      <Router>
          <Routes>
          <Route exact path='/client-website' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/customers' element={<CustomersPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<Error404 />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;

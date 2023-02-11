import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Books from './components/Books';

import Nav from './components/Nav';
import Category from './components/Category';

function App() {
  return (
    <>
      <Router>
        <div className="App">

          <Nav />
          <main className="container">
            <Routes>
              <Route exact path="/" element={<Books />} />

              <Route path="/Category" element={<Category />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;

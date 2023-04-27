import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Navbar, Checkout, SearchResults, ProductPage } from './components';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Explore from './pages/explore';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
      </Routes>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home';
import Explore from './pages/explore';
import Subject from './pages/subject';
import Topic from './pages/topic';
import Article from './pages/article';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='learn/:subject' element={<Subject />} />
        <Route path='learn/:subject/:topic' element={<Topic />} />
        <Route path='learn/:subject/:topic/:subtopic' element={<Article />} />

        {/**TODO: implement it to be subject/topic or subject/topic/subtopic */}
        <Route path='learn/:name' element={<Article />} />
      </Routes>
    </Router>
  )
}

export default App
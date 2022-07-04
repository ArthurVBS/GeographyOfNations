import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Search from './pages/search'

const MyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  )
}

export default MyRoutes

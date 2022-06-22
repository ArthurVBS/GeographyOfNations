import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Search from './pages/search'
import SearchByLang from './pages/searchByLang'
import SearchByRegion from './pages/searchByRegion'

const MyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />}></Route>
    </Routes>
  )
}

export default MyRoutes

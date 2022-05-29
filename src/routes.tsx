import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Search from './pages/search'
import Contact from './pages/contact'
import SearchByName from './pages/searchByName'
import SearchByLang from './pages/searchByLang'
import SearchByRegion from './pages/searchByRegion'

const MyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />}></Route>
      <Route path='/search/name' element={<SearchByName />}></Route>
      <Route path='/search/lang' element={<SearchByLang />}></Route>
      <Route path='/search/region' element={<SearchByRegion />}></Route>
      <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default MyRoutes

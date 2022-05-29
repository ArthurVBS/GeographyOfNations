import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import SearchByName from './pages/searchByName'
import SearchByRegion from './pages/searchByRegion'

const MyRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search'>
        <Route path='/search/name' element={<SearchByName />}></Route>
        <Route path='/search/region' element={<SearchByRegion />}></Route>
      </Route>
    </Routes>
  )
}

export default MyRoutes

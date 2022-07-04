import { Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Search from './pages/search'

const MyRoutes: React.FC = () => {
  const PATH = 'GeographyOfNations' // vite.config.ts

  return (
    <Routes>
      <Route path={PATH + '/'} element={<Home />} />
      <Route path={PATH + '/search'} element={<Search />} />
    </Routes>
  )
}

export default MyRoutes

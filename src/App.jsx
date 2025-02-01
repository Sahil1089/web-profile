import { useState } from 'react'
import { lazy ,Suspense} from 'react'


import './style/app.scss'

import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
const Home = lazy(()=>import('./Pages/Home')) ;
const Contact = lazy(()=>import('./Pages/Contact'));
const Education = lazy(()=>import('./Pages/Education'))

const Skill = lazy(()=>import('./Pages/Skill'))

const Work = lazy(()=>import('./Pages/Work'))


import Loader from './Pages/Loader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


<Router>

  {/* adding lazy loading */}
  <Suspense fallback={<Loader/>}>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/education' element={<Education/>}/>
  <Route path='/work' element={<Work/>}/>
  <Route path='/skills' element={<Skill/>}/>


</Routes>
</Suspense>
</Router>
    
    </>
  )
}

export default App

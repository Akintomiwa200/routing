
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import Content from './component/Content'
import Shop from './component/Shop';
import Work from './component/Work';

function App() {


  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path="/work" element={<Work/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/content" element={<Content/>} />

          
        </Routes>
      </BrowserRouter>
        

      
    </>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import RestView from './Pages/RestView';
import Home from './Pages/Home';

function App() {
  return (
    <div >
      
      <Header />
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Restaurant-view/:id' element={<RestView/>}></Route>
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

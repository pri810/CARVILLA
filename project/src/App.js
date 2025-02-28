import logo from './logo.svg';
import './App.scss';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import ServiceTable from './component/ServiceTable';
import FeaturedTable from './component/FeaturedTable';
import Search from './component/Search';
import AboutUs from './component/Aboutus';

function App() {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const style ={
      header:{backgroundcolor:'cornflowerblue', color:'white', display:'flex'},
       a:{
          textDecoration:"none"
       },
       link:{
          textDecoration:"none"
       }
     }
  return (

    <div className="App">
      {/* <Header/> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/create-profile" element={<ServiceTable />} /> */}
          <Route path="/service" element={<ServiceTable/>}/>
          <Route path="/featured-cars" element={<ServiceTable/>}/>
          <Route path="/new-cars" element={<ServiceTable/>}/>
          <Route path="/brands" element={<ServiceTable/>}/>
          <Route path="/Aboutus" element={<AboutUs/>}/>
          <Route path="/Create Profile" element={<ServiceTable/>}/>
          <Route path="/CarSection" element={<FeaturedTable/>}/>
          <Route path="/search/:query" element={<Search />}/>
        </Routes>
      </div>
      <a className="floating" onClick={goToBtn}>
        <div className="arrow">/\</div>
    </a>
      <Footer/> 
    </div>
  );
}

export default App;

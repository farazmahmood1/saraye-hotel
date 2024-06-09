import './App.css';
import Footer from './Components/Body/Footer';
import Header from './Components/Body/Header';
import CheckInTable from './Components/HeroSection/CheckInTable';
import Hero from './Components/HeroSection/Hero';
import Info from './Components/HeroSection/Info';
import Menu from './Components/HeroSection/Menu';
import PhotoSlider from './Components/HeroSection/PhotoSlider';
import Rooms from './Components/HeroSection/Rooms';

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      {/* <CheckInTable/> */}
      <Info/>
      <Rooms/>
      <PhotoSlider/>
      <Menu/>
      <Footer/>
    </div>
  );
}

export default App;

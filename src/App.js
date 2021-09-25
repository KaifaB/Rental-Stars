import './App.css';

//Components
import Header from './components/Header';
import Slider from './components/Slider';
import HomeSlider from './components/HomeSlider';
//import Info from './components/Info';
import Footer from './components/Footer';
import Menu from "./components/Menu"

//Data
import { SliderData } from './data/SliderData';
import { FreegoData } from './data/FreegoData';
import { RazorData } from './data/RazorData';
import { NanrobotData } from './data/NanrobotData';
import { FAQsData } from './data/FAQsData';

//Pages
import Buy from './pages/Buy';
import HomePage from './pages/HomePage';
import Rent from './pages/Rent';
import Specs from './pages/Specs.js';
import About from './pages/About';
import CheckOut from './pages/CheckOut';
import FAQs from './pages/FAQs';
import { Cart } from './pages/Cart';

//Dependencies 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { RazorText } from './data/RazorData';
import { FreegoText } from './data/FreegoData';
import { NanrobotText } from './data/NanrobotData';

//Props (colors)
const mainColor = 'coral';
const FreegoColor = '#FE6C00';
const RazorColor = '#DDA03F';
const NanrobotColor = '#ff3f3f';


function App() {
  return (
    <div>
      <Router>
        <Route component={Header} />
        <Route component={Menu} />
        <Route path="/" exact>
          <HomePage pictures={
            <HomeSlider slides={SliderData} color={mainColor}/>
          } />
        </Route>
        <Route path="/buy/freego">
          <Buy
            info={FreegoText}
            pictures={
            <Slider slides={FreegoData} color={FreegoColor} />
          } />
        </Route>
        <Route path="/buy/razor">
          <Buy
            info={RazorText}
            pictures={
            <Slider slides={RazorData} color={RazorColor} />
          } />
        </Route>
        <Route path="/buy/nanrobot">
          <Buy
            info={NanrobotText}
            pictures={
            <Slider slides={NanrobotData} color={NanrobotColor} />
          } />
        </Route>
        <Route path="/rent/razor">
          <Rent
            info={RazorText}
            pictures={
            <Slider slides={RazorData} color={RazorColor} />
          } />
        </Route>
        <Route path="/rent/freego">
          <Rent
            info={FreegoText}
            pictures={
            <Slider slides={FreegoData} color={FreegoColor} />
          } />
        </Route>
        <Route path="/rent/nanrobot">
          <Rent
            info={NanrobotText}
            pictures={
            <Slider slides={NanrobotData} color={NanrobotColor} />
          } />
        </Route>
        <Route path='/cart'>
          <Cart
            Freego={FreegoData}
            Razor={RazorData}
            Nanrobot={NanrobotData}
          />
        </Route>
        <Route path='/specs'>
          <Specs />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/checkout'>
          <CheckOut />
        </Route>
        <Route path='/FAQs'>
          <FAQs data={FAQsData}/>
        </Route>
        <Route component={Footer} />
      </Router>
    </div>
  )
}

export default App;

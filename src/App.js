import './App.css';
import Member from './Home/Component/Member';
import Home from './Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Deep_cleaning from './Service/Component/Deep_cleaning';
import Pest_control from './Service/Component/Pest_control';
import Home_appliances from './Service/Component/Home_appliances';
import Water_proofing from './Service/Component/Water_proofing';
import Interior_design from './Service/Component/Interior_design';
import Gardening from './Service/Component/Gardening';
import Safty_nates from './Service/Component/Safty_nates';
import Handy_man from './Service/Component/Handy_man';
import Security from './Service/Component/Security';
import Event_handeling from './Service/Component/Event_handeling';
import Book from './Component/Book/Book';
import ScrolltoTop from './Component/ScrollToTop/ScrollToTop';
import PayNow from './Component/PayNow/PayNow';
function App() {
  return (
    <>
      <Router>
      <ScrolltoTop>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/member' exact element={<Member />} />
          <Route path='/deepcleaning' exact element={<Deep_cleaning/>} />
          <Route path='/pestcontrols' exact element={<Pest_control/>} />
          <Route path='/homeapp' exact element={<Home_appliances/>} />
          <Route path='/waterproofing' exact element={<Water_proofing />} />
          <Route path='/interiordesign' exact element={<Interior_design/>} />
          <Route path='/gardening' exact element={<Gardening/>} />
          <Route path='/saftynets' exact element={<Safty_nates/>} />
          <Route path='/handyman' exact element={<Handy_man/>} />
          <Route path='/security' exact element={<Security/>} />
          <Route path='/event' exact element={<Event_handeling/>} />
          <Route path='/book' exact element={<Book/>} />
          <Route path='/pay' exact element={<PayNow/>} />
        </Routes>
        </ScrolltoTop>
      </Router>
    </>
  );
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import Service from './Pages/Service/Service';
import Service_Details from './Pages/Service/Service_Details/Service_Details';

import Terms_Condition from './Pages/Static_Page/Terms_Condition/Terms_Condition'
import Privacy_policy from './Pages/Static_Page/Privacy_Policy/Privacy_policy';



function App() {


  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path='/service' element={<Service/>}/>
        <Route path="/service_details/:postId" element={<Service_Details />} />
        <Route path='/terms_and_condition' element={<Terms_Condition/>} />
       <Route path='/privacy_policy' element={<Privacy_policy/>} />
      </Routes>
    </>
  )
}

export default App

import {Header} from './MyComponents/Header' 
import {Body} from './MyComponents/Body'
import {Footer} from './MyComponents/Footer'
import { Donate } from './MyComponents/Donate';
import {Range} from './MyComponents/Range';
import {Thank} from './MyComponents/Thank';
import DonationForm from './pages/DonationForm';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import { useState, useEffect } from 'react';
// import React from 'react';
// import {axios} from axios
// import {format} from date-fns
// const baseurl = "http://localhost:5000"
// function App() {
// const [first_name,setFirst_name ] = useState("")
// const [second_name,setSecond_name ] = useState("")
// const [dob,setDob ] = useState("")
// const [gender,setGender] = useState("")
// const [phone_number,setPhone_number ] = useState("")
// const [email,setEmail ] = useState("")
// const [pan_number,setPan_number ] = useState("")
// const [address,setAddress ] = useState("")
// const [state,setState ] = useState("")
// const [city,setCity ] = useState("")
// const [pincode,setPincode ] = useState("")
// const [nationality,setNationality ] = useState("")
// const [trs,setTrs ] = useState("")


// const handleChange = e => {
//   setFirst_name(e.target.value);
// }

// const handleSubmit = e => {
//   e.preventDefault();
//   console.log(first_name)
//}






import React from 'react'

const App = () => {
  return (
    <div>
    <>
    <Router>
    <Header />
    <Switch>
    <Route exact path="/" render={()=> {
      return(
        <>
        <Body />
    <Donate />
    </>)
    }}>
          </Route>
          <Route exact path = "/donationForm">
            <DonationForm />
          </Route>
         
          <Route exact path= "/thank">
            <Thank/>
          </Route>
          
        </Switch>

    
    <Footer />
    </Router>
    </>

    </div>
  )
}

export default App 



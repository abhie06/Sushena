import React, {useState} from 'react'
import { PersonalForm } from '../components/DonationForm/PersonalForm';
import { Range } from '../components/DonationForm/Range';
function DonationForm(){
  const [details, setdetails] = useState(0);
  const FormTitles =  ["Personal Details", "Range"]
  const PageDisplay = () => {
    if(details === 0){
        return <PersonalForm />;  
    }
    else {
        return <Range />;
    }
  };
return (
  <div className='form' >
    <div className='progressbar'> 
    <div className='form-container'>
      <div className='header'>
        <h1>
          {FormTitles[details]}
        </h1>
      </div>
      <div className='body'> 
      </div>
      <div className='footer'>

      </div>
      <button onClick={() => {
        setPage((gPage) => gPage + 1);
      }}> Next </button>

    </div>

    </div>
  </div>
    )
}

export default DonationForm
import React from 'react'

export const PersonalForm = () => {
  return (
      <div>
        <form onSubmit={handleSubmit}>
  <label htmlFor='first_name'>
    First Name: <br />
    <input type="text" name="first_name" id = "first_name"   placeholder='Alexander'/>
  </label><br/>
  <label htmlFor='second_name'>
    Second Name : <br/>
    <input type = "text" name='second_name' id = "second_name"  placeholder='Smith' />
  </label><br/>
  <label htmlFor='dob'>
    Date of Birth : <br/>
    <input type = "date" name='dob' id = 'dob' />
  </label>
  <label htmlFor='gender'>
    Gender : <br/>
    <input type = "text" name='gender' id= 'gender' placeholder='Female' />
  </label><br/>
  <label htmlFor='phone_number'>
    Phone Number : <br/>
    <input type = "integer" name='phone_number' id = 'phone_number'  placeholder='9619990608' />
  </label>
  <label htmlFor='email'>
    Email ID : <br/>
    <input type = "=email" name='email' id = 'email'  placeholder='abhishek@net.com' />
  </label><br/>
  <label htmlFor='pan_number'>
    Pan Number : <br/>
    <input type = "text" name='pan_number' id = 'pan_number'  placeholder='ADOPT268192'/>
  </label><br/>
  <label htmlFor='address'>
    Address : <br/>
    <input type = "text" name='address' id = 'address' />
  </label><br/>
  <label htmlFor='state'>
    State : <br/>
    <input type = "text" name='state' id = 'state' placeholder='Maharastra' />
  </label><br/>
  <label htmlFor='city'>
    City : <br/>
    <input type = "=text" name='city' id = 'city' placeholder='Mumbai'/>
  </label>
  <label htmlFor='pincode'>
    Pincode : <br/>
    <input type = "text" name='pincode' id = 'pincode' placeholder='000111' />
  </label><br/>
  <label htmlFor='nationality'>
    Nationality : <br/>
    <input type = "text" name='nationality' id = 'nationality' placeholder='Nationality'/>
  </label><br/>
  <label htmlFor='trs'>
    Tax Resident Status : <br/>
    <input type = "text" name='trs' id = 'trs' />
  </label><br />

  <input type="submit" value="Submit" />
</form>
    </div>
  )
}


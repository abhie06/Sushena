import React from 'react'
import './myStyles.css'

export const Range = () => {
  return (
    <>
    <div className='h1'>
        <h1> DONATION FORM</h1>
    </div>
    <div className='h3'>
        <h3>Lactating Mothers</h3>
    </div>
    <div className='p'>
        <p>A human milk bank, breast milk bank or lactarium is a service that collects, screens, processes, and dispenses by prescription human milk 
donated by nursing mothers who are not biologically related to the recipient infant (Usually preterm babies)</p>
    </div>
    <div className='wholeRange'>
        <div>
        <input type="radio" value="1" name="1" /> 1 Day - Rs 200<br/>
        </div>
        <div className='two'>
        <input type="radio" value="2" name="2" /> 2 Days - Rs 400<br/>
        </div>
        <div className='three'>
        <input type="radio" value="3" name="3" /> 1 Week - Rs 1400<br/>
        </div>
        <div className='four'>
        <input type="radio" value="4" name="4" /> 2 Week - Rs 2800<br/>
        </div>
        <div className='five'>
        <input type="radio" value="5" name="5" /> 1 Month - Rs 6000<br/>
        </div>
        <div className='five'>
        <input type = "submit" />
        </div>




    </div>
    </>
  )
}

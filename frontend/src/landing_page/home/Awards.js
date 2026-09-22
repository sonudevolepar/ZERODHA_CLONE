import React from 'react';

function Education() {
  return (
   <div className='container mt-5'>
    <div className='row '>
      <div className='col-6'>
       <img src='media/image/largestBroker.svg'></img>
      </div>
      <div className='col-6 p-5 mt-5'></div>
      <h1>Largest stock broker in India</h1>
      <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
      <div className='row'>
        <div className='col-6 p-5'><ul>

        <li>
          <p>Futures and Options</p>
        </li>

        <li>
          <p>Commodity derivatives</p> 
        </li>

        <li>
          <p>Curreny derivartives</p>
        </li>

      </ul></div>
        <div className='col-6 p-5'><ul>

        <li>
          <p>Stock mutual funds</p>
        </li>

        <li>
          <p>Direct mutal funds</p> 
        </li>

        <li>
          <p>Bond and govt. Securities</p>
        </li>

      </ul>
      </div>
      </div>
      <img src='media/image/pressLogos.png'style={{width:"90%"}}/>
      
    </div>
   </div>

  );
}
export default Education;
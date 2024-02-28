import React, { Component } from 'react'
import '../../src/App.css'


export class MainPage extends Component {
  render() {
    const listStyle = {
        listStyleType: 'none', 
        paddingLeft: '0' 
      };
  
      const listItemStyle = {
        marginBottom: '15px' 
      };
      const listItemStyleA = {
        marginBottom: '15px' 
      };
  
      const tickStyle = {
        marginRight: '5px' 
    
      };
      const listItemStyle1= {
        marginBottom: '15px', 
        color: 'lightgray' 
      };
  
      const tickStyle1 = {
        marginRight: '5px', 
        color: 'lightgray'
      };
      const listStyle2 = {
        listStyleType: 'none',
        paddingLeft: '0' ,
       marginBottom:'15px'
        
      };
      const spanStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '24px',
    
      };
      const spanStyle2 = {
        color: '#f66c3b',
         cursor: 'pointer'
      };
      const buttonStyle = {
        fontSize: '18px',
        color: '#FFFFFF', 
        background: '#F66C3B', 
        padding: '16px 32px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        marginTop: '100px'
        
      };
      const arrowStyle = {
        marginLeft: '5px'
      };
      const spanStylebottom = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        fontWeight: 500,
        fontSize: '12px',
        lineHeight: '16px',
        marginTop: '60px'
      };
    
    return (
      <>
<div className="container">
    <div className="left-page">
        <h4>Premium</h4>
        <h3>Data Structures and Algorithms (Python) + Placement Prepration</h3>
         <div className='inside'> Everything included in Combo plan along with Placement prepration features (Duration -8 months)</div>
         <div className='fees'>
         <div className='fees3'>
             <div className='fees4'>
                 <div className='fees5'>Curriculam</div>
                <div className='fees6'>View full curriculam</div>
  
             </div>
<div>
    <ul style={listStyle}>
        <li style={listItemStyle}>
          <span style={tickStyle}>&#10003;</span> Introduction to Programming
        </li>
        <li style={listItemStyle}>
          <span style={tickStyle}>&#10003;</span> Data Structure and Algorithms
        </li>
      
    
        <li style={listItemStyle1}>
          <span style={tickStyle1}>&#10007;</span> Web development
        </li>
        <li style={listItemStyle1}>
          <span style={tickStyle1}>&#10007;</span> Interview preparation
        </li>
        </ul>
</div>
         <div className='rup' >
             <div className='rup1'> <span>&#8377;</span> 15,399
            <div className='srup'><span>&#8377;</span><span >21, 999</span> </div>
            </div>
  <div className='rup2'>EMI starting at <span>&#8377;</span>2,566 /m</div>
         </div>

    <div>
     <p> Additional perks</p>
    <ul style={listStyle2}>
        <li style={listItemStyleA}>1:1 Expert Doubt support</li>
        <li style={listItemStyleA}>90 Days course pause</li>
        <li style={listItemStyleA}>1:1 session with Industry Experts - 5</li>
        <li style={listItemStyleA}>Spotlight HIRIST to Elevate your career</li>
        <li style={listItemStyleA}>2 months Free Course Extension</li>
        <li style={listItemStyleA}>Curated Interview Problems - 100</li>
        <li style={listItemStyleA}>Mock Test Series for Product Companies</li>
      </ul>
          </div>
          </div>
          </div>
    </div>

      <div className="right-page"> 
      <div className='rightbox'>
      <span style={spanStyle}>
        <span>Select a batch</span>
        <span style={spanStyle2} >View all batches</span>
      </span>
      </div>

<div className='batch'>
    <div > 
    <div className='rec'>Recommended</div>
    <div className='batch1'>
    <div className='rup' >
  <div className='rup3'> <span>&#8377;</span> 15, 399/-
  <div className='srup'><span>&#8377;</span><span >21, 999/-</span>
  </div>
  </div>
  <div className='rup4'>30% off </div>
  </div>
  <div>Batch starts : 26 Feb'24</div>
  <div>EMI :<span>&#8377;</span>2,567/month </div>
    </div>
    
    </div >
    <div className='mar' > 
    <div className='batch2'>  
  <div className='rup6'> <span>&#8377;</span> 21, 999/- </div>
  <div>Batch starts : 1 Apr'24</div>
  <div>EMI :<span>&#8377;</span>3, 667/month </div>
    </div>
    </div>
</div>

    
    <button style={buttonStyle}>
      Proceed to payment
      <span style={arrowStyle}>➔</span>
    </button>
    
    <div className='bottom'>
      <span style={spanStylebottom}>
        <span>No Cost EMI on all major credit cards & No cost Cardless EMI</span>
        <span>7-day money back Guarantee</span>
      </span>
      </div>
      </div>
</div>
      </>
    )
  }
}

export default MainPage
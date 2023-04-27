import React from 'react'
import './Sidebardoc.css';
import { SidebardocData } from './SidebardocData';

function Sidebardoc() {
  return (
    <div className='Sidebardoc'>
      <ul className='SidebardocList'>
      {SidebardocData.map((val,key)=>{
        return(
            <li key={key} 
                className='row'
                id={window.location.pathname == val.link ? 'active' : ''}
                onClick={()=>{window.location.pathname = val.link}}
            >
            <div>{val.title}</div>
        </li>);
      })}
      </ul>
    </div>
  )
}

export default Sidebardoc

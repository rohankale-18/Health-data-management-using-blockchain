import React from 'react';
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <ul className='SidebarList'>
        {SidebarData.map((val,key)=>{
          return(
            <a>
            <li key={key} 
            className='row'
            id={window.location.pathname == val.link ? 'active' : ''}
            >
              <Link to={val.link}>
                <div>{val.title}</div>
              </Link>
            </li>
        </a>
          );
        })}
      </ul>
    </div>
  )
}

export default Sidebar;

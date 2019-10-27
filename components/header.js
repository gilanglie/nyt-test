import React from 'react'
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {props} = this;
    return (
      <header>
        <a class="menu-icon" style={{float: 'left',fontSize: '32px',margin: '12px'}}><i class="ion-navicon"></i></a>
        <a class="logo" href="#"><img src="../static/assets/template/images/logo-white.png" alt="Logo"/></a>
        
        <div class="right-area">
          <form class="src-form">
            <button type="submit"><i class="ion-search"></i></button>
            <input type="text" placeholder="Search here"/>
          </form>
        </div>
        
        <Menu>
        <ul className="main-menu" id="main-menu"
            style={{backgroundColor: 'black'}}
        >
          <li style={{display: 'block'}}>      
            <Link href="/">
            Home
            </Link>
          </li>
          {props.sections.map(section => {
              return (
                <li style={{display: 'block'}}>
                <Link href={{pathname: "/detail", query: {section : section.section} }} >
                  <a>
                    {section.display_name}
                  </a>
                </Link>
                </li>
              )
          })}
          <li>
          </li>
        </ul>
        </Menu>
        
        
        <div class="clearfix"></div>
        

      </header>
    )
  }
};


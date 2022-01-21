import React, { Component } from 'react';

export default class NavMenu extends Component {

  constructor (props){
      super(props);
      this.state = {

      }
  }   
                  

  render() {
    return (
      <div>
         <header>
            <nav className="navbar nav-expand-md navbar-dark bg-dark">
               <div>
                 <h2 className="logo">StaySafe</h2>
               </div>
            </nav>
         </header>
      </div>
    );
  }
}

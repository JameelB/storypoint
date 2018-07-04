import React from 'react';
import { Masthead } from 'patternfly-react';
import logo from './test.png';

class NavBar extends React.Component {
  render() {
    return( 
      <div className="">
        <Masthead
          titleImg={logo}
          title="Storypoint.me"
          navToggle={false}
          href="/"
        />
      </div>
    );
  }
}
  
export default NavBar;
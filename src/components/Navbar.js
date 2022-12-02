import React from "react";
import { Menu } from "semantic-ui-react";


const Navbar = () => (
    
      <Menu className="main">
        <Menu.Item>
          <img src="/logo.png" alt="logo" />
        </Menu.Item>
        <Menu.Item>Features</Menu.Item>
        <Menu.Item>Testimonials</Menu.Item>
        <Menu.Item>Sign-in</Menu.Item>
      </Menu>

);

export default Navbar;

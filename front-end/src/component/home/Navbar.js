import React from 'react';
import '../../assets/css/component/navbar.css';

const Navbar = (props) => {
  return (
    <div id="navbar">
    	<div className="kiri">	
			<span className="i-brand"><i className="fab fa-twitter"></i></span>
			<i className="fa fa-home i-search"></i>
			<input type="text" name="search" placeholder="Search Twitter" />
    	</div>
    	<div className="kanan">
    		<span class="btn-menu btn-menu-login">Login</span>
    		<span class="btn-menu btn-menu-signup">SignUp</span>
    		<span class="side-menu">
    			<i class="fa fa-ellipsis-h"></i>
    		</span>
    	</div>
    </div>
  )
}

export default Navbar;
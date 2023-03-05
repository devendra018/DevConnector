import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <a href='/profiles'>
          Developers
        </a>
      </li>
      <li>
        <a href='/posts'>
          Posts
        </a>
      </li>
      <li>
        <a href='/dashboard'>
        <i className='fas fa-user'/>{' '}
        <span className='hide-sm'>Dashboard</span>
        </a>
      </li>
      <li>
        <a onClick={logout} href='/login'>
          <i className='fas fa-sign-out-alt'/>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li><a href='/profiles'>Developers</a></li>
      <li><a href='/register'>Register</a></li>
      <li><a href='/login'>Login</a></li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
    <h1>
      <a href='/'><i className='fas fa-code'></i> DevConnector</a>
    </h1>
    { !loading && (<Fragment>{ isAuthenticated ? authLinks: guestLinks }</Fragment>) }
  </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);

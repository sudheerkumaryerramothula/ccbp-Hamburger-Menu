import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="hamburger-button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="menu-icon" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-icon"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="close-icon" />
            </button>
            <ul className="nav-link-list">
              <li className="link-item">
                <Link className="link-item" to="/" onClick={() => close()}>
                  <AiFillHome className="icon" />
                  <p className="link-content">Home</p>
                </Link>
              </li>
              <li className="link-item">
                <Link className="link-item" to="/about" onClick={() => close()}>
                  <BsInfoCircleFill className="icon" />
                  <p className="link-content">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)

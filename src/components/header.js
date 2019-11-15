import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div class="container">
      <div class="logo">
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
      <nav>
        <ul>
          <li>Link</li>
          <li>Link 2</li>
        </ul>
      </nav>
      <button class="hamburger" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

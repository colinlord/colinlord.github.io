import { Link } from "gatsby"
import React from "react"
import "./header.scss"

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        document.body.classList.toggle("modal-open")
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            })
      }
    )
  }

  render() {
    return (
      <header class="global">
        <div className="container">
          <div className="logo">
            <h1>
              <Link to="/">Colin Lord.com</Link>
            </h1>
          </div>
          <nav className={`${this.state.navBarActiveClass}`}>
            <ul>
              <li>Link</li>
              <li>Link 2</li>
            </ul>
          </nav>
          <button
            className="hamburger"
            type="button"
            onClick={() => this.toggleHamburger()}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </header>
    )
  }
}

export default Header

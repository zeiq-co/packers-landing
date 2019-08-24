import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"

import PackrsFrame from "../images/packrs.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem 0rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center", color: "rgb(51, 183, 96)" }}>PACKRS</h1>
    <p style={{ textAlign: "center", maxWidth: 440, fontSize: "1.5rem" }}>
      Deliver Anything , Anywhere
    </p>
    <a href="https://www.packrs.co/">
      <Button>Download Our App</Button>
    </a>
    <div style={{ margin: 20, position: "relative" }}>
      <img
        src={PackrsFrame}
        alt="outlines of shapes and confetti in the background "
        style={{
          width: "850px",
          top: 0,
        }}
      />
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

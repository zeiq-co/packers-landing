import React from "react"

import { COLORS } from "../styles/constants"

const SectionHeader = ({ title, description }) => (
  <React.Fragment>
    <h2 style={{ color: "rgb(51, 183, 96)" }}>{title}</h2>
    <p style={{ color: COLORS.mediumGray }}>{description}</p>
  </React.Fragment>
)

export default SectionHeader

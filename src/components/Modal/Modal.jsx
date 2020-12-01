import React, {Component} from "react"

import css from "../Modal/Modal.module.css"

class Modal extends Component {

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose()
    }
  }

  render() {
    return (
      <div className={css.Overlay} onClick={this.props.onClose}>
        <div className={css.Modal}>{this.props.children}</div>
      </div>
    )
  }
}

export default Modal

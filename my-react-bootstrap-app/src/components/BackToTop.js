import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

class BackToTopButton extends Component {
  render() {
    return (
      <div className="back-to-top">
        <button onClick={this.scrollToTop}><FontAwesomeIcon icon={faArrowUp} size="2x" color="blue" /></button>
      </div>
    );
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // For smooth scrolling, if supported by the browser
    });
  }
}

export default BackToTopButton;

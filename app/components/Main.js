import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../main.css';

var Main = React.createClass({
  render: function(){
    return(
      <div className='main-container' >
        <h1 >IdoS</h1>
        <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Main;

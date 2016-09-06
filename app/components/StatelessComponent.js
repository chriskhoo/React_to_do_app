import React from 'react';
let PropTypes = React.PropTypes;
import styles from '../styles';

const StatelessComponent = (props) =>
(<button onClick={props.update}>
  {props.txt} - {props.val}
</button>);

export default StatelessComponent;

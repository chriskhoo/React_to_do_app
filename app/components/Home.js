import React from 'react';
import * as ReactRouter from 'react-router';
let Link = ReactRouter.Link;
import TextBox from './TextBox';
import FormContainer from '../containers/FormContainer'

class Home extends React.Component{
  render(){
    return(
      <div>
        <FormContainer />
      </div>
    );
  }
};

export default Home;

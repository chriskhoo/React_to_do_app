import React from 'react';

const TextBox = (props) => {
  return (
    <form onSubmit = {props.onSubmitTask}>
      <div className="col-md-8 col-md-offset-2 input-group boxShadow">
        <input
        type="text"
        className="form-control"
        placeholder="What needs to be done"
        onChange = {props.onUpdateTask}
        value = {props.inputText}
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">List it!</button>
        </span>
      </div>
    </form>
  );
};

export default TextBox;

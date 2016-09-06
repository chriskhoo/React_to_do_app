import React from 'react';
let PropTypes = React.PropTypes;

const Task = (props) => {
  var circleClass,
      textClass;

  if(props.taskCompleted){
    circleClass = "greenCircle fullGreenCircle";
    textClass = "completedTask";
  } else{
    circleClass = "greenCircle";
    textClass = "";
  }

return (
  <tr>
    <td>
      <div
      className={circleClass}
      onClick= {function(){props.onCompleteTask(props.task)}}
      ></div>
    </td>
    <td
      className= {textClass}>
    {props.taskName}</td>
    <td>
      <div
        className= "text-right delete"
        onClick= {function(){props.onDeleteTask( props.taskID)}}>
      X</div>
    </td>
  </tr>
);
}

Task.propTypes = {
  // taskName: PropTypes.array.isRequired
}

export default Task;

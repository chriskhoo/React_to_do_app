import React from 'react';
let PropTypes = React.PropTypes;

const ListFooter = (props) => {
  let allClass = "views ",
      activeClass = "views ",
      inactiveClass = "views ";

  if(props.viewMode === "Active"){
    activeClass = "selectedView"
  }
  else if(props.viewMode === "Inactive"){
    inactiveClass = "selectedView"
  }
  else{
    allClass = "selectedView"
  }

  let numTasks = props.tasks.filter( task => task.completed === false ).length;

  return (
    <div className="col-md-8 col-md-offset-2">
      <hr/>
      <div className="footerBar">
        <div> {numTasks} tasks left </div>
        <div className="footerViews">
          <div
            className= {allClass}
            onClick= {function(){props.onShowAll()}}
            >All</div>
          <div
            className= {activeClass}
            onClick= {function(){props.onShowActive()}}
            >Active</div>
          <div
            className= {inactiveClass}
            onClick= {function(){props.onShowInactive()}}
            >Completed</div>
        </div>
        <div
          className= "clearCompleted"
          onClick= {function(){props.onClearCompleted()}}
          >Clear Completed  </div>
      </div>
    </div>
  );
}

export default ListFooter;

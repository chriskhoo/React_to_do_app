import React from 'react';
import Task from './Task';

class ListOfToDoS extends React.Component{
  render(){
    let tasks = this.props.tasks.map( (task) => {
      if(
        this.props.viewMode === "All"||
        this.props.viewMode === "Active" && !task.completed ||
        this.props.viewMode === "Inactive" && task.completed
      ){
      return <Task key={task.id} taskName={task.taskName} onDeleteTask={this.props.onDeleteTask}
      taskID={task.id}
      taskCompleted={task.completed}
      task={task}
      onCompleteTask={this.props.onCompleteTask} />
    }
    })

    return(
      <div className="col-md-8 col-md-offset-2">
        <table className="table table-hover">
          <thead>
            <tr>
              <th className="col-md-1"></th>
              <th className="col-md-10"></th>
              <th className="col-md-1"></th>
            </tr>
          </thead>
          <tbody>
            {tasks}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ListOfToDoS;

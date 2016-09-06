import React from 'react';
import TextBox from '../components/TextBox';
import ListOfToDoS from '../components/ListOfToDoS';
import ListFooter from '../components/ListFooter';

class FormContainer extends React.Component{
  constructor(){
    super();
    this.state = {
      inputText: "",
      nextId: 4,
      tasks: [],
      viewMode: ""
    }
    this._handleUpdateTask = this._handleUpdateTask.bind(this);
    this._handleSubmitTask = this._handleSubmitTask.bind(this);
    this._handleDeleteTask = this._handleDeleteTask.bind(this);
    this._handleCompleteTask = this._handleCompleteTask.bind(this);
    this._handleShowActive = this._handleShowActive.bind(this);
    this._handleShowInactive = this._handleShowInactive.bind(this);
    this._handleShowAll = this._handleShowAll.bind(this);
    this._handleClearCompleted = this._handleClearCompleted.bind(this);
  }

  componentDidMount(){
    this.setState({
      tasks: [
        {id:1, taskName: "to do the todo", completed: false},
        {id:2, taskName: "to refine the todo", completed: false},
        {id:3, taskName: "eat dinner", completed: true},
      ],
      viewMode: "All"
    });
  }

  _handleUpdateTask(e){
    e.preventDefault();
    this.setState({
      inputText: e.target.value
    });
  }

  _handleSubmitTask(e){
    e.preventDefault();
    let newState = {
      // don't use push it returns the array length
      // use concat which returns the new array
      tasks: this.state.tasks.concat({
        id: this.state.nextId,
        taskName: this.state.inputText,
        completed: false
      }),
      inputText: "",
      nextId: this.state.nextId + 1
    };
    this.setState(newState);
  }

  _handleDeleteTask(taskID){
    const tasklist = this.state.tasks.filter( task => task.id !== taskID );
    this.setState({ tasks: tasklist });
  }

  _handleCompleteTask(taskObj){
    console.log("completed!");
    // create replica of tasks
    let tasklist = [...this.state.tasks];
    // get index of particular task
    const taskIndex = tasklist.indexOf( taskObj);

    // flip completed status of task
    const newTask = {
      id: taskObj.id,
      taskName: taskObj.taskName,
      completed: !taskObj.completed
    }

    // update the tasks
    tasklist.splice(taskIndex,1, newTask);

    // update the state
    this.setState({ tasks: tasklist });

  }

  _handleShowActive(){
    this.setState({
      viewMode: "Active",
    });
  }

  _handleShowInactive(){
    this.setState({
      viewMode: "Inactive"
    });
  }

  _handleShowAll(){
    this.setState({
      viewMode: "All",
    });
  }

  _updateDisplayTasks(){
    console.log("viewMode" + this.state.viewMode)
    if(this.state.viewMode === "Active"){ this._handleShowActive(); }
    else if (this.state.viewMode === "Inactive") { this._handleShowInactive() }
    else if (this.state.viewMode === "All") { this._handleShowAll() }
    else{ console.log("something fishy with viewModes") }
    console.log("displayTasks" + this.state.displayTasks)
  }

  _handleClearCompleted(){
    const tasklist = this.state.tasks.filter( task => task.completed === false );
    this.setState({ tasks: tasklist });
  }


  render(){

    if(this.state.tasks.length === 0){
      return(
        <div>
          <TextBox
          onSubmitTask = {this._handleSubmitTask} onUpdateTask={this._handleUpdateTask}
          inputText = {this.state.inputText}
          />
        </div>
      );
    }

    return(
      <div>
        <TextBox
        onSubmitTask = {this._handleSubmitTask} onUpdateTask={this._handleUpdateTask}
        inputText = {this.state.inputText}
        />
        <ListOfToDoS
        tasks={this.state.tasks}
        onDeleteTask = {this._handleDeleteTask}
        onCompleteTask = {this._handleCompleteTask}
        viewMode = {this.state.viewMode}
        />
        <ListFooter
        tasks={this.state.tasks}
        viewMode = {this.state.viewMode}
        onShowActive = {this._handleShowActive}
        onShowInactive = {this._handleShowInactive}
        onShowAll = {this._handleShowAll}
        onClearCompleted = {this._handleClearCompleted}/>
      </div>
    );
  }
};

export default FormContainer;

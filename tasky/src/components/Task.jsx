import React from 'react';
 const getPriorityStyle = (priority) => {
  switch (priority) {
    case 'High':
      return { color: 'black', fontWeight: 'bold', backgroundColor: 'red', borderRadius: '5px' };
    case 'Medium':
      return { color: 'black', fontWeight: 'bold', backgroundColor: 'orange', borderRadius: '5px' };
    case 'Low':
      return { color: 'black', fontWeight: 'bold', backgroundColor: 'green', borderRadius: '5px' };
    default:
      return {};
  }
}

const Task = (props) => {
        return (
          <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title" >{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className = "description"> {props.description}</p>
            <p style={getPriorityStyle(props.priority)}>
              {props.priority}
            </p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )

}


export default Task;

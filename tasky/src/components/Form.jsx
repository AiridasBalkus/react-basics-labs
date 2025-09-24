import React from "react";

const AddTaskForm = (props) => {

  return (
    <div>
      <form onSubmit={props.submit}>
            <label>
        Task title:
        <input type="text" name="title" required onChange={(event) => props.change(event)} placeholder="Enter task title" />
    </label>
    <br />
    <label>
        Due date:
        <input type="date" name="deadline" required onChange={(event) => props.change(event)} placeholder="Select due date"/>
    </label>
    <br />
    <label>
        Details:
        <input type="text" name="description" onChange={(event) => props.change(event)} placeholder="Enter task details" />
    </label>
    <br />
    <label>
        Priority:
    </label>
    <select
  name="priority"
  value={props.priority}
  onChange={props.change}
  required
  className="input-box"
>
  <option value="Low">Low</option>
  <option value="Medium">Medium</option>
  <option value="High">High</option>
</select>     
    <br /> 
    <input type="submit" value="Add Task" />
        </form>
    </div>
  )
};

export default AddTaskForm;

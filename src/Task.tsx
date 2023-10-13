import { Component, ReactNode, useState } from "react";
import { TaskMode } from "./types/Duty";

interface Props {
  taskId: string;
  name: string;
  mode: TaskMode;
}

class Task extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  taskId = this.props.taskId;
  name = this.props.name;
  mode = this.props.mode;

  state = {
    mode: this.mode,
  }

  handleChange(event: any) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event: any) {
    event.preventDefault();
  }

  render(): ReactNode {
    return <div id={'task-'+this.taskId}>
        <input
          type='text'
          id={'textbox-'+this.taskId}
          value={this.name}
          readOnly={this.mode === TaskMode.LOCKED}
          placeholder='Insert task name'
          onChange={this.handleChange}
        />
        <button
          className={this.state.mode !== TaskMode.ADD? 'hidden': ''}
        >
          Add
        </button>
        <button
          className={this.state.mode !== TaskMode.LOCKED? 'hidden': ''}
          // onClick={}
        >
          Edit
        </button>
        <button
          className={this.state.mode !== TaskMode.EDIT? 'hidden': ''}
        >
          Save
        </button>
        <button
          className={this.state.mode !== TaskMode.EDIT? 'hidden': ''}
        >
          Cancel
        </button>
      </div>;
  }
}

export default Task;
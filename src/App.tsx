import useGetDutyService from './api/Api';
import './App.css';
import Task from './Task';
import { TaskMode } from './types/Duty';

function App() {
  const getService = useGetDutyService();

  return (
    <div>
      <Task
        taskId=''
        name=''
        mode={TaskMode.ADD}
      ></Task>
      <hr />

      {getService.status === 'loading' && <div>Loading...</div>}
      {getService.status === 'loaded' &&
        getService.payload.map(duty => (
          <Task
            taskId={duty.id}
            name={duty.name}
            mode={TaskMode.LOCKED}
          ></Task>
        ))
      }
    </div>
  )
}

export default App;

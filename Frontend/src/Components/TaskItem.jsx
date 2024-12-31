import './taskItem.css'
const TaskItem = ({ tasks }) => {
    return (
      <>
        {tasks.map((element, key) => {
          return (
            <div key={key} className="taskItem">
              <div>{element.title}</div><br />
              <div>{element.description}</div><br />
              <div>{element.status}</div><br />
            </div>
          );
        })}
      </>
    );
  };
  
  export default TaskItem;
  
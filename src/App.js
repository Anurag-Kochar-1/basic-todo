import "./App.css";
import {useState, useRef} from "react"

function App() {

  const inputTask = useRef(null)

  const [todoList, setTodoList] = useState([])
  const [currentTask, setCurrentTask] = useState("")

  const addTask = () => {
    setTodoList([...todoList, {task: currentTask , completed: false}])
    inputTask.current.value = ""
    setCurrentTask("")
  }

  const deleteTask = (index) => {
    setTodoList(todoList.filter((task) => {
      return task.task != index
    }))
  }

  const markingComplete = (taskToMarkComplete) => {
    setTodoList(todoList.map((task) => {
      return task.task === taskToMarkComplete ? {task: taskToMarkComplete, completed : true} : {task: task.task, completed : task.completed ? true : false}
    }))
  } 


  return (
    <div className="App">
      <h1>To Do List </h1>

      <input 
      ref={inputTask}
      type="text" 
      placeholder="Task"
      onChange={(e) => setCurrentTask(e.target.value)}
      onKeyUp={(e) => { if(e.key == 'Enter') addTask()  } }
      />
      <button onClick={ addTask }> Add Task </button>

      <hr />

     <div className="task-container">
        <ul>
          {todoList.map((task, index) => {
            return ( 
              <div className="TC"> 
                <li key={index} style={{listStyle: "none"}}> {task.task} </li> 
                <button onClick={() => {deleteTask(task.task)}} > Delete </button>  
                <button onClick={() => {markingComplete(task.task)}} > Mark Compelte </button>
                {task.completed ? <p> Completed </p> : <p> Pending </p> }
          
                
              </div>
            )
          })}
        </ul>

     </div>


    </div>
  );
}

export default App;

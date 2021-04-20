import './App.css';
import React from 'react';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <div><h1>Задачи на неделю:</h1></div>
          <MyTodoList/>
        </div>
      </header>
    </div>
  );
}
class MyTodoList extends React.Component {
  state = {
    tasks: [{
      id: 123,
      name: 'Visit my grandma',
      description: 'On friday i should visit my grandma and spent time with she',
      completed: true
    },
    {
      id: 1234,
      name: 'Dedline at my ux/ui design courses',
      description: 'I should add my new work on Behance',
      completed: false
    },
    {
      id: 12345,
      name: 'Buy Tesla shares',
      description: 'This is a perfect moment to buy Tesla shares this weekend',
      completed: false
    },
    {
      id: 12346,
      name: 'Go to the Gym',
      description: 'I nevet went to the gym after my illness. It is time to get in shape!',
      completed: true
    },
    {
      id: 123467,
      name: 'Coursework',
      description: 'It is time to start my coursework',
      completed: false
    },
    {
      id: 1234678,
      name: 'Work deadline',
      description: 'It is time to start my coursework',
      completed: true
    }
  ]
  };
  clickHandler = () => {
    return console.log(`Task ${this.state.id} completed status = ${this.state.completed}`)
  }

  render() {
    const tasks = this.state.tasks    
    return (
      tasks.map( (task) => { 
        return(
          <TaskComplete
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            completed={task.completed}
            onClick={this.clickHandler}
          />
        )
      })
    )
  }
}
const TaskComplete = ({ id, name, description, completed }) => {
  const handleClick = () => {if (completed === true){completed = false } else {completed = true} return (console.log(`Task ${id} completed status = ${completed}`)) }

  return (
    <div id={id}>
        <h4 className="task">{name}</h4>
        <p className="task">{description}</p>
        <p className="task">{completed.toString()}</p>
        <button className="button1" onClick={handleClick}>Done</button>
    </div>
  )
}






export default App;

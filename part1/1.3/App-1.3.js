import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>
         course name : {course}
      </h1>
      <p>
         part1 : {part1.name} <br></br>
         number of exercises: {part1.exercises}
      </p>
      <p>
         part2 : {part2.name} <br></br>
         number of exercises: {part2.exercises}
      </p>
      <p>
         part3  {part3.name} and <br></br>
         number of exercises: {part3.exercises}
      </p>
    </div>
  )
}
export default App
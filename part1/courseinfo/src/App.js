const Header = (props) => (
  <h1>{props.course}</h1>     //display 'course' as a header.
)
// as I understand it, this could also be written in complete shorthand:
// const Header = props => <h1>{props.course}</h1>
// but I feel it is more readable and consistent like this.

const Part = (props) => ( //returns the part title and excersizes on a new line
  <p>{props.part.title} {props.part.exercises}</p>
)

const Content = (props) => {
  return (    //calls Part for each set in the array
  <div>    
    <Part part={props.part[0]}/> 
    <Part part={props.part[1]}/> 
    <Part part={props.part[2]}/> 
  </div>
  )
}

const Total = (props) => {
  let total = 0;
  for (let x in props.part) {   //calculate the total by adding the value of exercises of each part
    total += props.part[x].exercises;
  }
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {title: 'Fundamentals of React', exercises: 10},
    {title: 'Using props to pass data', exercises: 7}, 
    {title: 'State of a component', exercises: 14}
  ]
  
  return (
    <div>
      <Header course={course}/>
      <Content part={part}/>
      <Total part={part}/>
    </div>
  )
}

export default App
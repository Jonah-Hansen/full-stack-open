/**
 * since my initial instinct for completing exercises 1.1 and 1.2
 * used a loop to calculate total, I had already put parts into an
 * array of objects. I see now I was a bit ahead of myself as that 
 * would be part of 1.3-1.5!
 * 
 * this next commit will be updating the code to match the direction 
 * of exercise 1.5
 */



const Header = (props) => (
  <h1>{props.course}</h1>     //display 'course' as a header.
)
// as I understand it, this could also be written in complete shorthand:
// const Header = props => <h1>{props.course}</h1>
// but I feel it is more readable and consistent like this.

const Part = (props) => ( //returns the part title and excersizes on a new line
  <p>{props.part.name} {props.part.exercises}</p>
)

const Content = (props) => {
  return (    //calls Part for each set in the array
  <div>    
    <Part part={props.parts[0]}/> 
    <Part part={props.parts[1]}/> 
    <Part part={props.parts[2]}/> 
  </div>
  )
}

const Total = (props) => {
  let total = 0;
  for (let x in props.parts) {   //calculate the total by adding the value of exercises of each part. I know it says not to worry about using loops in 1.4 but I already set it up like this for 1.1 and 1.2 and I believe it looks nicer this way. 
    total += props.parts[x].exercises;
  }
  return (
    <p>Number of exercises {total}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', exercises: 10},
      {name: 'Using props to pass data', exercises: 7}, 
      {name: 'State of a component', exercises: 14}
    ]
  }
  
  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
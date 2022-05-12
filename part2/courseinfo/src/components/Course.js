import Header from './Header'
import Content from './Content'
import Total from './Total'

//render a div with course name, content, and total exercises
const Course = ({course}) => {
  return(
    <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
  )
}

export default Course
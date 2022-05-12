import Part from './Part'

// list out each part of the course and its number of exercises
const Content = ({parts}) => {
  return (
    <>
      {parts.map((part) => 
        <Part key={part.id} part={part} />
        )}
    </>
  )
}

export default Content
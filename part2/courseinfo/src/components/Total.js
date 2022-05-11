const Total = ({parts}) => {
  const total = parts.reduce((prevNum, part) => prevNum + part.exercises, 0)
  return (
    <>
      <h3>Total of {total} exercises</h3>
    </>
  )
}

export default Total
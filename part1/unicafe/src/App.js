import { useState } from 'react'

const Statistics = ({good, neutral, bad, total}) => {
  return (
    <>
    {/* render the value of each state and make some basic calculations */}
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>total {total}</p>
    <p>average {(good - bad) / total}</p>
    <p>positive {good * 100 / total}%</p>
    </>
  )
}

const App = () => {
  //save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let total = good + neutral + bad

  return (
    <div>
      <h1>give feedback</h1> 
      {/* render 3 buttons, with even handlers that increase their respective state by 1 */}
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App

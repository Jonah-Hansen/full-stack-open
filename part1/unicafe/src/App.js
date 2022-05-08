import { useState } from 'react'

const StatisticsLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0) {
    // if all states are 0, dont do statistics.
    return (
      <>
        <p>no feedback given</p>
      </>
    )
  }
  return (
    <div>
      {/* render the value of each state and make some basic calculations */}
      <StatisticsLine text='good' value={good}/>
      <StatisticsLine text='neutral' value={neutral}/>
      <StatisticsLine text='bad' value={bad}/>
      <StatisticsLine text='total' value={total}/>
      <StatisticsLine text='average' value={(good - bad) / total}/>
      <StatisticsLine text='positive' value={String(good * 100 / total) + ' %'}/> 
    </div>
  )
}

const Button = ({handler, state, label}) => (
  <button onClick={() => handler(state + 1)}>{label}</button>
)

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
      <Button handler={setGood} state={good} label='good'/>
      <Button handler={setNeutral} state={neutral} label='neutral'/>
      <Button handler={setBad} state={bad} label='bad'/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App

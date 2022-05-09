import { useState } from 'react'

const Button = ({handler, label}) => (
  <button onClick={handler}>{label}</button>
)

const RenderAnecdote = ({title, anecdote, vote}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{anecdote}</h3>
      <p>has {vote} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)

  //create an array called votes that keeps a state for each anecdote to store votes.
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleAnecdotes = () => { //set the state to a random int between 0 and anecdotes.length
    setSelected(() => Math.floor(Math.random() * anecdotes.length))
  }

  const handleVotes = () => {
    const newVotes = [...votes] //crate a temporary array and increase the selected state by 1
    newVotes[selected]++
    setVotes(newVotes)
  }

  //get the index value of the first highest votes value
  const highest = votes.indexOf(Math.max(...votes))  

  return (
    <div>
      <RenderAnecdote 
        title='Anecdote of the day' 
        anecdote={anecdotes[selected]} 
        vote={votes[selected]}
      />

      <Button handler={handleVotes} label='vote'/>
      <Button handler={handleAnecdotes} label='next anecdote'/>

      <RenderAnecdote 
        title='Anecdote with most votes' 
        anecdote={anecdotes[highest]} 
        vote={votes[highest]}
      />
    </div>
  )

}

export default App
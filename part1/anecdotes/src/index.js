import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text}) => <button onClick = {onClick}>{text}</button>

const MostVotes = ({votes, anecdotes}) => {
  const biggestNumber = Math.max(...votes)
  const MostVotesIndex = votes.indexOf(biggestNumber)
  
  return (
    <div>
      <p>{anecdotes[MostVotesIndex]}</p>
      <p>Has {votes[MostVotesIndex]} votes</p>
    </div>
  )
}

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes,setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const addVotes = (selected) => {
    const newVotes = [...votes]
    newVotes[selected]++
    setVotes(newVotes)
  }
  
  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>Has {votes[selected]} votes</p>
      <Button onClick={() => addVotes(selected)} text='vote' />
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      <MostVotes anecdotes={anecdotes} votes={votes} />
    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text}) => <button onClick = {onClick}>{text}</button>

const Statistic = ({ text, value }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        {text}: {value}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

const Statistics = ({ good, bad, neutral }) => {
    if (good + bad + neutral === 0){
        return <h2>No feedback given</h2>
    } else {
        return (
            <div>
                <Statistic text="Good" value={good} />
                <Statistic text="Neutral" value={neutral} />
                <Statistic text="Bad" value={bad} />
                <Statistic text="All" value={good + neutral + bad} />
                <Statistic text="Average" value={(good * 1 + neutral * 0 + bad * -1)/(good + neutral + bad)} />
                <Statistic text="Positive" value={(good * 100) / (good + neutral + bad)} />
            </div>
        )
    }
}

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>Give feedback</h1>
            <Button onClick = {() => setGood(good + 1)} text="good" />
            <Button onClick = {() => setNeutral(neutral + 1)} text="neutral" />
            <Button onClick = {() => setBad(bad + 1)} text="bad" />
            <h1>Statistics</h1>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
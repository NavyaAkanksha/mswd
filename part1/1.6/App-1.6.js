import React, { useState } from 'react'
const Button = ({txt, hndlclck}) => <button onClick={hndlclck}>{txt}</button>;
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
        <div>
       <h1>give feedback</h1>
       <Button txt='Good' hndlclck={() => setGood(good + 1)} />
      <Button txt='Neutral' hndlclck={() => setNeutral(neutral + 1)} />
      <Button txt='Bad' hndlclck={() => setBad(bad + 1)} />
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
        
</div>
    )
};
const Statistic = ({txt, value}) => {
    return (
        <tr>
            <td>{txt}</td>
            <td>{value}</td>
        </tr>
    );
};
const Statistics = ({good, neutral, bad}) => {

    return (
        <div>
            {
                <table>
                    <tbody>
                        <Statistic txt='Good' value={good} />
                        <Statistic txt='Neutral' value={neutral} />
                        <Statistic txt='Bad' value={bad} />
                       
                    </tbody>
                </table>
                
            }
        </div>
    );
};

export default App
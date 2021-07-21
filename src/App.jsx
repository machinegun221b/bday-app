import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
// create a state variable here
const [people, setPeople] = useState(data)

//this should clear all records
function clearAllRecords() {
setPeople([])
}
return (
<main>
<section className="container">
{/* Make change to "0" here */}
<h3>{people.length} birthdays today</h3>
{/* pass data to list component */}
<List people={people} />
<button onClick={clearAllRecords}>Clear All</button>
</section>
</main>
)
}

export default App
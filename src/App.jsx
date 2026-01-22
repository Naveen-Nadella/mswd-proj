import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import My_TextField from './TextField';

// DEFAULT import - can use any name
import Button from './Button';

// NAMED import - must use exact name with { }
import { TextField, TextArea } from './Inputs';

// MIXED import - default + named together
import MainCard, { SmallCard } from './Cards';

import Fun_Demo from './Fun_Demo';

import StateExample from './State_ex_2';

import Spread_demmo from './Spread_demo';
import { FaArrowRight } from "react-icons/fa";
//import Student from './Student';
//import PersonCard from './PersonCard';
//import SimpleValidationForm from './SimpleValidationForm';

//import SimpleValidationForm_1 from './SimpleValidationForm_1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


<Button
  text="Submit Certificate"
  icon={<FaArrowRight />}
  iconPosition="right"
  width="100%"
  height="50px"
/>

<br/>

<Button
  text="Processing..."
  disabled
/>
      

      {/*
      
      <SimpleValidationForm_1/>
      
      <My_TextField 
        label="Name" 
        placeholder="Enter name" 
      />
      <hr></hr>

      <My_TextField
        label="Email" 
        placeholder="Enter email"
        width="400px"
      />
 <hr></hr>
      <My_TextField
        label="Username" 
        placeholder="Max 10 chars"
        width="200px"
        maxLength={10}
      /> */}

      {/* <p>Using Default Export </p>
      <Button text="Click Me" color="green" />
      <Button text="Submit" color="red" />

      <hr />

      <p>Using Named Exports </p>
      <TextField label="Name:" placeholder="Enter name" />
      <TextArea label="Message:" rows={4} />

      <hr /> */}

      {/* <p>Using Mixed Exports </p>
      <MainCard title="Main Card" content="This is main content" />
      <SmallCard title="Small Card 1" />
      <SmallCard title="Small Card 2" /> */}
      {/* <StateExample/> */}
    {/* <Spread_demmo/> */}
    
  {/* <Button
  text="Log In"
  type="submit"
  width="100%"
  height="50px"
/>
<br/>
 */}

      <h1>Student List</h1>

      {/* Passing data as props */}
       {/* <Student name="AA" age={20} />
      <Student name="ZZ" age={22} />
      <Student name="YY" age={19} />  */}

{/* <h1>Destructuring Example</h1>
      <PersonCard name="AA" age={20} city="Mumbai" /> */}
        
    </>
  )
}

export default App

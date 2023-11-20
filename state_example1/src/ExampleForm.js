import React, { useState } from 'react'; 

export default function RegisterForm() { 
  const [form, setForm] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
  }); 

  return ( 
    <> 
    <div>
      <label> 
        First name: 
        <input 
          value={form.firstName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              firstName: e.target.value 
            }); 
          }} 
        /> 
      </label>
      </div> 
      <div>
      <label> 
        Last name: 
        <input 
          value={form.lastName} 
          onChange={e => { 
            setForm({ 
              ...form, 
              lastName: e.target.value 
            }); 
          }} 
        /> 
      </label> 
      </div>
      <div>
      <label> 
        Email: 
        <input 
          value={form.email} 
          onChange={e => { 
            setForm({ 
              ...form, 
              email: e.target.value 
            }); 
          }} 
        /> 
      </label>
      </div>
      <div> 
      <p> 
        {form.firstName}{' '} 
        {form.lastName}{' '} 
        ({form.email})
      </p>
      </div> 
      <div>
        <button onClick={() => setForm('')}> 
        Reset 
      </button>
      </div>
    </> 
  ); 
} 
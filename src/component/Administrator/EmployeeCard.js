import React from 'react'

function EmployeeCard ({employee,  onDeleteEmployee}) {
    const {
    id,    
    name,
    image,
    password,
    position,
    schedule,
    workTime,
    payPerHour,
    timeInEvents,
    timeOutEvents,
    payForThisWeek} = employee

   /* const [updatedPayForThisWeek, setUpdatedPayForThisWeek] = useState(0)
    
    function handlePayForThisWeekChange(e){
        const amount = e.target.value
        if (amount === "" || amount === null) {
          setUpdatedPayForThisWeek()
         } else {
          setUpdatedPayForThisWeek(parseFloat(e.target.value))
        }
      }
      function handleSubmit(e) {
        e.preventDefault()
    
        const configObj = {
          method: "PATCH",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({payForThisWeek: updatedPayForThisWeek})
        }
        fetch(`http://localhost:3001/employees/${id}`, configObj)
        .then(r => r.json())
        .then(updatedEmployee => onUpdateEmployee(updatedEmployee))
    
        setUpdatedPayForThisWeek(0)
      }*/
      function handleDelete(params) {
        fetch(`/employees/${id}`, {
          method: "DELETE"
        })
        .then(onDeleteEmployee(id))
       }

    return (
        <div className="card">
          <h2>EMPLOYEE</h2>
           <ul>
           <li>NAME:{name}</li>
           <img src={image} alt={name} />
           <li>password:{password}</li>
           <li>position:{position}</li>
           <li>schedule:{schedule}</li>
           <li>WorkTime:{workTime}</li>
           <li>Pay per hour:${payPerHour}</li>
           <li>Time In:{timeInEvents}</li>
           <li>Time Out:{timeOutEvents}</li>
           <li>Pay for this week: ${payForThisWeek}</li>
           </ul>
           <button onClick={handleDelete}>Delete</button>
         {/*  <form onSubmit={handleSubmit}>
        <input 
        type="number" 
        step ="0.01"
        placeholder="New Pay for this week..."
        value={updatedPayForThisWeek}
        onChange={handlePayForThisWeekChange}
        />
        <button type="submit">UpdatePayForThisWeek</button>
    </form> */}
        </div>   
       )
}

export default EmployeeCard
import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('employes');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state ||employes state || employes array of objects
  const [employes, setemployes]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [designation, setDesignation]=useState('');
  const [contact, setContact]=useState('');
  const [skill, setSkill]=useState('');
  const [dob, setDOB]=useState('');

  // form submit event
  const handleAddemployeSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let employe={
      name,
      designation,
      contact,
      skill,
      dob
    }
    setemployes([...employes,employe]);
    setName('');
    setDesignation('');
    setContact('');
    setSkill('');
    setDOB('');
  }

  // delete employe from LS
  const deleteEmploye=(dob)=>{
    const filteredEmployes=employes.filter((element,index)=>{
      return element.dob !== dob
    })
    setemployes(filteredEmployes);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('employes',JSON.stringify(employes));
  },[employes])

  return (
    <div className='wrapper'>
      <h1>EmployeList App</h1>
      <p>Add and view your employes using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddemployeSubmit}>
            <label>Employe Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>Designation</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setDesignation(e.target.value)} value={designation}></input>
            <br></br>
            <label>Contact</label>
            <input type="Number" className='form-control' required
            onChange={(e)=>setContact(e.target.value)} value={contact}></input>
            <br></br>
            <label>Skill</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setSkill(e.target.value)} value={skill}></input>
            <br></br>
            <label>Date Of Birth</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setDOB(e.target.value)} value={dob}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD New Employe 
            </button>
          </form>
        </div>

        <div className='view-container'>
          {employes.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Employe Name</th>
                    <th>Designation</th>
                    <th>Contact</th>
                    <th>Skill</th>
                    <th>Date Of Birth</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <View employes={employes} deleteEmploye={deleteEmploye}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setemployes([])}>Remove All</button>
          </>}
          {employes.length < 1 && <div>No employes are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App

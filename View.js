import React from 'react'



export const View = ({employes,deleteEmploye}) => {
    
    return employes.map(employe=>(
        
        <tr key={employe.dob}>
            <td>{employe.name}</td>
            <td>{employe.designation}</td>
            <td>{employe.contact}</td>
            <td>{employe.skill}</td>
            <td>{employe.dob}</td>
            <td className='delete-btn' onClick={()=>deleteEmploye(employe.dob)}>
                
            </td>           
        </tr>            
    
))
}

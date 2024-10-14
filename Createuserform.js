import React, { useState } from 'react';

const Createuserform=()=>{
    const [name, setName]=useState('')
    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')
    const [district,setDistrict]=useState('')


    const handleSubmit = async (event)=>{
        
        event.preventDefault();
        try{
            const response = await fetch('http://localhost:3000/createuser',{
                method:'post',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({name,age,gender,district})
            })
            const data = await response.json()
            alert("Data inserted successfully")
            console.log(data)
        } catch(error) {
            console.error(error)
            alert(error)
        }
    };

    return(
        <div className="container mt-5">
        <div className="row-justify-content-center">
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                        <h3>Create User</h3>
                    </div>
                    <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Name:</label>
                            <input type='text' className='form-control' value={name} onChange={(event)=> setName(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Age:</label>
                            <input type='text' className='form-control' value={age} onChange={(event)=>setAge(event.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <label>Gender:</label>
                            <input type='radio' className='form-check-input' value={'Male'} checked={gender === 'Male'} onChange={(event)=> setGender(event.target.value)}/> Male
                            <input type='radio' className='form-check-input' value={'Female'} checked={gender === 'Female'} onChange={(event)=> setGender(event.target.value)}/> Female
                            <input type='radio' className='form-check-input' value={'Other'} checked={gender === 'Other'} onChange={(event)=> setGender(event.target.value)}/> Other
                        </div>
                        <br></br>

                        <div className='form-group'>
                            <label>District:</label>
                            <select className='form-control' value={district} onChange={(event)=>setDistrict(event.target.value)}>
                                <option value=''>select</option>
                                <option value='Kozhikode'>Kozhikode</option>
                                <option value='Kannur'>Kannur</option>
                                <option value='Malappuram'>Malappuram</option>
                                <option value='Wayanad'>Wayanad</option>
                                <option value='Kollam'>Kollam</option>
                            </select>
                        </div>
                        <button type='submit' className='btn btn-primary'>Create User</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Createuserform
import React, { useState } from 'react'

import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { AutoComplete } from 'primereact/autocomplete';
        
        

const DatePicker = () => {

    const [date,setDate] = useState('')
    const [time,setTime] = useState('')
    const [name,setName] = useState('')
    const [selectedCity,setSelectedCity] = useState([])
    const [filteredCities,setFilteredCities] = useState([])
    const cities = [
        'New York' ,
         'Rome' ,
        'London' ,
         'Istanbul' ,
        'Paris' 
    ];

    const handelChange = (e) =>{
        setName(e.target.value)
    }

    const submitHandel = (e) =>{
        setDate(date)
        setName(name)
        setSelectedCity(selectedCity)
        setTime(time)
        console.log(date)
        console.log(time)
        console.log(selectedCity)
        console.log(name)
        setDate('')
        setName('')
        setTime('')
        setSelectedCity('')
    }

    const searchCity = (e) => {
        let filteredCities= cities
        setFilteredCities(filteredCities);
    }
    
    
    

  return (
    <div className='grid'>
        
            <div className='col-4 m-5'>
                
                <div className='flex flex-column'>
                    <label>Date</label>
                    <Calendar  value={date} onChange={(e) => setDate(e.value)} showButtonBar  showIcon/>
                </div>
                <div className='mt-5 flex flex-column'>
                    <label>Time</label>
                    <Calendar  value={time} onChange={(e) => setTime(e.value)} timeOnly />
                    
                </div>
                <div className='flex flex-column mt-5'>
                    <label>Name</label>
                    <InputText name='name' placeholder='Name' onChange={handelChange} value={name}/>
                </div>
                <div className='mt-5 flex flex-column'>
                <label>selectCity</label>
                
                <AutoComplete dropdown value={selectedCity} suggestions={filteredCities} completeMethod={searchCity} onChange={(e) => setSelectedCity(e.value)} />
 
                </div>
                <Button severity='success' label="Submit" className='mt-5' onClick={submitHandel} />

            </div>
    </div>
  )
}

export default DatePicker
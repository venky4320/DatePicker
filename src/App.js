import React from 'react'
import './App.css'

import { Menubar } from 'primereact/menubar';
import DatePicker from './components/DatePicker';

        

const App = () => {
  return (
    <>
    <div className='App overflow-hidden'>
        
        <Menubar className='bg-blue-600 p-3 mb-2 text-3xl text-white' start={'Prime React Crash Course'} />
        
          <DatePicker />
        
    </div>
    
    </>
  )

}

export default App
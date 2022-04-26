import React from 'react'
import Footer from '../../reuseableItems/Footer/Footer';
import Navbar from '../../reuseableItems/Navbar/Navbar';
import ResultTable from './ResultTable'

function Result() {
  return (
    <>
    <div className='container'>
        <Navbar/>
    </div>
    <div className='container'>
        <ResultTable/>
    </div>
    <div className='container'>
        <Footer/>
    </div>
    </>
  )
}

export default Result
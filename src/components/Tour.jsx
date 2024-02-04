import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Tour = () => {
  const {id}=useParams()
  const navigate=useNavigate()
  const [tour,setTour]=useState(null)
  const [loading,setLoading]=useState(true)

  const url='https://raw.githubusercontent.com/mkatay/json-tours/main/tours'

  const getTour=async ()=>{
    try {
      const response=await fetch(url)
      if(!response){
        console.log('there is an issue')
      }else{
        const toursArr=await response.json()
        const selTour=toursArr.filter(tour=>tour.id == id)
        setTour(selTour[0])
        setLoading(false)
      }
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getTour()
    console.log(tour)
  },[])

  return (
    <>
     <div className="container-fluid py-5 blurred-bg d-flex justify-content-center">
      <div className="article_content p-3">
      {loading && 'wait a minute, loading'}
      {tour && <>
        <div className='text-center'><h1>{tour.name}</h1></div>
        <div><img src={tour.image} alt={tour.name} className='img-fluid my-3' /></div>
        <div>{tour.info}</div>
        <div className='d-flex justify-content-between py-3'>
          <span>price: {tour.price}</span>
          <button onClick={()=>navigate('/tours')}>Back to all tours</button>
        </div>
      </>}
      </div>
      </div>
    </>
  )
}

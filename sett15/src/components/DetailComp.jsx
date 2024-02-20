import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailComp() {
  const {id} = useParams();
  

  return (
    <div>DetailComp</div>
  )
}

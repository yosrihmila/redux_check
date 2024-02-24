import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'

function TaskDesc() {

  const {id}=useParams()
  const {movieList}=useSelector(state=>state.movieReducer)
  return (
    <div>
           <div>

<div>

    <h1> genre :<span style={{ color: 'red' }}> {movieList[id].genre}</span> </h1>
    <center> <p style={{ width: '500px' }}>  <span style={{textDecoration:'underline' }}>{movieList[id].id} </span> : {movieList[id].description} </p></center>

</div>
</div>

    </div>
  )
}

export default TaskDesc
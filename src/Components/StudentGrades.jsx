import React from 'react'
import {useRef, useState, useEffect} from "react"


function StudentGrades(props) {
  const [name, setName] = useState()
  const [grade1, setGrade1] = useState()
  const [grade2, setGrade2] = useState()
  const [grade3, setGrade3] = useState()
  const [gradeTot, setTotal] = useState()
  const studentCount = useRef(1)
  let total
  let avg
  let grade


function handleClick(){
  total=Number(grade1) + Number(grade2) + Number(grade3)
    console.log(total)

  avg = (total/3)

  if(avg >=90) grade='A'
  else if(avg >=80) grade='B'
  else if(avg >=70) grade='C'
  else if(avg >=60) grade='D'
  else grade = 'F'

  setTotal(grade)



}


  return (
  <div className='gradeBook'>
      <h1>Student Gradebook</h1>
      <div className='labels'>
        <label>Student Name </label><br></br>
        <input type="text" onChange={(e) =>{setName(e.target.value)}}/><br></br>
        <label>Grade 1</label><br></br>
        <input type="text" id='g1'onChange={(e) =>{setGrade1(e.target.value)}}/><br></br>
        <label>Grade 2</label><br></br>
        <input type="text" id='g2'onChange={(e) =>{setGrade2(e.target.value)}}/><br></br>
        <label>Grade 3</label><br></br>
        <input type="text" id='g3'onChange={(e) =>{setGrade3(e.target.value)}}/><br></br>
      </div><br></br>
      <button onClick={handleClick}>Calculate Total Grade</button>
      <div>{name} grade is {gradeTot}</div>
  </div>
)
}


export default StudentGrades;
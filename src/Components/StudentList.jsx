import React from 'react'
import {useRef} from "react"


function StudentList() {
  return (
    <div>
      {students.map((student) =>{
      const getRef = (e) => (studentCount.current.push(e))
      return <p key={getRef}>{student}</p>
    })}
    </div>
  )
}


export default StudentList
import React from 'react'
import { QuestionForm } from './question-form'

const CreateQuestion = ({ params }) => {
  return (
    <div><QuestionForm id={params.id}/></div>
  )
}

export default CreateQuestion
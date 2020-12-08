import React from 'react'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import SignUpForm from "./SignUpForm"

export default function SignupPage() {
  useUnProtectedPage()
    return (
      <div>
        <SignUpForm/> 
      </div>
  )
}
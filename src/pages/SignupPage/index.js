import React from 'react'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import SignUpForm from "./SignUpForm"

export default function SignupPage() {
  window.document.title = "FutureEats"
  useUnProtectedPage()
  return (
    <SignUpForm />
  )
}
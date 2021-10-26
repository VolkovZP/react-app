import React from 'react';
import SignUpForm from '../../components/forms/SignUpForm';
export default function SignUpFormPage() {
  return (
    <div>
      <SignUpForm registerUser={() => console.log('register useer')} />
    </div>
  );
}

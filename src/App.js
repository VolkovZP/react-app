import React from 'react'
import { SIGN_UP_SCHEMA } from 'utils/validationSchemas'
function App() {
  const data = SIGN_UP_SCHEMA.validateSync({ password: 'dsfDF321#$', email: 'serfentos12@mail.ru', lastName: 'Test', firstName: 'Testovich' })
  return (
    <>
      <div>{data.password}</div>
    </>
  )
}
export default App;
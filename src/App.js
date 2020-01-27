import React, {useEffect, useRef, useState} from 'react'
import Header from './components/Header'
import FormContainer from './components/FormContainer'
import Notes from './components/Notes'


function App() {
  const [isFormClicked, setIsFormClicked] = useState(false)
  const formRef = useRef(null)

  function handleFormClick(e) {
    formRef.current.contains(e.target) ?
    setIsFormClicked(true) : 
    setIsFormClicked(false)
    
  }

  useEffect(() => {
    document.body.addEventListener("click", handleFormClick)
    
    return () => document.body.removeEventListener("click", handleFormClick
    )
  }, [])

  return (
    <main>
      <Header/>
      <FormContainer ref={formRef} isFormClicked={isFormClicked}/>
      <Notes/>
    </main>
  );
}

export default App

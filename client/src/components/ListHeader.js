import Modal from './Modal'
import { useState } from 'react'
import { useCookies } from 'react-cookie'

const ListHeader = ({ listName, getData }) => {
  // State to manage the visibility of the modal (for adding a new task)
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const [showModal, setShowModal] = useState(false)

  // Sign out function: remove cookies and reload the page
  const signOut = () => {
    console.log('signout')
    removeCookie('Email') 
    removeCookie('AuthToken')  
    window.location.reload()  
  }

  return (
    <div className="list-header">
      <h1>{listName}</h1>  {/* Display the name of the list */}
      <div className="button-container">
        {/* Button to open modal to add new task */}
        <button className="create" onClick={() => setShowModal(true)}>ADD NEW</button>
        {/* Button to sign out */}
        <button className="signout" onClick={signOut}>SIGN OUT</button>
      </div>
      {/* Show the modal if showModal is true */}
      {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData} />}
    </div>
  )
}

export default ListHeader

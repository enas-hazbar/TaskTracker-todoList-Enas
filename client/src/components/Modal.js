import { useState } from 'react'
import { useCookies } from 'react-cookie'

const Modal = ({ mode, setShowModal, getData, task }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  // Decide if the modal is in 'edit' mode or 'create' mode
  const editMode = mode === 'edit' ? true : false

  // Initialize state for the task data
  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email, 
    title: editMode ? task.title : null, 
    progress: editMode ? task.progress : 50, 
    date: editMode ? task.date : new Date() 
  })

  // Function to send new task data to server
  const postData = async (e) => {
    e.preventDefault() 
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        console.log('WORKED') 
        setShowModal(false) 
        getData() 
      }
    } catch(err) {
      console.error(err) 
    }
  }

  // Function to update existing task data on the server
  const editData = async(e) => {
    e.preventDefault() 
    try {
      
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.status === 200) {
        setShowModal(false)
        getData() 
      }
    } catch (err) {
      console.error(err) 
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData(data => ({
      ...data,
      [name]: value
    }))

    console.log(data) 
  }

  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} your task</h3> 
          <button onClick={() => setShowModal(false)}>X</button> 
        </div>

        <form>
          {/* Input field for task title */}
          <input
            required
            maxLength={30}
            placeholder=" Your task goes here"
            name="title"
            value={data.title}
            onChange={handleChange} 
          />
          <br />
          {/* Input field for task progress with a range slider */}
          <label for="range">Drag to select your current progress</label>
          <input
            required
            type="range"
            id="range"
            min="0"
            max="100"
            name="progress"
            value={data.progress}
            onChange={handleChange} 
          />
          {/* Submit button to either create or edit the task */}
          <input className={mode} type="submit" onClick={editMode ? editData : postData} />
        </form>

      </div>
    </div>
  )
}

export default Modal

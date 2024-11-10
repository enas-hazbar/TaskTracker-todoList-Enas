import { useState } from 'react'
import TickIcon from './TickIcon'
import Modal from './Modal'
import ProgressBar from './ProgressBar'

const ListItem = ({ task, getData }) => {
  const [showModal, setShowModal] = useState(false)

  // Function to delete the task
  const deleteItem = async() => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'DELETE'
      })
      if (response.status === 200) {
        getData()
      }
    } catch (err) {
      console.error(err) 
    }
  }

  return (
    <li className="list-item">
      <div className="info-container">
      <TickIcon progress={task.progress} />
      <p className="task-title">{task.title}</p>
        <ProgressBar progress={task.progress} />
      </div>

      <div className="button-container">
        {/* Button to open modal for editing the task */}
        <button className="edit" onClick={() => setShowModal(true)}>EDIT</button>
        {/* Button to delete the task */}
        <button className="delete" onClick={deleteItem}>DELETE</button>
      </div>
      {/* Show the modal if showModal is true */}
      {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData={getData} task={task} />}
    </li>
  )
}

export default ListItem

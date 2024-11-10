//Import the componetents that i need to use it inside my app
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem' 
import Auth from './components/Auth'
import { useEffect, useState } from 'react' // Import React hooks for managing state and side effects
import { useCookies } from 'react-cookie' // Import the useCookies hook to manage cookies for auth

const App = () => {
  // Initialize state for cookies (AuthToken and Email) and tasks
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken 
  const userEmail = cookies.Email 
  const [tasks, setTasks] = useState(null) 

  // Function to fetch data from the backend
  const getData = async () => {
    try {
      // Make a GET request to fetch tasks from the server
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${userEmail}`)
      const json = await response.json() 
      setTasks(json) 
    } catch (err) {
      
      console.error(err)
    }
  }

  // useEffect hook to fetch data when the component is mounted
  useEffect(() => {
    if (authToken) {
      getData()
    }
  }, []) 

  console.log(tasks) 

  // Sort tasks by date in ascending order
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      {/* If not authToken exists, show the Auth component */}
      {!authToken && <Auth />}
      
      {/* If authToken exists, display the Task Tracker, and list of todos*/}
      {authToken &&
        <>
          <ListHeader listName={'\u{1F4C8} TaskTracker'} getData={getData} /> {/* the header and the title */}
          <p className="user-email">Welcome back {userEmail}</p> {/* Show the useremail / username that used by signup */}
        
          {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
        </>
      }

      {/* Copyright footer */}
      <p className="copyright">© TaskTracker B.V.</p>
    </div>
  )
}

export default App 

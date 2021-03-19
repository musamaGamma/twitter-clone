import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import TweetFormPage from './pages/TweetFormPage'
import NotificationsPage from './pages/NotificationsPage'
import SearchPage from './pages/SearchPage'
import MessagesPage from './pages/MessagesPage'
import RegisterPage from './pages/RegisterPage'
import EditProfilePage from './pages/EditProfilePage'


function App() {
  return (
    <Router>
      <Route path="/notifications" component={NotificationsPage} />
      <Route path="/messages" component={MessagesPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/compose" component={TweetFormPage} />
    <Route  path="/login"  component={LoginPage}/>
    <Route  path="/signup"  component={RegisterPage}/>
    <Route  path="/profile"  component={ProfilePage}/>
    <Route  path="/edit-profile"  component={EditProfilePage}/>
    <Route  path="/" exact component={Home}/>
    </Router>
  );
}

export default App;

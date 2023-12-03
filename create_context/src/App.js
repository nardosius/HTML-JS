import './App.css';
import { UserProvider, useUser } from './UserContext';

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return(
  <div>
    <h2>What is a Blog?</h2>
    <p>
      A blog is a journal covering different topics and meant to be shared with followers on the internet. It can be devoted to a specific subject such as science, music or art, or it can be a generalized articulation of random observations by the author.
    </p>
    <p>Written By {user.name}</p>
  </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  );
}

function Root() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default Root;

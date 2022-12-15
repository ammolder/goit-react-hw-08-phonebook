import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to your Phone Book!</h1>
      <p>Create your own contacts list, which will be available only to you</p>
      <Link to="/contacts">Try it now</Link>
    </div>
  );
};
export default Home;

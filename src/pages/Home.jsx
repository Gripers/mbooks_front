import styles from './Home.module.css';

import Sidebar from '../components/Sidebar/Sidebar.jsx';
import Books from '../components/Books/Books.jsx';

const Home = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Books />
    </div>
  );
};

export default Home;

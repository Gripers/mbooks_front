import { useContext } from 'react';
import styles from './Sidebar.module.css';

import { Input } from '@mui/joy';

import { Context } from '../../context.jsx';
import Categories from '../Categories/Categories.jsx';

const Sidebar = () => {
  const { setIsLoginModalOpen, setIsRegisterModalOpen } = useContext(Context);

  const cusStyles = {
    margin: '10px 0',
  };

  return (
    <div className={styles.sidebar}>
      <h2>MBooks</h2>
      {/*<Input placeholder='Поиск...' size='sm' style={cusStyles} />*/}
      <hr />
      <ul>
        <li onClick={() => setIsLoginModalOpen(true)}>Вход</li>
        <li onClick={() => setIsRegisterModalOpen(true)}>Регистрация</li>
      </ul>
      <hr />
      <Categories />
    </div>
  );
};

export default Sidebar;

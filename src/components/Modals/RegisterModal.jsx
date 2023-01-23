import { useContext, useState } from 'react';
import styles from './styles.module.css';

import { Button, Input, Modal, Sheet } from '@mui/joy';

import { modalStyles, sheetStyles } from './config.js';
import { Context } from '../../context.jsx';

const RegisterModal = () => {
  const { isRegisterModalOpen, setIsRegisterModalOpen } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();

    setIsLoading(true);
  };

  return (
    <Modal open={isRegisterModalOpen} sx={modalStyles}>
      <Sheet variant='outlined' sx={sheetStyles}>
        <div className={styles.header}>
          <h2>Регистрация</h2>
          <svg
            onClick={() => setIsRegisterModalOpen(false)}
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            fill='currentColor'
            className='bi bi-x'
            viewBox='0 0 16 16'
          >
            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
          </svg>
        </div>
        <div className={styles.body}>
          <form onSubmit={submitForm}>
            <Input placeholder='Почта' type='email' required={true} />
            <Input placeholder='Пароль' type='password' required={true} />
            <Button type='submit' loading={isLoading}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </Sheet>
    </Modal>
  );
};

export default RegisterModal;

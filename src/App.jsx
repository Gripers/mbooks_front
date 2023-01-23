import { Route, Routes } from 'react-router-loading';
import { Toaster } from 'react-hot-toast';

import Home from './pages/Home.jsx';
import LoginModal from './components/Modals/LoginModal.jsx';
import RegisterModal from './components/Modals/RegisterModal.jsx';

function App() {
  return (
    <div className='App'>
      <Routes maxLoadingTime={1000}>
        <Route index={true} element={<Home />} loading={true} />
      </Routes>

      <Toaster position='top-center' />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;

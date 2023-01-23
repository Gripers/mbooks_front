import { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isLoginModalOpen,
        setIsLoginModalOpen,
        isRegisterModalOpen,
        setIsRegisterModalOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };

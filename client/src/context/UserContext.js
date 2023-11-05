import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function useUserContext() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [userDetails, setuserDetails] = useState({});
  const [loggedDetails, setloggedDetails] = useState({});
  const [taskScore, setTaskScore] = useState(0);

  const adduserDetails = (data) => {
    setuserDetails(data);
  };

  const addloggedDetails = (data) => {
    setloggedDetails(data);
  };

  const addTaskScore = (num) => {
    setTaskScore((prevScore) => prevScore + num);
  };

  

  return (
    <UserContext.Provider
      value={{
        userDetails,
        adduserDetails,
        loggedDetails,
        addloggedDetails,
        taskScore,
        addTaskScore,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

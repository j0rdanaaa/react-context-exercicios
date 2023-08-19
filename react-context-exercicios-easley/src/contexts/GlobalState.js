import React, { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import { BASE_URL } from "../constants/url";
import axios from "axios";


const GlobalState = ({ children }) => {
  const [users, setUsers] = useState([]);

  const headers = {
    Authorization: "jordana-goes-easley",
  };
 const getAllUsers = async () => {
    try {
      const response = await axios.get(BASE_URL, headers)
      setUsers(response.data)

    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    getAllUsers();
  }, []);
  const data = { 
    users,
    setUsers
  }
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
export default GlobalState;

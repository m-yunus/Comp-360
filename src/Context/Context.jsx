import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { BaseUrl } from "../ApiService/ApiService";

const DataContext = createContext();

export function useDataContext() {
  return useContext(DataContext);
}
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [progresValue, setProgressvalue] = useState();
  const [updatedProgress, setUpdatedProgress] = useState({
    percentage: 0,
  });
  const [loadingData, setloadingData] = useState(false);
  const user = localStorage.getItem("userName");

  const getAllData = async () => {
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.get(
        `${BaseUrl}/api/personalize/getAllData`,
        { headers }
      );
      console.log(response);

      setloadingData(true);

      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const gettinguserData = async () => {
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    try {
      const response = await axios.get(`${BaseUrl}/api/user/percentage`, {
        headers,
      });
      console.log("userdata", response);
      setProgressvalue(response.data.percentage);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const PercentageUpdating = async () => {
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    try {
      const response = await axios.post(
        `${BaseUrl}/api/user/percentage`,
        updatedProgress,
        { headers }
      );

      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getAllData();
    gettinguserData();
  }, [data, progresValue,loadingData]);
  console.log(data);
  return (
    <DataContext.Provider
      value={{
        data,
        user,
        setProgressvalue,
        progresValue,
        setUpdatedProgress,
        PercentageUpdating,
        loadingData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

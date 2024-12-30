import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = ({ loginData }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let apiUrl = "http://127.0.0.1:3000/dashboard/user/tasks";
      if (loginData.userType === "admin") {
        apiUrl = "http://127.0.0.1:3000/dashboard/admin/tasks";
      }
      const response = await axios.get(apiUrl, { withCredentials: true });
      
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loginData]);
  if (loading) {
    return <>loading...</>;
  }
  if (error) {
    return <>{error}</>;
  }
  return <>hi dashboard
  </>;
};
export default Dashboard;

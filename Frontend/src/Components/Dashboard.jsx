import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import TaskItem from "./TaskItem";

const Dashboard = ({ loginData }) => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    const token = localStorage.getItem("token");

    try {
      let apiUrl = "http://127.0.0.1:3000/dashboard/user/tasks";
      if (loginData.userType === "admin") {
        apiUrl = "http://127.0.0.1:3000/dashboard/admin/tasks";
      }
      const response = await axios.get(apiUrl, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      console.log(response);
      
      if(!Array.isArray(response.data )|| !Array.isArray(response.data.data )|| !response.data  || !response.data.data){
        setTasks([])
      }else{
      setTasks(response.data.data);
      console.log(tasks)
        return tasks;
      }
      setTasks(response.data.data);
      return tasks
      

      
    } catch (error) {
      console.log();
    }
  };
  

 const handleClick = () =>{
  fetchData();
 }
  
  
  return <>
   <button onClick={handleClick}>Fetch Data</button>
  {!tasks.length ? <p>No Task Found</p>:<TaskItem tasks={tasks} />


  }</>;
};
export default Dashboard;

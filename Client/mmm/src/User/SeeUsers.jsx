import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gettask,deleteTask } from "../redux/action";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Update from "./Update";
import { useState } from "react";
function SeeUsers() {
  const [editingData, setEditingData] = useState(null);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);
  const token = Cookies.get("token");
 
  useEffect(() => {
    dispatch(gettask(token));
  }, [token]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id, token));
    console.log(id);
  };
  const handleEdit = (task) => {
    setEditingData({...task});
  };

  return (
      <div className="card-container">
        {tasks.tasks.length > 0 &&
          tasks.tasks.map((task, index) => (
            <div className="card" key={index}>
              <h2 className="card-title">FirstName : {task.firstName}</h2>
              <p className="card-description">LastName : {task.lastName}</p>
              <p className="card-description">Email : {task.email}</p>
              <button onClick={() => handleDelete(task._id)} className="button">
                Delete
              </button>
              <button className="button" onClick={() => handleEdit(task)}>
                EDIT
              </button>
            </div>
          ))}
                {editingData && <Update data={editingData} />}

      </div>


  );
}

export default SeeUsers;
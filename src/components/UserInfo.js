import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchUserInfoThunk } from '../slice/userInfoSlice';


const UserInfo = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const {userInfo, loading, error} = useSelector((state)=>state.userInfo)

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("event", e.target.key.value)
    dispatch(fetchUserInfoThunk(name))
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h2>User Info</h2>
  
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              name="key"
              onChange={(e) => setName(e.target.value)}
              className="mb-4 w-full"
            />
            <button type="submit" className="w-full">
              Submit
            </button>
          </form>

          <div>{userInfo[0]?.name}</div>
          <div>{userInfo[0]?.email}</div>
          <div>{userInfo[0]?.age}</div>
    </div>
  );
};

export default UserInfo;
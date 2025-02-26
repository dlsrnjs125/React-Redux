import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSlice } from '../slice/userSlice';


const initialState
= [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        age: 30
    },
    {
        id: 2,
        name: "Piter",
        email: "Piter@example.com",
        age: 20
    },
    {
        id: 3,
        name: "sendi",
        email: "sendi@example.com",
        age: 10
    }
];

const UserList = () => {
    const [userData, setUserData] = useState([]);
    const dispatch = useDispatch(); // slice 함수 api 실행
    const { users, loading, error } = useSelector((state) => state.userList);     

    useEffect(() => {
        dispatch(userSlice());
    }, [dispatch]);

    useEffect(() => {
        setUserData(users);
    }, [users]);

    if (loading) {
    return <p>Loading...</p>;
    }
    

    return (
        <div>
            <h2>User List</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {userData?.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>

    );
}

export default UserList;
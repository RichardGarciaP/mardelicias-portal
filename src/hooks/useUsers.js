import {useEffect, useState} from "react";
import {getAllUsers} from "../services/users/users";


const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        setLoading(true);
        const usersPromise = getAllUsers();

        const [usersResult] = await Promise.all([usersPromise]);
        console.log(usersResult?.data?.users)
        setUsers(usersResult?.data?.users);
        setLoading(false);
    };

    useEffect(()=>{
        getUsers();
    }, [])

    return {
        users,
        loading
    }

};

export default useUsers;

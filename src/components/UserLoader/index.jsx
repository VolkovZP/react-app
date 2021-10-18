import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Spinner from '../Spinner';
import { getUsers } from '../../api';

export default function UserLoader() {
    const [user, setUser] = useState([]);
    const [isFething, setIsFetching] = useState(true);
    const [error, setError] = useState(null);
    const [curentPage, setCurentPage] = useState(1);

    const load = () => {
        getUsers({ page: curentPage })
            .then(d => setUser(d.results))
            .catch(error => setError(error))
            .finally(() => setIsFetching(false));
    };

    useEffect(() => {
        load();
    }, []);

    const nextPage = () => {
        setCurentPage(curentPage + 1);
    };

    const prevPage = () => {
        if (curentPage <= 1) return 1;
        setCurentPage(curentPage - 1);
    };

    useEffect(() => {
        load();
    }, [curentPage]);

    if (isFething)
        return (
            <div>
                <Spinner />
            </div>
        );
    if (error) return <div>EROR</div>;
    return (
        <>
            <h1>USER LIST</h1>
            <button onClick={prevPage}>prev page</button>
            <button onClick={nextPage}>next page</button>
            <ul>
                {user.map(item => (
                    <li key={item.login.uuid}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </>
    );
}

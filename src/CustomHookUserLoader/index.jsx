import React from 'react';
import Spinner from '../components/Spinner';
import { useData } from '../hooks';

function CustomHookUserLoader() {
    const load = () => {
        return fetch('/users.json').then(res => res.json());
    };

    const { data, error, isFetching } = useData(load);

    if (!isFetching && data) {
        return (
            <div>
                {data.map(({ id, name }) => (
                    <div key={id}>
                        ID: {id}, NAME: {name}
                    </div>
                ))}
            </div>
        );
    }
    if (error) return <div>ERROR</div>;
    return <Spinner />;
}

export default CustomHookUserLoader;
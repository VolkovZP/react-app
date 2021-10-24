import React, { useEffect, useReducer } from 'react';
import Spinner from '../Spinner';
import { initialState, reducer } from './reduser';

function Chat(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        dispatch({
            type: 'DATA_RESPONSE_REQUEST',
        });
        fetch('/chat.json')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: 'DATA_RESPONSE_SUCCESS',
                    data,
                });
            })
            .catch(error => dispatch({ type: 'DATA_RESPONSE_ERROR', error }));
    }, []);

    if (state.isFetching) {
        return <Spinner />;
    } else if (state.error) {
        return <div>ERROR</div>;
    } else {
        return (
            <div>
                {state.data.messages.map(msg => (
                    <div key={msg.id}>
                        <h3>{msg.author.name}</h3>
                        <p>{msg.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Chat;


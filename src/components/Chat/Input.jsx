import React from 'react';

export default (props) => {

    return (
        <form>
            <input type="text" onChange={ev => props.change(ev.target.value)} value={props.value} />
            <button onClick={ev => props.sendMessage(ev)}>Send</button>
        </form>
    );
}


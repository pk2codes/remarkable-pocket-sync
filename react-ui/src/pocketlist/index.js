import React from 'react';
import {fetchPocketList} from "./actions";

class PocketList extends React.Component{
    render() {
        return <div>
            <h1>The current pocket list to be synced:</h1>
            <button onClick={fetchPocketList}>Load list</button>
        </div>
    }
}

export default PocketList;
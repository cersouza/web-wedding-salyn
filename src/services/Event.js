import Data from '../../config/data.json';

function Event(uniqueName) {
    let data = Data;

    const get = () => {
        return data.find(event => event.uniqueName == uniqueName);
    }

    return {
        get
    }
}

export default Event;
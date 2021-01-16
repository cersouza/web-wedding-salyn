import Config from '../config';

function Event(uniqueName) {
    let data = Config;

    const get = () => {
        return data.find(event => event.uniqueName == uniqueName);
    }

    return {
        get
    }
}

export default Event;
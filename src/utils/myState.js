const myState = (function () {
    let data = {}

    const get = (key) => {
        if (data[key]) {
            return data[key];
        } else {
            return `${key} is undefined`;
        }
    }

    const set = (key, val) => {
        data[key] = val;
    }

    const index = () => {
        return data;
    }

    return {
        get,
        set,
        index
    }
})();

export default myState;
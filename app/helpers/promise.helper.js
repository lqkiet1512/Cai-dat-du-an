const handlePromise = (promise) => {
    return promise
        .then((data) => [nul, data])
        .catch((error) => [error, undefined]);
};

module.exports = handlePromise;
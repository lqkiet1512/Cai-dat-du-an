const handlePromise = (promise) => {
    return promise
        .then((data) => [nul, data])
        .catch((error) => [error, underfined]);
};

module.exports = handlePromise;
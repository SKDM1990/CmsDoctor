const storeToken = (value) => {
    if (value) {
        console.log("Store Token");
        localStorage.setItem("access_token", value);
    }
};

const getToken = () => {
    let access_token = localStorage.getItem("access_token");
    return { access_token };
};

const removeToken = () => {
    localStorage.removeItem("access_token");
};

export { storeToken, getToken, removeToken };
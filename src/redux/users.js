export const register = (values) => () => {
    const url = "https://5e33d48de0161c00140ac4fe.mockapi.io/users";
    const options = {
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        method: "POST",
    };

    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            alert("Register is successfully");
        });
};
export const login = (values) => () => {
    const url = "https://api-klinik-naga.herokuapp.com/users";
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
            alert("Login Is Successfuly");
        });
};
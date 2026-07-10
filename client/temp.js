const BASE_URL= "http://localhost:5000"

fetch(`${BASE_URL}/customers/1`)
    .then(response =>{
        // if (!response.ok) {
        //     throw new Error ('Customer is not found');
        // }
        console.log("status:", response.status);
        console.log("ok:",response.ok);

        return response.json()
            .then((body) => ( {response,body}));
    })
    .then(({response, body}) => {

        if (!response.ok) {
            throw new Error(body.message);
        }
        return body;
    })
    .then(body=> console.log(body))
    .catch(err=> {
        console.log("Network Error:", err);
    })
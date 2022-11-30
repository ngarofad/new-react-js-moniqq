import qs from 'qs';

const goEndpoint = "http://localhost:9000"

const auth = (client) => ({
    login: ({ username, password }) => client.post(goEndpoint + "/login",
        qs.stringify({
            username, password
        }),
        {
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            withCredentials: true
        }
    ),
    logout: () => client.get(goEndpoint + "/logout",{ withCredentials: true }),
    whoami: () => client.get(goEndpoint + "/whoami",{ withCredentials: true })
})


export default auth

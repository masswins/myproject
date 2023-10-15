import { useState } from "react";
import axios from "axios";

const ProjectID = "59992bbf-cde3-4f26-8ab1-8168dec1a7e8";

function Login() {
const [loginForm, setLoginForm] = useState({
    Email: "",
    Password: "",
});

const handleChange = (e) => {
    setLoginForm((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post(
        "https://gnte7mjwg9.execute-api.us-east-1.amazonaws.com/newdev/login/" +
        ProjectID,
        loginForm
    )
    .then((response) => {
        localStorage.setItem("USER_TOKEN", response.data.token);
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="string"
        name="Email"
        value={loginForm.Email}
        onChange={handleChange}
        placeholder="Email"
    />
    <input
        type="string"
        name="Password"
        value={loginForm.Password}
        onChange={handleChange}
        placeholder="Password"
    />
    <button type="submit">Login</button>
    </form>
);
}

export default Login;
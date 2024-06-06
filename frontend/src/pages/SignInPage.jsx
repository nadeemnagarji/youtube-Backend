import { useState } from "react";
import Input from "../components/Input";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const res = await axios.post("http://localhost:3000/api/v1/user/sign-in", {
      password: user.password,
      username: user.username,
      email: user.email,
    });

    console.log(res.data);
    const { accessToken } = res.data.data;
    const { _id } = res.data.data.user;
    console.log(accessToken);

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", _id);
      localStorage.setItem("name", res.data.data.user._id);
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <Wrapper>
      <div className=" max-sm:w-2/3 w-1/2  lg:w-1/4  py-10 px-5 rounded-md gap-10  bg-white flex  flex-col justify-center items-center">
        <h1 className=" text-3xl font-semibold ">PAYTM APP</h1>
        <form
          onSubmit={handleSubmit}
          className=" max-w-1/2 w-full   flex flex-col gap-2 justify-center items-center "
        >
          <Input
            label="Username"
            placeholder="username"
            name="username"
            type="email"
            onChange={handleChange}
          />
          <Input
            label="email"
            placeholder="uemail"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <Input
            label="Password"
            placeholder="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <button className="bg-green-500 w-full rounded py-1 " type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

import { useState } from "react";
import Input from "../components/Input";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    const formData = new FormData();
    formData.append("fullName", user.fullName);
    formData.append("email", user.email);
    formData.append("username", user.username);
    formData.append("password", user.password);

    if (avatar) {
      formData.append("avatar", avatar);
    }

    if (coverImage) {
      formData.append("coverImage", coverImage);
    }
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.data.statusCode === 201) {
        navigate("/");
      } else {
        navigate("/dashboard");
      }
      if (res.data.statusCode === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }

    navigate("/dashboard");
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "avatar") {
      setAvatar(files[0]);
    } else if (name === "coverImage") {
      setCoverImage(files[0]);
    }
  };

  return (
    <Wrapper>
      <div className=" py-3 px-5 rounded-md gap-10  bg-white flex  flex-col justify-center items-center">
        <h1 className=" text-3xl font-semibold ">REGISTER USER</h1>
        <form
          onSubmit={handleSubmit}
          className=" max-w-1/2 w-full   flex flex-col gap-2 justify-center items-center "
        >
          <Input
            label="Full Name"
            placeholder="Full Name"
            name="fullName"
            type="text"
            onChange={handleChange}
          />
          <Input
            label="Email"
            placeholder="email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <Input
            label="Username"
            placeholder="username"
            name="username"
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
          <div className="flex items-center  justify-between ">
            <label className=" text-sm mr-2" htmlFor="avatar">
              Upload Avatar
            </label>
            <input
              className=" text-sm"
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleFileChange}
              s
            />
          </div>
          <div className="flex">
            {" "}
            <label className=" text-sm mr-2" htmlFor="coverImage">
              Uplaod Cover Image
            </label>
            <input
              className=" text-sm"
              type="file"
              id="coverImage"
              name="coverImage"
              onChange={handleFileChange}
            />
          </div>

          <button className="bg-green-500 w-full rounded py-1 " type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </Wrapper>
  );
}

/*

*/

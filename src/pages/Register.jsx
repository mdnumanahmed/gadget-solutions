import { Link } from "react-router-dom";
import SocialLogin from "../components/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Result } from "postcss";

const Register = () => {
  const { createUser, updateUserData } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photo, email, password);

    // Create User with email and password
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        // update profile
        updateUserData(createdUser, name, photo)
          .then(() => {
            console.log("updated", name, photo);
          })
          .catch((error) => {
            console.log(error);
          });
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto flex justify-center py-10">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl text-purple-950 bg-purple-100 dark:bg-gray-50 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="block dark:text-gray-600">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="photo" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Your Photo URL"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-purple-600"
            />
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="bg-purple-700 text-white hover:bg-white hover:text-purple-700 block w-1/2 mx-auto p-3 text-center rounded-sm dark:text-gray-50 dark:bg-purple-600">
            Sign Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <SocialLogin />
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="underline dark:text-gray-800">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

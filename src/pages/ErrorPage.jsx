import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <section className="bg-gray-800 text-gray-100 min-h-screen">
        <div className="container mx-auto space-y-5 flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">Oops!</h1>
          <h1 className="text-4xl font-bold leading-none sm:text-9xl">
            <span className="text-violet-400">404</span>
          </h1>
          <h2 className="text-2xl font-bold leading-none">Page Not Found</h2>
          <p className="px-8 mt-8 mb-12 text-lg">
            {error.statusText || error.message}
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to={"/"}>
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;

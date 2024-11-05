import { Link, useRouteError } from "react-router-dom";

export const ErrorComponent = ({ containerClassName, imageClassName }) => {
  const error = useRouteError();

  console.log(error, "fassa");

  return (
    <div
      className={`${containerClassName} px-2 w-full min-h-screen flex flex-col justify-center items-center text-center gap-4`}
    >
      <img
        className={`${imageClassName} w-96`}
        src={"/images/404-img.svg"}
        alt="404-image"
      />
      {!error?.message ? (
        <h1 className="font-bold text-4xl">Oh no. We lost this page</h1>
      ) : (
        <h1 className="font-bold text-4xl">We have got an error!</h1>
      )}
      {error?.message ? (
        <p>{error.message}</p>
      ) : (
        <p>
          We searched everywhere but couldn’t find what you’re looking for.
          <br /> Let’s find a better place for you to go.
        </p>
      )}
      <Link to={"/"} v2={true}>
        Back to Homepage
      </Link>
    </div>
  );
};

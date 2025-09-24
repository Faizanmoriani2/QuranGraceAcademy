import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-50 to-teal-100 text-center px-6">
      <h1 className="text-6xl font-extrabold text-teal-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-cyan-400 hover:to-teal-400 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;

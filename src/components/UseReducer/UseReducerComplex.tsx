import { useReducer, useState } from "react";

function UseReducerComplex() {
  const initialState = {
    name: "",
    email: "",
    password: "",
    error: {
      name: "",
      email: "",
      password: "",
    },
  };

  function reducerFn(state: any, action: any) {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_EMAIL":
        return { ...state, email: action.payload };
      case "SET_PASSWORD":
        return { ...state, password: action.payload };
      case "SET_ERROR":
        return { ...state, error: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerFn, initialState);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let error: any = {};

    if (!state.name.trim()) {
      error.name = "Name is required";
    }
    if (
      !state.email.trim() ||
      !state.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      error.email = "Invalid email address";
    }
    if (!state.password.trim() || state.password.length < 6) {
      error.password = "Password must be at least 6 characters";
    }

    if (Object.keys(error).length > 0) {
      dispatch({ type: "SET_ERROR", payload: error });
      return;
    }

    alert("Form submitted successfully ✅");
       setSubmittedData({
      name: state.name,
      email: state.email,
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User Registration
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "SET_NAME", payload: e.target.value })
              }
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                state.error.name
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {state.error.name && (
              <p className="text-red-500 text-sm mt-1">{state.error.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                state.error.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {state.error.email && (
              <p className="text-red-500 text-sm mt-1">{state.error.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={state.password}
              onChange={(e) =>
                dispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${
                state.error.password
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {state.error.password && (
              <p className="text-red-500 text-sm mt-1">
                {state.error.password}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200 shadow-md"
          >
            Register
          </button>
        </form>

        {/* Preview */}
      {submittedData && (
          <div className="mt-6 bg-green-50 p-4 rounded-lg text-gray-600 text-sm border border-green-200">
            <h2 className="font-semibold text-green-700 mb-2">
              Submitted Data:
            </h2>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {submittedData.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {submittedData.email}
            </p>
          </div>
        )}
        {submittedData && (
            <h1>hello {submittedData.name}</h1>
        )}
      </div>
    </div>
  );
}

export default UseReducerComplex;

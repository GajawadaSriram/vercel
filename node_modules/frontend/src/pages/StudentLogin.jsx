import { useState } from "react";
import { Link } from "react-router-dom";

const StudentLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Attempting login for ${credentials.email || "student"}...`);
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <section className="w-full max-w-md space-y-6 rounded-2xl bg-white/85 p-8 shadow-lg backdrop-blur">
        <header className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Welcome back</h1>
          <p className="text-sm text-slate-500">
            Sign in to check your assigned bus and stay up to date.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              name="email"
              type="email"
              required
              value={credentials.email}
              onChange={handleChange}
            />
          </label>

          <label className="block space-y-1">
            <span className="text-sm font-medium text-slate-700">Password</span>
            <input
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200"
              name="password"
              type="password"
              required
              minLength={6}
              value={credentials.password}
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            Sign in
          </button>
        </form>

        <p className="text-center text-sm text-slate-500">
          Need an account?{" "}
          <Link className="font-medium text-sky-600 hover:underline" to="/register/student">
            Register
          </Link>
        </p>
      </section>
    </main>
  );
};

export default StudentLogin;



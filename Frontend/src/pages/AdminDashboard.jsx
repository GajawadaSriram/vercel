import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-slate-900">Admin Control Centre</h1>
        <p className="text-sm text-slate-600">
          Manage routes, buses and notifications from one place.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-3xl bg-white/90 p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-900">Route planner</h2>
          <p className="mt-2 text-sm text-slate-600">
            Create, edit or archive transport routes. Integrate with the backend API to persist
            changes once available.
          </p>
          <Link className="mt-4 inline-flex text-sm font-medium text-sky-600" to="/notifications">
            View route alerts →
          </Link>
        </article>

        <article className="rounded-3xl bg-white/90 p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-900">Bus assignments</h2>
          <p className="mt-2 text-sm text-slate-600">
            Track driver coverage and seat availability. Replace this placeholder with live data
            once the backend endpoints are wired.
          </p>
        </article>

        <article className="rounded-3xl bg-white/90 p-6 shadow-lg">
          <h2 className="text-xl font-semibold text-slate-900">Broadcast notifications</h2>
          <p className="mt-2 text-sm text-slate-600">
            Send route-specific updates to students and guardians. The real-time channel can be
            hooked in when Socket.IO is enabled on the API.
          </p>
        </article>
      </section>
    </main>
  );
};

export default AdminDashboard;



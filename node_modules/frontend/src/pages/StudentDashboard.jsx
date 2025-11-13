import { Link } from "react-router-dom";
import { useNotifications } from "../contexts/NotificationContext.jsx";

const StudentDashboard = () => {
  const { notifications } = useNotifications();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col gap-8 px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold text-slate-900">Student Dashboard</h1>
        <p className="text-sm text-slate-600">
          Overview of your transport assignments and latest notifications.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl bg-white/80 p-6 shadow">
          <h2 className="text-lg font-semibold text-slate-800">Assigned Bus</h2>
          <p className="mt-2 text-sm text-slate-600">
            Detailed bus assignment data will appear here once the backend API is connected.
          </p>
        </article>

        <article className="rounded-2xl bg-white/80 p-6 shadow">
          <h2 className="text-lg font-semibold text-slate-800">Route summary</h2>
          <p className="mt-2 text-sm text-slate-600">
            Track start and end locations plus estimated arrival times.
          </p>
        </article>

        <article className="rounded-2xl bg-white/80 p-6 shadow">
          <h2 className="text-lg font-semibold text-slate-800">Quick actions</h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-600">
            <li>• Update contact details</li>
            <li>• Download permission slips</li>
            <li>• View past notifications</li>
          </ul>
        </article>
      </section>

      <section className="rounded-3xl bg-white/90 p-6 shadow">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Latest notifications</h2>
            <p className="text-sm text-slate-500">Synced from the real-time channel.</p>
          </div>
          <Link
            to="/notifications"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-700"
          >
            View all
          </Link>
        </div>

        <ul className="mt-6 space-y-3">
          {notifications.length === 0 ? (
            <li className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-sm text-slate-500">
              Notifications will appear here once they are delivered.
            </li>
          ) : (
            notifications.slice(0, 5).map((notification) => (
              <li key={notification.id} className="rounded-xl bg-slate-50/80 p-4 shadow-sm">
                <p className="text-sm font-medium text-slate-900">{notification.title}</p>
                <p className="text-sm text-slate-600">{notification.message}</p>
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
};

export default StudentDashboard;



import { useNotifications } from "../contexts/NotificationContext.jsx";

const NotificationsPage = () => {
  const { notifications, clearNotifications } = useNotifications();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Notifications</h1>
          <p className="text-sm text-slate-600">
            All the alerts you have received from the transport team.
          </p>
        </div>
        <button
          type="button"
          onClick={clearNotifications}
          className="rounded-full bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-rose-600"
        >
          Clear all
        </button>
      </header>

      <section className="space-y-4">
        {notifications.length === 0 ? (
          <article className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-10 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800">
              You're all caught up!
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              New route updates and bus announcements will show up instantly.
            </p>
          </article>
        ) : (
          notifications.map((notification) => (
            <article
              key={notification.id}
              className="rounded-2xl bg-white/90 p-6 shadow transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {notification.title || "Transport update"}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{notification.message}</p>
              {notification.priority && (
                <p className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  {notification.priority}
                </p>
              )}
            </article>
          ))
        )}
      </section>
    </main>
  );
};

export default NotificationsPage;



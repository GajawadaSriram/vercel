const DriverDashboard = () => {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Driver Overview</h1>
        <p className="text-sm text-slate-600">
          Daily schedule, assigned route details and student passenger counts.
        </p>
      </header>

      <section className="rounded-3xl bg-white/90 p-6 shadow">
        <h2 className="text-xl font-semibold text-slate-900">Today's assignment</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Depart from campus depot at 6:30 AM</li>
          <li>• Complete north loop and return by 8:10 AM</li>
          <li>• Afternoon pickup begins at 3:40 PM</li>
        </ul>
      </section>

      <section className="rounded-3xl bg-white/90 p-6 shadow">
        <h2 className="text-xl font-semibold text-slate-900">Vehicle checklist</h2>
        <p className="mt-2 text-sm text-slate-600">
          Confirm vehicle inspection items before departure. This will be powered by the API once
          available.
        </p>
      </section>
    </main>
  );
};

export default DriverDashboard;



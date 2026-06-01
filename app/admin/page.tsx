"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Booking = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  propertySize: string;
  message: string;
  status: string;
};

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch("/api/admin/bookings", {
          cache: "no-store",
        });

        const data = await res.json();

        if (data.success) {
          setBookings(data.bookings);
        }
      } catch (error) {
        console.error("Failed to load bookings:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    const text = `${booking.name} ${booking.email} ${booking.phone} ${booking.service} ${booking.date}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  const total = bookings.length;
  const newLeads = bookings.filter((b) => b.status === "New").length;
  const contacted = bookings.filter((b) => b.status === "Contacted").length;
  const completed = bookings.filter((b) => b.status === "Completed").length;

  return (
    <main className="min-h-screen bg-[#F7F7FC] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#6C63FF]">
              ShineClean Admin
            </p>

            <h1 className="mt-4 text-5xl font-bold text-[#111111]">
              Booking Dashboard
            </h1>

            <p className="mt-3 text-lg text-gray-600">
              Manage customer booking requests from your Google Sheet.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-full bg-[#6C63FF] px-7 py-4 font-semibold text-white shadow-sm transition hover:bg-[#5B52E8]"
          >
            Back to Website
          </Link>
        </div>
        <button
  onClick={async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/admin/login";
  }}
  className="rounded-full border border-gray-300 px-7 py-4 font-semibold text-gray-700 hover:border-[#6C63FF] hover:text-[#6C63FF]"
>
  Logout
</button>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <DashboardCard title="Total Leads" value={total} />
          <DashboardCard title="New Leads" value={newLeads} />
          <DashboardCard title="Contacted" value={contacted} />
          <DashboardCard title="Completed" value={completed} />
        </div>

        <div className="mt-10 overflow-hidden rounded-[32px] bg-white shadow-sm ring-1 ring-gray-100">
          <div className="flex flex-col justify-between gap-5 border-b border-gray-100 p-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold text-[#111111]">
                Recent Booking Requests
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                View customer details, service type, preferred date, and notes.
              </p>
            </div>

            <input
              type="text"
              placeholder="Search name, phone, email, service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-200 px-5 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#6C63FF] md:w-[360px]"
            />
          </div>

          {loading ? (
            <div className="p-8 text-gray-600">Loading bookings...</div>
          ) : filteredBookings.length === 0 ? (
            <div className="p-8 text-gray-600">No bookings found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1050px] text-left">
                <thead className="bg-[#F7F7FC] text-sm font-bold uppercase tracking-wide text-gray-600">
                  <tr>
                    <th className="p-5">Name</th>
                    <th className="p-5">Phone</th>
                    <th className="p-5">Email</th>
                    <th className="p-5">Service</th>
                    <th className="p-5">Date</th>
                    <th className="p-5">Size</th>
                    <th className="p-5">Message</th>
                    <th className="p-5">Status</th>
                    <th className="p-5">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBookings.map((booking, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-100 text-gray-800 transition hover:bg-gray-50"
                    >
                      <td className="p-5 font-bold text-gray-950">
                        {booking.name || "-"}
                      </td>

                      <td className="p-5 text-gray-800">
                        {booking.phone || "-"}
                      </td>

                      <td className="p-5 text-gray-800">
                        {booking.email || "-"}
                      </td>

                      <td className="p-5 font-medium text-gray-900">
                        {booking.service || "-"}
                      </td>

                      <td className="p-5 text-gray-800">
                        {booking.date || "-"}
                      </td>

                      <td className="p-5 text-gray-800">
                        {booking.propertySize || "-"}
                      </td>

                      <td className="max-w-[260px] p-5 text-gray-700">
                        {booking.message || "-"}
                      </td>

                      <td className="p-5">
                        <span className="rounded-full bg-[#E9E7FF] px-4 py-2 text-sm font-bold text-[#6C63FF]">
                          {booking.status || "New"}
                        </span>
                      </td>

                      <td className="p-5">
                        <div className="flex gap-3">
                          {booking.phone && (
                            <a
                              href={`tel:${booking.phone}`}
                              className="rounded-full bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
                            >
                              Call
                            </a>
                          )}

                          {booking.email && (
                            <a
                              href={`mailto:${booking.email}`}
                              className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:border-[#6C63FF] hover:text-[#6C63FF]"
                            >
                              Email
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function DashboardCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-gray-100">
      <p className="text-sm font-semibold text-gray-500">{title}</p>
      <h2 className="mt-4 text-4xl font-bold text-[#111111]">{value}</h2>
    </div>
  );
}
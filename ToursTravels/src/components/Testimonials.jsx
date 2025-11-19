import { useEffect, useState } from "react";
import Api from "../api.js";
import SmartImage from "./SmartImage";

function Testimonials() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    Api.get("/testimonials")
      .then((res) => {
        console.log("API full response:", res); // <-- inspect this in devtools
        // safe extraction: axios usually places payload in res.data
        const payload = res?.data ?? res;

        // Try common places where the array might live
        let arr = Array.isArray(payload)
          ? payload
          : Array.isArray(payload?.data)
          ? payload.data
          : Array.isArray(payload?.results)
          ? payload.results
          : Array.isArray(payload?.items)
          ? payload.items
          : [];

        // If the object itself looks like a single testimonial, wrap it
        if (
          !arr.length &&
          payload &&
          (payload.id || payload._id || payload.message)
        ) {
          arr = [payload];
        }

        if (mounted) setTests(arr);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError(err?.message ?? "Failed to load");
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  // sample fallback so you can verify rendering while debugging
  const sample = [
    {
      id: 1,
      name: "Mike Taylor",
      role: "Designer",
      avatar: "https://i.pravatar.cc/80?img=12",
      message: "Great work!",
      date: "2025-01-01",
    },
    {
      id: 2,
      name: "Anita",
      role: "PM",
      avatar: "https://i.pravatar.cc/80?img=5",
      message: "Loved it.",
      date: "2025-02-02",
    },
  ];
  const display = tests.length ? tests : sample;

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ marginBottom: 12 }}>What People Say About Us.</h2>

        {loading && <div>Loading...</div>}
        {error && <div style={{ color: "red" }}>Error: {error}</div>}

        {!loading && !error && (
          <div className="test-grid">
            {display.map((t, index) => (
              <div className="testcard" key={t.id ?? t._id ?? index}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <SmartImage
                    src={t.avatar}
                    alt={t.name}
                    style={{ width: 48, height: 48, borderRadius: "50%" }}
                  />
                  <div>
                    <div style={{ fontWeight: 700 }}>{t.name ?? "Unknown"}</div>
                    <div style={{ color: "#666", fontSize: 13 }}>
                      {t.role ?? ""}
                    </div>
                  </div>
                </div>

                <p style={{ marginTop: 10 }}>"{t.message ?? ""}"</p>
                <div style={{ marginTop: 8, color: "#888", fontSize: 13 }}>
                  {t.date ?? ""}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;

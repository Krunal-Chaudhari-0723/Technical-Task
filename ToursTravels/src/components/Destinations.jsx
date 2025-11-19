import React, { useEffect, useState } from "react";
import Api from "../api.js"; 
import SmartImage from "./SmartImage";

function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchDestinations = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await Api.get("/destinations");
        if (!mounted) return;
        setDestinations(res?.data || []);
      } catch (err) {
        console.error("Destination fetch error", err);
        if (!mounted) return;

        if (err?.code === "ERR_NETWORK") {
          setError("Network Error — Check if backend is running.");
        } else {
          setError("Unable to load destinations — Please try later.");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchDestinations();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading)
    return (
      <section className="section">
        <div className="container">Loading Destinations...</div>
      </section>
    );

  if (error)
    return (
      <section className="section">
        <div className="container" style={{ color: "red" }}>{error}</div>
      </section>
    );

  return (
    <section className="section">
      <div className="container">
        <h2 style={{ marginBottom: 12 }}>Top Destinations</h2>

        {destinations.length === 0 ? (
          <div>No destinations available.</div>
        ) : (
          <div className="grid dest-grid">
            {destinations.map((d) => (
              <div className="card" key={d.id} style={{ cursor: "pointer" }}>
                <SmartImage src={d.image} alt={d.city} />
                <div className="card-body">
                  <h3>{d.city}</h3>
                  <div className="meta">
                    <span>{d.duration}</span>
                    <strong>{d.price}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Destinations;

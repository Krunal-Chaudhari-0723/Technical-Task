import React from "react";
import client1 from '../assets/company1.jpg';
import client2 from '../assets/company2.jpg';
import client3 from '../assets/company3.png';
import client4 from '../assets/company4.jpg';


export default function Clients() {
  const logos = [client1,client2,client3,client4];
  return (
    <section className="clients">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 20 }}>
        {logos.map((l, i) => <img key={i} src={l} alt={`client-${i}`} style={{ height: 100, objectFit: "contain" }} />)}
      </div>
    </section>
  );
}

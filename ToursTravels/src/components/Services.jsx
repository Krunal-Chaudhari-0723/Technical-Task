import React from 'react';
import dish from '../assets/dish.jpg'
import flight from '../assets/flight.jpg'
import setting from '../assets/setting.png';
import mike from '../assets/mike.jpg'

function Services() {
  const services = [
    { title: "Calculated Weather", desc: "Built wicket longer admire do barton vanity itself do in it.", img:dish },
    { title: "Best Flights", desc: "Engrossed listening. Park ate self they west hard for the." , img:flight},
    { title: "Local Events", desc: "Barton vanity itself do in it. Preferred to men it engrossed listening.",img:mike },
    { title: "Customization", desc: "We deliver outsourced aviation services for military customers.", img:setting }
  ];

  return (
    <div>
      <section className="section container">
        <p style={{textAlign:"center", color:"black"}}>CATAGORY</p>
        <h2 style={{ marginBottom: 12 }}>We Offer Best Services</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {services.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: 12,
                borderRadius: 8,
                flex: "1 1 220px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
              }}
            >
                 <img 
                src={item.img} 
                alt={item.title} 
                style={{ width: 40, height: 40, marginBottom: 10 }} 
                />
              <h3>{item.title}</h3>
              <p style={{ color: "#555" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;

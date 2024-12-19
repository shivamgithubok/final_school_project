import React from "react";
import "./Pricing.css"; // New CSS file for styling

const Info = () => {
  // Pricing Data
  const plans = [
    {
      title: "Beginner",
      price: "$19/month",
      features: [
        { feature: "Live Classes", available: true },
        { feature: "Attendance Tracking", available: true },
        { feature: "Performance Analytics", available: false },
        { feature: "Custom Reports", available: false },
      ],
    },
    {
      title: "Advanced",
      price: "$49/month",
      features: [
        { feature: "Live Classes", available: true },
        { feature: "Attendance Tracking", available: true },
        { feature: "Performance Analytics", available: true },
        { feature: "Custom Reports", available: false },
      ],
    },
    {
      title: "Pro",
      price: "$99/month",
      features: [
        { feature: "Live Classes", available: true },
        { feature: "Attendance Tracking", available: true },
        { feature: "Performance Analytics", available: true },
        { feature: "Custom Reports", available: true },
      ],
    },
  ];

  return (
    <section className="pricing_section">
      <h1 className="pricing_title">Choose Your Plan</h1>
      <div className="pricing_container">
        {plans.map((plan, index) => (
          <div key={index} className="pricing_card">
            <h2 className="plan_title">{plan.title}</h2>
            <p className="plan_price">{plan.price}</p>
            <ul className="plan_features">
              {plan.features.map((item, i) => (
                <li key={i} className="feature_item">
                  {item.available ? (
                    <span className="tick">✔</span>
                  ) : (
                    <span className="cross">✖</span>
                  )}
                  {item.feature}
                </li>
              ))}
            </ul>
            <button className="plan_button">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;

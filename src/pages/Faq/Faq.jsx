import Navigation from "../../components/Navigation/Navigation.jsx";
import "../Faq/Faq.scss";
import add from "../../assets/icons/add.svg";
import React, { useState } from "react";

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className="wrapper">
      <Navigation />
      <h4>Ordering</h4>
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <p>{item.question}</p>
              <span>{selected === i ? "-" : "+"}</span>
            </div>

            {selected === i && <div className="content">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "How can I place an order?",
    answer:
      "To place an order, you have many options. Drop by the shop to order in-person during our regular hours, order ahead for pick-up on Ritual, our app or for delivery on Uber Eats and Doordash.",
  },
  {
    question: "Can I order over the phone?",
    answer:
      "Phone orders are not possible at this time as we cannot process a transaction for your order via text or phone.",
  },
  {
    question: "Do you offer catering?",
    answer:
      "Yes! Burger Drops specializes in both on-site private catering and large group orders for your office or next celebration.",
  },
];

export default Faq;

import React from "react";

const priceArray = [
  {
    id: 1,
    icon: "patrick",
    titel: "Star Pack",
    price: "$10",
    price_input: false,
    desc: "Help us keep up with the work The Beach Collective does on a daily basis.",
  },
  {
    id: 2,
    icon: "crab",
    titel: "Crab Pack",
    price: "$25",
    price_input: false,
    desc: "Help support larger projects at The Beach Collective, such as beach cleanups.",
  },
  {
    id: 3,
    icon: "dolphin",
    titel: "Dolphin Pack",
    price: "$50",
    price_input: false,
    desc: "A larger amount with go towards our research on pollution reduction!",
  },
  {
    id: 4,
    icon: "whale",
    titel: "Whale Pack",
    price: "$10",
    price_input: true,
    desc: "Any amount helps! Donate a custom amount and we’ll send you a thank you note.",
  },
];

const Pricing = () => {
  return (
    <section className="container" id="pricing" aria-label="pricing section">
      <h2 className="h2 text-gray-100 text-center">Donate to the cause</h2>
      <p className="text-gray-200 text-center">
        Our ocean unifies our world like nothing else. One way you can
        participate is by donating. Your contributions will help our ongoing
        activities and research to strive to keep our oceans sparkling!
      </p>
      <div className="price_wrapper">
        {priceArray.map((item) => {
          const { id, icon, titel, price, price_input, desc } = item;
          return (
            <article
              key={id}
              className={`price_card price_card_${id} text-center`}
            >
              <div className="price_icon">
                <img src={`/assets/images/${icon}.svg`} alt="" />
              </div>
              <h3 className="price_title text-gray-100">{titel}</h3>
              {price_input ? (
                <div className="d-flex">
                  <span>$</span>
                  <div className="price_input d-flex">
                    <input type="number" />
                    <span>Enter amount</span>
                  </div>
                </div>
              ) : (
                <p className="price_tag fw-bold text-gray-100">{price}</p>
              )}

              <p className="price_desc text-gray-200">{desc}</p>
              <button className="price_button">Donate now</button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;

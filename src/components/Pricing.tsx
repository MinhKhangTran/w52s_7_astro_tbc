import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

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
  const [index, setIndex] = useState(2);
  useEffect(() => {
    if (index > priceArray.length) {
      setIndex(1);
    }
    if (index < 1) {
      setIndex(priceArray.length);
    }
  }, [index]);

  return (
    <section className="container" id="pricing" aria-label="pricing section">
      <h2 className="h2 text-gray-100 text-center">Donate to the cause</h2>
      <p className="text-gray-200 text-center">
        Our ocean unifies our world like nothing else. One way you can
        participate is by donating. Your contributions will help our ongoing
        activities and research to strive to keep our oceans sparkling!
      </p>
      <div className="price_wrapper">
        {priceArray.map((item, itemIndex) => {
          const { id, icon, titel, price, price_input, desc } = item;
          let position = "nextSlide";
          if (itemIndex + 1 === index) {
            position = "activeSlide";
          }
          if (
            itemIndex + 1 === index - 1 ||
            (index === 2 && itemIndex === priceArray.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article
              key={id}
              className={`price_card price_card_${id} text-center ${position}`}
            >
              <div className="price_icon">
                <img src={`/assets/images/${icon}.svg`} alt="" />
              </div>
              <h3 className="price_title text-gray-100 fw-bold">{titel}</h3>
              {price_input ? (
                <div className="wrapper">
                  <div className="d-flex price_input_wrapper">
                    <span className="price_input_dollar">$</span>
                    <div className="price_input d-flex">
                      <input type="number" />
                      {/* <span>Enter amount</span> */}
                    </div>
                  </div>
                  <p className="price_input_text">Enter amount</p>
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
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.65685 0.292893L0.292892 6.65685C-0.0976315 7.04738 -0.0976315 7.68054 0.292892 8.07107L6.65685 14.435C7.04738 14.8256 7.68054 14.8256 8.07107 14.435C8.46159 14.0445 8.46159 13.4113 8.07107 13.0208L3.41421 8.36396H17V6.36396H3.41421L8.07107 1.70711C8.46159 1.31658 8.46159 0.683418 8.07107 0.292893C7.68054 -0.0976311 7.04738 -0.0976311 6.65685 0.292893Z"
            fill="#270EC5"
          />
        </svg>
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3431 0.292893L16.7071 6.65685C17.0976 7.04738 17.0976 7.68054 16.7071 8.07107L10.3431 14.435C9.95262 14.8256 9.31946 14.8256 8.92893 14.435C8.53841 14.0445 8.53841 13.4113 8.92893 13.0208L13.5858 8.36396H0V6.36396H13.5858L8.92893 1.70711C8.53841 1.31658 8.53841 0.683418 8.92893 0.292893C9.31946 -0.0976311 9.95262 -0.0976311 10.3431 0.292893Z"
            fill="#270EC5"
          />
        </svg>
      </button>
      <div className="dot_wrapper">
        {Array.from({ length: 4 }, (_, dotIndex) => {
          return (
            <div
              onClick={() => {
                setIndex(dotIndex + 1);
              }}
              className={`dot ${dotIndex + 1 === index ? "active" : ""}`}
            ></div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;

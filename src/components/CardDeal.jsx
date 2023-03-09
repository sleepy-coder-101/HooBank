import React from "react";

import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find better card deals <br className="sm:block hidden" />
        effortlessly
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With HooBank's user-friendly platform, you can effortlessly find better
        card deals in just a few clicks. Our advanced search tools and
        personalized recommendations make it easy to find the perfect credit
        card for your needs.
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;

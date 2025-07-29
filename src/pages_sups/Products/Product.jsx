import React from "react";
import Image from "next/image";
import { league } from "../Home/Bannar/Bannar";
import Link from "next/link";

export default function Product({ bannar, title, caption, linkPage }) {
  return (
    <section className="ERP_bannar">
      <div className="products">
        <img loading="lazy" src={bannar.src} alt="product" className="bannar" />
        <div className="head-section">
          <div className="mb-4">
            <h1 className={"grass_title " + league.className}>{title}</h1>
          </div>
          <div className="mb-4">
            <p>{caption}</p>
          </div>
          <div
            className="d-flex justify-content-center m-auto"
            style={{ maxWidth: "300px" }}
          >
            <a href={linkPage}>{"Try For Free"}</a>
            <Link href="/windmaster/pricing">Pricing</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

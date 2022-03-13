import React, { useEffect, useRef, useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import PortfolioFilter from "../../elements/Portfolio/PortfolioFilter";
import PortfolioItem from "./PortfolioItem";
import Shuffle from "shufflejs";
import ProductItem from "./ProductItem";

const PortoflioSix = ({ filter, layout, columns, data, type, classAppend, space }) => {
  const categories = ["all", "design", "web", "branding", "print"];
  const element = useRef();
  const [shuffle, setShuffle] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const [photo, setPhoto] = useState(0);

  const closeLightbox = () => {
    setIsOpen(false);
  };
  const openLightbox = (e, photo) => {
    e.preventDefault();
    setPhoto(photo);
    setIsOpen(true);
  };

  useEffect(() => {
    if (element.current) {
      setShuffle(
        new Shuffle(element.current, {
          itemSelector: ".portfolio-item",
        })
      );
      return () => {
        element.current = {};
      };
    }
  }, []);

  const filterElements = (evt) => {
    const btn = evt.currentTarget;
    evt.target.parentElement
      .querySelectorAll(".active")
      .forEach((e) => e.classList.remove("active"));
    evt.currentTarget.classList.add("active");
    const cat = btn.getAttribute("value");
    shuffle.filter((element) => {
      return element.getAttribute("data-groups").toLowerCase().includes(cat);
    });
  };

  return (
    <section className={classAppend ? classAppend : null}>
      <div className={"container" + (layout === "wide" ? "-fluid" : "")}>
        <div className="row">
          <div className="container text-center">
            {filter === "true" ? (
              <PortfolioFilter
                categories={categories}
                handleClick={filterElements}
              />
            ) : null}
            <ul
              id="portfolio-grid"
              ref={element}
              className={
                (columns ? columns : "three") + "-column hover-two row "
              }
            >
              {type === "masonry"
                ? data.map((item) => (
                    <PortfolioItem
                      title={item.title}
                      category={item.category}
                      image={item.image}
                      links={item.links}
                      key={item.id}
                      groups={item.groups}
                      columns={columns}
                      type="masonry"
                      openLightbox={openLightbox}
                    />
                  ))
                : data.map((item) => (
                    <ProductItem
                      title={item.title}
                      category={item.category}
                      image={item.image}
                      links={item.links}
                      key={item.id}
                      groups={item.groups}
                      type="product"
                      space={space}
                      openLightbox={openLightbox}
                    />
                  ))}
            </ul>
            {isOpen && (
              <Lightbox
                mainSrc={require("../../assets/images/" + photo)}
                onCloseRequest={() => closeLightbox()}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortoflioSix;

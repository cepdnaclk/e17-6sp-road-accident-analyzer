import React from "react";
import dataShop from "../../data/OnlineShop/basic-shop-data.json";
import dataMasonryShop from "../../data/OnlineShop/masonry-shop-data.json";
import ShopItem from "./ShopItem";
import ShopMasonryItem from "./ShopMasonryItem";
import Pagination from "../../components/Pagination/Pagination";
import ShopWrapper from "./ShopWrapper";
import SidebarForShop from "../Sidebar/SidebarForShop";
import ShopMasonryWrapper from "./ShopMasonryWrapper";

const ShopContent = ({ layout, pagination }) => (
  <section>
    <div
      className={
        "container" +
        (layout === "fullwidth" || layout === "masonry" ? "-fluid" : "")
      }
    >
      <ShopMasonryWrapper layout={layout}>
        <div className="row">
          <ShopWrapper layout={layout}>
            {layout === "masonry" ? (
              dataMasonryShop.map((product) => (
                <ShopMasonryItem
                  key={product.id}
                  image={product.image}
                  title={product.title}
                  currency={product.currency}
                  price={product.price}
                  oldPrice={product.oldprice}
                />
              ))
            ) : layout === "standard" ? (
              <div className="row">
                {dataShop
                  .filter((v, i) => i < 6)
                  .map((product) => (
                    <ShopItem
                      key={product.id}
                      layout={layout}
                      image={product.image}
                      title={product.title}
                      currency={product.currency}
                      price={product.price}
                      oldPrice={product.oldprice}
                    />
                  ))}
              </div>
            ) : (
              dataShop.map((product) => (
                <ShopItem
                  key={product.id}
                  layout={layout}
                  image={product.image}
                  title={product.title}
                  currency={product.currency}
                  price={product.price}
                  oldPrice={product.oldprice}
                />
              ))
            )}
          </ShopWrapper>
          {layout === "standard" ? <SidebarForShop /> : null}
        </div>
      </ShopMasonryWrapper>
      {pagination === "true" ? (
        <div className="row">
          <div className="col-md-12">
            <Pagination
              postsPerPage="6"
              page="1"
              totalPosts="20"
              currentPage="1"
            />
          </div>
        </div>
      ) : null}
    </div>
  </section>
);

export default ShopContent;

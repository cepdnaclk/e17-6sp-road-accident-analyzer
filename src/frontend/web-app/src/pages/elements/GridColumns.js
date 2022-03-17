import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import FooterOne from "../../components/Footer/FooterOne";

const GridColumns = () => (
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Grid Columns" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-20">
            <h4>Full Width</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper risus nec neque ultrices convallis. In vel fringilla
              lacus. Nunc sed eleifend nunc, a consectetur augue. Praesent et
              ante non enim auctor condimentum sed sed erat. Donec nunc erat,
              dignissim in mauris sit amet, varius lobortis ligula. Etiam quis
              dolor at metus feugiat dapibus nec quis nisi. Sed dictum, orci ac
              interdum lacinia, nisl nisl consectetur ante, id semper felis orci
              eu neque. Sed ante lacus, vestibulum quis vestibulum et, sagittis
              et ante.
            </p>
          </div>
        </div>
        <hr className="mb-50 mt-50" />
        <div className="row">
          <div className="col-md-6 mb-20 col-sm-6">
            <h4>One Half</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              similique consectetur ducimus quod dignissimos maxime, eum
              distinctio facere ab. Qui optio cum rem commodi eligendi fuga,
              praesentium quaerat eveniet delectus.
            </p>
          </div>
          <div className="col-md-6 mb-20 col-sm-6">
            <h4>One Half</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              similique consectetur ducimus quod dignissimos maxime, eum
              distinctio facere ab. Qui optio cum rem commodi eligendi fuga,
              praesentium quaerat eveniet delectus.
            </p>
          </div>
        </div>
        <hr className="mb-50 mt-50" />
        <div className="row">
          <div className="col-md-4 mb-20 col-sm-4">
            <h4>One Third</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              similique consectetur ducimus quod dignissimos maxime, eum
              distinctio facere ab. Qui optio cum rem commodi eligendi fuga,
              praesentium quaerat eveniet delectus.
            </p>
          </div>
          <div className="col-md-4 mb-20 col-sm-4">
            <h4>One Third</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              similique consectetur ducimus quod dignissimos maxime, eum
              distinctio facere ab. Qui optio cum rem commodi eligendi fuga,
              praesentium quaerat eveniet delectus.
            </p>
          </div>
          <div className="col-md-4 mb-20 col-sm-4">
            <h4>One Third</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              similique consectetur ducimus quod dignissimos maxime, eum
              distinctio facere ab. Qui optio cum rem commodi eligendi fuga,
              praesentium quaerat eveniet delectus.
            </p>
          </div>
        </div>
        <hr className="mb-50 mt-50" />
        <div className="row">
          <div className="col-md-3 mb-20 col-sm-6">
            <h4>One Fourth</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              similique consectetur ducimus quod dignissimos maxime, eum
              distinctio facere ab. Qui optio cum rem commodi eligendi fuga,
              praesentium quaerat eveniet delectus.
            </p>
          </div>
          <div className="col-md-3 mb-20 col-sm-6">
            <h4>One Fourth</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              similique consectetur ducimus quod dignissimos maxime, eum
              distinctio facere ab. Qui optio cum rem commodi eligendi fuga,
              praesentium quaerat eveniet delectus.
            </p>
          </div>
          <div className="col-md-3 mb-20 col-sm-6">
            <h4>One Fourth</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              similique consectetur ducimus quod dignissimos maxime, eum
              distinctio facere ab. Qui optio cum rem commodi eligendi fuga,
              praesentium quaerat eveniet delectus.
            </p>
          </div>
          <div className="col-md-3 mb-20 col-sm-6">
            <h4>One Fourth</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
              similique consectetur ducimus quod dignissimos maxime, eum
              distinctio facere ab. Qui optio cum rem commodi eligendi fuga,
              praesentium quaerat eveniet delectus.
            </p>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>
);

export default GridColumns;

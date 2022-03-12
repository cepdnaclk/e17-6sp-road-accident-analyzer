import React from "react";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";
import PageTitleWidget from "../../components/PageTitle/PageTitleWidget";
import FooterOne from "../../components/Footer/FooterOne";
import { Alert } from "react-bootstrap";
import AlertDismissible from "../../elements/AlertDismissible";

const Alerts = () =>(
  <Loader>
    <HeaderOne />
    <PageTitleWidget title="Alerts" />
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2 className="mb-30">Outline Alerts</h2>
            <Alert className="outline-alert" variant="primary">
              Hi! I'm a simple primary alert.
            </Alert>
            <Alert className="outline-alert" variant="secondary">
              Sure! Nothing will work without me, secondary alert.
            </Alert>
            <Alert className="outline-alert" variant="success">
              Well done! you successfully read this important alert message.
            </Alert>
            <Alert className="outline-alert" variant="info">
              Heads up! this alert needs your attention, but it's not super
              important.
            </Alert>
            <Alert className="outline-alert" variant="warning">
              Warning! better check yourself, you're not looking too good.
            </Alert>
            <Alert className="outline-alert" variant="danger">
              Oh snap! change a few things up and try submitting again.
            </Alert>
            <Alert className="outline-alert" variant="light">
              Ough! I'm feeling a little faded. :)
            </Alert>
            <Alert className="outline-alert" variant="dark">
              Be cool! The right effect in the right place.
            </Alert>
            <div className="mt-50"></div>
            <h2 className="mb-30">Default Alerts</h2>
            <Alert variant="primary" className="border-radius-25">
              Hi! I'm a simple primary alert.
            </Alert>
            <Alert variant="secondary" className="border-radius-25">
              Sure! Nothing will work without me, secondary alert.
            </Alert>
            <Alert className="border-radius-25" variant="success">
              Well done! you successfully read this important alert message.
            </Alert>
            <Alert className="border-radius-25" variant="info">
              Heads up! this alert needs your attention, but it's not super
              important.
            </Alert>
            <Alert className="border-radius-25" variant="warning">
              Warning! better check yourself, you're not looking too good.
            </Alert>
            <Alert className="border-radius-25" variant="danger">
              Oh snap! change a few things up and try submitting again.
            </Alert>
            <Alert className="border-radius-25" variant="light">
              Ough! I'm feeling a little faded. :)
            </Alert>
            <Alert className="border-radius-25" variant="dark">
              Be cool! The right effect in the right place.
            </Alert>
            <div className="mt-50"></div>
            <h2 className="mb-30">Dismissible Alerts</h2>
            <AlertDismissible variant="primary">
              Hi! I'm a simple primary alert.
            </AlertDismissible>
            <AlertDismissible variant="secondary">
              Sure! Nothing will work without me, secondary alert.
            </AlertDismissible>
            <AlertDismissible variant="success">
              Well done! you successfully read this important alert message.
            </AlertDismissible>
            <AlertDismissible variant="info">
              Heads up! this alert needs your attention, but it's not super
              important.
            </AlertDismissible>
            <AlertDismissible variant="warning">
              Warning! better check yourself, you're not looking too good.
            </AlertDismissible>
            <AlertDismissible variant="danger">
              Oh snap! change a few things up and try submitting again.
            </AlertDismissible>
            <AlertDismissible variant="light">
              Ough! I'm feeling a little faded. :)
            </AlertDismissible>
            <AlertDismissible variant="dark">
              Be cool! The right effect in the right place.
            </AlertDismissible>
          </div>
        </div>
      </div>
    </section>
    <FooterOne />
  </Loader>);

export default Alerts;

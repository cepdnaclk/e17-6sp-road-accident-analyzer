import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Home pages
import CreativeAgency from "./pages/home/CreativeAgency";
import SmallBusiness from "./pages/home/SmallBusiness";
import CorporateBusiness from "./pages/home/CorporateBusiness";
import StartupBusiness from "./pages/home/StartupBusiness";
import MinimalDesign from "./pages/home/MinimalDesign";
import CreativeOnePage from "./pages/home/CreativeOnePage";
import CreativePortfolio from "./pages/home/CreativePortfolio";
import PersonalResume from "./pages/home/PersonalResume";
import SEOAgency from "./pages/home/SEOAgency";
import DigitalAgency from "./pages/home/DigitalAgency";
import Architecture from "./pages/home/Architecture";
import Restaurant from "./pages/home/Restaurant";
import OnlineShop from "./pages/home/OnlineShop";
import Photography from "./pages/home/Photography";
import GymFitness from "./pages/home/GymFitness";
import AppStyle from "./pages/home/AppStyle";
import TravelAgency from "./pages/home/TravelAgency";
import Construction from "./pages/home/Construction";
import Music from "./pages/home/Music";
import Weddings from "./pages/home/Weddings";
import DesignStudio from "./pages/home/DesignStudio";

// Pages
import AboutUs from "./pages/about/AboutUs";
import AboutCreative from "./pages/about/AboutCreative";
import ServiceSimple from "./pages/services/ServiceSimple";
import ServiceCreative from "./pages/services/ServiceCreative";
import ContactSimple from "./pages/contact/ContactSimple";
import ContactCreative from "./pages/contact/ContactCreative";
import Page404 from "./pages/others/Page404";
import ComingSoon from "./pages/others/ComingSoon";
import FAQs from "./pages/others/FAQs";
import TermCondition from "./pages/others/TermCondition";
import Privacy from "./pages/others/Privacy";
import Career from "./pages/others/Career";
import Login from "./pages/others/Login";

// Blog
import BlogStandard from "./pages/blog/BlogStandard";
import BlogGrid from "./pages/blog/BlogGrid";
import BlogSidebar from "./pages/blog/BlogSidebar";
import BlogMasonry from "./pages/blog/BlogMasonry";
import BlogCarousel from "./pages/blog/BlogCarousel";
import BlogSidebarRight from "./pages/blog/BlogSidebarRight";
import BlogSidebarLeft from "./pages/blog/BlogSidebarLeft";

// Portfolio
import PortfolioBoxedTwo from "./pages/portfolio/PortfolioBoxedTwo";
import PortfolioBoxedThree from "./pages/portfolio/PortfolioBoxedThree";
import PortfolioBoxedFour from "./pages/portfolio/PortfolioBoxedFour";
import PortfolioBoxedSpaceTwo from "./pages/portfolio/PortfolioBoxedSpaceTwo";
import PortfolioBoxedSpaceThree from "./pages/portfolio/PortfolioBoxedSpaceThree";
import PortfolioBoxedSpaceFour from "./pages/portfolio/PortfolioBoxedSpaceFour";
import PortfolioWideTwo from "./pages/portfolio/PortfolioWideTwo";
import PortfolioWideThree from "./pages/portfolio/PortfolioWideThree";
import PortfolioWideFour from "./pages/portfolio/PortfolioWideFour";
import PortfolioWideSpaceTwo from "./pages/portfolio/PortfolioWideSpaceTwo";
import PortfolioWideSpaceThree from "./pages/portfolio/PortfolioWideSpaceThree";
import PortfolioWideSpaceFour from "./pages/portfolio/PortfolioWideSpaceFour";
import SinglePortfolio from "./pages/portfolio/SinglePortfolio";

// Shops
import ShopFullwidth from "./pages/shops/ShopFullwidth";
import ShopStandard from "./pages/shops/ShopStandard";
import ShopBoxed from "./pages/shops/ShopBoxed";
import ShopMasonry from "./pages/shops/ShopMasonry";
import ShopSingleProduct from "./pages/shops/ShopSingleProduct";
import ShopCart from "./pages/shops/ShopCart";
import ShopCheckout from "./pages/shops/ShopCheckout";

// Elements
import Buttons from "./pages/elements/Buttons";
import Typography from "./pages/elements/Typography";
import Alerts from "./pages/elements/Alerts";
import PricingTables from "./pages/elements/PricingTables";
import CallToActions from "./pages/elements/CallToActions";
import ParallaxSections from "./pages/elements/ParallaxSections";
import Tabs from "./pages/elements/Tabs";
import Accordions from "./pages/elements/Accordions";
import Sliders from "./pages/elements/Sliders";
import ProgressBars from "./pages/elements/ProgressBars";
import ContactForms from "./pages/elements/ContactForms";
import GoogleMaps from "./pages/elements/GoogleMaps";
import ProgressBarRing from "./pages/elements/ProgressBarRing";
import ThemeIcons from "./pages/elements/ThemeIcons";
import BoxedIcons from "./pages/elements/BoxedIcons";
import GridColumns from "./pages/elements/GridColumns";
import TeamMembers from "./pages/elements/TeamMembers";
import Countdowns from "./pages/elements/Countdowns";
import ScrollToTop from "./helpers/ScrollToTop";
import Demos from "./pages/Demos";

function App() {

  return (
    <Router basename={"/"}>
      <ScrollToTop>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demos} />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/creative-agency`}
            component={CreativeAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/small-business`}
            component={SmallBusiness}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/corporate-business`}
            component={CorporateBusiness}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/startup-business`}
            component={StartupBusiness}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/minimal-design`}
            component={MinimalDesign}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/creative-onepage`}
            component={CreativeOnePage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/creative-portfolio`}
            component={CreativePortfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/personal-resume`}
            component={PersonalResume}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/seo-agency`}
            component={SEOAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/digital-agency`}
            component={DigitalAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/architecture`}
            component={Architecture}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/restaurant`}
            component={Restaurant}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/online-shop`}
            component={OnlineShop}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/photography`}
            component={Photography}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/gym-fitness`}
            component={GymFitness}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/app-style`}
            component={AppStyle}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/travel-agency`}
            component={TravelAgency}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/construction`}
            component={Construction}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/music`}
            component={Music}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/weddings`}
            component={Weddings}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/design-studio`}
            component={DesignStudio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about-us`}
            component={AboutUs}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about-creative`}
            component={AboutCreative}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-simple`}
            component={ServiceSimple}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-creative`}
            component={ServiceCreative}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-simple`}
            component={ContactSimple}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-creative`}
            component={ContactCreative}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/404-page`}
            component={Page404}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/coming-soon`}
            component={ComingSoon}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/faqs`}
            component={FAQs}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/term-condition`}
            component={TermCondition}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/privacy`}
            component={Privacy}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/career`}
            component={Career}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            component={Login}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog/:blogID`}
            component={BlogStandard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-grid`}
            component={BlogGrid}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-sidebar`}
            component={BlogSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-masonry`}
            component={BlogMasonry}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-carousel`}
            component={BlogCarousel}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-sidebar-right`}
            component={BlogSidebarRight}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-sidebar-left`}
            component={BlogSidebarLeft}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/box-2-columns`}
            component={PortfolioBoxedTwo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/box-3-columns`}
            component={PortfolioBoxedThree}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/box-4-columns`}
            component={PortfolioBoxedFour}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/box-space-2-columns`}
            component={PortfolioBoxedSpaceTwo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/box-space-3-columns`}
            component={PortfolioBoxedSpaceThree}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/box-space-4-columns`}
            component={PortfolioBoxedSpaceFour}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/wide-2-columns`}
            component={PortfolioWideTwo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/wide-3-columns`}
            component={PortfolioWideThree}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/wide-4-columns`}
            component={PortfolioWideFour}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/wide-space-2-columns`}
            component={PortfolioWideSpaceTwo}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/wide-space-3-columns`}
            component={PortfolioWideSpaceThree}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/wide-space-4-columns`}
            component={PortfolioWideSpaceFour}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/single-portfolio`}
            component={SinglePortfolio}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-fullwidth`}
            component={ShopFullwidth}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-standard`}
            component={ShopStandard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-boxed`}
            component={ShopBoxed}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-masonry`}
            component={ShopMasonry}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-product`}
            component={ShopSingleProduct}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-cart`}
            component={ShopCart}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-checkout`}
            component={ShopCheckout}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/buttons`}
            component={Buttons}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/typography`}
            component={Typography}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/alerts`}
            component={Alerts}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/pricing-tables`}
            component={PricingTables}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/call-to-action`}
            component={CallToActions}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/parallax-section`}
            component={ParallaxSections}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tabs`}
            component={Tabs}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/accordions`}
            component={Accordions}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/sliders`}
            component={Sliders}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/progress-bar`}
            component={ProgressBars}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-form`}
            component={ContactForms}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/google-maps`}
            component={GoogleMaps}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/progress-bar-ring`}
            component={ProgressBarRing}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/theme-icons`}
            component={ThemeIcons}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/boxed-icons`}
            component={BoxedIcons}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/grid-columns`}
            component={GridColumns}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/team-member`}
            component={TeamMembers}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/countdowns`}
            component={Countdowns}
          />
          <Route component={Page404} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;

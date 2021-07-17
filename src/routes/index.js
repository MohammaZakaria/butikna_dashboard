import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Preloader from './../components/layouts/Preloader';
import Dashboard from '../components/pages/Dashboard';
import Accordions from './../components/pages/Accordions';
import Addproduct from './../components/pages/Addproduct';
import Alerts from './../components/pages/Alerts';
import Animations from './../components/pages/Animations';
import Badges from './../components/pages/Badges';
import Basictables from './../components/pages/Basictables';
import Breadcrumbs from './../components/pages/Breadcrumbs';
import Buttons from './../components/pages/Buttons';
import Cards from './../components/pages/Cards';
import Chartjs from './../components/pages/Chartjs';
import Chat from './../components/pages/Chat';
import Cropper from './../components/pages/Cropper';
import Customerlist from './../components/pages/Customerlist';
import Customerreview from './../components/pages/Customerreview';
import Datatables from './../components/pages/Datatables';
import Draggables from './../components/pages/Draggables';
import Email from './../components/pages/Email';
import Flaticons from './../components/pages/Flaticons';
import Fontawesome from './../components/pages/Fontawesome';
import Formelements from './../components/pages/Formelements';
import Formlayouts from './../components/pages/Formlayouts';
import Formvalidation from './../components/pages/Formvalidation';
import Formwizard from './../components/pages/Formwizard';
import Googlemaps from './../components/pages/Googlemaps';
import Invoicedetail from './../components/pages/Invoicedetail';
import Invoicelist from './../components/pages/Invoicelist';
import Materialize from './../components/pages/Materialize';
import Menucatalogue from './../components/pages/Menucatalogue';
import Menugrid from './../components/pages/Menugrid';
import Menulist from './../components/pages/Menulist';
import Modals from './../components/pages/Modals';
import Googlechart from './../components/pages/Googlechart';
import Orders from './../components/pages/Orders';
import Pagination from './../components/pages/Pagination';
import Preloaders from './../components/pages/Preloaders';
import Productdetail from './../components/pages/Productdetail';
import Progressbars from './../components/pages/Progressbars';
import Rangeslider from './../components/pages/Rangeslider';
import Rating from './../components/pages/Rating';
import Restaurantlist from './../components/pages/Restaurantlist';
import Sales from './../components/pages/Sales';
import Sliders from './../components/pages/Sliders';
import Socialactivity from './../components/pages/Socialactivity';
import Sweetalerts from './../components/pages/Sweetalerts';
import Tabs from './../components/pages/Tabs';
import Toast from './../components/pages/Toast';
import Todolist from './../components/pages/Todolist';
import Tour from './../components/pages/Tour';
import Typography from './../components/pages/Typography';
import Vectormaps from './../components/pages/Vectormaps';
import Widgets from './../components/pages/Widgets';
import Clientmanagement from './../components/pages/Clientmanagement';
import Comingsoon from './../components/pages/Comingsoon';
import Defaultlogin from './../components/pages/Defaultlogin';
import Defaultregister from './../components/pages/Defaultregister';
import Error from './../components/pages/Error';
import Faq from './../components/pages/Faq';
import Invoice from './../components/pages/Invoice';
import Lockscreen from './../components/pages/Lockscreen';
// import Modallogin from './../components/pages/Modallogin';
import Modalregister from './../components/pages/Modalregister';
import Portfolio from './../components/pages/Portfolio';
import Stockmanagement from './../components/pages/Stockmanagement';
import Userprofile from './../components/pages/Userprofile';
import Webanalytics from './../components/pages/Webanalytics';
import Categories from './../components/pages/Categories';

import RestrictedRouter from './RestrictedRouter'
import history from './../history'

function AppRouter() {


  // TODO Custom hook for checking authentication

  return (
    <Router history={history}>
      <Preloader />
      <Switch>
        <RestrictedRouter exact path="/" component={Dashboard} />
        <RestrictedRouter path="/accordions" component={Accordions} />
        <RestrictedRouter path="/add-product" component={Addproduct} />
        <RestrictedRouter path="/alerts" component={Alerts} />
        <RestrictedRouter path="/animations" component={Animations} />
        <RestrictedRouter path="/badges" component={Badges} />
        <RestrictedRouter path="/basic-tables" component={Basictables} />
        <RestrictedRouter path="/breadcrumbs" component={Breadcrumbs} />
        <RestrictedRouter path="/buttons" component={Buttons} />
        <RestrictedRouter path="/cards" component={Cards} />
        <RestrictedRouter path="/chartjs" component={Chartjs} />
        <RestrictedRouter path="/chat" component={Chat} />
        <RestrictedRouter path="/cropper" component={Cropper} />
        <RestrictedRouter path="/customer-list" component={Customerlist} />
        <RestrictedRouter path="/customer-review" component={Customerreview} />
        <RestrictedRouter path="/data-tables" component={Datatables} />
        <RestrictedRouter path="/draggables" component={Draggables} />
        <RestrictedRouter path="/email" component={Email} />
        <RestrictedRouter path="/flaticons" component={Flaticons} />
        <RestrictedRouter path="/fontawesome" component={Fontawesome} />
        <RestrictedRouter path="/form-elements" component={Formelements} />
        <RestrictedRouter path="/form-layouts" component={Formlayouts} />
        <RestrictedRouter path="/form-validation" component={Formvalidation} />
        <RestrictedRouter path="/form-wizard" component={Formwizard} />
        <RestrictedRouter path="/google-maps" component={Googlemaps} />
        <RestrictedRouter path="/invoice-detail" component={Invoicedetail} />
        <RestrictedRouter path="/invoice-list" component={Invoicelist} />
        <RestrictedRouter path="/materialize" component={Materialize} />
        <RestrictedRouter path="/menu-catalogue" component={Menucatalogue} />
        <RestrictedRouter path="/menu-grid" component={Menugrid} />
        <RestrictedRouter path="/menu-list" component={Menulist} />
        <RestrictedRouter path="/modals" component={Modals} />
        <RestrictedRouter path="/google-chart" component={Googlechart} />
        <RestrictedRouter path="/orders" component={Orders} />
        <RestrictedRouter path="/pagination" component={Pagination} />
        <RestrictedRouter path="/preloaders" component={Preloaders} />
        <RestrictedRouter path="/product-detail" component={Productdetail} />
        <RestrictedRouter path="/progress-bars" component={Progressbars} />
        <RestrictedRouter path="/range-slider" component={Rangeslider} />
        <RestrictedRouter path="/rating" component={Rating} />
        <RestrictedRouter path="/restaurant-list" component={Restaurantlist} />
        <RestrictedRouter path="/sales" component={Sales} />
        <RestrictedRouter path="/sliders" component={Sliders} />
        <RestrictedRouter path="/social-activity" component={Socialactivity} />
        <RestrictedRouter path="/sweet-alerts" component={Sweetalerts} />
        <RestrictedRouter path="/tabs" component={Tabs} />
        <RestrictedRouter path="/toast" component={Toast} />
        <RestrictedRouter path="/todo-list" component={Todolist} />
        <RestrictedRouter path="/tour" component={Tour} />
        <RestrictedRouter path="/typography" component={Typography} />
        <RestrictedRouter path="/vector-maps" component={Vectormaps} />
        <RestrictedRouter path="/widgets" component={Widgets} />
        <RestrictedRouter path="/client-management" component={Clientmanagement} />
        <RestrictedRouter path="/faq" component={Faq} />
        <RestrictedRouter path="/invoice" component={Invoice} />
        <RestrictedRouter path="/lock-screen" component={Lockscreen} />
        <RestrictedRouter path="/modal-register" component={Modalregister} />
        <RestrictedRouter path="/portfolio" component={Portfolio} />
        <RestrictedRouter path="/stock-management" component={Stockmanagement} />
        <RestrictedRouter path="/user-profile" component={Userprofile} />
        <RestrictedRouter path="/web-analytics" component={Webanalytics} />
        <RestrictedRouter path="/mani-categories" component={Categories} />

        <Route path="/default-register" component={Defaultregister} />
        {/* <Route path="/modal-login" component={Modallogin} /> */}
        <Route path="/coming-soon" component={Comingsoon} />
        <Route path="/default-login" component={Defaultlogin} />
        <Route component={Error} />

      </Switch>
    </Router>
  );
}

export default AppRouter;

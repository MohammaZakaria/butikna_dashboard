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
import LanguagesPage from './../components/pages/LanguagesPage';
import Categories from './../components/pages/Categories';


import RestrictedRouter from './RestrictedRouter'
import history from './../history'




// elements

import CategoryForm from '../components/sections/Categories/Elements/CategoryForm';



function AppRouter() {


  // TODO Custom hook for checking authentication

  return (
    <Router history={history}>
      <Preloader />
      <Switch>
        <RestrictedRouter exact exact path="/" component={Dashboard} />
        <RestrictedRouter exact path="/accordions" component={Accordions} />
        <RestrictedRouter exact path="/add-product" component={Addproduct} />
        <RestrictedRouter exact path="/alerts" component={Alerts} />
        <RestrictedRouter exact path="/animations" component={Animations} />
        <RestrictedRouter exact path="/badges" component={Badges} />
        <RestrictedRouter exact path="/basic-tables" component={Basictables} />
        <RestrictedRouter exact path="/breadcrumbs" component={Breadcrumbs} />
        <RestrictedRouter exact path="/buttons" component={Buttons} />
        <RestrictedRouter exact path="/cards" component={Cards} />
        <RestrictedRouter exact path="/chartjs" component={Chartjs} />
        <RestrictedRouter exact path="/chat" component={Chat} />
        <RestrictedRouter exact path="/cropper" component={Cropper} />
        <RestrictedRouter exact path="/customer-list" component={Customerlist} />
        <RestrictedRouter exact path="/customer-review" component={Customerreview} />
        <RestrictedRouter exact path="/data-tables" component={Datatables} />
        <RestrictedRouter exact path="/draggables" component={Draggables} />
        <RestrictedRouter exact path="/email" component={Email} />
        <RestrictedRouter exact path="/flaticons" component={Flaticons} />
        <RestrictedRouter exact path="/fontawesome" component={Fontawesome} />
        <RestrictedRouter exact path="/form-elements" component={Formelements} />
        <RestrictedRouter exact path="/form-layouts" component={Formlayouts} />
        <RestrictedRouter exact path="/form-validation" component={Formvalidation} />
        <RestrictedRouter exact path="/form-wizard" component={Formwizard} />
        <RestrictedRouter exact path="/google-maps" component={Googlemaps} />
        <RestrictedRouter exact path="/invoice-detail" component={Invoicedetail} />
        <RestrictedRouter exact path="/invoice-list" component={Invoicelist} />
        <RestrictedRouter exact path="/materialize" component={Materialize} />
        <RestrictedRouter exact path="/menu-catalogue" component={Menucatalogue} />
        <RestrictedRouter exact path="/menu-grid" component={Menugrid} />
        <RestrictedRouter exact path="/menu-list" component={Menulist} />
        <RestrictedRouter exact path="/modals" component={Modals} />
        <RestrictedRouter exact path="/google-chart" component={Googlechart} />
        <RestrictedRouter exact path="/orders" component={Orders} />
        <RestrictedRouter exact path="/pagination" component={Pagination} />
        <RestrictedRouter exact path="/preloaders" component={Preloaders} />
        <RestrictedRouter exact path="/product-detail" component={Productdetail} />
        <RestrictedRouter exact path="/progress-bars" component={Progressbars} />
        <RestrictedRouter exact path="/range-slider" component={Rangeslider} />
        <RestrictedRouter exact path="/rating" component={Rating} />
        <RestrictedRouter exact path="/restaurant-list" component={Restaurantlist} />
        <RestrictedRouter exact path="/sales" component={Sales} />
        <RestrictedRouter exact path="/sliders" component={Sliders} />
        <RestrictedRouter exact path="/social-activity" component={Socialactivity} />
        <RestrictedRouter exact path="/sweet-alerts" component={Sweetalerts} />
        <RestrictedRouter exact path="/tabs" component={Tabs} />
        <RestrictedRouter exact path="/toast" component={Toast} />
        <RestrictedRouter exact path="/todo-list" component={Todolist} />
        <RestrictedRouter exact path="/tour" component={Tour} />
        <RestrictedRouter exact path="/typography" component={Typography} />
        <RestrictedRouter exact path="/vector-maps" component={Vectormaps} />
        <RestrictedRouter exact path="/widgets" component={Widgets} />
        <RestrictedRouter exact path="/client-management" component={Clientmanagement} />
        <RestrictedRouter exact path="/faq" component={Faq} />
        <RestrictedRouter exact path="/invoice" component={Invoice} />
        <RestrictedRouter exact path="/lock-screen" component={Lockscreen} />
        <RestrictedRouter exact path="/modal-register" component={Modalregister} />
        <RestrictedRouter exact path="/portfolio" component={Portfolio} />
        <RestrictedRouter exact path="/stock-management" component={Stockmanagement} />
        <RestrictedRouter exact path="/user-profile" component={Userprofile} />
        <RestrictedRouter exact path="/web-analytics" component={Webanalytics} />
        <RestrictedRouter exact path="/languages_page" component={LanguagesPage} />
        <RestrictedRouter exact path="/main_categories" component={Categories} />

        <Route exact path="/default-register" component={Defaultregister} />
        {/* <Route exact path="/modal-login" component={Modallogin} /> */}
        <Route exact path="/coming-soon" component={Comingsoon} />
        <Route exact path="/default-login" component={Defaultlogin} />

        {/* forms  */}
        <RestrictedRouter exact path="/main_categories/add" component={CategoryForm} />
        <RestrictedRouter exact path="/main_categories/edit/:id" component={CategoryForm} />

        {/* end forms */}
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default AppRouter;

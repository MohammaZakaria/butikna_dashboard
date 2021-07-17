import React from 'react';
import AppRouter from './routes'
import AlertCustomProvider from './helpers/AlertCustomProvider'
function App() {
  return (
    <AlertCustomProvider>
      <AppRouter />
    </AlertCustomProvider>
    // <Router>
    //   <Preloader />
    //   <Switch>
    //     <Route exact path="/" component={Dashboard} />
    //     <Route path="/accordions" component={Accordions} />
    //     <Route path="/add-product" component={Addproduct} />
    //     <Route path="/alerts" component={Alerts} />
    //     <Route path="/animations" component={Animations} />
    //     <Route path="/badges" component={Badges} />
    //     <Route path="/basic-tables" component={Basictables} />
    //     <Route path="/breadcrumbs" component={Breadcrumbs} />
    //     <Route path="/buttons" component={Buttons} />
    //     <Route path="/cards" component={Cards} />
    //     <Route path="/chartjs" component={Chartjs} />
    //     <Route path="/chat" component={Chat} />
    //     <Route path="/cropper" component={Cropper} />
    //     <Route path="/customer-list" component={Customerlist} />
    //     <Route path="/customer-review" component={Customerreview} />
    //     <Route path="/data-tables" component={Datatables} />
    //     <Route path="/draggables" component={Draggables} />
    //     <Route path="/email" component={Email} />
    //     <Route path="/flaticons" component={Flaticons} />
    //     <Route path="/fontawesome" component={Fontawesome} />
    //     <Route path="/form-elements" component={Formelements} />
    //     <Route path="/form-layouts" component={Formlayouts} />
    //     <Route path="/form-validation" component={Formvalidation} />
    //     <Route path="/form-wizard" component={Formwizard} />
    //     <Route path="/google-maps" component={Googlemaps} />
    //     <Route path="/invoice-detail" component={Invoicedetail} />
    //     <Route path="/invoice-list" component={Invoicelist} />
    //     <Route path="/materialize" component={Materialize} />
    //     <Route path="/menu-catalogue" component={Menucatalogue} />
    //     <Route path="/menu-grid" component={Menugrid} />
    //     <Route path="/menu-list" component={Menulist} />
    //     <Route path="/modals" component={Modals} />
    //     <Route path="/google-chart" component={Googlechart} />
    //     <Route path="/orders" component={Orders} />
    //     <Route path="/pagination" component={Pagination} />
    //     <Route path="/preloaders" component={Preloaders} />
    //     <Route path="/product-detail" component={Productdetail} />
    //     <Route path="/progress-bars" component={Progressbars} />
    //     <Route path="/range-slider" component={Rangeslider} />
    //     <Route path="/rating" component={Rating} />
    //     <Route path="/restaurant-list" component={Restaurantlist} />
    //     <Route path="/sales" component={Sales} />
    //     <Route path="/sliders" component={Sliders} />
    //     <Route path="/social-activity" component={Socialactivity} />
    //     <Route path="/sweet-alerts" component={Sweetalerts} />
    //     <Route path="/tabs" component={Tabs} />
    //     <Route path="/toast" component={Toast} />
    //     <Route path="/todo-list" component={Todolist} />
    //     <Route path="/tour" component={Tour} />
    //     <Route path="/typography" component={Typography} />
    //     <Route path="/vector-maps" component={Vectormaps} />
    //     <Route path="/widgets" component={Widgets} />
    //     <Route path="/client-management" component={Clientmanagement} />
    //     <Route path="/coming-soon" component={Comingsoon} />
    //     <Route path="/default-login" component={Defaultlogin} />
    //     {/* <Route path="/default-register" component={Defaultregister} /> */}
    //     <Route component={Error} />
    //     <Route path="/faq" component={Faq} />
    //     <Route path="/invoice" component={Invoice} />
    //     <Route path="/lock-screen" component={Lockscreen} />
    //     {/* <Route path="/modal-login" component={Modallogin} /> */}
    //     <Route path="/modal-register" component={Modalregister} />
    //     <Route path="/portfolio" component={Portfolio} />
    //     <Route path="/stock-management" component={Stockmanagement} />
    //     <Route path="/user-profile" component={Userprofile} />
    //     <Route path="/web-analytics" component={Webanalytics} />
    //   </Switch>
    // </Router>
  );
}

export default App;

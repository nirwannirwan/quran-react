import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import './charts/ChartjsConfig';

// Import pages
// import Dashboard from './pages/Dashboard';
// import Analytics from './pages/Analytics';
// import Customers from './pages/ecommerce/Customers';
// import Orders from './pages/ecommerce/Orders';
// import Invoices from './pages/ecommerce/Invoices';
// import Shop from './pages/ecommerce/Shop';
// import Shop2 from './pages/ecommerce/Shop2';
// import Product from './pages/ecommerce/Product';
// import Cart from './pages/ecommerce/Cart';
// import Cart2 from './pages/ecommerce/Cart2';
// import Pay from './pages/ecommerce/Pay';
// import Campaigns from './pages/Campaigns';
// import TeamTabs from './pages/team/TeamTabs';
// import TeamTiles from './pages/team/TeamTiles';
import Profile from './pages/team/Profile';
// import Messages from './pages/Messages';
// import Tasks from './pages/Tasks';
// import Inbox from './pages/Inbox';
// import Calendar from './pages/Calendar';
// import Account from './pages/settings/Account';
// import Notifications from './pages/settings/Notifications';
// import Apps from './pages/settings/Apps';
// import Plans from './pages/settings/Plans';
// import Billing from './pages/settings/Billing';
// import Feedback from './pages/settings/Feedback';
// import Changelog from './pages/utility/Changelog';
// import Roadmap from './pages/utility/Roadmap';
// import Faqs from './pages/utility/Faqs';
// import EmptyState from './pages/utility/EmptyState';
import PageNotFound from './pages/utility/PageNotFound';
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';
// import ResetPassword from './pages/ResetPassword';
// import Onboarding01 from './pages/Onboarding01';
// import Onboarding02 from './pages/Onboarding02';
// import Onboarding03 from './pages/Onboarding03';
// import Onboarding04 from './pages/Onboarding04';
// import ButtonPage from './pages/component/ButtonPage';
// import FormPage from './pages/component/FormPage';
// import DropdownPage from './pages/component/DropdownPage';
// import AlertPage from './pages/component/AlertPage';
// import ModalPage from './pages/component/ModalPage';
// import PaginationPage from './pages/component/PaginationPage';
// import TabsPage from './pages/component/TabsPage';
// import BreadcrumbPage from './pages/component/BreadcrumbPage';
// import BadgePage from './pages/component/BadgePage';
// import AvatarPage from './pages/component/AvatarPage';
// import TooltipPage from './pages/component/TooltipPage';
// import AccordionPage from './pages/component/AccordionPage';
// import IconsPage from './pages/component/IconsPage';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Profile />} />
        {/*<Route exact path="/" element={<Dashboard />} />*/}
        {/*<Route path="/analytics" element={<Analytics />} />*/}
        {/*<Route path="/ecommerce/customers" element={<Customers />} />*/}
        {/*<Route path="/ecommerce/orders" element={<Orders />} />*/}
        {/*<Route path="/ecommerce/invoices" element={<Invoices />} />*/}
        {/*<Route path="/ecommerce/shop" element={<Shop />} />*/}
        {/*<Route path="/ecommerce/shop-2" element={<Shop2 />} />*/}
        {/*<Route path="/ecommerce/product" element={<Product />} />*/}
        {/*<Route path="/ecommerce/cart" element={<Cart />} />*/}
        {/*<Route path="/ecommerce/cart-2" element={<Cart2 />} />*/}
        {/*<Route path="/ecommerce/pay" element={<Pay />} />*/}
        {/*<Route path="/campaigns" element={<Campaigns />} />*/}
        {/*<Route path="/team/team-tabs" element={<TeamTabs />} />*/}
        {/*<Route path="/team/team-tiles" element={<TeamTiles />} />*/}
        {/*<Route path="/team/profile" element={<Profile />} />*/}
        {/*<Route path="/messages" element={<Messages />} />*/}
        {/*<Route path="/tasks" element={<Tasks />} />*/}
        {/*<Route path="/inbox" element={<Inbox />} />*/}
        {/*<Route path="/calendar" element={<Calendar />} />*/}
        {/*<Route path="/settings/account" element={<Account />} />*/}
        {/*<Route path="/settings/notifications" element={<Notifications />} />*/}
        {/*<Route path="/settings/apps" element={<Apps />} />*/}
        {/*<Route path="/settings/plans" element={<Plans />} />*/}
        {/*<Route path="/settings/billing" element={<Billing />} />*/}
        {/*<Route path="/settings/feedback" element={<Feedback />} />*/}
        {/*<Route path="/utility/changelog" element={<Changelog />} />*/}
        {/*<Route path="/utility/roadmap" element={<Roadmap />} />*/}
        {/*<Route path="/utility/faqs" element={<Faqs />} />*/}
        {/*<Route path="/utility/empty-state" element={<EmptyState />} />*/}
        {/*<Route path="/utility/404" element={<PageNotFound />} />*/}
        {/*<Route path="/signin" element={<Signin />} />*/}
        {/*<Route path="/signup" element={<Signup />} />*/}
        {/*<Route path="/reset-password" element={<ResetPassword />} />*/}
        {/*<Route path="/onboarding-01" element={<Onboarding01 />} />*/}
        {/*<Route path="/onboarding-02" element={<Onboarding02 />} />*/}
        {/*<Route path="/onboarding-03" element={<Onboarding03 />} />*/}
        {/*<Route path="/onboarding-04" element={<Onboarding04 />} />*/}
        {/*<Route path="/component/button" element={<ButtonPage />} />*/}
        {/*<Route path="/component/form" element={<FormPage />} />*/}
        {/*<Route path="/component/dropdown" element={<DropdownPage />} />*/}
        {/*<Route path="/component/alert" element={<AlertPage />} />*/}
        {/*<Route path="/component/modal" element={<ModalPage />} />*/}
        {/*<Route path="/component/pagination" element={<PaginationPage />} />*/}
        {/*<Route path="/component/tabs" element={<TabsPage />} />*/}
        {/*<Route path="/component/breadcrumb" element={<BreadcrumbPage />} />*/}
        {/*<Route path="/component/badge" element={<BadgePage />} />*/}
        {/*<Route path="/component/avatar" element={<AvatarPage />} />*/}
        {/*<Route path="/component/tooltip" element={<TooltipPage />} />*/}
        {/*<Route path="/component/accordion" element={<AccordionPage />} />*/}
        {/*<Route path="/component/icons" element={<IconsPage />} />*/}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

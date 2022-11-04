import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

 import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
 import Freetrial from "myComponents/Freetrial/Freetrial"
 import Error from "myComponents/Error/Error"
 import Qcm from "myComponents/QCM/Qcm"


/* Inner Pages */
 import LoginPage from "Login.js";
 import SignupPage from "pages/Signup.js";
 import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
 import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
 import TermsOfServicePage from "pages/TermsOfService.js";
 import PrivacyPolicyPage from "pages/PrivacyPolicy.js";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "auth0Provider";

import Cancel from 'myComponents/Cancel'
import Success from 'myComponents/Succes'



export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (

    
    <Router>
        <Auth0ProviderWithHistory>

      <Switch>

        {/* <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>*/}

        <Route path="/free-trial">
          <Freetrial />
        </Route> 


        <Route path="/questions">
          <Qcm />
        </Route> 

        
  

        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/signup'>
          <SignupPage />
        </Route>

        <Route path='/cgu'>
          <TermsOfServicePage />
        </Route>

        <Route path='/vie-prive'>
          <PrivacyPolicyPage />
        </Route>

        <Route path='/tarifs'>
          <PricingPage />
        </Route>

        <Route path='/contact'>
          <ContactUsPage />
        </Route>

        <Route path='/404'>
          <Error />
        </Route>

        

        <Route path='/success'>
          <Success />
        </Route>

        <Route path='/cancel'>
          <Cancel />
        </Route>


        <Route path='/register'>
          <SignupPage />
        </Route>


        <Route path='/auth'>
          <LoginPage />
        </Route>
        
       <Route path="/">
          <RestaurantLandingPage />
        </Route>


        
      </Switch>
      
      </Auth0ProviderWithHistory>
    </Router>


    
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
 //export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;

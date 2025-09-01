import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";

const Layout = ({
  children,
  title,
  searchType,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}) => {
  const [isChildrenRendered, setIsChildrenRendered] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Once children are mounted, set the state to true
    setIsChildrenRendered(true);
  }, [children]);

//   const is404Page = router.pathname === '/404';
//   const islogin = router.pathname === '/login/Login'
//   const isSignup = router.pathname === '/signup/Signup'
//   const isForgotPassword = router.pathname === '/forgotPassword/ForgotPassword'

  return (
    <div className="layout">
      { <Header />}
      <div>{children}</div>
      {<Footer />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    searchType: state.searchType,
  };
};

export default connect(mapStateToProps)(Layout);

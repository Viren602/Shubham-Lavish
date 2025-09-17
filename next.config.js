module.exports = {
  trailingSlash: false,
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  i18n: {
    locales: ["en"], // Add more locales if needed
    defaultLocale: "en",
  },
  generateRobotsTxt: true,
  async rewrites() {
    return [
      // Page Not Found
      { source: "/pageNotFound", destination: "/notFound/PageNotFound" },

      // About page
      { source: "/about", destination: "/about/About" },

      //Contact page
      { source: "/contact", destination: "/contact/Contact" },

      //Portfolio page
      { source: "/project", destination: "/project/Project" },

      { source: "/project-detail", destination: "/project/Project-info" },

    ];
  },
};

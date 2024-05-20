import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full text-slate-500">
        <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-product-5-logo-sub"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-5-logo-sub"
                >
                  Product
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Features
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Customers
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Why us?
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-docs-5-logo-sub"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo-sub"
                >
                  Docs & Help
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Training
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      System status
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      FAQ&apos;s
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Help Center
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-about-5-logo-sub"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-about-5-logo-sub"
                >
                  About us
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      About us
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Leadership
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Events
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-get-in-touch-5-logo-sub"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-5-logo-sub"
                >
                  Get in touch
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Support
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Partners
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Join research
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/*      <!-- Sub Footer --> */}
        <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
              <Link
                id="WindUI-5-logo-sub"
                aria-label="WindUI logo"
                aria-current="page"
                className="col-span-1 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 focus:outline-none md:col-span-4 lg:col-span-6"
                href="/"
              >
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 300 300"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 bg-gray-500"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z"
                    fill="#f1f5f9"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z"
                    fill="rgba(255, 255, 255, .2)"
                  />
                </svg>
                Brand
              </Link>
              <nav
                className="col-span-3 md:col-span-4 lg:col-span-6"
                aria-labelledby="subfooter-links-5-logo-sub"
              >
                <h3 className="sr-only" id="subfooter-links-5-logo-sub">
                  Get in touch
                </h3>
                <ul className="flex flex-wrap items-center justify-end gap-2 lg:gap-4">
                  <li className="leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      T&C
                    </Link>
                  </li>
                  <li className="leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li className="leading-6">
                    <Link
                      href="/"
                      className="transition-colors duration-300 hover:text-gray-500 focus:text-gray-600"
                    >
                      Cookies
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      {/*    <!-- End Five Columns Footer with Logo and Sub Footer --> */}
    </>
  );
};

export default Footer;

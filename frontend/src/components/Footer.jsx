import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">
    Footer
  </h2>
  <div className="mx-auto max-w-full px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="space-y-8">
        <img
          className="h-20"
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
          alt="Company name"
        />
        <p className="text-sm leading-6 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, illo.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">Instagram</span>
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5zm0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5zm5.25-2.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75z"
      clipRule="evenodd"
    />
  </svg>
</a>

<a href="#" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">X (Twitter)</span>
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M18.36 2H21L14.57 10.15 22 22h-6.8l-4.8-7.07L5.73 22H2.1L9.02 13.1 2 2h6.92l4.33 6.7L18.36 2zm-1.24 2.2-4.37 4.47L7.95 4.2H5.68l5.87 8.65L5.32 20h2.22l4.74-5.14L16.71 20h2.2l-5.8-8.26 4.01-4.28h-.01z"
      clipRule="evenodd"
    />
  </svg>
</a>

          <a href="#" className="text-gray-400 hover:text-gray-500">
  <span className="sr-only">WhatsApp</span>
  <svg
    className="h-6 w-6"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.04 2C6.51 2 2 6.27 2 11.63c0 2.4.9 4.59 2.38 6.3L2 22l4.16-1.08a10.68 10.68 0 0 0 5.88 1.7h.01c5.53 0 10.04-4.27 10.04-9.63C22.09 6.27 17.57 2 12.04 2zm.04 17.65c-1.89 0-3.68-.51-5.23-1.47l-.37-.22-2.47.64.66-2.39-.24-.38a8.16 8.16 0 0 1-1.42-4.49c0-4.57 3.9-8.28 8.71-8.28s8.71 3.71 8.71 8.28-3.9 8.28-8.71 8.28zm4.71-6.17c-.26-.13-1.54-.76-1.78-.85s-.41-.13-.59.13c-.18.25-.68.85-.83 1.02s-.3.19-.56.06a6.79 6.79 0 0 1-2-1.23c-.55-.5-.91-1.1-1.02-1.29s-.01-.28.12-.4c.12-.12.26-.3.39-.45s.17-.25.26-.41c.09-.16.04-.31-.02-.44-.06-.13-.59-1.43-.81-1.95s-.43-.46-.59-.47c-.15-.01-.32-.02-.49-.02s-.45.07-.69.34c-.24.26-.9.87-.9 2.12s.92 2.46 1.05 2.64c.13.17 1.81 2.9 4.38 4.06 1.54.67 2.14.72 2.91.6.44-.07 1.54-.63 1.76-1.24.22-.62.22-1.15.16-1.24s-.24-.18-.5-.3z"
      clipRule="evenodd"
    />
  </svg>
</a>

          {/* <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">YouTube</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                clipRule="evenodd"
              />
            </svg>
          </a> */}
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-primary">
              Services
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Commerce
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Insights
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-primary">
              Support
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Contact Us
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-primary">
              Company
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Blog
                </a>
              </li>
              
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-primary">
              Legal
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Claim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-gray-600 hover:text-primary"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
      <p className="text-xs leading-5 text-gray-500">
        © 2025 Company Name, Inc. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer

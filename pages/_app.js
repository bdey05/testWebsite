import '@styles/globals.css'
import Nav from '@components/Nav.js';

import { withRouter } from 'next/router'

function MyApp({ Component, pageProps, router }) {
  /* I found this necessary to implement because I wanted to add a custom background
  to the gallery page including the top of the navbar. For you reading this,
  add the page you want to add an exception for and then make a class in globals.css.
  TO ADD STUFF TO AN EXISTING PAGE, MAKE A CLASS FOR THAT MODULE - Fahim */

  const globalExceptions = {
    '/gallery': 'gallery-bg'
  }

  function returnStyle(pathname) {
    if (globalExceptions.hasOwnProperty(pathname)) {
      return globalExceptions[pathname]
    } else {
      return 'default-bg'
    }
  }
  return (
    <>
      {/* Add replacements for green background as we need them */}
      <div className={`${returnStyle(router.pathname)}`}>
        <div className='container'>
          <Nav />
        </div>
        <Component {...pageProps} /></div>
    </>
  );
}

export default withRouter(MyApp);

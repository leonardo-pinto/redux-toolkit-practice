import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
        <h2>Which feature using redux toolkit would you like to use?</h2>
        <Link to="/counter">
          <button>
            COUNTER
          </button>
        </Link>
        <Link to="/forms">
          <button>
            FORMS
          </button>
        </Link>
      </section>
  )
}

export default Home;
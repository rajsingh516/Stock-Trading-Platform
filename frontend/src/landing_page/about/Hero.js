import React from 'react';

function Hero() {
  return (
    <section className="container">
      <div className="row p-5 mt-5 mb-5 text-center">
        <h1 className="fs-2">
          We pioneered the discount broking model in India.<br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div className="row p-5 mt-5 border-top text-muted fs-5" style={{ lineHeight: '1.8' }}>
        <div className="col-md-6 p-5">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal of breaking
            all barriers that traders and investors face in India…
          </p>
          <p>Today, our disruptive pricing models and in-house technology…</p>
          <p>Over 1.6+ crore clients…</p>
        </div>

        <div className="col-md-6 p-5">
          <p>In addition, we run popular online educational and community initiatives…</p>
          <p>
            <a href="#" className="text-decoration-none">Rainmatter</a>, our fintech fund…
          </p>
          <p>
            Catch up with updates on our <a href="#" className="text-decoration-none">Blog</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;

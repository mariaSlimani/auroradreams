import React from 'react';
import './404.css';

function Lost() {
  return (
    <div>
    <header class="top-header">

    </header>

    {/*dust particel*/}
    <div>
      <div class="starsec"></div>
      <div class="starthird"></div>
      <div class="starfourth"></div>
      <div class="starfifth"></div>
    </div>
    {/*Dust particle end*/}

    <div class="lamp__wrap">
      <div class="lamp">
        <div class="cable"></div>
        <div class="cover"></div>
        <div class="in-cover">
          <div class="bulb"></div>
        </div>
        <div class="light"></div>
      </div>
    </div>
    {/* END Lamp*/}
    <section class="error">
      {/*Content*/}
      <div class="error__content">
        <div class="error__message message">
          <h1 class="message__title">404 <br /> Page Not Found!<br /> </h1>
          <p class="message__text">Dreamers have insight beyond what everyone else can see, but we'd rather guide you back to <a className="toHome" href="index.html">our homepage</a><br />  sweetest dreams !</p>
          {/* Oh... it seems that you have woken up... it's okey just keep on dreaming, everything is fine :D*/}
        </div>
      </div>
      {/*END Content*/}

    </section>
    </div>
  );
}

export default Lost;

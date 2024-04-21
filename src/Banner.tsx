function Banner() {
  return (
    <div className="husky-banner">
      <img id="husky-icon" src="/assets/husky.png" alt="herbert the husky" />
      <h1 id="senses-welcome">Welcome to the Husky Senses</h1>
      <div className="wrappable-divider a-e">
        <a href="#allissues"><div className="menu-option"><div className="rev-skew">All Issues</div></div></a>
        <a href="#staffandwriters"><div className="menu-option"><div className="rev-skew">Staff and Writers</div></div></a>
        <a href="#games"><div className="menu-option"><div className="rev-skew">Games</div></div></a>
        <a href="#contact"><div className="menu-option"><div className="rev-skew">Contact Us</div></div></a>
        <a href="#events"><div className="menu-option"><div className="rev-skew">Events and more</div></div></a>
      </div>
    </div>
  )
}

export default Banner;

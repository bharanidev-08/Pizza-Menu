function Footer() {
  const hour = new Date().getHours();
  const open = 8;
  const close = 22;
  return (
    <footer>
      <div>
        {hour > open && hour < close
          ? "We are currently Open :)"
          : `We open between ${open}-${close}`}
      </div>
      <button>Order Now</button>
    </footer>
  );
}

export default Footer;

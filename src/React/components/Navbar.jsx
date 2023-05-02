
function Navbar() {

  return (
      <>
        <div className="navbar">
          <section className='navbar__section navbar__left'>
            <a className='navbar__link' href="#">Rent a room</a>
            <a className='navbar__link' href="#">brochure</a>
            <a className='navbar__link'  href="#">media catalogue</a>
          </section>
          <section className='navbar__section navbar__right'>
            <a className='navbar__link'  href="#">Intranet</a>
            <a className='navbar__link'  href="#">Support us</a>
            <a className='navbar__link'  href="#">Contact</a>
            <a className='navbar__link navbar__right__register' href="#">Register</a>
          </section>
        </div>
      </>
  )
}

export default Navbar

import logo from '../../../public/logo-green.svg';
import facebook from '../../../public/facebook.svg';
import twitter from '../../../public/twitter.svg';
import insta from '../../../public/insta.svg';
import linkedin from '../../../public/linkedin.svg';


function Footer() {

  return (
      <div className='footer'>
        <div className='footer1'>
        <section className='link'>
<img src={logo} alt="logo" />
<p>Adresse</p>
<a href="#">Rue Henri Blès 33A, <br />
5000 Namur<br />
Belgique</a>
<p>Phone</p>
<a href="#">+32 (0) 81/73.64.37 </a>
</section>

<section className='link1 link'>
<p>link</p>
<a href="#">IMEP</a>
<a href="#">Les professeurs</a>
<a href="#">Etudes</a>
<a href="#">Admission</a>
<a href="#">Actualités</a>
<a href="#">Événements et shows</a>
</section>

<section className='link2 link'>
<p>link</p>
<a href="#">S’inscrire</a>
<a href="#">Nous soutenir</a>
<a href="#">Louer une salle</a>
<a href="#">Intranet</a>
<a href="#">Catalogue</a>
<a href="#">Brochure</a>

</section>
<div className='link follow'>
    <p>Follow us</p>
<div className='social-media'>
    <img className='facebook' src={facebook} alt="facebook" />
    <img src={twitter} alt="twitter" />
    <img src={insta} alt="insta" />
    <img src={linkedin} alt="linkedin" />
</div>
</div>
        </div>
        <div className='footer2'>
            <section className='droit'>
                <a href="#">© Tous droits réservés, IMEP 2023.</a>
            </section>
            <section className='politiques'>
                <a href="#">Politique de la vie privé</a>    
                <a href="#">Politiique de cookies</a> 
            </section>
        </div>
      </div>
 
  );
}

export default Footer;
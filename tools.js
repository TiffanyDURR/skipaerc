const headerDOM = document.querySelector("header");
const footerDOM = document.querySelector("footer");


headerDOM.innerHTML = `
<nav>
<div class="header-line">
<div class="header-line-content">
<p><i class="fas fa-envelope-open"></i> <a href="mailto:infos@creapiks.net">infos[at]creapiks.net</a></p>
<p><i class="fas fa-phone-alt"></i> 06 95 79 89 03</p>
<p><i class="fas fa-map-marker-alt"></i> Moselle (57970)</p>
</div>
</div>

            <ul>
                <li>
                    <a href="prestations.html">Prestations</a>
                </li>
                <li>
                    <a href="portfolio.html">Portfolio</a>
                </li>
                <a href="https://creapiks.net/"><img src="assets/logo-color-04.png" alt="Logo Crea'Piks"></a>
                <li>
                    <a href="about.html">A propos</a>
                </li>
                <li>
                    <a href="contact.html">Devis / Contact</a>
                </li>
            </ul>
        </nav>

        <div class="header-mobile">
        <a href="https://creapiks.net/"><img src="assets/logo-color-04.png" alt="Logo Crea'Piks"></a>
        <i class="hamburger-button fas fa-bars"></i>
        </div>


        <div class="header-mobile-navigation">
        <ul> 
        <li> <a href="prestations.html">Prestations</a></li>
        <li> <a href="portfolio.html">Portfolio</a></li>
        <li><a href="about.html">A propos</a></li>
        <li><a href="contact.html">Devis / Contact</a></li>
<div class="icones">
        <p><i class="fas fa-envelope-open"></i> <a href="mailto:infos@creapiks.net">infos[at]creapiks.net</a></p>
        <p><i class="fas fa-phone-alt"></i> 06 95 79 89 03</p>
        <p><i class="fas fa-map-marker-alt"></i> Moselle (57970)</p>
        </div>
        </ul>

        </div>
`

footerDOM.innerHTML = 
`
<div class="footer-logo">
<a href="https://creapiks.net/"><img src="assets/logo-color-01.png" alt="Logo Crea'Piks"></a>
</div>
<div class="footer-content">
<div>
    <h5>A propos</h5>
    <p><i class="far fa-star"></i> Crea'Piks</p>
    <p><i class="fas fa-code"></i> Développement web</p>
    <p><i class="fas fa-paint-brush"></i> Conception graphique</p>
</div>
<div>
    <h5>Contact & liens</h5>
    <p><i class="fas fa-envelope-open"></i> <a href="mailto:infos@creapiks.net">infos[at]creapiks.net</a></p>
    <p><i class="fas fa-phone-alt"></i> 06 95 79 89 03</p>
    <p><i class="fas fa-info-circle"></i> <a href="legals.html">Mentions Légales</a></p>
</div>
<div>
    <h5>Infos pratiques</h5>
    <p><i class="fas fa-map-marker-alt"></i> Moselle (57970)</p>
    <p><i class="fas fa-bookmark"></i> Siret : 88465191000017</p>
    <p><i class="fas fa-briefcase"></i> <a href="contact.html#stages">Stages</a></p>
</div>
</div>
<p class="rights">Creapiks.net | Tous droits réservés - 2020
<br/>Tiffany Durr</p>
`

const iconMenu = document.querySelector(".hamburger-button");
const menuMobile = document.querySelector(".header-mobile-navigation");

  iconMenu.addEventListener("click", () => {
    menuMobile.classList.toggle("menu-mobile-visible");
    // Au click sur l'icone du menu
    // Affiche le menu déroulant
  });


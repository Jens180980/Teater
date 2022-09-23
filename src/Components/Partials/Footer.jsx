// import styling
import Style from "../../Assets/scss/Footer.module.scss";
import twitter from "../../Assets/img/twitter.png";
import facebook from "../../Assets/img/facebook.png";

// Footer function component
export const Footer = () => {
  return (
    <footer className={Style.footer}>
      <section>
        <h3>Adresse</h3>
        <p>Det Utrolige Teater</p>
        <p>Havnegade 901</p>
        <p>9000 Aalborg</p>
        <p>EAN 5784239489</p>
        <p>CVR 1001 0012</p>
        <p className={Style.map}>Find vej på kort</p>
      </section>
      <section>
        <div>
          <h3>Billetservice</h3>
          <p>Se åbningstider</p>
          <p>Billettelefon: +45 96 31 80 80</p>
          <p>billet@dut.dk</p>
        </div>
        <div>
          <h3 className={Style.admin}>Administration</h3>
          <p>Telefon: +45 96 31 80 90</p>
          <p>admin@dut.dk</p>
        </div>
      </section>
      <section>
        <h3>Praktisk info</h3>
        <p>Kontakt</p>
        <p>Kom trygt i teateret</p>
        <p>Presseside</p>
        <p>Skoleforestillinger</p>
        <p>Teatercafeen</p>
        <p>Handelsbetingelser</p>
      </section>
      <section className={Style.right}>
        <a href="https://www.twitter.com">
          <img src={twitter} alt="twitter"></img>
        </a>
        <a href="https://www.facebook.com">
          <img src={facebook} alt="facebook"></img>
        </a>
      </section>
    </footer>
  );
};

import Image from "next/image";
import classes from "./hero.module.css";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={`/images/personal/harsh.jpg`}
          alt="An Image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>
        Hi, I'm <span>Harshkumar</span>
      </h1>

      <p>I blog about the web Development</p>
    </section>
  );
}

export default Hero;

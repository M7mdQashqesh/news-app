import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.hero}`}>
      <div className="container">
        <h2>Stay Informed, Stay Ahead</h2>
        <span>Your go-to platform for the latest and most relevant news articles.</span>
        <div className={styles.actions}>
          <button>Post a News</button>
          <button>Read News</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;

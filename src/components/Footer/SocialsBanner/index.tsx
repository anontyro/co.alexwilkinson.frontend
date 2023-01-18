import FacebookIcon from "../../Icons/facebook.svg";
import LinkedinIcon from "../../Icons/linkedin.svg";
import TwitterIcon from "../../Icons/twitter.svg";
// TODO: update to github icon
import GithubIcon from "../../Icons/globe.svg";
import Link from "next/link";
import styles from "./SocialsBanner.module.scss";

const SOCIAL_LINKS = {
  FACEBOOK: "",
  LINKEDIN: "",
  TWITTER: "",
  GITHUB: "",
};

const SocialsBanner: React.FC = () => {
  return (
    <div className={styles.bannerWrapper}>
      <Link href={SOCIAL_LINKS.FACEBOOK} target="_blank">
        <FacebookIcon className={styles.standardIcon} />
      </Link>
      <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank">
        <LinkedinIcon className={styles.standardIcon} />
      </Link>
      <Link href={SOCIAL_LINKS.TWITTER} target="_blank">
        <TwitterIcon className={styles.standardIcon} />
      </Link>
      <Link href={SOCIAL_LINKS.GITHUB} target="_blank">
        <GithubIcon className={styles.standardIcon} />
      </Link>
    </div>
  );
};

export default SocialsBanner;

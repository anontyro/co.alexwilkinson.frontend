import classnames from "classnames";
import FacebookIcon from "../../Icons/facebook.svg";
import LinkedinIcon from "../../Icons/linkedin.svg";
import TwitterIcon from "../../Icons/twitter.svg";
// TODO: update to github icon
import GithubIcon from "../../Icons/github2.svg";
import Link from "next/link";
import styles from "./SocialsBanner.module.scss";

const SOCIAL_LINKS = {
  FACEBOOK: "https://www.facebook.com/AWILKINSON.SG",
  LINKEDIN: "https://www.linkedin.com/in/wilkinsonalexander",
  TWITTER: "https://twitter.com/alexwilkinson",
  GITHUB: "https://github.com/anontyro",
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
        <GithubIcon
          className={classnames(styles.standardIcon, styles.githubIcon)}
        />
      </Link>
    </div>
  );
};

export default SocialsBanner;

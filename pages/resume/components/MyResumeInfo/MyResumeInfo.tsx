import GitHubIco from "@/components/Icons/github2.svg";
import GlobeIco from "@/components/Icons/globe.svg";
import Download from "@/components/Icons/download-cloud.svg";
import SplitButton from "@/components/Buttons/SplitButton/SplitButton";

import styles from "./MyResumeInfo.module.scss";

const RESUME_LINK =
  "https://www.canva.com/design/DAEqUrSoKCQ/NxWHW6VzzWHPDDl_vcwKAw/view?utm_content=DAEqUrSoKCQ&utm_campaign=designshare&utm_medium=link2&utm_source=homepage_design_menu";

const MyResumeInfo: React.FC = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoContainerTop}>
        <div className={styles.iconContainer}>
          <GitHubIco />
          /anontyro
        </div>
        <div className={styles.resumeBtn}>
          <SplitButton>
            {{
              left: (
                <button onClick={() => window.open(RESUME_LINK, "_blank")}>
                  Resume
                </button>
              ),
              right: (
                <button
                  onClick={() =>
                    window.open("/assets/alex-wilkinson-resume.pdf", "_blank")
                  }
                >
                  <Download />
                </button>
              ),
            }}
          </SplitButton>
        </div>
      </div>
      <div className={styles.infoContainerBottom}>
        <div className={styles.iconContainer}>
          <GlobeIco />
          United Kingdom
        </div>
      </div>
    </div>
  );
};

export default MyResumeInfo;

import { MyProjectItem } from "@/hooks/api/usePortfolioPageContentQuery";
import BaseCard from "../BaseCard";
import styles from "./ProjectCard.module.scss";

const ProjectCardHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1>Info Card Header</h1>
    </div>
  );
};

const ProjectCardBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1>Info Card Body</h1>
    </div>
  );
};

const ProjectCardFooter: React.FC = () => {
  return (
    <div className={styles.footer}>
      <button>Find out more</button>
    </div>
  );
};

type Props = {
  project: MyProjectItem;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <BaseCard>
      {{
        header: <ProjectCardHeader />,
        body: <ProjectCardBody />,
        footer: <ProjectCardFooter />,
      }}
    </BaseCard>
  );
};

export default ProjectCard;

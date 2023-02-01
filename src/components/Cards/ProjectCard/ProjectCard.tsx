import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import Text from "@/components/Text";
import { MyProjectItem } from "@/hooks/api/usePortfolioPageContentQuery";
import BaseCard from "../BaseCard";
import styles from "./ProjectCard.module.scss";

type ProjectCardHeaderProps = {
  title: string;
  tags: string[];
};

const ProjectCardHeader: React.FC<ProjectCardHeaderProps> = ({
  title,
  tags,
}) => {
  return (
    <div className={styles.header}>
      <Text component="h2" variant="heading3">
        {title}
      </Text>
    </div>
  );
};

type ProjectCardBodyProps = {
  body: string;
};

const ProjectCardBody: React.FC<ProjectCardBodyProps> = ({ body }) => {
  return (
    <div className={styles.body}>
      <Text component="p" variant="body">
        {body}
      </Text>
    </div>
  );
};

type ProjectCardFooterProps = {
  onClick: () => void;
};

const ProjectCardFooter: React.FC<ProjectCardFooterProps> = ({ onClick }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerBtn}>
        <PrimaryButton icon="LinkIcon" text="Find out more" onClick={onClick} />
      </div>
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
        header: (
          <ProjectCardHeader
            title={project.title}
            tags={project.meta.tags ?? []}
          />
        ),
        body: <ProjectCardBody body={project.description} />,
        footer: (
          <ProjectCardFooter
            onClick={() => window.open(`/portfolio/${project.id}`, "_self")}
          />
        ),
      }}
    </BaseCard>
  );
};

export default ProjectCard;

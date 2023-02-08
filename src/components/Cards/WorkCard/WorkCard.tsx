import BaseTag from "@/components/Tags/BaseTag";
import Text from "@/components/Text";
import { WorkExpItem } from "@/hooks/api/useResumePageContentQuery";
import { formatWorkDates } from "@/utils/dates/dateFormatUtils";
import { stringHash } from "@/utils/strings/contentHash";
import BaseCard from "../BaseCard";

import styles from "./WorkCard.module.scss";

type WorkCardHeaderProps = {
  title: string;
  dates: {
    start: string;
    end?: string | null;
  };
  subheading?: string;
};

const WorkCardHeader: React.FC<WorkCardHeaderProps> = ({
  title,
  dates,
  subheading,
}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <Text component="h2" variant="heading3">
          {title}
        </Text>
        <Text component="p" variant="body">
          {formatWorkDates(dates)}
        </Text>
      </div>
      {subheading && (
        <div className={styles.subHeading}>
          <Text component="p" variant="body">
            {subheading}
          </Text>
        </div>
      )}
    </div>
  );
};

type WorkCardBodyProps = {
  tags?: string[];
  responsibilities: string[];
};

const WorkCardBody: React.FC<WorkCardBodyProps> = ({
  responsibilities,
  tags = [],
}) => {
  return (
    <div className={styles.body}>
      <div className={styles.tagContainer}>
        {tags.map((tag, i) => (
          <BaseTag
            variant={i % 2 === 0 ? "primary" : "secondary"}
            key={stringHash(tag)}
          >
            <Text component="p" variant="body">
              {tag}
            </Text>
          </BaseTag>
        ))}
      </div>
      <ul className={styles.responsibilitiesList}>
        {responsibilities.map((responsibility) => (
          <li
            className={styles.responsibilityItem}
            key={stringHash(responsibility)}
          >
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
};

type Props = {
  workExpItem: WorkExpItem;
};

const WorkCard: React.FC<Props> = ({ workExpItem }) => {
  return (
    <BaseCard height="large" width="full">
      {{
        header: (
          <WorkCardHeader
            title={`${workExpItem.title}, ${workExpItem.company.name}`}
            dates={workExpItem.dates}
            subheading={workExpItem.company.description}
          />
        ),
        body: (
          <WorkCardBody
            tags={workExpItem.meta.tags}
            responsibilities={workExpItem.responsibilities}
          />
        ),
      }}
    </BaseCard>
  );
};

export default WorkCard;

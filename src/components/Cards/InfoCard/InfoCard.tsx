import BaseCard from "../BaseCard";
import styles from "./InfoCard.module.scss";

const InfoCardHeader: React.FC = () => {
  return (
    <div className={styles.header}>
      <h1>Info Card Header</h1>
    </div>
  );
};

const InfoCardBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1>Info Card Body</h1>
    </div>
  );
};

const InfoCardFooter: React.FC = () => {
  return (
    <div className={styles.footer}>
      <h1>Info Card Footer</h1>
    </div>
  );
};

const InfoCard: React.FC = () => {
  return (
    <BaseCard>
      {{
        header: <InfoCardHeader />,
        body: <InfoCardBody />,
        footer: <InfoCardFooter />,
      }}
    </BaseCard>
  );
};

export default InfoCard;

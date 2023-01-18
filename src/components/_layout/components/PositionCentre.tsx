import styles from "./PositionCentre.module.scss";

interface Props {
  children: React.ReactNode;
}

const PositionCentre: React.FC<Props> = ({ children }) => {
  return <div className={styles.wrapperCentre}>{children}</div>;
};

export default PositionCentre;

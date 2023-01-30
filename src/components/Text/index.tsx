import classNames from "classnames";
import { AllHTMLAttributes } from "react";

import styles from "./Text.module.scss";

export interface TextProps extends AllHTMLAttributes<HTMLElement> {
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  variant?:
    | "heading1"
    | "heading2"
    | "heading3"
    | "brand"
    | "heroBody"
    | "bigBody"
    | "body"
    | "small";
}

const PlainText: React.FC<TextProps> = ({
  component,
  variant = "body",
  className,
  ...rest
}) => {
  const Component = component;

  return (
    <Component
      className={classNames(styles.base, styles[variant], className)}
      {...rest}
    />
  );
};

export default PlainText;

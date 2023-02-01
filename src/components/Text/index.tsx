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
  capitalise?: boolean;
}

const PlainText: React.FC<TextProps> = ({
  component,
  variant = "body",
  capitalise,
  className,
  ...rest
}) => {
  const Component = component;
  const capitalizeClass = capitalise ? styles.capitalise : "";

  return (
    <Component
      className={classNames(
        styles.base,
        styles[variant],
        capitalizeClass,
        className
      )}
      {...rest}
    />
  );
};

export default PlainText;

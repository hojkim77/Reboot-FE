import type { NextPage } from "next";
import classNames from "classnames";
import styles from "./Section.module.scss";
import { CSSProperties, ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

const Section: NextPage<Props> = ({
  id,
  className,
  children,
  style,
  ...otherProps
}) => {
  const newClassName = classNames(styles.section, className);

  return (
    <div id={id} className={newClassName} style={style} {...otherProps}>
      {children}
    </div>
  );
};

export default Section;

import type { NextPage } from "next";
import classNames from "classnames";
import styles from "./Section.module.scss";
import { ReactNode } from "react";

interface Props {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Section: NextPage<Props> = ({
  id,
  className,
  children,
  ...otherProps
}) => {
  const newClassName = classNames(styles.section, className);

  return (
    <div id={id} className={newClassName} {...otherProps}>
      {children}
    </div>
  );
};

export default Section;

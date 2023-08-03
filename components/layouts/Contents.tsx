import type { NextPage } from "next";
import classNames from "classnames";
import styles from "./Contents.module.scss";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Contents: NextPage<Props> = ({ className, children, ...otherProps }) => {
  const newClassName = classNames(styles.contents, className);

  return (
    <div className={newClassName} {...otherProps}>
      {children}
    </div>
  );
};

export default Contents;

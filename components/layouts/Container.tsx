import type { NextPage } from "next";
import classNames from "classnames";
import styles from "./Container.module.scss";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Container: NextPage<Props> = ({ className, children, ...otherProps }) => {
  const newClassName = classNames(styles.container, className);

  return (
    <div className={newClassName} {...otherProps}>
      {children}
    </div>
  );
};

export default Container;

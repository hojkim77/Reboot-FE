import type { NextPage } from "next";
import classNames from "classnames";
import styles from "./Main.module.scss";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Main: NextPage<Props> = ({ className, children, ...otherProps }) => {
  const newClassName = classNames(styles.main, className);

  return (
    <div className={newClassName} {...otherProps}>
      {children}
    </div>
  );
};

export default Main;

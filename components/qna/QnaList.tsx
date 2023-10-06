import type { NextPage } from "next";
import classNames from "classnames";
import styles from "./QnaList.module.scss";
import Image from "next/image";
import { useCallback, useState } from "react";
import QnaItem from "./QnaItem";

interface NoticeItem {
  id: number;
  title: string;
}

interface Props {
  className?: string;
  data?: NoticeItem[];
}

const QnaList: NextPage<Props> = ({ className, data, ...otherProps }) => {
  const newClassName = classNames(styles.notice_list, className);
  const items = data
    ? data.map((x, i) => <QnaItem key={i} data={x}></QnaItem>)
    : [];

  return (
    <div className={newClassName} {...otherProps}>
      {items}
    </div>
  );
};

export default QnaList;

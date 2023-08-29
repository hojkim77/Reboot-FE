import type { NextPage } from "next";
import Link from "next/link";
import classNames from "classnames";
import styles from "./NoticeList.module.scss";
import dayjs from "dayjs";

interface NoticeItem {
  id: number;
  title: string;
  created_datetime: string;
}

interface ItemProps {
  data: NoticeItem;
}

const Item: NextPage<ItemProps> = ({ data }) => {
  return (
    <div className={styles.item}>
      <Link
        href={{
          pathname: data.id ? "/notices/[id]" : "/notices",
          query: { id: data.id },
        }}
        passHref
        className={styles.title}
      >
        {data.title}
      </Link>
      <span className={styles.date}>
        {dayjs(
          //? 아직 data가 없기 때문에 new Date()로 넣어둠.
          data.created_datetime ? data.created_datetime : new Date()
        ).format("YYYY-MM-DD")}
      </span>
    </div>
  );
};

interface Props {
  className?: string;
  data?: NoticeItem[];
}

const NoticeList: NextPage<Props> = ({ className, data, ...otherProps }) => {
  const newClassName = classNames(styles.notice_list, className);
  const items = data ? data.map((x, i) => <Item key={i} data={x}></Item>) : [];

  return (
    <div className={newClassName} {...otherProps}>
      {items}
    </div>
  );
};

export default NoticeList;

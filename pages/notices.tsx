import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useEffect, useMemo } from "react";
import styles from "@styles/Notices.module.scss";
import Container from "@components/layouts/Container";
import Main from "@components/layouts/Main";
import Section from "@components/layouts/Section";
import Contents from "@components/layouts/Contents";
import Header from "@components/layouts/Header";
import NoticeList from "@components/notices/NoticeList";
import _notices from "data/notice.json";
const Notices: NextPage = () => {
  //const [showOverlay, hideOverlay] = useOverlay();
  //const { data, error } = useSWR("/service/get_notice_list", fetcher);
  //const { list, total } = data?.data || {};

  /*useEffect(() => {
    if (!error && !data) {
      showOverlay(true);
    } else {
      hideOverlay();
    }
  }, [data, error, showOverlay, hideOverlay]);*/

  //const notices = list || [];
  const notices = _notices;
  return (
    <Container>
      <Head>
        <title>로니즈 공지사항</title>
      </Head>

      <Header></Header>

      <Main>
        <Section className={styles.section_1}>
          <Contents className={styles.content}>
            <Link href="/notices" passHref className={styles.text_main}>
              공지사항
            </Link>
            <NoticeList
              className={styles.notice_list}
              data={notices}
            ></NoticeList>
          </Contents>
        </Section>
      </Main>
    </Container>
  );
};

export default Notices;

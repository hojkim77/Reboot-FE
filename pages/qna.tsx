import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import styles from '@styles/Qna.module.scss';
import Container from '@components/layouts/Container';
import Main from '@components/layouts/Main';
import Section from '@components/layouts/Section';
import Contents from '@components/layouts/Contents';
import Header from '@components/layouts/Header';
import NoticeList from '@components/notices/NoticeList';
import _notices from 'data/qna.json';
import Footer from '@/components/layouts/Footer';
import QnaList from '@/components/qna/QnaList';
const Qna: NextPage = () => {
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
        <title>청년소스 자주묻는질문</title>
      </Head>

      <Header></Header>

      <Main>
        <Section className={styles.section_1}>
          <Contents className={styles.content}>
            <Link href="/notices" passHref className={styles.text_main}>
              자주묻는질문
            </Link>
            <QnaList className={styles.notice_list} data={notices}></QnaList>
          </Contents>
        </Section>
      </Main>
      <Footer />
    </Container>
  );
};

export default Qna;

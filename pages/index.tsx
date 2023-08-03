import type { NextPage } from "next";
import styles from "@styles/Home.module.scss";
import Container from "@components/layouts/Container";
import Main from "@/components/layouts/Main";
import Section from "@/components/layouts/Section";
import Contents from "@/components/layouts/Contents";
import SmartStoreBtn from "@/components/buttons/smartStoreButton";
import Header from "@/components/layouts/Header";
import { useOnScreen } from "@hooks/responsive";
import { useEffect, useRef, useState } from "react";
import FixedBar from "@/components/home/FixedBar";
const Home: NextPage = ({}) => {
  const [ScrollY, setScrollY] = useState(0);
  const currentY = useRef(0); // 스크롤값을 저장하기 위한 상태
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaOnScreen = useOnScreen(ctaRef);
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  };

  useEffect(() => {
    console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY]);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  });
  return (
    <Container>
      <Header></Header>

      <Main className={styles.main}>
        {/** sectino 1 */}
        <Section id="1" className={styles.section_1}>
          <Contents className={styles.content}>
            <div>
              <div className={styles.text_main}>
                새로운 메뉴 개발이 어렵다면,
                <br />
                메뉴 선정부터 판매까지
                <span style={{ color: "#E35D3C" }}>한 번에</span>
              </div>
              <div className={styles.text_sub}>
                개인 매장을 운영중인 사장님이라면
                <br />
                쉽고 맛있는 우리 매장만의 메뉴를 판매해보세요
              </div>
              <div className={styles.btn_compare} ref={ctaRef}>
                <SmartStoreBtn text="청년소스몰 바로가기" />
              </div>
            </div>

            <div className={styles.img_landing_1}>
              <object
                data="/images/smartStore.svg"
                style={{ width: "567px", height: "732px" }}
              />
            </div>
          </Contents>
        </Section>
        {/** sectino 2 */}
        <Section id="2" className={styles.section_2}>
          <Contents className={styles.content}>
            <div className={styles.img_landing_2}>
              <object
                data="/images/food_1.svg"
                style={{ width: "inherits", height: "inherits" }}
              />
              <object
                data="/images/food_2.svg"
                style={{
                  width: "inherits",
                  height: "inherits",
                  marginLeft: "180px",
                }}
              />
            </div>
            <div>
              <div className={styles.text_main}>
                크림떡볶이, 크림파스타, 크림우동
                <br />
                <span style={{ color: "#E35D3C" }}>쉽고 다양하게</span>
                요리가 가능해요
              </div>
              <div className={styles.text_sub}>
                패밀리 레스토랑, 셀프바, 분식집, 포차, 비스트로 등
                <br />
                업종별 적합한 메뉴 구성이 가능해요
              </div>
            </div>
          </Contents>
        </Section>
        {/** sectino 3 */}

        <Section id="1" className={styles.section_1}>
          <Contents className={styles.content}>
            <div className={styles.text_main}>
              새로운 메뉴 개발이 어렵다면,
              <br />
              메뉴 선정부터 판매까지
              <span>한 번에</span>
            </div>
            <div className={styles.text_sub}>
              개인 매장을 운영중인 사장님이라면
              <br />
              쉽고 맛있는 우리 매장만의 메뉴를 판매해보세요
            </div>
            <div className={styles.btn_compare}>button</div>
            <div className={styles.img_landing_1}>
              <object
                data="/images/smartStore.svg"
                style={{ width: "inherits", height: "inherits" }}
              />
            </div>
          </Contents>
        </Section>
        {/** sectino 4*/}

        <Section id="2" className={styles.section_2}>
          <Contents className={styles.content}>
            <div className={styles.img_landing_2}>
              <object
                data="/images/food_1.svg"
                style={{ width: "inherits", height: "inherits" }}
              />
            </div>
            <div className={styles.img_landing_2}>
              <object
                data="/images/food_2.svg"
                style={{ width: "inherits", height: "inherits" }}
              />
            </div>
            <div className={styles.text_main}>
              크림떡볶이, 크림파스타, 크림우동
              <br />
              <span>쉽고 다양하게</span>
              요리가 가능해요
            </div>
            <div className={styles.text_sub}>
              패밀리 레스토랑, 셀프바, 분식집, 포차, 비스트로 등
              <br />
              업종별 적합한 메뉴 구성이 가능해요
            </div>
          </Contents>
        </Section>
        {/** sectino 5 */}

        <Section id="1" className={styles.section_1}>
          <Contents className={styles.content}>
            <div className={styles.text_main}>
              새로운 메뉴 개발이 어렵다면,
              <br />
              메뉴 선정부터 판매까지
              <span>한 번에</span>
            </div>
            <div className={styles.text_sub}>
              개인 매장을 운영중인 사장님이라면
              <br />
              쉽고 맛있는 우리 매장만의 메뉴를 판매해보세요
            </div>
            <div className={styles.btn_compare}>button</div>
            <div className={styles.img_landing_1}>
              <object
                data="/images/smartStore.svg"
                style={{ width: "inherits", height: "inherits" }}
              />
            </div>
          </Contents>
        </Section>
        {/** sectino 6 */}

        <Section id="2" className={styles.section_2}>
          <Contents className={styles.content}>
            <div className={styles.img_landing_2}>
              <object
                data="/images/food_1.svg"
                style={{ width: "inherits", height: "inherits" }}
              />
            </div>
            <div className={styles.img_landing_2}>
              <object
                data="/images/food_2.svg"
                style={{ width: "inherits", height: "inherits" }}
              />
            </div>
            <div className={styles.text_main}>
              크림떡볶이, 크림파스타, 크림우동
              <br />
              <span>쉽고 다양하게</span>
              요리가 가능해요
            </div>
            <div className={styles.text_sub}>
              패밀리 레스토랑, 셀프바, 분식집, 포차, 비스트로 등
              <br />
              업종별 적합한 메뉴 구성이 가능해요
            </div>
          </Contents>
        </Section>
        <FixedBar trigger={ctaOnScreen === false} />
      </Main>
    </Container>
  );
};

export default Home;

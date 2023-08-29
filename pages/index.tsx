import type { NextPage } from "next";
import styles from "@styles/Home.module.scss";
import Container from "@components/layouts/Container";
import Main from "@/components/layouts/Main";
import Section from "@/components/layouts/Section";
import Contents from "@/components/layouts/Contents";
import SmartStoreBtn from "@/components/buttons/smartStoreButton";
import Header from "@/components/layouts/Header";
import ReviewSlider from "@/components/home/ReviewSlider";
import { useOnScreen } from "@hooks/responsive";
import { useEffect, useRef, useState } from "react";
import FixedBar from "@/components/home/FixedBar";
const Home: NextPage = ({}) => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaOnScreen = useOnScreen(ctaRef);
  {
    /**
     * //? scroll 관련 testCode
     * const [ScrollY, setScrollY] = useState(0);
  const currentY = useRef(0); // 스크롤값을 저장하기 위한 상태
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
 */
  }

  return (
    <Container>
      <Header></Header>

      <Main className={styles.main}>
        {/** sectino 1 */}
        <Section id="1" className={styles.section_1}>
          <Contents className={styles.content}>
            <div className={styles.text_container}>
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
              <object data="/images/smartStore.svg" />
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

        <Section id="3" className={styles.section_3}>
          <Contents className={styles.content}>
            <div>
              <div className={styles.text_main}>
                청년소스를 이용하면
                <br />
                <span style={{ color: "#E35D3C" }}>빠른 조리</span>가 가능해요
              </div>
              <div className={styles.text_sub}>
                불필요한 금액을 줄여 비용을 낮추는
                <br />
                가장 합리적인 제작 방법을만나보세요!
              </div>
            </div>

            <div className={styles.img_landing_3}>
              <object
                data="/images/smartStore.svg"
                style={{ width: "359px", height: "359px" }}
              />
            </div>
          </Contents>
        </Section>
        {/** sectino 4*/}

        <Section id="4" className={styles.section_4}>
          <Contents className={styles.content}>
            <div className={styles.img_landing_4}>
              <object
                data="/images/scale.svg"
                style={{ width: "507px", height: "332px" }}
              />
            </div>

            <div>
              <div className={styles.text_main}>
                여러 과정 없이
                <span style={{ color: "#E35D3C" }}>원스톱 방식</span>
                으로
                <br />
                간편한 조리가 가능해요
              </div>
              <div className={styles.text_sub}>
                계속해서 달라지는 맛 때문에 고민이신가요?
                <br />
                여러 재료가 한 번에 섞여있어 사용이 편리해요
              </div>
            </div>
          </Contents>
        </Section>
        {/** sectino 5 */}
        <Section id="5" className={styles.section_5}>
          <Contents className={styles.content}>
            <div>
              <div className={styles.text_main}>
                1인용부터 단체 음식까지
                <br />
                <span style={{ color: "#E35D3C" }}>인원수에 맞게</span> 양
                조절이 가능해요
              </div>
              <div className={styles.text_sub}>
                밀키트처럼 정량화 된 기준이 아니기 때문에
                <br />
                상권에 맞는 메뉴로 맞춤형 제작이 가능해요!
              </div>
            </div>

            <div className={styles.img_landing_5}>
              <object
                data="/images/beaker.svg"
                style={{ width: "433px", height: "369px" }}
              />
            </div>
          </Contents>
        </Section>
        {/** sectino 6 */}

        <Section id="6" className={styles.section_6}>
          <Contents className={styles.content}>
            <ReviewSlider></ReviewSlider>
          </Contents>
        </Section>
        <FixedBar trigger={ctaOnScreen === false}></FixedBar>
      </Main>
    </Container>
  );
};

export default Home;

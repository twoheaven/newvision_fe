import "@/IntroPage.css";

import {
  Area,
  Button,
  Content,
  Flex,
  Spacer,
  Text,
} from "@dohyun-ko/react-atoms";
import { Link } from "react-router-dom";

import LeftArrow from "@/assets/leftarrow.png";
import RightArrow from "@/assets/rightarrow.png";
import WhiteLogo from "@/assets/whitelogo.png";
import Line from "@/components/line/Line";
import Paths from "@/types/paths";

const IntroPage = () => {
  return (
    <Area className="intro-container">
      <Content>
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Flex>
            <img
              src={WhiteLogo}
              alt={"newvisionlogo"}
              width={"150px"}
              height={"138px"}
            />
          </Flex>
          <Text size={"80px"} color={"white"}>
            N E W V I S I O N
          </Text>
          <Spacer height={"10px"} />
          <Line
            style={{
              width: "800px",
            }}
          />
          <Spacer height={"50px"} />
          <Flex gap={"10px"}>
            <Link to={Paths.Main}>
              <Button
                width={"340px"}
                height={"340px"}
                style={{ backgroundColor: "rgba(10, 17, 53, 0.5)" }}
              >
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                >
                  <img
                    src={LeftArrow}
                    width={"320px"}
                    style={{
                      position: "relative",
                      top: "-67.5px",
                    }}
                  />
                  <Text
                    color="white"
                    size={"24px"}
                    style={{
                      position: "relative",
                      top: "-75px",
                      left: "105px",
                    }}
                  >
                    뉴비전교회
                  </Text>
                  <Text
                    color="white"
                    size={"40px"}
                    style={{
                      position: "relative",
                      top: "-85px",
                      left: "90px",
                    }}
                  >
                    홈페이지
                  </Text>
                  <Text
                    color={"white"}
                    size={"40px"}
                    style={{
                      position: "relative",
                      top: "-100px",
                      left: "90px",
                    }}
                  >
                    바로가기
                  </Text>
                </Flex>
              </Button>
            </Link>
            <Flex flexDirection={"column"}>
              <a href="https://www.youtube.com/@kimonyou153">
                <Button
                  width={"300px"}
                  height={"165px"}
                  style={{ backgroundColor: "rgba(10, 17, 53, 0.5)" }}
                >
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <img
                      src={RightArrow}
                      width={"280px"}
                      style={{
                        position: "relative",
                        top: "16px",
                      }}
                    />
                    <Text
                      color="white"
                      size={"26px"}
                      style={{
                        position: "relative",
                        top: "8px",
                        left: "-85px",
                      }}
                    >
                      김온유 목사
                    </Text>
                    <Flex
                      style={{
                        position: "relative",
                        top: "5px",
                      }}
                    >
                      <Text
                        color="white"
                        size={"40px"}
                        style={{
                          position: "relative",
                          top: "-7px",
                          left: "-25px",
                        }}
                      >
                        YOU{" "}
                        <Button
                          backgroundColor={"red"}
                          borderRadius={"5px"}
                          height={"36px"}
                          style={{
                            position: "relative",
                            top: "12px",
                            left: "-5px",
                          }}
                        >
                          <Text
                            color="white"
                            size={"40px"}
                            style={{
                              position: "relative",
                              top: "-11.5px",
                            }}
                          >
                            TUBE
                          </Text>
                        </Button>
                      </Text>
                      <Text
                        color="white"
                        size={"24px"}
                        style={{
                          position: "relative",
                          left: "-26px",
                        }}
                      >
                        LIVE
                      </Text>
                    </Flex>
                    <Text
                      color="white"
                      size={"40px"}
                      style={{
                        position: "relative",
                        top: "-18px",
                        left: "-75px",
                      }}
                    >
                      바로보기
                    </Text>
                  </Flex>
                </Button>
              </a>
              <Spacer height={"10px"} />
              <a href="https://litt.ly/new_vision_church">
                <Button
                  width={"300px"}
                  height={"165px"}
                  style={{ backgroundColor: "rgba(10, 17, 53, 0.5)" }}
                >
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <img
                      src={RightArrow}
                      width={"280px"}
                      style={{
                        position: "relative",
                        top: "12.5px",
                      }}
                    />
                    <Text
                      color="white"
                      size={"26px"}
                      style={{
                        position: "relative",
                        top: "0px",
                        left: "-78px",
                      }}
                    >
                      2023년 4기
                    </Text>
                    <Text
                      color="white"
                      size={"40px"}
                      style={{
                        position: "relative",
                        top: "-12px",
                        left: "-25px",
                      }}
                    >
                      요한계시록학교
                    </Text>
                    <Text
                      color="white"
                      size={"40px"}
                      style={{
                        position: "relative",
                        top: "-30px",
                        left: "-78px",
                      }}
                    >
                      신청하기
                    </Text>
                  </Flex>
                </Button>
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Content>
    </Area>
  );
};

export default IntroPage;

import { Area, Content, Flex, Grid, Spacer } from "@dohyun-ko/react-atoms";

import Intro from "@/assets/intro";
import PartyPageHeader from "@/components/pageHeader/PartyPageHeader";
import useIsMobile from "@/hooks/useIsMobile";

interface PartyPageProps {}

const PartyPage = ({}: PartyPageProps) => {
  const isMobile = useIsMobile();

  return (
    <Area>
      <PartyPageHeader />

      <Spacer height={"30px"} />

      <Content>
        <Flex justifyContent="center"></Flex>
      </Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default PartyPage;

import { Area, Content, Grid, Spacer } from "@dohyun-ko/react-atoms";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";

import { getTexts } from "@/apis/text-api";
import TeamPageHeader from "@/components/pageHeader/TeamPageHeader";
import TeamCard from "@/components/teamCard/TeamCard";
import useIsMobile from "@/hooks/useIsMobile";
import { divisionAtom } from "@/store";
import QueryKeys from "@/types/queryKeys";
import { divideTexts } from "@/utils/utils";

interface TeamPageProps {}

const TeamPage = ({}: TeamPageProps) => {
  return (
    <Area>
      <TeamPageHeader />

      <Spacer height={"30px"} />

      <Content></Content>

      <Spacer height={"100px"} />
    </Area>
  );
};

export default TeamPage;

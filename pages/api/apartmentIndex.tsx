import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  name: string;
  test?: any;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let test: object[] = [];
  // try {
  //   fetch(
  //     `https://api.odcloud.kr/api/WeeklyAptTrendSvc/v1/getAptTradingPriceIndex?page=1&perPage=10000&cond[RESEARCH_DATE::GT]=20211231&cond[RESEARCH_DATE::LTE]=20221201&cond[APT_TYPE::EQ]=0&cond[TR_GBN::EQ]=D&cond[WEEK_FLAG::EQ]=m&serviceKey=Qo3J3u1dw0A%2BX9AuS68G13RnSAsowYysivlTzs04BtMV%2BwXhSuRn5qxRJrQixlKlwwVFkreC51d6CrwIoYlxoQ%3D%3D`
  //   )
  //     .then((res) => res.json())
  //     .then(async (json) => {
  //       const ageData = json.data;
  //       console.log(ageData.length);
  //       ageData.map((ele: any) => {
  //         let obj = {
  //           APT_TYPE: ele.APT_TYPE,
  //           INDICES: ele.INDICES,
  //           LEVEL_NO: ele.LEVEL_NO,
  //           ORDER_NO: ele.ORDER_NO,
  //           REGION_CD: ele.REGION_CD,
  //           REGION_NM: ele.REGION_NM,
  //           RESEARCH_DATE: ele.RESEARCH_DATE,
  //           TR_GBN: ele.TR_GBN,
  //           WEEK_FLAG: ele.WEEK_FLAG,
  //         };
  //         test.push(obj);
  //         //   console.log(ele);
  //       });
  //       // const cTest = await prisma.transactions_age_2022.createMany({
  //       //   data: test,
  //       // });
  //       console.log(test);
  //       const cTst = await prisma.apartHouseIndex_2022?.createMany({
  //         data: test,
  //       });
  //       res.status(200).json({ name: "ok!", test });
  //     });
  // } catch (err) {
  //   res.status(200).json({ name: "안돼~" });
  // } finally {
  //   console.log("완료.");
  //   prisma.$disconnect();
  // }

  //지역별 지수정보api를 DB에 넣기위한 코드
}

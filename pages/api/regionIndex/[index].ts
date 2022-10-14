import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
const prisma = new PrismaClient();

type Data = {
  HouseST?: any;
  HouseSL?: any;
  HouseDT?: any;
  HouseDL?: any;
  ApartST?: any;
  ApartSL?: any;
  ApartDT?: any;
  ApartDL?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { indexRegions, indexMonthDay, indexLastMonthDay } = JSON.parse(
    req.query.index?.toString() || ""
  );
  // console.log(indexRegions);
  // console.log(indexMonthDay);
  // console.log(indexLastMonthDay);
  // console.log(req.query.index?.toString());
  // console.log(indexRegions);
  //aaaaaa

  const yearNumber = (Number(indexMonthDay) / 100).toFixed(0);

  // console.log(yearNumber);

  switch (yearNumber) {
    case "2022":
      const HouseST1 = await prisma.apartHouseIndex_2022.findMany({
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      const HouseSL1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      const HouseDT1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
          RESEARCH_DATE: indexMonthDay,
        },
      });
      const HouseDL1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      const ApartST1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      const ApartSL1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      const ApartDT1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      const ApartDL1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      res.status(200).json({
        HouseST: HouseST1,
        HouseSL: HouseSL1,
        HouseDT: HouseDT1,
        HouseDL: HouseDL1,
        ApartST: ApartST1,
        ApartSL: ApartSL1,
        ApartDT: ApartDT1,
        ApartDL: ApartDL1,
      });
      break;
    case "2021":
      const HouseST2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      const HouseSL2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      const HouseDT2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      const HouseDL2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      const ApartST2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      const ApartSL2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      const ApartDT2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      const ApartDL2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      res.status(200).json({
        HouseST: HouseST2,
        HouseSL: HouseSL2,
        HouseDT: HouseDT2,
        HouseDL: HouseDL2,
        ApartST: ApartST2,
        ApartSL: ApartSL2,
        ApartDT: ApartDT2,
        ApartDL: ApartDL2,
      });
      break;
    case "2020":
      const HouseST3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      const HouseSL3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      const HouseDT3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      const HouseDL3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      const ApartST3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      const ApartSL3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      const ApartDT3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      const ApartDL3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      res.status(200).json({
        HouseST: HouseST3,
        HouseSL: HouseSL3,
        HouseDT: HouseDT3,
        HouseDL: HouseDL3,
        ApartST: ApartST3,
        ApartSL: ApartSL3,
        ApartDT: ApartDT3,
        ApartDL: ApartDL3,
      });
      break;
    case "2019":
      const HouseST4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      const HouseSL4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      const HouseDT4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      const HouseDL4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      const ApartST4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      const ApartSL4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      const ApartDT4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      const ApartDL4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      res.status(200).json({
        HouseST: HouseST4,
        HouseSL: HouseSL4,
        HouseDT: HouseDT4,
        HouseDL: HouseDL4,
        ApartST: ApartST4,
        ApartSL: ApartSL4,
        ApartDT: ApartDT4,
        ApartDL: ApartDL4,
      });
      break;
  }
}

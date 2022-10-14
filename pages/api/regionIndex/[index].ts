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
  let HouseST;
  let HouseSL;
  let HouseDT;
  let HouseDL;
  let ApartST;
  let ApartSL;
  let ApartDT;
  let ApartDL;

  const yearNumber = (Number(indexMonthDay) / 100).toFixed(0);

  // console.log(yearNumber);

  switch (yearNumber) {
    case "2022":
      HouseST = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      HouseSL = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      HouseDT = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
          RESEARCH_DATE: indexMonthDay,
        },
      });
      HouseDL = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      ApartST = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      ApartSL = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      ApartDT = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      ApartDL = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      break;
    case "2021":
      HouseST = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      HouseSL = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      HouseDT = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      HouseDL = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      ApartST = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      ApartSL = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      ApartDT = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      ApartDL = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      break;
    case "2020":
      HouseST = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      HouseSL = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      HouseDT = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      HouseDL = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      ApartST = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      ApartSL = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      ApartDT = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      ApartDL = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      break;
    case "2019":
      HouseST = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      HouseSL = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
        },
      });
      HouseDT = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      HouseDL = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
        },
      });
      ApartST = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      ApartSL = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
        },
      });
      ApartDT = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      ApartDL = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      break;
  }

  res.status(200).json({
    HouseST,
    HouseSL,
    HouseDT,
    HouseDL,
    ApartST,
    ApartSL,
    ApartDT,
    ApartDL,
  });
}

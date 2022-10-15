import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type Data = {
  arr?: any;
  arr1?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { indexRegions, indexMonthDay, indexLastMonthDay } = JSON.parse(
    req.query.index?.toString() || ""
  );

  let arr: any = [];
  let arr1: any = [];

  const yearNumber = (Number(indexMonthDay) / 100).toFixed(0) || 0;
  const LyearNumber = (Number(indexLastMonthDay) / 100).toFixed(0) || 0;

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
      const HouseDT1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
          RESEARCH_DATE: indexMonthDay,
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
      const ApartDT1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      arr = [...HouseST1, ...HouseDT1, ...ApartST1, ...ApartDT1];
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
      const HouseDT2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
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
      const ApartDT2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      arr = [...HouseST2, ...HouseDT2, ...ApartST2, ...ApartDT2];
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
      const HouseDT3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
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
      const ApartDT3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      arr = [...HouseST3, ...HouseDT3, ...ApartST3, ...ApartDT3];
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
      const HouseDT4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
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
      const ApartDT4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 전세거래
        where: {
          RESEARCH_DATE: indexMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
        },
      });
      arr = [...HouseST4, ...HouseDT4, ...ApartST4, ...ApartDT4];
      break;
  }

  switch (LyearNumber) {
    case "2022":
      const HouseSL1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
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
      const ApartSL1 = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
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
      arr1 = [...HouseSL1, ...HouseDL1, ...ApartSL1, ...ApartDL1];
      break;
    case "2021":
      const HouseSL2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
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
      const ApartSL2 = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
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
      arr1 = [...HouseSL2, ...HouseDL2, ...ApartSL2, ...ApartDL2];
      break;
    case "2020":
      const HouseSL3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
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
      const ApartSL3 = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
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
      arr1 = [...HouseSL3, ...HouseDL3, ...ApartSL3, ...ApartDL3];
      break;
    case "2019":
      const HouseSL4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
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
      const ApartSL4 = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 매매거래
        where: {
          RESEARCH_DATE: indexLastMonthDay,
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
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
      arr1 = [...HouseSL4, ...HouseDL4, ...ApartSL4, ...ApartDL4];
      break;
  }

  res.status(200).json({
    arr,
    arr1,
  });
}

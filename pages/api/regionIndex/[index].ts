import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
const prisma = new PrismaClient();

type Data = {
  HouseS?: any;
  ApartS?: any;
  HouseD?: any;
  ApartD?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { indexRegions, indexDayRegion } = JSON.parse(
    req.query.index?.toString() || ""
  );
  // console.log(indexRegions);
  // console.log(indexDayRegion);

  let HouseS;
  let HouseD;
  let ApartS;
  let ApartD;

  const yearNumber = (Number(indexDayRegion) / 100).toFixed(0);

  console.log(yearNumber);

  switch (yearNumber) {
    case "2022":
      HouseS = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 매매거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      HouseD = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 주택 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      ApartS = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 매매거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      ApartD = await prisma.apartHouseIndex_2022.findMany({
        // 22년도 아파트 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      break;
    case "2021":
      HouseS = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 매매거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      HouseD = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 주택 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      ApartS = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 매매거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      ApartD = await prisma.apartHouseIndex_2021.findMany({
        // 21년도 아파트 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      break;
    case "2020":
      HouseS = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 매매거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      HouseD = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 주택 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      ApartS = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 매매거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      ApartD = await prisma.apartHouseIndex_2020.findMany({
        // 20년도 아파트 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      break;
    case "2019":
      HouseS = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 매매거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "S",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      HouseD = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 주택 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "0",
          TR_GBN: "D",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      ApartS = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 매매거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "S",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      ApartD = await prisma.apartHouseIndex_2019.findMany({
        // 19년도 아파트 전세거래
        where: {
          REGION_CD: indexRegions,
          APT_TYPE: "1",
          TR_GBN: "D",
          RESEARCH_DATE: indexDayRegion,
        },
      });
      break;
  }

  res.status(200).json({ HouseS, HouseD, ApartS, ApartD });
}
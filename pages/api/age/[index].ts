import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
const prisma = new PrismaClient();

type Data = {
  House?: any;
  Apart?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { ageRegions, ageDayRegion } = JSON.parse(
    req.query.index?.toString() || ""
  );

  let House;
  let Apart;

  const yearNumber = (Number(ageDayRegion) / 100).toFixed(0) || 0;

  console.log(yearNumber);

  switch (yearNumber) {
    case "2022":
      House = await prisma.transactions_age_2022.findMany({
        // 22년도 주택 거래
        where: {
          REGION_CD: ageRegions,
          DEAL_OBJ: "06",
          RESEARCH_DATE: ageDayRegion,
        },
      });
      Apart = await prisma.transactions_age_2022.findMany({
        // 22년도 아파트 거래
        where: {
          REGION_CD: ageRegions,
          DEAL_OBJ: "07",
          RESEARCH_DATE: ageDayRegion,
        },
      });
      break;
    case "2021":
      House = await prisma.transactions_age_2021.findMany({
        // 22년도 주택 거래
        where: {
          REGION_CD: ageRegions,
          DEAL_OBJ: "06",
          RESEARCH_DATE: ageDayRegion,
        },
      });
      Apart = await prisma.transactions_age_2021.findMany({
        // 22년도 아파트 거래
        where: {
          REGION_CD: ageRegions,
          DEAL_OBJ: "07",
          RESEARCH_DATE: ageDayRegion,
        },
      });
      break;
    case "2020":
      House = await prisma.transactions_age_2020.findMany({
        // 22년도 주택 거래
        where: {
          REGION_CD: ageRegions,
          DEAL_OBJ: "06",
          RESEARCH_DATE: ageDayRegion,
        },
      });
      Apart = await prisma.transactions_age_2020.findMany({
        // 22년도 아파트 거래
        where: {
          REGION_CD: ageRegions,
          DEAL_OBJ: "07",
          RESEARCH_DATE: ageDayRegion,
        },
      });
      break;
    case "2019":
      House = await prisma.transactions_age_2019.findMany({
        // 22년도 주택 거래
        where: {
          REGION_CD: ageRegions,
          DEAL_OBJ: "06",
          RESEARCH_DATE: ageDayRegion,
        },
      });
      Apart = await prisma.transactions_age_2019.findMany({
        // 22년도 아파트 거래
        where: {
          REGION_CD: ageRegions,
          DEAL_OBJ: "07",
          RESEARCH_DATE: ageDayRegion,
        },
      });
      break;
  }

  res.status(200).json({ House, Apart });
}

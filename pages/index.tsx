import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DoughnutChart from "../components/DoughnutChart";
import React from "react";
import { useRouter } from "next/router";

interface secondRegionType {
  region: String;
  regionCD: String;
}
interface wantYearType {
  RESEARCH_DATE: string;
}

const Home: NextPage = () => {
  const router = useRouter();
  const [secondRegion, setSecondRegion] = useState<secondRegionType[]>([]);
  // 첫번째박스에서 선택한 정보에 맞게 두번째 셀렉트박스 변경
  const [ageRegions, setAgeRegions] = useState("");
  //DB에 저장한 모든 정보값들을 담아내기 위한 변수
  const [ageDayRegion, setAgeDayRegion] = useState("");
  const [click, setClick] = useState(true);
  // 버튼을 클릭했을 시 보낼 데이터를 담아내는 변수
  const [houseData06, setHouseData06] = useState("");
  const [aparttData07, setapArttData07] = useState("");

  const [firstRegion, setFirstRegion] = useState([
    { region: "서울", regionCD: "11000" },
    { region: "경기", regionCD: "41000" },
    { region: "충남", regionCD: "44000" },
    { region: "충북", regionCD: "43000" },
    { region: "전남", regionCD: "46000" },
    { region: "전북", regionCD: "45000" },
    { region: "경남", regionCD: "48000" },
    { region: "경북", regionCD: "47000" },
    { region: "강원", regionCD: "42000" },
    { region: "인천", regionCD: "28000" },
    { region: "광주", regionCD: "29000" },
    { region: "세종", regionCD: "36000" },
    { region: "대전", regionCD: "30000" },
    { region: "울산", regionCD: "31000" },
    { region: "부산", regionCD: "26000" },
    { region: "대구", regionCD: "27000" },
    { region: "제주", regionCD: "50000" },
  ]);

  const allSecondRegion = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.currentTarget.value) {
      case "11000":
        setSecondRegion([
          { region: "종로구", regionCD: "11110" },
          { region: "중구", regionCD: "11140" },
          { region: "용산구", regionCD: "11170" },
          { region: "성동구", regionCD: "11200" },
          { region: "광진구", regionCD: "11215" },
          { region: "동대문구", regionCD: "11230" },
          { region: "중랑구", regionCD: "11260" },
          { region: "성북구", regionCD: "11290" },
          { region: "강북구", regionCD: "11305" },
          { region: "도봉구", regionCD: "11320" },
          { region: "노원구", regionCD: "11350" },
          { region: "은평구", regionCD: "11380" },
          { region: "서대문구", regionCD: "11410" },
          { region: "마포구", regionCD: "11440" },
          { region: "양천구", regionCD: "11470" },
          { region: "강서구", regionCD: "11500" },
          { region: "구로구", regionCD: "11530" },
          { region: "금천구", regionCD: "11545" },
          { region: "영등포구", regionCD: "11560" },
          { region: "동작구", regionCD: "11590" },
          { region: "관악구", regionCD: "11620" },
          { region: "서초구", regionCD: "11650" },
          { region: "강남구", regionCD: "11680" },
          { region: "송파구", regionCD: "11710" },
          { region: "강동구", regionCD: "11740" },
        ]);

        break;
      case "41000":
        setSecondRegion([
          { region: "과천시", regionCD: "41290" },
          { region: "의왕시", regionCD: "41430" },
          { region: "부천시", regionCD: "41190" },
          { region: "오산시", regionCD: "41370" },
          { region: "하남시", regionCD: "41450" },
          { region: "김포시", regionCD: "41570" },
          { region: "동두천시", regionCD: "41250" },
          { region: "안양시 만안구 ", regionCD: "41171" },
          { region: "안양시 동안구 ", regionCD: "41173" },
          { region: "안성시", regionCD: "41550" },
          { region: "안산시 상록구 ", regionCD: "41271" },
          { region: "안산시 단원구 ", regionCD: "41273" },
          { region: "평택시", regionCD: "41220" },
          { region: "광양시 덕양구 ", regionCD: "41610" },
          { region: "고주시", regionCD: "41285" },
          { region: "고양시 일산동구", regionCD: "41281" },
          { region: "고양시 일산서구", regionCD: "41287" },
          { region: "양주시", regionCD: "41630" },
          { region: "성남시 수정구", regionCD: "41131" },
          { region: "성남시 중원구", regionCD: "41133" },
          { region: "성남시 분당구", regionCD: "41135" },
          { region: "용인시 처안구", regionCD: "41461" },
          { region: "용인시 기흥구", regionCD: "41463" },
          { region: "용인시 수지구", regionCD: "41465" },
          { region: "광명시", regionCD: "41210" },
          { region: "남양주시", regionCD: "41360" },
          { region: "이천시", regionCD: "41500" },
          { region: "파주시", regionCD: "41480" },
          { region: "의정부시", regionCD: "41150" },
          { region: "군포시", regionCD: "41410" },
          { region: "수원시 장안구 ", regionCD: "41111" },
          { region: "수원시 권선구 ", regionCD: "41113" },
          { region: "수원시 팔달구 ", regionCD: "41115" },
          { region: "수원시 영통구 ", regionCD: "41117" },
          { region: "화성시", regionCD: "41590" },
          { region: "구리시", regionCD: "41310" },
          { region: "여주시", regionCD: "41670" },
          { region: "포천시", regionCD: "41650" },
          { region: "시흥시", regionCD: "41390" },
        ]);
        break;
      case "44000":
        setSecondRegion([
          { region: "천안시 동남구", regionCD: "44131" },
          { region: "천안시 서북구", regionCD: "44133" },
          { region: "공주시", regionCD: "44150" },
          { region: "보령시", regionCD: "44180" },
          { region: "아산시", regionCD: "44200" },
          { region: "서산시", regionCD: "44210" },
          { region: "논산시", regionCD: "44230" },
          { region: "계룡시", regionCD: "44250" },
          { region: "홍성군", regionCD: "44800" },
          { region: "예산군", regionCD: "44810" },
          { region: "당진시", regionCD: "44270" },
        ]);
        break;
      case "43000":
        setSecondRegion([
          { region: "청주시 상당구", regionCD: "43111" },
          { region: "청주시 서원구", regionCD: "43112" },
          { region: "청주시 흥덕구", regionCD: "43113" },
          { region: "청주시 청원구", regionCD: "43114" },
          { region: "충주시", regionCD: "43130" },
          { region: "제천시", regionCD: "43150" },
          { region: "음성군", regionCD: "43770" },
        ]);
        break;
      case "46000":
        setSecondRegion([
          { region: "목포시", regionCD: "46110" },
          { region: "여수시", regionCD: "46130" },
          { region: "순천시", regionCD: "46150" },
          { region: "나주시", regionCD: "46170" },
          { region: "광양시", regionCD: "46230" },
          { region: "무안군", regionCD: "46840" },
        ]);
        break;
      case "45000":
        setSecondRegion([
          { region: "전주시 완산구", regionCD: "45111" },
          { region: "전주시 덕진구", regionCD: "45113" },
          { region: "군산시", regionCD: "45130" },
          { region: "익산시", regionCD: "45140" },
          { region: "정읍시", regionCD: "45180" },
          { region: "남원시", regionCD: "45190" },
          { region: "김제시", regionCD: "45210" },
        ]);
        break;
      case "48000":
        setSecondRegion([
          { region: "창원시 의창구", regionCD: "48121" },
          { region: "창원시 성산구", regionCD: "48123" },
          { region: "창원시 마산합포구", regionCD: "48125" },
          { region: "창원시 마산회원구", regionCD: "48127" },
          { region: "창원시 진해구", regionCD: "48129" },
          { region: "진주시", regionCD: "48170" },
          { region: "통영시", regionCD: "48220" },
          { region: "사천시", regionCD: "48240" },
          { region: "김해시", regionCD: "48250" },
          { region: "밀양시", regionCD: "48270" },
          { region: "거제시", regionCD: "48310" },
          { region: "양산시", regionCD: "48330" },
        ]);
        break;
      case "47000":
        setSecondRegion([
          { region: "포항시 남구", regionCD: "47111" },
          { region: "포항시 북구", regionCD: "47113" },
          { region: "경주시", regionCD: "47130" },
          { region: "김천시", regionCD: "47150" },
          { region: "안동시", regionCD: "47170" },
          { region: "구미시", regionCD: "47190" },
          { region: "영주시", regionCD: "47210" },
          { region: "영천시", regionCD: "47230" },
          { region: "상주시", regionCD: "47250" },
          { region: "문경시", regionCD: "47280" },
          { region: "경산시", regionCD: "47290" },
          { region: "칠곡군", regionCD: "47850" },
        ]);
        break;
      case "42000":
        setSecondRegion([
          { region: "춘천시", regionCD: "42110" },
          { region: "원주시", regionCD: "42130" },
          { region: "강릉시", regionCD: "42150" },
          { region: "동해시", regionCD: "42170" },
          { region: "태백시", regionCD: "42190" },
          { region: "속초시", regionCD: "42210" },
          { region: "삼척시", regionCD: "42230" },
        ]);
        break;
      case "28000":
        setSecondRegion([
          { region: "중구", regionCD: "28110" },
          { region: "동구", regionCD: "28140" },
          { region: "미추홀구", regionCD: "28177" },
          { region: "연수구", regionCD: "28185" },
          { region: "남동구", regionCD: "28200" },
          { region: "부평구", regionCD: "28237" },
          { region: "계양구", regionCD: "28245" },
          { region: "서구", regionCD: "28260" },
        ]);
        break;
      case "29000":
        setSecondRegion([
          { region: "동구 ", regionCD: "29110" },
          { region: "서구 ", regionCD: "29140" },
          { region: "남구 ", regionCD: "29155" },
          { region: "북구 ", regionCD: "29170" },
          { region: "광산구", regionCD: "29200" },
        ]);
        break;
      case "36000":
        setSecondRegion([{ region: "세종", regionCD: "36000" }]);
        break;
      case "30000":
        setSecondRegion([
          { region: "동구", regionCD: "30110" },
          { region: "중구", regionCD: "30140" },
          { region: "서구", regionCD: "30170" },
          { region: "유성구", regionCD: "30200" },
          { region: "대덕구", regionCD: "30230" },
        ]);
        break;
      case "31000":
        setSecondRegion([
          { region: "중구", regionCD: "31110" },
          { region: "남구", regionCD: "31140" },
          { region: "동구", regionCD: "31170" },
          { region: "북구", regionCD: "31200" },
          { region: "울주군", regionCD: "31710" },
        ]);
        break;
      case "26000":
        setSecondRegion([
          { region: "중구", regionCD: "26110" },
          { region: "서구", regionCD: "26140" },
          { region: "동구", regionCD: "26170" },
          { region: "영도구", regionCD: "26200" },
          { region: "부산진구", regionCD: "26230" },
          { region: "남구", regionCD: "26290" },
          { region: "연제구", regionCD: "26470" },
          { region: "수영구", regionCD: "26500" },
          { region: "해운대구", regionCD: "26350" },
          { region: "금정구", regionCD: "26410" },
          { region: "동래구", regionCD: "26260" },
          { region: "기장군", regionCD: "26710" },
          { region: "북구", regionCD: "26320" },
          { region: "강서구", regionCD: "26440" },
          { region: "사상구", regionCD: "26530" },
          { region: "사하구", regionCD: "26380" },
        ]);
        break;
      case "27000":
        setSecondRegion([
          { region: "중구", regionCD: "27110" },
          { region: "동구", regionCD: "27140" },
          { region: "서구", regionCD: "27170" },
          { region: "남구", regionCD: "27200" },
          { region: "북구", regionCD: "27230" },
          { region: "수성구", regionCD: "27260" },
          { region: "달서구", regionCD: "27290" },
          { region: "달성군", regionCD: "27710" },
        ]);
        break;
      case "50000":
        setSecondRegion([
          { region: "제주시", regionCD: "50110" },
          { region: "서귀포시", regionCD: "50130" },
        ]);
        break;
    }
  };

  const [ageValue, setAgeValue] = useState([
    { RESEARCH_DATE: "202208" },
    { RESEARCH_DATE: "202207" },
    { RESEARCH_DATE: "202206" },
    { RESEARCH_DATE: "202205" },
    { RESEARCH_DATE: "202204" },
    { RESEARCH_DATE: "202203" },
    { RESEARCH_DATE: "202202" },
    { RESEARCH_DATE: "202201" },
    { RESEARCH_DATE: "202112" },
    { RESEARCH_DATE: "202111" },
    { RESEARCH_DATE: "202110" },
    { RESEARCH_DATE: "202109" },
    { RESEARCH_DATE: "202108" },
    { RESEARCH_DATE: "202107" },
    { RESEARCH_DATE: "202106" },
    { RESEARCH_DATE: "202105" },
    { RESEARCH_DATE: "202104" },
    { RESEARCH_DATE: "202103" },
    { RESEARCH_DATE: "202102" },
    { RESEARCH_DATE: "202101" },
    { RESEARCH_DATE: "202012" },
    { RESEARCH_DATE: "202011" },
    { RESEARCH_DATE: "202010" },
    { RESEARCH_DATE: "202009" },
    { RESEARCH_DATE: "202008" },
    { RESEARCH_DATE: "202007" },
    { RESEARCH_DATE: "202006" },
    { RESEARCH_DATE: "202005" },
    { RESEARCH_DATE: "202004" },
    { RESEARCH_DATE: "202003" },
    { RESEARCH_DATE: "202002" },
    { RESEARCH_DATE: "202001" },
    { RESEARCH_DATE: "201912" },
    { RESEARCH_DATE: "201911" },
    { RESEARCH_DATE: "201910" },
    { RESEARCH_DATE: "201909" },
    { RESEARCH_DATE: "201908" },
    { RESEARCH_DATE: "201907" },
    { RESEARCH_DATE: "201906" },
    { RESEARCH_DATE: "201905" },
    { RESEARCH_DATE: "201904" },
    { RESEARCH_DATE: "201903" },
    { RESEARCH_DATE: "201902" },
    { RESEARCH_DATE: "201901" },
  ]);

  const regions = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value);
    setAgeRegions(event.currentTarget.value);
  }; //두번째 셀렉트박스 onChange함수

  const dayRegions = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.currentTarget.value);
    setAgeDayRegion(event.currentTarget.value);
  };

  useEffect(() => {
    const data = {
      ageRegions,
      ageDayRegion,
    };

    fetch(`api/age/${JSON.stringify(data)}`)
      .then((res) => res.json())
      .then((json) => {
        // setAgeRegions(json);
        // console.log(json.House);
        console.log(json.Apart);
        setHouseData06(json.House);
        setapArttData07(json.Apart);
      });
    // fetch(`api/age/${ageValue}`)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setAgeValue(json);
    //     console.log(json);
    //   });
  }, [click]); // 검색 버튼을 누르면 셀렉트박스에 지정된 지역 렌더링

  return (
    <Layout>
      <div id="mainPage" className=" ">
        <div id="left_box">
          <div
            id="first_choose_bar"
            className="flex justify-between border-2 h-[12.6vh] w-[135.4vh] font-bold bg-red-200"
          >
            <div className="flex justify-center items-center bg-red-200 w-[300px]  text-3xl hover:bg-blue-200  h-full border-r-2">
              연령대
            </div>
            <div className="flex justify-between items-center text-xl">
              <div id="first_select_box_bar" className=" w-[250px]">
                <select className="w-[200px]" onChange={allSecondRegion}>
                  <option hidden>지역선택</option>
                  {firstRegion.map((ele, idx) => (
                    <option key={idx} value={ele.regionCD}>
                      {ele.region}
                    </option>
                  ))}
                </select>
              </div>

              <div id="second_select_box_bar" className=" w-[250px]">
                <select className="w-[200px]" onChange={regions}>
                  <option hidden>도시선택</option>
                  {secondRegion.map((ele: any, idx) => (
                    <option key={idx} value={ele.regionCD}>
                      {ele.region}
                    </option>
                  ))}
                </select>
              </div>

              <div id="third_select_box_bar" className=" w-[250px]">
                <select className="w-[200px]" onChange={dayRegions}>
                  <option hidden>날짜선택</option>
                  {ageValue.map((ele: any, idx) => (
                    <option key={idx} value={ele.RESEARCH_DATE}>
                      {ele.RESEARCH_DATE}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-[100px]">
                <button
                  className="p-2 bg-blue-200 rounded-2xl "
                  onClick={() => {
                    setClick(!click);
                  }}
                >
                  찾기
                </button>
              </div>
            </div>
          </div>
        </div>
        {houseData06 ? (
          <div className="h-[71vh] w-full bg-blue-200 flex justify-around items-center">
            <div id="first_chart">
              <div className="text-2xl p-2 flex justify-center">
                주택 평균 거래 연령
              </div>
              <div className="w-[450px] h-[450px]">
                <DoughnutChart data={houseData06}></DoughnutChart>
              </div>
            </div>

            <div id="second_chart">
              <div className="text-2xl p-2 flex justify-center">
                아파트 평균 거래 연령
              </div>
              <div className="w-[450px] h-[450px]">
                <DoughnutChart data={aparttData07}></DoughnutChart>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Home;

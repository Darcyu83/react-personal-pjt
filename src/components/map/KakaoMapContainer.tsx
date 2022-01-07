/* global kakao */

import { useEffect } from "react";
import styled from "styled-components";

declare global {
  interface Window {
    kakao: any;
  }
}

const Wrapper = styled.div`
  padding: 20px;
`;
const { kakao } = window;

interface IProps {
  id: string;
  keyword: string;
}
function KakaoMapContainer({ id, keyword }: IProps) {
  //카카오 맵 드로잉
  useEffect(() => {
    //마커 클릭 시 장소명을 표시할 윈도우
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const mapContainer = document.getElementById(`${id}`);
    const options = {
      //지도 중심좌표
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      //지도 확대레벨을 입력
      level: 10,
    };
    //지도 생성
    const map = new kakao.maps.Map(mapContainer, options);
    //end of Basic======================================================================
    //1. 장소 검색 객체를 생성

    const ps = new kakao.maps.services.Places();
    // 키워드로 장소를 검색합니다
    ps.keywordSearch(keyword, placeSearchCB);

    //3.결과를 받을 콜백 함수
    function placeSearchCB(data: any, status: number, pagination: number) {
      if (status === kakao.maps.services.Status.OK) {
        //검색된 장소 위치를 중심으로 지도 범위 재설정하기 위해
        //latLngBounds 객체에 좌표를 추가
        const bounds = new kakao.maps.LatLngBounds();

        data.map((item: any) => {
          displayMarker(item);
          bounds.extend(new kakao.maps.LatLng(item.y, item.x));
        });
        map.setBounds(bounds);
      }
    }
    //지도에 마커를 표시하는 함수
    function displayMarker(place: any) {
      //마커를 생성 & 표시
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      //마커에 클릭 이벤트 등록
      kakao.maps.event.addListener(marker, "click", () => {
        //클릭 시 장소명이 infoWindow 표시
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [keyword]);

  return (
    <Wrapper>
      <div id={`${id}`} style={{ width: "80vw", height: "400px" }}></div>
    </Wrapper>
  );
}

export default KakaoMapContainer;

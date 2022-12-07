import { useEffect } from "react";
 import { useParams } from "react-router-dom";
 function Detail() {
   const { id } = useParams();
    // useParams 사용하면 React Router는 바로 이 변수의 값을 넘겨줌
    // (= id 찾아오는 줄) id 알고있으니까 API로부터 정보를 fetch 해올 수 있음
    // useParams는 우리에게 url의 상세정보를 알려주는 애임
    const getMovie = async () => {
        const json = await (
          await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        
      };
      useEffect(() => {
        getMovie();
      }, []);
      return <h1>Detail</h1>;
    }
    export default Detail;
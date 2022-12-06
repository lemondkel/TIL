import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/* Link는 브라우저 새로고침 없이도 다른 페이지로 이동 시켜줌 (a href는 페이지 자체가 새로 실행됨) */


function Movie({ id, coverImg, title, summary, genres }) {
    // Movie 컴포넌트는 위 프로퍼티들을 다 부모 컴포넌트로부터 받아옴
    return (
        <div>
          <img src={coverImg} alt={title} />
          <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
                {/* 이제 제목 클릭하면 url에 아이디도 같이 나옴 */}
                </h2>
       <p>{summary}</p>
       <ul>
       {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
 }

 Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    //string의 PropTypes를 가져야 하고 필수임
};

export default Movie;

import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    // 첫번째로 setMovies하고 두번째로 setLoading해서 콘솔에 로그 두 번 뜸  };
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div className={styles.container}>
            {/* 로딩 중이 아니면 movies 보여줌 */}
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                    {/* 이름은 원하는 대로 지어도 되고, 대신 Movie.js에도 똑같이 해줘야 함 */}
                    {/*이 컴포넌트들은 movies array에 있는 각 movie에서 변형되어 나옴*/}
                </div>
            )}
        </div>
    );
}
export default Home;
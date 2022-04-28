
import Movie, {movieObj} from './movie'

interface MoviesProp {
    movies: Array<movieObj>
}

const Main : React.FC<MoviesProp> = ({movies}) => {

    const captureMoviesRecs = () => {
        let recs: Array<JSX.Element> = []
        movies.forEach((movie, index) => {
            recs.push(<Movie key={index} movie={movie} />)
        });
        return recs;
    }

    return (
    <main>
        <div>{captureMoviesRecs()}</div>
    </main>
    )}

export default Main;
import { moveEmitHelpers } from "typescript";

export interface movieObj {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface movieProp {
    movie: movieObj
}

const Movie : React.FC<movieProp> = ({movie}) =>
{
    const testid = movie.title.replace(' ','');

    let imageSrc = "https://picsum.photos/300/200/?blur";
    if (movie.image) {
        imageSrc = movie.image
    }

    return (
        <>
            <div className="MovieClip">
                <div><img src={imageSrc} alt={movie.title} height="120"/></div>
                <div>
                    <div data-testid={testid}>{movie.title}</div>
                    <div>{movie.description}</div>
                </div>
            </div>
        </>
    )
}
export default Movie;


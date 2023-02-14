import Seo from "@/components/Seo";
import { GetServerSideProps } from "next";
import Link from "next/link";
import styled from "styled-components";

const Movies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const Movie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
const Poster = styled.img`
  width: 100%;
  border-radius: 5%;
  box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;
const Title = styled.h4`
  margin: 0;
  font-weight: 600;
  font-size: 1.4rem;
`;

export default function Home({ results }: any) {
  return (
    <div>
      <Seo title="Home" />
      <Movies>
        {results?.map((movie: any) => (
          <Link
            key={movie.id}
            href={`/movies/${movie.original_title}/${movie.id}`}
          >
            <Movie>
              <Poster
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
              <Title>{movie.original_title}</Title>
            </Movie>
          </Link>
        ))}
      </Movies>
    </div>
  );
}

//서버에서 돌아감
//로딩을 보여주지 않아도 됨  > 서버에서 렌더링하고 html로 데이터까지 뿌려줌
//선택지
// 데이터가 유효할 때 화면에 보여지게 하던지 (대신 데이터 불러와질때까지 빈화면 - 여깄는것 처리 전까지)
// 로딩 화면을 보여주고 데이터를 받는게 좋은지 (fetch를 클라이언트에서 할 경우)

export const getServerSideProps: GetServerSideProps = async () => {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();

  return {
    props: {
      results,
    },
  };
};

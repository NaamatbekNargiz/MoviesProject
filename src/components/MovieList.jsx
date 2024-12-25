import { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header.jsx";

import Titanic from "../assets/images/Titanic.jpg";
import Hachiko from "../assets/images/Hachiko.webp";
import Datka from "../assets/images/Datka.jpg";
import Oneplus from "../assets/images/Oneplus.webp";

const movies = [
  {
    id: 0,
    image: Titanic,
    title: "Титаник",
    rating: "5/5 stars",
  },
  {
    id: 1,
    title: "Хатико",
    rating: "5/5 stars",
    image: Hachiko,
  },
  {
    id: 2,
    title: "Курманжан Датка",
    rating: "5/5 stars",
    image: Datka,
  },
  {
    id: 3,
    title: "1+1",
    rating: "5/5 stars",
    image: Oneplus,
  },
];
const MovieList = () => {
  const [movie, setMovie] = useState([]);

  const handleDelete = (id) => {
    setMovie((...movies) => movies.filter((movie) => movie.id !== id));
  
    
  };
  return (
    <div>
      <Header />

      <StyledDiv>
        {movies.map((movie) => (
          <Card key={movie.id}>
            <Image src={movie.image} alt={movie.title} />

            <Title>{movie.title}</Title>
            <Rating>{movie.rating}</Rating>
            <Button onClick={() => handleDelete(movie.id)}>DELETE</Button>
            <Button>EDIT</Button>
          </Card>
        ))}
      </StyledDiv>
    </div>
  );
};

export default MovieList;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  padding-top: 20px;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: 04px 6px rgba(47, 46, 46, 0.1);
  padding: 10px;
  width: 600px;
`;
const Image = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 15px;
`;
const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  margin-right: 10px;
  width: 50px;
  height: 100px;
`;
const Rating = styled.span`
  color: #ff9800;
  font-weight: bold;
  margin-right: 20px;
`;
const Button = styled.button`
  padding: 5px 10px;
  margin-top: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: orangered;
  color:white;
  margin-left: 10px;
`;

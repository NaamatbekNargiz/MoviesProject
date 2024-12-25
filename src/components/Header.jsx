import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <StyledHeader>
        <a>Favorite Movies</a>
        <button className="button-header">ADD MOVIE</button>
      </StyledHeader>
    </div>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #3434ae;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & a {
    font-size: 32px;
    color: white;
    margin-left: 30px;
  }
  & .button-header {
    background-color: orangered;
    color: white;
    margin-left: 500px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 3px;
    margin-right: 30px;
  }
`;

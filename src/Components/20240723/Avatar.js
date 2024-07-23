import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  width: 300px;
  background-color: ${(props) => props.bgcolor};
  box-shadow: 1px 2px 5px gray;
  padding: 10px;
  margin-bottom: 20px;
`;

const Bold = styled.p`
  font-weight: 700;
  font-size: 2rem;
  color: dodgerblue;
`;

export function Avatar({ persons: { name, job, country }, bgcolor }) {
  return (
    <>
      <Container bgcolor={bgcolor}>
        <div>
          <Bold>{name}</Bold>
          <p>{job}</p>
          <p>{country}</p>

          <hr />
        </div>
      </Container>
    </>
  );
}


{/* <구조분해할당 Destructuring> 
  1.객체의 구조분해할당
  user = {name:"Steve", email: "steve@email.com"};
  const{name} = user
  
  2.배열의 구조분해할당
  colors = ["black","red","blue"];
  const [color0, color1, color2 ] = colors;      => 순서대로 지 블랙만은 가능하지만 레드, 블루를 선택할수 없다.
  
  */}
  
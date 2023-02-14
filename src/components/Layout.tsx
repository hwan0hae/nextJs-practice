import NavBar from "./NavBar";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Container>
      <Box>
        <NavBar />
        <div>{children}</div>
      </Box>
    </Container>
  );
}

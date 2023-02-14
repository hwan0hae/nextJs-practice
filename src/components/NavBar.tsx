import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: -1px 1px 10px 1px rgb(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
`;
const Logo = styled.img`
  width: 30px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
const Btn = styled.div<{ clicked: boolean }>`
  font-size: 2rem;
  color: ${(props) => (props.clicked ? "red" : "black")};
`;

export default function NavBar() {
  const router = useRouter();
  return (
    <Nav>
      <Logo src="/favicon.ico" />
      <Box>
        <Link href="/">
          <Btn clicked={Boolean(router.pathname === "/")}>Home</Btn>
        </Link>
        <Link href="/about">
          <Btn clicked={Boolean(router.pathname === "/about")}> about </Btn>
        </Link>
      </Box>
    </Nav>
  );
}

import { Wrapper, TitleEl, TextEl, LinkEl } from './Home.styled';
const Home = () => {
  return (
    <Wrapper>
      <TitleEl>Welcome to your Phone Book!</TitleEl>
      <TextEl>
        Create your own contacts list, which will be available only to you
      </TextEl>
      <LinkEl to="/contacts">Try it now</LinkEl>
    </Wrapper>
  );
};
export default Home;

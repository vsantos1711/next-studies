import * as S from './styles';

interface MainProps {
  description?: string;
}

const Main = ({ description }: MainProps) => (
  <S.Wrapper>
    <S.Title>Next studies</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;

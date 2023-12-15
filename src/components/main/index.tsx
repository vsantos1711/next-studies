import * as S from './styles';
interface MainProps {
  title?: string;
  description?: string;
}

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}: MainProps) => (
  <S.Wrapper>
    <S.Illustration
      src="/img/next.svg"
      alt="Desenvolvedor de frente para a tela com código"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
);

export default Main;

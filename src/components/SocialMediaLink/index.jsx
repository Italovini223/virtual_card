import { Container } from "./styles";

export function SocialMediaLink({src, icon: Icon}){
  return (
    <Container
      src={src}
    >
      {<Icon />}
    </Container>
  )
}
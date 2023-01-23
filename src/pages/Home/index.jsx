import { Avatar } from "../../components/Avatar";
import {SocialMediaLink} from '../../components/SocialMediaLink'

import { Container, UserName, UserImg, UserProfession, UserContacts, SocialMedia, StorageLogo } from "./styles";

import {BsWhatsapp, BsTelephone, BsInstagram, BsLinkedin} from 'react-icons/bs';
import {HiLocationMarker} from 'react-icons/hi';

import LogoImg from '../../assets/logo-audi-png_optimized-removebg-preview.png';


export function Home(){

  const userNumber = 37991600070;

  async function CopyUserPhone() {
    await navigator.clipboard.writeText(userNumber);

    alert("Meu numero foi copiado para a sua area de transferência")
  }
  return (
    <Container>
      <UserImg>
        <Avatar img={"https://github.com/italovini223.png"}/>
      </UserImg>
      <UserName>
        <h2>ITALO VINICIUS DE BESSA</h2>
\      </UserName>
      <UserProfession>
        <p>Vendedor</p>
      </UserProfession>
      <UserContacts>
        <h2>CONTATOS...</h2>
        <div>
          <a 
            href="https://web.whatsapp.com/" 
            className="whatsApp" 
            target="_blank"
          >
            <BsWhatsapp/>
          </a>

          <button className="userNumber" onClick={CopyUserPhone}>
            <BsTelephone />
          </button>
        </div>
      </UserContacts>
      <SocialMedia>
        <h2>MAIS INFORMAÇÕES...</h2>

        <div>
          <SocialMediaLink icon={BsInstagram} src="#"/>
          <SocialMediaLink icon={BsLinkedin} src="#"/>
          <SocialMediaLink icon={HiLocationMarker} src="#"/>
          <SocialMediaLink icon={BsInstagram} src="#"/>
          <SocialMediaLink icon={BsLinkedin} src="#"/>
          <SocialMediaLink icon={HiLocationMarker} src="#"/>
        </div>
      </SocialMedia>
      <StorageLogo>
        <img src={LogoImg} alt="" />
      </StorageLogo>
    </Container>
  )
}
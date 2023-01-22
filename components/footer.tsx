import { H2 } from "../styled-components/text-style";
import { Container } from "../styled-components/container";
import FooterStyle from "../styled-components/footer-style";
import { FooterTitle, SNSZone, Author } from "../styled-components/footer-style";
import { ImFacebook2, ImTwitter } from 'react-icons/im';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Footer = () => {
    return (
        <FooterStyle>
            <Container>
                <SNSZone>
                    <IconContext.Provider value={{ color: '#0EA5E9', size: '2.5rem' }}>
                        <ImFacebook2/>
                        <AiFillInstagram/>
                        <ImTwitter/>
                        <AiFillGithub/>
                    </IconContext.Provider>
                </SNSZone>
                <FooterTitle>
                    <H2 color="#1e2d52">Method Dictionary</H2>
                </FooterTitle>
                <Author>@Taiki Wakabayashi Inc</Author>
            </Container>
        </FooterStyle>
    )
}

export default Footer;
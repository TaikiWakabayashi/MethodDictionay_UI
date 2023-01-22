import { signOut, useSession } from 'next-auth/react'
import { HeaderDiv, UL, LI, P } from '../styled-components/header-style';
// import { HeaderContainer } from '../styled-components/container';
import { RiLogoutBoxLine } from "react-icons/ri"
import { IconContext } from 'react-icons'
import { FaUserCircle } from "react-icons/fa"

const Header = () => {

    // ログインセッションの取得
    const { data: session } = useSession();

    return (
        <HeaderDiv>
                {session && (
                    <UL>
                        <LI><P><FaUserCircle/> : {session.user?.name}</P></LI>
                        <IconContext.Provider value={{ color: '#0EA5E9' }}>
                        <LI onClick={() => signOut()}><P><RiLogoutBoxLine/>Sign Out</P></LI>
                        </IconContext.Provider>
                    </UL>
                )}
        </HeaderDiv>
    )

}

export default Header;
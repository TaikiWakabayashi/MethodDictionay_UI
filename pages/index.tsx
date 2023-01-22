import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Method from '../components/top';
import { LoginBody } from '../styled-components/login-style';
import { H1, H3 } from '../styled-components/text-style';
import { BlueButton } from '../styled-components/button';
import Image from 'next/legacy/image';
import Service from "../images/service.jpg"
import { Figures } from '../styled-components/images';


const Home: NextPage = () => {

  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <div>
      {!session && (
        <>
          <LoginBody>
          <H1 color="#0EA5E9">Hello! Welcome.</H1>
          <H3 color="white">あなただけのメソッド辞書を作成してみましょう！</H3>
          <Figures>
            <Image src={Service} alt="" layout='responsive' sizes="(min-width: 1152px) ,100vw" placeholder='blur'/>
          </Figures>
          <p>
            ※サインインにはGitHubかGoogleアカウントが必要です。
          </p>
            {loading ? (
              <>loading...</>
            ) : (
              <>
                <BlueButton onClick={() => signIn()}>Sign In</BlueButton>
              </>
            )}
          </LoginBody>
        </>
      )}
      {session && (
        <>
            <Method/>
        </>
      )}
    </div>
  )
}

export default Home

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MethodsContext } from '../context/MethodsContext'
import { MethodContext } from '../context/MethodContext'
import { FormsContext } from '../context/FormContext'
import { SelectLanguageContext, SelectTypeContext } from '../context/SelectBoxContext'
import Footer from '../components/footer'
import { Container } from '../styled-components/container'
import { SessionProvider } from "next-auth/react"
import Header from '../components/header'

function MyApp({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Header/>
        <Container>
          <MethodsContext>
            <MethodContext>
              <FormsContext>
                <SelectLanguageContext>
                  <SelectTypeContext>
                    <Component {...pageProps} />
                  </SelectTypeContext>
                </SelectLanguageContext>
              </FormsContext>
            </MethodContext>
          </MethodsContext>
        </Container>
        <Footer />
      </SessionProvider>
    </>
  )
}

export default MyApp

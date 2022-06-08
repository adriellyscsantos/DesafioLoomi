import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Container, FormStyled } from '../styles/pages/Login'

const Login: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>
      <FormStyled>
        <div>
          <Image
            src="/images/logo.svg"
            alt="Logo SJCC"
            width={320}
            height={100}
          />
        </div>
        <label htmlFor="login">E-mail</label>
        <input
          name="login"
          type="text"
          placeholder="usuario de rede"
        />
        <label htmlFor="password">Senha</label>
        <input
          name="password"
          type="password"
          placeholder="senha"
        />
        <button>Entrar</button>
      </FormStyled>
    </Container>
  )
}

export default Login

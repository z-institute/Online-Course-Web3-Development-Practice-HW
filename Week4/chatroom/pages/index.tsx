import type { NextPage } from 'next';
import Head from 'next/head';
import Nav from '../pages/Nav'
import Header from '../pages/Header'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home Work 4</title>
        <link rel="icon" href="https://i.imgur.com/xkM6UiK.png" />
      </Head>

      <Nav/>
      <Header/>

    </div>
  );
};

export default Home;

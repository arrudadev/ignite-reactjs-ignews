import { GetStaticProps } from 'next';
import Head from 'next/head';

import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <section className={styles['post-list']}>
          <a href="#">
            <time>21 de abril de 2021</time>
            <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>

          <a href="#">
            <time>21 de abril de 2021</time>
            <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>

          <a href="#">
            <time>21 de abril de 2021</time>
            <strong>Creating a Monorepo with lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], { 
    fetch: ['post.title', 'post.content'],
    pageSize: 100
   });

   console.log(JSON.stringify(response, null, 2));

  return {
    props: {}
  }
}
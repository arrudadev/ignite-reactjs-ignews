import Head from 'next/head';

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
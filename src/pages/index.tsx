import style from '../styles/home.module.scss';

export default function Home() {
  return (
    <h1 className={style.title}>Hello <span>world!</span></h1>
  );
}

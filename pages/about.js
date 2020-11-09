import Router from "next/router";
import NavigationLayout from "../components/navigationLayout";
import style from '../styles/about.module.scss';

export default function About () {
return <NavigationLayout>
  <h1 className={style.h1}>About Page</h1>
  <button onClick={() => Router.push('/')}>Home Page</button>
</NavigationLayout>
}

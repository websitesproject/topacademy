import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Person from "../components/specificComponents/Person/Person";
import Teacher from "../components/specificComponents/Teacher/Teacher";
import Experience from '../components/specificComponents/Experience/Experience';
import Hero from '../components/genericComponents/Hero/Hero';
import Page from '../components/layoutComponents/Page/Page';
import Headermenu from '../components/genericComponents/Headermenu/Headermenu';
import Menulink from '../components/genericComponents/Menulink/Menulink';
import Paragraph from '../components/genericComponents/Paragraph/Paragraph';
import Intro from '../components/genericComponents/Intro/Intro';
import LeftRightBlock from '../components/genericComponents/LeftRightBlock/LeftRightBlock';
import Course from '../components/specificComponents/Course/Course';
import List from '../components/genericComponents/List/List';
import Element from '../components/genericComponents/Element/Element';



const components = {
  person: Teacher,
  experience: Experience,
  hero: Hero,
  page: Page,
  headermenu: Headermenu,
  menulink: Menulink,
  paragraph: Paragraph,
  intro: Intro,
  leftrightblock: LeftRightBlock,
  course:Course,
  list:List,
  element:Element
};

storyblokInit({
  accessToken: `${process.env.STORYBLOK_API_KEY}`,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

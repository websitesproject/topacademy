import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Person from "../components/specificComponents/Person/Person";
import Experience from '../components/specificComponents/Experience/Experience';
import Hero from '../components/genericComponents/Hero/Hero';
import Page from '../components/layoutComponents/Page/Page';
import Headermenu from '../components/genericComponents/Headermenu/Headermenu';
import Menulink from '../components/genericComponents/Menulink/Menulink';



const components = {
  person: Person,
  experience: Experience,
  hero: Hero,
  page: Page,
  headermenu: Headermenu,
  menulink: Menulink
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

import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links:[
    {
      text: 'Inicio',
      href: '/SmartMarketing',
    },
    {
      text: 'Nosotros',
      href: getPermalink('#about'),
    },
    {
      text: 'Servicios',
      href: getPermalink('#services'),
    },
    {
      text: 'Planes',
      href: getPermalink('#planes'),
    },
    {
      text: 'Comenzar',
      href: getPermalink('/contact'),
    },
  ],

 
};

export const footerData = {
  links: [
    
    
  ],
  secondaryLinks: [
    //{text: 'Terms', href: getPermalink('/terms') },
    //{ text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/neighbour-spa/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/neighbour_spa' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100066527478611&mibextid=ZbWKwL' },
    //{ ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    //{ ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://neighbour.cl/"> Neighbour</a> · All rights reserved.
  `,
};

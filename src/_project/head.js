

// last updated 12-26-2020

import { writable, get } from 'svelte/store';

export const site_ga = ''; // through segment
// export const site_segment = 'QF5RTz2c5w4fzllUvqERA9GjaCgqdGhj'; // alphaguide segment ID
// export const site_url = 'https://instill.xyz';
export const site_url = 'https://instill.xyz';
export const site_name = 'Instill Science';
export const site_title = 'Instill Science';
export const site_twitter = '@phagedirectory';
export const site_twitter_creator = '@yawnxyz';
export const site_color = '#5432CA';
export const site_description = 'Instill Science is a peer-led community platform for scientists';

// const site_ico = '/ico_dull.png'; // site icon
export const site_ico = '/instill.png';
export const site_image = '/share_img.jpg';
export const site_search = 'index,follow';
export const site_author = 'Jan Zheng';
export const page_name = ''; // placeholder for the copy+paste

export const site_fb = ''; //



export const head = {
  title: site_title,
  meta: [

    { charset: 'utf-8' },
    // { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }, // max-scale prevents auto-zoom on mobile, may prevent zoom
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    { hid: 'description', name: 'description', content: site_description },
    { hid: 'theme-color', name: 'theme-color', content: site_color },

    { hid: 'search-google', name: 'robots', content: site_search },
    { hid: 'search-robots', name: 'googlebot', content: site_search },
    { hid: 'google-site-verification', name: 'google-site-verification', content: "FV3L35TjM9haadbuZvHLDz2n-I1KUbN_gYqM3cIH0Wk" },
    
    // { hid: 'nositelinkssearchbox', name: 'google', content: 'nositelinkssearchbox' },
    // { hid: 'notranslate', name: 'google', content: 'notranslate' },

    // Page-Specific

    // Facebook
    // <meta property="fb:app_id" content="123456789">
    { hid: 'fb-app_id', property: 'fb:app_id', content: site_fb },
    // <meta property="og:url" content="http://example.com/page.html">
    { hid: 'og-url', property: 'og:url', content: site_url + '/' + page_name },
    // <meta property="og:type" content="website">
    { hid: 'og-type', property: 'og:type', content: 'website' },
    // <meta property="og:title" content="Content Title">
    { hid: 'og-title', property: 'og:title', content: site_title },
    // <meta property="og:image" content="http://example.com/image.jpg"> 
    // FB & Twitter work best with: 1200 X 675 
    { hid: 'og-image', property: 'og:image', content: site_url + site_image },
    // <meta property="og:description" content="Description Here">
    { hid: 'og-description', property: 'og:description', content: site_description },
    // <meta property="og:site_name" content="Site Name">
    { hid: 'og-site_name', property: 'og:site_name', content: site_name },
    // <meta property="og:locale" content="en_US">
    { hid: 'og-locale', property: 'og:locale', content: 'en_US' },
    // <meta property="article:author" content="">
    { hid: 'article-author', property: 'article:author', content: site_author },

    // Twitter Card
    // <meta name="twitter:card" content="summary"> > summary or summary_large_image
    { hid: 'twitter-card', property: 'twitter:card', content: 'summary' },
    // <meta name="twitter:site" content="@site_account">
    { hid: 'twitter-site', property: 'twitter:site', content: site_twitter },
    // <meta name="twitter:creator" content="@individual_account">
    { hid: 'twitter-creator', property: 'twitter:creator', content: site_twitter_creator },
    // <meta name="twitter:url" content="http://example.com/page.html">
    { hid: 'twitter-url', property: 'twitter:url', content: site_url + '/' + page_name },
    // <meta name="twitter:title" content="Content Title">
    { hid: 'twitter-title', property: 'twitter:title', content: site_title },
    // <meta name="twitter:description" content="Content description less than 200 characters">
    { hid: 'twitter-description', property: 'twitter:description', content: site_description },
    // <meta name="twitter:image" content="http://example.com/image.jpg">
    { hid: 'twitter-image', property: 'twitter:image', content: site_url + site_image },

  ],
  link: [

    // <!-- Helps prevent duplicate content issues -->
    // <link rel="canonical" href="http://example.com/">
    { hid: 'canonical', rel: 'canonical', href: site_url+'/'+page_name },

    { rel: 'icon', type: 'image/png', href: site_ico }, // <link rel="icon" sizes="192x192" href="/path/to/icon.png">
    { rel: 'apple-touch-icon', href: site_ico }, // default resolution is 192x192 <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png">
    { rel: 'mask-icon',  href: site_ico, color: site_color}, // <link rel="mask-icon" href="/path/to/icon.svg" color="blue"> <!-- Safari Pinned Tab Icon -->
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap' },
    // { rel: 'stylesheet', href: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css' }

  ],
}

export const Head = writable(head)



// export default ({ app }, inject) => {
export function headMatter({
  title, 
  description,
  imageUrl,
  url,
  author, 
  twitterCreator, // author's twitter
  twitterCard,
  meta,
  link,
}) {
  let head = {
    title: title,
    meta: meta || [],
    link: link || [],
  }

  head['title'] = title 
  head['meta'].push({ hid: 'og-title', property: 'og:title', content: `${title}` })
  head['meta'].push({ hid: 'twitter-title', property: 'twitter:title', content: `${title}` })

  // set image / card for sharing
  head['meta'].push({ hid: 'og-image', property: 'og:image', content: `${imageUrl}` })
  head['meta'].push({ hid: 'twitter-image', property: 'twitter:image', content: `${imageUrl}` })

  head['meta'].push({ hid: 'twitter-description', property: 'twitter:description', content: `${description}` })
  head['meta'].push({ hid: 'og-description', property: 'og:description', content: `${description}` })
  head['meta'].push({ hid: 'description', name: 'description', content: `${description}` })

  head['meta'].push({ hid: 'twitter-card', property: 'twitter:card', content: `${twitterCard}` })

  // set page url
  head['meta'].push({ hid: 'og-url', property: 'og:url', content: `${url}` })
  head['meta'].push({ hid: 'twitter-url', property: 'twitter:url', content: `${url}` })

  // set canonical
  head['link'].push({ hid: 'canonical', rel: 'canonical', href: `${url}` }) 

  // set author
  head['meta'].push({ hid: 'article-author', property: 'article:author', content: `${author}` })

  // // set twitter author / creator
  head['meta'].push({ hid: 'twitter-creator', property: 'twitter:creator', content: `${twitterCreator}` })

  return head
}
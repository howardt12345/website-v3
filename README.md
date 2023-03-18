<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/howardt12345/website-v2/master/src/images/logo.png" width="100" />
</div>
<h1 align="center">
  howardt12345.com - v3
</h1>
</h1>
<p align="center">
  The third iteration of <a href="https://howardt12345.com" target="_blank">howardt12345.com</a>, designed in <a href="https://www.figma.com/design/" target="_blank">Figma</a>, built with <a href="https://nextjs.org/" target="_blank">Next.js</a>, and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>
<p align="center">
  Previous iterations:
  <a href="https://github.com/howardt12345/website-v1" target="_blank">v1</a>,
  <a href="https://github.com/howardt12345/website-v2" target="_blank">v2</a>,
</p>
<p align="center">
  <a href="hhttps://app.netlify.com/sites/howardt12345-v3/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/788e4324-3e70-47e8-8b85-a269bf6c173c/deploy-status" alt="Netlify Status" />
  </a>
</p>

![demo](https://raw.githubusercontent.com/howardt12345/website-v2/master/src/images/og.png)

## About the website

This website is an updated version of my <a href="https://github.com/howardt12345/website-v2" target="_blank" rel="nofollow noopener noreferrer">v2 website</a>, rewritten to use Next.js and Typescript for easier development. Transitioning to Next.js brought several benefits to the website, such as the option for server-side rendering and less restricted packages. Gatsby became too restrictive for this website, and the process of upgrading to a newer Gatsby version became too frustrating as there were some packages that relied on older versions of Gatsby while others required a newer version. Making the switch to Next.js also allowed me to address this issue, along with many other issues with the v2 website that were not easily fixable had I remained with Gatsby.

## Installation & Setup

1. Install dependencies:

   ```sh
   npm install
   ```

2. Start the development server:

   ```sh
   npm run dev
   ```

   The site is now running at `http://localhost:3000`.

## Building and Running for Production:

1. Generate a production build

   ```sh
   npm run build
   ```

2. Preview the site as it will appear once deployed

   ```sh
   npm run start
   ```

   The preview site should now be running at `http://localhost:3000`.

## Color Reference:

Light Mode:
| Color | Hex |
| -------------------- | ------------------------------------------------------------------ |
| background | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) `#FFFFFF` |
| background_secondary | ![#EAEAEA](https://via.placeholder.com/10/EAEAEA?text=+) `#EAEAEA` |
| accent | ![#2196F3](https://via.placeholder.com/10/2196F3?text=+) `#2196F3` |
| textPrimary | ![#000000](https://via.placeholder.com/10/000000?text=+) `#000000` |
| textSecondary | ![#7A7A7A](https://via.placeholder.com/10/7A7A7A?text=+) `#7A7A7A` |
| textBody | ![#0C0C0C](https://via.placeholder.com/10/0C0C0C?text=+) `#0C0C0C` |

Dark Mode:
| Color | Hex |
| -------------------- | ------------------------------------------------------------------ |
| background | ![#000000](https://via.placeholder.com/10/000000?text=+) `#000000` |
| background_secondary | ![#151515](https://via.placeholder.com/10/151515?text=+) `#151515` |
| accent | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |
| textPrimary | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) `#FFFFFF` |
| textSecondary | ![#858585](https://via.placeholder.com/10/858585?text=+) `#858585` |
| textBody | ![#F3F3F3](https://via.placeholder.com/10/F3F3F3?text=+) `#F3F3F3` |

import React from "react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
  CheckCircleIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import Layout from "@theme/Layout";

import {
  SocialCard,
  type SocialCardProps,
} from "../components/homepage/SocialCard";

// ✅ Компоненты для иконок
const DiscordIcon = () => <img alt="discord" className="m-auto h-10" src={useBaseUrl("img/homepage/Discord-Logo-White.svg")} />;
const XIcon = () => (
  <>
    <img alt="x.com" className="m-auto h-10 dark:hidden" src={useBaseUrl("img/homepage/X.com-White-Logo-light.svg")} />
    <img alt="x.com" className="m-auto h-10 hidden dark:block" src={useBaseUrl("img/homepage/X.com-White-Logo-dark.svg")} />
  </>
);
const FacebookIcon = () => <img alt="facebook" className="m-auto h-10" src={useBaseUrl("img/homepage/f_logo_RGB-White_1024.webp")} />;
const InstagramIcon = () => (
  <>
    <img alt="instagram" className="m-auto h-10 dark:hidden" src={useBaseUrl("img/homepage/Instagram_Glyph_White.svg")} />
    <img alt="instagram" className="m-auto h-10 hidden dark:block" src={useBaseUrl("img/homepage/Instagram_Glyph_Gradient.svg")} />
  </>
);
const YouTubeIcon = () => <img alt="youtube" className="m-auto h-12" src={useBaseUrl("img/homepage/YouTube-Logo-White.svg")} />;
const RedditIcon = () => <img alt="reddit" className="m-auto h-14" src={useBaseUrl("img/homepage/Reddit-Logo-White.svg")} />;
const MastodonIcon = () => <img alt="mastodon" className="m-auto h-10" src={useBaseUrl("img/homepage/mastodon-logo-white.svg")} />;
const TelegramIcon = () => <img alt="telegram" className="m-auto h-10" src={useBaseUrl("img/homepage/telegram-single-path-240px.svg")} />;

// ✅ Ссылки на соцсети
const SocialCards: SocialCardProps[] = [
  { color: "bg-[#5865F2]", link: "https://discord.gg/meshtastic", children: <DiscordIcon /> },
  { color: "bg-[#000000] dark:bg-[#ffffff]", link: "https://x.com/TheMeshtastic", children: <XIcon /> },
  { color: "bg-[#3875EA]", link: "https://facebook.com/themeshtastic", children: <FacebookIcon /> },
  { color: "bg-[#ee2a7b] dark:bg-[#ffffff]", link: "https://www.instagram.com/themeshtastic/", children: <InstagramIcon /> },
  { color: "bg-[#FF0000]", link: "https://www.youtube.com/meshtastic", children: <YouTubeIcon /> },
  { color: "bg-[#FF4500]", link: "https://reddit.com/r/meshtastic", children: <RedditIcon /> },
  { color: "bg-[#563ACC]", link: "https://mastodon.social/@meshtastic", isMeLink: true, children: <MastodonIcon /> },
  { color: "bg-[#24A1DE]", link: "https://t.me/+hmKN0xOR73ExOTU6", children: <TelegramIcon /> },
];

function Home() {
  const { siteConfig } = useDocusaurusContext();
  const logoUrl = useBaseUrl("design/typelogo/typelogo.svg");
  const ogImageUrl = useBaseUrl("design/web/social-preview-1200x630.png");

  return (
    <Layout>
      <Head>
        <meta property="og:title" content="Meshtastic" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:description" content="An open source, off-grid, decentralized, mesh network built to run on affordable, low-power devices" />
        <meta property="og:url" content="https://meshcraft.ru/meshtastic/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="hero hero--primary text-center p-2">
        <div className="container">
          <h1 className="hero__title">
            <img alt="Meshtastic Logo" className="header__logo py-8" src={logoUrl} />
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="indexCtas">
            <Link className="button button--lg" to="/docs/introduction">Узнать больше</Link>
            <Link className="button button--lg" to="/docs/getting-started">Начать</Link>
            <Link className="button button--lg" to="/docs/contributing/#supporting-and-contributing-to-meshtastic">Пожертвовать</Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-8">
        <div className="bg-primaryDark mx-auto flex w-full lg:w-auto flex-col gap-4 p-4 shadow-inner">
          <div className="flex w-full overflow-x-auto gap-2 flex-wrap justify-center">
            {SocialCards.map((card) => (
              <SocialCard key={card.link} color={card.color} link={card.link} isMeLink={card.isMeLink}>
                {card.children}
              </SocialCard>
            ))}
          </div>
        </div>

        {/* остальной контент (Getting Started, приложения и т.д.) */}
      </main>
    </Layout>
  );
}

export default Home;

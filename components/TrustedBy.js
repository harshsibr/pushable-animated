"use client";

import { motion } from "framer-motion";

/* ─── Brand SVG Icons ─── */
const HubSpotIcon = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6">
    <path d="M70.3 40.5c-2.4-1.4-5.1-2.1-8-2.1-2.9 0-5.6.7-8 2.1V26.8c2.3-1.1 3.9-3.5 3.9-6.2 0-3.8-3.1-6.9-6.9-6.9s-6.9 3.1-6.9 6.9c0 2.7 1.6 5.1 3.9 6.2v11.5C44 36.9 38.3 34 32 34c-11 0-20 9-20 20s9 20 20 20 20-9 20-20c0-3.5-.9-6.8-2.5-9.6 1.4-.5 2.8-.7 4.2-.7 2.8 0 5.3.9 7.4 2.5-2.5 3.2-4 7.3-4 11.7C57 69 66 78 77 78s20-9 20-20c0-8.9-5.8-16.4-13.8-19.1zM32 67c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm45 4c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10z" fill="#FF7A59"/>
  </svg>
);
const NotionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.047.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.727l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="#000"/>
  </svg>
);
const ZoomIcon = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6">
    <circle cx="50" cy="50" r="50" fill="#2D8CFF"/>
    <path d="M25 35h30a8 8 0 018 8v14a8 8 0 01-8 8H25a8 8 0 01-8-8V43a8 8 0 018-8zm40 6l14-10v38L65 59V41z" fill="white"/>
  </svg>
);
const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117V1.471zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 10.49c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019h3.117v-6.038zm0 13.51c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v4.49c0 2.476-2.014 4.49-4.588 4.49zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.354 3.019-3.019V16.49zm7.704 7.509a4.49 4.49 0 110-8.98 4.49 4.49 0 010 8.98zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019 3.019-1.354 3.019-3.019-1.354-3.019-3.019-3.019z" fill="#F24E1E"/>
  </svg>
);
const VercelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M24 22.525H0l12-21.05 12 21.05z" fill="#000"/>
  </svg>
);
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);
const ShopifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M15.337 23.979l7.216-1.561-2.617-17.689c-.019-.122-.122-.203-.224-.203-.103 0-1.937-.041-1.937-.041s-1.286-1.246-1.429-1.388zm-2.509.213L8.05 22.685l-.953-4.638A4.848 4.848 0 016.877 18.24c-2.576 0-4.664-2.087-4.664-4.664 0-2.576 2.088-4.664 4.664-4.664.368 0 .725.044 1.069.121L8.958 4.11C4.694 4.96 2.1 7.957 2.1 11.575c0 4.378 3.546 7.924 7.924 7.924.95 0 1.862-.168 2.712-.467z" fill="#96BF48"/>
    <path d="M14.827 1.011s-1.083-.326-2.19-.244C10.181.93 9 2.642 9 2.642L8.733 5.87l-.041.082-1.102.326c-.285.082-.367.693-.387 1.019l-.937 11.39 9.073-1.714z" fill="#5E8E3E"/>
    <path d="M13.44 5.38l-.775 2.39s-.897-.49-2.013-.49c-1.633 0-1.714 1.022-1.714 1.307 0 1.389 3.69 1.918 3.69 5.2 0 2.576-1.633 4.23-3.832 4.23-2.637 0-3.996-1.633-3.996-1.633l.714-2.35s1.389 1.184 2.576 1.184c.774 0 1.102-.612 1.102-1.062 0-1.837-3.04-1.918-3.04-4.923 0-2.535 1.816-4.98 5.485-4.98.812 0 1.602.122 1.802.127z" fill="white"/>
  </svg>
);
const StripeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305z" fill="#635BFF"/>
  </svg>
);
const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#E01E5A"/>
  </svg>
);
const AirtableIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M11.97.002L.754 4.29a.752.752 0 0 0 0 1.401l11.22 4.27a2.252 2.252 0 0 0 1.602 0l11.21-4.27a.754.754 0 0 0 0-1.4L13.57.002a2.26 2.26 0 0 0-1.6 0z" fill="#FCB400"/>
    <path d="M12.802 13.001v9.154a.75.75 0 0 0 1.014.701l10.05-3.834a.75.75 0 0 0 .486-.7v-9.155a.75.75 0 0 0-1.014-.7l-10.05 3.834a.75.75 0 0 0-.486.7z" fill="#18BFFF"/>
    <path d="M10.5 13.417L7.39 14.762l-.033.016-6.716 2.957A.75.75 0 0 1 .5 17.03V7.875a.75.75 0 0 1 .437-.68.784.784 0 0 1 .752.044L10.5 11.25a.84.84 0 0 1 0 2.167z" fill="#F82B60"/>
  </svg>
);
const SalesforceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M9.915 1.53C10.863.572 12.151 0 13.584 0c1.972 0 3.686 1.097 4.598 2.724a5.916 5.916 0 011.96-.334c3.24 0 5.867 2.63 5.867 5.873 0 3.243-2.627 5.873-5.867 5.873-.347 0-.688-.033-1.019-.093a4.04 4.04 0 01-3.664 2.319 4.02 4.02 0 01-1.81-.428A4.918 4.918 0 019.1 18.48a4.914 4.914 0 01-4.912-4.914c0-.268.023-.53.065-.786a4.307 4.307 0 01-.803.076C1.546 12.856 0 11.308 0 9.39c0-1.918 1.546-3.464 3.45-3.464.378 0 .74.06 1.079.17A5.348 5.348 0 019.915 1.53z" fill="#00A1E0"/>
  </svg>
);
const JiraIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <defs>
      <linearGradient id="jira-g1" x1="100%" y1="0%" x2="20%" y2="100%">
        <stop offset="0%" stopColor="#0052CC"/>
        <stop offset="100%" stopColor="#2684FF"/>
      </linearGradient>
    </defs>
    <path d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.004-1.005z" fill="url(#jira-g1)"/>
    <path d="M5.958 6.278H17.53a5.218 5.218 0 0 0-5.236-5.215H9.88V1.006A5.218 5.218 0 0 0 4.65 6.283v4.793c0 .554.45 1.004 1.004 1.004h11.571A5.218 5.218 0 0 0 12.01 6.865H9.88" fill="url(#jira-g1)"/>
  </svg>
);
const AsanaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <path d="M19.141 12.866A4.852 4.852 0 0 0 16.3 12a4.853 4.853 0 0 0-2.84.866A4.852 4.852 0 0 0 7.7 12a4.852 4.852 0 0 0-2.841.866A4.865 4.865 0 0 0 0 17.13 4.869 4.869 0 0 0 4.865 22a4.863 4.863 0 0 0 4.864-4.87v-.003a4.856 4.856 0 0 0-.867-2.798A4.853 4.853 0 0 0 12 14.2a4.853 4.853 0 0 0 3.138 1.129A4.856 4.856 0 0 0 15.27 18v.003A4.863 4.863 0 0 0 20.135 22 4.869 4.869 0 0 0 25 17.13a4.865 4.865 0 0 0-4.859-4.264zM12 2a4.869 4.869 0 0 0-4.865 4.866A4.869 4.869 0 0 0 12 11.735a4.869 4.869 0 0 0 4.865-4.869A4.869 4.869 0 0 0 12 2z" fill="#F06A6A"/>
  </svg>
);
const LinearIcon = () => (
  <svg viewBox="0 0 100 100" className="w-6 h-6">
    <defs>
      <linearGradient id="li-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#5E6AD2"/>
        <stop offset="100%" stopColor="#9EA8FB"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#li-g)"/>
    <path d="M17 61L39 83A38 38 0 0017 61zM9 43L57 91A38 38 0 0076 76L24 24A38 38 0 009 43z" fill="white" fillOpacity="0.88"/>
  </svg>
);

const brands = [
  { Icon: HubSpotIcon, name: "HubSpot" },
  { Icon: NotionIcon, name: "Notion" },
  { Icon: ZoomIcon, name: "Zoom" },
  { Icon: FigmaIcon, name: "Figma" },
  { Icon: LinearIcon, name: "Linear" },
  { Icon: VercelIcon, name: "Vercel" },
  { Icon: AirtableIcon, name: "Airtable" },
  { Icon: GoogleIcon, name: "Google" },
  { Icon: ShopifyIcon, name: "Shopify" },
  { Icon: StripeIcon, name: "Stripe" },
  { Icon: SlackIcon, name: "Slack" },
  { Icon: SalesforceIcon, name: "Salesforce" },
  { Icon: AsanaIcon, name: "Asana" },
  { Icon: JiraIcon, name: "Jira" },
];

const set1 = [...brands, ...brands];
const set2 = [...brands.slice(7), ...brands.slice(0, 7), ...brands.slice(7), ...brands.slice(0, 7)];

function BrandItem({ Icon, name, white = false }) {
  return (
    <div className="flex items-center gap-2.5 px-5 mx-3 shrink-0">
      <div style={white ? { filter: "brightness(0) invert(1)", opacity: 0.85 } : {}}>
        <Icon />
      </div>
      <span className={`text-[14px] font-semibold whitespace-nowrap ${white ? "text-white" : "text-slate-700"}`}>
        {name}
      </span>
    </div>
  );
}

export function MarqueeStrip({ white = false }) {
  return (
    <div
      className="w-full overflow-hidden space-y-3"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="flex">
        <div className="flex marquee-track will-change-transform">
          {set1.map((b, i) => <BrandItem key={i} Icon={b.Icon} name={b.name} white={white} />)}
        </div>
      </div>
      <div className="flex">
        <div className="flex marquee-track-reverse will-change-transform">
          {set2.map((b, i) => <BrandItem key={i} Icon={b.Icon} name={b.name} white={white} />)}
        </div>
      </div>
    </div>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-[11px] font-black text-red-600 uppercase tracking-[0.22em]"
        >
          Trusted by AI Leaders
        </motion.p>
      </div>

      {/* Contained strip with fade masks — not full width */}
      <div
        className="max-w-5xl mx-auto overflow-hidden space-y-3"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div className="flex">
          <div className="flex marquee-track will-change-transform">
            {set1.map((b, i) => <BrandItem key={i} Icon={b.Icon} name={b.name} />)}
          </div>
        </div>
        <div className="flex">
          <div className="flex marquee-track-reverse will-change-transform">
            {set2.map((b, i) => <BrandItem key={i} Icon={b.Icon} name={b.name} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

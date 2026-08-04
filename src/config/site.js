// Get site URL from environment variable, use default value if not set
// Note: Please set the correct PUBLIC_SITE_URL in .env file after first deployment
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://unil.cn';

export const siteConfig = {
	title: "Gristle",
	author: "Gristle",
	url: SITE_URL,
	mail: "999unil@gmail.com",
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "navigation",
	},
	meta:{
		title: "脆骨的测试空间 — Gristle｜AI 应用与本地化部署",
		description: "学习与 AI 共存。分享 AI 应用落地、本地大模型部署（LLaMA/Qwen/Gemma）、向量数据库、RAG 架构、Agent 开发、Ollama、NAS 自托管与 Linux 运维的保姆级实战教程。",
		keywords: "AI 应用, 本地大模型, LLM 部署, 向量数据库, RAG, Agent, Ollama, NAS, Docker, 群晖, Linux 运维, 自托管, AI 工具链, 私有化部署, 自动化运维, Astro 博客",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "",
	},
	// social links
	social:{
		twitter: "http://x.com/ricouii/",
		twitterName: "RicoUI",
		github: "https://github.com/ricocc/ricoui-saas-template",
		blog: "https://ricoui.com",
	},
};

// Footer
export const socialLinks = [
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg t="1730123988138" class="icon ic-rss ic-social " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11766" width="256" height="256"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" p-id="11767"></path></svg>`
	},
];
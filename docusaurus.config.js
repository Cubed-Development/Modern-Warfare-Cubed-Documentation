// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import("@docusaurus/types").Config} */
const config = {
	title: "Modern Warfare Cubed Documentation",
	tagline: "Lasagna & spaghetti taste good, however documented lasagna & spaghetti tastes even better!",
	favicon: "img/favicon.ico",
	headTags: [
		{
			tagName: "meta",
			attributes: {
				name: "darkreader-lock"
			}
		}
	],

	// Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
	future: {
		experimental_faster: true,
		v4: true
	},

	url: "https://docs.mwc.redstudio.dev/",
	baseUrl: "/",

	// GitHub Pages deployment config.
	organizationName: "Cubed-Development",
	projectName: "Modern-Warfare-Cubed-Documentation",

	onBrokenLinks: "warn",

	presets: [
		[
			"classic",
			/** @type {import("@docusaurus/preset-classic").Options} */
			({
				docs: {
					routeBasePath: "/",
					editUrl: "https://github.com/Cubed-Development/Modern-Warfare-Cubed-Documentation/edit/main/"
				},
				theme: {
					customCss: "./src/css/custom.css"
				}
			})
		]
	],

	themeConfig:
	/** @type {import("@docusaurus/preset-classic").ThemeConfig} */
		({
			navbar: {
				title: "Modern Warfare Cubed Documentation",
				hideOnScroll: true,
				logo: {
					alt: "Modern Warfare Cubed Logo",
					src: "img/logo.webp"
				},
				items: [

					{
						href: "https://github.com/Cubed-Development",
						label: "GitHub",
						position: "right"
					}
				]
			},
			footer: {
				links: [
					{
						title: "Documentation",
						items: [
							{
								label: "Get Started",
								to: "/"
							}
						]
					},
					{
						title: "Community",
						items: [
							{
								label: "Discord",
								href: "https://discord.gg/k5WPk93K7b"
							},
							{
								label: "Suggestions",
								href: "https://feedback.mwc.redstudio.dev"
							},
							{
								label: "Roadmap",
								href: "https://feedback.mwc.redstudio.dev/roadmap"
							}
						]
					},
					{
						title: "More",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/Cubed-Development"
							},
							{
								label: "Main Mod GitHub",
								href: "https://github.com/Cubed-Development/Modern-Warfare-Cubed"
							},
							{
								label: "Documentation GitHub",
								href: "https://github.com/Cubed-Development/Modern-Warfare-Cubed-Documentation"
							}
						]
					}
				],
				logo: {
					alt: "Modern Warfare Cubed Logo",
					src: "img/logo.webp",
					width: 64,
					height: 64
				},
				copyright: "Built with <3 by Luna Mira Lage (Desoroxxx) with Docusaurus"
			},
			prism: {
				theme: prismThemes.gruvboxMaterialLight,
				darkTheme: prismThemes.gruvboxMaterialDark,
				additionalLanguages: ["java", "javastacktrace", "javadoclike", "javadoc", "groovy"]
			},
			colorMode: {
				respectPrefersColorScheme: true
			},
			announcementBar: {
				id: "earlyAccessPreview",
				content:
					"This is a early access preview of the Modern Warfare Cubed documentation. Information may not be correct or complete. Some docs may be empty",
				backgroundColor: "#fba403",
				textColor: "#ffffff",
				isCloseable: true
			}
		})
};

export default config;

import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script
				async={true}
				type={""}
				crossorigin={"cross"}
				integrity={"integrity"}
				referrerpolicy={"refer"}
				src={""}
				place={"endOfHead"}
				rawKey={"601d428290895811210d6342"}
			>
				{"alert(\"Работает\")"}
			</script>
			<link
				href={"fonts.googleapis.com"}
				rel={"stylesheet"}
				sizes={"20px"}
				type={"type"}
				media={"all"}
				as={"as"}
				crossorigin={"cross"}
				place={"endOfHead"}
				rawKey={"601d42eefd89d52c6005ef1d"}
			/>
			<meta
				charset={"utf8"}
				name={"keywords"}
				content={"some value"}
				http-equiv={"http equiv"}
				itemprop={"some props item"}
				place={"endOfHead"}
				rawKey={"601d436605e3ad383b360e87"}
			/>
			<style place={"endOfHead"} rawKey={"601d438a845c73d2e9c4ce04"}>
				{"body{\nbackground-color:yellow}"}
			</style>
		</RawHtml>
	</Theme>;
});
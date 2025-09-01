import Head from "next/head";
import React from "react";

export default function SetMetaData(props) {
  return (
    <Head>
      {props.title ? <title>{props.title}</title> : "Shubham Lavish"}
      <meta name="title" content={props.title} />
      <meta name="description" content={props.description} />
      <meta name="keyword" content={props.keyword} />
      <link rel="canonical" href={props.canonicalUrl} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.canonicalUrl} />
    </Head>
  );
}

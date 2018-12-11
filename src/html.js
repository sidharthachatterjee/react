import React from "react"
import favicon from "../src/pictures/favicon.png"

class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>Scrape the data you need</title>
          <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="Author" content="Lobstr.io" />
          <meta name="Publisher" content="Lobstr.io" />
          <meta name="Copyright" content="Lobstr.io" />
          <meta name="Robots" content="ALL" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@IoLobstr" />
          <meta name="twitter:creator" content="@IoLobstr" />
          <meta name="twitter:title" content="Lobstr.io: Scrape the data you need" />
          <meta name="twitter:url" content="/" />
          <meta name="description" content="We provide you free, fresh, aggregated datasets for any size business." />
          <meta name="twitter:description" content="We provide you free, fresh, aggregated datasets for any size business." />
          <meta property="og:description" content="We provide you free, fresh, aggregated datasets for any size business." />
          <meta content="Lobstr.io" property="og:site_name" />
          <meta content="Lobstr.io: Scrape the data you need" property="og:title" />
          <meta content="article" property="og:type" />
          <meta content="/" property="og:url" />
          <meta content="" property="og:image" />
          <meta name="twitter:image:src" content="" />
          <link rel="shortcut icon" type="image/png" href={favicon}/>

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

export default HTML;

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

'use strict'

const React = require('react')

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` })
}

exports.onRenderBody = ({ setHeadComponents }) => (
  setHeadComponents([
    <script 
      dangerouslySetInnerHTML={{
        __html: `
          (function() {

            function setTheme(theme) {
              if (theme === 'dark') {
                document.documentElement.className = 'dark';
              } else 
              {
                document.documentElement.className = 'light'
              }

              window.__theme = theme;
            }

            window.__setPreferredTheme = function(theme) {
              setTheme(theme);
              try {
                localStorage.setItem('preferred-theme', theme)
              } catch (e) {}
            }

            let preferredTheme;
            try {
              preferredTheme = localStorage.getItem('preferred-theme');
            } catch (e) {}

            // let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

            setTheme(preferredTheme || 'dark')

          })();
        `
      }}
    />
  ])
)



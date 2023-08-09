import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <img src="https://cdn.whost.sh/logos/docs-logo.png" alt="WHost IT" style={{ height: '50px' }} />,
  project: {
    link: 'https://github.com/We-Host',
  },
  chat: {
    link: 'https://discord.gg/whost-sh-933408866761326703',
  },
  docsRepositoryBase: 'https://github.com/We-Host',
  footer: {
    text: '© 2023 - WHost IT',
  },
  search: {
    placeholder: 'Buscar documentación...',
  },
  feedback: {
    content: '¿Hay algo mal? ¡Háganoslo saber!',
  },
  editLink: {
    text: 'Editar esta página en GitHub',
  },
  navigation: {
    next: true,
    prev: true,
  },
  darkMode: false,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – WHost'
    }
  },
  gitTimestamp() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { locale = "es" } = useRouter();
    const timestamp = new Date('2023-08-08T00:00:00Z');
    return (
      <>
        <span>Actualizado por última vez el </span>
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    );
  },
  head: (
    <>
    <meta property='og:image' content='https://cdn.whost.sh/logos/B7rwdI11.png' />
    <meta property="og:description" content="Docs about WHost" />
    </>
  )
}
export default config

import Container from '@/components/common/atoms/Container'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import firebaseLogo from '@/assets/img/logo/projects/Firebase.svg'
import googleCloudLogo from '@/assets/img/logo/projects/GoogleCloudHorizontal.svg'
import graphqlLogo from '@/assets/img/logo/projects/graphql.svg'
import expoLogo from '@/assets/img/logo/projects/Expo.svg'
import nextLogo from '@/assets/img/logo/projects/nextjs.svg'
import apolloLogo from '@/assets/img/logo/projects/apollo.svg'
import prismaLogo from '@/assets/img/logo/projects/prisma.svg'
import typescriptLogo from '@/assets/img/logo/projects/TypeScriptHorizontal.svg'
import { Button } from '@/components/common/atoms/Button'
import clsx from 'clsx'
import { useCallback, useState } from 'react'
import { copyToClipboard } from '@/utils/userAction'

export default function HomeHeroRow() {
  const { t } = useTranslation()

  const [copyText, setCopyText] = useState('common:copy')

  const handleClick = useCallback(() => {
    copyToClipboard('npm i -g @skeet-framework/cli')
    setCopyText('common:copied')

    setTimeout(() => {
      setCopyText('common:copy')
    }, 2000)
  }, [])

  return (
    <>
      <div className="relative isolate overflow-hidden">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-gray-600"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>
        <Container className="py-24 text-center lg:py-32">
          <h1 className="font-display mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-7xl">
            Effortless. <br />
            Serverless.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-sm font-bold tracking-tight text-gray-700 dark:text-gray-100 sm:text-lg">
            {t('home:HeroRow.body1')} <br />
            {t('home:HeroRow.body2')}
          </p>

          <div className="mt-6 flex justify-center gap-x-6">
            <Button href="/doc" className="">
              {t('common:navs.defaultMainNav.doc')}
            </Button>
            <Button
              href="https://github.com/elsoul/skeet-cli"
              variant="outline"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Button>
          </div>
          <div className="relative mx-auto mt-10 max-w-sm rounded-md bg-gray-900 p-4 text-white">
            <div className="absolute left-2 top-2 flex space-x-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            </div>
            <div className="absolute right-3 top-1.5 flex space-x-1.5">
              <button
                onClick={() => {
                  handleClick()
                }}
                className="text-xs hover:text-gray-200"
              >
                {t(copyText)}
              </button>
            </div>
            <div className="pt-4 text-left font-mono">
              $ npm i -g @skeet-framework/cli
            </div>
          </div>
          <div className="mb-12 mt-24 lg:mt-36">
            <ul
              role="list"
              className="mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-10 sm:gap-x-0 xl:flex-row xl:gap-x-12 xl:gap-y-0"
            >
              {[
                [
                  {
                    name: 'Firebase',
                    logo: firebaseLogo,
                    link: 'https://firebase.google.com/',
                  },

                  {
                    name: 'Google Cloud',
                    logo: googleCloudLogo,
                    link: 'https://cloud.google.com/',
                  },

                  {
                    name: 'TypeScript',
                    logo: typescriptLogo,
                    link: 'https://www.typescriptlang.org/',
                  },
                  {
                    name: 'Prisma',
                    logo: prismaLogo,
                    link: 'https://www.prisma.io/',
                  },
                ],
                [
                  {
                    name: 'GraphQL',
                    logo: graphqlLogo,
                    link: 'https://graphql.org/',
                  },
                  {
                    name: 'Apollo',
                    logo: apolloLogo,
                    link: 'https://www.apollographql.com/',
                  },
                  {
                    name: 'Next.js',
                    logo: nextLogo,
                    link: 'https://nextjs.org/',
                  },
                  {
                    name: 'Expo',
                    logo: expoLogo,
                    link: 'https://expo.dev/',
                  },
                ],
              ].map((group, groupIndex) => (
                <li key={`HeroRowLogoCloudList${groupIndex}`}>
                  <ul
                    role="list"
                    className="flex flex-row items-center gap-x-6 sm:gap-x-12"
                  >
                    {group.map((project) => (
                      <li key={project.name} className="flex">
                        <a href={project.link} target="_blank" rel="noreferrer">
                          <Image
                            src={project.logo}
                            alt={project.name}
                            className={clsx(
                              'hover:opacity-60 dark:grayscale',
                              project.name === 'React'
                                ? 'dark:invert-0'
                                : 'dark:invert'
                            )}
                            width={168}
                            height={48}
                            unoptimized
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </>
  )
}

export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'al-munasabaa-studio',
                  apiId: '5ecff981-1601-4ac2-a0f7-50f644c60c8d'
                },
                {
                  buildHookId: '5fec4ef1bb934e39f56e6170',
                  title: 'Events Website',
                  name: 'al-munasabaa-web',
                  apiId: '87d641c4-4044-455a-8bf9-95fc164d7f99'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LodewijkXCII/Al-Munasabaa',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://al-munasabaa-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}

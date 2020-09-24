export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f6c61ad2fe36ee1f8803c5b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-6f3kp2hu',
                  apiId: 'c1a74037-a47d-4b44-b718-5bdcae91754d'
                },
                {
                  buildHookId: '5f6c61ad2fe36edba180394a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-sfydhqjp',
                  apiId: '3ca5a04d-fa43-44be-a722-902302e33839'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/spanishhighs/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-sfydhqjp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

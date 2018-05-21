// mock data

export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      title: true,
      name: 'Modules',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Dev Tools',
      url: '/devTools',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Shell',
          url: '/devTools/shelll'
        },
        {
          name: 'Git',
          url: '/devTools/git'
        },
        {
          name: 'MakeFiles',
          url: '/devTools/makefiles'
        }
      ]
    },
    {
      name: 'Networks & HTTP',
      url: '/networks',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Networking for Web Developers',
          url: '/networks/networking'
        },
        {
          name: 'HTTP & Web servers',
          url: '/networks/http'
        }
      ]
    },
    {
      name: 'Coding foundations',
      url: '/coding',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Programming Foundations with Python',
          url: '/coding/progFoundPython'
        },
        {
          name: 'Code Quality',
          url: '/coding/quality'
        }
      ]
    },
    {
      name: 'Databases',
      url: '/db',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Relational databases',
          url: '/db/relational'
        },
        {
          name: 'MongoDB',
          url: '/db/mongo'
        }
      ]
    }
  ]
}

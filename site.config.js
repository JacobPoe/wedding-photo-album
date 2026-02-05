const config = {
  text: {
    index: {
      title: 'The Poes'
    },
    home: {
      header: {
        title: '💒 Jake & Gabby!'
      },
      toast: 'Thank you to everyone who joined us on our special day! We\'re grateful for all your love and support as we begin this new chapter.',
      footer: {
        contact: {
          label: 'Have a photo you\'d like to share?',
          linkText: 'Email us',
          linkFollowup: 'and we\'ll add it to our Fan Submissions tab!'
        },
        bottom: ['The Poes 🤵‍♂️👰‍♀️', 'Est. October 4th, 2025 💞']
      }
    }
  },
  layout: {
    footer: {
      vendors: [
        {
          id: 'photography',
          url: 'https://harryacosta.com/columbus-ohio-photography',
          description: 'Professional Photography',
          linkText: 'Harry Acosta Photography',
          emoji: '📷'
        },
        {
          id: 'church',
          url: 'https://www.iccols.org/',
          description: 'Nuptial Venue',
          linkText: 'Immaculate Conception Catholic Church',
          emoji: '⛪'
        },
        {
          id: 'reception',
          url: 'https://www.graystonecolumbus.com/',
          description: 'Reception Hall',
          linkText: 'Graystone Wine Cellar',
          emoji: '🍽️'
        },
        {
          id: 'cake',
          url: 'https://www.sauercakes.com/',
          description: 'Wedding Cake',
          linkText: 'Sauer Cakes',
          emoji: '🎂'
        }
      ],
      github: {
        url: 'https://github.com/JacobPoe/wedding-photo-album'
      }
    }
  },
  navigation: {
    "batchSize": 25
  },
  assets: {
    compressed: {
      url: '/assets/compressed'
    },
    fullsize: {
      url: '/assets/fullsize'
    }
  }
}

export default config;
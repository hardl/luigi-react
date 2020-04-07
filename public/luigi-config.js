Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            pathSegment: 'products',
            label: 'Products',
            icon: 'list',
            viewUrl: '/sampleapp.html#/products'
          },
          {
            pathSegment: 'service',
            label: 'Customer service',
            icon: 'phone',
            viewUrl: '/sampleapp.html#/service'
          }
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Luigi Shop',
      logo: '/logo.png'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
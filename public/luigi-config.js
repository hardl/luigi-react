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
            pathSegment: 'product',
            label: 'Product List',
            icon: 'product',
            viewUrl: '/sampleapp.html#/product'
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
      title: 'Luigi React App',
      logo: '/logo.png'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
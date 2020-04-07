Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/app.html#/home',
        children: [
          {
            pathSegment: 'products',
            label: 'Products',
            icon: 'list',
            viewUrl: '/app.html#/products'
          },
          {
            pathSegment: 'service',
            label: 'Customer service',
            icon: 'phone',
            viewUrl: '/app.html#/service'
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
const initialState = {
  projects: [
    {
      name: 'Online Porfolio',
      imageName: 'onlineportfolio.jpg',
      localRoute: '',
      url: 'http://www.randeeshirts.com',
      github: 'https://github.com/rshirts/online-portfolio'
    },
    {
      name: 'Plant Nursery Catalog',
      imageName: 'tree.jpeg',
      localRoute: '',
      url: '',
      github: 'https://github.com/rshirts/plant-nursery-catalog'
    },
    {
      name: 'Kill Team Stats',
      imageName: 'project4.jpg',
      localRoute: '',
      url: '',
      github: 'https://github.com/rshirts/kill-team-stats'
    },
  ]
}

const reducer = (state = initialState, action ) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;
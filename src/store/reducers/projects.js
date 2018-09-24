const initialState = {
  projects: [
    {
      name: 'Online Porfolio',
      imagePath: '',
      localRoute: '',
      url: 'www.randeeshirts.com',
      github: 'https://github.com/rshirts/online-portfolio'
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
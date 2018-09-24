const initialState = {
  info:[
    {
      type: 'Email',
      value: 'rshirts@gmail.com'
    },
    {
      type: 'Phone',
      value: '801-616-6178'
    },
    {
      type: 'Address',
      value: '629 W. 1925 N. Provo, Ut 84604'
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;
const initalState = {
  bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ab quod beatae, magni ipsam a deleniti at, magnam temporibus fugit qui suscipit labore! Dignissimos, illum. Doloribus, nemo sequi. Ipsam, repellat!',
  jobs: [
    {
      company: 'First Company',
      title:'First Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius at excepturi sunt nemo pariatur, veritatis, quo fugiat exercitationem nostrum et dolores tempora nihil est esse ipsa quos dolorum consequuntur.'
    },
    {
      company: 'Second Company',
      title:'Second Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius at excepturi sunt nemo pariatur, veritatis, quo fugiat exercitationem nostrum et dolores tempora nihil est esse ipsa quos dolorum consequuntur.'
    },
    {
      company: 'Third Company',
      title:'Third Title',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eius at excepturi sunt nemo pariatur, veritatis, quo fugiat exercitationem nostrum et dolores tempora nihil est esse ipsa quos dolorum consequuntur.'
    }
  ]
}

const reducer = (state = initalState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;
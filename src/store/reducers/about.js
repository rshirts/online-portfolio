const initalState = {
  bio: 'Randee Shirts recently graduated from Utah Valley University in Computer Science with an emphasis in Computer Science.  Although he learned a lot about application development, working in a team, managing projects, testing... He decided he wanted to become a web developer.  He has a strong belief that web based applications are the way of the future. Also this allows him to use his creative mind to build good looking, useful applications. Although he spends a lot of time programming. He enjoys spending time with his family doing outdoor activities these include, hiking, discgolf, bike riding and camping. He is also fairly nerdy and likes to play tabletop games like warhammer 40k, and role playing games like Dungeons and Dragons with friends. He is currently working on becoming a better web developer by learning from as many sources as possible and building applications to put on his github account.',
  jobs: [
    {
      company: 'Brewer Caldwell',
      title:'Network Administrator / Consultant',
      description: 'Administrated a network for 130 Employees at 3 different locations: maintained servers, phone services, printers, and a data backup service.  Designed and built the company website as part of a team.'
    },
    {
      company: 'Chrysalis',
      title:'Manager / Direct Service Provider',
      description: 'Managed all aspects of a group home: hiring, training, evaluating employees, writing monthly reports and doing financial reviews.'
    },
    {
      company: 'Westgate Software Inc',
      title:'Support Consultant',
      description: 'Installed and supported Spot. Point of sale software used in the dry cleaning industry. Along with application support, I also provided computer and system support. I did this both on-site and over the phone. '
    },
    {
      company: 'Softwise Inc',
      title:'Direct Support Professional',
      description: 'Installed and supported Cashwise. Point of sale and Collections program used in many money lending companies. I also created reports and legal documentation used by the program. I provided these services both on-site and over the phone. '
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
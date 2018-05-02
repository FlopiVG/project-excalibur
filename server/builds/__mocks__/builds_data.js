const builds = [
  {
    _id: '5ade12469c21cb4e449f6abb',
    id: 1,
    name: 'Farm',
    description:
      'A farm is an area of land that is devoted primarily to agricultural processes with the primary objective of producing food and other crops; it is the basic facility in food production.[1] The name is used for specialised units such as arable farms, vegetable farms, fruit farms, dairy, pig and poultry farms, and land used for the production of natural fibres, biofuel and other commodities. It includes ranches, feedlots, orchards, plantations and estates, smallholdings and hobby farms, and includes the farmhouse and agricultural buildings as well as the land. In modern times the term has been extended so as to include such industrial operations as wind farms and fish farms, both of which can operate on land or sea.',
    imgSrc: 'http://game-icons.net/icons/delapouite/originals/svg/farmer.svg',
    level: 1,
    upgradeCost: [
      {
        _id: '5add94bc58f904e8aa8b9028',
        name: 'food',
        quantity: 250,
        multi: 1.2,
      },
      {
        _id: '5add94bc58f904e8aa8b9029',
        name: 'wood',
        quantity: 200,
        multi: 2.23,
      },
    ],
    foodInc: {
      value: 0.4,
      multi: 0.7,
    },
  },
  {
    _id: '5ade12479c21cb4e449f6abc',
    name: 'Lumberjack',
    description:
      'Lumberjacks are Canadian workers in the logging industry who perform the initial harvesting and transport of trees for ultimate processing into forest products. The term usually refers to a bygone era (before 1945 in the United States) when hand tools were used in harvesting trees. Because of its historical ties, the term lumberjack has become ingrained in popular culture through folklore, mass media and spectator sports. The actual work was difficult, dangerous, intermittent, low-paying, and primitive in living conditions. However, the men built a traditional culture that celebrated strength, masculinity, confrontation with danger, and resistance to modernization.',
    imgSrc: 'http://game-icons.net/icons/lorc/originals/svg/axe-in-stump.svg',
    level: 1,
    upgradeCost: [
      {
        _id: '5add94bc58f904e8aa8b9028',
        name: 'food',
        quantity: 200,
        multi: 2.23,
      },
      {
        _id: '5add94bc58f904e8aa8b9029',
        name: 'wood',
        quantity: 100,
        multi: 1.25,
      },
    ],
    woodInc: {
      value: 0.5,
      multi: 0.6,
    },
  },
];

module.exports = builds;
/**
 * /*
 * Need to define all the types of entries.
 * The types of entries are:
 * 1. SingleChoiceEntry
 * 2. MultipleChoiceEntry
 * 3. SkillCheckEntry
 * 4. SpecialActionEntry
 * 5. PreviousLocationEntry
 * 6. TelephoneEntry - could be like any other entry, but will also have a telephoneParagraph
 *
 * SingleChoiceEntry:
 * {
 *   type: "SingleChoiceEntry",
 *   locationName: null,
 *   paragraph: ``,
 *   goTo: {
 *       text: "You decide to head to another Arkham location",
 *       location: "Arkham",
 *       advance: {
 *         amount: 1,
 *         type: "Hour"
 *       }
 *     },
 *   telephone: false,
 *   previous: [1, 2],
 * }
 *
 * MultipleChoiceEntry:
 * {
 *   type: "MultipleChoiceEntry",
 *   locationName: null,
 *   paragraph: ``,
 *   goTo: [
 *     {
 *       text: "You decide to stay here",
 *       location: 51,
 *       advance: {
 *         amount: 1,
 *         type: "Hour"
 *       }
 *     },
 *     {
 *       text: "Go to any Arkham location",
 *       location: "Arkham",
 *       advance: {
 *         amount: 1,
 *         type: "Hour"
 *       }
 *     }
 *   ],
 *   telephone: false,
 *   previous: [52],
 * }
 *
 * SkillCheckEntry:
 * {
 *   type: "SkillCheckEntry",
 *   locationName: null,
 *   paragraph: ``,
 *   skillCheck: {
 *     skill: ["sneak"],
 *     passText: "",
 *     passGoTo: [
 *       {
 *         text: "You decide to try a random door",
 *         location: 52,
 *         advance: {
 *           amount: 1,
 *           type: "Hour"
 *         }
 *       },
 *       {
 *         text: "Go to any Arkham location.",
 *         location: "Arkham",
 *         advance: {
 *           amount: 1,
 *           type: "Hour"
 *         }
 *       }
 *     ],
 *     failText: ``,
 *     failGoTo: [
 *       {
 *         text: "You failed to sneak",
 *         location: 10,
 *         advance: {
 *           amount: 1,
 *           type: "Hour"
 *         }
 *       }
 *     ]
 *   },
 *   goTo: [],
 *   telephone: false,
 *   previous: [1],
 * }
 *
 * SpecialActionEntry:
 * {
 *   type: "SpecialActionEntry",
 *   locationName: "Arkham First National Bank",
 *   paragraph: ``,
 *   specialAction: [
 *     {
 *       text: "Make a deposit",
 *       action: "Deposit",
 *     },
 *     {
 *       text: "Make a withdrawal",
 *       action: "Withdraw",
 *     }
 *   ],
 *   goTo: [
 *     {
 *       text: "You decide to head to another Arkham location",
 *       location: "Arkham",
 *       advance: {
 *         amount: 1,
 *         type: "Hour"
 *       }
 *     }
 *   ],
 *   telephone: false,
 *   previous: ["Arkham"],
 * }
 *
 * PreviousLocationEntry:
 * {
 *   type: "PreviousLocationEntry",
 *   locationName: null,
 *   paragraph: `He's lying.`,
 *   goTo: "Previous",
 *   telephone: false,
 *   previous: [166, 177],
 * }
 *
 * TelephoneEntry:
 * {
 *   type: "TelephoneEntry",
 *   locationName: null,
 *   telephoneParagraph: ``,
 *   paragraph: `He's lying.`,
 *   goTo: "Previous",
 *   telephone: true,
 *   previous: [166, 177],
 * }
 *
 * @format
 */

// TODO: Remove the Arkham location object from this object

const Entries = {
  1: () => ({
    type: 'PreviousLocationEntry',
    locationName: null,
    paragraph: `He's lying.`,
    goTo: 'Previous',
    telephone: false,
    previous: [166, 177]
  }),
  2: () => ({
    type: 'MultipleChoiceEntry',
    locationName: null,
    paragraph: `The room is silent. You feel about for the light switch. You find it, and gently press it on. Oops! It's Mrs. Harding's room! What a mistake! You see her turn and rise from the bedclothes, her frightened face screaming. As the scream pierces your ears, you hear the boarders begin to stir. You can stay here or escape to another Arkham location.`,
    goTo: [
      {
        text: 'You decide to stay here',
        location: 51,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: 'Go to any Arkham location',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [52]
  }),
  3: () => ({
    type: 'SpecialActionEntry',
    locationName: 'Arkham First National Bank',
    paragraph: `Deposits and withdrawals are possible between 9 - 3, M·F. If you're Prof. Grunewald, your account is here and you can withdraw up to the amount noted on the investigator sheet, or the current balance as entered in your journal. From here you can go to any Arkham location.`,
    specialAction: [
      {
        text: 'Make a deposit',
        action: 'Deposit'
      },
      {
        text: 'Make a withdrawal',
        action: 'Withdraw'
      }
    ],
    goTo: [
      {
        text: 'You decide to head to another Arkham location',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: ['Arkham']
  }),
  4: () => ({
    type: 'PreviousLocationEntry',
    locationName: null,
    paragraph: `He's lying. And he does not possess the implied skill.`,
    goTo: 'Previous',
    telephone: false,
    previous: [76, 166, 177]
  }),
  5: () => ({
    type: 'SingleChoiceEntry',
    locationName: null,
    paragraph: `You noticed flecks or flakes of dry, transparent material. It looks like skin. Whoever was here was peeling like a water-soaked ceiling! Baffled, you find no answer to this puzzle. No more evidence can be found here.`,
    goTo: [
      {
        text: 'Go to any Arkham location.',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [165]
  }),
  6: () => ({
    locationName: null,
    paragraph: `There is a difference between using a phrase book and speaking a language. They speak English at the Athens Bureau of Investigation, you suppose.`,
    goTo: [
      {
        text: 'Head to the Athens Hall of Justice',
        location: 87,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [1]
  }),
  7: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: `You are in Harding House. You try to move as quietly as possible.`,
    skillCheck: {
      skill: ['sneak'],
      passText: (result) =>
        `You pass your Sneak check with a roll of ${result}. You realize that you have no idea where Gliere's room is. You go upstairs. All the doors are close; none have names on them. One of these might be Gliere's.`,
      passGoTo: [
        {
          text: 'You decide to try a random door',
          location: 52,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: (result) => `You fail your Sneak check with a roll of ${result}`,
      failGoTo: [
        {
          text: 'You failed to sneak',
          location: 51,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [
      {
        text: 'Go to any Arkham location.',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [28, 90]
  }),
  8: () => ({
    type: 'SingleChoiceEntry',
    locationName: null,
    paragraph: `He takes your refusal without interest. "Very well, sir. I shall return later." He leaves and you stare at the walls of your silent room.`,
    goTo: {
      text: 'You need to decide what to do next',
      location: 73,
      advance: {
        amount: 1,
        type: 'Hour'
      }
    },
    telephone: false,
    previous: [167]
  }),
  9: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: `The man is an Egyptian. His posture seems threatening.`,
    skillCheck: {
      skill: ['dodge'],
      passText: 'You get away successfully',
      passGoTo: [
        {
          text: 'Back to next ship activity',
          location: 187,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: ``,
      failGoTo: [
        {
          text: 'You failed to dodge',
          location: 10,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [47]
  }),
  10: () => ({
    type: 'CombatEntry',
    locationName: null,
    paragraph: `Attempt a Luck roll.`,
    skillCheck: {
      skill: ['luck'],
      passText:
        'Your investigator is armed, he or she gets weapon of choice in hand before the stranger attacks.',
      // Create a new object that contains all the combat encounters
      combat: 'Steward',
      passGoTo: [
        {
          text: 'You scuttle back to the next ship activity',
          location: 187,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: ``,
      failGoTo: [
        {
          text: "You couldn't escape or kill the steward",
          location: 'TheEnd',
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [9, 91]
  }),
  11: () => ({
    type: 'SingleChoiceEntry',
    locationName: null,
    paragraph: `This room is actually just connected to the adjacent room.`,
    goTo: [
      {
        text: 'You hear something',
        location: 141,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [52]
  }),
  12: (currentCharacter, currentDate, currentLocationTable) => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: `The food tasted all right at the time, but now your stomach is churning.Food poisoning! You're really sick!`,
    skillCheck: {
      skill: ['treatPoison'],
      passText: 'You go on your way',
      passGoTo: [
        {
          text: "It's time to head somewhere else",
          location: currentLocationTable[currentLocationTable.length - 1],
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: `You spend three hours recovering, losing one Hit Point and one Magic Point`,
      failGoTo: [
        {
          text: 'You should head somewhere else',
          location: currentLocationTable[currentLocationTable.length - 1],
          advance: {
            amount: 4,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [586]
  }),
  13: () => ({
    type: 'SingleChoiceEntry',
    locationName: null,
    paragraph: `For you, Professor Louis Grunewald, this first day of September, 1931, has been tiring and uncomfortable. Light mist has covered Arkham for most of the day. You held two uninspired undergraduate classes at Miskatonic University. You also met with the new chairman of the Literature Department, a giddy Technocrat. You survey your desk and see that a stack of papers to grade has already formed. You're enjoying your second pipe of the evening when the doorbell rings. To your surprise, it's a telegraphic messenger. 
    
    "It arrived at Kingspoint Head station not more than an hour ago,"the boy says. You sign for it, and slip a dime into the youngster's hand. "Oh, thank you, sir!" You open the envelope and scan the contents. 
    
    ATHENS, GREECE 9/1/31 via Kingspoint Station
    
    IN JAIL FOR ANTIQUITY THEFT STOP NEED HELP STOP CAN YOU COME STOP URGENT STOP SEE CORPORAL ILIONAS, ATHENS BUREAU OF INVESTIGATION. 
    
    ~GLIERE~ 
    
    My goodness, you think. Imagine! Dotty old Gliere in prison! You recall that he had gone to Greece to work on his book concerning primitive myth. What has he gotten himself into? Should you wire money? You recall all the amusing discussions you've had with him, and a sudden insight lets you understand that Tibor Gliere had no close friends - except you. Should you go help him? You suppose the University will grant you leave. But, do you want to go?

    With uncommon speed you decide to go to Athens to help Gliere. You write him a wire, and another to Ernest Holt, a wealthy New York financier and a good friend of yours. If you get into hot water, Holt will help. And you decide to keep him posted on your progress. You give both telegrams to the waiting messenger, along with the necessary fund.

    What to do now? You have four dollars left in your wallet - you'll go to the bank first thing in the morning. Trans-Atlantic schedules - the Advertiser surely carries that information. As you pack, you wonder if you should check Gliere's room at Mrs. Harding's boarding house. Maybe you could get a clue about Gliere's activities or a hint about his arrest.
    
    Your passpost's in order; your clothes and sundries are packed. You'd best turn in. You're going on a little trip. When you awake, it is Sept. 2.`,
    goTo: [
      {
        text: 'The next day',
        location: 102,
        advance: {
          amount: 1,
          type: 'Day'
        }
      }
    ],
    telephone: false,
    previous: [1]
  }),
  14: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: `You crouched in the gloomy shadows. Soon you hear slow, shuffling footsteps from many directions. Do you wish you'd run instead? Somehow you count yourself glad that you can't make out the faces of the approaching figures- figures which move as though alive, and yet remind you of the dead! Now you're sure they see you. You begin to panic.`,
    skillCheck: {
      skill: ['fastTalk', 'creditRating'],
      passText: 'Perhaps you can impress your way out of this situation',
      passGoTo: [
        {
          text: 'You try to talk your way out of this',
          location: 31,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: ``,
      failGoTo: [
        {
          text: 'You try to talk your way out of this',
          location: 31,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [
      {
        text: 'You run away',
        location: 27,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [194]
  }),
  15: () => ({
    type: 'SingleChoiceEntry',
    locationName: null,
    paragraph: `Nobody goes near the European driver. Perhaps there's something odd about that. The old fellow looks shaky, but serene. The young driver looks friendly, but perhaps overly brash.`,
    goTo: [
      {
        text: 'You approach the drivers',
        location: 58,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [58]
  }),
  16: () => ({
    type: 'TelephoneEntry',
    locationName: 'Arkham Depot',
    telephoneParagraph: `Trains for Boston leave at 9am, noon, and 5pm The trip takes an hour and costs $125.`,
    paragraph: `You may purchase a ticket for the train and wait here, or go to any other Arkham location`,
    specialAction: [
      {
        text: 'Purchase a ticket to Boston',
        action: 'Purchase Ticket'
      }
    ],
    goTo: [
      {
        text: 'You decide to head to another Arkham location',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: 'You board the train to Boston',
        location: 64,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: true,
    previous: ['Arkham']
  }),
  23: () => ({
    type: 'MultipleChoiceEntry',
    locationName: null,
    paragraph: `" 'Tis my boarding house, and I'll allow in whom I wish!" She slams the door.`,
    goTo: [
      {
        text: 'Try to sneak in later tonight',
        location: 90,
        advance: {
          amount: 'Night',
          type: 'Hour'
        }
      },
      {
        text: 'Go to any Arkham location',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [113]
  }),
  24: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: `A map of the heavens rests on one of the shelves. This constellations map is quite similar to the copy of Ptolemy's found in the M.U. collection. Strangely enough, the star patterns here are slightly twisted or even completely skewed. In some patterns, stars are missing.`,
    skillCheck: {
      skill: ['spotHidden'],
      passText: `There's something else here.`,
      passGoTo: [
        {
          text: 'You see something else',
          location: 68,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: 'This place is a mess.',
      failGoTo: [
        {
          text: `It doesn't look like anything to you`,
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [72, 150]
  }),
  28: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: `The door is locked.`,
    skillCheck: {
      skill: ['mechanicalRepair', 'str * 4'],
      passText: 'You deftly jimmy the lock.',
      passGoTo: [
        {
          text: 'You try to pick the lock',
          location: 7,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: `There's a click, but the door remains locked.`,
      failGoTo: [
        {
          text: 'Maybe you should go somewhere else',
          location: 'Arkham',
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [
      {
        text: 'Try the window',
        location: 7,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [90]
  }),
  38: (currentCharacter, currentDate, currentLocationTable) => ({
    type: 'SpecialActionEntry',
    locationName: 'Retail Store',
    paragraph: `This retailer accepts currency from any country. You can buy any item or weapon listed.`,
    specialAction: [
      {
        text: 'Purchase something',
        action: 'Purchase'
      }
    ],
    goTo: [
      {
        text: 'You decide to head somewhere else',
        location: currentLocationTable,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: ['Arkham', 'New York', 'Athens', 'Alexandria', 'Bremen']
  }),
  45: () => ({
    type: 'MultipleChoiceEntry',
    locationName: null,
    paragraph: `"That's just fancy talk! Professor Gliere specifically instructed that no one disturb his room," She slams the door.`,
    goTo: [
      {
        text: 'Try to sneak in later tonight',
        location: 90,
        advance: {
          amount: 'Night',
          type: 'Hour'
        }
      },
      {
        text: 'Go to any Arkham location',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [67, 113]
  }),
  51: () => ({
    type: 'SingleChoiceEntry',
    locationName: null,
    paragraph: `"Why the idea!" Mrs. Harding sputters. "I'll count to three," she says, her grip tightening on the shotgun, "and then I'll pull the trigger! One ... two ...." You quickly decide to leave."`,
    goTo: [
      {
        text: `It's time to go somewhere else`,
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [2, 7, 28, 52, 141, 150]
  }),
  52: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: `You'll have to try one of the rooms. Attempt a Sneak roll before each try. If you fail the Sneak, go to the entry and read it, then immediately go to 51. for room A, go to 141; for room B, go to 2; for room C go to 11; for room D ,go to 150.'`,
    skillCheck: {
      skill: ['sneak', 'sneak', 'sneak', 'sneak'],
      passText: 'You move quietly.',
      passGoTo: [
        {
          text: 'You sneak into room A',
          location: 141,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'You sneak into room B',
          location: 2,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'You sneak into room C',
          location: 11,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'You sneak into room D',
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: `You try to sneak into the room`,
      failGoTo: [
        {
          text: 'You stumble as you enter room A. You hear thunderous snores that are quickly silenced, then you hear the padding of footsteps approaching.',
          location: 51,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: `The room's silence is shattered by your clumsy footwork. You fumble about for the light switch. You find it, and press it on. Oops! It's Mrs. Harding's room! What a mistake! You see her turn and rise from the bedclothes, her frightened face screaming. As the scream pierces your ears, you hear the boarders begin to stir.`,
          location: 51,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'You stumble as you enter room C. You hear thunderous snores from the adjoined room that are quickly silenced, then you hear the padding of footsteps approaching.',
          location: 51,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: `You turn on a light, just as you clip your toe on the edge of the large desk. You see a room in proper professorial confusion. Scattered about are books of myths and fables, and there are bundles of clippings from various foreign newspapers. Then, you suddenly hear footfalls in the hallway quickly approaching.`,
          location: 51,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [7, 28, 141]
  }),
  67: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: 'Her eyes are wary. but she is listening. She looks you up and down.',
    skillCheck: {
      skill: ['app * 5'],
      passText: 'You hope you look the part.',
      passGoTo: [
        {
          text: 'You persuade her',
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: `You seem untrustworthy.`,
      failGoTo: [
        {
          text: 'You do not persuade her',
          location: 45,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [113]
  }),
  68: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: `In Breasted's classic, "A History of Egypt", a slip of paper is sticking out. It marks page 170, and on that page phrases are underlined: "internal conflicts," "the fall of the Old Kingdom," "the triumph becomes complete," "the crocodile god." You also notice a word on the slip of paper. In
    Gliere's handwriting it reads: 'Quattara."`,
    skillCheck: {
      skill: ['spotHidden'],
      passText: 'On the back of paper, you see a strange drawing.',
      passGoTo: [
        {
          text: 'You study the drawing"',
          location: 188,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: `Maybe there's something else around here"`,
      failGoTo: [
        {
          text: 'You continue looking around the room.',
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [24, 49]
  }),
  89: () => ({
    type: 'MultipleChoiceEntry',
    locationName: null,
    paragraph: `Mrs. Harding glares and slams the door in your face.`,
    goTo: [
      {
        text: 'Try to sneak in later tonight',
        location: 90,
        advance: {
          amount: 'Night',
          type: 'Hour'
        }
      },
      {
        text: 'Go to any Arkham location',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [113]
  }),
  90: () => ({
    type: 'MultipleChoiceEntry',
    locationName: null,
    paragraph: `The boarding house is quiet. You creep onto the porch. To try the window, go to 7; to try the door, go to 28. Or you can leave, and go to any Arkham location.`,
    goTo: [
      {
        text: 'Try the window',
        location: 7,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: 'Try the door',
        location: 28,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: 'Go to any Arkham location',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [23, 45, 89]
  }),
  102: (currentCharacter, currentDate, currentLocationTable, locationsVisited) =>
    new Date(currentDate) > new Date(1931, 8, 8) && locationsVisited.includes(102)
      ? {
          type: 'SingleChoiceEntry',
          locationName: null,
          paragraph: 'It is after September 8th.',
          goTo: [
            {
              text: 'Something seems amiss',
              location: 147,
              advance: {
                amount: 1,
                type: 'Hour'
              }
            }
          ],
          telephone: false,
          previous: []
        }
      : currentCharacter.name !== 'Louis Grunewald'
      ? {
          type: 'SingleChoiceEntry',
          locationName: null,
          paragraph: 'You are not Louis Grunewald.',
          goTo: [
            {
              text: 'Something seems amiss',
              location: 120,
              advance: {
                amount: 1,
                type: 'Hour'
              }
            }
          ],
          telephone: false,
          previous: []
        }
      : {
          type: 'SingleChoiceEntry',
          locationName: null,
          paragraph: 'You rest and have a repast. You may travel to any Arkham location.',
          goTo: [
            {
              text: 'Go to any Arkham location',
              location: 'Arkham',
              advance: {
                amount: 1,
                type: 'Hour'
              }
            }
          ],
          telephone: false,
          previous: []
        },
  113: () => ({
    type: 'MultipleChoiceEntry',
    locationName: 'Harding House',
    paragraph:
      "Mrs. Harding greets you amiably. She is uncertain whether she should show you Gliere's room.",
    goTo: [
      {
        text: 'Debate Mrs. Harding',
        location: 23,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: 'Fast Talk Mrs. Harding',
        location: 45,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: 'Use Oratory',
        location: 67,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: 'Try a bribe',
        location: 89,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: ['Arkham']
  }),
  120: () => ({
    type: 'MultipleChoiceEntry',
    locationName: null,
    paragraph:
      "The back door is ajar. You enter the small house and a strange, repellent odor assaults your nostrils. Then you hear a car pull away from in front of the house. You look out, but see only a long black sedan disappear around the corner. Everything looks okay until you enter Grunewald's office. It has been totally ransacked. Books and papers are everywhere. You can go to any Arkham location, or you can make a search.",
    goTo: [
      {
        text: 'Go to any Arkham location',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: "Search Grunewald's Office",
        location: 165,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: []
  }),
  147: () => ({
    type: 'SingleChoiceEntry',
    locationName: null,
    paragraph: "Grunewald's room looks as though someone departed hastily.",
    goTo: [
      {
        text: 'Nothing else to see here',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [102]
  }),
  150: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: `You cautiously turn on a light and see a room in proper professorial confusion. Scattered about are books of myths and fables, and there are bundles of clippings from various foreign newspapers. For each hour you spend here, you can attempt one roll for one of the following skills. Each skill may be tried once daily. For a successful Astronomy roll, go to 24; for a successful Cryptography roll, go to 29; for a successful Cthulhu Mythos roll, go to 121; for a successful Idea roll, go to 32; for a successful Luck roll, go to 49; for a successful Spot Hidden roll, go to 72. Finished? You may try to Sneak out, no matter what the hour; if you fail, go to 51. If you succeed, go to any Arkham location.`,
    skillCheck: {
      skill: ['astronomy', 'cryptography', 'cthulhuMythos', 'idea * 1', 'luck * 1', 'spotHidden'],
      passText: '',
      passGoTo: [
        {
          text: 'You read the stars',
          location: 24,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'You crack the code',
          location: 29,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'You have uncovered something terrible',
          location: 121,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'You have a new idea',
          location: 32,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'You have a lucky break',
          location: 49,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'You have found a secret',
          location: 72,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: '',
      failGoTo: [
        {
          text: `It doesn't look like anything to you`,
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: `It doesn't look like anything to you`,
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: `It doesn't look like anything to you`,
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: `It doesn't look like anything to you`,
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: `It doesn't look like anything to you`,
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: `It doesn't look like anything to you`,
          location: 150,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [
      {
        text: 'Sneak out',
        location: 51,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: 'Go to any Arkham location',
        location: 'Arkham',
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [24, 29, 32, 52, 53, 67, 68, 72, 121, 124, 188, 208, 212, 282]
  }),
  165: () => ({
    type: 'SkillCheckEntry',
    locationName: null,
    paragraph: 'Except for detritus normal to an academic life, you find nothing.',
    skillCheck: {
      skill: ['spotHidden'],
      passText: '',
      passGoTo: [
        {
          text: 'You spend more time searching',
          location: 5,
          advance: {
            amount: 1,
            type: 'Hour'
          }
        },
        {
          text: 'Go to any Arkham location.',
          location: 'Arkham',
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ],
      failText: `You failed to find anything useful`,
      failGoTo: [
        {
          text: 'Go to any Arkham location.',
          location: 'Arkham',
          advance: {
            amount: 1,
            type: 'Hour'
          }
        }
      ]
    },
    goTo: [],
    telephone: false,
    previous: [120]
  }),
  224: () => ({
    type: 'MultipleChoiceEntry',
    locationName: null,
    paragraph: `The darkness is terrifying: You stand undecided for a while.`,
    goTo: [
      {
        text: 'Go West',
        location: 415,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      },
      {
        text: 'Go East',
        location: 442,
        advance: {
          amount: 1,
          type: 'Hour'
        }
      }
    ],
    telephone: false,
    previous: [404, 415, 442]
  }),
  Arkham: () => ({
    type: 'LocationTable',
    locationTableName: 'Arkham',
    locations: [
      {
        open: {
          days: [1, 2, 3, 4, 5],
          hours: [9, 10, 11, 12, 13, 14, 15]
        },
        goTo: [
          {
            text: 'Arkham First National Bank',
            location: 3,
            advance: {
              amount: 1,
              type: 'Hour'
            }
          }
        ],
        telephone: false
      },
      {
        open: {
          days: [0, 1, 2, 3, 4, 5, 6],
          hours: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
          ]
        },
        goTo: [
          {
            text: 'Hospital',
            location: 585,
            advance: {
              amount: 1,
              type: 'Hour'
            }
          }
        ],
        telephone: false
      },
      {
        open: {
          days: [0, 1, 2, 3, 4, 5, 6],
          hours: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
          ]
        },
        goTo: [
          {
            text: 'Arkham (Boston & Maine RR) Depot',
            location: 16,
            advance: {
              amount: 1,
              type: 'Hour'
            }
          }
        ],
        telephone: true
      },
      {
        open: {
          days: [1, 2, 3, 4, 5, 6],
          hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
        },
        goTo: [
          {
            text: 'Arkham General Store',
            location: 38,
            advance: {
              amount: 1,
              type: 'Hour'
            }
          }
        ],
        telephone: false
      },
      {
        open: {
          days: [1, 2, 3, 4, 5],
          hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
        },
        goTo: [
          {
            text: 'Arkham Advertiser Newspaper',
            location: 60,
            advance: {
              amount: 1,
              type: 'Hour'
            }
          }
        ],
        telephone: true
      },
      {
        open: {
          days: [1, 2, 3, 4, 5],
          hours: [9, 10, 11, 12, 13, 14, 15, 16]
        },
        goTo: [
          {
            text: 'Harding House',
            location: 113,
            advance: {
              amount: 1,
              type: 'Hour'
            }
          }
        ],
        telephone: false
      },
      {
        open: {
          days: [1, 2, 3, 4, 5],
          hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
        },
        goTo: [
          {
            text: 'Miskatonic University',
            location: 82,
            advance: {
              amount: 1,
              type: 'Hour'
            }
          }
        ],
        telephone: true
      },
      {
        open: {
          days: [1, 2, 3, 4, 5],
          hours: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
        },
        goTo: [
          {
            text: "Bee's Diner",
            location: 593,
            advance: {
              amount: 1,
              type: 'Hour'
            }
          }
        ],
        telephone: false
      },
      {
        open: {
          days: [1, 2, 3, 4, 5],
          hours: [9, 10, 11, 12, 13, 14, 15]
        },
        goTo: [
          {
            text: "Grunewald's Home",
            location: 102,
            advance: {
              amount: 1,
              type: 'Hour'
            }
          }
        ],
        telephone: false
      }
    ]
  })
};

export default Entries;

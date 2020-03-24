import { Game } from 'react-tournament-bracket/lib/components/model';
import _ from 'lodash';

const sampleResponse = {
  id: '123',
  songs: [
    {
      id: '565',
      spotifyID: '360',
      title: 'Sherane A.K.A Master Splinter’s Daughter',
      album: 'Good Kid M.A.A.D City',
      position: 1,
      votingStatus: 'IN_PROGRESS',
      votes: []
    },
    {
      id: '862',
      spotifyID: '546',
      title: '***** Don’t Kill My Vibe (Feat. Lady Gaga)',
      album: 'Good Kid M.A.A.D City',
      position: 1,
      votingStatus: 'IN_PROGRESS',
      votes: []
    },
    {
      id: '32',
      spotifyID: '786',
      title: 'Backseat Freestyle',
      album: 'Good Kid M.A.A.D City',
      position: 1,
      votingStatus: 'IN_PROGRESS',
      votes: []
    },
    {
      id: '976',
      spotifyID: '682',
      title: 'The Art Of Peer Pressure',
      album: 'Good Kid M.A.A.D City',
      position: 1,
      votingStatus: 'IN_PROGRESS',
      votes: []
    },
    {
      id: '616',
      spotifyID: '57',
      title: 'Money Trees (Feat. Jay Rock)',
      album: 'Good Kid M.A.A.D City',
      position: 1,
      votingStatus: 'IN_PROGRESS',
      votes: []
    },
    {
      id: '988',
      spotifyID: '446',
      title: 'Poetic Justice (Feat. Drake)',
      album: 'Good Kid M.A.A.D City',
      position: 1,
      votingStatus: 'IN_PROGRESS',
      votes: []
    },
    {
      id: '8',
      spotifyID: '577',
      title: 'Good Kid',
      album: 'Good Kid M.A.A.D City',
      position: 1,
      votingStatus: 'IN_PROGRESS',
      votes: []
    },
    {
      id: '113',
      spotifyID: '404',
      title: 'M.A.A.D City (Feat. Mc Eiht)',
      album: 'Good Kid M.A.A.D City',
      position: 1,
      votingStatus: 'IN_PROGRESS',
      votes: []
    }
    // {
    //   id: '525',
    //   spotifyID: '448',
    //   title: 'Swimming Pools (Drank) (Extended)',
    //   album: 'Good Kid M.A.A.D City',
    //   position: 1,
    //   votingStatus: 'IN_PROGRESS',
    //   votes: []
    // },
    // {
    //   id: '798',
    //   spotifyID: '626',
    //   title: 'Sing About Me I’m Dying Of Thirst',
    //   album: 'Good Kid M.A.A.D City',
    //   position: 1,
    //   votingStatus: 'IN_PROGRESS',
    //   votes: []
    // },
    // {
    //   id: '414',
    //   spotifyID: '328',
    //   title: 'Real (Feat. Anna Wise Of Sonnymoon)',
    //   album: 'Good Kid M.A.A.D City',
    //   position: 1,
    //   votingStatus: 'IN_PROGRESS',
    //   votes: []
    // },
    // {
    //   id: '444',
    //   spotifyID: '260',
    //   title: 'Compton (Feat. Dr. Dre)',
    //   album: 'Good Kid M.A.A.D City',
    //   position: 1,
    //   votingStatus: 'IN_PROGRESS',
    //   votes: []
    // }
  ],
  roundTime: 60,
  active: true
};

const randomChoose = arraySong =>
  Math.random() > 0.5 ? arraySong[0] : arraySong[1];

const dataToReactBracket = data => {
  // 12 songs
  // const songs = _.shuffle(data.songs);
  const { songs } = data;
  const games = [];

  for (let i = 0; i < songs.length - 1; i += 2) {
    const top = songs[i];
    const bottom = songs[i + 1];

    const result = [
      {
        name: top.title,
        id: `song-${top.id}`,
        seed: i + 1
      },
      {
        name: bottom.title,
        id: `song-${bottom.id}`,
        seed: i + 2
      }
    ];

    games.push(result);
  }

  const secondRound = [
    [randomChoose(games[0]), randomChoose(games[1])],
    [randomChoose(games[2]), randomChoose(games[3])]
  ];

  const thirdRound = [
    [randomChoose(secondRound[0]), randomChoose(secondRound[1])]
  ];

  return [games, secondRound, thirdRound, [[randomChoose(thirdRound[0])]]];
};

const game = [
  {
    id: '1',
    name: '',
    bracketLabel: '',
    scheduled: 1526130150000,
    sides: {
      home: {
        score: {
          score: 1
        },
        team: {
          id: '22',
          name: 'Australia'
        }
      },
      visitor: {
        score: {
          score: 0
        },
        team: {
          id: '23',
          name: 'USA'
        }
      }
    }
  },
  {
    id: '2',
    name: '',
    bracketLabel: '',
    scheduled: 1526130150000,
    court: {
      name: 'test',
      venue: {
        name: 'Gabba'
      }
    },
    sides: {
      home: {
        score: {
          score: 1
        },
        team: {
          id: '21',
          name: 'America'
        }
        /*  seed: {
        displayName: "string",
        rank: 1,
        sourceGame: Game, 
      sourcePool: {},
      }*/
      },
      visitor: {
        score: {
          score: 0
        },
        team: {
          id: '25',
          name: 'Canada'
        }
      }
    }
  }
];

export { dataToReactBracket, sampleResponse };
export default game;

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PhpService {
  localMatches: any[];

  constructor(private http: HttpClient) { }

  getMatches() {
    return this.http.get("http://pleintje.verhu.be/getMatches.php");
  }

  getMatchData() {
    return this.http.get("http://pleintje.verhu.be/getMatchData.php");
  }

  getPlayers() {
    return this.http.get("http://pleintje.verhu.be/getPlayers.php");
  }

  getStats() {
    return this.http.get("http://pleintje.verhu.be/getStats.php");
  }


  saveLineup(data) {
    this.http.post('http://pleintje.verhu.be/saveLineup.php', data)
      .subscribe(
        (res: Response) => {
          console.log(res.json());
        },
        err => {
          console.log("Error occured");
        });
  }



  getLocalPlayers() {
    return [
      {
        id: "1",
        first_name: "Robin",
        last_name: "Verhulst"
      },
      {
        id: "2",
        first_name: "Sven",
        last_name: "Stassyns"
      },
      {
        id: "3",
        first_name: "Nielsen",
        last_name: "Stassyns"
      },
      {
        id: "4",
        first_name: "Sven",
        last_name: "De Ceuster"
      },
      {
        id: "5",
        first_name: "Stefan",
        last_name: "Haemhouts"
      },
      {
        id: "6",
        first_name: "Filip",
        last_name: "Vermeiren"
      },
      {
        id: "7",
        first_name: "Jan",
        last_name: "Verlinden"
      },
      {
        id: "8",
        first_name: "Jonas",
        last_name: "Donckers"
      },
      {
        id: "9",
        first_name: "Glenn",
        last_name: "Van Croonenborch"
      },
      {
        id: "10",
        first_name: "Remko",
        last_name: "Gielen"
      },
      {
        id: "11",
        first_name: "Philip",
        last_name: "Hermans"
      },
      {
        id: "12",
        first_name: "Michael",
        last_name: "Vleugels"
      },
      {
        id: "13",
        first_name: "Vincent",
        last_name: "Veys"
      }
    ];
  }
  getLocalStats() {
    return [
      {
        id: "1",
        first_name: "Robin",
        last_name: "Verhulst",
        games: "5",
        goals: "3",
        assists: "4",
        clean_sheets: "1",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "2",
        first_name: "Sven",
        last_name: "Stassyns",
        games: "2",
        goals: "2",
        assists: "2",
        clean_sheets: "0",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "3",
        first_name: "Nielsen",
        last_name: "Stassyns",
        games: "4",
        goals: "3",
        assists: "0",
        clean_sheets: "1",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "4",
        first_name: "Sven",
        last_name: "De Ceuster",
        games: "5",
        goals: "6",
        assists: "3",
        clean_sheets: "1",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "5",
        first_name: "Stefan",
        last_name: "Haemhouts",
        games: "5",
        goals: "2",
        assists: "1",
        clean_sheets: "1",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "6",
        first_name: "Filip",
        last_name: "Vermeiren",
        games: "3",
        goals: "3",
        assists: "2",
        clean_sheets: "1",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "7",
        first_name: "Jan",
        last_name: "Verlinden",
        games: "2",
        goals: "1",
        assists: "1",
        clean_sheets: "1",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "8",
        first_name: "Jonas",
        last_name: "Donckers",
        games: "3",
        goals: "3",
        assists: "1",
        clean_sheets: "0",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "9",
        first_name: "Glenn",
        last_name: "Van Croonenborgh",
        games: "2",
        goals: "0",
        assists: "1",
        clean_sheets: "0",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "10",
        first_name: "Remko",
        last_name: "Gielen",
        games: "1",
        goals: "0",
        assists: "2",
        clean_sheets: "0",
        keeper_games: "0",
        keeper_cs: "0"
      },
      {
        id: "12",
        first_name: "Michael",
        last_name: "Vleugels",
        games: "5",
        goals: "0",
        assists: "1",
        clean_sheets: "0",
        keeper_games: "4",
        keeper_cs: "1"
      },
      {
        id: "13",
        first_name: "Vincent",
        last_name: "Veys",
        games: "1",
        goals: "0",
        assists: "0",
        clean_sheets: "0",
        keeper_games: "1",
        keeper_cs: "0"
      }
    ];
  }

  getLocalMatchData() {
    return [
      {
        id: "1",
        date: "2019-09-22 22:00:00",
        opponent_name: "Branli",
        summary_video_url: "https://youtu.be/bb8aCrWgHco",
        summary_embed_url: "https://www.youtube.com/embed/bb8aCrWgHco",
        score_us: "4",
        score_opponent: "2",
        lineup: [
          {
            id: "1",
            match_id: "1",
            player_id: "12",
            shirt_number: "1",
            is_keeper: "1",
            player: {
              id: "12",
              first_name: "Michael",
              last_name: "Vleugels"
            }
          },
          {
            id: "2",
            match_id: "1",
            player_id: "8",
            shirt_number: "2",
            is_keeper: "0",
            player: {
              id: "8",
              first_name: "Jonas",
              last_name: "Donckers"
            }
          },
          {
            id: "3",
            match_id: "1",
            player_id: "6",
            shirt_number: "3",
            is_keeper: "0",
            player: {
              id: "6",
              first_name: "Filip",
              last_name: "Vermeiren"
            }
          },
          {
            id: "4",
            match_id: "1",
            player_id: "5",
            shirt_number: "4",
            is_keeper: "0",
            player: {
              id: "5",
              first_name: "Stefan",
              last_name: "Haemhouts"
            }
          },
          {
            id: "5",
            match_id: "1",
            player_id: "1",
            shirt_number: "5",
            is_keeper: "0",
            player: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          },
          {
            id: "6",
            match_id: "1",
            player_id: "9",
            shirt_number: "6",
            is_keeper: "0",
            player: {
              id: "9",
              first_name: "Glenn",
              last_name: "Van Croonenborgh"
            }
          },
          {
            id: "7",
            match_id: "1",
            player_id: "3",
            shirt_number: "7",
            is_keeper: "0",
            player: {
              id: "3",
              first_name: "Nielsen",
              last_name: "Stassyns"
            }
          },
          {
            id: "8",
            match_id: "1",
            player_id: "4",
            shirt_number: "8",
            is_keeper: "0",
            player: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            }
          }
        ],
        goals: [
          {
            id: "11",
            match_id: "1",
            minute: "2",
            scorer_id: "8",
            assist_id: "9",
            score: "1-0",
            scorer: {
              id: "8",
              first_name: "Jonas",
              last_name: "Donckers"
            },
            assist: {
              id: "9",
              first_name: "Glenn",
              last_name: "Van Croonenborgh"
            }
          },
          {
            id: "12",
            match_id: "1",
            minute: "7",
            scorer_id: "8",
            assist_id: "1",
            score: "2-0",
            scorer: {
              id: "8",
              first_name: "Jonas",
              last_name: "Donckers"
            },
            assist: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          },
          {
            id: "13",
            match_id: "1",
            minute: "11",
            scorer_id: null,
            assist_id: null,
            score: "2-1"
          },
          {
            id: "14",
            match_id: "1",
            minute: "17",
            scorer_id: null,
            assist_id: null,
            score: "2-2"
          },
          {
            id: "15",
            match_id: "1",
            minute: "35",
            scorer_id: "4",
            assist_id: "6",
            score: "3-2",
            scorer: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            },
            assist: {
              id: "6",
              first_name: "Filip",
              last_name: "Vermeiren"
            }
          },
          {
            id: "16",
            match_id: "1",
            minute: "46",
            scorer_id: "1",
            assist_id: null,
            score: "4-2",
            scorer: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          }
        ]
      },
      {
        id: "2",
        date: "2019-09-20 22:30:00",
        opponent_name: "F. Van Dessel",
        summary_video_url: "https://youtu.be/0V_FLQt8sIE",
        summary_embed_url: "https://www.youtube.com/embed/0V_FLQt8sIE",
        score_us: "3",
        score_opponent: "3",
        lineup: [
          {
            id: "9",
            match_id: "2",
            player_id: "13",
            shirt_number: "1",
            is_keeper: "1",
            player: {
              id: "13",
              first_name: "Vincent",
              last_name: "Veys"
            }
          },
          {
            id: "10",
            match_id: "2",
            player_id: "5",
            shirt_number: "2",
            is_keeper: "0",
            player: {
              id: "5",
              first_name: "Stefan",
              last_name: "Haemhouts"
            }
          },
          {
            id: "11",
            match_id: "2",
            player_id: "4",
            shirt_number: "5",
            is_keeper: "0",
            player: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            }
          },
          {
            id: "12",
            match_id: "2",
            player_id: "12",
            shirt_number: "7",
            is_keeper: "0",
            player: {
              id: "12",
              first_name: "Michael",
              last_name: "Vleugels"
            }
          },
          {
            id: "13",
            match_id: "2",
            player_id: "1",
            shirt_number: "8",
            is_keeper: "0",
            player: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          },
          {
            id: "14",
            match_id: "2",
            player_id: "3",
            shirt_number: "11",
            is_keeper: "0",
            player: {
              id: "3",
              first_name: "Nielsen",
              last_name: "Stassyns"
            }
          },
          {
            id: "15",
            match_id: "2",
            player_id: "7",
            shirt_number: "14",
            is_keeper: "0",
            player: {
              id: "7",
              first_name: "Jan",
              last_name: "Verlinden"
            }
          }
        ],
        goals: [
          {
            id: "17",
            match_id: "2",
            minute: "6",
            scorer_id: null,
            assist_id: null,
            score: "0-1"
          },
          {
            id: "18",
            match_id: "2",
            minute: "19",
            scorer_id: null,
            assist_id: null,
            score: "0-2"
          },
          {
            id: "19",
            match_id: "2",
            minute: "35",
            scorer_id: "3",
            assist_id: null,
            score: "1-2",
            scorer: {
              id: "3",
              first_name: "Nielsen",
              last_name: "Stassyns"
            }
          },
          {
            id: "20",
            match_id: "2",
            minute: "40",
            scorer_id: "4",
            assist_id: "1",
            score: "2-2",
            scorer: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            },
            assist: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          },
          {
            id: "21",
            match_id: "2",
            minute: "52",
            scorer_id: "3",
            assist_id: "12",
            score: "2-3",
            scorer: {
              id: "3",
              first_name: "Nielsen",
              last_name: "Stassyns"
            },
            assist: {
              id: "12",
              first_name: "Michael",
              last_name: "Vleugels"
            }
          },
          {
            id: "22",
            match_id: "2",
            minute: "58",
            scorer_id: null,
            assist_id: null,
            score: "3-3"
          }
        ]
      },
      {
        id: "3",
        date: "2019-09-27 22:30:00",
        opponent_name: "Primus",
        summary_video_url: "https://youtu.be/ABLwG1Eb-NQ",
        summary_embed_url: "https://www.youtube.com/embed/ABLwG1Eb-NQ",
        score_us: "5",
        score_opponent: "0",
        lineup: [
          {
            id: "16",
            match_id: "3",
            player_id: "12",
            shirt_number: "1",
            is_keeper: "1",
            player: {
              id: "12",
              first_name: "Michael",
              last_name: "Vleugels"
            }
          },
          {
            id: "17",
            match_id: "3",
            player_id: "5",
            shirt_number: "2",
            is_keeper: "0",
            player: {
              id: "5",
              first_name: "Stefan",
              last_name: "Haemhouts"
            }
          },
          {
            id: "18",
            match_id: "3",
            player_id: "1",
            shirt_number: "5",
            is_keeper: "0",
            player: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          },
          {
            id: "19",
            match_id: "3",
            player_id: "3",
            shirt_number: "7",
            is_keeper: "0",
            player: {
              id: "3",
              first_name: "Nielsen",
              last_name: "Stassyns"
            }
          },
          {
            id: "20",
            match_id: "3",
            player_id: "6",
            shirt_number: "8",
            is_keeper: "0",
            player: {
              id: "6",
              first_name: "Filip",
              last_name: "Vermeiren"
            }
          },
          {
            id: "21",
            match_id: "3",
            player_id: "4",
            shirt_number: "11",
            is_keeper: "0",
            player: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            }
          },
          {
            id: "22",
            match_id: "3",
            player_id: "7",
            shirt_number: "14",
            is_keeper: "0",
            player: {
              id: "7",
              first_name: "Jan",
              last_name: "Verlinden"
            }
          }
        ],
        goals: [
          {
            id: "23",
            match_id: "3",
            minute: "10",
            scorer_id: "6",
            assist_id: "7",
            score: "1-0",
            scorer: {
              id: "6",
              first_name: "Filip",
              last_name: "Vermeiren"
            },
            assist: {
              id: "7",
              first_name: "Jan",
              last_name: "Verlinden"
            }
          },
          {
            id: "24",
            match_id: "3",
            minute: "22",
            scorer_id: "7",
            assist_id: "6",
            score: "2-0",
            scorer: {
              id: "7",
              first_name: "Jan",
              last_name: "Verlinden"
            },
            assist: {
              id: "6",
              first_name: "Filip",
              last_name: "Vermeiren"
            }
          },
          {
            id: "25",
            match_id: "3",
            minute: "30",
            scorer_id: "3",
            assist_id: "1",
            score: "3-0",
            scorer: {
              id: "3",
              first_name: "Nielsen",
              last_name: "Stassyns"
            },
            assist: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          },
          {
            id: "26",
            match_id: "3",
            minute: "39",
            scorer_id: "6",
            assist_id: "4",
            score: "4-0",
            scorer: {
              id: "6",
              first_name: "Filip",
              last_name: "Vermeiren"
            },
            assist: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            }
          },
          {
            id: "27",
            match_id: "3",
            minute: "46",
            scorer_id: "1",
            assist_id: "4",
            score: "5-0",
            scorer: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            },
            assist: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            }
          }
        ]
      },
      {
        id: "4",
        date: "2019-10-03 21:00:00",
        opponent_name: "De Dreef",
        summary_video_url: "https://youtu.be/SFY0rcBf6Xg",
        summary_embed_url: "https://www.youtube.com/embed/SFY0rcBf6Xg",
        score_us: "8",
        score_opponent: "3",
        lineup: [
          {
            id: "23",
            match_id: "4",
            player_id: "12",
            shirt_number: "1",
            is_keeper: "1",
            player: {
              id: "12",
              first_name: "Michael",
              last_name: "Vleugels"
            }
          },
          {
            id: "24",
            match_id: "4",
            player_id: "5",
            shirt_number: "2",
            is_keeper: "0",
            player: {
              id: "5",
              first_name: "Stefan",
              last_name: "Haemhouts"
            }
          },
          {
            id: "25",
            match_id: "4",
            player_id: "1",
            shirt_number: "5",
            is_keeper: "0",
            player: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          },
          {
            id: "26",
            match_id: "4",
            player_id: "8",
            shirt_number: "7",
            is_keeper: "0",
            player: {
              id: "8",
              first_name: "Jonas",
              last_name: "Donckers"
            }
          },
          {
            id: "27",
            match_id: "4",
            player_id: "2",
            shirt_number: "8",
            is_keeper: "0",
            player: {
              id: "2",
              first_name: "Sven",
              last_name: "Stassyns"
            }
          },
          {
            id: "28",
            match_id: "4",
            player_id: "9",
            shirt_number: "11",
            is_keeper: "0",
            player: {
              id: "9",
              first_name: "Glenn",
              last_name: "Van Croonenborgh"
            }
          },
          {
            id: "29",
            match_id: "4",
            player_id: "10",
            shirt_number: "12",
            is_keeper: "0",
            player: {
              id: "10",
              first_name: "Remko",
              last_name: "Gielen"
            }
          },
          {
            id: "30",
            match_id: "4",
            player_id: "4",
            shirt_number: "14",
            is_keeper: "0",
            player: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            }
          }
        ],
        goals: [
          {
            id: "28",
            match_id: "4",
            minute: "2",
            scorer_id: "1",
            assist_id: "2",
            score: "1-0",
            scorer: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            },
            assist: {
              id: "2",
              first_name: "Sven",
              last_name: "Stassyns"
            }
          },
          {
            id: "29",
            match_id: "4",
            minute: "5",
            scorer_id: null,
            assist_id: null,
            score: "1-1"
          },
          {
            id: "30",
            match_id: "4",
            minute: "10",
            scorer_id: null,
            assist_id: null,
            score: "1-2"
          },
          {
            id: "31",
            match_id: "4",
            minute: "13",
            scorer_id: "4",
            assist_id: "5",
            score: "2-2",
            scorer: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            },
            assist: {
              id: "5",
              first_name: "Stefan",
              last_name: "Haemhouts"
            }
          },
          {
            id: "32",
            match_id: "4",
            minute: "22",
            scorer_id: "5",
            assist_id: "2",
            score: "3-2",
            scorer: {
              id: "5",
              first_name: "Stefan",
              last_name: "Haemhouts"
            },
            assist: {
              id: "2",
              first_name: "Sven",
              last_name: "Stassyns"
            }
          },
          {
            id: "33",
            match_id: "4",
            minute: "25",
            scorer_id: "5",
            assist_id: null,
            score: "4-2",
            scorer: {
              id: "5",
              first_name: "Stefan",
              last_name: "Haemhouts"
            }
          },
          {
            id: "34",
            match_id: "4",
            minute: "32",
            scorer_id: "4",
            assist_id: "10",
            score: "5-2",
            scorer: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            },
            assist: {
              id: "10",
              first_name: "Remko",
              last_name: "Gielen"
            }
          },
          {
            id: "35",
            match_id: "4",
            minute: "35",
            scorer_id: "8",
            assist_id: "4",
            score: "6-2",
            scorer: {
              id: "8",
              first_name: "Jonas",
              last_name: "Donckers"
            },
            assist: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            }
          },
          {
            id: "36",
            match_id: "4",
            minute: "43",
            scorer_id: "2",
            assist_id: null,
            score: "7-2",
            scorer: {
              id: "2",
              first_name: "Sven",
              last_name: "Stassyns"
            }
          },
          {
            id: "37",
            match_id: "4",
            minute: "47",
            scorer_id: "4",
            assist_id: "10",
            score: "8-2",
            scorer: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            },
            assist: {
              id: "10",
              first_name: "Remko",
              last_name: "Gielen"
            }
          },
          {
            id: "38",
            match_id: "4",
            minute: "49",
            scorer_id: null,
            assist_id: null,
            score: "8-3"
          }
        ]
      },
      {
        id: "5",
        date: "2019-10-18 00:33:50",
        opponent_name: "Sparrijders",
        summary_video_url: "",
        summary_embed_url: "",
        score_us: "3",
        score_opponent: "2",
        lineup: [
          {
            id: "31",
            match_id: "5",
            player_id: "1",
            shirt_number: "5",
            is_keeper: "0",
            player: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          },
          {
            id: "32",
            match_id: "5",
            player_id: "2",
            shirt_number: "8",
            is_keeper: "0",
            player: {
              id: "2",
              first_name: "Sven",
              last_name: "Stassyns"
            }
          },
          {
            id: "33",
            match_id: "5",
            player_id: "3",
            shirt_number: "11",
            is_keeper: "0",
            player: {
              id: "3",
              first_name: "Nielsen",
              last_name: "Stassyns"
            }
          },
          {
            id: "34",
            match_id: "5",
            player_id: "4",
            shirt_number: "14",
            is_keeper: "0",
            player: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            }
          },
          {
            id: "35",
            match_id: "5",
            player_id: "5",
            shirt_number: "2",
            is_keeper: "0",
            player: {
              id: "5",
              first_name: "Stefan",
              last_name: "Haemhouts"
            }
          },
          {
            id: "36",
            match_id: "5",
            player_id: "8",
            shirt_number: "7",
            is_keeper: "0",
            player: {
              id: "8",
              first_name: "Jonas",
              last_name: "Donckers"
            }
          },
          {
            id: "37",
            match_id: "5",
            player_id: "12",
            shirt_number: "1",
            is_keeper: "1",
            player: {
              id: "12",
              first_name: "Michael",
              last_name: "Vleugels"
            }
          },
          {
            id: "38",
            match_id: "5",
            player_id: "6",
            shirt_number: "12",
            is_keeper: "0",
            player: {
              id: "6",
              first_name: "Filip",
              last_name: "Vermeiren"
            }
          }
        ],
        goals: [
          {
            id: "44",
            match_id: "5",
            minute: "12",
            scorer_id: "6",
            assist_id: "8",
            score: "1-0",
            scorer: {
              id: "6",
              first_name: "Filip",
              last_name: "Vermeiren"
            },
            assist: {
              id: "8",
              first_name: "Jonas",
              last_name: "Donckers"
            }
          },
          {
            id: "45",
            match_id: "5",
            minute: "21",
            scorer_id: "2",
            assist_id: null,
            score: "2-0",
            scorer: {
              id: "2",
              first_name: "Sven",
              last_name: "Stassyns"
            }
          },
          {
            id: "46",
            match_id: "5",
            minute: "24",
            scorer_id: "4",
            assist_id: "1",
            score: "3-0",
            scorer: {
              id: "4",
              first_name: "Sven",
              last_name: "De Ceuster"
            },
            assist: {
              id: "1",
              first_name: "Robin",
              last_name: "Verhulst"
            }
          },
          {
            id: "47",
            match_id: "5",
            minute: "28",
            scorer_id: null,
            assist_id: null,
            score: "3-1"
          },
          {
            id: "48",
            match_id: "5",
            minute: "32",
            scorer_id: null,
            assist_id: null,
            score: "3-2"
          }
        ]
      }
    ];
  }
}

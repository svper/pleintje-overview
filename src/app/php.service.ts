import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PhpService {
  localMatches: any[];

  constructor(private http: HttpClient) {}

  getMatches() {
    return this.http.get("http://pleintje.verhu.be/getMatches.php");
  }

  getStats() {
    return this.http.get("http://pleintje.verhu.be/getMatches.php");
  }

  getLocalStats() {
    return [
      {
        player_id: "4",
        first_name: "Sven",
        last_name: "De Ceuster",
        goals: "5",
        assists: "3"
      },
      {
        player_id: "1",
        first_name: "Robin",
        last_name: "Verhulst",
        goals: "3",
        assists: "3"
      },
      {
        player_id: "3",
        first_name: "Nielsen",
        last_name: "Stassyns",
        goals: "3",
        assists: "0"
      },
      {
        player_id: "8",
        first_name: "Jonas",
        last_name: "Donckers",
        goals: "3",
        assists: "0"
      },
      {
        player_id: "5",
        first_name: "Stefan",
        last_name: "Haemhouts",
        goals: "2",
        assists: "1"
      },
      {
        player_id: "6",
        first_name: "Filip",
        last_name: "Vermeiren",
        goals: "2",
        assists: "2"
      },
      {
        player_id: "2",
        first_name: "Sven",
        last_name: "Stassyns",
        goals: "1",
        assists: "2"
      },
      {
        player_id: "7",
        first_name: "Jan",
        last_name: "Verlinden",
        goals: "1",
        assists: "1"
      },
      {
        player_id: "9",
        first_name: "Glenn",
        last_name: "Van Croonenborgh",
        goals: "0",
        assists: "1"
      },
      {
        player_id: "10",
        first_name: "Remko",
        last_name: "Gielen",
        goals: "0",
        assists: "2"
      },
      {
        player_id: "12",
        first_name: "Michael",
        last_name: "Vleugels",
        goals: "0",
        assists: "1"
      }
    ];
  }

  getLocalMatches() {
    return [
      {
        id: "1",
        date: "2019-10-08 23:43:02",
        opponent_name: "Branli",
        summary_video_url: "https://streamable.com/atklu",
        summary_embed_url: "https://streamable.com/s/atklu/squkwm",
        score_us: "4",
        score_opponent: "2",
        lineup: [
          {
            id: "1",
            match_id: "1",
            player_id: "12",
            shirt_number: "1",
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
        date: "2019-10-08 23:53:27",
        opponent_name: "F. Van Dessel",
        summary_video_url: "https://streamable.com/227of",
        summary_embed_url: "https://streamable.com/s/227of/hlaqel",
        score_us: "3",
        score_opponent: "3",
        lineup: [
          {
            id: "9",
            match_id: "2",
            player_id: "13",
            shirt_number: "1",
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
        date: "2019-10-08 23:53:27",
        opponent_name: "Primus",
        summary_video_url: "https://streamable.com/0yj3l",
        summary_embed_url: "https://streamable.com/s/0yj3l/scxfvc",
        score_us: "5",
        score_opponent: "0",
        lineup: [
          {
            id: "16",
            match_id: "3",
            player_id: "12",
            shirt_number: "1",
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
        date: "2019-10-09 00:45:28",
        opponent_name: "De Dreef",
        summary_video_url: "",
        summary_embed_url: "",
        score_us: "8",
        score_opponent: "3",
        lineup: [
          {
            id: "23",
            match_id: "4",
            player_id: "12",
            shirt_number: "1",
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
      }
    ];
  }
}

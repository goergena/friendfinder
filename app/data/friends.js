//```json
var friends = [{
        "name": "Ahmed",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    },
    {
        "name": "Beverly",
        "scores": [
            5,
            5,
            1,
            1,
            5,
            5,
            5,
            5,
            1,
            2
        ]

    }, {
        "name": "Carli",
        "scores": [
            3,
            4,
            1,
            2,
            2,
            2,
            5,
            5,
            2,
            2
        ]
    },
    {
        "name": "Eric",
        "scores": [
            5,
            3,
            1,
            5,
            3,
            5,
            5,
            2,
            2,
            2
        ]
    },
    {
        "name": "Will",
        "scores": [
            4,
            1,
            1,
            1,
            1,
            3,
            1,
            1,
            2,
            4
        ]
    },

    {
        "name": "Ali",
        "scores": [
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            1
        ]
    },

    {
        "name": "Robby",
        "scores": [
            4,
            3,
            1,
            4,
            1,
            5,
            4,
            4,
            4,
            4
        ]
    },
    {
        "name": "Allison",
        "scores": [
            1,
            1,
            1,
            4,
            1,
            1,
            4,
            2,
            2,
            3
        ]
    },

]


/*

   * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
   * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
     * Example: 
       * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       * Total Difference: **2 + 1 + 2 =** **_5_**
   * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on. 
   * The closest match will be the user with the least amount of difference.
   * 
   *
*/
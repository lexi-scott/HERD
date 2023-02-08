const { Cattle } = require('../models'); 

const cattleData = [
    {
        "ownerID": 1,
        "tagID": 1,
        "name": "Betsy",
        "sex": "Female",
        "vaccine": "true",
        "fatherID": null,
        "motherID": null,
        "birthday": "2019-01-31",
        "currentLocation": "Block 3",
        "notes": "Our first heffer"
    },
    {
        "ownerID": 1,
        "tagID": 2,
        "name": "Bruce",
        "sex": "Male",
        "vaccine": true,
        "fatherID": null,
        "motherID": null,
        "birthday": "2019-05-25",
        "currentLocation": "Block 4",
        "notes": "Our first bull"
    },
    {
        "ownerID": 1,
        "tagID": 3,
        "sex": "Female",
        "name": "Daisy",
        "vaccine": true,
        "fatherID": null,
        "motherID": null,
        "birthday": "2019-06-07",
        "currentLocation": "Block 3",
        "notes": "Our second heffer"
    },
    {
        "ownerID": 1,
        "tagID": 4,
        "sex": "Male",
        "name": "Thor",
        "vaccine": true,
        "fatherID": null,
        "motherID": null,
        "birthday": "2019-02-23",
        "currentLocation": "Block 4",
        "notes": "Our second bull"
    },
    {
        "ownerID": 1,
        "tagID": 5,
        "sex": "Male",
        "name": "Jason",
        "vaccine": true,
        "fatherID": 2,
        "motherID": 1,
        "birthday": "2021-05-18",
        "currentLocation": "Block 4",
        "notes": "Gentle giant, twin of Simone, ID 6"
    },
    {
        "ownerID": 2,
        "tagID": 6,
        "sex": "Female",
        "name": "Simone",
        "vaccine": true,
        "fatherID": 2,
        "motherID": 1,
        "birthday": "2021-05-18",
        "currentLocation": "Block 3",
        "notes": "Sweetheart, twin of Jason, ID 5"
    },
    {
        "ownerID": 2,
        "tagID": 7,
        "sex": "Female",
        "name": "Roberta Jean",
        "vaccine": true,
        "fatherID": 4,
        "motherID": 3,
        "birthday": "2021-07-14",
        "currentLocation": "Block 3",
        "notes": "Big Lady"
    },
    {
        "ownerID": 2,
        "tagID": 8,
        "sex": "Female",
        "name": "Sue",
        "vaccine": true,
        "fatherID": 2, 
        "motherID": 7,
        "birthday": "2023-01-22",
        "currentLocation": "Block 3",
        "notes": "Only has 3 legs"
    },
    {
        "ownerID": 2,
        "tagID": 9,
        "sex": "Female",
        "name": "Wilma",
        "vaccine": false,
        "fatherID": 4,
        "motherID": 1,
        "birthday": "2023-02-06",
        "currentLocation": "Block 3",
        "notes": "Beautiful spots"
    },
    {
        "ownerID": 2,
        "tagID": 10,
        "sex": "Male",
        "name": "Cody",
        "vaccine": false,
        "fatherID": 5,
        "motherID": 7,
        "birthday": "2023-02-01",
        "currentLocation": "Block 4",
        "notes": "Will be a great dad"
    }
]

const seedCattle = () => Cattle.bulkCreate(cattleData);

module.exports = seedCattle;
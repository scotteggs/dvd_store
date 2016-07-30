(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Avatar',
        id: 1,
        genre_Id: 8,
        title: 'Avatar',
        year: 2009,
        rating: 'PG',
        cost: 22,
        description: "On the lush alien world of Pandora live the Na\'vi, beings who appear primitive but are highly evolved. Because the planet\'s environment is poisonous, human/Na\'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na''vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.",
        imageURL: './assets/images/avatar.jpg'
      },
      {
        id: 2,
        genre_Id: 9,
        title: 'Saving Private Ryan',
        year: 1998,
        rating: 'R',
        cost: 25,
        description: "Captain John Miller (Tom Hanks) takes his men behind enemy lines to find Private James Ryan, whose three brothers have been killed in combat. Surrounded by the brutal realties of war, while searching for Ryan, each man embarks upon a personal journey and discovers their own strength to triumph over an uncertain future with honor, decency and courage.",
        imageURL: './assets/images/savingprivateryan.jpg'
      },
      {
        id: 41,
        genre_Id: 2,
        title: 'Airplane',
        year: 1980,
        rating: 'PG',
        cost: 16,
        description: "The persons and events in this film are fictitious - fortunately! A masterpiece of off-the-wall comedy, Airplane! ",
        imageURL: './assets/images/airplane.jpg'
      },
      {
        id: 8,
        genre_Id: 6,
        title: 'Bourne Identity',
        year: 2002,
        rating: 'PG-13',
        cost: 20,
        description: "The story of a man (Matt Damon), salvaged, near death, from the ocean by an Italian fishing boat. When he recuperates, the man suffers from total amnesia, without identity or background... except for a range of extraordinary talents in fighting, linguistic skills and self-defense that speak of a dangerous past. He sets out on a desperate search-assisted by the initially rebellious Marie (Franka Potente) - to discover who he really is, and why he''s being lethally pursued by assassins.",
        imageURL: './assets/images/bourneidentity.jpg'
      },

    ]
    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();

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
    var notUsers = [
      {
        name: 'Lia Lugo',
        avatar: 'svg-1',
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
        name: 'George Duke',
        avatar: 'svg-2',
        content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
        name: 'Gener Delosreyes',
        avatar: 'svg-3',
        content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
        name: 'Lawrence Ray',
        avatar: 'svg-4',
        content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
        name: 'Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
        name: 'Gani Ferrer',
        avatar: 'svg-6',
        content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      }
    ];
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
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/51wYAC4gG3L._SX200_QL80_.jpg'
      },
      {
        name: 'Maverick',
        id: 2,
        genre_Id: 2,
        title: 'Maverick',
        year: 1997,
        rating: 'PG',
        cost: 15,
        description: 'This film update of the "Maverick" TV series finds the title cardsharp (Mel Gibson) hoping to join a poker contest with an impressive payoff. In order to enter, Maverick must first put up a large cash sum. He scams hopeful contestants Annabelle (Jodie Foster) and Angel (Alfred Molina) in a preliminary card game to win the money he needs, making enemies of both players. While trying to evade Annabelle and Angel, the crafty Maverick realizes a cunning marshal (James Garner) is also on his tail.',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/513qoEUIAoL._AC_US160_.jpg'
      },
      {
        name: 'Saving Private Ryan',
        id: 3,
        genre_Id: 9,
        title: 'Saving Private Ryan',
        year: 1998,
        rating: 'R',
        cost: 25,
        description: 'Captain John Miller (Tom Hanks) takes his men behind enemy lines to find Private James Ryan, whose three brothers have been killed in combat. Surrounded by the brutal realties of war, while searching for Ryan, each man embarks upon a personal journey and discovers their own strength to triumph over an uncertain future with honor, decency and courage.',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/51ApdjSEzLL._AC_US160_.jpg'
      },
      {
        name: 'Killing Private Ryan',
        id: 4,
        genre_Id: 9,
        title: 'Killing Private Ryan',
        year: 1998,
        rating: 'R',
        cost: 25,
        description: 'Captain John Miller (Tom Hanks) takes his men behind enemy lines to find Private James Ryan, whose three brothers have been killed in combat. Surrounded by the brutal realties of war, while searching for Ryan, each man embarks upon a personal journey and discovers their own strength to triumph over an uncertain future with honor, decency and courage.',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/51ApdjSEzLL._AC_US160_.jpg'
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

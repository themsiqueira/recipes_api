import { AxiosResponse } from 'axios';

export const mockSearchRecipesResponse = {
  status: 200,
  data: {
    title: 'Recipe Puppy',
    version: 0.1,
    href: 'http://www.recipepuppy.com/',
    results: [
      {
        title: "Easy Easter Carrots (Peter Rabbit's Carrots)",
        href:
          'http://www.recipezaar.com/Easy-Easter-Carrots-Peter-Rabbits-Carrots-249935',
        ingredients: 'cheese',
        thumbnail: 'http://img.recipepuppy.com/520400.jpg',
      },
      {
        title: 'Cheese Ball - Great for Halloween',
        href:
          'http://www.recipezaar.com/Cheese-Ball-Great-for-Halloween-290638',
        ingredients: 'cheese, cracked black pepper, cream cheese',
        thumbnail: 'http://img.recipepuppy.com/287859.jpg',
      },
      {
        title: 'Homemade Gjetost Recipe',
        href: 'http://www.grouprecipes.com/72569/homemade-gjetost.html',
        ingredients: 'cheese',
        thumbnail: 'http://img.recipepuppy.com/311099.jpg',
      },
      {
        title: 'Stupid Easy 3 Ingredient Nacho Dip',
        href:
          'http://www.recipezaar.com/Stupid-Easy-3-Ingredient-Nacho-Dip-33914',
        ingredients: 'cheese, cream cheese, hormel chili',
        thumbnail: 'http://img.recipepuppy.com/107788.jpg',
      },
      {
        title: 'Nacho Dip Recipe',
        href: 'http://www.grouprecipes.com/911/nacho-dip.html',
        ingredients: 'cheese, hormel chili, cream cheese',
        thumbnail: 'http://img.recipepuppy.com/381538.jpg',
      },
      {
        title: '\nThree In One Onion Dip Recipe\n\n',
        href: 'http://cookeatshare.com/recipes/three-in-one-onion-dip-4122',
        ingredients: 'cheddar cheese, cheese, green onion',
        thumbnail: 'http://img.recipepuppy.com/769587.jpg',
      },
      {
        title:
          'Cheesy Fries \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n',
        href: 'http://www.kraftfoods.com/kf/recipes/cheesy-fries-53601.aspx',
        ingredients: 'cheese, potato',
        thumbnail: 'http://img.recipepuppy.com/638886.jpg',
      },
      {
        title:
          'Stringy Pretzel \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n',
        href: 'http://www.kraftfoods.com/kf/recipes/stringy-pretzel-53915.aspx',
        ingredients: 'cheese, pretzel',
        thumbnail: 'http://img.recipepuppy.com/625910.jpg',
      },
      {
        title:
          'Stringy Chicken Nuggets \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n',
        href:
          'http://www.kraftfoods.com/kf/recipes/stringy-chicken-nuggets-53567.aspx',
        ingredients: 'chicken, cheese',
        thumbnail: 'http://img.recipepuppy.com/627220.jpg',
      },
      {
        title:
          'Quick Taco Quesadillas \r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\t\r\n\t\r\n\t\r\n\r\n',
        href:
          'http://www.kraftfoods.com/kf/recipes/quick-taco-quesadillas-50996.aspx',
        ingredients: 'ground beef, cheese',
        thumbnail: 'http://img.recipepuppy.com/630067.jpg',
      },
    ],
  },
} as AxiosResponse<unknown>;

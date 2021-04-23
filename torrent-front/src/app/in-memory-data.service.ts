import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from './category';
import {Game} from './game'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const categories=[
      {id:1,title:'Race'},
      {id:2,title:'Zombie'},
      {id:3,title:'Actions'},
      {id:4,title:'Stealth'},
      {id:5,title:'RPG'},
    ];
    
    const games=[
      {id: 1,category: 'Action',title: 'Dark Souls 3',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/Dark_Souls_3.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:3},
      {id: 2,category: 'Action',title: 'Dark Souls 2',description:'Прошлой весной на ПК, PS4 и Xbox 360 состоялся релиз сиквела ролевой игры Dark Souls от японской студии From Software. В этом году пришла очередь консолей нового поколения. Как и в первой части, нам предстоит играть за живого мертвеца, который хочет избавиться от страшного проклятья. Близок сиквел к своему предшественнику также сложностью игрового процесса — разработчики вновь предлагают нам неоднократно пытаться победить сильных врагов, развиваясь и совершенствуясь.',image:"assets/Dark_Souls_2.jpg",requirements: '7 SP1, 8.1, 10 (64bit)',categoryId:3},
      {id: 3,category: 'Action',title: 'Dark Souls',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/Dark_Souls_Remastered.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:3},
      {id: 4,category: 'Action',title: 'Detroit',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/71chGZXs3BL._SS500_.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:3},
      {id: 6,category: 'Action',title: 'Doom Eternal',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/Обложка_Doom_Eternal.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:3},
      {id: 7,category: 'Race',title: 'Need For Speed: Heat',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/Need_for_Speed_Heat.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:1},
      {id: 8,category: 'Race',title: 'Star Wars: Jedi fallen Order',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/Обложка_Star_Wars_Jedi_Fallen_Order.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:1},
      {id: 9,category: 'Race',title: 'The Elder Scrolls 5 Skyrim Legendary Edition',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/The_Elder_Scrolls_V_-_Skyrim.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:1},
      {id: 10,category: 'Zombie',title: 'Resident Evil',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/Resident_Evil_3_Remake.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:2},
      {id: 11,category: 'Zombie',title: 'Left 4 Dead',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/709690f5a2a76106067d1bda2ffad912.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:2},
      {id: 12,category: 'Zombie',title: 'Plants VS Zombie',description:'В 2011 году вышла мрачная action/RPG Dark Souls. В 2014, полностью переквалифицировавшись в RPG, появился сиквел. В апреле этого года состоялся релиз сиквела для консолей нового поколения, а совсем недавно в Сети начали ходить слухи о том, что уже в начале 2016 года будет выпущена третья часть серии. Слухи эти не просто выдуманы, они основаны на некоторых фактах. Во-первых, на шоу The Know, транслируемом в сети YouTube, были показаны скриншоты и рассказаны некоторые подробности о Dark Souls 3. Во-вторых, в руки журналистов американского издания IGN попал арт, изображающий пламенеющего рыцаря в доспехах. На этом арте красуются две интригующие надписи: «Dark Souls 3» и «Early 2016». Предполагается, что официальный анонс нового проекта состоится на выставке E3, которая пройдет с 16 по 18 июня, а уже скачать торрент Dark Souls 3 бесплатно все смогут в 2016 году.',image:"assets/741535d8cbbc7c1ec7ec35b06d030b59.jpg",requirements: 'Windows 7, 8.1, 10 (64bit)',categoryId:2},

    ];
    return {categories,games};
  }
  genId(categories: Category[]): number {
    return categories.length > 0 ? Math.max(...categories.map(category => category.id)) + 1 : 11;
  }
  geneId(games: Game[]): number {
    return games.length > 0 ? Math.max(...games.map(game => game.id)) + 1 : 11;
  }
}

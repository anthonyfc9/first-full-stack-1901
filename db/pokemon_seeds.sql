DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(250) NOT NULL,
  type VARCHAR(50) NOT NULL
);

INSERT INTO pokemon (name, description, image, type) VALUES
(
  'Pikachu',
  'Pikachu (ピカチュウ Pikachuu) is an Electric-type Pokémon, which was introduced in Generation I. Pikachu is renowned for being the most well-known and recognizable Pokémon. Over the years, Pikachu has become so popular that it serves as the Pokémon franchise mascot. It is the Version Mascot for the game Pokémon Yellow. It is also well known from the anime, where Ash Ketchum, the protagonist, owns a Pikachu. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone.',
  'http://vignette2.wikia.nocookie.net/pokemon/images/0/0d/025Pikachu.png/revision/latest?cb=20140328192412',
  'Electric'
),
(
  'Charmander',
  'Charmander (ヒトカゲ Hitokage) is a Fire-type Pokémon. It evolves into a Charmeleon starting at level 16. It is one of the three Starter Pokémon that can be chosen in the Kanto region.',
  'http://vignette2.wikia.nocookie.net/pokemon/images/7/73/004Charmander.png/revision/latest?cb=20140724195345',
  'Fire'
),
(
  'Squirtle',
  'Squirtle (ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It evolves into Wartortle starting at level 16. It is one of the three Starter Pokémon that can be chosen in the Kanto region.',
  'http://vignette2.wikia.nocookie.net/pokemon/images/3/39/007Squirtle.png/revision/latest?cb=20140328191525',
  'Water'
),
(
  'Bulbasaur',
  'Bulbasaur (フシギダネ Fushigidane) is a Grass/Poison-type Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16. It is one of the three Starter Pokémon that can be chosen in the Kanto region.',
  'http://vignette4.wikia.nocookie.net/pokemon/images/2/21/001Bulbasaur.png/revision/latest?cb=20140328190757',
  'Grass'
),
(
  'Hitmonlee',
  'Hitmonlee (Japanese: サワムラー Sawamuraa) is a Fighting-type Pokémon introduced in Generation I. According to the Pokédex, its nickname is "The Kicking Fiend".',
  'http://vignette1.wikia.nocookie.net/pokemon/images/3/32/106Hitmonlee.png/revision/latest?cb=20140328205305',
  'Fighting'
),
(
  'Vulpix',
  'Vulpix (Japanese: ロコン Rokon) is a Fire-type Pokémon introduced in Generation I, and an Ice-type introduced in Generation VII which is exclusive to Pokémon Sun.',
  'http://vignette4.wikia.nocookie.net/pokemon/images/6/60/037Vulpix.png/revision/latest?cb=20140328193205',
  'Fire'
),
(
  'Oddish',
  'Oddish (Japanese: ナゾノクサ Nazonokusa) is a Grass/Poison-type Pokémon introduced in Generation I.',
  'http://vignette1.wikia.nocookie.net/pokemon/images/4/43/043Oddish.png/revision/latest?cb=20140328194044',
  'Grass'
),
(
  'Jolteon',
  'Jolteon (Japanese: サンダース Sandaasu) is a Electric-type Pokémon introduced in Generation I.',
  'http://vignette1.wikia.nocookie.net/pokemon/images/b/bb/135Jolteon.png/revision/latest?cb=20140328210733',
  'Electric'
),
(
  'Lapras',
  'Lapras are a very large Water/Ice type Pokemon that resemble a plesiosaur. Its skin is mainly a light blue with a cream/white underside. It has a very long neck with a rounded head. Its ears are shaped like spirals and it has a small horn on its forehead. Having no legs, it instead has four flippers for easy mobility in the water. Lapras also have large, gray shells on their backs with "knobs" covering them.',
  'http://vignette2.wikia.nocookie.net/pokemon/images/a/ab/131Lapras.png/revision/latest?cb=20140328210730',
  'Water'
),
(
  'Machop',
  'Machop is a bluish-gray Pokémon with large arm muscles. It has three brown ridges on its head, rib-like protrusions on its sides, has a tail, and resembles a human child.',
  'http://vignette3.wikia.nocookie.net/pokemon/images/8/85/066Machop.png/revision/latest?cb=20140328203356',
  'Fighting'
),
(
  'Slowpoke',
  'Slowpoke is a mostly pink Pokémon that doesnt look much like a water-type Pokémon at all. It stands on four legs, and has a long tail that is used like a fishing pole. Its mouth is a pale brown color.',
  'http://vignette3.wikia.nocookie.net/pokemon/images/7/70/079Slowpoke.png/revision/latest?cb=20140328203941',
  'Water'
);
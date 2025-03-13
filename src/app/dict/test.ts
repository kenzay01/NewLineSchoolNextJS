export const testTitles = [
  {
    id: "test_1",
    title: "Англійська для дітей <br />(1-4 класи)",
  },
  {
    id: "test_2",
    title: "Англійська для підлітків <br /> (5-9 класи)",
  },
  {
    id: "test_3",
    title: "Англійська для підлітків <br />(10-11 клас)",
  },
  {
    id: "test_4",
    title: "Англійська для дорослих <br />(Adults 18+)",
  },
];

export const test_descriptions: Record<string, string> = {
  test_1:
    "📝 Захопливий тест для молодших школярів, що допоможе оцінити базові знання та логічне мислення.<br/><b>Тривалість:</b> 20-30 хв<br/><b>Загальна кількість питань:</b> 27<br/><b>Загальна кількість балів:</b> 27",
  test_2:
    "📚 Випробування для учнів середніх класів, яке перевіряє їхні знання з різних предметів.<br/><b>Тривалість:</b> 40-50 хв<br/><b>Загальна кількість питань:</b> 40<br/><b>Загальна кількість балів:</b> 40",
  test_3:
    "🎓 Серйозний тест для старшокласників, що містить запитання з основних навчальних дисциплін.<br/><b>Тривалість:</b> 40-50 хв<br/><b>Загальна кількість питань:</b> 40<br/><b>Загальна кількість балів:</b> 40",
  test_4:
    "🌍 Визначте свій рівень англійської за міжнародною шкалою CEFR (A0-C1).<br/><b>Тривалість:</b> 50-60 хв<br/><b>Загальна кількість питань:</b> 50<br/><b>Загальна кількість балів:</b> 50",
};

export type TestKeys = "test_1" | "test_2" | "test_3" | "test_4";

export const TESTS: Record<
  TestKeys,
  {
    id: number;
    question: string;
    image: string | null;
    options: string[] | null;
    answer: number | string;
  }[]
> = {
  test_1: [
    {
      id: 1,
      question: "What's this?",
      image:
        "https://lh5.googleusercontent.com/FsvqdgalMmjIFBSb9MZUrlrMPhUhlTL1hpKH4cEDq5q6PH6HsOBEJ3V5kqsZfYqkyNLWikevbj7aI6C7r6l3j8dprtFzYVJ68O8mOa7L3HdbX5t1uwMpNPRY_wc6XLht9XWkYw_B6o0=w740",
      options: ["It's a sharpener", "It's a rubber", "It's a ruler"],
      answer: 2,
    },
    {
      id: 2,
      question: "Is it a cat?",
      image:
        "https://lh4.googleusercontent.com/o8rSGNFYqOiYPpyNmPY2HTkrpV1WVgzohXyVSXcOgH-dNbFSyJl5rH3LgG7nlMhZi8zSEj5ZX9-oLhXLOBM2RP3PcEqBGyYoI3ln6-mCMQae3VyX61SqpyrfftyBPun9PvxtadQYL1Y=w600",
      options: [
        "No, it isn't. It's a dog.",
        "No, it isn't. It's a bird.",
        "No, it isn't. It's a fox.",
      ],
      answer: 1,
    },
    {
      id: 3,
      question: "Where's the dog?",
      image:
        "https://lh3.googleusercontent.com/HmoZoTHN5gsAX1P_3bQEC05wUpOFgVrSN5LZhg6tJ2OQzgO-Z37uuTH-I3cEEkDaqOCcdzyt4V16mSAGk7WzrDAzQJD5sJ7CnoZCDQZdBareGDtpdeoPfyYlirGVTSg9vhSVd8B9Lno=w740",
      options: [
        "It's on the table",
        "It's under the table",
        "It's next to the table",
      ],
      answer: 0,
    },
    {
      id: 4,
      question: "Who's this?",
      image:
        "https://lh4.googleusercontent.com/8oG4g_QvSGa_D_trqHr29NUz9Ohf5ITOeyXBs22UnRAZUuYvBeb-7TnTV7vbyDlM5ZeIPIgG2iig79VbjKAGVYUjXxMMpufC24LU168mxTlsJQDNtCwhcAcv91omkCodfRpz56P6H6E=w360",
      options: ["It's my brother.", "It's my mother.", "It's my grandma."],
      answer: 2,
    },
    {
      id: 5,
      question: "Do you like pasta? - No, I don't. But I like ...",
      image:
        "https://lh4.googleusercontent.com/6MxP5jBxePz-H3cYQby2NQvsG_yZncAdUxFFFUU3ar-823IGh5nON_FIgf11NeDOsi2Sbr3zKHDFyLtH73CAoqj-lz8-T6_FoTgoAFkhGZr6NRfkB50og1mR3iRO2lieANZCEzIATUc=w740",
      options: ["yogurt.", "cereal.", "pizza."],
      answer: 1,
    },
    {
      id: 6,
      question: "Where's your mum?",
      image:
        "https://lh6.googleusercontent.com/aFR7KrNyr3Gdh6OjemfsEeBU42w_rZDY4gJxkhpOR0NRjSEZAeUvaEDDMJueDhJr37LvvBzBm_IRs5bvzsW0lJ46iK-y-j9kCPjGMyz9aTDtAZDSPdd2NkXxNd8FS7XpMG50RgtthUQ=w740",
      options: [
        "She's in the bathroom.",
        "She's in the living-room.",
        "She's in the garden.",
      ],
      answer: 2,
    },
    {
      id: 7,
      question: "Can you play tennis? - Yes, but I can't play ...",
      image:
        "https://lh4.googleusercontent.com/VWeM5cwHdw0jmhePlc_W5ku6gEX8FbpPiwIuzm8XuPEh1pR8trAqPEFlD40rU8vRjN_HU2fPWthxXVb4RTQuHPTlqNqzH8Xk8o8AnQXe7s_VgcspdKXZS9-Kijb2zOS-C-ZFmQ2EMs0=w740",
      options: ["basketball", "volleyball", "football"],
      answer: 2,
    },
    {
      id: 8,
      question:
        "Tommy has a big red ball. He likes to play with it in the park. His friend Lucy has a blue kite. Tommy and Lucy play together every Saturday. They run, laugh, and have a lot of fun. \n\n <b>What color is Tommy's ball? (please input the answer ⬇️)</b> ",
      image: null,
      options: null,
      answer: "red",
    },
    {
      id: 9,
      question:
        "Tommy has a big red ball. He likes to play with it in the park. His friend Lucy has a blue kite. Tommy and Lucy play together every Saturday. They run, laugh, and have a lot of fun. \n\n <b>What does Lucy have? (please input the answer ⬇️)</b> ",
      image: null,
      options: null,
      answer: "kite",
    },
    {
      id: 10,
      question:
        "Tommy has a big red ball. He likes to play with it in the park. His friend Lucy has a blue kite. Tommy and Lucy play together every Saturday. They run, laugh, and have a lot of fun. \n\n <b>How often do Tommy and Lucy play together? (please input the answer ⬇️)</b> ",
      image: null,
      options: null,
      answer: "every saturday",
    },
    {
      id: 11,
      question:
        "Tommy has a big red ball. He likes to play with it in the park. His friend Lucy has a blue kite. Tommy and Lucy play together every Saturday. They run, laugh, and have a lot of fun. \n\n <b>What do they do together every Saturday?</b> ",
      image: null,
      options: [
        "sing, run and have a lot of fun",
        "run and laugh",
        "run, laugh and have a lot of fun",
      ],
      answer: 2,
    },
    {
      id: 12,
      question: "Sue ______ up at six o'clock in the morning.",
      image: null,
      options: ["get", "gets", "getting"],
      answer: 1,
    },
    {
      id: 13,
      question: "Tom ______ homework in the evening.",
      image: null,
      options: ["does", "goes", "makes"],
      answer: 0,
    },
    {
      id: 14,
      question: "Oh no! Your tent is very _______ .",
      image: null,
      options: ["clean", "dirty", "big"],
      answer: 1,
    },
    {
      id: 15,
      question: "Is he running?",
      image: null,
      options: ["Yes, he is.", "Yes, it is."],
      answer: 0,
    },
    {
      id: 16,
      question: "I listen ______ music in the afternoon.",
      image: null,
      options: ["at", "to", "for"],
      answer: 1,
    },
    {
      id: 17,
      question: "Diana and Kim _______ wearing sandals.",
      image: null,
      options: ["is", "are", "am"],
      answer: 1,
    },
    {
      id: 18,
      question: "Did you go to school yesterday?",
      image: null,
      options: ["Yes, I did", "Yes, I was"],
      answer: 0,
    },
    {
      id: 19,
      question: "I want ________ the Roman helmet at the museum.",
      image: null,
      options: ["see", "to see", "seeing"],
      answer: 1,
    },
    {
      id: 20,
      question: "_______ there a party?",
      image: null,
      options: ["Was", "Were"],
      answer: 0,
    },
    {
      id: 21,
      question: "There _______ any windows opposite the door.",
      image: null,
      options: ["weren't", "wasn't"],
      answer: 0,
    },
    {
      id: 22,
      question:
        "<b>Last week on 30th April I (1)________ (go) to Emil's birthday party.</b> I (2)_______ (wear) a pirate costume. We (3)  _______ (play) a lot of party games. We (4)_______ (drink) some lemonade and (5) ________ (eat) some birthday cake. Emil (6)  ________ (get) a lot of presents.",
      image: null,
      options: ["gone", "went", "go"],
      answer: 1,
    },
    {
      id: 23,
      question:
        "Last week on 30th April I (1)________ (go) to Emil's birthday party. <b>I (2)_______ (wear) a pirate costume.</b> We (3)  _______ (play) a lot of party games. We (4)_______ (drink) some lemonade and (5) ________ (eat) some birthday cake. Emil (6)  ________ (get) a lot of presents.",
      image: null,
      options: ["wear", "worn", "wore"],
      answer: 2,
    },
    {
      id: 24,
      question:
        "Last week on 30th April I (1)________ (go) to Emil's birthday party. I (2)_______ (wear) a pirate costume. <b>We (3)  _______ (play) a lot of party games.</b> We (4)_______ (drink) some lemonade and (5) ________ (eat) some birthday cake. Emil (6)  ________ (get) a lot of presents.",
      image: null,
      options: ["play", "played", "plays"],
      answer: 1,
    },
    {
      id: 25,
      question:
        "Last week on 30th April I (1)________ (go) to Emil's birthday party. I (2)_______ (wear) a pirate costume. We (3)  _______ (play) a lot of party games. <b>We (4)_______ (drink) some lemonade</b> and (5) ________ (eat) some birthday cake. Emil (6)  ________ (get) a lot of presents.",
      image: null,
      options: ["drink", "drank", "drunk"],
      answer: 1,
    },
    {
      id: 26,
      question:
        "Last week on 30th April I (1)________ (go) to Emil's birthday party. I (2)_______ (wear) a pirate costume. We (3)  _______ (play) a lot of party games. We (4)_______ (drink) some lemonade <b>and (5) ________ (eat) some birthday cake.</b> Emil (6)  ________ (get) a lot of presents.",
      image: null,
      options: ["eat", "ate", "eaten"],
      answer: 1,
    },
    {
      id: 27,
      question:
        "Last week on 30th April I (1)________ (go) to Emil's birthday party. I (2)_______ (wear) a pirate costume. We (3)  _______ (play) a lot of party games. We (4)_______ (drink) some lemonade and (5) ________ (eat) some birthday cake. <b>Emil (6)  ________ (get) a lot of presents.</b>",
      image: null,
      options: ["gets", "got", "gotten"],
      answer: 1,
    },
  ],
  test_2: [
    {
      id: 1,
      question:
        "<i>Emma's New Hobby</i>\nEmma loved spending time indoors, but one day, her mother encouraged her to try a new hobby. Emma decided to learn painting. At first, it was difficult, and she made a lot of mistakes. However, she kept practicing. After a few months, her paintings improved, and her teacher even displayed one of them at an art exhibition. Emma was proud of herself and realized that trying new things could be exciting. \n\n<b>Why did Emma start painting?</b>",
      image: null,
      options: [
        "She was always interested in painting.",
        "Her mother encouraged her.",
        "Her teacher told her to do it.",
      ],
      answer: 1,
    },
    {
      id: 2,
      question:
        "<i>Emma's New Hobby</i>\nEmma loved spending time indoors, but one day, her mother encouraged her to try a new hobby. Emma decided to learn painting. At first, it was difficult, and she made a lot of mistakes. However, she kept practicing. After a few months, her paintings improved, and her teacher even displayed one of them at an art exhibition. Emma was proud of herself and realized that trying new things could be exciting. \n\n<b>What was Emma's biggest problem at the beginning?</b>",
      image: null,
      options: [
        "She didn't have any art supplies.",
        "She found painting difficult.",
        "She didn't like painting.",
      ],
      answer: 1,
    },
    {
      id: 3,
      question:
        "<i>Emma's New Hobby</i>\nEmma loved spending time indoors, but one day, her mother encouraged her to try a new hobby. Emma decided to learn painting. At first, it was difficult, and she made a lot of mistakes. However, she kept practicing. After a few months, her paintings improved, and her teacher even displayed one of them at an art exhibition. Emma was proud of herself and realized that trying new things could be exciting. \n\n<b>What happened after a few months?</b>",
      image: null,
      options: [
        "Emma stopped painting.",
        "She became better at painting.",
        "She changed her hobby.",
      ],
      answer: 1,
    },
    {
      id: 4,
      question:
        "<i>Emma's New Hobby</i>\nEmma loved spending time indoors, but one day, her mother encouraged her to try a new hobby. Emma decided to learn painting. At first, it was difficult, and she made a lot of mistakes. However, she kept practicing. After a few months, her paintings improved, and her teacher even displayed one of them at an art exhibition. Emma was proud of herself and realized that trying new things could be exciting. \n\n<b>Where was Emma's painting displayed?</b>",
      image: null,
      options: ["At a museum.", "In her school.", "At an art exhibition."],
      answer: 2,
    },
    {
      id: 5,
      question:
        "<i>Emma's New Hobby</i>\nEmma loved spending time indoors, but one day, her mother encouraged her to try a new hobby. Emma decided to learn painting. At first, it was difficult, and she made a lot of mistakes. However, she kept practicing. After a few months, her paintings improved, and her teacher even displayed one of them at an art exhibition. Emma was proud of herself and realized that trying new things could be exciting. \n\n<b>What lesson did Emma learn?</b>",
      image: null,
      options: [
        "New things can be fun.",
        "Painting is boring.",
        "She should never listen to her mother.",
      ],
      answer: 0,
    },
    {
      id: 6,
      question:
        '<i>The Amazon Rainforest</i>\nThe Amazon Rainforest is the largest rainforest in the world. It is home to many plants and animals, including jaguars, parrots, and monkeys. The Amazon River flows through the forest, providing water to the wildlife. People call the Amazon the "lungs of the Earth" because it produces a lot of oxygen. However, deforestation is a big problem, and many trees are cut down every year. \n\n<b>The Amazon Rainforest is the ______ rainforest in the world (please input the missing word ⬇️).</b>',
      image: null,
      options: [],
      answer: "largest",
    },
    {
      id: 7,
      question:
        '<i>The Amazon Rainforest</i>\nThe Amazon Rainforest is the largest rainforest in the world. It is home to many plants and animals, including jaguars, parrots, and monkeys. The Amazon River flows through the forest, providing water to the wildlife. People call the Amazon the "lungs of the Earth" because it produces a lot of oxygen. However, deforestation is a big problem, and many trees are cut down every year. \n\n<b>The Amazon River flows through the forest and provides ______ to the wildlife (please input the missing word ⬇️).</b>',
      image: null,
      options: [],
      answer: "water",
    },
    {
      id: 8,
      question:
        '<i>The Amazon Rainforest</i>\nThe Amazon Rainforest is the largest rainforest in the world. It is home to many plants and animals, including jaguars, parrots, and monkeys. The Amazon River flows through the forest, providing water to the wildlife. People call the Amazon the "lungs of the Earth" because it produces a lot of oxygen. However, deforestation is a big problem, and many trees are cut down every year. \n\n<b>People call the Amazon the "______ of the Earth (please input the missing word ⬇️).".</b>',
      image: null,
      options: [],
      answer: "lungs",
    },
    {
      id: 9,
      question:
        '<i>The Amazon Rainforest</i>\nThe Amazon Rainforest is the largest rainforest in the world. It is home to many plants and animals, including jaguars, parrots, and monkeys. The Amazon River flows through the forest, providing water to the wildlife. People call the Amazon the "lungs of the Earth" because it produces a lot of oxygen. However, deforestation is a big problem, and many trees are cut down every year. \n\n<b>Many animals live in the Amazon, such as jaguars, ______, and monkeys (please input the missing word ⬇️).</b>',
      image: null,
      options: [],
      answer: "parrots",
    },
    {
      id: 10,
      question:
        '<i>The Amazon Rainforest</i>\nThe Amazon Rainforest is the largest rainforest in the world. It is home to many plants and animals, including jaguars, parrots, and monkeys. The Amazon River flows through the forest, providing water to the wildlife. People call the Amazon the "lungs of the Earth" because it produces a lot of oxygen. However, deforestation is a big problem, and many trees are cut down every year. \n\n<b>Deforestation is a big problem because many ______ are cut down every year (please input the missing word ⬇️).</b>',
      image: null,
      options: [],
      answer: "trees",
    },
    {
      id: 11,
      question: "She ______ to school every day.",
      image: null,
      options: ["go", "goes", "going"],
      answer: 1,
    },
    {
      id: 12,
      question: "My parents ______ in a small house.",
      image: null,
      options: ["lives", "living", "live"],
      answer: 2,
    },
    {
      id: 13,
      question: "Yesterday, I ______ a great movie.",
      image: null,
      options: ["watch", "watched", "watching"],
      answer: 1,
    },
    {
      id: 14,
      question: "Look! The cat ______ on the sofa.",
      image: null,
      options: ["sleep", "sleeping", "is sleeping"],
      answer: 2,
    },
    {
      id: 15,
      question: "I ______ never been to Italy.",
      image: null,
      options: ["have", "has", "had"],
      answer: 0,
    },
    {
      id: 16,
      question: "If you study hard, you ______ the exam.",
      image: null,
      options: ["pass", "will pass", "passed"],
      answer: 1,
    },
    {
      id: 17,
      question: "We ______ lunch when my friend arrived.",
      image: null,
      options: ["eat", "were eating", "eating"],
      answer: 1,
    },
    {
      id: 18,
      question: "She is ______ than her brother.",
      image: null,
      options: ["tall", "taller", "tallest"],
      answer: 1,
    },
    {
      id: 19,
      question: "I enjoy ______ books in my free time.",
      image: null,
      options: ["read", "reading", "to read"],
      answer: 1,
    },
    {
      id: 20,
      question: "They ______ to the park tomorrow.",
      image: null,
      options: ["will go", "going", "go"],
      answer: 0,
    },
    {
      id: 21,
      question: "My grandmother is very ______. She always helps people.",
      image: null,
      options: ["selfish", "kind", "rude"],
      answer: 1,
    },
    {
      id: 22,
      question: 'The opposite of "cheap" is ______.',
      image: null,
      options: ["expensive", "beautiful", "big"],
      answer: 0,
    },
    {
      id: 23,
      question: "I don't like horror movies because they are too ______.",
      image: null,
      options: ["funny", "scary", "boring"],
      answer: 1,
    },
    {
      id: 24,
      question: "She is very ______ because she runs every day.",
      image: null,
      options: ["lazy", "fast", "slow"],
      answer: 1,
    },
    {
      id: 25,
      question: "If you don't understand the word, look it up in the ______.",
      image: null,
      options: ["newspaper", "dictionary", "book"],
      answer: 1,
    },
    {
      id: 26,
      question: "The sun ______ in the east.",
      image: null,
      options: ["sets", "rises", "falls"],
      answer: 1,
    },
    {
      id: 27,
      question: "This test is very ______. I don't know the answers!",
      image: null,
      options: ["difficult", "easy", "fun"],
      answer: 0,
    },
    {
      id: 28,
      question: "My father works as a ______ in a hospital.",
      image: null,
      options: ["teacher", "doctor", "waiter"],
      answer: 1,
    },
    {
      id: 29,
      question: "We had a wonderful ______ at the beach last summer.",
      image: null,
      options: ["holiday", "homework", "meeting"],
      answer: 0,
    },
    {
      id: 30,
      question: "I put my books on the ______.",
      image: null,
      options: ["table", "fridge", "sofa"],
      answer: 0,
    },
    {
      id: 31,
      question: "I'm looking forward ______ you next weekend.",
      image: null,
      options: ["see", "to seeing", "seeing"],
      answer: 1,
    },
    {
      id: 32,
      question: "She has lived in this town ______ five years.",
      image: null,
      options: ["since", "for", "from"],
      answer: 1,
    },
    {
      id: 33,
      question: "This is the ______ movie I have ever seen!",
      image: null,
      options: ["most exciting", "more exciting", "exciting"],
      answer: 0,
    },
    {
      id: 34,
      question: "The train ______ before we arrived at the station.",
      image: null,
      options: ["leaves", "had left", "will leave"],
      answer: 1,
    },
    {
      id: 35,
      question: "My best friend is the person ______ understands me best.",
      image: null,
      options: ["which", "who", "what"],
      answer: 1,
    },
    {
      id: 36,
      question: "If I ______ more money, I would travel around the world.",
      image: null,
      options: ["have", "had", "will have"],
      answer: 1,
    },
    {
      id: 37,
      question: "I have never ______ to Japan.",
      image: null,
      options: ["been", "be", "was"],
      answer: 0,
    },
    {
      id: 38,
      question: "She ______ a new phone last month.",
      image: null,
      options: ["buys", "bought", "buy"],
      answer: 1,
    },
    {
      id: 39,
      question: "My brother is ______ interested in science than I am.",
      image: null,
      options: ["more", "most", "much"],
      answer: 0,
    },
    {
      id: 40,
      question: '"Can you help me with my homework?" – "Of ______!"',
      image: null,
      options: ["course", "class", "sure"],
      answer: 0,
    },
  ],
  test_3: [
    {
      id: 1,
      question:
        "<i>The Future of Artificial Intelligence</i>\nArtificial Intelligence (AI) is transforming many industries, including healthcare, finance, and education. AI can analyse large amounts of data quickly and make decisions more efficiently than humans. However, some experts worry about the ethical implications of AI, such as job loss and privacy concerns. While AI continues to develop, governments and organizations are working on regulations to ensure its responsible use. \n\n<b>In which industries is AI making an impact?</b>",
      image: null,
      options: [
        "Only healthcare",
        "Healthcare, finance, and education",
        "null of them",
      ],
      answer: 1,
    },
    {
      id: 2,
      question:
        "<i>The Future of Artificial Intelligence</i>\nArtificial Intelligence (AI) is transforming many industries, including healthcare, finance, and education. AI can analyse large amounts of data quickly and make decisions more efficiently than humans. However, some experts worry about the ethical implications of AI, such as job loss and privacy concerns. While AI continues to develop, governments and organizations are working on regulations to ensure its responsible use. \n\n<b>What is one advantage of AI?</b>",
      image: null,
      options: [
        "It makes slow decisions",
        "It analyses data quickly",
        "It replaces all human jobs",
      ],
      answer: 1,
    },
    {
      id: 3,
      question:
        "<i>The Future of Artificial Intelligence</i>\nArtificial Intelligence (AI) is transforming many industries, including healthcare, finance, and education. AI can analyse large amounts of data quickly and make decisions more efficiently than humans. However, some experts worry about the ethical implications of AI, such as job loss and privacy concerns. While AI continues to develop, governments and organizations are working on regulations to ensure its responsible use. \n\n<b>What is one concern about AI?</b>",
      image: null,
      options: [
        "It increases privacy",
        "It reduces efficiency",
        "It may cause job loss",
      ],
      answer: 2,
    },
    {
      id: 4,
      question:
        "<i>The Future of Artificial Intelligence</i>\nArtificial Intelligence (AI) is transforming many industries, including healthcare, finance, and education. AI can analyse large amounts of data quickly and make decisions more efficiently than humans. However, some experts worry about the ethical implications of AI, such as job loss and privacy concerns. While AI continues to develop, governments and organizations are working on regulations to ensure its responsible use. \n\n<b>What are governments and organizations doing about AI?</b>",
      image: null,
      options: [
        "Ignoring its development",
        "Creating regulations",
        "Banning AI completely",
      ],
      answer: 1,
    },
    {
      id: 5,
      question:
        '<i>The Future of Artificial Intelligence</i>\nArtificial Intelligence (AI) is transforming many industries, including healthcare, finance, and education. AI can analyse large amounts of data quickly and make decisions more efficiently than humans. However, some experts worry about the ethical implications of AI, such as job loss and privacy concerns. While AI continues to develop, governments and organizations are working on regulations to ensure its responsible use. \n\n<b>The word "implications" in the text means:</b>',
      image: null,
      options: ["Results or consequences", "Improvements", "Instructions"],
      answer: 0,
    },
    {
      id: 6,
      question: "It's about...",
      image:
        "https://lh3.googleusercontent.com/2RlA4XMy_XWlUdvAmb6XW25TpX7SoDHoatQV_94DvWOy3ID4nxLr_Suu5Jkh-6JCagANuqhVvKfepkXMWhuhz8DZWYZ1nhvHeurV-jsaROggexCHWMkQaSIAtQC5KPkciJ8lynTih7E=w383",
      options: [
        "a community garden",
        "a kitchen gadget",
        "a food magazine",
        "a catering service",
        "an innovative restaurant",
        "a food shop",
        "a cooking class",
      ],
      answer: 3,
    },
    {
      id: 7,
      question: "It's about...",
      image:
        "https://lh4.googleusercontent.com/lmBwlRIkQpDANBEPFKS_0dCNfiJh3pD2xnxC0xZM42ch-2Xq85TZgcxHzzEbSqGTfrmggEZt9XCSwMnuWcj2IZRBjSwPsvKbKFuQG9T5sb2geCTdn5Yoowm1glzgEDEjU6u9SMMVFeY=w373",
      options: [
        "a DIY class",
        "a special online offer",
        "a present paid in advance",
        "a textbook rental",
        "tourism services",
        "sports equipment",
        "beverages and baked goods",
      ],
      answer: 4,
    },
    {
      id: 8,
      question: "It's about...",
      image:
        "https://lh3.googleusercontent.com/5xXCeJGgCaOX6GC9jXW5E5MqHIVtyZYorj2JpNPnqKWU7sUG-PscGMb_0JzWj36GuwqhYH7tpKPznucYsj9NOcvMFhFQ9t7UsSOx0map4hMDs7EozNauFy94xTeLwz3mDFWG8Oh4lAA=w569",
      options: [
        "a literary festival",
        "a film soundtrack",
        "a chat show",
        "a weekly newspaper",
        "a choir",
        "a live dance performance",
      ],
      answer: 2,
    },
    {
      id: 9,
      question: "In Cape Town people can...",
      image:
        "https://lh5.googleusercontent.com/K7jnryJJf8i3xBVXAk4bJAyOteWYydqM9Vgr2oM0enWR5JZquvvjjA5HgsIiWG3CvyXMA1OBzNjGFmsaTdA5ECDfwr7DdKPhnK5ZjUK7lajNJ6_F42n5KQPg6-ni770zQBhze2ZScN4=w563",
      options: [
        "see the place where a famous writer is buried",
        "try an ancient watersport",
        "visit a nature reserve",
        "see how people lived ten centuries ago",
        "buy handmade souvenirs",
      ],
      answer: 1,
    },
    {
      id: 10,
      question: "It's about...",
      image:
        "https://lh5.googleusercontent.com/c6WRmeJ7R7-k6_boEnYurt0sE-1PmYhe8t_1PGyxEZZ16zVAQ2bV2P-oxx4v-L088lTzjz8RCD4kmlVmVseNxq-JSKDWD6yVsbz7d_X_wC8GBtU-tzVcDITrgndzI2d0UVkGk3INLKM=w640",
      options: [
        "technical support",
        "advertising services",
        "a hiring opportunity",
        "an athletic competition",
        "professional training",
        "a request for volunteers",
        "a neighbourhood event",
      ],
      answer: 4,
    },
    {
      id: 11,
      question: "By the time we arrived, the movie ______.",
      image: null,
      options: ["started", "had started", "has started"],
      answer: 1,
    },
    {
      id: 12,
      question: "If I ______ more time, I would learn another language.",
      image: null,
      options: ["have", "had", "will have"],
      answer: 1,
    },
    {
      id: 13,
      question: "She said she ______ her homework.",
      image: null,
      options: ["finished", "had finished", "finishes"],
      answer: 1,
    },
    {
      id: 14,
      question: "The project must ______ by Friday.",
      image: null,
      options: ["finish", "be finished", "finished"],
      answer: 1,
    },
    {
      id: 15,
      question: "I wish I ______ more money.",
      image: null,
      options: ["have", "had", "will have"],
      answer: 1,
    },
    {
      id: 16,
      question: "Neither of the boys ______ interested in sports.",
      image: null,
      options: ["is", "are", "were"],
      answer: 0,
    },
    {
      id: 17,
      question: "I regret ______ him about my plans.",
      image: null,
      options: ["telling", "to tell", "tell"],
      answer: 0,
    },
    {
      id: 18,
      question: "He ______ in London for five years before moving to Paris.",
      image: null,
      options: ["lived", "has lived", "had lived"],
      answer: 2,
    },
    {
      id: 19,
      question: "She prefers reading ______ watching TV.",
      image: null,
      options: ["than", "rather than", "to"],
      answer: 2,
    },
    {
      id: 20,
      question: "You should have ______ the invitation.",
      image: null,
      options: ["accept", "accepted", "accepting"],
      answer: 1,
    },
    {
      id: 21,
      question: "The meeting was ______ because the manager was sick.",
      image: null,
      options: ["postponed", "refused", "avoided"],
      answer: 0,
    },
    {
      id: 22,
      question: "He was ______ after running for an hour.",
      image: null,
      options: ["thirsty", "excited", "exhausted"],
      answer: 2,
    },
    {
      id: 23,
      question: 'The synonym of "crucial" is ______.',
      image: null,
      options: ["unnecessary", "essential", "optional"],
      answer: 1,
    },
    {
      id: 24,
      question: "The company will ______ a new product next month.",
      image: null,
      options: ["launch", "lunch", "learn"],
      answer: 0,
    },
    {
      id: 25,
      question:
        "She has a great sense of ______; she always makes people laugh.",
      image: null,
      options: ["humor", "honor", "kindness"],
      answer: 0,
    },
    {
      id: 26,
      question: "The weather today is ______ than yesterday.",
      image: null,
      options: ["worse", "badder", "worst"],
      answer: 0,
    },
    {
      id: 27,
      question: "He has a very ______ attitude towards work.",
      image: null,
      options: ["lazy", "hardworking", "boring"],
      answer: 1,
    },
    {
      id: 28,
      question: 'The opposite of "increase" is ______.',
      image: null,
      options: ["reduce", "improve", "expand"],
      answer: 2,
    },
    {
      id: 29,
      question: "He was ______ to hear the good news.",
      image: null,
      options: ["delighted", "disappointed", "angry"],
      answer: 0,
    },
    {
      id: 30,
      question: "The scientist conducted an ______ to test his theory.",
      image: null,
      options: ["experiment", "explanation", "expansion"],
      answer: 0,
    },
    {
      id: 31,
      question: "I regret not ______ harder for the exam.",
      image: null,
      options: ["study", "studying", "to study"],
      answer: 1,
    },
    {
      id: 32,
      question: "He's not used ______ early in the morning.",
      image: null,
      options: ["to waking up", "wake up", "waking"],
      answer: 0,
    },
    {
      id: 33,
      question: "The film was ______ than I expected.",
      image: null,
      options: ["more interesting", "most interesting", "interesting"],
      answer: 0,
    },
    {
      id: 34,
      question: "We won't leave ______ the rain stops.",
      image: null,
      options: ["when", "until", "while"],
      answer: 1,
    },
    {
      id: 35,
      question: "If she ______ earlier, she wouldn't have missed the bus.",
      image: null,
      options: ["woke up", "had woken up", "wakes up"],
      answer: 1,
    },
    {
      id: 36,
      question: "The book, ______ was written in 1950, is still popular.",
      image: null,
      options: ["that", "which", "who"],
      answer: 1,
    },
    {
      id: 37,
      question: "He's ______ to win the competition.",
      image: null,
      options: ["likely", "probably", "maybe"],
      answer: 0,
    },
    {
      id: 38,
      question: "She worked hard in order ______ the job.",
      image: null,
      options: ["getting", "to get", "get"],
      answer: 1,
    },
    {
      id: 39,
      question: "I can't find my keys. I must ______ them at home.",
      image: null,
      options: ["leave", "have left", "be leaving"],
      answer: 1,
    },
    {
      id: 40,
      question: "It's time for us ______.",
      image: null,
      options: ["leave", "to left", "to leave"],
      answer: 2,
    },
  ],
  test_4: [
    {
      id: 1,
      question:
        "<i>Emma's Weekend</i>\nEmma enjoys her weekends. On Saturday, she wakes up late and has a big breakfast. In the afternoon, she goes shopping or meets her friends. On Sunday, she visits her grandparents or stays at home to read a book. She loves relaxing before starting a new week.\n\n<b>What does Emma do on Saturday morning?</b>",
      image: null,
      options: [
        "She goes to work.",
        "She wakes up late.",
        "She visits her grandparents.",
      ],
      answer: 1,
    },
    {
      id: 2,
      question:
        "<i>Emma's Weekend</i>\nEmma enjoys her weekends. On Saturday, she wakes up late and has a big breakfast. In the afternoon, she goes shopping or meets her friends. On Sunday, she visits her grandparents or stays at home to read a book. She loves relaxing before starting a new week.\n\n<b>What does she do in the afternoon?</b>",
      image: null,
      options: [
        "She studies.",
        "She meets friends or goes shopping.",
        "She goes to the gym.",
      ],
      answer: 1,
    },
    {
      id: 3,
      question:
        "<i>Emma's Weekend</i>\nEmma enjoys her weekends. On Saturday, she wakes up late and has a big breakfast. In the afternoon, she goes shopping or meets her friends. On Sunday, she visits her grandparents or stays at home to read a book. She loves relaxing before starting a new week.\n\n<b>Who does Emma visit on Sundays?</b>",
      image: null,
      options: ["Her best friend", "Her grandparents", "Her teacher"],
      answer: 1,
    },
    {
      id: 4,
      question:
        "<i>Emma's Weekend</i>\nEmma enjoys her weekends. On Saturday, she wakes up late and has a big breakfast. In the afternoon, she goes shopping or meets her friends. On Sunday, she visits her grandparents or stays at home to read a book. She loves relaxing before starting a new week.\n\n<b>What does she like to do at home?</b>",
      image: null,
      options: ["Read a book", "Play football", "Cook dinner"],
      answer: 0,
    },
    {
      id: 5,
      question:
        "<i>Emma's Weekend</i>\nEmma enjoys her weekends. On Saturday, she wakes up late and has a big breakfast. In the afternoon, she goes shopping or meets her friends. On Sunday, she visits her grandparents or stays at home to read a book. She loves relaxing before starting a new week.\n\n<b>Why does she relax on Sundays?</b>",
      image: null,
      options: [
        "She is tired.",
        "She prepares for the new week.",
        "She doesn't like going out.",
      ],
      answer: 1,
    },
    {
      id: 6,
      question:
        "<i>The Eiffel Tower</i>\nThe Eiffel Tower is one of the most famous landmarks in the world. It was built in 1889 in Paris, France. The tower is 330 meters tall and attracts millions of tourists every year. At night, it lights up beautifully, making it a favorite spot for visitors.\n\n<b>The Eiffel Tower was built in ______.</b> (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "1889",
    },
    {
      id: 7,
      question:
        "<i>The Eiffel Tower</i>\nThe Eiffel Tower is one of the most famous landmarks in the world. It was built in 1889 in Paris, France. The tower is 330 meters tall and attracts millions of tourists every year. At night, it lights up beautifully, making it a favorite spot for visitors.\n\n<b>It is located in ______, France.</b> (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "paris",
    },
    {
      id: 8,
      question:
        "<i>The Eiffel Tower</i>\nThe Eiffel Tower is one of the most famous landmarks in the world. It was built in 1889 in Paris, France. The tower is 330 meters tall and attracts millions of tourists every year. At night, it lights up beautifully, making it a favorite spot for visitors.\n\n<b>The Eiffel Tower is ______ meters tall.</b> (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "330",
    },
    {
      id: 9,
      question:
        "<i>The Eiffel Tower</i>\nThe Eiffel Tower is one of the most famous landmarks in the world. It was built in 1889 in Paris, France. The tower is 330 meters tall and attracts millions of tourists every year. At night, it lights up beautifully, making it a favorite spot for visitors.\n\n<b>It attracts ______ of tourists every year.</b> (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "millions",
    },
    {
      id: 10,
      question:
        "<i>The Eiffel Tower</i>\nThe Eiffel Tower is one of the most famous landmarks in the world. It was built in 1889 in Paris, France. The tower is 330 meters tall and attracts millions of tourists every year. At night, it lights up beautifully, making it a favorite spot for visitors.\n\n<b>At night, the tower ______ beautifully.</b> (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "lights up",
    },
    {
      id: 11,
      question: "She ______ to school every day.",
      image: null,
      options: ["goes", "go", "going"],
      answer: 0,
    },
    {
      id: 12,
      question: "They ______ dinner right now.",
      image: null,
      options: ["eat", "are eating", "eats"],
      answer: 1,
    },
    {
      id: 13,
      question: "I ______ my homework yesterday.",
      image: null,
      options: ["do", "did", "done"],
      answer: 1,
    },
    {
      id: 14,
      question: "If it ______ tomorrow, we will stay inside.",
      image: null,
      options: ["rains", "rained", "raining"],
      answer: 0,
    },
    {
      id: 15,
      question: "She has ______ to Italy three times.",
      image: null,
      options: ["been", "went", "going"],
      answer: 0,
    },
    {
      id: 16,
      question: "The train ______ at 5:00 PM.",
      image: null,
      options: ["arrives", "arrived", "arriving"],
      answer: 0,
    },
    {
      id: 17,
      question: "We ______ already seen that movie.",
      image: null,
      options: ["has", "have", "had"],
      answer: 1,
    },
    {
      id: 18,
      question: "______ you ever visited London?",
      image: null,
      options: ["Do", "Have", "Has"],
      answer: 1,
    },
    {
      id: 19,
      question: "I wish I ______ more time.",
      image: null,
      options: ["have", "had", "has"],
      answer: 1,
    },
    {
      id: 20,
      question: "They ______ dinner when I arrived.",
      image: null,
      options: ["ate", "eat", "were eating"],
      answer: 2,
    },
    {
      id: 21,
      question: "She is ______ than her sister.",
      image: null,
      options: ["taller", "the tallest", "tall"],
      answer: 0,
    },
    {
      id: 22,
      question: 'The past tense of "teach" is ______.',
      image: null,
      options: ["teached", "taught", "teach"],
      answer: 1,
    },
    {
      id: 23,
      question: "I am looking forward to ______ you.",
      image: null,
      options: ["see", "seeing", "saw"],
      answer: 1,
    },
    {
      id: 24,
      question: "If I ______ you, I would take the job.",
      image: null,
      options: ["am", "was", "were"],
      answer: 2,
    },
    {
      id: 25,
      question: "We ______ TV when the phone rang.",
      image: null,
      options: ["watched", "were watching", "watch"],
      answer: 1,
    },
    {
      id: 26,
      question: 'The opposite of "hot" is ______.',
      image: null,
      options: ["cold", "warm", "cool"],
      answer: 0,
    },
    {
      id: 27,
      question: "You need to ______ the window; it's too cold.",
      image: null,
      options: ["open", "close", "break"],
      answer: 1,
    },
    {
      id: 28,
      question: "A doctor works in a ______.",
      image: null,
      options: ["school", "hospital", "library"],
      answer: 1,
    },
    {
      id: 29,
      question: "If you are very hungry, you should ______ something.",
      image: null,
      options: ["drink", "eat", "buy"],
      answer: 1,
    },
    {
      id: 30,
      question: 'The synonym of "happy" is ______.',
      image: null,
      options: ["sad", "cheerful", "angry"],
      answer: 1,
    },
    {
      id: 31,
      question: 'The antonym of "cheap" is ______.',
      image: null,
      options: ["expensive", "big", "light"],
      answer: 0,
    },
    {
      id: 32,
      question: "A person who writes books is a ______.",
      image: null,
      options: ["writer", "doctor", "singer"],
      answer: 0,
    },
    {
      id: 33,
      question: 'The past tense of "buy" is ______.',
      image: null,
      options: ["buyed", "bought", "buying"],
      answer: 1,
    },
    {
      id: 34,
      question: "She was very ______ when she won the prize.",
      image: null,
      options: ["excited", "boring", "tired"],
      answer: 0,
    },
    {
      id: 35,
      question: "We need to ______ a meeting.",
      image: null,
      options: ["cancel", "eat", "go"],
      answer: 0,
    },
    {
      id: 36,
      question: "This is the ______ book I have ever read.",
      image: null,
      options: ["most interesting", "more interesting", "interesting"],
      answer: 0,
    },
    {
      id: 37,
      question: "I don't have ______ money left.",
      image: null,
      options: ["some", "many", "any"],
      answer: 2,
    },
    {
      id: 38,
      question: "I can't find my keys. I must ______ them at home.",
      image: null,
      options: ["leave", "have left", "left"],
      answer: 1,
    },
    {
      id: 39,
      question: "I prefer tea ______ coffee.",
      image: null,
      options: ["than", "to", "over"],
      answer: 1,
    },
    {
      id: 40,
      question: "She is ______ to travel next month.",
      image: null,
      options: ["going", "will", "gone"],
      answer: 0,
    },
    {
      id: 41,
      question: "He is good ______ playing football.",
      image: null,
      options: ["in", "at", "on"],
      answer: 1,
    },
    {
      id: 42,
      question: "We will go out ______ it stops raining.",
      image: null,
      options: ["if", "however", "while"],
      answer: 0,
    },
    {
      id: 43,
      question: "The teacher made us ______ the homework.",
      image: null,
      options: ["do", "doing", "to do"],
      answer: 0,
    },
    {
      id: 44,
      question: "I haven't seen her ______ last summer.",
      image: null,
      options: ["for", "since", "during"],
      answer: 1,
    },
    {
      id: 45,
      question: "I was completely taken ______ by his sudden outburst.",
      image: null,
      options: ["off", "in", "aback"],
      answer: 2,
    },
    {
      id: 46,
      question:
        "His speech was completely ______ to the topic we were discussing. (RELEVANT) (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "irrelevant",
    },
    {
      id: 47,
      question:
        "The company's decision was ______ considering the financial losses. (JUSTIFY) (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "justifiable",
    },
    {
      id: 48,
      question:
        "The ______ of fast food has increased significantly in recent years. (CONSUME) (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "consumption",
    },
    {
      id: 49,
      question:
        "Her ______ to succeed is truly inspiring. (DETERMINE) (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "determination",
    },
    {
      id: 50,
      question:
        "The project failed due to a lack of ______. (MANAGE) (please input the answer ⬇️)",
      image: null,
      options: null,
      answer: "management",
    },
  ],
};

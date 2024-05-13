const firebase = require('firebase/app');

require('firebase/firestore');





// Initialize Firebase

 

const firebaseConfig = {
    apiKey: "AIzaSyDdlmmYVqulIxOegf9RtyWH41T8jTwLtFo",
    authDomain: "um6p-blog-ahmed.firebaseapp.com",
    projectId: "um6p-blog-ahmed",
    storageBucket: "um6p-blog-ahmed.appspot.com",
    messagingSenderId: "660581652668",
    appId: "1:660581652668:web:4911b940b3ba3000ac98b9"
  };
 

firebase.initializeApp(firebaseConfig);

 

const db = firebase.firestore();





// Data to add

 

const ArticleData =[

    {

      "id": 1,

      "title": "The Future of Space Travel: Exploring Beyond Our Solar System",

      "tags": ["space", "exploration", "technology"],

      "article": "In recent years, advancements in space technology have opened up new possibilities for exploring beyond our solar system. From breakthrough propulsion systems to innovative spacecraft designs, scientists and engineers are paving the way for humanity's next great leap into the cosmos."

    },

    {

      "id": 2,

      "title": "The Rise of Artificial Intelligence: Impact on Society and Ethics",

      "tags": ["artificial intelligence", "technology", "ethics"],

      "article": "Artificial intelligence is revolutionizing various aspects of society, from healthcare to transportation. However, as AI becomes more advanced, questions about its ethical implications and potential societal impacts are becoming increasingly important."

    },

    {

      "id": 3,

      "title": "Climate Change and Its Effects on Global Biodiversity",

      "tags": ["climate change", "environment", "biodiversity"],

      "article": "The consequences of climate change are becoming more evident, with rising temperatures and extreme weather events threatening global biodiversity. Conservation efforts are crucial in mitigating these impacts and preserving the planet's rich ecosystems."

    },

    {

      "id": 4,

      "title": "The Future of Work: Embracing Remote Collaboration and Automation",

      "tags": ["future of work", "technology", "remote work"],

      "article": "The COVID-19 pandemic has accelerated the shift towards remote work and automation. As organizations adapt to these changes, new opportunities for collaboration and efficiency are emerging, reshaping the future of work."

    },

    {

      "id": 5,

      "title": "The Promise and Perils of Gene Editing Technology",

      "tags": ["gene editing", "biotechnology", "ethics"],

      "article": "Gene editing technologies like CRISPR have the potential to revolutionize medicine and agriculture. However, ethical concerns surrounding the manipulation of the human genome and unintended consequences pose significant challenges to its widespread adoption."

    },

    {

      "id": 6,

      "title": "Exploring the Mysteries of the Deep Sea",

      "tags": ["oceanography", "marine biology", "exploration"],

      "article": "The deep sea remains one of the least explored regions on Earth, harboring countless mysteries and unique life forms. Scientists are continuously pushing the boundaries of exploration to uncover the secrets of this vast and enigmatic ecosystem."

    },

    {

      "id": 7,

      "title": "The Impact of Social Media on Mental Health",

      "tags": ["social media", "mental health", "psychology"],

      "article": "While social media platforms offer unprecedented connectivity and communication, they also raise concerns about their impact on mental health. From cyberbullying to addictive behaviors, understanding the psychological effects of social media is crucial in promoting well-being."

    },

    {

      "id": 8,

      "title": "The Quest for Renewable Energy: Challenges and Innovations",

      "tags": ["renewable energy", "sustainability", "technology"],

      "article": "Addressing climate change requires a transition to renewable energy sources such as solar and wind power. While significant progress has been made in renewable energy technologies, overcoming challenges such as intermittency and storage remains a key focus of innovation."

    },

    {

      "id": 9,

      "title": "The Art of Storytelling: Preserving Cultural Heritage Through Folktales",

      "tags": ["storytelling", "culture", "heritage"],

      "article": "Folktales have long served as a means of preserving cultural heritage and transmitting knowledge from one generation to the next. In an age of rapid globalization, the importance of storytelling in preserving diverse cultural traditions cannot be overstated."

    },

    {

      "id": 10,

      "title": "The Role of Blockchain Technology in Revolutionizing Finance",

      "tags": ["blockchain", "finance", "technology"],

      "article": "Blockchain technology has the potential to revolutionize the financial industry by providing greater transparency, security, and efficiency in transactions. As blockchain applications continue to evolve, they are reshaping the way we think about finance and digital assets."

    },

        {

          "id": 11,

          "title": "The Future of Space Travel: Exploring Beyond Our Solar System",

          "tags": ["space", "exploration", "technology"],

          "article": "In recent years, advancements in space technology have opened up new possibilities for exploring beyond our solar system. From breakthrough propulsion systems to innovative spacecraft designs, scientists and engineers are paving the way for humanity's next great leap into the cosmos. The discovery of exoplanets orbiting distant stars has fueled excitement about the prospect of finding habitable worlds and even extraterrestrial life. Additionally, private space companies are playing an increasingly significant role in space exploration, with ambitious plans to establish colonies on the Moon and Mars. As humanity ventures further into the depths of space, the challenges and opportunities awaiting us are boundless."

        },

        {

          "id": 12,

          "title": "The Rise of Artificial Intelligence: Impact on Society and Ethics",

          "tags": ["artificial intelligence", "technology", "ethics"],

          "article": "Artificial intelligence is revolutionizing various aspects of society, from healthcare to transportation. However, as AI becomes more advanced, questions about its ethical implications and potential societal impacts are becoming increasingly important. Concerns about job displacement, algorithmic bias, and autonomous weapons have prompted calls for responsible AI development and regulation. Moreover, the rapid pace of AI innovation has outpaced our understanding of its long-term consequences, raising uncertainties about its implications for humanity. Addressing these challenges requires interdisciplinary collaboration and a proactive approach to ensure that AI benefits society as a whole."

        },

        {

          "id": 13,

          "title": "Climate Change and Its Effects on Global Biodiversity",

          "tags": ["climate change", "environment", "biodiversity"],

          "article": "The consequences of climate change are becoming more evident, with rising temperatures and extreme weather events threatening global biodiversity. Conservation efforts are crucial in mitigating these impacts and preserving the planet's rich ecosystems. From coral reefs to rainforests, diverse habitats are under threat from habitat loss, pollution, and invasive species. The loss of biodiversity not only diminishes the resilience of ecosystems but also undermines essential ecosystem services such as pollination and carbon sequestration. Addressing climate change requires collective action at the global level, with a focus on reducing greenhouse gas emissions and promoting sustainable land-use practices. By protecting biodiversity, we can safeguard the web of life upon which humanity depends."

        },

        {

          "id": 14,

          "title": "The Future of Work: Embracing Remote Collaboration and Automation",

          "tags": ["future of work", "technology", "remote work"],

          "article": "The COVID-19 pandemic has accelerated the shift towards remote work and automation. As organizations adapt to these changes, new opportunities for collaboration and efficiency are emerging, reshaping the future of work. Digital tools and platforms enable remote teams to collaborate seamlessly across geographical boundaries, enhancing flexibility and productivity. Moreover, automation technologies such as artificial intelligence and robotics are transforming industries ranging from manufacturing to finance. While these developments offer potential benefits in terms of cost savings and innovation, they also raise concerns about job displacement and inequality. Navigating the transition to the future of work requires proactive measures to reskill workers, promote inclusive growth, and ensure that technological advancements benefit everyone."

        },

        {

          "id": 15,

          "title": "The Promise and Perils of Gene Editing Technology",

          "tags": ["gene editing", "biotechnology", "ethics"],

          "article": "Gene editing technologies like CRISPR have the potential to revolutionize medicine and agriculture. However, ethical concerns surrounding the manipulation of the human genome and unintended consequences pose significant challenges to its widespread adoption. While gene editing holds promise for treating genetic diseases and enhancing crop yields, questions about safety, equity, and consent remain unresolved. The specter of designer babies and genetically modified organisms raises ethical dilemmas about the limits of human intervention in the natural order. Furthermore, the uneven distribution of gene editing technologies could exacerbate existing health and social disparities. As we unlock the potential of gene editing, it is essential to approach its applications with caution and foresight to ensure that they align with our values and aspirations as a society."

        },

        {

          "id": 16,

          "title": "Exploring the Mysteries of the Deep Sea",

          "tags": ["oceanography", "marine biology", "exploration"],

          "article": "The deep sea remains one of the least explored regions on Earth, harboring countless mysteries and unique life forms. Scientists are continuously pushing the boundaries of exploration to uncover the secrets of this vast and enigmatic ecosystem. From hydrothermal vents teeming with bizarre creatures to the abyssal plains inhabited by elusive species, the deep sea is a realm of discovery and wonder. Understanding the ecological dynamics of the deep sea is essential for informing conservation efforts and sustainable resource management. Moreover, the deep sea holds potential for valuable biotechnological discoveries, from novel pharmaceuticals to biomimetic materials. By unraveling the mysteries of the deep sea, we can gain insights into the origins of life on Earth and the potential for life elsewhere in the universe."

        },

        {

          "id": 17,

          "title": "The Impact of Social Media on Mental Health",

          "tags": ["social media", "mental health", "psychology"],

          "article": "While social media platforms offer unprecedented connectivity and communication, they also raise concerns about their impact on mental health. From cyberbullying to addictive behaviors, understanding the psychological effects of social media is crucial in promoting well-being. The curated and idealized portrayals of life on social media can contribute to feelings of inadequacy and low self-esteem, especially among young people. Moreover, the constant barrage of notifications and information overload can lead to anxiety and stress. Research suggests that excessive use of social media may be linked to depression, loneliness, and other mental health issues. Balancing the benefits and risks of social media requires mindful usage, digital literacy, and support networks both online and offline."

        },

        {

          "id": 18,

          "title": "The Quest for Renewable Energy: Challenges and Innovations",

          "tags": ["renewable energy", "sustainability", "technology"],

          "article": "Addressing climate change requires a transition to renewable energy sources such as solar and wind power. While significant progress has been made in renewable energy technologies, overcoming challenges such as intermittency and storage remains a key focus of innovation. Advances in battery technology, grid management, and renewable energy integration are enabling the scaling up of renewable energy systems. Furthermore, emerging technologies such as floating offshore wind farms and concentrated solar power offer new possibilities for generating clean energy. However, the transition to renewable energy also requires addressing socio-political barriers, market dynamics, and energy infrastructure investment. By embracing renewable energy solutions, we can reduce carbon emissions, create green jobs, and build a more sustainable future for generations to come."

        },

        {

          "id": 19,

          "title": "The Art of Storytelling: Preserving Cultural Heritage Through Folktales",

          "tags": ["storytelling", "culture", "heritage"],

          "article": "Folktales have long served as a means of preserving cultural heritage and transmitting knowledge from one generation to the next"}

     

  ]

 

 

// Function to add data to Firestore

 

const addArticlesToFirestore = async (ArticlesData)=> {

  try {

 

    // Loop through each job and add it to Firestore

 

    for (const article of ArticlesData) {

 

      // Use set with merge to add or update the document

 

      await db.collection('Articles').doc(article.id.toString()).set(article,{ merge : true});

 

    }

 

    console.log("Articles added to Firestore successfully!");

 

  } catch (error) {

 

    console.error("Error adding Articles to Firestore: ",

error);

 

  }

 

};

// Call the function to add jobs data to Firestore

 

addArticlesToFirestore(ArticleData);
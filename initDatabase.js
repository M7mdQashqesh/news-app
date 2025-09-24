const sql = require("better-sqlite3");

const db = new sql("news.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL UNIQUE,
  content TEXT NOT NULL,
  image TEXT NOT NULL,
  author TEXT NOT NULL,
  author_email TEXT NOT NULL,
  created_date INTEGER NOT NULL,
  slug TEXT NOT NULL
  )`).run();

const dummyArticles = [
  {
    id: 1,
    title: "Breaking News: Market Hits Record High",
    content: "The stock market reached a new all-time high today, driven by strong performance in the tech sector.",
    image: "businessImg.src",
    author: "John Doe",
    author_email: "john.doe@example.com",
    created_date: Date.now(),
    slug: "market-hits-record-high",
  },
  {
    id: 2,
    title: "New Movie 'Galaxy Quest' Premieres",
    content: "The highly anticipated sci-fi movie 'Galaxy Quest' premiered last night to rave reviews.",
    image: "entertainmentImg.src",
    author: "Jane Smith",
    author_email: "jane.smith@example.com",
    created_date: Date.now() - 86400000, // 1 day ago
    slug: "galaxy-quest-premieres",
  },
  {
    id: 3,
    title: "Health Benefits of a Mediterranean Diet",
    content: "A new study confirms the numerous health benefits of following a Mediterranean diet, including improved heart health.",
    image: "healthImg.src",
    author: "Dr. Emily White",
    author_email: "emily.white@example.com",
    created_date: Date.now() - 172800000, // 2 days ago
    slug: "health-benefits-mediterranean-diet",
  },
  {
    id: 4,
    title: "Scientists Discover New Planet",
    content: "Astronomers have discovered a new exoplanet that could potentially support life, located in a nearby star system.",
    image: "scienceImg.src",
    author: "Professor Green",
    author_email: "prof.green@example.com",
    created_date: Date.now() - 259200000, // 3 days ago
    slug: "scientists-discover-new-planet",
  },
  {
    id: 5,
    title: "Tigers Win Championship in Overtime Thriller",
    content: "The Tigers clinched the championship title in a nail-biting overtime victory against the Lions.",
    image: "sportsImg.src",
    author: "Chris Black",
    author_email: "chris.black@example.com",
    created_date: Date.now() - 345600000, // 4 days ago
    slug: "tigers-win-championship",
  },
  {
    id: 6,
    title: "AI Breakthrough: New Model Understands Human Emotions",
    content: "A groundbreaking AI model has been developed that can accurately interpret and respond to human emotions.",
    image: "technologyImg.src",
    author: "Alex Ray",
    author_email: "alex.ray@example.com",
    created_date: Date.now() - 432000000, // 5 days ago
    slug: "ai-breakthrough-understands-emotions",
  },
];

const insertData = () => {
  const insertCommand = db.prepare(`
    INSERT INTO articles VALUES (
      @id,
      @title,
      @content,
      @image,
      @author,
      @author_email,
      @created_date,
      @slug
    )`);

  for (const article of dummyArticles) {
    insertCommand.run(article);
  }
};

insertData();

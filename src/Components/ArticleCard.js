import React from "react";

const articleData = [
  {
    "source": {
      "id": null,
      "name": "Boston Herald"
    },
    "author": "Tribune News Service",
    "title": "Ask the Pediatrician: What to know about mental health in teen athletes",
    "description": "Mental illness is an extremely common and important issue among teenagers.",
    "url": "https://www.bostonherald.com/2023/09/19/ask-the-pediatrician-what-to-know-about-mental-health-in-teen-athletes/",
    "urlToImage": "https://www.bostonherald.com/wp-content/uploads/2023/09/LIFE-HEALTH-PEDIATRICIAN-QA-DMT.jpg?w=1024&h=575",
    "publishedAt": "2023-09-19T16:27:28Z",
    "content": "By Dr. Drew Watson, American Academy of Pediatrics\r\nMental illness is an extremely common and important issue among teenagers. Although sports and physical activity have tremendous mental health bene… [+2470 chars]"
  },
  {
    "source": {
      "id": "time",
      "name": "Time"
    },
    "author": "Jenny Anderson",
    "title": "Many American Parents Have No Idea How Their Kids Are Doing in School",
    "description": "Too many American parents are shockingly in the dark about their child's actual academic performance",
    "url": "https://time.com/6308834/american-parents-how-their-kids-doing-in-school/",
    "urlToImage": "https://api.time.com/wp-content/uploads/2023/08/kid-school-classroom.jpg?quality=85",
    "content": "In third grade, Cristyonna mostly got As and Bs on her report cards. At parent-teacher evenings, teachers were positive about her learning. So Shareeda Jones, her mother, was surprised when they move… [+12054 chars]"
  },
  {
    "source": {
      "id": "time",
      "name": "Time"
    },
    "author": "Caroline Leaf",
    "title": "5 Steps Parents Should Take to Help Kids Use AI Safely",
    "description": "We have failed to prepare ourselves and our children for the advent of social media. We can't do the same for AI, writes Caroline Leaf.",
    "url": "https://time.com/6310886/parents-kids-ai-safety-essay/",
    "urlToImage": "https://api.time.com/wp-content/uploads/2023/09/Ai-Parent-Children.jpg?quality=85",
    "content": "Just as older generations have had to navigate the internet and social media, our children will have to learn how to interact with AI. We cannot escape this new era in the technological revolution; c… [+5719 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "MakeUseOf"
    },
    "author": "Sean Mitchell",
    "title": "The Smartwatch Metrics You Should Monitor at Each Age Group",
    "description": "As you go through life, the health metrics that are most important change. Here's how to use your smartwatch to track what's currently most important.",
    "url": "https://www.makeuseof.com/smartwatch-metrics-each-age-group/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/09/smartwatch-being-worn-on-a-hairy-armed-person.jpg",
    "content": "It's no secret: as you grow and change, so should the metrics you're monitoring on that nifty smartwatch of yours. Yep, what a 20-year-old should keep tabs on can be vastly different from what someon… [+6218 chars]"
  },
  {
    "source": {
      "id": "the-washington-post",
      "name": "The Washington Post"
    },
    "author": "Laura Meckler",
    "title": "For many home-schoolers, parents are no longer doing the teaching",
    "description": "Money from investors, nonprofits and vouchers has fueled home-schooling's growth. In many cases, parents aren't doing the teaching.",
    "url": "https://www.washingtonpost.com/education/interactive/2023/homeschooling-microschools-pods-esa-vouchers/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/XKP4PNG6725Q5RGHIXYBLH3MOM.jpg&w=1200",
    "content": "GOFFSTOWN, N.H. Parents pull around the circular driveway to drop their children off in the morning. Students climb the steps and hang their backpacks on hooks. Katy Rose greets her charges and sends… [+22153 chars]"
  },
  {
    "source": {
      "id": null,
      "name": "MakeUseOf"
    },
    "author": "Fatih Küçükkarakurt",
    "title": "An Introduction for Parents Talking to Children About Online Safety",
    "description": "How do you keep kids safe online? It's a tricky thing to master, so here's a guide to approaching cybersecurity with your youngsters.",
    "url": "https://www.makeuseof.com/parents-approach-children-about-online-safety/",
    "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/08/parent-and-children-security.jpg",
    "content": "The internet plays a central role in most children's lives. With this trust in online platforms, parents have a crucial role in keeping their children safe in the virtual world.\r\nSo how can parents e… [+7577 chars]"
  }
];

export default function ArticleCard() {
  const limitedArticles = articleData.slice(0, 6);

  return (
    <div className="container">
      {limitedArticles.length > 0 ? (
        limitedArticles.map((article, index) => (
          <div className="card has-background-info my-3 px-3" key={index}>
            <div className="columns">
              <div className="column">
                <figure className="image is-128x128">
                  <img
                    src={article.urlToImage || "https://bulma.io/images/placeholders/96x96.png"}
                    alt="Placeholder"
                  />
                </figure>
              </div>
              <div className="column">
                <div className="article has-text-centered pt-0 pr-0 mr-0 has-text-dark">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </a>
                  <p>{article.description}</p>
                  <p><b>Author:</b> {article.author}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
}
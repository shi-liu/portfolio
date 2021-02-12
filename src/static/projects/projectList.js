import web from '../../static/images/web.jpg';
import draft from '../../static/images/draft.jpg';
import html from '../../static/images/html.jpg';
import ace from '../../static/images/ace.PNG';

const projects = [
    {
        title: "Ace Activity",
        duration: "2 months, Oct - Dec 2020",
        img: ace,
        intro: `The project is made for easy tracking of daily activities and its duration 
        with optional notes.`,
        description: `This is a full stack project based on React and Firebase cloud functions. The data is shown in a tabular format for the
        sake of simplicity. The front end utilizes ReactJs along with Material UI 
        while the backend is built on Firebase cloud storage with their cloud functions. 
        In regards to the security settings, its authentication relies on 
        the Firebase authentication system and http-only cookies for basic defense against common attacks. 
        I did not deploy this project due to the fact that Google will not support cloud functions in 
        the future for a free-tier plan. Regardless, this was an excellent project to learn about connecting 
        all the technologies together to get a fully functioning app working.`,
        reflection: `During the development, there were two main challenges I had to overcome. 
        First being the account creation and it was honestly difficult coming up with a custom jwt-based 
        authentication system that is secure against say, cross-site-attacks 
        but I worked around that problem by using Google's Firebase authentication solution. 
        To provide better security, I looked into http-only cookies as well and used that instead of 
        local storage which is frowned upon for such important data. Second challenge is the 
        implementation of react-redux due to learning concepts on the go and the boilerplates made it 
        somewhat confusing at first. But in the end, it was overall smooth managing the states 
        and the UI according to the backend.`,
        technologies: "Material UI, ReactJs, React Redux, ExpressJs, Firebase"
    },
    {
        title: "Search Engine",
        duration: "1 month, Dec 2019",
        img: html,
        intro: `Created a program that parse through thousands of HTML documents to query for 
        related keywords.`,
        description: `This project is based on a course's final project to manage large amounts of data 
        and learn efficient methods (such as indexing) of dissecting it so that the run time on searching for keywords is 
        below 1 second. And in terms of the ranking system for the keywords, I implemented a system 
        that is based on tf-idf & cosine similarity to try and mimic results that would be similar to 
        industry search engines.`,
        reflection: `The whole program was a challenge in a sense that we're dealing with large amounts of data 
        and a strict condition of below 1 second run time to search for the keywords. But breaking down 
        the requirements and tackling it one at a time worked really well. First I indexed the entire collection 
        of about 2,000 html files. Then I implemented the ranking system. Along the way, there were many 
        iterations to optimize the run time. The first iteration took around 5.5 seconds because I loaded 
        the entire index into a dictionary before the calculations. The second iteration gotten rid of that 
        process and I added extra conditionals along with more efficient file reading (gotten rid of readlines()), 
        this iteration reduced the time by 2 seconds to 3.5 seconds. The third and final iteration worked 
        on the conditionals where it checks for the index term as the code reads the file. This step 
        was the key factor and it cut down 3 more seconds and now the whole program takes on average .5 seconds 
        to search for the terms.`,
        technologies: "Python"
    },
    {
        title: "Web Crawler",
        duration: "Nov 2019, 2 weeks",
        img: web,
        intro: `Scraped and parsed the university’s domain and its entire subdomains for data.`,
        description: `This was a collaborative project aimed to create a web crawler that would be
        reasonably resilient against bot unfriendly features such as endless loops/redirects.
        The crawler takes in a handful of the university's domains (UCI) and traverse through all of its 
        subdomains while abiding the rules. The bot operated for about 8 hours to visit 
        every subdomain.`,
        reflection: `It was an interesting experience to parse website data at such scale even though
        it was only an university domain yet it yielded so much data. It gave me a glimpse of the traps
        and errors that the crawler encounters which required some critical thinking to solve. While
        the bot was simple, I noticed how powerful it could be when applied to other context such as
        gathering/filtering out data which is pretty important since the information over internet
        is growing at a swift pace.`,
        technologies: "Python"
    },
    {
        title: "Software Requirements",
        duration: "3 months, March - June 2019",
        img: draft,
        intro: `Authored 50 page software requirements with teammates aimed to connect homeless
        people with homeless service providers.`,
        description: `This was a group project that involved mock scenario where a group
        of students acted as an organization that is developing an app to connect homeless people
        to homeless service providers. During the elicitations, we would have to be as professional as
        possible to simulate the industry experience. After each meeting, there would be more information
        and the document would be refactored according to those information. The end product included
        all of the requirements, models (goal, usage, domain), dependencies, user characteristics and so on.`,
        reflection: `The elicitations were helpful to simulate the process of requirements gathering.
        The key points I learned from this is how crucial communication is and change is always a factor
        that always has to be accounted for. Nothing is set in stone until the end. During the write up initally,
        there were many ambiguities regarding the product functions, and user models. We then learned to
        ask simple and direct questions to account for those ambiguities early on. Overall, efficient communication
        will save time, and handle changes during the requirement drafting process.`,
        technologies: `Lucidchart`
    }

]

export default projects;
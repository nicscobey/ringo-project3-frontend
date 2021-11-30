# CardStack (A Flashcards App)

CardStack allows a user to create a deck of flashcards, pulling word definitions from an API, and review the definitions of a deck through a practice interface. The application features full CRUD (create, read ,update, and delete) functionality for the deck model and partial CRUD (create, read, and delete) for the card model. Users can create, read, update, and delete a deck of cards. Additionally, they can create, read, and delete cards that are assigned to a given deck.

View this project's back-end repository [here](https://github.com/nicscobey/ringo-project3-backend).

## Team Members

- [Greg Moreta](https://github.com/Gregorio-Moreta): Back-End Developer
- [Maximillian Rice](https://github.com/HeyItsJustMax): Front-End Developer
- [Nic Scobey](https://github.com/nicscobey): Project Manager & Front-End Developer

## Technologies Used

- React
- JavaScript
- Material UI
- HTML
- CSS
- connection to third-party API
- Authentication & authorization

## Getting Started

To access the application, click [here](https://ringo-flashcards.netlify.app/). After creating a deck, add a few cards to it, and then practice reviewing the cards you've created - and who knows? Maybe you will expand your vocabulary!

## Challenges

**Nic's Reflections**

- **Passing data:** With several data models, it was challenging to ensure that each page had the correct data
- **Loading data:** Aside from passing data, it was important to ensure that a page refresh did not cause a page re-render to fail. I needed to find several workarounds to ensure a seamless user experience.
- **Owning the Repo:** As the repo owner, I needed to pay careful attention to ensure that each commit positively contributed to the project, or that we otherwise were communicating with one another about what was needed after subsequent commits.

**Max's Reflections:**

- **Full and complete understanding of how our app works:** I understand it on a general sense but have a really hard time going through line by line and knowing/understanding what each bit of code is contributing to the entirety of the project.
- **Authorization:** Greg did a really great job on the backend and Nic set me up really nicely to do the signup/login pages but I had a hard time linking them up and ultimately we decided it would be best to leave that part out of the project. I know that is still something the group wants to accomplish on our own after presentations.
- **Support:** I feel like Nic and Greg did an amazing job supporting me when I was struggling or had issues and I feel like I fell short in being able to help them with their bugs/bumps in the road.

## Next Steps

There are several potential next steps for this project to further cultivate an excellent user experience and increase the overall usability for users:

- Add user authentication, allowing for user-specific flashcard decks
- Allowing users to choose which definition is applied to the flashcard
- Allowing users the option to manually type a definition or insert an image instead of pulling data from the Dictionary API

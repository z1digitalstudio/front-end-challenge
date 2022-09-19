# Z1 Front-end Challenge

![](https://github.com/z1digitalstudio/front-end-challenge/blob/main/public/cover.jpg?raw=true)

Here in Z1 we love music! We want to share of fav tunes with you, but for that **we need your help to finish our music application**.

We want you to experiment as much as possible the way we work. In your day-to-day work at Z1, there'll be occasions when you will need to jump in the middle of a project to implement a new feature.

In situations like those it's important you **take your time for gaining context**, understanding how the project works and what needs to be accomplished **before rushing to start writing code**.

So for this technical challenge, you'll be doing exactly that! You're responsible for adding **two brand new features to our music application**.

* [The Challenge](#The-Challenge)
* [Design resources](#Design-resources)
* [API](#API)
* [Requisites](#Requisites)
* [Stack and tech considerations](#Stack-and-tech-considerations)
* [Evaluation criteria](#Evaluation-criteria)
* [About Z1](#About-Z1)
* [Contact](#Contact)

**To start**:

Star by **forking this project**. Remember to read the requisites carefully before starting writing code. Take a look at at `package.json` scripts to learn how to launch the project.

Remember to **replace this README** with another one containing anything a person needs to know about how to launch the project as well as any relevant information about your thought process and the decisions you made to get to a solution.

## The Challenge

What you need to do is:

### Feature #1: Display the song list 🎶

- You will need to **fetch the songs and display them** accordingly to the design
- Also, we need the user to be able to **save its fav tunes**. Unfortunately, **our endpoint does not provide a method** to do so. So we need to **find an alternative** method to persist user’s faves.

### Feature #2: Let's the music play! 🔊

- By clicking on the play button on each card, the song needs to be load on the player and start playing
- Player needs to be fully functional: user needs to be able to **play, pause and change the second of reproduction**

## Design resources
Our friends from the design team prepared **for how we want things to look like** and made a very fancy UI.
- [Figma Design](https://www.figma.com/file/0cV6hohYTFHIvKqzHHRrtn/Front-End-Team-challenge) 

## API
A **GraphQL endpoint** our backend friends created **for fetching our favorite songs**
- `https://api-frontend-challenge.herokuapp.com/graphql`

## Requisites

This is a more detailed list of all the requisites you should bear in mind for creating an incredible product. **Feel free to go as further as you feel comfortable** and show us what you can do!

### Make things work! 👌

- User should be able to:
  - see list of songs
  - listen to any song they choose
  - play and pause song
  - control track
  - mark a song as favorite

### Prepare for a challenge! 🚀

- User should be able to:
  - move between songs with the prev/next buttons of the audio player

### Go for an extra mile! 🔥

- App should look good in all window sizes
- Add unit or integration tests
- Add some micro interactions and animations
- Be careful about accessibility
- Be careful about your markup semantics

## Stack and tech considerations

![image](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![image](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![iamge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

- This project is written in **Next.js**
- The project **includes Typescript**, because it's a usual part of our stack. If you haven't work with Typescript before, don’t let that discourage you! We understand that, as developers, part of our job is facing new things constantly and **we will have in consideration you may never worked with it**.
- Likewise, **we usually work with GraphQL**. If you know your way around it, that's great! If not, you can still give it a try. We expect you're be able to set up a client to consume the GraphQL endpoint we've set for you. You can check `apollo` or `react-query` for that task, for example.
- As **for styling**, feel free to **go with your favorite flavor**. Though we use `styled-components` is not mandatory you do so too. Please **do not relay on css-frameworks or components libraries** for this.
- User should be able to use the app, so you'll need to **deploy your project**! You can choose any pretty straightforward method for this, like `Vercel`, `Github pages` or similar.
- **You can add unit or integration tests** to the mix
- You can **go with the structure we have set up**. But **feel free to modify the file directory**, add, delete or merge folders if you want and, in short, structure code to your liking.
- Some **basic tooling has been set up** for you, but **feel free to adapt it** to your preference (for example by adding/removing ESLint rules) or adding new tools you think may be relevant to create the best DX experience.

👉 Lastly, remember **this challenge is the same for all technical levels**, so it's possible you're not familiar with all tools and concepts mentioned, and not all requisites and technical criteria applies to you. **Don't feel overwhelmed and make your best shot!**

## Evaluation criteria

- Your **code does work** accordingly to the product specifications
- Your **code does not throw any errors** or warnings in the console
- You **understand the requirements** the features needs to meet and are able of implement them
- Your **care about your markup structure** and you **write good css**. Css is important, people!
- You **care for the design** our team provide **and make it look at its best**
- In general, you **care for detail**. Coding is caring. We expect you care for **accessibility**, semantics and don't leave anything to chance.
- Your code is **well-written and structured**. Also you understand the balance between **clever, reusable code** and easy to read, change and maintain code.
- You're able to **make decisions** about your implementation, **understand the tradeoffs** involved and be able to **reason about them**. Code is a team game!
- In the same line, your care about **documenting your decisions** and your approach to the problem if necessary.
- You're able to **investigate about the right tools** for the job and learn to use them by **reading documentation**. We'll value you **use as less external libraries as possible**.
- You are committed to **create a appealing and smooth experience** for the user, and you know a lot of things adds up for this to be accomplished: performance, cover for all application states (empty, error, loading states), micro-interactions...
- You feel comfortable working with git, **commit frequently and clearly**. And your commits make sense as a unit. You make check **Conventional commits** for your commit messages. Your knowledge of the git and Github workflow is a plus!

## About Z1

Here at z1 we make our best to offer the ideal environment for you to developing both professionally and personally. That's why we offer:

⏰ **Flexible working hours**

Life is not rigid; why should your work schedule be? We firmly believe that develop a brilliant career is compatible with having time to enhance other aspects of our lives.

🎓 **Learning and training plan**

Technology continually evolves, and so do we. We are not afraid of change, and we know the only way to stay up to date is to invest time on research, and study new trends.

🤙 **Good vibes only**

Empathy is one of our core values. This means listening to each other, having fun together, and trying to make everybody's life enjoyable while working on exciting projects.

## Contact

Follow us! we are on [Linkedin](https://www.linkedin.com/company/z1digitalstudio), [Twitter](https://twitter.com/z1digitalstudio) and [Instagram](https://www.instagram.com/z1digitalstudio/).

Also, we show our work on [Dribble]() (we are part of the same [Tiny](https://www.tinycapital.com/) family 😉) and we share our knowledge on [Medium](https://medium.com/z1digitalstudio)

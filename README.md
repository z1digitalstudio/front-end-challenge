# Z1 Music App 🎶

I love music too 🥁! So I want to share with all Z1 team my particular version of this music application. Come in, **enjoy my code and your fav tunes**!

## ▶️ To start

It is time you could hear your fav tunes. I suggest you two essay ways to do it: 

-  Star by **cloning or downloading this project**. Remember to execute this commands in your terminal before start: 

```bash
  yarn && yarn dev
```

Z1 Music App is now running at http://localhost:3000!

- Or go to the live demo here: [Z1 Music App](http://music-app-psi.vercel.app/)

<br>

## ▶️ LogBook

<br>
I go into this project in which, for ten days, it will be my second home. My first goal is to know everything releated with this project: technologies, architecture and, of course, what are the features I have to be involved in 🤖. My main mission is just to add value to this Music app but without losing its initial essence. 

<br>

**Schedule my work ⏳️**

So, once I have got started with the project, it's time to schedule my work. I use `Jira` on a daily basis, but in this case since I'm the only developer on the team at the moment, I have decided to use `Trello`. 
- You can see [here](https://trello.com/invite/b/LgfxRqdy/ATTI5cfd25af1bf88a9c4a7b901dbddeafa4C6C29852/music-app-planning) what is the progress of my application.

I expect that when you read these lines, all the tasks will be on the Done list.
I am using a `Kanban methodology` because I think it is the best option to organize my tasks on my own and reach to the deadline 🏁.

<br>

**Deploy Z1 Music App 🌍**

My following task is to deploy my project so that the user is able to use the app.
As you will see in this logbook, I have preferred to do the tasks related with infrastructure and structure first. This helps me with the project set up before I start with the code. 

As a deployment method, I have choosen `Vercel` instead of `Github pages` or another similar platform because of the advantages of this technology. With `Vercel`, for example: 
- I can preview my site in every push since it build a unique URL for every commit and PR.

- or I can generate rollbacks to any version, but without the need to revert commits or data changes.


> Source: [Bejamas Site](https://bejamas.io/compare/github-pages-vs-vercel/)

<br>

**Config commit linter ⬆️**

Getting a clean code is the goal of every developer, but it is so important, as well, to have a clean git log. Commits rules help to improve teamwork and make sense as a unit to your commit messages. So, I have decided to use `CommitLint` and `Husky` to linting my commits. 

[`Conventional commits`](https://www.conventionalcommits.org/en/v1.0.0/) help us to follow certain rules in your commits. If we try to make a commit that does not follow the convention we have chosen, it will fail. Meanwhile, [`Husky`](https://typicode.github.io/husky/#/) is a git hooks to execute rules when we add a commit message. 

> Source: [Medium](https://medium.com/dottech/mejorando-los-mensajes-de-git-commit-con-husky-y-commitlint-7bddf6ab22c2)

<br>

**CI with Github Actions 🚀**

For me it is really significant to have a clean code and a working application without any bugs or error/warning messages. In addition to using git hooks before each commit, I find it very necessary to check the code on each PR automatically. With this objective, `Continuous Integration` with [`Github Actions`](https://github.com/features/actions) allows me to meet minimum quality standard. For example, run test or linter before merging each branch.

> Source: [Github Docs](https://docs.github.com/en/actions/using-workflows/about-workflows)

<br>

## ▶️ Requisites

- User should be able to:
  - see list of songs
  - listen to any song they choose
  - play and pause song
  - control track
  - mark a song as favorite

- User should be able to:
  - move between songs with the prev/next buttons of the audio player

- App should look good in all window sizes
- Add unit or integration tests
- Add some micro interactions and animations
- Be careful about accessibility
- Be careful about your markup semantics


# Stumbl (Front End)

Stumble Front End application built in Vue.js by Skookum Denver.

## Purpose

Stumbl is a simple SPA to be used by attendees of [Denver Startup Week](https://www.denverstartupweek.org/) to improve information discovery, increase attendee engagement, and increase visibility for sponsors.  Stumbl will allow users to view venue and session information.  It will also allow venues to manage the information presented to users about their business, giving them further control over their image.

## Team Objectives

* 📝 **Document code heavily** to educate the next developer
* 🤔 Try to work on **unfamiliar technology** to learn new tech
* 🕵️‍ Help teammates **discover solutions** - don't just solve for them if you know it
* 🛠 **Resist tools** like scaffolding CLIs and prebuilt solutions.  Handroll components when possible to learn the technology under the hood.
* 🎉 **Teach each other and celebrate each other's successes!**

## Issue Tracking

We use Github Issues to track our tasks.  We will develop and groom these work items as a team each friday.

## Important Dates

* ⌨️ **June-ish**: Vue 3.x released - *Class based components, built-in ts support*
* ✅ **July 15th**: QA Ready - *Reach out to a couple DSW Venues to get them to use Stumbl*
* 🚀 **August 16th**: STUMBL development completed
* 🎉 **September 16th**: Denver Startup Week Begins

# Development

## Run the application

```
// clone this repository
npm install
npm run dev
open http://localhost:8080/
```

## Branching Strategy: Git Flow

We'll utilize [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/), which keeps branches organized with the following 5 branches/prefixes:

* master
* develop
* release/
* feature/
* hotfix/

In short, most work will be on a `feature/` branch, which comes off of `develop`.  For example, `feature/11-custom-map-points`, where `11` indicates the issue number, followed by a short description.


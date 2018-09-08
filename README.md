# React Portfolio - Part 1 - Syntax Basics

## Context
María Santiago, a talented designer and full stack developer, has become interested in React and wants to convert her vanilla html/css/js portfolio to React components. She is unfamiliar with the technology, and she has contracted you, a specialized front-end developer, to help her with this project.

You will rebuild her portfolio project from start to finish, starting with basic JSX components and ending with stateful components that implement simple interactivity.

Here is a demo of the sequence of tasks: [Maria Portfolio](https://vanilla-to-react.surge.sh/). In order for your components to render correctly, you will need to have a similar HTML structure with similar class names. You will not need to write CSS for this project because María already has the class names and html structure.

## The Assignment
You will need to convert the HTML from this site, [React Portfolio Part 1](https://vanilla-to-react.surge.sh/portfolio-v1.html), into JSX components.

```
- PortfolioFixed
- PortfolioContent
  - Header
  - Summary
  - ContactInfo
```

### Setup Instructions

1. Project Setup from Terminal
```sh
# (1) Install create-react-app as a global command-line application
npm install -g create-react-app

# (2) Navigate to your assignments directory
cd ~/muktek/assignments

# (3) create the application and cd into it
create-react-app assignment--react-basics-portfolio
cd assignment--react-basics-portfolio

# (4) Download project files and unzip them into the src directory
curl https://raw.githubusercontent.com/muktek/assignment--react-portfolio-01-syntax-basics/master/project-files.zip > project-files.zip

unzip project-files.zip -d ./src/

# (5) return to project root directory and start the react task runner
cd ..
npm start
```

2. Additional Configuration:
  - For fonts + icons:
    - The project uses Poppins font family (from Google Fonts) and [ionicons](http://ionicons.com/) for icon fonts.
    - You will need to link to the files from a CDN in the `<head>` of the `index.html` inside the `public/` directory.
    - in `public/index.html`
      ```html
      <head>
        ...
        <title>Portfolio</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
      </head>
      ```
  - For project styles:  
    - You will need to import the project styles (`css/styles.css`) into the `index.js` file (you will use these styles in place of `index.css`).
    - You will need to remove the styles imported from `App.css"` in `App.js`.
    


### The Component Structure
![demo](demo/react-portfolio-basics-components.png)

### Original Site HTML
```html
<body>
  <!-- App  -->
  <div id="app-container">

    <!-- PortfolioFixed (left-column) -->
    <div class="portfolio-fixed">
        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg"/>
        <h1>María Santiago</h1>
        <p>Developer | Mother</p>
    </div>

    <!-- PortfolioContent (right-column) -->
    <div class="portfolio-content">
        <!-- Header -->
        <header>
          <h2>Portfolio</h2>
        </header>

        <!-- Summary -->
        <section>
          <h4>Summary</h4>
          <p>I am a designer and full stack developer with a primary focus on the front-end. I have worked on all layers of a project from implementing designer mockups, custom animations, and building APIs.</p>
        </section>

        <!-- ContactInfo -->
        <section>
          <div class="contactinfo">
            <a class="contactinfo__single" target="_blank">
              <i class="ion-ios-location-outline contactinfo__icon"></i>
              <span class="contactinfo__title">Austin, TX USA</span>
            </a>
            <a href="#" class="contactinfo__single" target="_blank">
              <i class="ion-ios-email-outline contactinfo__icon"></i>
              <span class="contactinfo__title">mariasantiago1989@gmail.com</span>
            </a>
            <a href="#" class="contactinfo__single" target="_blank">
              <i class="ion-social-github-outline contactinfo__icon"></i>
              <span class="contactinfo__title">devmaria</span>
            </a>
            <a href="#" class="contactinfo__single" target="_blank">
              <i class="ion-social-linkedin-outline contactinfo__icon"></i>
              <span class="contactinfo__title">maria-x-santi</span>
            </a>
          </div>
        </section>
    </div>

  </div>
</body>
```

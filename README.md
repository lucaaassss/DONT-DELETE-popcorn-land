<div align="center">
  
  <div>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />
  </div>

  <h3 align="center">A React Movie Posters Application</h3>

  
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code Snippets to Copy](#snippets)


## <a name="introduction">🤖 Introduction</a>

Build a web app using React to display movie posters. Fetched movie data, including posters and year, from the OMDb API.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React
- CSS

## <a name="features">🔋 Features</a>

👉 **Home Page**: Shows general overview of the movie information.

👉 **Search Functionality**: Allows user to search for a specific movie title.

and many more, including code architecture and reusability. 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/shahirulprojects/Popcorn-Land.git
cd Popcorn-Land
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
REACT_APP_OMDB_API_KEY=

```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [OMDb API](https://www.omdbapi.com/apikey.aspx).

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>.env.example</code></summary>

```env
REACT_APP_OMDB_API_KEY=

```

</details>

<details>
<summary><code>App.css</code></summary>

```App.css
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:100,300,400,700");
@import url("https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i");

* {
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

:root {
  --font-roboto: "Roboto Slab", serif;
  --font-raleway: "Raleway", sans-serif;
}

body {
  font-family: var(--font-roboto);
  background-color: #800020;
}

.app {
  padding: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 3rem;
  letter-spacing: 0.9px;
  background: linear-gradient(
    90deg,
    rgba(249, 211, 180, 1) 100%,
    rgba(249, 211, 180, 0) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
}

.search {
  width: 71%;
  margin: 4rem 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 1.75rem;
  border-radius: 3rem;
  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
}

.search input {
  flex: 1;
  border: none;
  font-size: 1.5rem;
  font-family: var(--font-raleway);
  font-weight: 500;
  padding-right: 1rem;

  outline: none;
  color: #a1a1a1;
  background: #1f2123;
}

.search img {
  width: 35px;
  height: 35px;
  cursor: pointer;
}

/* .search button {
  padding: 20px 40px;
  border-radius: 0.5rem;
  margin-left: 15px;
  color: #a1a1a1;
  font-family: var(--font-raleway);
  font-weight: 900;
  letter-spacing: 0.75px;
  font-size: 1.25rem;
  cursor: pointer;

  background: #1f2123;
  -webkit-box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
  box-shadow: 5px 5px 7px #1c1d1f, -5px -5px 7px #222527;
} */

.empty {
  width: 100%;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
}

.empty h2 {
  font-size: 1.25rem;
  color: #f9d3b4;
  font-family: var(--font-raleway);
}

.container {
  width: 100%;
  margin-top: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.movie {
  width: 310px;
  height: 460px;
  margin: 1.5rem;

  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: none;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: 0px 13px 10px -7px rgba(181, 8, 8, 0.1);
}

.movie div:nth-of-type(1) {
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
  color: #f9d3b4;
}

.movie:hover {
  box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
  transform: scale(1.05, 1.05);
}

.movie div:nth-of-type(2) {
  width: 100%;
  height: 100%;
}

.movie div:nth-of-type(2) img {
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.movie div:nth-of-type(3) {
  z-index: 2;
  background-color: #fff;
  padding: 16px 24px 24px 24px;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  cursor: pointer;
}

.movie div:nth-of-type(3) span {
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #f0f0f0;
}

.movie div:nth-of-type(3) h3 {
  margin-top: 5px;
  font-family: "Roboto Slab", serif;
  color: #f6be00;
}

.movie:hover div:nth-of-type(2) {
  height: 100%;
  opacity: 0.3;
}

.movie:hover div:nth-of-type(3) {
  background-color: transparent;
}

.movie:hover div:nth-of-type(1) {
  opacity: 1;
}

@media screen and (max-width: 600px) {
  .app {
    padding: 4rem 2rem;
  }

  .search {
    padding: 1rem 1.75rem;
    width: 100%;
  }

  .search input {
    font-size: 1rem;
  }

  .search img {
    width: 20px;
    height: 20px;
  }
}

@media screen and (max-width: 400px) {
  .app {
    padding: 4rem 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .container {
    margin-top: 2rem;
  }

  .movie {
    width: "100%";
    margin: 1rem;
  }
}


```

</details>

#

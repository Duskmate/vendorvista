<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables\
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

# Vendor Vista
An interface for admins to view and manage (add, edit and delete) vendors along with Google authentication

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Project Screen Shot][project-screenshot]](https://vendorvista.netlify.app/)

### These are the requirements :

1. Login with Google and logout
2. Create Vendor: Vendor Name*, Bank Account No*, Bank Name*, Address Line 1*, Address Line 2, City*, Country*, Zip Code*
3. Display paginated list of vendors: Vendor name, Bank Account No., Bank Name, Edit(link)/Delete(link)
4. Edit: Load vendor details on edit vendor screen and update on submit.
5. Delete: Delete vendor after confirmation.
*Mandatory fields

### Note :
1. The vendors are sorted by `name` field.
2. Vendor list is only visible after sign-in
3. Access Logout button by clicking on the avatar on the right top.
4. Use breadcrumbs in Edit/Add vendor section to navigate back to the list.
5. Edit/Add vendor page automatically redirects to homepage after 2 seconds on saving.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

Major frameworks/libraries used in the project.

* [![HTML][HTML]][HTML-url]
* [![CSS][CSS]][CSS-url]
* [![JavaScript][JavaScript]][JavaScript-url]
* [![React][React.js]][React-url]
* [![MaterialUI][MaterialUI]][MaterialUI-url]
* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![MongoDB][MongoDB]][MongoDB-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/Duskmate/vendorvista.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
   ```js
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Saksham Singhal - [@dusk.mate](https://www.instagram.com/dusk.mate/) - hello@saksham.page

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List of resources I found helpful and would like to give credit to

* [Best README Template](https://github.com/othneildrew/Best-README-Template/tree/master)
* [Choose an Open Source License](https://choosealicense.com)
* [Img Shields](https://shields.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[project-screenshot]: src/images/preview.jpg
[HTML]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML
[CSS]: https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JavaScript-url]: https://developer.mozilla.org/en-US/docs/Web/javascript
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MaterialUI]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[MaterialUI-url]: https://mui.com/material-ui/
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
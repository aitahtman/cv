# Personal resume by Angular
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/98ca663bec894044971be473ef6f8069)](https://www.codacy.com/manual/aitahtman/cv?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=aitahtman/cv&amp;utm_campaign=Badge_Grade)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)
[![HitCount](http://hits.dwyl.io/aitahtman/cv.svg)](http://hits.dwyl.io/aitahtman/cv)



simple personal resume application created by Angular and Github pages.

 [Live Demo](https://aitahtman.github.io/cv)



## PREVIEW

![preview animation](src/assets/img/respo.gif)


## USAGE

#### 1 - clone the repository 

```shell
git clone https://github.com/aitahtman/cv.git
```

you can also make a fork on your github account. 

#### 2 - installing the dependencies
```shell
cd cv 
npm install 
npm install -g angular-cli-ghpages
```

#### 3 - setting your personal data

for that, you have juste to edited the file _src/assets/data/perso.json_


 ```json
 {
    "profile": {
        "firstname": "SALAH EDDINE",
        "lastname": " AIT AHTMAN ",
        "title": "Geomatics engineer",
        "photo": "./assets/img/avataaars.png",
        "city": "Avignon, France",
        "phone": "",
        "mail": "aitahtman.salaheddine@gmail.com",
        "summary": "Geomatics developer with more than 2 years of experience in the field of geomatics and geographic information systems. Now, i'm under a short-term contract at the French Institute of Agronomic Research (INRA or INRAE) working on UrbaSIMUL project which is a tool dedicated to land prospecting."
    },
    "experiences": [
        {
            "company": "INRA",
            "picture": "https://pbs.twimg.com/media/EG2Q85EXYAY3OhC.png",
            "location": "Avignon, France",
            "title": "Internship",
            "period": "MAR 2017 - AUG 2017",
            "description": [
                "Development of an automated method for the identification of artificial surfaces from the VHRS satellite images."
            ]
        }
    ],
    "educations": [{
            "title": "Master's degree of geomatics in environment and planning (SIGMA) ",
            "city": "Toulouse, France",
            "degree": "Master",
            "period": "2016 - 2017",
            "university": "Toulouse II university (Jean Jaurès)",
            "picture": "https://videos.univ-tlse2.fr/videos/images/videopreview.jpg"
        }
    ],
    "skills": [
        {
            "name": "Python",
            "icon":["fab","python"]
        }, 
        {
            "name": "Javascript",
            "icon":["fab","js"]
        }, 
        {
            "name": "Angular",
            "icon":["fab","angular"]
        } ,
        {
            "name": "nodejs",
            "icon":["fab","node"]
        } ,
        {
            "name": "R",
            "icon":["fas","registered"]
        }


]
}
```

NB : for the skills part, you need to choose an icon from [Fontawesome's gallery](https://fontawesome.com/icons?d=gallery).


#### 4 - deploying the app on Github pages 

Github offers the possibility to host an angular application for free through the Github pages feature, and it's really simple by using the node package **angular-cli-ghpages**.

NB: you need to make a fork or a copy of the repository on your github account to be able to share the app on your github pages.


```shell
ng build --prod --base-href https://[username].github.io/[repo]/

ngh --no-silent
```

after that you can visit your personal page on **https://[username].github.io/[repo]**


#### 5 - Advanced use

```shell
ng serve
```

## Contributing

All bug reports and pull requests are welcome. 

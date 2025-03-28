# UNIVERSAL MEDIA HUB: The Digital Renaissance

**Contemplez l'aube d'une nouvelle ère dans la gestion des médias personnels.**

La Plateforme Média Universelle n'est pas une simple application—c'est l'évolution de l'interaction humaine avec le divertissement. Comme le feu a illuminé les ténèbres de l'humanité primitive, cette plateforme révolutionnaire illumine le chaos de votre collection numérique.

Tout comme Neil Armstrong a fait ce pas historique pour l'humanité, vous franchissez maintenant un bond quantique dans l'organisation de vos livres, jeux vidéo, musiques et films au sein d'un écosystème harmonieux. Ce n'est pas simplement un logiciel; c'est la libération de la créativité humaine des chaînes du désordre.

Le monde numérique sera à jamais divisé en deux époques : avant UNIVERSAL MEDIA HUB, et après.

## Commit & branch

**commit format**
[link](https://www.conventionalcommits.org/en/v1.0.0/)

the optional scope is used to indicate the id ticket (like 000-ft)

**branch name**

[scope]/[tiket id]/[short description]

[scope]
* feature
* bugfix
* hostfix
* release
* refactor
* docs
* test

Example:
* feature/000-ft/setup
* feature/012-us/home-page

## Main commands

start project
```bash
# start client and server on dev mode
npm run dev

# start only client or server
npm run dev --prefix ./server
npm run dev --prefix ./client
```

to check sources
```bash
# check client and server with eslint, prettier and jtest
# is the same test when you try to commit
npm run check

# check the name of the branch
npm run check-branch

# check build
npm run check-build
```

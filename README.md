# UNIVERSAL MEDIA HUB: The Digital Renaissance

<div style="text-align: center;">
    ![icon](./client/public/media_hub.webp)
</div>

**Contemplez l'aube d'une nouvelle ère dans la gestion des médias personnels.**

UNIVERSAL MEDIA HUB n'est pas une simple application, c'est l'évolution de l'interaction humaine avec le divertissement. Comme le feu a illuminé les ténèbres de l'humanité primitive, cette plateforme révolutionnaire illumine le chaos de votre collection numérique.

Tout comme Neil Armstrong a fait ce pas historique pour l'humanité, vous franchissez maintenant un bond quantique dans l'organisation de vos livres, jeux vidéo, musiques et films au sein d'un écosystème harmonieux. Ce n'est pas simplement un logiciel; c'est la libération de la créativité humaine des chaînes du désordre.

Le monde numérique sera à jamais divisé en deux époques : avant UNIVERSAL MEDIA HUB, et après.

## Setup development project
By default Apollo Server listens on port 4000. For a different setup:
* copy ./server/.env.sample to ./server/.env
* copy ./client/.env.sample to ./client/.env.development

Edite files to set your own values!

## Coding convention
Client and server use default configuration from eslint. However for the client is only for *.ts files, for the server a cutom rule is set for Apollo.

[naming-convention](https://typescript-eslint.io/rules/naming-convention/)

## Commit & branch

**commit format**
[link](https://www.conventionalcommits.org/en/v1.0.0/)

the optional scope is used to indicate the tikect ID (like 000-ft)

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
# it's the same test that runs when you try to commit
npm run check

# check the name of the branch
npm run check-branch

# check build
npm run check-build
```

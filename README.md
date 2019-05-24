# vue-corp-card

> An Vue UI Card Component used for display Crop infos!

```sh
# install cli
$ yarn global add @vue/cli
$ yarn global add @vue/cli-service-global

# uninstall cli
$ yarn global remove @vue/cli
$ yarn global remove @vue/cli-service-global

```

```sh
# dev build tools
$ yarn add -D bili rollup-plugin-vue vue-template-compiler

```


## publish

```hs
$ npm whoami

$ npm adduser

$ npm publish

```

## usage

```sh
# install
$ yarn add vue-corp-card
# OR
$ npm i vue-corp-card

```

```js
import Vue from "vue";
import CorpCard from "vue-corp-card";

Vue.use(CorpCard);

```

> Vue Style

```js

<corp-card
    :rounded="true">
    CorpCard
</corp-card>

<corp-card
    @click="AutoSkipToPage(`newsinfo/iframe`)">
    click Button 1
</corp-card>
<!-- dblclick & mobile bug -->
<corp-card
    @dblclick="AutoSkipToPage(`newsinfo/iframe`)">
    dblclick & mobile bug
</corp-card>
<!-- dblclick & components -->
<corp-card
    @dblclick.native="AutoSkipToPage(`newsinfo/iframe`)">
    dblclick & components
</corp-card>

```

> React Style

```js

<!-- error -->
<CorpCard
    corpObj=""
/>

<!-- OK -->
<CorpCard
    :corpObj="corpObj"
/>
<CorpCard
    :corpObj="corpObj2"
/>

```

## npm

https://www.npmjs.com/package/vue-corp-card

## bili

https://bili.egoist.sh/#/recipes/vue-component

## refs

https://www.telerik.com/blogs/vuejs-how-to-build-your-first-package-publish-it-on-npm


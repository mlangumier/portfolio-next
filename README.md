# Next.js Portfolio

Welcome! I am **Mathieu Langumier**, and this is my portfolio.

This is a project that regroups some personnal and profesionnal projects I have had the pleasure of working on. It serves as both a continuous training project and an overview of the skills I have acquired.

This project uses **Next.js 15** with Turbopack, **React 19**, **TypeScript** and **Tailwind CSS**. Various dependencies will be added depending on the different skills used in this projects.

## Start the project

There are a few steps required to setup the environment. Instead of using `localhost:3000` during development, we'll be using `https://mathieulangumier.local`. By doing so, the experience while developing will be much closer to the one in production and will allow us to detect issues more effectively.

If you want to quickly check out the project without any of this, forget these steps and simply use `npm run dev` after you've installed the dependencies.

### Step 1 - Change the host name

In the file `~/../../etc/hosts`, add the name `mathieulangumier.local` to the list host names.

### Step 2 - HTTPS Certificate

Install [mkcert](https://github.com/FiloSottile/mkcert), then use the following command to generate the certificates required to run on a locally trusted environment.

```cli
mkcert --cert-file mathieulangumier.local.crt --key-file mathieulangumier.local.key mathieulangumier.local
```

Once the two files are created, create a `/cert` folder at the root of the project and move them inside.

### Step 3 - Docker

This project uses the latest versions of `docker` and `docker-compose`.

Use the command `docker-compose build` to run the project for the first time. After that, use `docker-compose up` to start the development environment. Navigate to `https://mathieulangumier.local` and make sure that this URL works. The app should automatically reload while making changes on the project.
Use Ctrl+C to stop the live server, and `docker-compose down` to stop the containers.

### Warning

If you have an Apache or Nginx server that starts automatically and is using the port `443`, you might need to stop them manually to allow this app to start.

## Style & Formatting

In order to have a homogenous code base within our project, we're going to use **ESLint** and **Prettier** with **Husky**.

If you are already using their related VSCode extensions, VSCode should use this project's config as a base while you're working on it.

With these dependencies, we're marking sure that the remote repository's if formatted and homogenous. For that, we're using **Husky**'s pre-commit feature, which allows a script to run each time we're comming changes. We've also created another script in `./scripts/format.sh` that has the same purpose but that we can use anytime with `npm run check-n-format`.

### Tailwind CSS IntelliSense

This VSCode extension helps with auto-completion on the `className` attribute. In VSCode, the setting `Tailwind CSS: class attributes` allows you to add other attributes that will show auto-completion. You can add this project's custom attribute: `containerStyle`

## Deployment

This project uses **Github** & **Vercel**'s features to simplify the deployment process. We are using our `main` branch as our automatic deployment branch, and the `develop` branch to preview any changes done before that.

## Contact

If you have any question, you can contact me on [LinkedIn](https://www.linkedin.com/in/mathieu-langumier/).

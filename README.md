# Next.js Portfolio

Hi! I am Mathieu Langumier, and this is my portfolio.

This is a project that regroups some personnal and profesionnal projects I have had the pleasure of working on. It serves as both a continuous training project and an overview of the skills I have acquired.

Please enjoy your visit, and don't hesitate to contact me if you have questions or need any information

## Description

This project uses Next.js 15 with Turbopack, React 19, TypeScript and TailwindCSS. Various dependencies will be added depending on the different skills used in this projects. The most common dependencies such as Axios, Tanstack Query, Redux and i18n will be used, others will be added if they are relevant.

[Work in Progress]

## Start the project

There are a few steps required to setup the environment. Instead of using `localhost:3000` during development, we'll be using `https://mathieulangumier.local`. By doing so, seting up the production environment and deployment will be much easier and the experience while developing will be much closer to the one in production.

### - Step 1: Change the host name (#localhost)

In the file `~/../../etc/hosts`, add the name `mathieulangumier.local` to the list host names.

### - Step 2: HTTPS Certificate

Install [mkcert](https://github.com/FiloSottile/mkcert) and the use the following command, it will generate the certificates required to run on a locally-trusted environment.

```
mkcert --cert-file mathieulangumier.local.crt --key-file mathieulangumier.local.key mathieulangumier.local
```

Once the two files are created, create a `/cert` folder a the root of the project and move them inside.

### - Step 3: Docker

This project uses Docker v27.3.1 and docker-compose v2.29.2-desktop.2. Make sure you have a relatively recent version for both.

Use the command `docker-compose build` to run the project for the first time. After that, use `docker-compose up` to start the development environment. Use Ctrl+C to exit, and `docker-compose down` to stop the containers.
Navigate to `https://mathieulangumier.local` and make sure that this URL works. The app should automatically reload while making changes on the project.

### Warning

If you have an Apache or Nginx server that starts automatically, you might need to stop them manually to allow this app to start.

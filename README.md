# Webstudio builder

### Init builder step by step

1. Install the "Dev Containers" extension in VS Code:
   - Open VS Code.
   - Go to the Extensions view by clicking the Extensions icon in the Activity Bar on the side of the window.
   - Search for "Dev Containers" and click Install. Alternatively, you can install it from the recommended extensions listed in the Webstudio project.
2. Fork and clone the Webstudio repository:
   - Fork the repository on GitHub.
   - Clone your forked repository to your local machine.
3. Open the repository in VS Code:
   - Open VS Code.
   - Select "File" > "Open Folder" and choose your project folder.
4. Reopen in Container:
   - Once your folder is open, you might see a notification asking if you want to reopen in a container. Click "Reopen in Container".
   - If you don't see a notification, press F1, type Dev Containers: Reopen in Container, and select it.
5. install deps: `pnpm i`
6. wait patiently...
7. Run the development server:
   - Run the following command: `pnpm dev`
8. Open the application: `https://wstd.dev:5173/`

### Login locally

1. create a file: `apps/builder/.env.development`
2. add lines:

```
DEV_LOGIN=true
AUTH_SECRET=a random value
```

### Build the app

In the devContainer terminal:

1. (optional) Download NVM if it is not already there:  
   `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash`
2. Get node version 22 with nvm:  
   `nvm install 22`
3. Download webstudio CLI:
   `npm install -g webstudio`
4. In the webstudio UI click the **PUBLISH** button
5. Init webstudio project with the command:  
   `webstudio`
6. (optional) create a docker compose config file `compose.yml` to run the Dockerfile created from webstudio
7. Run the docker compose file: `docker compose up --build -d`

<br>
<img width="1512" alt="builder-screenshot" src="https://github.com/webstudio-is/.github/blob/main/assets/builder-screenshot.png?raw=true">
<br /><br />

<section align="center">
  Webstudio is an Open Source Visual Development Platform for developers, designers, and cross-functional teams. You own the data, components, and infrastructure. You can use the hosted version or roll out your own.
</section>
<br /><br />

## Learning Resources

- [Blog](https://webstudio.is/blog)
- [Documentation](https://docs.webstudio.is/)
- [Brand and Product Design](https://docs.webstudio.is/contributing/contributing-for-designers)
- [Contributing Guide for Devs](https://docs.webstudio.is/contributing/contributing-for-developers)
- [Github Discussions](https://github.com/webstudio-is/webstudio-community/discussions)
- [Wishlist](https://github.com/webstudio-is/webstudio-community/discussions/categories/wishlist)
- [Builder Issues Tracker](https://github.com/webstudio-is/webstudio/issues)
- [Roadmap](https://github.com/orgs/webstudio-is/projects/11)

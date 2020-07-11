# abnvisualizer

## Prerequisite
- nodejs and npm (check https://nodejs.org/en/ for installation)
- docker (check https://www.docker.com/ for installation)

## Project setup
First clone this repo to any local directory,
```
git clone https://github.com/jonas-meng/abnvisualizer.git
```

Then install all dependencies,
```
npm install
```

## Launch Project
To correctly use this project, please follow the instructions in order:

### Step 1
Launch Mongodb instance in Docker,
```
sh launch-db.sh
```

### Step 2
Migrate external data to Mongodb,
```
npm run migrate
```

### Step 3
Launch backend server that serves data from Mongodb,
```
npm run server
```
By default, server is launched on port 3000.
Data can be obtained through `http://localhost:3000` .

### Step 4
Launch frontend server for development,
```
npm run serve
```
By default, server is launched on port 8080.
Please visit `http://localhost:8080`.

### Compiles and minifies for production
Use `build` command to compile the frontend project and deploy it with any web server.
```
npm run build
```

### Lints and fixes files
Use `lint` command to find potential coding issues.
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

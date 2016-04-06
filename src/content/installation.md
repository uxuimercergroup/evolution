### Tool Box Install

##### What is the Evolution Tool Box?

The Evolution Tool Box is a collection of development technologies assembled in one spot so you can begin using the Evolution framework and Evolution web components in minutes!

The Evolution Tool Box will:

- Set up a development environment that will allow you to view changes live in your browser with automatic refresh.
- Scaffold the directory structure of your site, including all asset and template directories.
- Optimize your files for production and allow you to FTP the files with one command.

The Evolution Tool Box utilizes the following technologies:

- Node.js (npm) Runtime Environment
- Yo Scaffolding Generator
- Grunt.js Task Runner
- Handlebars.js Templating Engine
- Sass CSS Preprocessor

**NOTE: Please refer to the [Evolution Tool Box wiki](https://github.com/uxuimercergroup/evolution/wiki/Evolution-Tool-Box) for the latest dependency versions that are in use by the Evolution Tool Box development enviroment.**

Follow improvements, updates, and fixes to the Evolution Tool Box (generator-evolution) on the official [Github repository](https://github.com/uxuimercergroup/generator-evolution).

*Have you found any issues or bugs with the Evolution Tool Box?* Please log them on the [Evolution Tool Box issues](https://github.com/uxuimercergroup/generator-evolution/issues) page.

##### Prerequisites

The following prerequisites must be met before using the Evolution Tool Box development environment.

###### Command Line Interface (CLI) Install

Mac users:

1. There is nothing to install. Open the "Terminal" application on your system.

Windows users:

1. Go to http://cmder.net/. Download and install the "Cmder" console emulator.
	- Extract files from the installation ZIP to a directory called "cmder" that you have created on your system.
2. Run the Cmder application.

*Important note:* If any of the commands in the following instructions don't work, you may need to restart the Cmder application, and try the command again.

**NOTE: From this point forward when the instructions mention *command line interface* or *cli* please associate that with using the "Cmder" console emulator when on a Windows system and using the "Terminal" application when on a Mac system.**

###### Environment Dependencies

The Evolution Tool Box is installed on your system using the [generator-evolution](https://github.com/uxuimercergroup/generator-evolution) Yeoman generator, which is a Node.js module. Node.js and Node Package Manager (npm) must be installed globally on your system before you can install the Evolution Tool Box generator. The Evolution Tool Box generator is then installed globally as well, so that you can continue to use it to set up the Evolution Tool Box in any directory on your system without needing to install the Evolution Tool Box generator again.

1. Install Node.js globally. NOTE: Node Package Manager (http://npmjs.org) will be installed globally when you install Node.js.
	- Go to: http://nodejs.org
	- Download the current version of Node.js. *Use the LTS (Long Term Support) version*
	- Install Node.js on your system.
2. Update Node Package Manager (npm) to the latest version:
	- Open the command line interface (cli)
	- Copy and paste this command into the cli: `npm install npm -g`, you may need to run `sudo npm install npm -g` if the regular command does not work.
3. Use Node Package Manager (npm) to install the Evolution Tool Box generator globally. The Yo scaffolding tool will also be installed at this time.
	- Open the command line interface (cli)
	- Copy and paste this command into the cli: `npm login`, you may need to run `sudo npm login` if the regular command does not work. 
		- NOTE: If you have not already been assigned a username and password for the private Evolution npm registry, please contact Douglas Fraize at [douglas.fraize@mercer.com](mailto:douglas.fraize@mercer.com).
	- Copy and paste this command into the cli: `npm install -g yo generator-evolution`, you may need to run `sudo npm install -g yo generator-evolution` if the regular command does not work.
4. Use Node Package Manager (npm) to install grunt-cli tool:
	- Open the command line interface (cli)
	- Copy and paste this command into the cli: `npm install grunt-cli -g`, you may need to run `sudo npm install grunt-cli -g` if the regular command does not work.
5. If you are on a Windows system you need to install Ruby to use the Sass CSS preprocessor. If you are on a Mac you can skip this step as Ruby is installed by default on Mac OS. Follow these instructions to install Ruby for Windows:
	- Download the Ruby Installer from http://rubyinstaller.org/.
		- Make sure to get version *2.2.4 (x64)*
	- Run the Ruby Installer application
		- **IMPORTANT: When running the Ruby Installer make sure to check all install options (Install Tcl/Tk support, Add Ruby executables to your PATH, Associate .rb and .rbw files with this Ruby installation) before confirming the installation.**
6. Install Sass CSS Preprocessor
	- Open the command line interface (cli)
	- Copy and paste this command into the cli: `gem install sass`, you may need to run `sudo gem install sass` if the regular command does not work. (this install may take a little time on a Windows system, be patient.)

##### Installing the Evolution Tool Box

Now that the Evolution Tool Box generator is installed on your system, you can install the Evolution Tool Box into your current working directory.

1. Using the cli, change directory (cd) to the directory where you will be working or your current working directory.
2. Copy and paste this command into the cli: `yo evolution`
3. The Evolution Tool Box generator will run in the cli and prompt you with the following questions so that you can customize the Evolution Tool Box to your project.
	- *What is your full name?*
	- *What is the name of your project?*
	- *Add a short project description.*
	- *What is today's date? (example: January 1, 2016)*
	- *Where will this project be hosted? (URL)*
	- *Please select a product suite:*
		- Core (Get a default boilerplate utilizing the Evolution framework to build your project.)
		- Benefits Portals (Get a boilerplate utilizing the Evolution framework customized for Benefits Portals.)
	- *What is the primary color of your project?* (Only asked if *Core* product suite is selected - default is $onyx-dark-70 - accepts Sass variable from color palette or hex-color formatted like so: #000000)
4. The Evolution Tool Box generator will now install all required files and dependencies into your current working directory.
5. Please ignore any warnings when `yo evolution` is run.

##### Updating the Evolution Tool Box

To ensure the Evolution Tool Box generator (generator-evolution) and the Evolution Tool Box installed in your current working directory are both current versions, run the following updates.
- Update all global npm packages *before* installing the Evolution Tool Box into your project's directory (including yo and generator-evolution):
	- Copy and paste this command into the cli: `npm update -g`, you may need to run `sudo npm update -g` if the regular command does not work.
- Update only the npm packages located inside the project directory where the Evolution Tool Box has already been installed:
	1. Using the cli, change directory (cd) to the project directory.
	2. Copy and paste this command into the cli: `npm update`, you may need to run `sudo npm update` if the regular command does not work.
	3. All build tools located within your current working directory are now current versions.

##### Installing Node Dependencies

There may be a case when multiple developers are working on a project where you do not have the Node.js dependencies for a project because those dependencies are not checked into source control. All Node.js dependencies are installed locally in a *node_modules* directory. If you are missing the *node_modules* directory from your project and the grunt tasks do not work follow these instructions:

1. Using the cli, change directory (cd) to your current working directory
2. Copy and paste this command into the cli: `npm install`, you may need to run `sudo npm install` if the regular command does not work.
3. Project dependencies should then be retrieved from npm and installed.
4. Proceed to use build tools like `grunt`.

##### Using the Build Tools

Now that the Evolution Tool Box has been installed in your current working directory, it is time to run the tasks that will build the static web site, launch a local web server and enable automatic browser refresh - all so you can see changes while you work.

1. Using the cli, make sure that you are still in your current working directory.
2. Copy and paste this command into the cli: `grunt`
3. When all tasks are complete, a window will open in your default browser displaying the index.html page. Any changes made to the templates or assets will trigger the automatic browser refresh. To close the server, press Ctrl-c. If on Windows, press `y` to terminate the batch job.

##### Other Tools

The Evolution Tool Box includes several other tasks to streamline the web development process.

###### Production
Generate production UI code for hand-off

- While still in your current working directory, copy and paste this command into the cli: `grunt prod`
- The *dist* directory in your current working directory now contains production ready code (static HTML, minified CSS, minified JS, and optimized images).

###### Deploy
FTP the final production UI code to a secure FTP server

- Setup:
	1. Using your text editor, open the *grunt* directory in the root of your current working directory. Open the *sftp-deploy.js* file.
	2. Edit the *sftp-deploy.js* `host` option under `auth` to set the FTP server host name.
	3. Edit the *sftp-deploy.js* `dest` option to set the destination path where the production files will get uploaded on the FTP server.
	4. Open the *.ftppass* file in your text editor or cli (may be easier in a text editor that displays hidden files but you can also run `ls -al` in the cli to see hidden files and edit right in the cli using a built-in text editor).
	5. Edit *.ftpass* file and enter the correct username/password credentials for the FTP server being used for deployment. **IMPORTANT: Make sure to ignore the .ftppass file in your source control repository settings so that the login information for the FTP server does not get checked into the project and exposed to others.**
- Deployment
	1. While still in your current working directory, copy and paste this command into the cli: `grunt deploy`
	2. The deploy task runs `grunt prod` and then deploys the files to the FTP server location.
	3. Check the server URL in a browser to make sure your deployment was successful and correct.

##### Repository Settings
If you are using version control software (for example, Github) then the following files need to be ignored from being checked into the project repository. If using Github, insert the following text into the repository "Ignored Files" settings (also called the .gitignore file):

```
.ftppass
.sass-cache/*
bower_components/*
dist/*
node_modules/*
```

***
### Sass Install

Evolution can be used in a custom development enviroment that uses a Sass CSS preprocessor. This option is for developers who want the benefits and effeciencies of using Sass but do not want to use the Evolution Tool Box development environment.

##### Prerequisites

Developers need to supply their own method for preprocessing the Sass files that come bundled in the Evolution Sass boilerplate.

##### Download Sass Boilerplate

Developers can [download the Evolution Sass boilerplate](https://evolution.mercer.com/boilerplates.html) from the [boilerplates](https://evolution.mercer.com/boilerplates.html) page of the Evolution site.

***
### CSS Install

Evolution can be used in a very simple development environment made up of vanilla CSS, JS, and HTML. This option is for developers who do not want Sass preprocessing or the Evolution Tool Box development environment.

##### Download CSS Boilerplate

Developers can [download the Evolution CSS boilerplate](https://evolution.mercer.com/boilerplates.html) from the [boilerplates](https://evolution.mercer.com/boilerplates.html) page of the Evolution site.
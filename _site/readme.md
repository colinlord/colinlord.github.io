# Colin Lord.com

![Gem Version](https://img.shields.io/gem/v/jekyll.svg)
![Linux Build Status](https://img.shields.io/travis/jekyll/jekyll/master.svg?label=Linux%20build)
![Windows Build status](https://img.shields.io/appveyor/ci/jekyll/jekyll/master.svg?label=Windows%20build)
![Test Coverage](https://img.shields.io/codeclimate/coverage/github/jekyll/jekyll.svg)
![Code Climate](https://img.shields.io/codeclimate/github/jekyll/jekyll.svg)
![Dependency Status](https://img.shields.io/gemnasium/jekyll/jekyll.svg)
![Security](https://hakiri.io/github/jekyll/jekyll/master.svg)

This is my personal site. After going through several iterations, I decided to rebuild with GitHub pages and Jekyll.

Below are notes that are primarily for me. But since it's hosted on GitHub pages, anybody can technically get into my repo and look around.

## Local Environment

To start the local environment, cd into the repo directory and then run
```
jekyll serve
```

This will start the environment along with Livereload.


## Build

If I want to compile the code, these are the commands to use:

```
jekyll build
# => The current folder will be generated into ./_site

jekyll build --destination <destination>
# => The current folder will be generated into <destination>

jekyll build --watch
# => The current folder will be generated into ./_site,
#    watched for changes, and regenerated automatically.
```
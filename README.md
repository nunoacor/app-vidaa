# HiZ-Store
A store for Vidaa hisense tvs
### Status: WIP
###### Website:
	https://phasedgapple.github.io/HiZ-Store/
###### Make sure to visit this website on your Hisense TV browser else it wont work.

## Current Focus
I am currently focussing on those:
- Adding as many apps as possible requested by users
- Making it work on Modern TVs using a DNS method

## This project is inspired by this blog:
  https://bananamafia.dev/post/hisensehax/


## TODO
- [ ] Add custom DNS to support modern VIDAA TVs
- [ ] Recreate site so it looks better for an App Store
- [x] Make it so I only need to add 1 line to add an app.

## Custom Repos
You can add a github issue to add an custom repo made for the HiZ-Store. When it gets added the repo is automatically applied and is being pulled straight from the url everytime somone connects to the HiZ Store. Quality of stuff like descriptions will be need to be kept and it would be nice to update it once a while. Also, obviously no NSFW apps in the repo.

### HiZ-Store Repo example
```json
{
    "REPO-ID1": {
        "name": "APPNAME",
        "img": "ICON-URL",
        "thumb": "ICON-THUMBNAIL",
        "url": "WEB-APP URL",
        "description": "APP DESCRIPTION - Would be nice to end with a dot."
    },
    "REPO-ID2": {
        "name": "APPNAME",
        "img": "ICON-URL",
        "thumb": "ICON-THUMBNAIL",
        "url": "WEB-APP URL",
        "description": "APP DESCRIPTION - Would be nice to end with a dot."
    },
}
```
The Repo ID is useless its just for organizing and you can add as many apps as you want.
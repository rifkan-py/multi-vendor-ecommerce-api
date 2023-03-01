# Project Requirements

- customer can easily enable and disable the feature
- the discount feature can only e enable if customer paid 10,000 /-
- the system should be easily extendable add new plugin
- should e easily turn on and off the feature

##### 1. load all the plugins into the system

- Write a middleware function to get all the plugins of the user from JWT token and load it into the application **this middleware should e top of the file**

##### 2. Create a plugins entity to store all the plugins

```
------|--------------|----------
name     description   users
------|--------------|----------
      |              |
      |              |
```

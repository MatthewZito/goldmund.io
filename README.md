# Goldmund.sh - Automated Cluster
[![Build Status](https://travis-ci.org/MatthewZito/goldmund-automated-cluster.svg?branch=master)](https://travis-ci.org/MatthewZito/goldmund-automated-cluster)
```
Author: Matthew T Zito (goldmund)
License: MIT
```
## Table of Contents

 - [Introduction](#intro) 
    * [Features](#features)
    * [About](#about)
 - [Documentation](#docs)
    * [Visualizations](#demo)
    * [Todos](#todo)

## <a name="intro"></a> Introduction
This repository hosts an application that is currently in development. As such, this document may not be formatted/completed until said app has been deployed to production.

Packages:
 - `goldmund-api` - persistent data processing service and REST API
 - `goldmund-client` - isomorphic server - hybrid SSG + server-side rendering at runtime
 - `goldmund-cli` - CLI and headless CMS for managing sessions and content
 - `goldmund-server` - a mock ingress for proxying Docker Engine namespace

 To deploy:
 Merge into Master with commit message "automate-deployment"

### <a name="features"> Features
  - Custom database wrapper modeled on [Lambda architecture](https://en.wikipedia.org/wiki/Lambda_architecture)
  - custom RESTful microservice for data processing
  - hybrid static site generation (SSG) / server-side rendering (SSR) 
  - Reactjs components: code-splitting, lazy loading, and dynamic imports
  - infinite scrolling coordinated via batch processing on the backend (maintains consistent processing power requirements regardless of dataset size)
  - blazin' fast sessions caching with Redis
  - localized sessions management and headless CMS via `goldmund-cli`
  - fully automated container-to-cloud CI/CD pipeline
  - local development automated w/Docker Compose
  - automated production deployments w/ Helm + Kubernetes

### <a name="about"> About (temporary section for dev purposes)

This is a personal web application intended as an auto-didactic tool for perfecting CI/CD and production-grade development in a fully containerized cloud environment. Building this app has been quite interesting; it has necessitated extensive research and unending trials. As a developer who aspires to make an impact as a software architect one day, I'm rather pleased with the result. I hope you enjoy as well.

Note to visitors:

If you are a hiring manager, recruiter, or otherwise an individual considering my competencies as they might apply
to your needs, please consider this application to be an examplar of what I can design and build on my own, unassisted. My hope here is that this delimits my actual capabilities from those pertinent to apps on which I have worked in a collaborative capacity (just about everything in any developer's professional portfolio). That is, here, you can see that I indeed can effectively employ tools such as Docker, Kubernetes, et al. 

If you'd like to work together, you are invited to email me at matthewtzito (gmail).

## <a name="docs"></a> Documentation

### <a name="demo"> Visualizations + Abstractions
 Preliminary architectural layout:

![demo](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/preliminary-architecture.png)

More information:
  - See [Testing and Auditing](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/testing.md)
  - [Micro Batch-Processor](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/batch-processing.md)
  - [Isomorphic Kubernetes](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/goldmund-client.md)
  - [Goldmund CLI](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/packages/goldmund-cli/README.md)
  - [Goldmund Server](https://github.com/MatthewZito/goldmund-automated-cluster/blob/master/documentation/goldmund-server.md)
  -[More documentation](https://github.com/MatthewZito/goldmund-automated-cluster/tree/master/documentation)

### <a name="todo"></a> Todos + Upcoming Features

 - analytics dashboard + campaigns (tracking per post analytics in a separate DB collection)
 - optimize for mobile, where needed ([see: why I will NOT be using AMP](https://medium.com/@danbuben/why-amp-is-bad-for-your-site-and-for-the-web-e4d060a4ff31))
 - slowly convert CSS stylesheet to styled components with Emotionjs




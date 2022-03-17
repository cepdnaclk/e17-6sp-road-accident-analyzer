---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: e17-co328-road-accident-analyzer
title: Road Accident Analysis for Community Awareness
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Road Accident Analysis for Community Awareness

## Team
- Pubudu Bandara (E/17/027) - [email](mailto:pubuducb@gmail.com), [GitHub](https://github.com/pubuducb)
- Dhananjaya Morais (E/17/212) - [email](mailto:e17212@eng.pdn.ac.lk), [GitHub](https://github.com)
- Ishara Nawarathna (E/17/219) - [email](mailto:e17219@eng.pdn.ac.lk), [GitHub](https://github.com)

## Table of Contents
1. [Introduction](#introduction)
2. [Problem](#problem)
3. [Motivations](#motivations)
4. [Objectives](#objectives)
5. [Solution](#solution)
6. [Solution Architecture](#solution-architecture)
7. [Technologies used](#technologies-used)
8. [Use Case diagram](#use-case-diagram)
9. [Workplan](#workplan)
10. [Future work](#future-work)
11. [Links](#links)

---
## Introduction

Road traffic injuries are a leading cause of death and disability. In low and middle income countries, vulnerable road users are commonly involved in crashes with severe injuries. Road traffic injuries are a major public health problem globally. About 1.2 million people are killed and more than 50 million are injured due to road traffic crashes annually.More than 90% of these deaths and injuries occur in low and middle income countries (LMIC) due to rapid motorization, lack of road safety culture, poor road conditions, and lack of education on road safety. Our aim is to reduce road accidents using machine learning techniques.

## Problem
The prevailing strategies are not sufficient enough to reduce the **frequency** and **severity** of road accidents.

## Motivations
- The Daily death toll from road accidents
- Inefficiency of  police traffic management
- Difficulty in handling the casualties in hospitals.

## Objectives
- Reduce Road Accidents
- To identify the main factors associated with a road  accident (accident data analysis).

## Requirements
### Functional Requirements
- Data Visualization
- Obtain Main Factors of the Road Accidents
- Ability to upload new Datasets
- Predict the future Accidents

### Non-Functional Requirements
- Performance of the Prediction Model
- Improved UI / UX
- Security
- Scalability


## Solution
An online system to provide more accurate information on road accidents (both analysis and predictions). We are going to build a real time web application which can be used by the public without logging to the system.

## Solution Architecture
<img src="images\solution_architecture.png" width="500">

## High Level System Organization
<img src="images\highlevel.png" width="500">

## Data Flow of the System
<img src="images\dataflow.png" width="500">

## Technologies used 
- Motor: Asynchronous Python driver for MongoDB
- FatsAPI: Web framework for developing RESTful APIs in Python
- MongoDB Atlas: Cloud database service
- Asyncio: Library to write concurrent code, often a perfect fit for IO-bound and high-level structured network code
- React: JS library for building UIs
- Pandas: Data analysis and manipulation tool
- TensorFlow: Software library for ML and AI
- Keras: Software library that provides a Python interface for ANNs


<img src="images\Items.png" width="600">

## Use Case diagram
<img src="images\usecase_diagram.png" width="600">

## Machine Learning Model
<img src="images\MLmodel.png" width="600">

## Workflow of the Machine Learning Process
- Data Collection -  US Accidents Dataset(2016 - 2021) from Kaggle
- Data Preprocessing
- Develop the machine learning model
- Model Fitting
- Model Evaluation
- Model Deployment

## Process
<img src="images\scrumprocess.png" width="600">


## Workplan
<img src="images\workplan.png" width="800">

## Future work

### Robust Data Handling
- Datasets with different attributes
- Resulting in a more accurate and up-to-date mode

### Realtime Modeling
- Users can analyze and predict on their own datasets

## Current Progress
- Analyzing the Dataset
- Create API endpoint

<img src="images\api.png" width="400">

- Develop Homepage

<img src="images\home1.png" width="800">

## Links

- [Project Repository](https://github.com/cepdnaclk/e17-co328-road-accident-analyzer/)
- [Project Page](https://cepdnaclk.github.io/e17-co328-road-accident-analyzer/)
- [Azure DevOps Project](https://17027.visualstudio.com/6SP/_workitems/recentlyupdated/)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

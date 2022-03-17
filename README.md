# Road Accident Analysis for Community Awareness
## 6th Semester Project - 2022
### Department of CE, Faculty of Engineering, UoP
### Project Page: [https://cepdnaclk.github.io/e17-co328-road-accident-analyzer](https://cepdnaclk.github.io/e17-co328-road-accident-analyzer)

---

#### Product Owners
- Dr. Upul Jayasinghe - [email](mailto:upuljm@eng.pdn.ac.lk)
Senior Lecturer - Department of CE
- Dr. Namal Karunarathna - [email](mailto:namal@eng.pdn.ac.lk)
Senior Lecturer - Department of CE
- Dr. Samath Dharmaratne
Faculty of Medicine, UoP
#### Scrum Marster
- Mrs. Anjalee Wanigarathne - [email](mailto:anj.wanigarathne@eng.pdn.ac.lk)
#### Development Team
- Pubudu Bandara (E/17/027) - [email](mailto:pubuducb@gmail.com), [GitHub](https://github.com/pubuducb)
- Dhananjaya Morais (E/17/212) - [email](mailto:e17212@eng.pdn.ac.lk), [GitHub](https://github.com)
- Ishara Nawarathna (E/17/219) - [email](mailto:e17219@eng.pdn.ac.lk), [GitHub](https://github.com)

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
<img src="docs\images\solution_architecture.png" width="500">

## High Level System Organization
<img src="docs\images\highlevel.png" width="500">

## Data Flow of the System
<img src="docs\images\dataflow.png" width="500">

## Technologies used 
- Motor: Asynchronous Python driver for MongoDB
- FatsAPI: Web framework for developing RESTful APIs in Python
- MongoDB Atlas: Cloud database service
- Asyncio: Library to write concurrent code, often a perfect fit for IO-bound and high-level structured network code
- React: JS library for building UIs
- Pandas: Data analysis and manipulation tool
- TensorFlow: Software library for ML and AI
- Keras: Software library that provides a Python interface for ANNs


<img src="docs\images\Items.png" width="600">

## Use Case diagram
<img src="docs\images\usecase_diagram.png" width="600">

## Machine Learning Model
<img src="docs\images\MLmodel.png" width="600">

## Workflow of the Machine Learning Process
- Data Collection -  US Accidents Dataset(2016 - 2021) from Kaggle
- Data Preprocessing
- Develop the machine learning model
- Model Fitting
- Model Evaluation
- Model Deployment

## Process
<img src="docs\images\scrumprocess.png" width="600">


## Workplan
<img src="docs\images\workplan.png" width="800">

## Future work

### Robust Data Handling
- Datasets with different attributes
- Resulting in a more accurate and up-to-date mode

### Realtime Modeling
- Users can analyze and predict on their own datasets

## Current Progress
- Analyzing the Dataset
- Create API endpoint

<img src="docs\images\api.png" width="400">

- Develop Homepage

<img src="docs\images\home1.png" width="800">
<img src="docs\images\home2.png" width="800">

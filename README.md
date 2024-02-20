# Multi-Cloud Handbook for Developers

<a href="https://www.packtpub.com/product/multi-cloud-handbook-for-developers/9781804618707"><img src="https://m.media-amazon.com/images/I/71-SwMKB5PL._SY425_.jpg" alt="Book Name" height="256px" align="right"></a>

This is the code repository for [Multi-Cloud Handbook for Developers](https://www.packtpub.com/product/multi-cloud-handbook-for-developers/9781804618707), published by Packt.

**Learn how to design and manage cloud-native applications in AWS, Azure, GCP, and more**

## What is this book about?
Unleash the power of cloud computing with Multi-Cloud Handbook for Developers, your guide to mastering the nuances of cloud-native and multi-cloud, covering practical strategies for design, development, and management. Explore the essential concepts, challenges, and methodologies critical for navigating the complex landscape of modern cloud computing.
Using core architectural and design principles (such as microservices and 12-factor architecture) and advanced strategies (such as distributed application design patterns, domain-driven design (DDD), and API-first strategies), you’ll learn how to build portable and efficient apps across various cloud platforms. You’ll understand how to leverage Infrastructure as Code (IaC), continuous integration and deployment (CI/CD), GitOps, and DevOps practices, along with containerization and orchestration techniques using Docker and Kubernetes. You’ll also get to grips with data, security, compliance, and cloud cost management strategies in multi-cloud environments.

This book covers the following exciting features: 
* Understand the core structures and implications of cloud-native and multi-cloud apps
* Explore key principles and patterns to build agile, scalable, and future-proof apps
* Master cloud-native essentials: service mesh, DDD, and API-centric approaches
* Implement deployment pipelines with advanced IaC, CI/CD, DevSecOps, and GitOps techniques
* Manage and monitor data, security, compliance, and identity access in multi-cloud scenarios
* Optimize your cloud costs with shift-left and FinOps practices

If you feel this book is for you, get your [copy](https://www.amazon.com/Multi-Cloud-Handbook-Developers-implementing-cloud-native-ebook/dp/B0CQT1R6QK) today!

<a href="https://www.packtpub.com/?utm_source=github&utm_medium=banner&utm_campaign=GitHubBanner"><img src="https://raw.githubusercontent.com/PacktPublishing/GitHub/master/GitHub.png" alt="https://www.packtpub.com/" border="5" /></a>

## Instructions and Navigations
All of the code is organized into folders. For example, Chapter02.

The commands will look like the following:
```
stages {
    stage('Build') {
        steps {
            sh '''docker build -t my-node-app .
            docker tag my-node-app jeveenj/my-node-app
            docker push jeveenj/my-node-app
            '''
        }
    }
    stage('Test') {
        steps {
            sh 'docker run --rm my-node-app npm test'
        }
    }
    stage('Deploy') {
        steps {
            sh 'kubectl apply -f deployment.yaml'
        }
    }
}

```

**Following is what you need for this book:**
Ideal for cloud-native and cloud developers, platform engineers, software architects, and IT professionals focused on building and managing cloud-native applications in multi-cloud environments, this book is an indispensable guide for students and researchers seeking insights into cloud-native concepts and multi-cloud architectures. A basic understanding of cloud computing, contemporary software development, system design, and cloud platforms such as AWS, Azure, and GCP, will prove useful.

With the following software and hardware list you can run all code files present in the book (Chapter 1-10).

### Software and Hardware List

| Chapter  | Software required                                                                                           | OS required                        |
| -------- | ----------------------------------------------------------------------------------------------------------- | -----------------------------------|
| 1-10     | Node.js v9.8.1, Docker, Terraform v1.6.5, Jenkins v2.435, AWS, Microsoft Azure, Google Cloud Platform (GCP) | Windows, Mac OS X, and Linux (Any) |


### Related products <Other books you may enjoy>
* Technology Operating Models for Cloud and Edge [[Packt]](https://www.packtpub.com/product/technology-operating-models-for-cloud-and-edge/9781837631391) [[Amazon]](https://www.amazon.com/Technology-Operating-Models-Cloud-Edge/dp/1837631395)

* Azure for Developers [[Packt]](https://www.packtpub.com/product/azure-for-developers-second-edition/9781803240091) [[Amazon]](https://www.amazon.com/Azure-Developers-ecosystems-containers-serverless/dp/1803240091)

## Get to Know the Authors
**Subash Natarajan**
He is a renowned tech strategist, standing at the forefront of software engineering, advisory, and technical leadership. With a keen focus on system integration, automation, and transformations, he has masterfully steered numerous enterprises through their digital evolution, seamlessly aligning IT frameworks with broad business visions.

**Jeveen Jacob**
He is a seasoned expert in software and cloud technologies. His career, blossoming from hands-on software development to strategic roles in cloud services, DevSecOps, and site reliability engineering, showcases his adaptability and impact. Jeveen's proficiency lies in tailoring a broad skill set to meet the unique demands of diverse clients, marking him as a versatile and influential professional.


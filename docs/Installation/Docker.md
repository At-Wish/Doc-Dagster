---
sidebar_position: 1
---

# Docker Installation

Docker provides a convenient way to run Dagster in a containerized environment, ensuring consistency across different development and deployment environments.

## Prerequisites

Before installing Dagster with Docker, make sure you have:

- Docker installed on your system
- Docker Compose (optional, but recommended for multi-service setups)
- Basic understanding of Docker concepts
- GitHub deployment repo https://github.com/At-Wish/code-dagster-deploy 

## Steps
### Preparing Environment 
This step is optional if you want to follow you can but we will only be creating folders for setting up dagster. If you already have folder structure where you will deploy dagster you can ignore this.
```
sudo mkdir -p /app/dagster
sudo chown -R $USER:$USER /app/dagster
```

### Cloning Dagster Deployment Repository
I create a repo with code that you can use as base to start the deployment. Please note most of this code is copied from Dagster OSS deployment document. 
```
git clone https://github.com/At-Wish/code-dagster-deploy
cd code-dagster-deploy
```

### Setting Up Environment Variables
The repository comes with an example environment file. You need to copy it and configure it with your values.
```
cp env.example .env
```

Now edit the `.env` file with your configuration. The main variables you might want to change are:
- Database credentials (POSTGRES_USER, POSTGRES_PASSWORD, etc.)
- Port configurations (DOCKER_WEBSERVER_PORT)
- Storage paths (IO_MANAGER_STORAGE_PATH)

### Starting Dagster Services
Once you have configured your environment, you can start all the services using Docker Compose.
```
docker compose up -d --build
```

This command will:
- Build the Dagster container
- Start PostgreSQL database
- Start Dagster webserver
- Start Dagster daemon
- Run everything in detached mode

### Accessing Dagster UI
After the services are running, you can access the Dagster web interface at:
```
http://localhost:3000
```
OR
```
http://your-server-ip:3000
```

The UI will show you the Dagster dashboard where you can monitor your pipelines, schedules, and assets.

### Checking Service Status
To check if all services are running properly:
```
docker compose ps
```

To view logs from all services:
```
docker compose logs -f
```

To view logs from a specific service:
```
docker compose logs -f dagster-webserver
```

### For code deployment and CI/CD i ill write additional documentations and create videos.
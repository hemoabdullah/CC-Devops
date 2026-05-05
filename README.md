# CC-Devops - Student Portfolio

A modern student portfolio website built with Next.js, featuring Docker containerization and CI/CD integration.

## About Me

**Name:** Hammam Abdullah  
**Student ID:** 2341720203  
**Focus:** Cloud Computing & DevOps

### Tech Interests
- ☁️ Cloud Computing
- 🔧 DevOps
- 💻 Full Stack Development
- 🎨 UI/UX Design

### Skills
**Languages & Frameworks:**
- JavaScript / TypeScript
- React / Next.js
- Node.js
- HTML / CSS / Tailwind

**DevOps & Tools:**
- Docker
- Git / GitHub
- CI/CD Pipelines
- Linux

## Project Overview

This project demonstrates a complete DevOps workflow including:
- Next.js application with modern UI
- Multi-stage Docker build for production deployment
- Docker Hub image hosting
- GitHub Actions CI/CD pipelines
- Automated testing and deployment

## Docker Hub

The application is containerized and available on Docker Hub:
- **Repository:** [hammam12/cc-devops](https://hub.docker.com/r/hammam12/cc-devops)
- **Image:** `hammam12/cc-devops:latest`

### Running with Docker

Pull and run the image:

```bash
docker pull hammam12/cc-devops:latest
docker run -p 3000:3000 hammam12/cc-devops:latest
```

Access the application at [http://localhost:3000](http://localhost:3000)

### Building Locally

```bash
docker build -t cc-devops:latest .
docker run -p 3000:3000 cc-devops:latest
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## CI/CD Pipeline

### PR Check Workflow (`.github/workflows/pr-check.yml`)
Triggered on pull requests to main branch:
- npm install
- lint
- build

### Docker Publish Workflow (`.github/workflows/docker-publish.yml`)
Triggered on push to main branch:
- Builds Docker image
- Pushes to Docker Hub

**Required GitHub Secrets:**
- `DOCKER_USERNAME`: hammam12
- `DOCKER_PASSWORD`: Docker Hub access token

## Tech Stack

- **Framework:** Next.js 16.2.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Containerization:** Docker (multi-stage build)
- **CI/CD:** GitHub Actions
- **Node Version:** 20 Alpine

## Portfolio

This portfolio showcases:
- CC-Devops Project (Next.js + Docker + GitHub Actions)
- Cloud Infrastructure Projects (AWS + Terraform)

## Contact

- **GitHub:** [hemoabdullah](https://github.com/hemoabdullah)

## License

This project is for educational purposes.

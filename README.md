# PropertyGuru Playwright Test Framework

## Overview
A scalable test automation framework built using Playwright for UI and API testing, following the Page Object Model (POM) design pattern. It supports environment-based execution, CI/CD pipelines, Dockerized runs, and Allure reporting.

---

## Tech Stack
- Playwright
- JavaScript / TypeScript
- Page Object Model (POM)
- REST API Testing
- Allure Reports
- GitHub Actions (CI/CD)
- Docker

---

## Project Structure
pages/ # Page Object classes
tests/ # Test specs (UI + API)
api/ # API helpers & services
utils/ # Utilities (helpers, logger, config)
config/ # Environment configs
test-data/ # Test data files
reports/ # Allure reports output


---

## Installation

``bash``
npm install
npx playwright install

##Run All Tests
npx playwright test


##CI/CD (GitHub Actions)
Automated test execution on every push and pull request.


##Docker Support
Framework can be executed inside a containerized environment.


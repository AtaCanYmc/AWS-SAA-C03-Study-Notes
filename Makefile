.DEFAULT_GOAL := help

PYTHON ?= python3
NPM ?= npm

.PHONY: help install dev build preview export translate py-check lint validate-structure validate test check-links clean

help: ## Show this help menu
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install web application dependencies
	@$(NPM) --prefix web install

dev: ## Start web development server
	@$(NPM) --prefix web run dev

build: ## Build web application for production
	@$(NPM) --prefix web run build

preview: ## Preview the production build of the web app
	@$(NPM) --prefix web run preview

export: ## Parse notes and export structured questions to web/src/data/questions.json
	@$(PYTHON) scripts/export_questions.py

translate: ## Run English to Turkish translation sync script
	@$(PYTHON) scripts/translate_notes.py

py-check: ## Verify syntax of Python scripts
	@$(PYTHON) -m py_compile scripts/*.py
	@echo "Python syntax check passed."

lint: ## Run markdownlint on documentation and notes
	@npx --yes markdownlint-cli "**/*.md" --ignore node_modules --ignore web/node_modules
	@echo "Markdownlint check passed."

validate-structure: ## Verify governance files and dual-language notes structure
	@test -f README.md
	@test -f CONTRIBUTING.md
	@test -f SECURITY.md
	@test -f LICENSE
	@test -f .github/PULL_REQUEST_TEMPLATE.md
	@test -f .github/ISSUE_TEMPLATE/question_correction.yml
	@test -f .github/ISSUE_TEMPLATE/feature_request.yml
	@test -d notes/en/01-aws-certified-solutions-architect-associate-saa-c03
	@test -d notes/en/02-aws-saa-c03-question-bank-1019
	@test -d notes/en/03-caa-exam-questions-explained
	@test -f notes/en/01-aws-certified-solutions-architect-associate-saa-c03/notes.md
	@test -f notes/en/02-aws-saa-c03-question-bank-1019/notes.md
	@test -f notes/en/03-caa-exam-questions-explained/notes.md
	@test -d notes/tr/01-aws-certified-solutions-architect-associate-saa-c03
	@test -d notes/tr/02-aws-saa-c03-question-bank-1019
	@test -d notes/tr/03-caa-exam-questions-explained
	@test -f notes/tr/01-aws-certified-solutions-architect-associate-saa-c03/notes.md
	@test -f notes/tr/02-aws-saa-c03-question-bank-1019/notes.md
	@test -f notes/tr/03-caa-exam-questions-explained/notes.md
	@echo "Repository structure verification passed."

validate: validate-structure py-check lint ## Run all CI validation checks locally

test: validate ## Alias for validate

check-links: ## Check external links using lychee (if installed)
	@if command -v lychee >/dev/null 2>&1; then \
		lychee --cache --max-cache-age 1d --exclude-file .lycheeignore --accept 200,204,403 --timeout 20 "**/*.md"; \
	else \
		echo "lychee is not installed. Install via 'brew install lychee' or run through GitHub Actions."; \
	fi

clean: ## Clean build artifacts and cache files
	@rm -rf web/dist
	@find . -type d -name "__pycache__" -exec rm -rf {} + 2>/dev/null || true
	@find . -type f -name "*.pyc" -delete 2>/dev/null || true
	@echo "Cleaned build artifacts and cache files."

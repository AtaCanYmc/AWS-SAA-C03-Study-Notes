# Contributing Guidelines

Contributions to improve notes, formatting, and conversion tooling are welcome.

## Code of Conduct

Maintain professional communication and focus strictly on constructive technical feedback and study accuracy.

## Commit Message Conventions

This repository follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` Adds a new study module, script capability, or parser feature.
- `fix:` Corrects an answer key, typo, broken markdown link, or conversion bug.
- `docs:` Updates documentation, governance files, or study guides.
- `refactor:` Restructures conversion logic without altering functional output.
- `chore:` Maintenance tasks, dependency updates, or gitignore adjustments.

Example:
```text
feat(converter): add chunking support for sub-module notes
fix(docs): resolve broken relative links in section index
```

## Branch Strategy

1. Branch off `main` with a descriptive prefix:
   - `feature/<name>`
   - `fix/<name>`
   - `docs/<name>`
2. Keep individual pull requests scoped to a single topic.

## Local Verification

Before submitting a pull request, verify that:

1. Python scripts execute without syntax or runtime errors:
   ```bash
   python3 -m py_compile convert.py
   ```
2. Markdown links and table formatting render correctly in a local viewer or linter.
3. No raw proprietary binaries or personal credentials are committed.

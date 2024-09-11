# Git Guide

## Overview

Git is a version control system that helps you track changes in your code, collaborate with others, and manage your project’s history. This guide provides essential Git commands and workflows to help you work efficiently in the hackathon.

## Common Git Commands

### **Setting Up Your Repository**
- **Clone a Repository**: To start working on the project, clone the repository to your local machine.
  ```
  git clone https://github.com/yourusername/CodeForAccessHackathon.git
  ```

### **Working with Branches**
- **Create a New Branch**: Always work on a new branch for your feature or task to keep the main branch clean.
  ```
  git checkout -b your-branch-name
  ```
- **Switch Branches**: Move between branches as needed.
  ```
  git checkout branch-name
  ```

### **Making Changes**
- **Check Status**: See what changes have been made.
  ```
  git status
  ```
- **Add Changes**: Stage files for commit.
  ```
  git add filename.js
  ```
  To add all changes:
  ```
  git add .
  ```

### **Committing Changes**
- **Commit Changes**: Save your staged changes with a meaningful message.
  ```
  git commit -m "Description of changes"
  ```

### **Pushing Changes**
- **Push Changes to GitHub**: Push your changes to your branch on GitHub.
  ```
  git push origin your-branch-name
  ```

### **Merging Changes**
- **Pull Latest Changes**: Before merging your branch, make sure you have the latest updates from the main branch.
  ```
  git pull origin main
  ```
- **Merge Your Branch**: After resolving any conflicts, merge your changes into the main branch via a pull request on GitHub.

## Best Practices

- **Commit Often**: Make small, frequent commits with descriptive messages to keep track of changes.
- **Pull Regularly**: Sync your local branch with the main branch regularly to avoid conflicts.
- **Branch Naming**: Use descriptive branch names (e.g., `feature/contrast-toggle`) to make it clear what you’re working on.

## Troubleshooting Tips

- **Undo Last Commit**: If you’ve made an incorrect commit, you can undo it.
  ```
  git reset --soft HEAD~1
  ```
- **Resolve Merge Conflicts**: If you encounter conflicts, manually edit the conflicting files and commit the resolved versions.

## Additional Resources
- [Pro Git Book](https://git-scm.com/book/en/v2) - Comprehensive guide to mastering Git.
- [Git Documentation](https://git-scm.com/doc) - Official Git documentation and resources.

# **CodeForAccessHackathon**

Welcome to the **Code for Access: The Accessibility Challenge** hackathon repository! This repository is designed to support participants as they work on accessibility-focused coding challenges using HTML, CSS, JavaScript, and React. Whether you're a beginner or an experienced developer, this space provides all the resources, guides, and starter code you need to participate successfully.

## **Overview**

The **Code for Access** hackathon aims to engage participants in building accessible web features that improve user experiences for people with disabilities. This collaborative effort emphasizes inclusive design, hands-on coding, and the real-world impact of accessible software.

## **Predefined Coding Challenges**

Each team will choose one of the following challenges:

1. **Color Contrast Enhancer:**  
   Develop a button that toggles between normal and high-contrast modes, meeting WCAG 2.1 AA standards to improve readability for users with visual impairments. Starter code and instructions can be found in the `/color-contrast-enhancer` folder.

2. **Accessible Form Validation:**  
   Create a simple form with real-time, accessible error messaging. Ensure error messages are clear, descriptive, screen-reader friendly, and visually accessible without relying solely on color. Starter code and instructions are located in the `/accessible-form-validation` folder.

3. **Keyboard-Friendly Navigation:**  
   Design a dynamic navigation menu fully functional with keyboard controls. Implement intuitive keyboard shortcuts and tab navigation, allowing users to explore the site without using a mouse. The starter code and instructions are in the `/keyboard-friendly-navigation` folder.

## **Repository Structure**

- **/public**  
  Contains public files, including `index.html`, which serves as the entry point for the application.

- **/resources**  
  Includes the following guides to assist participants:
  - **AccessibilityGuide.md**: Key accessibility principles and tips for each challenge.
  - **GitGuide.md**: Essential Git commands to manage branches and push code.
  - **ReactCheatSheet.md**: Quick reference for basic React concepts.

- **/src**  
  The main source folder containing all components and styling files:
  
  - **/components**  
    - **/AccessibleFormValidation**  
      - **FormValidation.js**: Starter code for the Accessible Form Validation challenge.
      - **instructions.md**: Instructions specific to this challenge.

    - **/ColorContrastEnhancer**  
      - **ContrastToggle.js**: Starter code for the Color Contrast Enhancer challenge.
      - **instructions.md**: Instructions specific to this challenge.

    - **/KeyboardFriendlyNavigation**  
      - **KeyboardNav.js**: Starter code for the Keyboard-Friendly Navigation challenge.
      - **instructions.md**: Instructions specific to this challenge.

- **/css**  
  Contains CSS files for general styling and specific component styles:
  - **App.css**: Styles for the main application.
  - **index.css**: Basic and accessibility-focused styles.

- **App.js**  
  The main application file, which includes the layout and rendering logic.

- **index.js**  
  The entry point for rendering the React application.

- **.gitignore**  
  Specifies files and folders to be ignored by Git, such as node_modules and build outputs.

- **README.md**  
  The main documentation file with the overview, instructions, and checklist for the hackathon.

- **amplify.yml**  
  Configuration file for AWS Amplify to automate deployments for each branch.

- **package.json & package-lock.json**  
  Lists project dependencies and scripts used to run, build, and manage the application.

## **Getting Started**

### **1. Create Your Branch Before You Start Coding**

**Creating your own branch is critical as it allows AWS Amplify to create a unique deployment link for your team’s work. This ensures each team can see their progress live and demo their work effectively.** 

1. **Open the Codespace:**
   - Click the **Code** button on the repository's main page.
   - Select **Open with Codespaces** and click **New Codespace**.

2. **Create Your Branch in Codespaces:**
   - Once inside your Codespace, open the terminal.
   - Create a new branch specific to your team:
     ```
     git checkout -b team-name
     ```
   - Example:
     ```
     git checkout -b team-shelley
     ```

3. **Push Your Branch to GitHub:**
   - Once your branch is created, push it to GitHub to trigger AWS Amplify to recognize your branch for deployment:
     ```
     git push origin your-branch-name
     ```

### **2. Work on Your Challenge**

1. Navigate to your assigned challenge folder (`/color-contrast-enhancer`, `/accessible-form-validation`, or `/keyboard-friendly-navigation`).
2. Follow the instructions in the `instructions.md` file specific to your challenge.
3. Use the provided starter code to build and test your solution.

### **3. Commit and Push Your Changes Regularly**

- As you work on your code, make sure to regularly commit and push your changes to keep your branch updated:
  ```
  git add .
  git commit -m "Describe your changes here"
  git push origin your-branch-name
  ```

### **4. View Your Live Deployment Link**

- AWS Amplify will automatically generate a live deployment link for your branch once it's pushed to GitHub. You will receive your unique URL from the event coordinator shortly after pushing your branch.
- Use this link to view your work live and prepare for your demonstration.

## **TODO Checklist**

Below is a checklist of all the files containing `TODOs` that you need to address during the hackathon. Use this list to ensure you complete all required tasks:

- **/color-contrast-enhancer/ContrastToggle.js**
  - [ ] Implement the high-contrast mode toggling logic.
  - [ ] Ensure button accessibility with ARIA attributes.
  - [ ] Test with a screen reader for accessibility compliance.

- **/accessible-form-validation/FormValidation.js**
  - [ ] Add screen-reader-friendly error messaging using ARIA attributes.
  - [ ] Style error messages to be visually distinct without relying solely on color.
  - [ ] Test the form for keyboard accessibility and screen reader support.

- **/keyboard-friendly-navigation/KeyboardNav.js**
  - [ ] Implement keyboard event handlers to support navigation with Enter and Arrow keys.
  - [ ] Style focus states for all navigable elements to make them visible.
  - [ ] Ensure full keyboard functionality of the navigation menu.

- **/css/index.css**
  - [ ] Add styles for high-contrast mode to improve readability.
  - [ ] Style error messages for forms to be accessible and screen reader-friendly.

## **Resources**

- **React Cheat Sheet**: Quick reference for basic React concepts in the `/resources` folder.
- **Accessibility Guide**: Key accessibility principles and tips for each challenge.
- **Git Guide**: Essential Git commands to manage branches and push code.

## **AWS Amplify Deployment Links** ##
This section lists the deployment links generated by AWS Amplify for each branch. As branches are created and deployed, you can reference this table for the corresponding links to view the live versions of each team's work. (Give 5 mins after branch creation for deployment link to get generated and added)

| **Branch Name**         | **Deployment Link**                                      |
|-------------------------|----------------------------------------------------------|
| `main`                  | <a href="https://main.dxxmujgcp190n.amplifyapp.com/" target="_blank">View Deployment</a>    |
| `test-keyboard`         | <a href="https://feature.dxxmujgcp190n.amplifyapp.com/" target="_blank">View Deployment</a> |
| `test-form`             | <a href="https://berucha.dxxmujgcp190n.amplifyapp.com/" target="_blank">View Deployment</a> |

## **Sharing Learnings and Demonstrations**

At the end of the hackathon, each team will use their AWS Amplify deployment link to demo their work, showcasing how their feature improves accessibility. Teams will also share their coding process, challenges faced, and insights gained.

## **Support and Contact**

- **Need Help?** Feel free to reach out via Teams during the hackathon for real-time support.
- **Contact the Coordinator:** If you have questions or run into issues, feel free to contact the event coordinators directly.

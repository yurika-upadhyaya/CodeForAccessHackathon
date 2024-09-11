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

- **/README.md**  
  The main resource for the hackathon, providing an overview, instructions, and links to additional guides.

- **/color-contrast-enhancer**  
  Contains starter code, instructions, and resources specific to the Color Contrast Enhancer challenge.

- **/accessible-form-validation**  
  Contains starter code, instructions, and resources specific to the Accessible Form Validation challenge.

- **/keyboard-friendly-navigation**  
  Contains starter code, instructions, and resources specific to the Keyboard-Friendly Navigation challenge.

- **/resources**  
  A collection of guides on HTML, CSS, JavaScript, React basics, Git workflow, accessibility principles, and AWS Amplify deployment instructions.

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

## **Resources**

- **React Cheat Sheet**: Quick reference for basic React concepts in the `/resources` folder.
- **Accessibility Guide**: Key accessibility principles and tips for each challenge.
- **Git Guide**: Essential Git commands to manage branches and push code.

## **Sharing Learnings and Demonstrations**

At the end of the hackathon, each team will use their AWS Amplify deployment link to demo their work, showcasing how their feature improves accessibility. Teams will also share their coding process, challenges faced, and insights gained.

## **Support and Contact**

- **Need Help?** Feel free to reach out via Teams during the hackathon for real-time support.
- **Contact the Coordinator:** If you have questions or run into issues, feel free to contact the event coordinators directly.

# Keyboard-Friendly Navigation Challenge

## Objective

Your task is to design a navigation menu that is fully functional with keyboard controls. Users should be able to navigate through the menu using the keyboard without relying on a mouse.

## Getting Started

1. **Install Dependencies:**
   - Open your terminal and run the following command in the project root to install all necessary dependencies:
   ```
   npm install
   ```

2. **Open the Starter Code:**
   - Navigate to the `KeyboardNav.js` file in this folder.

3. **Understand the Current Setup:**
   - The starter code includes a basic navigation menu with several links.

4. **Your Task:**
   - Enhance the navigation to ensure keyboard accessibility:
     - Implement `tabIndex` attributes where necessary.
     - Add keyboard event handlers to support navigation with Enter and Arrow keys.
     - Ensure that the focus state is visible when navigating through links.

5. **Steps to Complete:**
   - **Step 1:** Add `tabIndex` to non-link elements if they need to be focusable (e.g., custom buttons).
   - **Step 2:** Implement keyboard event handlers to enable navigation using the Arrow keys.
   - **Step 3:** Style the focus state for each link to ensure it’s visible to users.

6. **Testing Your Work:**
   - Use keyboard-only navigation to ensure all links and buttons can be accessed.
   - Check that focus indicators are clearly visible for all navigable elements.

## Tips and Hints

- Use the `focus` pseudo-class in CSS to style focused elements, making them more visible.
- Ensure that the `Enter` key can activate links and any custom controls in the navigation.

## Resources

- Review the `/resources/AccessibilityGuide.md` for detailed tips on keyboard navigation.
- Use `/resources/ReactCheatSheet.md` for React-specific help and best practices.

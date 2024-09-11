# Color Contrast Enhancer Challenge

## Objective

Your task is to create a button that toggles between normal and high-contrast modes, improving readability for users with visual impairments. The high-contrast mode should adjust text and background colors to meet WCAG 2.1 AA standards for color contrast.

## Getting Started

1. **Open the Starter Code:**
   - Navigate to the `ContrastToggle.js` file in this folder.

2. **Understand the Current Setup:**
   - The starter code includes a basic button and a text section that changes its background and text color based on the `highContrast` state.

3. **Your Task:**
   - Enhance the current implementation to meet the following criteria:
     - Adjust colors to ensure high contrast that meets accessibility standards.
     - Update the button text or appearance to indicate which mode is active.
     - Ensure that the feature is keyboard accessible (e.g., users can toggle using the Enter key).

4. **Steps to Complete:**
   - **Step 1:** Update the color values inside the `toggleContrast` function to ensure high-contrast colors meet WCAG standards.
   - **Step 2:** Add ARIA attributes or visually hidden text to make the button accessible for screen readers.
   - **Step 3:** Test your implementation using a screen reader and ensure the button is keyboard accessible.

5. **Testing Your Work:**
   - Use accessibility testing tools like [Chrome’s Lighthouse audit](https://developer.chrome.com/docs/lighthouse/overview#get-started) to check color contrast compliance.
   - Ensure that all functionality can be operated via keyboard controls.

## Tips and Hints

- Use online tools like the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to test color contrast ratios.
- To add keyboard accessibility, ensure that the button is focusable and responds to both click and keyboard events.

## Resources

- Refer to the `/resources/AccessibilityGuide.md` for more tips on color contrast and accessible design.
- Use `/resources/ReactCheatSheet.md` if you need a refresher on React basics.

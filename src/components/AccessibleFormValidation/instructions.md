# Accessible Form Validation Challenge

## Objective

Your task is to create a simple form with real-time, accessible error messaging. Error messages should be clear, descriptive, screen-reader friendly, and visually displayed without relying solely on color.

## Getting Started

1. **Install Dependencies:**
   - Open your terminal and run the following command in the project root to install all necessary dependencies:
   ```
   npm install
   ```

2. **Open the Starter Code:**
   - Navigate to the `FormValidation.js` file in this folder.

3. **Understand the Current Setup:**
   - The starter code includes a basic form with an input field and submit button. It currently displays a simple error message if the input is empty.

4. **Your Task:**
   - Enhance the form validation to meet accessibility standards:
     - Ensure error messages are announced by screen readers.
     - Use ARIA attributes to enhance form elements for accessibility.
     - Add visual indicators for errors that do not rely solely on color.

5. **Steps to Complete:**
   - **Step 1:** Add ARIA attributes (like `aria-invalid` and `aria-describedby`) to connect error messages to their corresponding input fields.
   - **Step 2:** Modify the error message styling to include symbols or other non-color indicators to help visually impaired users recognize errors.
   - **Step 3:** Test your implementation using screen readers to ensure error messages are read aloud.

6. **Testing Your Work:**
   - Use screen readers like NVDA (Windows) or VoiceOver (Mac) to check if error messages are announced.
   - Test the form’s keyboard navigation to ensure full accessibility.

## Tips and Hints

- Use `aria-live="assertive"` for error messages to ensure they are announced immediately.
- Ensure all form elements have proper labels using `label` tags or `aria-label` attributes.

## Resources

- Refer to the `/resources/AccessibilityGuide.md` for more on accessible forms.
- Check the `/resources/GitGuide.md` if you need help pushing your changes.

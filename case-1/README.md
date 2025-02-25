# Case 1

1. Create a duplication of the `Origin` page, create a new route for it and add a navigation item on the homepage
2. Make sure the Bolt Design System foundational styles are loaded by adding it in the root of the project (path = `@boltenergy-be/design-system/dist/assets/foundations.css`)
3. Use [Bolt Design System components](rebranding.design-system.boltenergie.be), Most likely on the following will be used:
   - Form
   - TextField
   - TextArea
   - Heading
   - Button
   - Toast
4. Save the form values in a state.
5. Validate the form before submission and show the error for each invalid field. (DS components have an error prop)
   - All fields are required.
   - Email should be the correct pattern. (You can use EMAIL_REGEX from the constants folder)
6. Add a loading state when submitting the form. (Button component has a prop for the visual confirmation)
7. Pop a success or error message using The DS Toast component. ([documentation](https://rebranding.design-system.boltenergie.be/?path=/docs/components-toast--docs))
8. Optimize where you think it is needed or necessary.


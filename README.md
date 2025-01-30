# InstanTgram (An Instagram clone)

## Approach
The task is to create a mobile-responsive clone of the Instagram website using React/Vue + TailwindCSS. I decided to use React since I am most familiar with it. The first thing I did was to study the actual homepage of Instagram to understand the component structure before actually starting development.

### Component Structure
![Homepage Components](https://i.imgur.com/IhFjtcy.png)

The components are mainly divded into 3, the mobile mockup, the login form, and the site footer.

### Assets & Styles
I figured it would be easier to grab assets from the Instagram page itself rather than desigining on my own, since the criteria also included the accuracy of the design. I also copied the CSS variables in the Instagram site and added them as extended theme values in my Tailwind config.

### Login Form
The login form is a basic SPA way of using forms (i.e. handling the onSubmit event). From the 3 components, the login form is probably the easiest.

By using any `username`, `email`, or `phone` listed in [JSON Placeholder Users API](https://jsonplaceholder.typicode.com/users), it will show a welcome message with the corresponding user's name. Invalid credentials will also be flashed into the view if attempted.

### Site Footer
The site footer is also easay to follow. However the original site had language preference, I decided to add theme switching since it was also included in the criteria.

The component has a sub-component, `ThemeSwitcher` which is a simple select element that has the ability to change the `ThemeContext.Provider` value.

I decided to use the [Context API](https://react.dev/reference/react/hooks#context-hooks) to avoid prop-drilling the theme value between the switcher and the root component.

### Mobile Mockup
Is the hardest one to approach, as it uses arbitrary units in its layout to make the presentation better. After using Chrome DevTools to analyze how the page was structured, I was able to mimic its design.

## Project Setup
1. Clone the project repository
```bash
  git clone https://github.com/mlmejo/instantgram.git
```
2. Change into the project directory and install the dependecies.
```bash
  cd instantgram
  npm install
```
3. Serve the project locally using Vite
```bash
  npm run dev
```

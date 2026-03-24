🎨 FINAL DESIGN SYSTEM (UPDATED)
✅ Colors (STRICT USAGE)
Background → Sand Dune (#E2C799)
Primary Text → Pine Teal (#0F3D3E)
Secondary Background → Pale Oak (#F5EFE6)
Accent → Dark Teal (#082C2D)
🧠 UI Rules (VERY IMPORTANT)
Background → Sand Dune (default)
Alternate sections → Pale Oak
Text → ALWAYS Pine Teal
Buttons → Pine Teal bg + Sand Dune text
Cards → Pale Oak OR slightly darker Sand tone
Borders → subtle teal

👉 This gives a light, premium, non-generic look

🚀 UPDATED PHASE-WISE MASTER PROMPTS
🧱 PHASE 1: SETUP + GLOBAL THEME
Create a React (Vite) project using TailwindCSS.

Apply a global design system:

- Background: Sand Dune (#E2C799)
- Text: Pine Teal (#0F3D3E)
- Secondary sections: Pale Oak (#F5EFE6)

Global styles:
- Smooth scrolling
- Large spacing between sections
- Centered container layout
- Use modern clean font (Inter or Poppins)

Structure the app with sections:
IntroScene, Hero, Skills, Projects, Certifications, Achievements, Education, Contact

Ensure all sections are visually consistent with the color palette.
🎬 PHASE 2: INTRO SCENE
Create a full-screen IntroScene with Sand Dune background.

Add centered text:
- Large bold name in Pine Teal
- Subtitle: "Full Stack Developer"

Use GSAP:
- Fade-in text with slight upward motion
- Add blur-to-clear transition
- After 2.5 seconds, fade out entire screen

Allow skip on click.

Transition smoothly into Hero section.
🧑‍💻 PHASE 3: HERO SECTION (UPDATED UI 🔥)
Create a Hero section with Sand Dune background.

Layout:
- Left side: text content
- Right side: profile image

Left content:
- Heading: "Hello, I'm"
- Name in large bold Pine Teal text
- Short description (2–3 lines)
- Resume download button (Pine Teal background, Sand Dune text)
- GitHub and LinkedIn icons (Pine Teal)

Right:
- Circular or soft-rounded image with subtle shadow

Use GSAP:
- Stagger text appearance
- Float animation on image (slow vertical movement)
- Buttons fade in with delay

Ensure responsive stacking for mobile.
🧰 PHASE 4: SKILLS SECTION
Create a Skills section with Pale Oak background.

Organize skills into categories:
- Languages
- Frontend
- Backend
- Database
- Tools

Each category:
- Display inside a card (light Sand tone or white)
- Text in Pine Teal

Use GSAP ScrollTrigger:
- Cards animate with staggered fade + upward motion
- Add hover effect: scale + shadow

Keep spacing clean and structured.
🚀 PHASE 5: PROJECTS (UPDATED VISUAL STYLE 🔥)
Create a Projects section with Sand Dune background.

Implement horizontal scroll using GSAP ScrollTrigger:
- Pin section
- Scroll vertically to move projects horizontally

Each project card:
- Background: Pale Oak or slightly darker Sand
- Rounded corners
- Shadow for depth

Left side:
- Project name (bold Pine Teal)
- Date
- Detailed bullet description
- Tech stack tags (outlined or filled)
- GitHub button (Pine Teal bg)

Right:
- Large project image/logo

Add GSAP animations:
- Text slides in from left
- Image scales slightly
- Smooth transitions between cards

Ensure premium spacing and readability.
🏆 PHASE 6: CERTIFICATIONS
Create a Certifications section with Pale Oak background.

Display certificates in a grid layout.

Each card:
- Light background
- Logo
- Certificate name (Pine Teal)

On click:
- Open full certificate image

Add GSAP:
- Fade-in on scroll
- Slight zoom on hover
🧠 PHASE 7: ACHIEVEMENTS
Create an Achievements section with Sand Dune background.

Display 4 stat cards:
- 300+ Problems Solved
- 1500 LeetCode Rating
- 2★ CodeChef
- Top 10 Hackathon

Cards:
- Pale Oak background
- Pine Teal text

Use GSAP:
- Count-up animation for numbers
- Subtle hover lift effect

Center align everything.
🎓 PHASE 8: EDUCATION
Create an Education section with Pale Oak background.

Design a vertical timeline:
- Each entry has title, score, location, and duration

Text in Pine Teal.

Use GSAP:
- Timeline line grows while scrolling
- Each item fades in sequentially

Keep layout minimal and clean.
💻 PHASE 9: CONTACT TERMINAL (UPDATED THEME 🔥)
Create a Contact section styled like a terminal UI.

Background: Pine Teal
Text: Pale Oak

Design inputs like:
> name:
> email:
> message:

Add:
- Blinking cursor
- Typing animation
- Submit button

On submit:
- Show success message like terminal output

Use GSAP:
- Typing effect
- Cursor blinking
🏁 FINAL POLISH
Improve overall UX:

- Ensure smooth scrolling
- Maintain consistent spacing and typography
- Optimize animations for performance
- Ensure full mobile responsiveness
- Add subtle transitions between sections

Keep UI minimal, premium, and clean.
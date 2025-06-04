README.TXT

PROJECT NAME
CodingTempleWebsite

PROJECT OVERVIEW
CodingTempleWebsite is a multi-page responsive website built with HTML5, CSS3, and Bootstrap 5. The project showcases practical use of Bootstrap’s responsive grid, components, and JavaScript integrations to deliver a smooth user experience across devices. It includes a homepage (index.html), an application page (apply.html), and a contact page (contact.html), each designed with semantic structure and user interaction in mind.

PROJECT STRUCTURE
- index.html
  The main landing page of the website. Key sections include:

  1. Navbar section
     - Sticky Top: The navbar uses the `sticky-top` class to remain fixed at the top of the viewport when scrolling.
     - Dark Theme: Styled with `navbar-dark` and `bg-black` classes for a sleek black background with white text.
     - Responsive Collapse: Includes a hamburger menu button (`navbar-toggler`) that toggles the navigation links on smaller screens.
     - Branding: The left side contains a clickable logo image (`logo.jpg`) linking back to the homepage (`index.html`).
     - Navigation Links:
     - Home: Links to the top of the homepage.
     - Educations, Approaches, Expertise, Tuition, Curriculum: Internal anchor links navigating to specific sections within the homepage.
     - Call-to-Action Button: An “Apply” button styled distinctly (`btn apply-button`) placed on the right, linking to the application page (`apply.html`).
    
  2. Header section
     - Bold headline with dynamic career paths (Software Engineer, Cyber Security, etc.) rendered using ReplaceMe.min.js for animated text effect.  
     - Clear call-to-action button (“Apply”) styled with Bootstrap, linking to the application page.  
     - Responsive layout with Bootstrap grid and a decorative image shown on medium and larger screens for visual appeal.

  3. Workplace section
     - Implements a seamless horizontal logo carousel by cloning the original logos to create an infinite loop effect.
     - Uses CSS `transform: translateX` with smooth transitions to slide logos leftward every second.
     - Resets the carousel position instantly after one full rotation to maintain continuous scrolling without visible jumps.
     - This JS enhances user engagement by dynamically showcasing partner company logos in a visually appealing, automated slider.

  4. Education section
     - Highlights four intensive bootcamp programs: Software Engineering, Cyber Security, Data Analytics, and Quality Assurance, each providing 100+ hours of training with on-demand technical and career coaching.  
     - Uses Bootstrap cards with images, bold titles, and detailed descriptions to clearly present each program’s focus and benefits.  
     - Features a centered header with a “Educations” badge and a strong headline emphasizing the comprehensive training and career support offered.

  5. Approach section
     - Emphasizes a personalized learning experience by limiting monthly enrollments to 100 students for focused attention and better outcomes.  
     - Highlights three core pillars: 1:1 Technical Coaching (100+ hours), Project-Based Learning (10+ projects built from scratch), and 1:1 Career Mentorship with unlimited expert coaching.  
     - Combines descriptive text with icons and accompanying images for each approach to visually reinforce the unique value offered.

  6. Expertise section
     - Focuses on a holistic education model designed to build job-ready skills that meet industry demand, supported by a strong employment rate (90%) and significant salary growth ($23,000 average increase within a year).
     - Showcases eight core expertise areas in two rows, each represented by an icon, a clear title, and a concise description:
     - Uses a clean, card-based layout with transparent backgrounds and consistent styling to present information clearly and visually engage users.

  7. Video Thumbnail section
     - Displays a video thumbnail with a clickable play button.
     - The play button is functional, but the modal video playback does not work.
     - Uses Bootstrap data attributes for modal trigger, but modal setup is incomplete.
    
  8. Price section
     - The **Stats Section** uses a Bootstrap grid layout to display four key statistics with icons, numbers, and descriptions. Each stat is styled with text-warning color and centered within its column to emphasize important achievements.
     - The **Pricing Section** presents three tuition payment options in a responsive row, each inside a card component. Cards have a green background with contrasting text colors and include titles, prices, benefit lists, and an inquiry button linking to the application page.
     - Utility classes like `my-5`, `text-center`, `rounded-0`, and spacing classes (`mt-6`, `mb-5`) ensure proper margins, alignment, and visual consistency across different screen sizes.
     - Icons are from Bootstrap Icons (`bi bi-...`), enhancing visual appeal and quickly communicating the context of each statistic and pricing option.

  9. Curriculum section
     - This section showcases the bootcamp curriculum using Bootstrap cards arranged in two rows, each linking to a modal with detailed module descriptions and images.
     - Each modal provides expanded information about topics like HTML/CSS, JavaScript, React, Python, REST API, and Java 8, enhancing user engagement through interactive content.
     - Bootstrap’s modal and grid system ensures responsive design and smooth toggling between summary cards and detailed views.

  10. Footer section
     - The footer uses Bootstrap’s grid system to organize content into three columns: an about section, useful links with descriptions, and social media icons with contact info.
     - Each link includes a description and an icon, enhancing user navigation and engagement with external resources like graduates, corporate training, and the blog.
     - Social media icons use Bootstrap Icons with consistent styling, encouraging users to connect, while the contact email provides a direct communication channel.

- apply.html
  The application page designed to collect user input via forms.

  1. Application Form
     - Includes various input fields such as text, email, and selects.
     - Uses Bootstrap form controls for styling and responsiveness.
     - Validations implemented for required fields.
     - Submit button styled with Bootstrap classes.

  2. Information Section
     - Additional instructions or notes about the application process.
     - May include links or downloadables for application guidelines.

- contact.html
  The contact page providing ways for users to reach out.

  1. Contact Form
     - Basic contact form with fields like name, email, subject, and message.
     - Styled using Bootstrap forms.
     - Includes client-side validation.

  2. Contact Details
     - Displays company or site contact info such as address, phone, and email.

KEY COMPONENTS AND CODE DETAILS
1. Navigation Bar (Navbar)
   - Shared across all pages.
   - Responsive design with hamburger menu on smaller screens.
   - Uses Bootstrap’s collapse plugin for smooth toggling.

2. Video Modal (index.html)
   - Triggered by clicking the video thumbnail.
   - Dynamically loads and unloads YouTube iframe to control playback.
   - Prevents video from playing in the background after modal is closed.

3. Forms (apply.html & contact.html)
   - Bootstrap form controls ensure consistent styling.
   - Responsive layout adapts to various screen sizes.
   - Client-side validation helps prevent empty or invalid submissions.

4. Responsive Layout
   - Bootstrap grid system organizes content neatly.
   - Columns adjust according to device viewport (xs, sm, md, lg breakpoints).

HOW TO RUN THIS PROJECT
1. Clone the repository:
   git clone https://github.com/dongyunkim96/CodingTempleWebsite.git

2. Change directory:
   cd CodingTempleWebsite

3. Open any of the HTML files (index.html, apply.html, contact.html) in a modern browser.

4. For live reloading during development, use VS Code Live Server or similar local server.

FUTURE IMPROVEMENTS
- Add backend integration for form submissions.
- Implement more advanced validation and user feedback.
- Enhance accessibility features (ARIA roles, keyboard navigation).
- Optimize performance with image compression and lazy loading.

CONTACT INFORMATION
Feel free to open an issue on GitHub or email dongyunkim96@gmail.com for feedback or collaboration.

LICENSE
Free for personal and educational use.
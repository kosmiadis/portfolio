import Section from "../ui/Section";
import Project, { ProjectType } from "./Project";
import chatAppImg_1 from '/src/assets/chat-app/chat_1.png'; 
import chatAppImg_2 from '/src/assets/chat-app/chat_2.png'; 
import chatAppImg_3 from '/src/assets/chat-app/chat_3.png';
import chatAppImg_4 from '/src/assets/chat-app/chat_4.png';
import chatAppImg_5 from '/src/assets/chat-app/chat_5.png';
import chatAppImg_6 from '/src/assets/chat-app/chat_6.png'; 
import chatAppImg_7 from '/src/assets/chat-app/chat_7.png'; 
import chatAppImg_8 from '/src/assets/chat-app/chat_8.png';
import chatAppImg_9 from '/src/assets/chat-app/chat_9.png';
import chatAppImg_10 from '/src/assets/chat-app/chat_10.png';
import chalk59Img_1 from '/src/assets/chalk59/chalk59_1.png'; 
import chalk59Img_2 from '/src/assets/chalk59/chalk59_2.png'; 
import chalk59Img_3 from '/src/assets/chalk59/chalk59_3.png';
import chalk59Img_4 from '/src/assets/chalk59/chalk59_4.png';
import chalk59Img_5 from '/src/assets/chalk59/chalk59_5.png';
import urlShortImg_1 from '/src/assets/url_shortener/url_1.png';
import urlShortImg_2 from '/src/assets/url_shortener/url_2.png';
import urlShortImg_3 from '/src/assets/url_shortener/url_3.png';
import urlShortImg_4 from '/src/assets/url_shortener/url_4.png';
import urlShortImg_5 from '/src/assets/url_shortener/url_5.png';
import urlShortImg_6 from '/src/assets/url_shortener/url_6.png';
import urlShortImg_7 from '/src/assets/url_shortener/url_7.png';
import urlShortImg_8 from '/src/assets/url_shortener/url_8.png';
import urlShortImg_9 from '/src/assets/url_shortener/url_9.png';
import urlShortImg_10 from '/src/assets/url_shortener/url_10.png';
import urlShortImg_11 from '/src/assets/url_shortener/url_11.png';
import urlShortImg_12 from '/src/assets/url_shortener/url_12.png';
import urlShortImg_13 from '/src/assets/url_shortener/url_13.png';
import urlShortImg_14 from '/src/assets/url_shortener/url_14.png';
import urlShortImg_15 from '/src/assets/url_shortener/url_15.png';
import myLibraryImg_1 from '/src/assets/my_library/library_1.png';
import myLibraryImg_2 from '/src/assets/my_library/library_2.png';
import myLibraryImg_3 from '/src/assets/my_library/library_3.png';
import myLibraryImg_4 from '/src/assets/my_library/library_4.png';
import myLibraryImg_5 from '/src/assets/my_library/library_5.png';
import myLibraryImg_6 from '/src/assets/my_library/library_6.png';
import myLibraryImg_7 from '/src/assets/my_library/library_7.png';
import renovation_1 from '/src/assets/renovation_site/renovation_1.png';
import renovation_2 from '/src/assets/renovation_site/renovation_2.png';
import renovation_3 from '/src/assets/renovation_site/renovation_3.png';
import renovation_4 from '/src/assets/renovation_site/renovation_4.png';
import renovation_5 from '/src/assets/renovation_site/renovation_5.png';
import renovation_6 from '/src/assets/renovation_site/renovation_6.png';
import renovation_7 from '/src/assets/renovation_site/renovation_7.png';
import renovation_8 from '/src/assets/renovation_site/renovation_8.png';


const PROJECTS: ProjectType[] = [
    { 
        id: 1,
        title: 'Realtime Chat Application', 
        description: 'A modern, full-stack realtime chat application featuring user authentication, live messaging, and online/offline presence detection. Built with Socket.IO for bi-directional communication and Radix UI for a polished interface, the app supports theming (light/dark mode), responsive design, and smooth user feedback through Sonner toasts. TanStack Query handles data fetching and caching, ensuring a seamless and reactive user experience. Users can send messages, see others’ online status in real time, and enjoy a sleek, highly interactive interface.', 
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Typescript', 'Socket.io'],
        featuredImg: '/src/assets/chat-app/chat_7.png', 
        images: [
            chatAppImg_1,
            chatAppImg_2,
            chatAppImg_3,
            chatAppImg_4,
            chatAppImg_5,
            chatAppImg_6,
            chatAppImg_7,
            chatAppImg_8,
            chatAppImg_9,
            chatAppImg_10
        ],
        github: 'https://github.com/kosmiadis/ChatAppFrontend',
        tags: {
            frontend: ['redix-ui', 'redux', 'redux-toolkit', 'tanstack-query', 'tailwindcss', 'socket.io-client', 'react-router-dom', 'lucide-react', 'sonner'],
            backend: ['express', 'socket.io', 'mongoose', 'bcrypt', 'jwt', 'multer', 'cookie-parser', 'validator', 'crypto']
        }
    },
    { 
        id: 2,
        title: 'Url Shortener', 
        description: 'A full-stack URL shortener application with real-time analytics and secure user interaction. Each generated URL includes detailed usage statistics visualized through interactive charts. Users can manage their links with visibility toggles, enabling or disabling access. The project emphasizes both frontend interactivity and backend security, incorporating features like JWT authentication and encrypted user data.', 
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Typescript'],
        featuredImg: '/src/assets/url_shortener/url_2.png',
        images: [
            urlShortImg_1,
            urlShortImg_2,
            urlShortImg_3,
            urlShortImg_4,
            urlShortImg_5,
            urlShortImg_6,
            urlShortImg_7,
            urlShortImg_8,
            urlShortImg_9,
            urlShortImg_10,
            urlShortImg_11,
            urlShortImg_12,
            urlShortImg_13,
            urlShortImg_14,
            urlShortImg_15,
        ],
        github: 'https://github.com/kosmiadis/short-it',
        tags: {
            frontend: ['tanstack-query', 'framer-motion', 'react-icons', 'react-router-dom', 'recharts.js', 'tailwindcss'],
            backend: ['express', 'mongodb', 'bcrypt', 'cookie-parser', 'crypto', 'jwt']
        }
    },
    { 
        id: 3,
        title: 'Furniture Restoration Landing Page', 
        description: 'A simple landing page built for a local furniture restoration business. Developed using EJS templating and Express.js, the site includes a functional contact form with real-time email validation and integrated email delivery via Nodemailer. This project emphasizes clean design for small business needs.', 
        techStack: ['Express.js', 'EJS', 'Node.js'],
        featuredImg: '/src/assets/chalk59/chalk59_1.png', 
        images: [
            chalk59Img_1,
            chalk59Img_2,
            chalk59Img_3,
            chalk59Img_4,
            chalk59Img_5
        ],
        github: 'https://github.com/kosmiadis/chalk59_website',
        tags: {
            frontend: ['ejs', 'css3'],
            backend: ['express', 'nodemailer', 'cookie-parser', 'crypto']
        }
    },
    { 
        id: 4,
        title: 'MyLibrary', 
        description: 'A full-stack digital bookshelf where users can manage the books they own and track those they plan to buy in a dedicated wishlist section. The application features authentication, form validation, and persistent state using cookies. The frontend offers a responsive and animated UI built with NextUI and Framer Motion, while the backend ensures secure data handling and user authentication using JWT and encrypted credentials.', 
        techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
        featuredImg: '/src/assets/my_library/library_2.png',
        images: [
            myLibraryImg_1,
            myLibraryImg_2,
            myLibraryImg_3,
            myLibraryImg_4,
            myLibraryImg_5,
            myLibraryImg_6,
            myLibraryImg_7
        ],
        github: 'https://github.com/kosmiadis/MyLibrary',
        tags: {
            frontend: ['next-ui', 'redux', 'redux-toolkit', 'tanstack-query', 'framer-motion', 'react-router-dom', 'uuid', 'react-cookie'],
            backend: ['express', 'mongodb', 'bcrypt', 'express-validator', 'cookie-parser', 'jwt', 'uui']
        }
    },
    { 
        id: 5,
        title: 'Simple Landing Page', 
        description: 'A pixel-perfect recreation of a pre-built WordPress theme, developed to sharpen my CSS and UI implementation skills. The design was replicated using React and TailwindCSS, with state handled via Zustand.', 
        techStack: ['React.js', 'TailwindCSS', 'Zustand'],
        featuredImg: '/src/assets/renovation_site/renovation_1.png',
        images: [
            renovation_1,
            renovation_2,
            renovation_3,
            renovation_4,
            renovation_5,
            renovation_6,
            renovation_7,
            renovation_8
        ],
        github: 'https://github.com/kosmiadis/Renovation-Site/tree/main',
        tags: {
            frontend: ['next-ui', 'redux', 'redux-toolkit', 'tanstack-query', 'framer-motion', 'react-router-dom', 'uuid', 'react-cookie'],
        }
    },
]

export default function Projects () {
    return <Section className="mt-[100px]" id="projects">
        <h2 className="section-heading">Projects</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-10 w-full">
            {PROJECTS.map(project => (
                <Project key={project.title} project={project}/>
            ))}
        </div>
    </Section>
}

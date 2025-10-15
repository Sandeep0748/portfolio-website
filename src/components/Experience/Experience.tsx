
import pageStyles from '../page.module.css';
// removed unused imports (styles, Clip) that were causing ESLint errors in CI
import FadeInSection from '../FadeInSection';
import { useState } from 'react';

function Experience() {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <div id="experience" className={pageStyles.section_spacing}>
            <div className={pageStyles.section_heading}><span className={pageStyles.numbering}>02.</span> TRAINING EXPERIENCE</div>
            <div className={pageStyles.sub_section_spacing}>
                <FadeInSection>
                    <div className='space-y-2 md:space-y-6'>
                        <div className={`${pageStyles.sub_section_heading}`}>AlmaBetter Web Development Trainee</div>
                        {/* <div className='flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4'>

                            <div className={styles.company + ' flex items-center'}>
                                <a
                                    className='hover:text-green-500 '
                                    target="_blank" rel="noreferrer" href="https://stylabs.com/">Stylabs</a>
                            </div>
                            <button
                                onClick={() => window.open('https://drive.google.com/file/d/1PyG4gS6cHqX22GFwjvtSQi3yMSKuGLML/view?usp=drive_link', '_blank', 'noopener, noreferrer')}
                                className={`${pageStyles.button} flex items-center`}>
                                <span>
                                    Full Time
                                </span>
                                {/* Clip component intentionally removed from this button to avoid unused import; add back if needed */}
                            </button>

                            <button
                                onClick={() => window.open('https://drive.google.com/file/d/1z-JjV17RLEz-9YqkMi4mSlZnlRNMhpUw/view?usp=sharing', '_blank', 'noopener, noreferrer')}
                                className={`${pageStyles.button} flex items-center`}>

                                <span>
                                    Internship
                                </span>
                                {/* Clip component intentionally removed from this button to avoid unused import; add back if needed */}

                            </button>
                        </div> */}
                        <div className={pageStyles.description}>
                            During my training period at AlmaBetter, I gained extensive hands-on experience in full-stack web development 
                            using the MERN (MongoDB, Express.js, React.js, Node.js) stack. I successfully developed and deployed 3+ full-stack 
                            applications with responsive and dynamic user interfaces, implementing secure JWT authentication to ensure robust 
                            user data protection. Along the way, I designed and built 20+ reusable React.js components styled with Tailwind 
                            CSS, significantly improving UI consistency and reducing recurring design defects by 30% across multiple projects.

                        </div>
                        {
                            !isExpanded &&

                            <div className={pageStyles.description}>

                                In addition ... <button onClick={() => setIsExpanded(true)} className='font-semibold text-green-500 tracking-wider'>read more</button>
                            </div>
                        }

                        {/* {
                            isExpanded &&
                            <div className={pageStyles.description}>

                                
                            Built 20+ reusable React.js components using Tailwind CSS, improving UI
                            consistency and reducing recurring defects by 30%.

                            </div>
                        } */}
                        {
                            isExpanded &&
                            <div className={pageStyles.description}>

                                One of my most impactful projects was a car booking platform, where I handled over 500+ simulated monthly 
                                transactions using Redux for state management. This project strengthened my understanding of frontend-backend 
                                integration, RESTful APIs, and real-time user interactions. Through these experiences, I honed my skills in 
                                clean code practices, problem-solving, and performance optimization — preparing me to build scalable, 
                                user-centric web applications.
                                <button onClick={() => setIsExpanded(false)} className='font-semibold text-green-500 tracking-wider'>read less</button>

                            </div>

                        }


                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                TypeScript
                            </div>
                            {/* <div className={pageStyles.tag}>
                                VueJs
                            </div> */}
                            <div className={pageStyles.tag}>
                                Google Places
                            </div>
                            <div className={pageStyles.tag}>
                                REST API
                            </div>
                            <div className={pageStyles.tag}>
                                Swagger
                            </div>
                            {/* <div className={pageStyles.tag}>
                                GraphQL
                            </div> */}
                            <div className={pageStyles.tag}>
                                Nodejs
                            </div>
                            <div className={pageStyles.tag}>
                                Expressjs
                            </div>
                            {/* <div className={pageStyles.tag}>
                                RabbitMQ
                            </div> */}
                            <div className={pageStyles.tag}>
                                Postman
                            </div>
                            <div className={pageStyles.tag}>
                                AWS S3
                            </div>
                            <div className={pageStyles.tag}>
                                MongoDB
                            </div>
                            <div className={pageStyles.tag}>
                                Git
                            </div>
                            <div className={pageStyles.tag}>
                                Debouncing
                            </div>
                            {/* <div className={pageStyles.tag}>
                                Pagination
                            </div> */}
                        </div>
                    </div>
                </FadeInSection>
            </div >
        </div >
    )
}

export default Experience;
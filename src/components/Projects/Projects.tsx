import pageStyles from '../page.module.css';
import FadeInSection from '../FadeInSection';
import Latest from '../Latest';

function Projects() {
    return (
        <div id="projects" className="space-y-10">
            <div className={pageStyles.section_heading}><span className={pageStyles.numbering}>03.</span> Projects</div>
            <div className={pageStyles.sub_section_spacing}>
                <FadeInSection>
                    <div className='flex flex-col space-y-4 md:space-y-5'>
                        <h1 className={`${pageStyles.sub_section_heading} flex items-center`}>Stock Pulse Clone<Latest></Latest></h1>

                        <div className="flex flex-col md:flex md:flex-row items-center">
                            <div className="md:w-1/2 space-y-4 md:space-y-5">
                                <div className="space-x-3">
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://stock-pulse-next-main.vercel.app/">Live link</a>
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://github.com/Sandeep0748/stock-pulse-next-main">Github</a>
                                </div>
                                {/* Details */}
                                <p className={pageStyles.description}>
                                    For this project, I recreated the <a target="_blank" rel="noreferrer" href="https://stock-pulse-next-main.vercel.app/" className="underline underline-offset-2">pricing page of Stock Pulse</a>, a popular app, using Tailwind CSS.
                                    The goal was to closely mirror the original design found at Pulse Pricing,
                                    showcasing my ability to accurately replicate web designs using modern CSS frameworks.
                                    This mock page demonstrates my proficiency in web development, particularly in applying Tailwind
                                    CSS to build responsive and visually appealing interfaces.
                                </p>
                            </div>
                            <div className="-ml-12 sm:-ml-20 md:ml-0 md:w-1/2 relative md:scale-125 xl:scale-100 hover:scale-110">
                                <div className="flex justify-center items-center">
                                    <img className="w-3/4 h-auto object-contain" src={`${process.env.PUBLIC_URL}/images/projects/Desktop first project.png`}
                                        title="Desktop mockup of Pulse pricing page" alt="Desktop mockup of Pulse pricing page" />
                                    <img className="w-1/4 h-auto object-contain absolute right-5 top-0" src={`${process.env.PUBLIC_URL}/images/projects/Mobile first project.png`} title="Mobile mockup of Podia product page" alt="Mobile mockup of Podia product page" />
                                </div>
                            </div>
                        </div>
                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                HTML
                            </div>
                            <div className={pageStyles.tag}>
                                CSS
                            </div>
                            <div className={pageStyles.tag}>
                                Javascript
                            </div>
                            <div className={pageStyles.tag}>
                                Frontend
                            </div>
                            <div className={pageStyles.tag}>
                                Hosting
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='flex flex-col  space-y-4 md:space-y-5'>
                        <h1 className={pageStyles.sub_section_heading}>Car Trade</h1>

                        <div className="flex flex-col md:flex md:flex-row items-center">
                            <div className="md:w-1/2 space-y-4 md:space-y-5">
                                <div className="space-x-3">
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://car-trade-omega.vercel.app/">Live link</a>
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://github.com/Sandeep0748/CarTrade">Github</a>
                                </div>
                                {/* Details */}
                               <p className={pageStyles.description}>
                                 CarTrade is a modern web application for buying and selling cars. I developed a fully responsive 
                                 and intuitive interface with features such as car search, filtering, and detailed listings. The project 
                                 emphasizes clean design, seamless performance, and smooth navigation. Built with React and Tailwind CSS, 
                                 it is deployed on Vercel for optimal accessibility.
                               </p>


                            </div>
                            <div className="-ml-12 sm:-ml-20 md:ml-0 md:w-1/2 relative md:scale-125 xl:scale-100 hover:scale-110">
                                <div className="flex justify-center items-center">
                                    <img className="w-3/4 h-auto object-contain" src={`${process.env.PUBLIC_URL}/images/projects/Desktop Second Project.png`} title="Desktop mockup of Podia Product page" alt="Desktop mockup of Podia Product page" />
                                    <img className="w-1/4 h-auto object-contain absolute right-5 top-0" src={`${process.env.PUBLIC_URL}/images/projects/Mobile Second Project.png`} title="Mobile mockup of Podia product page" alt="Mobile mockup of Podia product page" />
                                </div>
                            </div>
                        </div>

                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                HTML
                            </div>
                            <div className={pageStyles.tag}>
                                CSS
                            </div>
                            <div className={pageStyles.tag}>
                                Javascriptmobile-mockup-podia-product.png
                            </div>
                            <div className={pageStyles.tag}>
                                Frontend
                            </div>
                            <div className={pageStyles.tag}>
                                Backend
                            </div>
                            <div className={pageStyles.tag}>
                                Hosting
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className='space-y-4 md:space-y-5'>
                        <h1 className={pageStyles.sub_section_heading}>CartZilla E-commerce</h1>
                        <div className="flex flex-col md:flex md:flex-row items-center">
                            <div className="md:w-1/2 space-y-4 md:space-y-5">
                                <div className="space-x-3">

                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://cart-zilla-e-commerce-website.vercel.app/">Live link</a>
                                    <a
                                        className={pageStyles.button}
                                        target="_blank" rel="noreferrer" href="https://github.com/Sandeep0748/CartZilla-E-commerce-Website">Github</a>

                                </div>
                                {/* Details */}
                                <p className={pageStyles.description}>
                                     Cart Zilla is a modern e-commerce web app that delivers a smooth and responsive shopping experience. 
                                     I built an intuitive interface for browsing products, managing a shopping cart, and completing purchases 
                                     seamlessly. Developed with React and Tailwind CSS, the project is deployed on Vercel for optimal performance 
                                     and accessibility.
                                </p>
                            </div>
                            <div className="-ml-12 sm:-ml-20 md:ml-0 md:w-1/2 relative md:scale-125 xl:scale-100 hover:scale-110">
                                <div className="flex justify-center items-center">
                                    <img className="w-3/4 h-auto object-contain" src={`${process.env.PUBLIC_URL}/images/projects/Desktop third Project.png`}
                                        title="Spam Number Detection Code"
                                        alt="Spam Number Detection Code" />
                                        <img className="w-1/4 h-auto object-contain absolute right-5 top-0" src={`${process.env.PUBLIC_URL}/images/projects/Mobile third Project.png`} title="Mobile mockup of Podia product page" alt="Mobile mockup of Podia product page" />
                                        
                                </div>
                            </div>
                        </div>

                        <div className={pageStyles.tag_container}>
                            <div className={pageStyles.tag}>
                                HTML
                            </div>
                            <div className={pageStyles.tag}>
                                CSS
                            </div>
                            <div className={pageStyles.tag}>
                                Javascript
                            </div>
                            <div className={pageStyles.tag}>
                                Frontend
                            </div>
                            <div className={pageStyles.tag}>
                                Hosting
                            </div>
                            
                        </div>
                    </div>
                </FadeInSection>

            </div>
        </div>
    )
}

export default Projects;
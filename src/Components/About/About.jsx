import React from 'react';
import Profile_icon from '../../assets/profile1.jpg';
import { IoArrowForward } from 'react-icons/io5';

const About = () => {
    return (
        <div
            id="About"
            className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 md:mb-4 md:mt-28"
        >
            <div>
                <h2 className="text-2xl md:text-4xl font-bold">About me</h2>
                <div className="md:flex flex-wrap flex-col md:flex-row justify-center items-center md:items-center">
                    <img
                        className="rounded-lg mt-5 md:h-80"
                        src={Profile_icon}
                        alt="profile icon"
                    />
                    <ul>
                        <div className="flex gap-3 py-4 md:ml-20 mt-8 md:mt-0">
                            <IoArrowForward size={30} className="mt-1" />
                            <span className="w-96">
                                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                                    Web Developer
                                </h1>
                                <p
                                    className="text-sm md:text-md leading-tight mt-1"
                                    style={{ textAlign: 'justify' }} // Inline style for justification
                                >
                                   I'm Reshmi Harikumar Lathakumari, a Web Developer with over four years of experience in crafting dynamic, scalable, and user-centric web applications. My expertise lies in front-end and back-end development, specializing in React.js, Angular, Python, Django, and Node.js.
<br></br><br></br>
I have a passion for building intuitive user experiences and developing efficient software solutions. My technical skills extend to content management systems (WordPress, Shopify), cloud platforms (AWS, GCP, Azure), and containerization technologies (Docker, Kubernetes).
<br></br><br></br>
Currently, I am expanding my expertise in cloud-native architectures and microservices, exploring cutting-edge frameworks and tools to build modern web solutions. I thrive in collaborative environments where innovation, clean code, and performance optimization are prioritized.

                                </p>
                            </span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;

import signUp from '../assets/sign-up.jpg';
import techGirl from '../assets/techGirl.png';
import brainStorm from '../assets/brainStorm.jpg';



    const Home = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-between p-12 ">
            <div className="mb-6 md:mb-0">
            <h1 className="text-6xl font-normal ">Get the best knowledge <br/>from our Versatile Tutors</h1>
            <button className="mt-6 inline-block bg-blue-500 font-bold text-white py-2 px-4 rounded-xl">
                Start Learning
            </button>
            </div>
            <img src={techGirl} alt="TechGirl" className="w-1/2 md:w-1/3 rounded-xl border-0" />
        </div>

        {/* Second Section */}
        <div className='w-full '>
        <div className="bg-white text-gray-900 flex flex-col md:flex-row items-center justify-between p-8 border-yellow-300 border-4 rounded-xl">
            <img src={signUp} alt="Sign Up" className="w-1/2 md:w-1/3 p-8" />
            <div className="md:ml-6 p-8">
            <h2 className="text-3xl font-bold">Fast track your Tech Career</h2>
            <p className="text-lg mt-4">Get the right teams with zero worries for your project every now and then.</p>
            <div>
                <p><button>#30,000.00</button><button>3 months</button></p>
                <p><button>Mon-Fri (4pm -6pm)</button><button>GoogleMeet</button></p>
                <button className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-xl">More details</button>
            </div>
            </div>
        </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center justify-between p-8">
            <div className="mb-6 md:mb-0">
            <p>“Explore the course catalog and syllables to identify courses that align with personal learning objectives. Take advantage of interactive tutorials we offer to reinforce your understanding and apply concepts in real world scenarios.”</p>
            <div>
                <h2>Faaruq Azeez</h2>
                <p>Founder, Justwear</p>
                <p>United Arab Emirate</p>
            </div>
            </div>
            <img src={brainStorm} alt="Brainstorm" className="w-1/2 md:w-1/3" />
        </div>

        {/* Email Capture Form */}
        <section className="text-black text-center bg-white w-full p-10">
            <h1 className="text-xl font-bold">Email capture form for updates and promotions</h1>
            <p className="text-xs font-normal">Subscribe to our newsletters and stay up to date on features and releases.</p>
            <div id="subscription" className="flex items-center justify-center mt-4 p-2">
            <input type="text" id="email" placeholder="Enter your work email" className="p-2 border border-black rounded-xl" />
            <input type="submit" id='subButton' value="Subscribe" className="bg-black text-white px-4 py-2 rounded-xl hover:text-black hover:bg-white transition-color-blue" />
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-darkBlue text-white py-12 px-4 w-full">
            <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
            <div className="w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mb-8 p-2">
                <h1 className="text-5xl font-bold mb-4">LOGO</h1>
                <p className="text-sm p-2">Subscribe to our newsletters and stay up to date on features and releases.</p>
                <a href="https://www.figma.com/design/0VMIuZ44z6cV2gSkddCChO/TECHNEW?node-id=0-137&t=3MGzE6UIqzLA5HZF-4" className="text-sm">Copyrights @ Progfams 2024</a>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mb-8">
                <div className="p-2">
                <h2 className="text-lg font-bold mb-4">Explore</h2>
                <p className="text-sm p-2">Home</p>
                <p className="text-sm p-2">About us</p>
                <p className="text-sm p-2">Works</p>
                <p className="text-sm p-2">Boot Camp</p>
                </div>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mb-8">
                <div>
                <h2 className="text-lg font-bold mb-4">Services</h2>
                <p className="text-sm p-2">Consultation</p>
                <p className="text-sm p-2">Blog</p>
                </div>
            </div>
            <div className="w-full md:w-1/5 lg:w-1/5 xl:w-1/5 mb-8">
                <div>
                <h2 className="text-lg font-bold mb-4">Contact</h2>
                <p className="text-sm p-2">+234 810 112 8072</p>
                <p className="text-sm p-2">Info@Progfams.com</p>
                <p className="text-sm p-2">10B, Harmony Close, Ikeja, Lagos.</p>
                </div>
            </div>
            </div>
        </footer>
        </div>
    );
};

export default Home;

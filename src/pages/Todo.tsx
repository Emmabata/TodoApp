    import React from 'react';
    import TodoList from '../components/TodoList';

const Todo: React.FC = () => {
    return (
        <div className="bg-blue-600 min-h-screen flex flex-col items-center justify-center">
        <div className="mb-8">
            <TodoList />
        </div>
        <section className="text-black text-center bg-white w-full p-10">
            <h1 className="text-xl font-bold">Email capture form for updates and promotions</h1>
            <p className="text-xs font-normal">Subscribe to our newsletters and stay up to date on features and releases.</p>
            <div id="subscription" className="flex items-center justify-center mt-4 p-2">
            <input type="text" id="email" placeholder="Enter your work email" className="p-2 border border-black rounded-xl" />
            <input type="submit" id='subButton' value="Subscribe" className="bg-black text-white px-4 py-2 rounded-xl hover:text-black hover:bg-white transition-color-blue" />
            </div>
        </section>
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

export default Todo;

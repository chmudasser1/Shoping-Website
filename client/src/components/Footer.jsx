import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-10 pb-10">
            <div className="text-center py-4 bg-gray-700">
                <a href="#">Back to top</a>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between my-10 border-b-2 border-gray-700">
                    <div className="w-full md:w-1/4 mb-5">
                        <h2 className="text-lg font-semibold">Get to Know Us</h2>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:text-gray-400">About us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Press Releases</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-5">
                        <h2 className="text-lg font-semibold">Connect with Us</h2>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
                            <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
                            <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-5">
                        <h2 className="text-lg font-semibold">Make Money with Us</h2>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:text-gray-400">Sell on Amazon</a></li>
                            <li><a href="#" className="hover:text-gray-400">Sell under Amazon Accelerator</a></li>
                            <li><a href="#" className="hover:text-gray-400">Protect and Build Your Brand</a></li>
                            <li><a href="#" className="hover:text-gray-400">Amazon Global Selling</a></li>
                            <li><a href="#" className="hover:text-gray-400">Become an Affiliate</a></li>
                            <li><a href="#" className="hover:text-gray-400">Fulfillment by Amazon</a></li>
                            <li><a href="#" className="hover:text-gray-400">Advertise Your Products</a></li>
                            <li><a href="#" className="hover:text-gray-400">Amazon Pay on Merchants</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/4 mb-5">
                        <h2 className="text-lg font-semibold">Let Us Help You</h2>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:text-gray-400">COVID-19 and Amazon</a></li>
                            <li><a href="#" className="hover:text-gray-400">Your Account</a></li>
                            <li><a href="#" className="hover:text-gray-400">Returns Centre</a></li>
                            <li><a href="#" className="hover:text-gray-400">100% Purchase Protection</a></li>
                            <li><a href="#" className="hover:text-gray-400">Amazon App Download</a></li>
                            <li><a href="#" className="hover:text-gray-400">Help</a></li>
                        </ul>
                    </div>
                </div>


                <div className="flex justify-center items-center">
                    <span>Language:</span>
                    <select className="ml-2 bg-gray-700 border border-gray-600 text-white">
                        <option>English</option>
                    </select>
                </div>
                <div className="text-center mt-10 text-sm">
                    <p>Australia | Brazil | Canada | China | France | Germany | Italy | Japan | Mexico | Netherlands | Poland | Singapore | Spain | Turkey | United Arab Emirates | United Kingdom | United States</p>
                </div>

                <div className="text-center mt-5 text-xs">
                    <p>Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
                    <p>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

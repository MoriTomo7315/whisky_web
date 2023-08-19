import React from 'react';

const Header = () => {
    return (
        <header className="shadow mb-4">
            <nav className="flex items-center justify-between p-2">
                <a href="/" className="items-center text-black ml-6">
                    <span className="font-bold text-sm sm:text-md md:text-lg">Whisky Attention</span>
                </a>
                <div className="items-center">
                    <div className="text-xs sm:text-sm">
                        <a href="/" className="font-semibold mt-0 text-black hover:text-whisky mr-4">
                            Ranking
                        </a>
                        <a href="/whatisamericanwhisky" className="font-semibold mt-0 text-black hover:text-whisky mr-4">
                            What is American Whisky
                        </a>
                        <a href="#" className="font-semibold mt-0 text-black hover:text-whisky mr-6">
                            Help
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
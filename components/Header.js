import React from 'react'


const logotext = "< Kanishkasahu />";

function Header() {
    return (
        <div className="bg-gray-100">
            <div className="flex py-6 px-48 justify-between">
                <div className="flex-1 text-2xl">
                    {logotext}
                </div>
                <div className="flex-1 flex">
                    <div>
                        About Me
                    </div>
                    <div>
                        About Me
                    </div>
                    <div>
                        About Me
                    </div>
                    <div>
                        About Me
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        social media
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header

import * as React from 'react'

const App = () => {
    return (
        <div className="container mx-auto p-10 bg-gray-700 h-screen" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234c5a70' fill-opacity='0.21'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}>
            <div className="mx-auto py-10">
                <img className="" src="" />
                <h2 className="block text-5xl font-extrabold tracking-tight text-white">
                    SyncPlay Clone
                </h2>
            </div>
            <form>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 uppercase tracking-wider">Name</label>
                    <input id="name" name="name" type="text" className="mt-2 w-full rounded-sm bg-gray-800 text-white border-2 border-gray-900 border-opacity-25" />
                </div>
                <div className="mt-5">
                    <label htmlFor="room" className="block text-sm font-medium text-gray-300 uppercase tracking-wider">Room</label>
                    <input id="room" name="room" type="text" className="mt-2 w-full rounded-sm bg-gray-800 text-white border-2 border-gray-900 border-opacity-25" />
                </div>
                <div className="mt-5">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-base text-white px-8 py-2 border border-transparent font-medium">
                        Join room
                    </button>
                </div>
            </form>

        </div>
    );
};

export default App;
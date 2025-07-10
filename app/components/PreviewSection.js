import React from 'react'

const PreviewSection = ({profile,validLinks ,handleSubmit}) => {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 overflow-y-auto">
            <div className="max-w-sm mx-auto text-center">
                {/* Profile Header */}
                <div className="mb-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center overflow-hidden shadow-xl">
                        {profile.avatar ? (
                            <img
                                src={profile.avatar}
                                alt="Profile"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                        ) : null}
                        <div className={`w-full h-full flex items-center justify-center ${profile.avatar ? 'hidden' : 'flex'}`}>
                            <span className="text-white/70 text-2xl">👤</span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-3">
                        @{profile.handle || 'yourhandle'}
                    </h2>

                    <p className="text-white/90 text-base leading-relaxed">
                        {profile.description || 'Your description will appear here...'}
                    </p>
                </div>

                {/* Links Preview */}
                <div className="space-y-4">
                    {validLinks.length > 0 ? (
                        validLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-4 px-6 bg-white/95 backdrop-blur-sm rounded-xl text-gray-800 font-semibold hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-white/30"
                            >
                                {link.title}
                            </a>
                        ))
                    ) : (
                        <div className="py-12 text-white/70 font-medium italic">
                            Add some links to see them here!
                        </div>
                    )}
                </div>
            </div>
            <button onClick={handleSubmit} className='absolute bottom-5 right-0 px-5 py-1.5 font-semibold tracking-wider text-white bg-violet-500 rounded-full text-2xl cursor-pointer mx-3 z-50' >Submit</button>
        </div>
    )
}

export default PreviewSection

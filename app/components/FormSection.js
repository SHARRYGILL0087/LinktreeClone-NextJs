import React from 'react'

const FormSection = ({ profile, links, addLink,updateProfile,updateLink ,removeLink }) => {
    return (
        <div className="bg-white rounded-3xl p-8 shadow-2xl overflow-y-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Create Your Link Page</h1>

            {/* Profile Information */}
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Handle (@username)
                    </label>
                    <input
                        type="text"
                        value={profile.handle}
                        name='handle'
                        onChange={(e) => updateProfile(e)}
                        placeholder="Enter your handle"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Profile Picture URL
                    </label>
                    <input
                        type="url"
                        value={profile.avatar}
                        name='avatar'
                        onChange={(e) => updateProfile(e)}
                        placeholder="https://example.com/avatar.jpg"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Description
                    </label>
                    <textarea
                        value={profile.description}
                        name='description'
                        onChange={(e) => updateProfile(e)}
                        placeholder="Tell people about yourself..."
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 resize-none"
                    />
                </div>
            </div>

            {/* Links Section */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Links</h3>
                <div className="space-y-4">
                    {links.map((link) => (
                        <div key={link.id} className="bg-gray-50 rounded-xl p-6 relative border-2 border-dashed border-gray-300">
                            {links.length > 1 && (
                                <button
                                    onClick={() => removeLink(link.id)}
                                    className="absolute top-4 right-4 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                                >
                                    ×
                                </button>
                            )}

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Link Title
                                    </label>
                                    <input
                                        type="text"
                                        value={link.title}
                                        onChange={(e) => updateLink(link.id, 'title', e.target.value)}
                                        placeholder="My Website"
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        URL
                                    </label>
                                    <input
                                        type="url"
                                        value={link.url}
                                        onChange={(e) => updateLink(link.id, 'url', e.target.value)}
                                        placeholder="https://example.com"
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all duration-300"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}

                    <button
                        onClick={addLink}
                        className="w-full py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <span className="text-xl">+</span>
                        Add More Links
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FormSection



const Questions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6">Questions</h1>
        
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-purple-900/20  rounded-full mx-auto flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">No Questions Yet</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-6">
            This feature is coming soon. You'll be able to ask questions about your content and get AI-powered answers.
          </p>
          <button 
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            disabled
          >
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default Questions; 
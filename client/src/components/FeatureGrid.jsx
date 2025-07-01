import React from 'react';

const features = [
  {
    title: "AI-Based Questioning",
    desc: "Get AI-generated questions tailored to your level",
  },
  {
    title: "Personalized Study Plans",
    desc: "Plans made based on your marks & subjects",
  },
  {
    title: "Track Progress",
    desc: "See your weak/medium/strong areas instantly",
  },
  {
    title: "15-Day Free Trial",
    desc: "Try all features free for 15 days",
  },
  {
    title: "Chapter-wise Practice",
    desc: "Focus on individual chapters easily",
  },
  {
    title: "Smart Dashboard",
    desc: "Visualize your learning trends and performance",
  },
];

const FeatureGrid = () => {
  return (
    <section className="bg-white text-teal-900 px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Why Choose PrepMate?</h2>
        <p className="text-sans text-teal-800 mb-12">
          Our platform is designed to adapt to your unique learning style and pace.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {features.map((feature, i) => (
    <div
      key={i}
      className="bg-white text-teal-700 rounded-xl p-4 shadow-md transition-transform hover:scale-105 max-w-xs mx-auto
                 flex flex-col items-start justify-start h-48"
    >
      <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center mb-3 text-lg font-semibold">
        ✓
      </div>
      <h4 className="font-semibold mb-1 text-base">{feature.title}</h4>
      <p className="text-xs text-teal-600 flex-grow">{feature.desc}</p>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};


export default FeatureGrid;

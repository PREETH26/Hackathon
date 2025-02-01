import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Smile, Meh, Frown, PlayCircle, Book, CheckCircle, Lock, ChevronDown, ChevronUp, Star 
} from 'lucide-react';

const Lessons = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedRating, setSelectedRating] = useState(null);
  const [expandedModules, setExpandedModules] = useState({});  // Changed to an object

  const courseContent = [
    {
      title: "Introduction to Machine Learning",
      modules: [
        { title: "What is Machine Learning?", duration: "15 mins", type: "video", completed: true },
        { title: "Types of Machine Learning", duration: "20 mins", type: "reading", completed: true },
        { title: "Quiz: ML Basics", duration: "10 mins", type: "quiz", completed: false }
      ]
    },
    {
      title: "Supervised Learning",
      modules: [
        { title: "Linear Regression", duration: "25 mins", type: "video", completed: false },
        { title: "Classification", duration: "30 mins", type: "reading", completed: false }
      ]
    },
    {
      title: "Advanced Topics",
      modules: [
        { title: "Neural Networks", duration: "45 mins", type: "video", locked: true },
        { title: "Deep Learning", duration: "60 mins", type: "reading", locked: true }
      ]
    }
  ];

  const roadmapSteps = [
    { title: "ML Fundamentals", completed: true },
    { title: "Supervised Learning", completed: false },
    { title: "Model Evaluation", completed: false },
    { title: "Neural Networks", completed: false },
    { title: "Deep Learning", completed: false },
    { title: "Final Project", completed: false }
  ];

  // Updated toggle logic
  const toggleModule = (sectionIndex, moduleIndex) => {
    setExpandedModules(prev => {
      const sectionExpanded = prev[sectionIndex] || {};
      const newSectionExpanded = { ...sectionExpanded, [moduleIndex]: !sectionExpanded[moduleIndex] };
      return { ...prev, [sectionIndex]: newSectionExpanded };
    });
  };

  const handleRating = (rating) => setSelectedRating(rating);

  const getModuleIcon = (type, locked) => {
    if (locked) return <Lock className="w-4 h-4 text-gray-400" />;
    const icons = {
      video: <PlayCircle className="w-4 h-4 text-blue-500" />,
      reading: <Book className="w-4 h-4 text-green-500" />,
      quiz: <CheckCircle className="w-4 h-4 text-purple-500" />
    };
    return icons[type] || null;
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-200 ">
      <div className="bg-white p-8 rounded-lg shadow-2xl shadow-black w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-8">Lesson 1</h1>
    
        <div className="flex gap-4 mb-6 justify-center">
          {["Course Content", "Roadmap", "Reviews"].map((section, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-lg text-lg ${activeSection === index ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveSection(index)}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Course Content Section */}
        {activeSection === 0 && (
          <div className="space-y-4">
            {courseContent.map((section, sectionIndex) => (
              <Card key={sectionIndex}>
                <CardHeader 
                  className="cursor-pointer flex justify-between items-center"
                >
                  <CardTitle className="text-xl">{section.title}</CardTitle>
                  <ChevronDown className="w-5 h-5" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {section.modules.map((module, moduleIndex) => {
                      const isModuleExpanded = expandedModules[sectionIndex]?.[moduleIndex];

                      return (
                        <div 
                          key={moduleIndex}
                          className={`p-3 rounded-lg flex items-center justify-between 
                            ${module.locked ? 'bg-gray-100' : 'bg-white hover:bg-gray-50'} 
                            ${module.completed ? 'border-l-4 border-green-500' : ''}`}
                        >
                          <div className="flex items-center gap-3">
                            {getModuleIcon(module.type, module.locked)}
                            <span className={module.locked ? 'text-gray-400' : ''}>
                              {module.title}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">{module.duration}</span>
                          <button 
                            onClick={() => toggleModule(sectionIndex, moduleIndex)}
                            className="ml-2 text-gray-500"
                          >
                            {isModuleExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                          {isModuleExpanded && (
                            <div className="mt-3">
                              {/* Module Expanded Content */}
                              <p>More content here...</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Roadmap Section */}
        {activeSection === 1 && (
          <Card>
            <CardContent className="pt-6 space-y-6">
              {roadmapSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.completed ? 'bg-green-500' : 'bg-gray-200'
                  }`}>
                    {step.completed ? <CheckCircle className="w-5 h-5 text-white" /> : <span className="text-gray-600">{index + 1}</span>}
                  </div>
                  <h3 className={`font-medium ${step.completed ? 'text-green-500' : 'text-gray-600'}`}>
                    {step.title}
                  </h3>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Reviews Section */}
        {activeSection === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Rate this course</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6 justify-center mb-8">
                {["great", "okay", "poor"].map((rating, i) => (
                  <button 
                    key={i}
                    onClick={() => handleRating(rating)}
                    className={`flex flex-col items-center ${
                      selectedRating === rating ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                  >
                    {rating === "great" && <Smile className="w-12 h-12" />}
                    {rating === "okay" && <Meh className="w-12 h-12" />}
                    {rating === "poor" && <Frown className="w-12 h-12" />}
                    <span className="capitalize">{rating}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Lessons;

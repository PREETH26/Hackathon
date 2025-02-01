import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Send, Bot, User, BarChart2, MessageSquare, Clock, HelpCircle } from 'lucide-react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm ACU Learn Assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [showAnalytics, setShowAnalytics] = useState(false);

  // Sample analytics data
  const queryData = [
    { name: 'Mon', queries: 45 },
    { name: 'Tue', queries: 52 },
    { name: 'Wed', queries: 38 },
    { name: 'Thu', queries: 65 },
    { name: 'Fri', queries: 48 },
    { name: 'Sat', queries: 25 },
    { name: 'Sun', queries: 30 }
  ];

  const queryTypeData = [
    { name: 'Course Content', value: 35, color: '#3B82F6' },
    { name: 'Technical Issues', value: 25, color: '#60A5FA' },
    { name: 'Assignments', value: 20, color: '#93C5FD' },
    { name: 'Schedule', value: 20, color: '#BFDBFE' }
  ];

  const quickResponses = [
    "How do I access my courses?",
    "Reset my password",
    "Assignment deadlines",
    "Technical support"
  ];

  const handleSend = () => {
    if (input.trim()) {
      setMessages(prev => [...prev, { id: Date.now(), text: input, sender: 'user' }]);
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: Date.now() + 1,
          text: "I understand you're asking about " + input + ". Let me help you with that...",
          sender: 'bot'
        }]);
      }, 1000);
      
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-200 flex items-center justify-center">
      
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Card className="flex flex-col h-[600px]">
              <CardHeader className="bg-gray-50 border-b">
                <div className="flex items-center gap-2">
                  <Bot className="h-6 w-6 text-blue-600" />
                  <CardTitle>ACU Learn Assistant</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-200'}`}>
                          {message.sender === 'user' ? <User className="h-5 w-5 text-white" /> : <Bot className="h-5 w-5 text-gray-600" />}
                        </div>
                        <div className={`p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
                          {message.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Responses */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex flex-wrap gap-2">
                    {quickResponses.map((response, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(response)}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm hover:bg-gray-100"
                      >
                        {response}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t bg-white">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={handleSend}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    
  );
};

export default Chatbot;

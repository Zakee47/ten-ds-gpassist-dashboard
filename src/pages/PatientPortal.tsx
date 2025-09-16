
import React from 'react';
import { NavLink } from 'react-router-dom';

const PatientPortal = () => {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/2873cff1-4cf2-49a1-bda8-48aa827ba056.png" 
              alt="NHS" 
              className="h-16 w-auto"
            />
          </div>

          {/* Main content */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Patient Portal
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Choose an option from the sidebar to get started.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
                <NavLink 
                  to="/patient-portal/medical-review"
                  className="block p-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg hover:from-blue-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold mb-2">Medical Review</h3>
                  <p className="text-blue-100">Submit medical forms and reviews</p>
                </NavLink>
                <NavLink 
                  to="/patient-portal/admin-request"
                  className="block p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
                >
                  <h3 className="text-xl font-semibold mb-2">Admin Request</h3>
                  <p className="text-purple-100">Administrative requests and support</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;

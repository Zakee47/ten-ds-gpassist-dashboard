import React, { useState } from 'react';
import PatientIdentificationForm from '../components/PatientIdentificationForm';
import EmergencyWarning from '../components/EmergencyWarning';
import PatientDetailsForm from '../components/PatientDetailsForm';
import AIWidgetPlaceholder from '../components/AIWidgetPlaceholder';
import ThankYouPage from '../components/ThankYouPage';

const AdminRequest = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [patientType, setPatientType] = useState<'me' | 'someone-else' | null>(null);

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <PatientIdentificationForm
            selectedPatient={patientType}
            onPatientSelect={setPatientType}
            onContinue={nextStep}
            variant="admin"
          />
        );
      case 2:
        return (
          <EmergencyWarning
            onConfirm={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <PatientDetailsForm
            onContinue={nextStep}
            onBack={prevStep}
            variant="admin"
          />
        );
      case 4:
        return (
          <AIWidgetPlaceholder 
            onBack={prevStep}
            onContinue={nextStep}
            variant="admin"
          />
        );
      case 5:
        return (
          <ThankYouPage 
            onBack={() => setCurrentStep(1)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header with logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/2873cff1-4cf2-49a1-bda8-48aa827ba056.png" 
              alt="NHS" 
              className="h-16 w-auto"
            />
          </div>

          {/* Progress indicator - only show for steps 1-4 */}
          {currentStep <= 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-center space-x-4">
                 {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      step <= currentStep
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 text-white'
                        : 'bg-white border-gray-300 text-gray-400'
                    }`}
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Main content */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {renderCurrentStep()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRequest;
import React from 'react';
import { usePatientStore } from '../store/usePatientStore';
import { format } from 'date-fns';
import { Calendar, Phone, Mail, Clock, PlusCircle } from 'lucide-react';

export const PatientDetails: React.FC = () => {
  const { selectedPatient } = usePatientStore();

  if (!selectedPatient) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Select a patient to view details</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="border-b pb-4">
        <h2 className="text-2xl font-bold">{`${selectedPatient.firstName} ${selectedPatient.lastName}`}</h2>
        <div className="mt-2 space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-2" />
            <span>{format(new Date(selectedPatient.dateOfBirth), 'MMMM d, yyyy')}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone size={18} className="mr-2" />
            <span>{selectedPatient.phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail size={18} className="mr-2" />
            <span>{selectedPatient.email}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Current Medications</h3>
        <div className="space-y-2">
          {selectedPatient.currentMedications.map((med) => (
            <div key={med.id} className="bg-gray-50 p-3 rounded-lg">
              <div className="font-medium">{med.name}</div>
              <div className="text-sm text-gray-600">{`${med.dosage} - ${med.frequency}`}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Recent Visits</h3>
          <button className="flex items-center text-blue-600 hover:text-blue-700">
            <PlusCircle size={18} className="mr-1" />
            New Visit
          </button>
        </div>
        <div className="space-y-3">
          {selectedPatient.visits.map((visit) => (
            <div key={visit.id} className="border rounded-lg p-4">
              <div className="flex items-center text-gray-600 mb-2">
                <Clock size={18} className="mr-2" />
                <span>{format(new Date(visit.date), 'MMMM d, yyyy')}</span>
              </div>
              <div className="font-medium">{visit.reason}</div>
              <div className="text-sm text-gray-600 mt-1">{visit.diagnosis}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { usePatientStore } from '../store/usePatientStore';
import { Search, UserRound } from 'lucide-react';

export const PatientList: React.FC = () => {
  const { patients, selectPatient } = usePatientStore();
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredPatients = patients.filter(
    (patient) =>
      patient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search patients..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        {filteredPatients.map((patient) => (
          <div
            key={patient.id}
            onClick={() => selectPatient(patient.id)}
            className="flex items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
          >
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <UserRound className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-medium">{`${patient.firstName} ${patient.lastName}`}</h3>
              <p className="text-sm text-gray-500">{patient.dateOfBirth}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
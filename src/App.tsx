import React, { useState } from 'react';
import { PatientList } from './components/PatientList';
import { PatientDetails } from './components/PatientDetails';
import { PatientForm } from './components/PatientForm';
import { PlusCircle } from 'lucide-react';

function App() {
  const [showAddPatient, setShowAddPatient] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Healthcare Management Portal</h1>
            <button
              onClick={() => setShowAddPatient(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <PlusCircle size={20} className="mr-2" />
              Add Patient
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {showAddPatient ? (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Add New Patient</h2>
            <PatientForm onSubmit={() => setShowAddPatient(false)} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <PatientList />
            </div>
            <div className="md:col-span-2">
              <PatientDetails />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
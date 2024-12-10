import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Patient, Visit } from '../types/patient';

interface PatientStore {
  patients: Patient[];
  selectedPatient: Patient | null;
  addPatient: (patient: Patient) => void;
  updatePatient: (patient: Patient) => void;
  selectPatient: (patientId: string) => void;
  addVisit: (patientId: string, visit: Visit) => void;
}

export const usePatientStore = create<PatientStore>()(
  persist(
    (set) => ({
      patients: [],
      selectedPatient: null,
      addPatient: (patient) =>
        set((state) => ({ patients: [...state.patients, patient] })),
      updatePatient: (patient) =>
        set((state) => ({
          patients: state.patients.map((p) => (p.id === patient.id ? patient : p)),
          selectedPatient: patient,
        })),
      selectPatient: (patientId) =>
        set((state) => ({
          selectedPatient: state.patients.find((p) => p.id === patientId) || null,
        })),
      addVisit: (patientId, visit) =>
        set((state) => ({
          patients: state.patients.map((p) =>
            p.id === patientId
              ? { ...p, visits: [...p.visits, visit] }
              : p
          ),
          selectedPatient: state.selectedPatient?.id === patientId
            ? { ...state.selectedPatient, visits: [...state.selectedPatient.visits, visit] }
            : state.selectedPatient,
        })),
    }),
    {
      name: 'patient-storage',
      skipHydration: false,
    }
  )
);
export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
}

export interface Visit {
  id: string;
  date: string;
  reason: string;
  diagnosis: string;
  prescriptions: Medication[];
  notes: string;
}

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  address: string;
  phone: string;
  email: string;
  medicalHistory: string;
  allergies: string[];
  currentMedications: Medication[];
  visits: Visit[];
}
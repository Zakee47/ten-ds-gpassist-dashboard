export interface CallLog {
  id: string;
  priority: 'high' | 'medium' | 'low' | 'pending' | 'none';
  patientName: string;
  dateOfBirth: string;
  nhsNumber: string;
  callerId: string;
  duration: string;
  timestamp: string;
  status: 'completed' | 'dropped' | 'pending';
  summary: string;
  symptoms: string[];
  transcript: string;
  agentNotes: string;
}

export const mockCallLogs: CallLog[] = [
  {
    id: '1',
    priority: 'pending',
    patientName: 'AA BB',
    dateOfBirth: '01/01/2000',
    nhsNumber: '123 456 7890',
    callerId: '1',
    duration: '5m 23s',
    timestamp: '03/08/2025 13:56',
    status: 'pending',
    summary: 'The agent, Alex, is assisting a user, AA BB, who is experiencing sudden hearing issues, specifically a muffled sound in their left ear that worsened gradually over a few days. The user denies experiencing other symptoms like ear pain, dizziness, or ringing in the ear, and reports no recent colds, flu, sinus infections, or exposure to loud noises. The user also states they have no past ear problems or hearing issues, and no known allergies. They did use over-the-counter ear drops recently, but do not recall the name.',
    symptoms: ['Hearing loss', 'Muffled hearing'],
    transcript: 'Agent: Hello, this is Alex from NHS Eleven-labs health practice. How can I assist you today?\nPatient: Hi, Alex. Yes, I\'m calling because I\'m having some issues with my hearing recently.\nAgent: I\'m sorry to hear that you\'re experiencing issues with your hearing. To ensure I can assist you effectively, could you please provide your full name and date of birth?\nPatient: Yeah, it\'s AA and my last name is BB. My date of birth is the 1st of January 2000.\nAgent: Thank you, AA. I have that as AA BB, date of birth first of January two thousand. Could you describe the hearing issues you\'re experiencing in more detail?\nPatient: Yeah, it\'s been a bit sudden actually.\nAgent: Okay, so the hearing issues came on suddenly. When did you first notice the change in your hearing?\nPatient: Yeah it was all of a sudden I can hear so actually it was more gradual. Eventually it was getting a bit worse and worse throughout the days and then today I woke up and I couldn\'t really hear from one side.\nAgent: Okay, I understand. So it started gradually, getting worse over a few days, and today you woke up with significant hearing loss on one side. Can you tell me which ear is affected?\nPatient: Yeah, it\'s the left ear.\nAgent: Thank you. And can you describe the hearing loss? Is it a complete loss of hearing, or is it more like a muffled sound?\nPatient: It\'s definitely a muffled sound. I think it probably needs an appointment to clear it up.\nAgent: Okay, it sounds like you have a sense of what might be causing it. Have you experienced any other symptoms along with the muffled hearing in your left ear, such as ear pain, dizziness, ringing in your ear, or any discharge?\nPatient: No not at all.\nAgent: Okay, no other symptoms like ear pain, dizziness, or ringing in the ear. Have you had any recent colds, flu, or sinus infections?\nPatient: No\nAgent: Okay. Have you been exposed to any loud noises recently, like at a concert or through headphones?\nPatient: No\nAgent: Alright. Have you ever had any ear problems in the past, such as ear infections, excessive earwax, or any other hearing-related issues?\nPatient: No I\'m quite healthy.\nAgent: Okay, so no past ear problems or hearing issues. Just a few more questions, AA. Do you have any known allergies to medications or other substances?\nPatient: No I\'m not taking any medications but I did take some over-the-counter ear drops in my ears in case it was a blockage.\nAgent: I see, so you\'re not taking any regular medications, but you did use some over-the-counter ear drops recently. Do you recall the name of the ear drops you used?\nPatient: No.',
    agentNotes: 'Routine Appointment - For review'
  },
  {
    id: '2',
    priority: 'medium',
    patientName: 'Sarah Jones',
    dateOfBirth: '15/03/1985',
    nhsNumber: '123 456 7891',
    callerId: '+44 7700 900124',
    duration: '3m 45s',
    timestamp: '16/03/2025 12:30',
    status: 'completed',
    summary: 'Routine medication query regarding dosage adjustment for hypertension medication.',
    symptoms: ['High blood pressure'],
    transcript: 'Patient: I wanted to check about my blood pressure medication...\nAgent: What specific concerns do you have?\nPatient: The dosage seems too high, I\'ve been feeling dizzy...',
    agentNotes: 'Advised to speak with GP about dosage adjustment. Appointment booked for next week.'
  },
  {
    id: '3',
    priority: 'low',
    patientName: 'Emma Wilson',
    dateOfBirth: '22/11/1992',
    nhsNumber: '123 456 7892',
    callerId: '+44 7700 900125',
    duration: '2m 12s',
    timestamp: '16/03/2025 11:00',
    status: 'dropped',
    summary: 'Call dropped during initial assessment. No callback received.',
    symptoms: [],
    transcript: 'Patient: Hello, I wanted to ask about...\n[Call dropped]',
    agentNotes: 'Call dropped early. Attempted callback unsuccessful.'
  },
  {
    id: '4',
    priority: 'pending',
    patientName: 'Michael Brown',
    dateOfBirth: '08/07/1978',
    nhsNumber: '123 456 7893',
    callerId: '+44 7700 900126',
    duration: '0m 00s',
    timestamp: '16/03/2025 15:20',
    status: 'pending',
    summary: 'Call in progress - patient waiting for clinician assessment.',
    symptoms: ['Headache', 'Nausea'],
    transcript: 'Patient: I\'ve been having severe headaches...\n[Call in progress]',
    agentNotes: 'Initial assessment pending. Patient experiencing headaches and nausea.'
  }
];
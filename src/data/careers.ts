export interface Role {
  id: string;
  title: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  workingHours: string;
  equipment: string[];
}

export const roles: Role[] = [
  {
    id: "customer-support-agent",
    title: "Customer Support Agent",
    summary:
      "Handle customer enquiries via email and live chat on behalf of our clients. You will follow documented procedures and escalate where needed.",
    responsibilities: [
      "Respond to customer enquiries via email and live chat within agreed timelines",
      "Follow client-specific response templates and escalation procedures",
      "Accurately log interactions in the client's support platform",
      "Flag recurring issues or trends to the team lead",
      "Participate in weekly quality review sessions",
    ],
    requirements: [
      "Strong written English with clear, professional communication",
      "Experience in a customer-facing or support role (any industry)",
      "Ability to work independently and follow documented processes",
      "Comfortable learning new software and support tools",
      "Reliable internet connection and a computer in good working order",
    ],
    workingHours:
      "US business hours (overlap required). Typical shifts are 9am–5pm or 10am–6pm EST/CST, Monday–Friday. Exact hours confirmed per role.",
    equipment: [
      "Reliable internet connection (minimum 10 Mbps)",
      "Personal computer (Windows or macOS) in good working order",
      "Backup power or a plan for connectivity interruptions",
      "Quiet, professional working environment",
    ],
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant",
    summary:
      "Support clients with administrative, scheduling, and operational tasks. Work spans CRM updates, appointment coordination, and customer follow-ups.",
    responsibilities: [
      "Manage calendars and coordinate appointments on behalf of clients",
      "Update CRM records and maintain organised client data",
      "Handle customer follow-up emails and routine correspondence",
      "Research and compile information as instructed",
      "Complete administrative tasks to agreed standards and deadlines",
    ],
    requirements: [
      "Strong organisational skills and attention to detail",
      "Proficiency with common productivity tools (Google Workspace, Microsoft 365)",
      "Clear written communication in English",
      "Experience in an administrative or operations support role",
      "Ability to manage multiple tasks with minimal supervision",
    ],
    workingHours:
      "US business hours (overlap required). Hours and schedule confirmed per engagement.",
    equipment: [
      "Reliable internet connection (minimum 10 Mbps)",
      "Personal computer in good working order",
      "Backup power or a plan for connectivity interruptions",
    ],
  },
  {
    id: "quality-assurance-reviewer",
    title: "Quality Assurance Reviewer",
    summary:
      "Review customer support interactions for quality, accuracy, and tone. Provide structured feedback to agents and contribute to quality improvement processes.",
    responsibilities: [
      "Review a sample of support interactions each week against agreed quality criteria",
      "Score interactions using a documented quality framework",
      "Provide clear, constructive written feedback to agents",
      "Identify patterns in errors or service gaps and report to the team lead",
      "Assist in updating response templates and SOPs as needed",
    ],
    requirements: [
      "Prior experience in customer support or quality assurance",
      "Strong analytical and written communication skills",
      "High attention to detail and a consistent approach to evaluation",
      "Comfortable working with documentation and structured processes",
      "Ability to give feedback in a professional, constructive manner",
    ],
    workingHours:
      "Flexible, with some US business-hours overlap required for team check-ins. Hours confirmed per role.",
    equipment: [
      "Reliable internet connection",
      "Personal computer in good working order",
      "Backup connectivity plan",
    ],
  },
  {
    id: "team-lead",
    title: "Team Lead",
    summary:
      "Oversee a small team of support agents and virtual assistants. Ensure service quality, maintain documentation, and act as the primary point of contact for client escalations.",
    responsibilities: [
      "Monitor team performance against agreed service targets",
      "Conduct weekly quality reviews and share findings with the team",
      "Manage scheduling and coverage to meet client commitments",
      "Handle escalated customer issues and client-facing communication where needed",
      "Maintain and improve SOPs and training materials",
      "Prepare and distribute monthly performance reports",
    ],
    requirements: [
      "At least two years' experience in customer support, with some team oversight",
      "Excellent written and verbal English communication",
      "Confident using support platforms, spreadsheets, and reporting tools",
      "Strong problem-solving skills and a calm, organised approach",
      "Experience creating or maintaining documentation is an advantage",
    ],
    workingHours:
      "US business hours required, with availability for occasional early or extended coverage depending on client time zones.",
    equipment: [
      "Reliable internet connection (minimum 10 Mbps)",
      "Personal computer in good working order",
      "Backup power and connectivity plan",
      "Headset or microphone for team calls",
    ],
  },
];

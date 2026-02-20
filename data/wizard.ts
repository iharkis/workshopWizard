export interface WizardQuestion {
  id: string
  question: string
  options: WizardOption[]
}

export interface WizardOption {
  label: string
  description?: string
  next?: string        // ID of next question, or undefined if this is terminal
  workshops?: string[] // slugs to recommend (ordered by relevance)
}

// --- QUESTION TREE ---
//
// Q1 asks about situation (4 options) → not category
//   "starting out"  → q2_early  → q2_problem / q2_discovery / q2_landscape / q2_publicsector
//   "mid-project"   → q2_mid    → q2_ideation / q2_prioritise / q2_planning / q2_build
//   "looking back"  → q2_retro
//   "open/energise" → results

export const wizardQuestions: Record<string, WizardQuestion> = {

  // ── Q1: SITUATION ─────────────────────────────────────────────────────────────
  q1: {
    id: 'q1',
    question: 'Where are you in the work right now?',
    options: [
      {
        label: 'We\'re at the start — figuring out what we\'re solving and why',
        description: 'Scoping, researching, understanding users, or framing a problem',
        next: 'q2_early',
      },
      {
        label: 'We\'re deep in it — making decisions, designing, or aligning',
        description: 'Ideas, priorities, planning, requirements, or team agreement',
        next: 'q2_mid',
      },
      {
        label: 'We\'re looking back — reviewing what happened and learning from it',
        description: 'Sprint retros, project reviews, or team reflections',
        next: 'q2_retro',
      },
      {
        label: 'I just need to open or warm up the group',
        description: 'An icebreaker or energiser to get people in the room',
        workshops: ['check-in-round', 'two-truths-and-a-lie', '1-2-4-all'],
      },
    ],
  },

  // ── Q2: EARLY STAGE ───────────────────────────────────────────────────────────
  q2_early: {
    id: 'q2_early',
    question: 'What are you most trying to understand or define?',
    options: [
      {
        label: 'What the real problem is — we need to frame or define it',
        description: 'You have a situation but aren\'t sure of the root cause or what to solve',
        next: 'q2_problem',
      },
      {
        label: 'Our users — their needs, journeys, or motivations',
        description: 'Building a shared picture of who you\'re designing for and what they need',
        next: 'q2_discovery',
      },
      {
        label: 'The wider landscape — stakeholders, systems, or how things work now',
        description: 'Mapping who\'s involved, current processes, or risky assumptions',
        next: 'q2_landscape',
      },
      {
        label: 'A specific public sector challenge',
        description: 'Equality impacts, cross-government complexity, or benefit realisation',
        next: 'q2_publicsector',
      },
    ],
  },

  // ── Q2: LANDSCAPE (new) ───────────────────────────────────────────────────────
  q2_landscape: {
    id: 'q2_landscape',
    question: 'What do you need to map or understand about the landscape?',
    options: [
      {
        label: 'Who all the stakeholders are and how to engage them',
        workshops: ['stakeholder-mapping', 'whole-system-mapping'],
      },
      {
        label: 'How things work now — and how they should work in future',
        workshops: ['as-is-to-be-process-mapping'],
      },
      {
        label: 'What assumptions we\'re making that could prove wrong',
        workshops: ['assumption-mapping', 'premortem'],
      },
    ],
  },

  // ── Q2: MID-PROJECT ───────────────────────────────────────────────────────────
  q2_mid: {
    id: 'q2_mid',
    question: 'What does the team need from this session?',
    options: [
      {
        label: 'To generate new ideas or approaches',
        description: 'Creative thinking, divergence, or finding new solutions',
        next: 'q2_ideation',
      },
      {
        label: 'To prioritise or make a decision',
        description: 'Narrowing down options, agreeing what matters most',
        next: 'q2_prioritise',
      },
      {
        label: 'To plan, manage risk, or agree how to work together',
        description: 'Goals, risks, roles, or ways of working',
        next: 'q2_planning',
      },
      {
        label: 'To design or scope what we\'re building',
        description: 'User experience, service design, or requirements',
        next: 'q2_build',
      },
    ],
  },

  // ── Q2: BUILD / DESIGN (new) ─────────────────────────────────────────────────
  q2_build: {
    id: 'q2_build',
    question: 'Which side of the work is this session about?',
    options: [
      {
        label: 'The user experience — journeys, pain points, or value',
        description: 'Understanding what users go through and where things break down',
        next: 'q2_service',
      },
      {
        label: 'What to build — requirements, backlog, or delivery scope',
        description: 'Shaping the work and agreeing what gets built in what order',
        next: 'q2_requirements',
      },
    ],
  },

  // ── Q2: PROBLEM FRAMING ───────────────────────────────────────────────────────
  q2_problem: {
    id: 'q2_problem',
    question: 'What kind of help do you need with the problem?',
    options: [
      {
        label: 'Find the root cause of something that keeps going wrong',
        workshops: ['5-whys', 'fishbone-diagram'],
      },
      {
        label: 'Get everyone to agree on what the problem actually is',
        workshops: ['problem-statement', '5-whys'],
      },
      {
        label: 'Reframe the problem as a design opportunity',
        workshops: ['how-might-we', 'problem-statement'],
      },
      {
        label: 'Map out all the possible causes before diving in',
        workshops: ['fishbone-diagram', '5-whys'],
      },
    ],
  },

  // ── Q2: IDEATION ──────────────────────────────────────────────────────────────
  q2_ideation: {
    id: 'q2_ideation',
    question: 'What best describes your situation?',
    options: [
      {
        label: 'We need lots of ideas fast — quantity over quality',
        workshops: ['crazy-8s', 'reverse-brainstorm', 'round-robin'],
      },
      {
        label: 'The team is stuck in the same thinking — we need a creative shake-up',
        workshops: ['reverse-brainstorm', 'crazy-8s'],
      },
      {
        label: 'We want to build on each other\'s ideas collaboratively',
        workshops: ['round-robin', '1-2-4-all', 'mind-mapping'],
      },
      {
        label: 'We\'re exploring a new topic and want to map out the space',
        workshops: ['mind-mapping', 'how-might-we'],
      },
    ],
  },

  // ── Q2: PRIORITISATION ────────────────────────────────────────────────────────
  q2_prioritise: {
    id: 'q2_prioritise',
    question: 'What kind of decision or prioritisation do you need?',
    options: [
      {
        label: 'Vote democratically on the best options from a long list',
        workshops: ['dot-voting'],
      },
      {
        label: 'Weigh up effort against impact across many items',
        workshops: ['impact-effort-matrix', 'dot-voting'],
      },
      {
        label: 'Agree must-haves vs nice-to-haves with stakeholders',
        workshops: ['moscow', 'requirements-prioritisation'],
      },
      {
        label: 'Compare two or more options rigorously against set criteria',
        workshops: ['weighted-decision-matrix'],
      },
      {
        label: 'Prioritise a backlog or set of requirements with stakeholders',
        workshops: ['requirements-prioritisation', 'moscow', 'impact-effort-matrix'],
      },
    ],
  },

  // ── Q2: RETROSPECTIVES ────────────────────────────────────────────────────────
  q2_retro: {
    id: 'q2_retro',
    question: 'What tone or focus does the retrospective need?',
    options: [
      {
        label: 'Simple and structured — what to start, stop, and continue',
        workshops: ['start-stop-continue'],
      },
      {
        label: 'Capture learning as well as what worked and what didn\'t',
        workshops: ['4ls', 'start-stop-continue'],
      },
      {
        label: 'Something more visual and engaging, less like a standard retro',
        workshops: ['sailboat-retrospective'],
      },
      {
        label: 'Focus on how the team felt — emotional experience matters here',
        workshops: ['mad-sad-glad'],
      },
      {
        label: 'Look forward as well as back — risks ahead, not just lessons learned',
        workshops: ['sailboat-retrospective', '4ls'],
      },
    ],
  },

  // ── Q2: DISCOVERY ─────────────────────────────────────────────────────────────
  q2_discovery: {
    id: 'q2_discovery',
    question: 'What do you most need to understand?',
    options: [
      {
        label: 'The user\'s end-to-end journey through the service',
        workshops: ['journey-map', 'service-blueprint'],
      },
      {
        label: 'What users are actually trying to achieve (beyond the obvious)',
        workshops: ['jobs-to-be-done', 'proto-persona'],
      },
      {
        label: 'Make sense of a large amount of research we\'ve already gathered',
        workshops: ['affinity-mapping', 'insight-synthesis'],
      },
      {
        label: 'What risky assumptions we\'re making before we commit to a direction',
        workshops: ['assumption-mapping', 'proto-persona'],
      },
      {
        label: 'Who our users are — we need a shared picture of them',
        workshops: ['proto-persona', 'jobs-to-be-done'],
      },
    ],
  },

  // ── Q2: SERVICE DESIGN ────────────────────────────────────────────────────────
  q2_service: {
    id: 'q2_service',
    question: 'What aspect of the service are you working on?',
    options: [
      {
        label: 'Map the full service including backstage processes and systems',
        workshops: ['service-blueprint', 'journey-map'],
      },
      {
        label: 'Understand the value we\'re creating for users — and where we\'re not',
        workshops: ['value-proposition-canvas', 'jobs-to-be-done'],
      },
      {
        label: 'Map the user\'s experience and identify pain points',
        workshops: ['journey-map', 'service-blueprint'],
      },
    ],
  },

  // ── Q2: REQUIREMENTS ──────────────────────────────────────────────────────────
  q2_requirements: {
    id: 'q2_requirements',
    question: 'What are you trying to do with requirements?',
    options: [
      {
        label: 'Understand how things work now and design how they should work',
        workshops: ['as-is-to-be-process-mapping'],
      },
      {
        label: 'Organise user stories into a coherent delivery backlog',
        workshops: ['user-story-mapping', 'impact-mapping'],
      },
      {
        label: 'Connect what we\'re building back to business goals and outcomes',
        workshops: ['impact-mapping', 'benefits-mapping'],
      },
      {
        label: 'Get stakeholders to agree on which requirements matter most',
        workshops: ['requirements-prioritisation', 'moscow'],
      },
    ],
  },

  // ── Q2: PLANNING ──────────────────────────────────────────────────────────────
  q2_planning: {
    id: 'q2_planning',
    question: 'What kind of planning or alignment do you need?',
    options: [
      {
        label: 'Surface risks before we start — what could go wrong?',
        workshops: ['premortem', 'assumption-mapping'],
      },
      {
        label: 'Agree how the team will work together',
        workshops: ['team-charter'],
      },
      {
        label: 'Clarify who makes which decisions',
        workshops: ['daci-framework'],
      },
      {
        label: 'Set goals and success measures for the team or programme',
        workshops: ['okr-setting', 'benefits-mapping'],
      },
      {
        label: 'Build a benefits case or show the value of what we\'re doing',
        workshops: ['benefits-mapping', 'impact-mapping'],
      },
    ],
  },

  // ── Q2: PUBLIC SECTOR ─────────────────────────────────────────────────────────
  q2_publicsector: {
    id: 'q2_publicsector',
    question: 'What do you need to tackle?',
    options: [
      {
        label: 'Assess how a policy or service affects different groups of people',
        workshops: ['equality-impact-assessment'],
      },
      {
        label: 'Map a complex system involving multiple organisations or departments',
        workshops: ['whole-system-mapping', 'stakeholder-mapping'],
      },
      {
        label: 'Understand how benefits will be delivered and measured',
        workshops: ['benefits-mapping', 'impact-mapping'],
      },
    ],
  },
}

export const ROOT_QUESTION = 'q1'

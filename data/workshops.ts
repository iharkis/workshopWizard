export type Category =
  | 'icebreaker'
  | 'problem-framing'
  | 'ideation'
  | 'prioritisation'
  | 'retrospective'
  | 'discovery'
  | 'service-design'
  | 'requirements'
  | 'planning'
  | 'public-sector'

export const categoryMeta: Record<Category, { label: string; color: string; bg: string; border: string; text: string }> = {
  'icebreaker': {
    label: 'Icebreakers & Energisers',
    color: 'amber',
    bg: 'bg-amber-50',
    border: 'border-amber-300',
    text: 'text-amber-800',
  },
  'problem-framing': {
    label: 'Problem Framing',
    color: 'orange',
    bg: 'bg-orange-50',
    border: 'border-orange-300',
    text: 'text-orange-800',
  },
  'ideation': {
    label: 'Ideation',
    color: 'purple',
    bg: 'bg-purple-50',
    border: 'border-purple-300',
    text: 'text-purple-800',
  },
  'prioritisation': {
    label: 'Prioritisation',
    color: 'blue',
    bg: 'bg-blue-50',
    border: 'border-blue-300',
    text: 'text-blue-800',
  },
  'retrospective': {
    label: 'Retrospectives',
    color: 'green',
    bg: 'bg-green-50',
    border: 'border-green-300',
    text: 'text-green-800',
  },
  'discovery': {
    label: 'Discovery & Research',
    color: 'teal',
    bg: 'bg-teal-50',
    border: 'border-teal-300',
    text: 'text-teal-800',
  },
  'service-design': {
    label: 'Service Design',
    color: 'indigo',
    bg: 'bg-indigo-50',
    border: 'border-indigo-300',
    text: 'text-indigo-800',
  },
  'requirements': {
    label: 'Requirements & Analysis',
    color: 'rose',
    bg: 'bg-rose-50',
    border: 'border-rose-300',
    text: 'text-rose-800',
  },
  'planning': {
    label: 'Planning & Alignment',
    color: 'slate',
    bg: 'bg-slate-50',
    border: 'border-slate-300',
    text: 'text-slate-800',
  },
  'public-sector': {
    label: 'Public Sector',
    color: 'emerald',
    bg: 'bg-emerald-50',
    border: 'border-emerald-300',
    text: 'text-emerald-800',
  },
}

export interface WorkshopStep {
  title: string
  duration: string
  description: string
}

export interface Workshop {
  slug: string
  name: string
  category: Category
  duration: string
  groupSize: string
  description: string
  whenToUse: string[]
  steps: WorkshopStep[]
  materials: string[]
  tips: string[]
  tags: string[]
  isCommunity?: boolean
  suggesterName?: string
}

export const workshops: Workshop[] = [
  // ── ICEBREAKERS ──────────────────────────────────────────────────────────────
  {
    slug: 'check-in-round',
    name: 'Check-In Round',
    category: 'icebreaker',
    duration: '5–15 mins',
    groupSize: '4–30',
    description:
      'A simple opening ritual that gives everyone a voice and helps the group understand how people are showing up to the session. Sets a tone of inclusion from the first minute.',
    whenToUse: [
      'At the start of any workshop or meeting, especially when the group is diverse or has been under pressure.',
      'When you want to surface energy levels, blockers, or distractions before diving into work.',
      'For remote or hybrid groups who need a moment to connect before working together.',
    ],
    steps: [
      {
        title: 'Choose a prompt',
        duration: '2 mins',
        description:
          'Select a simple, open question. Examples: "One word for how you\'re arriving today?" or "What\'s one thing on your mind right now?" Keep it low-stakes and non-threatening.',
      },
      {
        title: 'Model the answer',
        duration: '1 min',
        description:
          'Facilitate first by giving your own honest answer. This sets the tone and signals that vulnerability is welcome.',
      },
      {
        title: 'Go around the group',
        duration: '5–10 mins',
        description:
          'Each person answers in turn. No cross-talk, questions, or responses from others during this phase. Everyone gets equal airtime.',
      },
      {
        title: 'Acknowledge and move on',
        duration: '1 min',
        description:
          'Thank the group briefly and bridge into the session agenda. Don\'t over-analyse what was shared.',
      },
    ],
    materials: ['No materials needed — works in person or remotely'],
    tips: [
      'Keep the prompt simple — the more complex the question, the more anxious people become.',
      'Resist the urge to respond or probe individual answers. Hold the space.',
      'If someone passes, accept it without pressure and move on.',
    ],
    tags: ['opening', 'warm-up', 'check-in', 'team', 'remote-friendly'],
  },
  {
    slug: 'two-truths-and-a-lie',
    name: 'Two Truths & a Lie',
    category: 'icebreaker',
    duration: '15–20 mins',
    groupSize: '4–15',
    description:
      'Each person shares three statements — two true, one false — and the group tries to identify the lie. Builds connection and reveals surprising things about colleagues in a fun, low-pressure way.',
    whenToUse: [
      'For new teams or cross-functional groups who don\'t know each other well.',
      'As a light-touch warm-up before a creative or collaborative session.',
      'Avoid if the group is very large (15+) as it becomes unwieldy.',
    ],
    steps: [
      {
        title: 'Introduce the activity',
        duration: '2 mins',
        description:
          'Explain that each person will share three statements, two true and one false. The group\'s job is to identify the lie.',
      },
      {
        title: 'Preparation time',
        duration: '3 mins',
        description:
          'Give everyone quiet time to think up their three statements. Encourage creativity — the best statements make the truth sound implausible.',
      },
      {
        title: 'Share and guess',
        duration: '10–15 mins',
        description:
          'Each person shares their three statements. The group discusses and reaches a consensus on which they think is the lie, then the person reveals the answer.',
      },
      {
        title: 'Debrief',
        duration: '2 mins',
        description:
          'Ask what surprised people or what they learned about their colleagues. Bridge into the main session.',
      },
    ],
    materials: ['Optional: sticky notes or paper to write statements'],
    tips: [
      'Encourage people to make the lie plausible — obvious lies make it too easy.',
      'The best games have truths that sound more surprising than the lie.',
      'Model with your own example first to show the spirit of the activity.',
    ],
    tags: ['team-building', 'icebreaker', 'fun', 'introductions', 'new-teams'],
  },
  {
    slug: '1-2-4-all',
    name: '1-2-4-All',
    category: 'icebreaker',
    duration: '15–30 mins',
    groupSize: '8–40',
    description:
      'A Liberating Structure that progressively builds shared thinking — individually, in pairs, in fours, then as a whole group. Ensures everyone\'s voice is heard, even in large groups, and prevents dominant voices from setting the agenda.',
    whenToUse: [
      'When you want broad participation and to avoid groupthink at the start of a session.',
      'For large groups where open discussion risks being dominated by a few voices.',
      'When you need to surface a diversity of perspectives on a question quickly.',
    ],
    steps: [
      {
        title: 'Silent self-reflection',
        duration: '2 mins',
        description:
          'Pose a clear question. Everyone thinks and notes their answer alone, in silence.',
      },
      {
        title: 'Pairs',
        duration: '4 mins',
        description:
          'Discuss in pairs, building on each other\'s thoughts. What resonates? What are the key ideas?',
      },
      {
        title: 'Groups of four',
        duration: '4 mins',
        description:
          'Two pairs combine and share the best ideas from their pair conversations. Agree on the one or two most important insights.',
      },
      {
        title: 'All together',
        duration: '5 mins',
        description:
          'Each group of four shares one key insight with the whole room. Capture on a whiteboard or shared document.',
      },
    ],
    materials: ['Sticky notes', 'Pens', 'Whiteboard or flip chart'],
    tips: [
      'The question you pose must be specific enough to be meaningful but open enough to generate variety. Avoid yes/no questions.',
      'Timekeeping is crucial — use a timer and stick to it. The constraint generates focus.',
      'This structure works equally well in person and online with breakout rooms.',
    ],
    tags: ['liberating-structures', 'participation', 'large-group', 'discussion', 'remote-friendly'],
  },

  // ── PROBLEM FRAMING ──────────────────────────────────────────────────────────
  {
    slug: '5-whys',
    name: '5 Whys',
    category: 'problem-framing',
    duration: '30–60 mins',
    groupSize: '3–10',
    description:
      'A root cause analysis technique that iteratively asks "why?" until the underlying cause of a problem is uncovered. Simple but powerful — it moves teams from symptoms to systemic causes.',
    whenToUse: [
      'When a problem keeps recurring and the team isn\'t sure what\'s actually causing it.',
      'After an incident or service failure — to understand root cause, not assign blame.',
      'When a team jumps to solutions before properly understanding the problem.',
    ],
    steps: [
      {
        title: 'State the problem',
        duration: '5 mins',
        description:
          'Write a clear, specific problem statement on the board. Make sure everyone agrees this is the right problem to analyse. Vague problems produce vague root causes.',
      },
      {
        title: 'Ask "why?" — first time',
        duration: '5 mins',
        description:
          'Ask "Why does this happen?" Capture all answers. If there are multiple, pick the most plausible or work each branch separately.',
      },
      {
        title: 'Continue asking why',
        duration: '15–25 mins',
        description:
          'For each answer, ask why again. Keep going until you reach a root cause — typically 4–6 iterations. You\'ve gone deep enough when the answer is a process failure, an assumption, or a systemic issue.',
      },
      {
        title: 'Identify the root cause',
        duration: '5 mins',
        description:
          'Agree on which cause(s) sit at the root. Often there\'s more than one strand — that\'s fine. Name them clearly.',
      },
      {
        title: 'Define actions',
        duration: '10 mins',
        description:
          'For each root cause, agree a concrete action to address it. Assign an owner and a deadline.',
      },
    ],
    materials: ['Whiteboard or large paper', 'Sticky notes', 'Markers'],
    tips: [
      'The answer to each "why" should be a cause, not a symptom. If the answers feel circular, the starting problem may be too broad.',
      'Resist the urge to stop at the first plausible cause — push through to the underlying system.',
      'This is not a blame exercise. Frame every "why" as a systems question, not a people question.',
    ],
    tags: ['root-cause', 'problem-solving', 'analysis', 'retrospective', 'incident'],
  },
  {
    slug: 'how-might-we',
    name: 'How Might We',
    category: 'problem-framing',
    duration: '30–45 mins',
    groupSize: '4–15',
    description:
      'Reframes problems or research insights as design opportunities. "How Might We" questions open up solution space without prescribing answers. The "might" keeps things exploratory rather than pressuring the group to commit.',
    whenToUse: [
      'After user research, problem discovery, or any insight-gathering activity.',
      'When a team is stuck thinking about a problem and needs a bridge into ideation.',
      'When a brief is too solution-focused and needs opening up.',
    ],
    steps: [
      {
        title: 'Brief the group',
        duration: '5 mins',
        description:
          'Explain the HMW format. Show a few examples. Stress that HMW questions should be open, not leading ("HMW help users track their application?" not "HMW build a dashboard?").',
      },
      {
        title: 'Individual writing',
        duration: '10 mins',
        description:
          'Each person writes one HMW question per sticky note for 10 minutes. Aim for quantity over quality — 5–10 questions each.',
      },
      {
        title: 'Share and cluster',
        duration: '10 mins',
        description:
          'Each person briefly explains their stickies as they place them on the wall. Group similar questions together and name each cluster.',
      },
      {
        title: 'Vote on the best',
        duration: '10 mins',
        description:
          'Each person gets 3 dot votes. Vote on the HMW questions that feel most exciting, important, or generative.',
      },
      {
        title: 'Take forward',
        duration: '5 mins',
        description:
          'The top-voted questions become the brief for an ideation session or the framing for further research.',
      },
    ],
    materials: ['Sticky notes (at least 10 per person)', 'Markers', 'Wall space or whiteboard'],
    tips: [
      'A good HMW is neither too broad ("HMW improve government?") nor too narrow ("HMW add a button?"). Aim for the productive middle.',
      'If questions are solutions in disguise ("HMW build an app to..."), push back and reframe.',
      'HMW works well immediately after sharing user research findings as a synthesis step.',
    ],
    tags: ['reframing', 'design-thinking', 'ucd', 'ideation', 'research', 'discovery'],
  },
  {
    slug: 'fishbone-diagram',
    name: 'Fishbone Diagram',
    category: 'problem-framing',
    duration: '45–60 mins',
    groupSize: '4–12',
    description:
      'Also known as an Ishikawa or Cause and Effect diagram. Maps causes of a problem visually in a fish-skeleton shape, organised by category. Helps teams move from blaming individuals to understanding systemic causes.',
    whenToUse: [
      'When a complex problem has many possible causes and you need to organise them.',
      'Post-incident or service failure analysis where systemic understanding is needed.',
      'When a team is in blame mode — the visual structure depersonalises the analysis.',
    ],
    steps: [
      {
        title: 'Define the effect',
        duration: '5 mins',
        description:
          'Write the problem clearly on the right side of the board — this is the "head" of the fish. Make sure everyone agrees on the problem statement.',
      },
      {
        title: 'Draw the skeleton',
        duration: '5 mins',
        description:
          'Draw a horizontal arrow pointing at the problem. Add 4–6 diagonal "bones" representing cause categories. Common categories: People, Process, Technology, Environment, Data, Policy.',
      },
      {
        title: 'Brainstorm causes',
        duration: '20–25 mins',
        description:
          'For each category, brainstorm possible causes and add them as sub-branches. Sub-causes can branch off further. Encourage quantity.',
      },
      {
        title: 'Identify most likely causes',
        duration: '10 mins',
        description:
          'Use dot voting or open discussion to identify which causes are most likely contributing to the problem.',
      },
      {
        title: 'Plan next steps',
        duration: '10 mins',
        description:
          'Agree what needs to be investigated or addressed. Assign owners for key actions.',
      },
    ],
    materials: ['Large paper or whiteboard', 'Markers', 'Sticky notes'],
    tips: [
      'Don\'t argue about which bone a cause belongs to — if it causes the problem, it\'s valid. The categorisation is a thinking aid, not a rule.',
      'Adapt the category labels to your context — "Policy" and "Legislation" are often more relevant in public sector settings than the classic manufacturing categories.',
      'Use this alongside 5 Whys — fishbone surfaces breadth, 5 Whys goes deep on one strand.',
    ],
    tags: ['root-cause', 'analysis', 'problem-solving', 'visual', 'systems', 'public-sector'],
  },
  {
    slug: 'problem-statement',
    name: 'Problem Statement',
    category: 'problem-framing',
    duration: '30–45 mins',
    groupSize: '3–10',
    description:
      'A structured workshop to help a team agree on a single, clear problem statement before jumping into solutions. Prevents misaligned efforts and ensures everyone is solving the same problem.',
    whenToUse: [
      'At the start of a project, discovery phase, or sprint when clarity is lacking.',
      'When different stakeholders have different views of what the problem is.',
      'When a team is generating solutions before the problem has been properly defined.',
    ],
    steps: [
      {
        title: 'Diverge — capture all problems',
        duration: '10 mins',
        description:
          'Everyone writes down what they think the problem is on sticky notes, individually and in silence. One problem per note. No discussion yet.',
      },
      {
        title: 'Share and cluster',
        duration: '10 mins',
        description:
          'Each person explains their notes and places them on the board. The facilitator groups similar ones and names the clusters.',
      },
      {
        title: 'Draft a problem statement',
        duration: '10 mins',
        description:
          'As a group, draft a statement using the format: "We need to find a way to [action] for [user/stakeholder] because [insight/evidence], which will result in [outcome]."',
      },
      {
        title: 'Pressure test',
        duration: '5 mins',
        description:
          'Ask: Is this specific enough? Is it a solution in disguise? Does it include the right user? Does it reflect the evidence? Refine as needed.',
      },
      {
        title: 'Agree and commit',
        duration: '5 mins',
        description:
          'Get visible agreement — thumbs up, a dot sticker on the statement, or a sign-off. Record and share after the session.',
      },
    ],
    materials: ['Sticky notes', 'Markers', 'Whiteboard or large paper'],
    tips: [
      'Watch out for problem statements that are solutions in disguise ("We need to build an app to..."). Push back firmly.',
      'The phrase "because [evidence]" is the most important part — it grounds the statement in reality rather than assumption.',
      'A good problem statement should generate multiple possible solutions. If it implies only one, it\'s too narrow.',
    ],
    tags: ['alignment', 'scoping', 'requirements', 'definition', 'ucd', 'project-start'],
  },

  // ── IDEATION ─────────────────────────────────────────────────────────────────
  {
    slug: 'crazy-8s',
    name: 'Crazy 8s',
    category: 'ideation',
    duration: '30–45 mins',
    groupSize: '3–20',
    description:
      'A fast-paced ideation technique where each participant sketches 8 ideas in 8 minutes. Forces quantity over quality and gets creative thinking flowing quickly. Borrowed from Google\'s Design Sprint methodology.',
    whenToUse: [
      'When a team needs to generate a lot of ideas fast and break out of safe, predictable thinking.',
      'As an ideation warm-up before more structured activities.',
      'When a team has been working on the same problem for a long time and is stuck in a rut.',
    ],
    steps: [
      {
        title: 'Brief the challenge',
        duration: '5 mins',
        description:
          'Give context on what\'s being solved. Share any relevant research, constraints, or HMW questions. Make sure everyone understands the design challenge.',
      },
      {
        title: 'Fold the paper',
        duration: '2 mins',
        description:
          'Each person folds an A4 or A3 sheet into 8 equal panels. This creates the 8 boxes for 8 ideas.',
      },
      {
        title: '8 ideas in 8 minutes',
        duration: '8 mins',
        description:
          'Timer goes. Sketch one idea per panel. These are rough — stick figures, boxes, arrows, and annotations are all fine. Move on when the timer says to, even if an idea isn\'t finished.',
      },
      {
        title: 'Share back',
        duration: '10 mins',
        description:
          'Each person presents their 8 sketches briefly — one minute per person. No critique at this stage, just sharing.',
      },
      {
        title: 'Dot vote on favourites',
        duration: '5 mins',
        description:
          'Each person gets 3–5 dots to vote on ideas they want to explore further. The most-voted ideas move forward.',
      },
    ],
    materials: ['A4 or A3 paper', 'Pens or markers', 'Timer'],
    tips: [
      'Emphasise that this is NOT a drawing exercise — words, flows, and rough boxes are perfectly valid.',
      'The 8-minute constraint is intentional. Don\'t extend it — the pressure is what generates creative leaps.',
      'Ideas that seem "too out there" in Crazy 8s often contain a kernel of something valuable. Encourage wild thinking.',
    ],
    tags: ['design-sprint', 'ideation', 'sketching', 'fast', 'creative', 'diverge'],
  },
  {
    slug: 'reverse-brainstorm',
    name: 'Reverse Brainstorm',
    category: 'ideation',
    duration: '45–60 mins',
    groupSize: '4–15',
    description:
      'Instead of asking "how do we solve this?", ask "how might we make this problem worse?" Then reverse the worst ideas into potential solutions. Breaks creative blocks and often generates unexpectedly practical ideas.',
    whenToUse: [
      'When a team is stuck giving the same tired answers to a familiar problem.',
      'To inject creative energy into a session that\'s become dry.',
      'When you want to surface risks and failure modes as a by-product of ideation.',
    ],
    steps: [
      {
        title: 'State the original problem',
        duration: '5 mins',
        description:
          'Write the problem clearly so everyone is aligned on what they\'re working on.',
      },
      {
        title: 'Reverse the question',
        duration: '5 mins',
        description:
          'Reframe as: "How might we make this problem as bad as possible?" or "What would guarantee this fails completely?" Get people comfortable with the absurdity of the framing.',
      },
      {
        title: 'Brainstorm bad ideas',
        duration: '15 mins',
        description:
          'Generate as many terrible ideas as possible. Encourage outrageous and specific suggestions — the worse the better. Laughter is a sign it\'s working.',
      },
      {
        title: 'Reverse the ideas',
        duration: '15 mins',
        description:
          'For each bad idea, reverse it into a potential solution. "Make information impossible to find" becomes "make every piece of information findable in under 30 seconds." The reversal doesn\'t have to be literal — it can spark a new angle.',
      },
      {
        title: 'Evaluate and select',
        duration: '10 mins',
        description:
          'Review the reversed ideas. Dot vote on the most interesting or feasible ones to carry forward.',
      },
    ],
    materials: ['Sticky notes', 'Markers', 'Whiteboard'],
    tips: [
      'Let the group genuinely enjoy the "bad ideas" phase — the energy it generates carries into the reversal.',
      'Some bad ideas won\'t reverse cleanly. That\'s fine — skip them and focus on ones that do.',
      'This technique also works well for risk identification — the bad ideas list is itself a useful risk register.',
    ],
    tags: ['creative', 'ideation', 'problem-solving', 'energiser', 'risk', 'diverge'],
  },
  {
    slug: 'round-robin',
    name: 'Round Robin',
    category: 'ideation',
    duration: '30–45 mins',
    groupSize: '4–12',
    description:
      'Each participant starts an idea on a piece of paper, then passes it to the next person who builds on it. Ideas evolve iteratively as they travel around the group, combining perspectives in ways that individual brainstorming can\'t.',
    whenToUse: [
      'When you want ideas to build collaboratively on each other.',
      'When you want to ensure every voice contributes equally to the ideation.',
      'Works well for distributed teams using shared digital cards or documents.',
    ],
    steps: [
      {
        title: 'Set the prompt',
        duration: '5 mins',
        description:
          'Give a clear question or challenge for everyone to respond to. Make sure the prompt is understood before starting.',
      },
      {
        title: 'First round',
        duration: '5 mins',
        description:
          'Each person writes their initial idea or response on paper or a digital card. This is their starting contribution.',
      },
      {
        title: 'Pass and build',
        duration: '15–25 mins (3–5 rounds of 5 mins each)',
        description:
          'Papers are passed to the next person (clockwise, or rotate in digital tools). Each person reads what\'s there and adds to, extends, questions, or builds on the idea. Repeat for several rounds.',
      },
      {
        title: 'Return and review',
        duration: '5 mins',
        description:
          'Papers return to their original author. Everyone reads the full evolution of their starting idea.',
      },
      {
        title: 'Share highlights',
        duration: '5 mins',
        description:
          'Each person shares the most interesting or surprising development that happened to their original idea.',
      },
    ],
    materials: ['A4 paper or cards', 'Pens', 'Alternatively: shared digital workspace (Miro, Jamboard)'],
    tips: [
      'Ask participants to build on, not replace, the previous person\'s contribution.',
      'If someone is stuck, they can add a question mark or a "what if..." and pass it on.',
      'The number of rounds depends on group size — aim for each sheet to pass through at least half the group.',
    ],
    tags: ['collaborative', 'ideation', 'co-creation', 'iterative', 'equal-voice'],
  },
  {
    slug: 'mind-mapping',
    name: 'Mind Mapping',
    category: 'ideation',
    duration: '20–40 mins',
    groupSize: '1–20',
    description:
      'Start with a central idea and branch outwards, connecting related thoughts visually. Useful for exploring a topic space, generating sub-ideas from a central theme, or planning the structure of complex work.',
    whenToUse: [
      'When exploring a new problem area and wanting to map the full landscape of a topic.',
      'Planning a research agenda, workshop programme, or complex piece of work.',
      'When individual thinking feels stuck — externalising thoughts spatially often unlocks new connections.',
    ],
    steps: [
      {
        title: 'Place the central idea',
        duration: '2 mins',
        description:
          'Write or draw the core topic in the centre of a large sheet or whiteboard. Circle it.',
      },
      {
        title: 'Draw first branches',
        duration: '10 mins',
        description:
          'Add main themes or sub-topics radiating outwards. Use single words or short phrases, not sentences. Draw curved lines, not straight ones — it helps with visual flow.',
      },
      {
        title: 'Expand branches',
        duration: '10–15 mins',
        description:
          'From each main branch, add further connections and ideas. Keep going until energy or time runs out. Don\'t filter — capture everything.',
      },
      {
        title: 'Identify patterns',
        duration: '5 mins',
        description:
          'Step back and look for clusters, gaps, or unexpected connections between branches. Draw cross-links where relevant.',
      },
      {
        title: 'Discuss and prioritise',
        duration: '5 mins',
        description:
          'If working as a group, agree which areas are most worth pursuing. Circle or highlight priority areas.',
      },
    ],
    materials: ['Large paper or whiteboard', 'Coloured markers'],
    tips: [
      'Use different colours per main branch to make the map easy to navigate.',
      'Don\'t edit as you go — capture everything and review at the end.',
      'Digital tools like Miro, XMind, or Mural work well for collaborative or async mind mapping.',
    ],
    tags: ['creative', 'ideation', 'exploration', 'planning', 'visual', 'individual'],
  },

  // ── PRIORITISATION ───────────────────────────────────────────────────────────
  {
    slug: 'dot-voting',
    name: 'Dot Voting',
    category: 'prioritisation',
    duration: '15–30 mins',
    groupSize: '3–30',
    description:
      'A simple democratic technique to surface group preferences. Everyone gets a limited number of dot stickers (or virtual equivalents) to vote on items they value most. Fast, inclusive, and visually clear.',
    whenToUse: [
      'When a group has too many options and needs to narrow down quickly.',
      'For prioritising backlogs, ideas, risks, problem areas, or HMW questions.',
      'When you want a quick read of group sentiment without a lengthy discussion.',
    ],
    steps: [
      {
        title: 'Display all options',
        duration: '2 mins',
        description:
          'Ensure all items are visible on the wall, board, or screen. Give everyone a moment to read through them.',
      },
      {
        title: 'Set voting rules',
        duration: '2 mins',
        description:
          'Give each person 3–5 dots. They can split them across items or stack multiple on one they feel strongly about. No discussion yet.',
      },
      {
        title: 'Vote silently',
        duration: '5 mins',
        description:
          'Everyone votes at the same time. Silence is key — no lobbying or influencing others during this phase.',
      },
      {
        title: 'Tally results',
        duration: '2 mins',
        description:
          'Count dots per item. Reorder or highlight the top-voted items.',
      },
      {
        title: 'Discuss outliers',
        duration: '5 mins',
        description:
          'If something important got zero votes, or something unexpected got many, invite brief discussion before finalising the order.',
      },
    ],
    materials: ['Dot stickers (physical) or digital equivalents (Miro, FigJam, Mentimeter)'],
    tips: [
      'Silent simultaneous voting prevents groupthink and anchoring. If one person votes first and others follow, the result is biased.',
      'Dot voting gives a read on group preference, not a final decision. Use it to focus discussion, not to bypass it.',
      'In remote sessions, tools like Miro\'s voting feature or emoji reactions in Mural work well.',
    ],
    tags: ['decision-making', 'prioritisation', 'democratic', 'fast', 'remote-friendly'],
  },
  {
    slug: 'impact-effort-matrix',
    name: 'Impact vs Effort Matrix',
    category: 'prioritisation',
    duration: '45–60 mins',
    groupSize: '3–10',
    description:
      'Plot ideas or backlog items on a 2×2 grid based on estimated impact vs effort. Surfaces quick wins and helps deprioritise low-value, high-effort work. Forces productive conversation about relative value.',
    whenToUse: [
      'When a team has more work than capacity and needs to make strategic choices.',
      'For backlog refinement, roadmap planning, or choosing between initiatives.',
      'When there\'s disagreement about priority — the matrix gives a shared visual to debate around.',
    ],
    steps: [
      {
        title: 'Set up the matrix',
        duration: '5 mins',
        description:
          'Draw a 2×2 on the board. Label the x-axis "Effort" (low left to high right) and y-axis "Impact" (low bottom to high top).',
      },
      {
        title: 'Agree definitions',
        duration: '5 mins',
        description:
          'Agree on what "impact" means for this session — user value, business value, cost reduction? Align on definitions before placing items.',
      },
      {
        title: 'Place items',
        duration: '15–20 mins',
        description:
          'One by one, place each sticky note on the matrix. Discuss as a group. Embrace the conversation — the discussion is often as valuable as the output.',
      },
      {
        title: 'Label the quadrants',
        duration: '5 mins',
        description:
          'Quick Wins (low effort, high impact), Major Projects (high effort, high impact), Fill-ins (low effort, low impact), Time-sinks (high effort, low impact).',
      },
      {
        title: 'Agree priorities',
        duration: '10 mins',
        description:
          'Sequence Quick Wins first. Discuss whether Major Projects are worth the investment. Deprioritise Time-sinks. Document the agreed order.',
      },
    ],
    materials: ['Large paper or whiteboard', 'Sticky notes', 'Markers'],
    tips: [
      'Avoid false precision — this is relative, not an exact science. "High" and "low" are enough.',
      'If two items generate a long debate, that debate is useful signal — the disagreement reveals hidden assumptions.',
      'Revisit the matrix when new information arrives — items move as understanding grows.',
    ],
    tags: ['prioritisation', 'planning', 'decision-making', 'backlog', 'strategy', 'ba'],
  },
  {
    slug: 'moscow',
    name: 'MoSCoW',
    category: 'prioritisation',
    duration: '45–60 mins',
    groupSize: '3–12',
    description:
      'Categorises requirements into Must Have, Should Have, Could Have, and Won\'t Have. Helps teams and stakeholders agree on scope and makes trade-offs explicit. Widely used in agile and business analysis.',
    whenToUse: [
      'At the start of a project or sprint to define and agree scope.',
      'When scope is creeping and needs to be reined in with stakeholders.',
      'When delivery constraints (time, budget) mean the team can\'t do everything and priorities must be explicit.',
    ],
    steps: [
      {
        title: 'Explain the categories',
        duration: '5 mins',
        description:
          'Must = non-negotiable for launch. Should = important but not critical for first release. Could = desirable if time and capacity allow. Won\'t = explicitly out of scope for now (not forever).',
      },
      {
        title: 'List all requirements',
        duration: '10 mins',
        description:
          'Capture all requirements or features on sticky notes — don\'t pre-filter at this stage.',
      },
      {
        title: 'Categorise together',
        duration: '20–30 mins',
        description:
          'Work through each item as a group. Place it in a category. Discuss disagreements openly — they often surface important constraints or differing assumptions.',
      },
      {
        title: 'Review the Musts',
        duration: '10 mins',
        description:
          'Challenge the Must list — is everything on it truly essential? Teams routinely overload this category. If everything is a Must, MoSCoW hasn\'t worked.',
      },
      {
        title: 'Document and agree',
        duration: '5 mins',
        description:
          'Record the final categorisation. Get sign-off from stakeholders present. Revisit when scope changes arise.',
      },
    ],
    materials: ['Sticky notes', 'Whiteboard with 4 labelled columns (M/S/C/W)', 'Markers'],
    tips: [
      '"Must" should represent the minimum viable product. Push back hard on over-classification.',
      '"Won\'t Have (this time)" is not a rejection — it\'s a deferral. Framing it this way reduces stakeholder resistance.',
      'Be explicit about the time horizon — Musts for this sprint may differ from Musts for this phase.',
    ],
    tags: ['requirements', 'scoping', 'prioritisation', 'stakeholders', 'project-management', 'ba'],
  },
  {
    slug: 'weighted-decision-matrix',
    name: 'Weighted Decision Matrix',
    category: 'prioritisation',
    duration: '45–60 mins',
    groupSize: '3–10',
    description:
      'Score options against a set of weighted criteria to make complex decisions more objective. Useful when the right answer isn\'t obvious and emotion or politics are running high.',
    whenToUse: [
      'When choosing between two or more significant options (technical approaches, service models, suppliers, delivery strategies).',
      'When decisions are getting stuck because different people weight factors differently.',
      'To bring rigour to decisions that might otherwise be based on whoever speaks loudest.',
    ],
    steps: [
      {
        title: 'Define options',
        duration: '5 mins',
        description:
          'List the options being compared as columns of a table. Make sure each option is clearly defined and comparable.',
      },
      {
        title: 'Define criteria',
        duration: '10 mins',
        description:
          'Agree as a group what matters for this decision. List 4–7 criteria as rows (e.g. user benefit, cost, technical feasibility, policy alignment, risk, time to deliver).',
      },
      {
        title: 'Weight the criteria',
        duration: '10 mins',
        description:
          'Allocate a total of 100 points across criteria based on relative importance. This is where priorities become explicit.',
      },
      {
        title: 'Score each option',
        duration: '15 mins',
        description:
          'For each criterion, score each option out of 10. Work through systematically. Where scores differ, discuss briefly to reach consensus.',
      },
      {
        title: 'Calculate and discuss',
        duration: '10 mins',
        description:
          'Multiply score × weight for each cell. Sum columns to get a total. The highest total is the analytically preferred option — but treat it as a conversation starter, not a final verdict.',
      },
    ],
    materials: ['Pre-prepared table (digital spreadsheet or large paper)', 'Calculator'],
    tips: [
      'Be transparent about how weights were set — this is where bias hides. Agree weights before scoring, not after.',
      'If the result feels wrong, revisit the weights. The discomfort is useful data about what the group actually values.',
      'This technique works particularly well for options appraisals that need to be documented for governance.',
    ],
    tags: ['decision-making', 'structured', 'analytical', 'options-appraisal', 'governance', 'public-sector'],
  },

  // ── RETROSPECTIVES ───────────────────────────────────────────────────────────
  {
    slug: 'start-stop-continue',
    name: 'Start / Stop / Continue',
    category: 'retrospective',
    duration: '45–60 mins',
    groupSize: '4–15',
    description:
      'A simple, structured retrospective format. The team reflects on what they should start doing, stop doing, and continue doing. Intuitive format that works well for teams new to retrospectives.',
    whenToUse: [
      'At the end of a sprint, project, or significant piece of work.',
      'For teams new to retrospectives — the format is easy to understand and participate in.',
      'When a team wants a structured but conversational way to surface improvements.',
    ],
    steps: [
      {
        title: 'Set the stage',
        duration: '5 mins',
        description:
          'Agree the time period being reflected on. Remind the group of the retrospective prime directive: everyone did the best job they could with the knowledge and resources they had.',
      },
      {
        title: 'Individual reflection',
        duration: '10 mins',
        description:
          'Each person writes sticky notes for each category — Start, Stop, Continue — in silence. One idea per note.',
      },
      {
        title: 'Share and cluster',
        duration: '15 mins',
        description:
          'Each person reads out their notes as they place them on the board. Group similar ideas together and name the clusters.',
      },
      {
        title: 'Discuss and vote',
        duration: '15 mins',
        description:
          'Use dot voting to identify the most important items in each category. Discuss the top-voted ones.',
      },
      {
        title: 'Agree actions',
        duration: '10 mins',
        description:
          'For the top-voted items, agree specific, owned actions. Who will do what, by when? A retro without actions is just venting.',
      },
    ],
    materials: ['Sticky notes (3 colours if possible)', 'Markers', 'Whiteboard with 3 columns'],
    tips: [
      'Keep "Start" items focused on the team\'s own behaviour, not requests for other teams.',
      'The "Stop" column can be the most valuable — be honest about what isn\'t working.',
      'Actions should be specific and achievable within the next sprint or period, not vague aspirations.',
    ],
    tags: ['retrospective', 'agile', 'team', 'reflection', 'improvement'],
  },
  {
    slug: '4ls',
    name: '4Ls',
    category: 'retrospective',
    duration: '45–60 mins',
    groupSize: '4–15',
    description:
      'A retrospective format that captures four dimensions: Liked (what went well), Learned (new understanding), Lacked (what was missing), Longed For (what you wished existed). Goes deeper than Start/Stop/Continue by capturing learning and unmet strategic needs.',
    whenToUse: [
      'After a project, training event, or large workshop — wherever richer reflection is valuable.',
      'When you want to capture learning alongside feedback.',
      'The "Longed For" category often surfaces strategic issues that other formats miss.',
    ],
    steps: [
      {
        title: 'Brief the format',
        duration: '5 mins',
        description:
          'Explain the four Ls: Liked (what went well), Learned (what you found out or now understand), Lacked (what was missing or insufficient), Longed For (what you wished had existed).',
      },
      {
        title: 'Individual reflection',
        duration: '10 mins',
        description:
          'Each person writes sticky notes for each L in silence.',
      },
      {
        title: 'Share and cluster',
        duration: '15 mins',
        description:
          'Place notes under each heading. Cluster similar themes. Draw out patterns.',
      },
      {
        title: 'Prioritise',
        duration: '10 mins',
        description:
          'Dot vote on the most impactful items in Lacked and Longed For. These are your action drivers.',
      },
      {
        title: 'Agree actions',
        duration: '10 mins',
        description:
          'Agree concrete, owned changes based on top-voted items. Don\'t let insights without actions sit on the board.',
      },
    ],
    materials: ['Sticky notes (4 colours if possible)', 'Markers', 'Whiteboard with 4 columns'],
    tips: [
      '"Longed For" often reveals product, strategic, or capability gaps that "Lacked" doesn\'t surface. Pay particular attention to this column.',
      'Encourage specificity — "better communication" is too vague. "A weekly update email to stakeholders" is actionable.',
    ],
    tags: ['retrospective', 'agile', 'learning', 'reflection', 'team'],
  },
  {
    slug: 'sailboat-retrospective',
    name: 'Sailboat Retrospective',
    category: 'retrospective',
    duration: '45–60 mins',
    groupSize: '4–15',
    description:
      'A visual, metaphor-driven retrospective. The team\'s goal is an island, the wind represents what\'s helping them, anchors represent what\'s slowing them down, and rocks represent risks ahead. The metaphor makes the session feel less confrontational.',
    whenToUse: [
      'When you want to make a retrospective more engaging and visual.',
      'When team morale is low and a direct retrospective feels too confrontational.',
      'When you also want to surface upcoming risks alongside reflection on the past.',
    ],
    steps: [
      {
        title: 'Draw the sailboat',
        duration: '5 mins',
        description:
          'On a large sheet or digital board, draw: a boat (the team), an island (the goal), clouds with wind (what\'s helping), anchors below the boat (what\'s slowing you down), and rocks in the water (risks ahead).',
      },
      {
        title: 'Brief the categories',
        duration: '3 mins',
        description:
          'Wind = things helping progress. Anchors = things slowing you down. Rocks = risks and obstacles ahead. Island = your goal/destination.',
      },
      {
        title: 'Individual reflection',
        duration: '10 mins',
        description:
          'Everyone writes sticky notes for each category in silence.',
      },
      {
        title: 'Share and cluster',
        duration: '15 mins',
        description:
          'Place notes on the relevant part of the diagram. Discuss patterns that emerge.',
      },
      {
        title: 'Prioritise and action',
        duration: '15 mins',
        description:
          'Vote on the most important anchors and rocks. Agree how to cut the anchors and avoid the rocks.',
      },
    ],
    materials: ['Large paper or digital whiteboard (Miro, FigJam)', 'Markers', 'Sticky notes'],
    tips: [
      'Keep the island/goal visible throughout — it reframes problems as obstacles to overcome rather than failures to dwell on.',
      'The rocks (risks ahead) make this format more forward-looking than most retros. Use this when upcoming challenges are on people\'s minds.',
    ],
    tags: ['retrospective', 'visual', 'metaphor', 'agile', 'team', 'risk'],
  },
  {
    slug: 'mad-sad-glad',
    name: 'Mad / Sad / Glad',
    category: 'retrospective',
    duration: '30–45 mins',
    groupSize: '4–15',
    description:
      'An emotionally-oriented retrospective that asks how team members felt during the period under review. Surfaces the human experience of the work alongside practical concerns. Builds psychological safety when facilitated well.',
    whenToUse: [
      'After particularly intense, stressful, or emotionally charged periods of work.',
      'When a team has been through significant change, conflict, or uncertainty.',
      'When psychological safety is the goal as much as practical improvement.',
    ],
    steps: [
      {
        title: 'Frame the exercise',
        duration: '5 mins',
        description:
          'Explain that feelings are valid and useful data about how the team is working. This isn\'t a complaint session — it\'s about understanding the human experience of the work so you can improve it.',
      },
      {
        title: 'Individual reflection',
        duration: '8 mins',
        description:
          'Write notes for: Mad (frustrated, angry, stressed), Sad (disappointed, let down, demotivated), Glad (positive, proud, energised). One idea per note, in silence.',
      },
      {
        title: 'Share',
        duration: '15 mins',
        description:
          'Each person shares their notes. Facilitator clusters common themes. Hold the space — don\'t minimise or rush past feelings.',
      },
      {
        title: 'Reflect on patterns',
        duration: '10 mins',
        description:
          'Discuss: What patterns are emerging? What surprised us? What\'s causing the Mad and Sad themes?',
      },
      {
        title: 'Agree 1–2 changes',
        duration: '5 mins',
        description:
          'Agree the most important change to make in the next period. Keep it small and achievable.',
      },
    ],
    materials: ['Sticky notes (3 colours)', 'Markers', 'Whiteboard with 3 columns'],
    tips: [
      'The facilitator should model vulnerability by sharing their own feelings first.',
      'If psychological safety is low, consider collecting notes anonymously before the session.',
      'Don\'t rush the "Share" phase — sitting with emotions takes time and matters.',
    ],
    tags: ['retrospective', 'emotional-intelligence', 'team-health', 'reflection', 'psychological-safety'],
  },

  // ── DISCOVERY ────────────────────────────────────────────────────────────────
  {
    slug: 'journey-map',
    name: 'Journey Map',
    category: 'discovery',
    duration: '90–120 mins',
    groupSize: '3–10',
    description:
      'A visual representation of a user\'s experience as they interact with a service or process — mapping steps, emotions, pain points, and moments of delight over time. Builds shared empathy and surfaces opportunities for improvement.',
    whenToUse: [
      'During discovery, to understand the current state of a service from the user\'s perspective.',
      'When a team is too product/feature-focused and needs to reconnect with the end-to-end user experience.',
      'As a tool for aligning stakeholders on the user\'s reality before designing solutions.',
    ],
    steps: [
      {
        title: 'Define scope',
        duration: '10 mins',
        description:
          'Agree which user group and which journey you\'re mapping. Set clear start and end points. A common mistake is scoping too broadly — pick one user, one scenario.',
      },
      {
        title: 'Map the stages',
        duration: '10 mins',
        description:
          'Identify the main phases of the journey (e.g. Aware → Apply → Wait → Receive → Use → Review). Write these as column headers across the top of a large sheet.',
      },
      {
        title: 'Map actions and touchpoints',
        duration: '20 mins',
        description:
          'For each stage, note what the user does (actions) and how they interact with the service (touchpoints: website, letter, phone call, in-person visit).',
      },
      {
        title: 'Map emotions',
        duration: '20 mins',
        description:
          'For each stage, indicate the user\'s emotional experience on a scale. Draw a curve across the stages. Where does it dip? Where does it rise?',
      },
      {
        title: 'Identify pain points and opportunities',
        duration: '20 mins',
        description:
          'Mark moments of friction, confusion, or failure with red stickers. Mark moments of delight or strength with green. Discuss: which pain points matter most?',
      },
      {
        title: 'Prioritise',
        duration: '10 mins',
        description:
          'Dot vote on the most impactful pain points to address. These become inputs to your How Might We questions or design brief.',
      },
    ],
    materials: ['Large paper or digital whiteboard', 'Sticky notes', 'Markers', 'Emoticon stickers (optional)'],
    tips: [
      'Avoid jumping to solutions while mapping — stay in discovery mode. The goal is empathy and understanding, not fixing.',
      'If you have real research data, use it to anchor the map. If not, treat the map as a hypothesis to be validated.',
      'Involve people from different teams — front-line staff and policy teams often have very different views of the same journey.',
    ],
    tags: ['ucd', 'service-design', 'research', 'empathy', 'user-experience', 'discovery', 'public-sector'],
  },
  {
    slug: 'jobs-to-be-done',
    name: 'Jobs to Be Done',
    category: 'discovery',
    duration: '60–90 mins',
    groupSize: '3–10',
    description:
      'Focuses on understanding what users are trying to achieve — their "job" — rather than who they are or what features they want. Shifts thinking from demographics and requirements to motivations and outcomes.',
    whenToUse: [
      'Early in discovery to ground the team in what users actually need to accomplish.',
      'When a team is feature-focused and needs to zoom out to user motivation.',
      'When existing requirements feel solution-shaped rather than need-shaped.',
    ],
    steps: [
      {
        title: 'Introduce the framework',
        duration: '10 mins',
        description:
          'Explain the job statement format: "When [situation], I want to [motivation/job], so I can [outcome]." Introduce functional, social, and emotional jobs. Show examples.',
      },
      {
        title: 'Identify the context',
        duration: '5 mins',
        description:
          'Agree on the user group and context being explored. Be specific.',
      },
      {
        title: 'Craft job statements',
        duration: '20 mins',
        description:
          'Each person writes job statements on sticky notes. Focus on verbs and outcomes — not features. Push from "I want a portal" to "I want to understand my eligibility without having to call anyone."',
      },
      {
        title: 'Share and cluster',
        duration: '15 mins',
        description:
          'Group similar job statements. Identify functional, social, and emotional jobs in the clusters.',
      },
      {
        title: 'Prioritise',
        duration: '10 mins',
        description:
          'Which jobs are most important? Most underserved? Most relevant to your service? Dot vote to find out.',
      },
      {
        title: 'Discuss implications',
        duration: '10 mins',
        description:
          'How does understanding these jobs change how you think about what you\'re designing or delivering?',
      },
    ],
    materials: ['Sticky notes', 'Markers', 'Whiteboard'],
    tips: [
      'Watch for output-framing ("I want a better website") vs job-framing ("I want to find the right benefit quickly"). Push for the latter.',
      'Jobs don\'t change often — technology, channels, and features do. Grounding your work in jobs makes it more durable.',
      'This pairs well with the Value Proposition Canvas for connecting user jobs to your service design.',
    ],
    tags: ['ucd', 'research', 'user-needs', 'discovery', 'product', 'outcomes'],
  },
  {
    slug: 'stakeholder-mapping',
    name: 'Stakeholder Mapping',
    category: 'discovery',
    duration: '45–60 mins',
    groupSize: '3–8',
    description:
      'Identifies all stakeholders affected by or involved in a project and maps them by influence and interest. Essential for public sector projects where political and organisational dynamics significantly shape delivery.',
    whenToUse: [
      'At the start of a project to understand who\'s involved, affected, or has power over the outcome.',
      'When a project involves multiple organisations, government departments, or senior stakeholders.',
      'When the team is unsure who needs to be engaged, and how.',
    ],
    steps: [
      {
        title: 'Brainstorm stakeholders',
        duration: '10 mins',
        description:
          'Who is affected by or has influence over this project? Cast a wide net — users, delivery partners, policy teams, senior leaders, regulators, Parliament, media, other departments.',
      },
      {
        title: 'Place on a power/interest grid',
        duration: '15 mins',
        description:
          'Draw a 2×2 with Interest on the x-axis and Influence/Power on the y-axis. Place each stakeholder. Expect debate — that\'s the value.',
      },
      {
        title: 'Analyse quadrants',
        duration: '10 mins',
        description:
          'High influence, high interest → manage closely. High influence, low interest → keep satisfied. Low influence, high interest → keep informed. Low influence, low interest → monitor.',
      },
      {
        title: 'Identify engagement approaches',
        duration: '10 mins',
        description:
          'For each key stakeholder, agree how and how often to engage. What do they need from you? What do you need from them?',
      },
      {
        title: 'Identify knowledge gaps',
        duration: '5 mins',
        description:
          'Are there stakeholders you don\'t understand well enough yet? Plan to fix that before they become a problem.',
      },
    ],
    materials: ['Large paper or whiteboard', 'Sticky notes', 'Markers'],
    tips: [
      'Be honest about where people sit. The exercise loses value if everyone ends up in "manage closely" out of political caution.',
      'Revisit the map regularly — stakeholder influence shifts over the life of a project.',
      'In public sector, consider a separate "political landscape" map for elected officials and ministers.',
    ],
    tags: ['stakeholders', 'public-sector', 'project-start', 'engagement', 'politics', 'governance'],
  },
  {
    slug: 'affinity-mapping',
    name: 'Affinity Mapping',
    category: 'discovery',
    duration: '45–90 mins',
    groupSize: '3–10',
    description:
      'A method for organising large amounts of qualitative data — observations, quotes, ideas — into thematic clusters to surface patterns and insights. Essential for making sense of user research at scale.',
    whenToUse: [
      'After user research sessions, to synthesise what you\'ve heard and observed.',
      'When you have a lot of data and need to identify themes rather than individual data points.',
      'For organising requirements, feedback, or ideas when volume is high.',
    ],
    steps: [
      {
        title: 'Dump all data',
        duration: '15–20 mins',
        description:
          'Write each observation, quote, or data point on a separate sticky note. One idea per note — this is critical. Don\'t summarise, capture raw data.',
      },
      {
        title: 'Silent clustering',
        duration: '20 mins',
        description:
          'Without talking, everyone moves notes into groups they think belong together. Notes can move more than once. Silence prevents any one person from defining the clusters.',
      },
      {
        title: 'Name the clusters',
        duration: '10 mins',
        description:
          'Once the silent phase ends, the group names each cluster with a short label. These become your themes.',
      },
      {
        title: 'Discuss and refine',
        duration: '15 mins',
        description:
          'Talk through the themes. Are any too broad? Should any be split? Are two clusters really one? Rename and merge as needed.',
      },
      {
        title: 'Prioritise themes',
        duration: '10 mins',
        description:
          'Which themes are most significant? Which represent the biggest opportunities, risks, or user needs? Dot vote to surface group priorities.',
      },
    ],
    materials: ['Large quantity of sticky notes', 'Markers', 'Large wall or digital whiteboard'],
    tips: [
      'The silent phase is crucial — it prevents the loudest voice from defining the clusters.',
      'Trust the process even when it looks messy. The mess resolves.',
      'Use different coloured sticky notes for different types of data (e.g. observations vs quotes vs team thoughts).',
    ],
    tags: ['research', 'synthesis', 'ucd', 'qualitative', 'insight', 'discovery'],
  },
  {
    slug: 'assumption-mapping',
    name: 'Assumption Mapping',
    category: 'discovery',
    duration: '60–90 mins',
    groupSize: '3–10',
    description:
      'Identifies the assumptions your team is making about users, the market, policy, and feasibility — and maps them by certainty and importance. Guides where to focus research to reduce the riskiest unknowns.',
    whenToUse: [
      'Early in a project before significant investment — to surface what you\'re betting on without knowing.',
      'Before writing a research plan — to make sure you\'re researching the right things.',
      'When a team is moving fast and may be building on shaky foundations.',
    ],
    steps: [
      {
        title: 'Brainstorm assumptions',
        duration: '15 mins',
        description:
          'Ask: "What would need to be true for this to succeed?" Write assumptions on sticky notes — include user behaviour, technical feasibility, policy constraints, organisational capacity, and market/demand assumptions.',
      },
      {
        title: 'Place on the matrix',
        duration: '15 mins',
        description:
          'Draw a 2×2: x-axis = Known to Unknown, y-axis = Less Critical to More Critical. Place each assumption. Discuss placements.',
      },
      {
        title: 'Focus on the danger zone',
        duration: '10 mins',
        description:
          'The top-right quadrant (unknown + critical) is your danger zone. These assumptions must be tested before you commit significant resource.',
      },
      {
        title: 'Plan validation',
        duration: '20 mins',
        description:
          'For each risky assumption, agree how you\'d test it: user interview, prototype test, data analysis, policy spike. Match the method to the assumption.',
      },
      {
        title: 'Prioritise',
        duration: '10 mins',
        description:
          'Which assumptions should you test first, given time and resource? Sequence your research activities.',
      },
    ],
    materials: ['Sticky notes', 'Markers', '2×2 matrix on whiteboard'],
    tips: [
      'Teams often struggle to identify assumptions because they\'ve taken them for granted. Ask "What would make us wrong?" to surface hidden ones.',
      'Assumptions about policy feasibility are often overlooked in public sector projects. Push hard on these.',
      'Revisit the map as you learn — assumptions move from unknown to known as research progresses.',
    ],
    tags: ['risk', 'research-planning', 'ucd', 'discovery', 'hypothesis', 'lean'],
  },
  {
    slug: 'proto-persona',
    name: 'Proto-Persona Workshop',
    category: 'discovery',
    duration: '60–90 mins',
    groupSize: '3–10',
    description:
      'Creates initial, hypothesis-based user personas from existing team knowledge before research has been conducted. Surfaces assumptions about users, aligns the team on who they\'re designing for, and identifies research priorities.',
    whenToUse: [
      'Early in a project when user research hasn\'t yet happened but the team needs a shared picture of users.',
      'To identify who the team is assuming they\'re designing for — and challenge those assumptions.',
      'As a precursor to planning research — proto-personas show you what you don\'t know.',
    ],
    steps: [
      {
        title: 'Identify user groups',
        duration: '10 mins',
        description:
          'Brainstorm all the different types of people who might use or be affected by the service. Cluster into distinct groups.',
      },
      {
        title: 'Select 2–3 to focus on',
        duration: '5 mins',
        description:
          'Choose the most important or representative user groups for this phase of work.',
      },
      {
        title: 'Build each persona',
        duration: '20 mins per persona',
        description:
          'For each group, fill in: name, role/context, goals and motivations, frustrations and barriers, current behaviours, digital/service confidence, and a representative quote.',
      },
      {
        title: 'Share back',
        duration: '10 mins',
        description:
          'Each sub-group presents their persona to the room. Discuss similarities, differences, and surprises.',
      },
      {
        title: 'Surface and label assumptions',
        duration: '10 mins',
        description:
          'Explicitly mark what\'s assumed vs what\'s known. Plan what research is needed to validate each assumption.',
      },
    ],
    materials: ['Persona template (A3 paper or digital)', 'Sticky notes', 'Markers'],
    tips: [
      'Always label proto-personas clearly as "hypothesis — to be validated." If they end up in a presentation without that caveat, they will be mistaken for research.',
      'The value is in the conversation the creation process generates, not just the output.',
      'Proto-personas that survive research become real personas. Some will be wrong — that\'s the point.',
    ],
    tags: ['ucd', 'research', 'personas', 'discovery', 'assumptions', 'design-thinking'],
  },
  {
    slug: 'insight-synthesis',
    name: 'Insight Synthesis',
    category: 'discovery',
    duration: '60–90 mins',
    groupSize: '2–8',
    description:
      'Transforms raw research data into clear, actionable insights. Moves the team from what people said and did to what it means for your service design. A critical step that\'s often rushed or skipped.',
    whenToUse: [
      'Immediately after completing a round of user research — while the data is fresh.',
      'When the team has a lot of raw data but isn\'t sure what it means or what to do with it.',
      'Before a design or ideation session, to ensure the work is grounded in evidence.',
    ],
    steps: [
      {
        title: 'Data download',
        duration: '20 mins',
        description:
          'Each researcher shares key observations from their sessions — things that surprised them, recurring themes, and interesting moments. Don\'t interpret yet — just share raw data.',
      },
      {
        title: 'Write observation notes',
        duration: '15 mins',
        description:
          'Convert raw observations into specific, evidence-based statements. Use: "We observed that [person] did/said [specific thing]." Avoid "users want" — stay with what you actually saw and heard.',
      },
      {
        title: 'Group and theme',
        duration: '15 mins',
        description:
          'Use affinity mapping to cluster observations into themes. What keeps coming up? What patterns cut across different participants?',
      },
      {
        title: 'Write insight statements',
        duration: '20 mins',
        description:
          'Convert themes into insight statements: "[User group] [struggles with / needs / believes / does] [observation] because [underlying reason], which means [implication for the service]."',
      },
      {
        title: 'Prioritise insights',
        duration: '10 mins',
        description:
          'Which insights are most important to act on? Which are most surprising? Dot vote and discuss.',
      },
    ],
    materials: ['Research notes and recordings', 'Sticky notes', 'Markers', 'Whiteboard'],
    tips: [
      'An insight should be non-obvious. If it doesn\'t surprise you, it may be surface-level. Keep asking "so what?" until you reach something meaningful.',
      'The format "[User group] [does X] because [Y], which means [Z for us]" is powerful because it forces you to think about implications, not just observations.',
      'Insights are different from requirements. An insight explains behaviour; a requirement describes a solution.',
    ],
    tags: ['research', 'ucd', 'synthesis', 'analysis', 'insight', 'discovery'],
  },

  // ── SERVICE DESIGN ───────────────────────────────────────────────────────────
  {
    slug: 'service-blueprint',
    name: 'Service Blueprint',
    category: 'service-design',
    duration: '90–120 mins',
    groupSize: '4–12',
    description:
      'Maps the full service experience — what users see and experience (frontstage) alongside what happens behind the scenes (backstage) — to reveal operational complexity, handoffs, and opportunities for improvement.',
    whenToUse: [
      'When designing or improving a service that involves multiple touchpoints, organisations, or teams.',
      'When you need to understand handoffs and dependencies across the service system.',
      'When front-line staff and back-office teams have very different pictures of the same service.',
    ],
    steps: [
      {
        title: 'Define scope and user journey',
        duration: '15 mins',
        description:
          'Agree which user journey the blueprint covers. Map the high-level stages across the top of the board.',
      },
      {
        title: 'Map user actions',
        duration: '15 mins',
        description:
          'For each stage, detail what the user does and what they experience. Stay in the user\'s shoes.',
      },
      {
        title: 'Map frontstage interactions',
        duration: '15 mins',
        description:
          'What do staff do that the user can see? Phone calls, appointments, letters, portal interactions, face-to-face contact.',
      },
      {
        title: 'Map backstage processes',
        duration: '20 mins',
        description:
          'What happens that the user doesn\'t see? Case management, data processing, approvals, policy checks, system lookups, inter-team handoffs.',
      },
      {
        title: 'Map supporting systems',
        duration: '15 mins',
        description:
          'What technology systems and tools enable the service? Draw lines connecting processes to systems.',
      },
      {
        title: 'Identify pain points and gaps',
        duration: '15 mins',
        description:
          'Where do things break? Where are the longest waits, most errors, biggest risks, or most duplicated effort?',
      },
    ],
    materials: ['Very large paper or digital whiteboard (Miro, FigJam)', 'Sticky notes (multiple colours)', 'Markers'],
    tips: [
      'This is more complex than it looks — for anything other than a simple service, allow more time and consider splitting across multiple sessions.',
      'Invite people from across the service — front-line staff, back-office, IT, and policy — to build a complete picture.',
      'The "line of visibility" between frontstage and backstage is often where the most interesting problems hide.',
    ],
    tags: ['service-design', 'ucd', 'systems', 'operations', 'public-sector', 'complexity'],
  },
  {
    slug: 'value-proposition-canvas',
    name: 'Value Proposition Canvas',
    category: 'service-design',
    duration: '60–90 mins',
    groupSize: '3–10',
    description:
      'Maps the fit between what a service offers and what users actually need. Left side: user jobs, pains, and gains. Right side: your products/services, pain relievers, and gain creators. Reveals where you\'re creating real value — and where you\'re not.',
    whenToUse: [
      'When designing or evaluating a service proposition.',
      'When checking assumptions about value before investing in delivery.',
      'When stakeholders disagree about what the service is actually for.',
    ],
    steps: [
      {
        title: 'Introduce the canvas',
        duration: '10 mins',
        description:
          'Explain both sides. Show a completed example. Stress that you always complete the customer profile (left) before the value map (right).',
      },
      {
        title: 'Complete the customer profile',
        duration: '20 mins',
        description:
          'Jobs (what users are trying to do or achieve), Gains (desired outcomes and benefits), Pains (frustrations, obstacles, and risks).',
      },
      {
        title: 'Complete the value map',
        duration: '20 mins',
        description:
          'Products & Services (what you offer), Gain Creators (how you generate the gains users want), Pain Relievers (how you address user pains).',
      },
      {
        title: 'Check for fit',
        duration: '15 mins',
        description:
          'Draw lines between matching items on each side. Where are the connections? Where are the disconnects? Where are you creating value nobody actually wants?',
      },
      {
        title: 'Identify gaps and priorities',
        duration: '10 mins',
        description:
          'What should be added, removed, or changed to improve fit between the user\'s needs and your service\'s offer?',
      },
    ],
    materials: ['Value Proposition Canvas template (A3 or digital)', 'Sticky notes', 'Markers'],
    tips: [
      'Always complete the customer profile before the value map — never start from your solution.',
      'Use real research data to inform the customer profile where possible. Assumptions here are dangerous.',
      'In public sector, "gain creators" often relate to reducing anxiety, increasing confidence, or reducing effort — not just functional outcomes.',
    ],
    tags: ['product', 'service-design', 'ucd', 'value', 'proposition', 'discovery'],
  },

  // ── REQUIREMENTS & ANALYSIS ──────────────────────────────────────────────────
  {
    slug: 'as-is-to-be-process-mapping',
    name: 'As-Is / To-Be Process Mapping',
    category: 'requirements',
    duration: '90–120 mins',
    groupSize: '4–12',
    description:
      'Documents the current state of a process (As-Is) and the desired future state (To-Be) to identify gaps, inefficiencies, and requirements for change. A core business analysis technique.',
    whenToUse: [
      'At the start of a transformation project when requirements aren\'t fully understood.',
      'When different teams have conflicting views of how a process currently works.',
      'When digital or policy changes will significantly alter existing ways of working.',
    ],
    steps: [
      {
        title: 'Map the As-Is',
        duration: '40 mins',
        description:
          'Walk through the current process step by step with the people who do it. Use swim lanes to separate roles or organisations. Include decision points, handoffs, systems used, volumes, and known pain points. Validate constantly — "is this right?"',
      },
      {
        title: 'Identify problems',
        duration: '15 mins',
        description:
          'Mark pain points, bottlenecks, duplications, error-prone steps, and compliance risks on the As-Is map. Quantify where possible.',
      },
      {
        title: 'Agree To-Be principles',
        duration: '10 mins',
        description:
          'Before designing the future state, agree guiding principles: "users enter information once," "decisions are automated where legally possible," "no unnecessary handoffs."',
      },
      {
        title: 'Design the To-Be',
        duration: '30 mins',
        description:
          'With the principles in mind, design the ideal future process. Keep it realistic but aspirational. Challenge assumptions about what\'s "always been done this way."',
      },
      {
        title: 'Identify the gap and requirements',
        duration: '15 mins',
        description:
          'What needs to change to get from As-Is to To-Be? These gaps become your requirements — people, process, technology, and policy changes needed.',
      },
    ],
    materials: ['Large paper or digital whiteboard', 'Swim-lane template', 'Sticky notes', 'Markers'],
    tips: [
      'Don\'t design the To-Be until the As-Is is properly validated. The desire to jump ahead is strong but premature.',
      'Involve the people who actually do the work — managers often have a very different (and often inaccurate) view of how processes run.',
      'Use different coloured sticky notes for people, systems, decisions, and pain points.',
    ],
    tags: ['process', 'requirements', 'transformation', 'analysis', 'ba', 'public-sector'],
  },
  {
    slug: 'user-story-mapping',
    name: 'User Story Mapping',
    category: 'requirements',
    duration: '90–120 mins',
    groupSize: '4–12',
    description:
      'Organises user stories into a narrative flow — the user journey along the top, supporting tasks below — creating a shared understanding of scope, helping teams prioritise delivery, and preventing "flat backlog" problems.',
    whenToUse: [
      'When translating user needs and research into a delivery backlog.',
      'When planning a delivery roadmap and deciding what goes into each release.',
      'When aligning development, design, and business teams on scope and sequence.',
    ],
    steps: [
      {
        title: 'Establish the backbone',
        duration: '20 mins',
        description:
          'Map the user journey across the top of the board in chronological order — these are the high-level activities (e.g. Register → Search → Apply → Track → Receive). This is the "backbone."',
      },
      {
        title: 'Break into tasks',
        duration: '20 mins',
        description:
          'Below each activity, add the specific tasks the user performs to complete that activity.',
      },
      {
        title: 'Add user stories',
        duration: '20 mins',
        description:
          'Below tasks, add individual user stories that enable each task. Use "As a [user], I want to [action] so that [outcome]."',
      },
      {
        title: 'Prioritise into releases',
        duration: '20 mins',
        description:
          'Draw horizontal swim lanes across the map. Agree which stories go into Release 1 (MVP), Release 2, etc. The top slice across all activities forms a walking skeleton.',
      },
      {
        title: 'Identify gaps',
        duration: '10 mins',
        description:
          'What\'s missing? What doesn\'t fit? What have you assumed but not articulated? Mark gaps and questions.',
      },
    ],
    materials: ['Large wall space', 'Sticky notes in 3 colours (activities/tasks/stories)', 'Markers', 'Horizontal swim lane markers'],
    tips: [
      'The map should tell a coherent story from left to right. If it doesn\'t, the backbone isn\'t right — rebuild it before adding detail.',
      'The value is in building it together, not in the output. The conversations surface assumptions and gaps.',
      'Digital tools like Miro or StoriesOnBoard work well for distributed teams.',
    ],
    tags: ['agile', 'backlog', 'requirements', 'product', 'planning', 'ba', 'delivery'],
  },
  {
    slug: 'impact-mapping',
    name: 'Impact Mapping',
    category: 'requirements',
    duration: '60–90 mins',
    groupSize: '4–10',
    description:
      'A strategic technique that connects business goals to user behaviours to features. Creates a visual map in four levels: Why → Who → How → What. Prevents building things that don\'t serve strategic goals.',
    whenToUse: [
      'At the start of a project or major feature set, to ensure everything connects back to a measurable goal.',
      'When a team is building without a clear line of sight to business outcomes.',
      'For business cases where you need to articulate the link between investment and benefit.',
    ],
    steps: [
      {
        title: 'Define the goal (Why)',
        duration: '10 mins',
        description:
          'What business outcome are you trying to achieve? It must be measurable. Not "launch a new portal" but "reduce failure demand by 20% within 12 months."',
      },
      {
        title: 'Identify actors (Who)',
        duration: '10 mins',
        description:
          'Who are the people whose behaviour needs to change to achieve the goal? Include primary users, secondary users, staff, and potentially saboteurs.',
      },
      {
        title: 'Define impacts (How)',
        duration: '20 mins',
        description:
          'For each actor, what behaviour change would move you toward the goal? These are the Hows — observable changes in what people do.',
      },
      {
        title: 'List deliverables (What)',
        duration: '20 mins',
        description:
          'For each impact, what could you build, change, or do to enable that behaviour change? These become your requirements and features.',
      },
      {
        title: 'Prioritise paths',
        duration: '15 mins',
        description:
          'Which paths through the map are most likely to achieve the goal with the least investment? Focus resources on these paths.',
      },
    ],
    materials: ['Large paper or digital whiteboard', 'Sticky notes', 'Markers'],
    tips: [
      'The "Why" must be a business goal with a measurable outcome. If it isn\'t, the whole map is built on sand.',
      'If an item in "What" doesn\'t connect to a path that reaches the goal, challenge whether it should be built at all.',
      'Impact maps double as lightweight business cases — they make the logic of investment explicit.',
    ],
    tags: ['requirements', 'strategy', 'product', 'outcomes', 'ba', 'business-case', 'public-sector'],
  },
  {
    slug: 'requirements-prioritisation',
    name: 'Requirements Prioritisation',
    category: 'requirements',
    duration: '60–90 mins',
    groupSize: '4–15',
    description:
      'A structured workshop to get stakeholders to agree on which requirements are most important, balancing user needs, technical feasibility, strategic value, and delivery constraints.',
    whenToUse: [
      'When competing stakeholder views are blocking agreement on priority.',
      'When the backlog is overwhelming and the team needs to choose a focus.',
      'When scope must be defined for a specific delivery phase or business case.',
    ],
    steps: [
      {
        title: 'Present all requirements',
        duration: '10 mins',
        description:
          'Ensure all requirements are visible and understood by everyone in the room. Allow time for questions of clarification.',
      },
      {
        title: 'Apply an initial filter',
        duration: '10 mins',
        description:
          'Remove any requirements everyone agrees are out of scope, duplicates, or too vague to assess.',
      },
      {
        title: 'Score against agreed criteria',
        duration: '20 mins',
        description:
          'Set 3–4 criteria (e.g. user value, strategic alignment, technical feasibility, urgency). Each stakeholder independently scores each requirement against each criterion.',
      },
      {
        title: 'Aggregate and present scores',
        duration: '10 mins',
        description:
          'Average scores across participants. Present results visually. Highlight areas of agreement and disagreement.',
      },
      {
        title: 'Discuss and adjust',
        duration: '20 mins',
        description:
          'Surface disagreements. Understand why people scored differently — different assumptions often lurk here. Reach consensus on the final priority order.',
      },
      {
        title: 'Document and agree',
        duration: '5 mins',
        description:
          'Record the agreed priority order and rationale. Get sign-off.',
      },
    ],
    materials: ['Scoring matrix (spreadsheet or physical template)', 'Sticky notes'],
    tips: [
      'Make scoring criteria explicit and agreed before scoring starts — otherwise everyone applies different definitions of "important."',
      'Disagreement in scores is the most valuable output. It surfaces hidden assumptions and competing priorities.',
      'Consider using MoSCoW alongside scoring for a complementary view.',
    ],
    tags: ['requirements', 'prioritisation', 'stakeholders', 'ba', 'scope', 'governance'],
  },

  // ── PLANNING & ALIGNMENT ─────────────────────────────────────────────────────
  {
    slug: 'premortem',
    name: 'Premortem',
    category: 'planning',
    duration: '45–60 mins',
    groupSize: '4–12',
    description:
      'Imagine the project has already failed — catastrophically. Work backwards to identify what went wrong. Surfaces risks and enables mitigation before they happen. The fictional framing unlocks honesty that direct risk identification doesn\'t.',
    whenToUse: [
      'Before committing to a significant piece of work — at the point of no return.',
      'At the start of a project after the plan has been drafted but before execution.',
      'When a plan feels overly optimistic and you want to stress-test it.',
    ],
    steps: [
      {
        title: 'Set the scene',
        duration: '5 mins',
        description:
          '"It\'s 12 months from now and this project has failed. Not a little — catastrophically. The project was cancelled, the outcome was never achieved, and the team is disbanding. What happened?"',
      },
      {
        title: 'Individual writing',
        duration: '10 mins',
        description:
          'Each person silently writes down every reason the project could have failed. Be specific and honest. This is not the time for optimism.',
      },
      {
        title: 'Share and capture',
        duration: '15 mins',
        description:
          'Go around the group. Each person shares one reason at a time until all reasons are captured. No discussion or debate yet.',
      },
      {
        title: 'Cluster themes',
        duration: '10 mins',
        description:
          'Group related failure reasons into themes. Common themes: stakeholder issues, resource constraints, unclear requirements, technical risk, policy changes, team capability.',
      },
      {
        title: 'Prioritise and mitigate',
        duration: '15 mins',
        description:
          'Dot vote on the most likely and most dangerous failure reasons. For each top-voted item, agree a mitigation action and assign an owner.',
      },
    ],
    materials: ['Sticky notes', 'Markers', 'Whiteboard'],
    tips: [
      'The fictional framing ("it already failed") is the key technique — it removes the social pressure to be a team player and unlocks honest concern.',
      'Concerns people have been holding back often surface here. Treat them seriously.',
      'Premortem outputs make excellent risk registers — document and track them.',
    ],
    tags: ['risk', 'planning', 'project-start', 'governance', 'public-sector', 'leadership'],
  },
  {
    slug: 'team-charter',
    name: 'Team Charter',
    category: 'planning',
    duration: '60–90 mins',
    groupSize: '4–15',
    description:
      'Establishes shared working agreements for a team — how you\'ll work together, make decisions, handle conflict, and define success. Creates mutual accountability and surfaces differing expectations before they become problems.',
    whenToUse: [
      'When forming a new team, especially cross-functional or multi-organisation teams.',
      'At the start of a significant project with a new or reformed group.',
      'When an existing team is struggling with ways of working or unclear accountability.',
    ],
    steps: [
      {
        title: 'Purpose',
        duration: '10 mins',
        description:
          'Why does this team exist? What are you collectively here to achieve? Write a clear team mission that everyone can sign up to.',
      },
      {
        title: 'Working norms',
        duration: '20 mins',
        description:
          'How will you work together day to day? Consider: meeting cadence, preferred communication channels, decision-making approach, working hours expectations, availability for urgent matters.',
      },
      {
        title: 'Roles and responsibilities',
        duration: '15 mins',
        description:
          'Who is responsible for what? Surface any overlaps or gaps. A RACI or simple responsibility table can help.',
      },
      {
        title: 'How we handle disagreement',
        duration: '10 mins',
        description:
          'How will the team escalate issues? What\'s the conflict resolution approach? What signals that something needs to be addressed openly?',
      },
      {
        title: 'How we measure success',
        duration: '10 mins',
        description:
          'What does "good" look like for this team? How will you know if you\'re on track?',
      },
      {
        title: 'Commit',
        duration: '5 mins',
        description:
          'Get visible agreement from everyone. Document, share, and revisit quarterly.',
      },
    ],
    materials: ['Template (paper or digital)', 'Sticky notes'],
    tips: [
      'Revisit the charter quarterly — teams and contexts change. A charter from month one may not fit month six.',
      'The most valuable sections are often "how we handle disagreement" and "working norms." Don\'t rush them.',
      'For cross-organisational teams, explicitly address organisational differences in culture and practice.',
    ],
    tags: ['team', 'norms', 'agreements', 'project-start', 'ways-of-working', 'leadership'],
  },
  {
    slug: 'daci-framework',
    name: 'DACI Framework',
    category: 'planning',
    duration: '45–60 mins',
    groupSize: '4–10',
    description:
      'Clarifies decision-making roles across a team or project. DACI stands for Driver, Approver, Contributor, Informed. Prevents unclear accountability and decision paralysis, particularly in multi-team or cross-organisation settings.',
    whenToUse: [
      'When teams are confused about who makes decisions, or decisions are getting stuck.',
      'At the start of a project to clarify governance before ambiguity causes delays.',
      'In cross-functional or multi-organisation projects where authority isn\'t clear.',
    ],
    steps: [
      {
        title: 'Identify decisions',
        duration: '10 mins',
        description:
          'List all the significant decisions this project will need to make. Each gets its own row in the table.',
      },
      {
        title: 'Explain the DACI roles',
        duration: '5 mins',
        description:
          'Driver = owns the process of making the decision and moves it forward. Approver = makes the final call (one person). Contributor = provides input and expertise. Informed = notified of the outcome.',
      },
      {
        title: 'Assign roles',
        duration: '20 mins',
        description:
          'For each decision, assign DACI roles. There should be exactly one Driver and one Approver. Discuss disagreements openly — they reveal important governance questions.',
      },
      {
        title: 'Sense-check',
        duration: '10 mins',
        description:
          'Review the full table. Are the right people in each role? Any surprises? Any single person with too many approvals creating a bottleneck?',
      },
      {
        title: 'Document and share',
        duration: '5 mins',
        description:
          'Publish the DACI table where the whole team can access it. Refer back when decision conflicts arise.',
      },
    ],
    materials: ['DACI table (spreadsheet or paper)', 'List of anticipated decisions'],
    tips: [
      'There must be exactly one Approver per decision. Multiple Approvers means no one is actually accountable.',
      'If you can\'t agree who the Approver is, that\'s a governance problem that must be resolved at a higher level before the project proceeds.',
      'Review and update the DACI table at key project milestones — roles may change as the project evolves.',
    ],
    tags: ['governance', 'decision-making', 'accountability', 'roles', 'project-management', 'public-sector'],
  },
  {
    slug: 'okr-setting',
    name: 'OKR Setting',
    category: 'planning',
    duration: '60–90 mins',
    groupSize: '4–12',
    description:
      'Establishes Objectives (what you want to achieve, qualitatively) and Key Results (how you\'ll measure success, quantitatively). Aligns teams on outcomes over outputs and creates a shared definition of success.',
    whenToUse: [
      'At the start of a quarter, programme, or project to set direction.',
      'When a team lacks clarity on priorities or is measuring activity rather than outcomes.',
      'When there\'s genuine clarity on organisational priorities to cascade from.',
    ],
    steps: [
      {
        title: 'Review organisational priorities',
        duration: '10 mins',
        description:
          'What are the wider organisational objectives? Your team\'s OKRs should visibly contribute to these.',
      },
      {
        title: 'Brainstorm objectives',
        duration: '15 mins',
        description:
          'What are the 3–5 most important things the team wants to achieve this quarter or phase? Write as inspiring, qualitative goals. Objectives should motivate.',
      },
      {
        title: 'Define key results',
        duration: '25 mins',
        description:
          'For each objective, write 2–4 key results. Each must be measurable, specific, achievable, and directly tied to the objective. KRs are outcomes, not tasks.',
      },
      {
        title: 'Sense-check outcomes vs activities',
        duration: '10 mins',
        description:
          '"Run 3 workshops" is an activity, not an outcome. "85% of staff feel confident in the new process" is an outcome. Convert any activities masquerading as KRs.',
      },
      {
        title: 'Commit',
        duration: '10 mins',
        description:
          'Present OKRs to the wider team. Get commitment. Agree how progress will be tracked and reviewed.',
      },
    ],
    materials: ['OKR template (digital or physical)', 'Reference to organisational priorities'],
    tips: [
      '70% attainment of a well-set OKR is considered success. If you\'re hitting 100% every quarter, your KRs aren\'t ambitious enough.',
      'OKRs work best when the team has genuine ownership over the outcomes — avoid cascading tasks dressed as OKRs.',
      'In public sector, quantitative KRs can be hard to define. Proxy measures (survey confidence scores, call volumes, processing times) often work well.',
    ],
    tags: ['planning', 'goals', 'strategy', 'alignment', 'outcomes', 'leadership'],
  },
  {
    slug: 'benefits-mapping',
    name: 'Benefits Mapping',
    category: 'planning',
    duration: '60–90 mins',
    groupSize: '4–12',
    description:
      'Creates a visual map connecting a project\'s outputs to intermediate outcomes to ultimate benefits. Makes the logic of investment explicit and ensures benefits can be tracked and measured. Common in public sector business cases.',
    whenToUse: [
      'When building or reviewing a business case for investment.',
      'At the start of a programme to agree what success looks like and how it will be measured.',
      'When stakeholders need to see how a project will deliver measurable value.',
    ],
    steps: [
      {
        title: 'Define the investment or change',
        duration: '10 mins',
        description:
          'What is being built, changed, or delivered? Write the outputs clearly.',
      },
      {
        title: 'Identify enabling changes',
        duration: '15 mins',
        description:
          'What changes in behaviour, process, or systems must happen for the investment to deliver value? These are not benefits yet — they\'re enablers.',
      },
      {
        title: 'Map business changes',
        duration: '15 mins',
        description:
          'What organisational or operational changes result from those enabling changes?',
      },
      {
        title: 'Identify benefits',
        duration: '15 mins',
        description:
          'What measurable improvements result? Categorise as: financial (cashable or non-cashable), efficiency, quality of service, or strategic/policy benefits.',
      },
      {
        title: 'Connect the map',
        duration: '15 mins',
        description:
          'Draw lines: Investment → Enabling Changes → Business Changes → Benefits. Identify dependencies and critical assumptions.',
      },
      {
        title: 'Agree measures and owners',
        duration: '10 mins',
        description:
          'For each benefit, agree how it will be measured and who owns it. Without measures and owners, benefits don\'t get realised.',
      },
    ],
    materials: ['Benefits map template (large paper or digital)', 'Sticky notes', 'Markers'],
    tips: [
      'Benefits must be measurable. "Better user experience" is not a benefit. "20% reduction in support calls" is.',
      'In public sector, benefits often need to be expressed in terms aligned to HM Treasury Green Book categories.',
      'Involve the people who will be responsible for realising benefits — not just those delivering the project.',
    ],
    tags: ['benefits', 'business-case', 'roi', 'public-sector', 'governance', 'planning', 'ba'],
  },

  // ── PUBLIC SECTOR ─────────────────────────────────────────────────────────────
  {
    slug: 'equality-impact-assessment',
    name: 'Equality Impact Assessment Workshop',
    category: 'public-sector',
    duration: '60–90 mins',
    groupSize: '4–10',
    description:
      'A structured session to assess how a policy, service, or change may affect people with different protected characteristics. Identifies risks and opportunities to advance equality under the Public Sector Equality Duty.',
    whenToUse: [
      'Before launching or significantly changing a service or policy — the earlier the better.',
      'When reviewing existing services for equality compliance.',
      'Wherever the Public Sector Equality Duty (PSED) applies, and as good practice beyond compliance.',
    ],
    steps: [
      {
        title: 'Scope the assessment',
        duration: '10 mins',
        description:
          'What policy, service, or change is being assessed? Who is affected by it? Define the scope clearly.',
      },
      {
        title: 'Review protected characteristics',
        duration: '10 mins',
        description:
          'Walk through the 9 protected characteristics under the Equality Act 2010: age, disability, gender reassignment, marriage & civil partnership, pregnancy & maternity, race, religion or belief, sex, and sexual orientation.',
      },
      {
        title: 'Assess impact',
        duration: '30 mins',
        description:
          'For each characteristic, discuss: Is this group affected? How? Positive, negative, or neutral? What evidence or data do we have? Where are the gaps in our evidence?',
      },
      {
        title: 'Identify mitigations and enhancements',
        duration: '15 mins',
        description:
          'For any negative or disproportionate impacts, agree mitigations. For positive impacts or opportunities to advance equality, agree how to strengthen them.',
      },
      {
        title: 'Document and assign',
        duration: '10 mins',
        description:
          'Agree what goes in the formal EQIA document. Assign owners for required mitigations. Set a review date.',
      },
    ],
    materials: ['EQIA template', 'List of 9 protected characteristics', 'Any relevant data or evidence'],
    tips: [
      'Involve people with lived experience of the relevant characteristics wherever possible. A panel without that experience will miss important impacts.',
      'Evidence gaps are important findings — note them explicitly and plan to gather the data you need.',
      'An EQIA is a living document — review it when the service or policy changes significantly.',
    ],
    tags: ['equality', 'diversity', 'public-sector', 'compliance', 'governance', 'policy', 'legal'],
  },
  {
    slug: 'whole-system-mapping',
    name: 'Whole System Mapping',
    category: 'public-sector',
    duration: '90–120 mins',
    groupSize: '6–20',
    description:
      'Maps the full ecosystem of organisations, services, policies, and people involved in a complex public sector challenge. Reveals dependencies, duplications, and gaps that no single team can see alone.',
    whenToUse: [
      'When multiple organisations are involved in delivering a service or addressing a problem.',
      'For cross-government programmes or complex social policy challenges.',
      'When a team\'s local view may be missing important systemic context.',
    ],
    steps: [
      {
        title: 'Define the focal question',
        duration: '10 mins',
        description:
          'What challenge or system are you mapping? Agree a clear, specific focal question to anchor the session.',
      },
      {
        title: 'Map the actors',
        duration: '20 mins',
        description:
          'Who are the organisations, teams, and user groups involved in or affected by this challenge? Represent each as a node on the map.',
      },
      {
        title: 'Map the relationships',
        duration: '20 mins',
        description:
          'Draw connections between actors. Label the nature of each relationship: funds, refers, regulates, delivers to, receives from, advises, depends on.',
      },
      {
        title: 'Identify flows',
        duration: '15 mins',
        description:
          'What flows between actors? Data, money, referrals, decisions, physical goods, support, information.',
      },
      {
        title: 'Identify friction and gaps',
        duration: '15 mins',
        description:
          'Where are the duplications, gaps, power imbalances, broken flows, or missing connections? Mark them clearly.',
      },
      {
        title: 'Agree intervention points',
        duration: '15 mins',
        description:
          'Given the map, where could a change or intervention have the most leverage on the overall system? What\'s within your team\'s sphere of influence?',
      },
    ],
    materials: ['Very large paper or digital whiteboard', 'Sticky notes', 'Markers', 'String or drawn lines for connections'],
    tips: [
      'Involve people from across the system — a map built by one organisation\'s team will be incomplete and biased.',
      'The most surprising and valuable findings are often the gaps and missing connections.',
      'Keep the focal question visible throughout — it\'s easy for system maps to sprawl beyond usefulness.',
    ],
    tags: ['systems-thinking', 'public-sector', 'complexity', 'cross-government', 'service-design', 'policy'],
  },
]

export function getWorkshop(slug: string): Workshop | undefined {
  return workshops.find((w) => w.slug === slug)
}

export function getWorkshopsByCategory(category: Category): Workshop[] {
  return workshops.filter((w) => w.category === category)
}

export function searchWorkshops(query: string): Workshop[] {
  const q = query.toLowerCase()
  return workshops.filter(
    (w) =>
      w.name.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q) ||
      w.tags.some((t) => t.includes(q)) ||
      w.whenToUse.some((u) => u.toLowerCase().includes(q))
  )
}

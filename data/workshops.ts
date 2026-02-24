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
          'Select a simple, open question before the session starts — do not improvise it on the day. Keep it low-stakes and non-threatening. Good prompts: "One word for how you\'re arriving today?", "What\'s something on your mind that might distract you during this session?", "On a scale of 1–10, how are you showing up today — and what would make it a 10?", "What\'s one thing you\'re hoping to get out of today?", "Name an animal that represents your energy right now." Avoid prompts that feel personal, professional, or competitive.',
      },
      {
        title: 'Model the answer',
        duration: '1 min',
        description:
          'Go first yourself. Give a genuine, appropriately honest answer — not a performance. If the prompt is "one word for how you\'re arriving," say your word and a brief reason. This sets the norm: real answers are welcome, but no one needs to overshare.',
      },
      {
        title: 'Go around the group',
        duration: '5–10 mins',
        description:
          'Each person answers in turn. As facilitator, say nothing beyond a brief nod or "thank you" between answers. Do not respond to content, ask follow-up questions, or connect their answer to others. Everyone gets equal airtime. If someone passes, simply say "No problem" and move to the next person. If someone gives a very long answer, gently say "Thank you — we\'ll make sure we have time for everyone" and move on.',
      },
      {
        title: 'Acknowledge and move on',
        duration: '1 min',
        description:
          'Thank the group briefly and transition into the agenda: "Thanks everyone — it\'s helpful to know where people are at. Let\'s move into the session." Don\'t over-analyse, interpret, or comment on what was shared. The check-in creates connection through listening, not discussion.',
      },
    ],
    materials: ['No materials needed — works in person or remotely'],
    tips: [
      'Keep the prompt simple — the more complex or personal the question, the more anxious people become about their answer. Simpler is always better.',
      'Silence between answers is normal. Don\'t fill it. Hold the space and let the next person take their time.',
      'If someone passes, accept it without comment or pressure. Never ask why. Move on.',
      'For large groups (20+), consider splitting into breakout rooms for the check-in, then reconvening — otherwise it takes too long.',
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
          'Explain that each person will share three statements about themselves — two are true, one is a lie. The group\'s job is to identify the lie. Keep it light: "There are no wrong answers, and the best statements fool even the people who know you well."',
      },
      {
        title: 'Preparation time',
        duration: '3 mins',
        description:
          'Give everyone quiet time to think up their three statements. Encourage creativity — the best statements make the truth sound implausible. Tips to share with participants: "Include at least one truth that surprises people", "Make your lie something that could plausibly be true", "Ordering them unpredictably helps — don\'t always put the lie last." If someone is stuck, suggest they think about unusual hobbies, places they\'ve lived, hidden talents, or unexpected life experiences.',
      },
      {
        title: 'Share and guess',
        duration: '10–15 mins',
        description:
          'Each person reads all three statements aloud. Give the group 30–60 seconds to discuss and vote (show of hands or a quick poll). Then the person reveals the lie and explains the truth behind their other statements. Keep the energy up — this is meant to be fun. Move between people at a good pace; don\'t let discussion drag on too long.',
      },
      {
        title: 'Debrief',
        duration: '2 mins',
        description:
          'Ask one or two quick reflection questions: "What surprised you most about your colleagues?" or "Did anyone\'s answers change how you think about them?" Bridge into the main session: "Great — now we know each other a bit better, let\'s get into the work."',
      },
    ],
    materials: ['Optional: sticky notes or paper to write statements before sharing'],
    tips: [
      'Encourage people to make the lie plausible — obvious lies make it too easy and the energy drops.',
      'The best games have truths that sound more surprising than the lie. Model this with your own example.',
      'Go first yourself with a good set of statements. This shows participants what "good" looks like and sets the tone.',
      'If someone is very private or uncomfortable, allow them to prepare a work-appropriate set of statements rather than personal ones.',
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
          'Pose a clear, pre-prepared question and give everyone 2 minutes to think and write notes alone in silence. Good example questions: "What\'s the most important thing we need to change about how we work?", "What\'s one assumption we\'re making that we haven\'t tested?", "What does success look like at the end of this project?" Silence is essential here — it means quieter voices form their views independently rather than being anchored by the first person to speak.',
      },
      {
        title: 'Pairs',
        duration: '4 mins',
        description:
          'Participants discuss in pairs, building on each other\'s thinking. Use a timer and be firm — 4 minutes is tight by design. Brief them: "Share your answers, find what resonates between you, and agree the one or two most important ideas to bring forward." In remote sessions, use breakout rooms of exactly two.',
      },
      {
        title: 'Groups of four',
        duration: '4 mins',
        description:
          'Two pairs combine. Each pair shares their key ideas. The group of four agrees on the one or two most important insights from their combined thinking. Keep the timer. The constraint pushes them to prioritise rather than list everything.',
      },
      {
        title: 'All together',
        duration: '5 mins',
        description:
          'Each group of four shares their single most important insight with the whole room. As facilitator, capture each contribution on the whiteboard or shared document. Don\'t let any group speak for more than 60 seconds. After all groups have shared, look across the contributions: "I\'m noticing a theme around X — does anyone else see that?" This synthesis is your role, not the participants\'.',
      },
    ],
    materials: ['Sticky notes', 'Pens', 'Whiteboard or flip chart', 'Timer (visible to participants)'],
    tips: [
      'The question you pose must be specific enough to be meaningful but open enough to generate variety. Avoid yes/no questions. Test your question before the session — if you can\'t imagine a diverse range of answers, it\'s too closed.',
      'Timekeeping is crucial — use a timer and stick to it, even if conversations are flowing. The constraint generates focus and prevents one group dominating.',
      'This structure works equally well in person and online with breakout rooms. In remote sessions, pre-assign pairs and groups before the session starts so there\'s no delay.',
      'The facilitator\'s job in the final round is to synthesise, not just collect. Look for patterns and name them — that\'s where the value is.',
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
          'Write a clear, specific problem statement on the board. Vague problems produce vague root causes. A good problem statement names a specific, observable effect: not "our service is slow" but "users wait more than 10 days for a decision on their application." Check agreement before proceeding — if people disagree on the problem statement, resolve that first, as everything else flows from it.',
      },
      {
        title: 'Ask "why?" — first time',
        duration: '5 mins',
        description:
          'Ask "Why does this problem happen?" and capture all answers on the board. Example: Problem = "Users wait more than 10 days for a decision." Why? "Because cases are queued in the inbox for days before being allocated." If there are multiple competing answers, list them all and either pick the most likely to explore first, or work each as a separate branch. Draw a branching tree on the board to make the structure visible.',
      },
      {
        title: 'Continue asking why',
        duration: '15–25 mins',
        description:
          'For each answer, ask why again. Keep going — 5 times is the guideline, but sometimes it takes more, sometimes fewer. You know you\'ve reached a root cause when: the answer is a process failure, a missing policy, a structural constraint, or a systemic gap — not a person\'s behaviour. Example chain: "Cases queue in the inbox" → "Because there\'s no triage process" → "Because the team lead assumed caseworkers self-allocated" → "Because allocation responsibilities were never formally agreed." That last answer is a root cause. Record the full chain visibly on the board.',
      },
      {
        title: 'Identify the root cause',
        duration: '5 mins',
        description:
          'Look at the bottom of each chain. Agree which causes sit at the root. Often there are two or three strands — that\'s normal. Resist the urge to merge them into one. Named root causes should sound like structural or systemic issues, not like individual failures or bad luck.',
      },
      {
        title: 'Define actions',
        duration: '10 mins',
        description:
          'For each root cause, agree a concrete, specific action to address it. Assign a named owner and a deadline. A good action sounds like: "Sarah to draft an allocation process and share with the team by [date]" — not "improve communication." Actions without owners and dates do not happen. Photograph the board before leaving.',
      },
    ],
    materials: ['Whiteboard or large paper', 'Sticky notes', 'Markers'],
    tips: [
      'The answer to each "why" must be a cause, not a restatement of the symptom. If answers feel circular ("it\'s slow because it takes too long"), the problem statement may be too vague. Rewrite it and start again.',
      'Resist the urge to stop at the first plausible cause — the most obvious cause is rarely the root cause. Push through at least 4 iterations.',
      'This is not a blame exercise. If an answer sounds like "because Sarah didn\'t do X," reframe it as a systemic question: "Why wasn\'t there a process in place to ensure X happened?"',
      'If the group gets stuck on a "why," ask "What would need to be true for this not to happen?" — the inverse sometimes unlocks the thinking.',
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
          'Explain the HMW format and why it works. The three words matter: "How" assumes it\'s solvable; "Might" keeps it exploratory (not "should" or "will"); "We" makes it collective. Show a concrete example — ideally from your own project context. Demonstrate the spectrum: too narrow ("HMW add a progress tracker to the portal?") constrains solutions; too broad ("HMW improve the benefit system?") is meaningless; just right ("HMW help people understand where their application is without needing to call us?") opens up solution space. Point out that HMW questions should not contain solutions — "HMW build a dashboard?" is already an answer disguised as a question.',
      },
      {
        title: 'Individual writing',
        duration: '10 mins',
        description:
          'Each person writes one HMW question per sticky note. Aim for 5–10 questions each — quantity over quality at this stage. Set a timer and encourage people not to self-edit. If someone finishes early, push them: "Write three more — the first five are usually the obvious ones." Share your own questions as an example while they work, to keep energy up.',
      },
      {
        title: 'Share and cluster',
        duration: '10 mins',
        description:
          'Each person reads out each sticky note briefly (15–20 seconds maximum per note) as they place it on the wall. No discussion or debate at this stage — just listening. After all notes are up, silently and collaboratively move similar questions together and agree a short name for each cluster. Common clusters might be: "access and eligibility," "keeping people informed," "reducing effort," "building trust."',
      },
      {
        title: 'Vote on the best',
        duration: '10 mins',
        description:
          'Each person gets 3 dot votes. They can distribute dots any way they choose — all on one question or spread across several. Vote for the questions that feel most generative, important, or exciting to explore. Silent voting first, then open discussion about the top-voted questions before finalising which to take forward.',
      },
      {
        title: 'Take forward',
        duration: '5 mins',
        description:
          'Take the top 1–3 voted HMW questions forward. Write them up clearly and ensure everyone agrees they represent the right challenge. These questions become the brief for an ideation session, a design sprint, or further research. Keep the others — they may become relevant later.',
      },
    ],
    materials: ['Sticky notes (at least 10 per person)', 'Markers', 'Wall space or whiteboard', 'Dot stickers for voting'],
    tips: [
      'A good HMW sits in a productive middle: neither too broad ("HMW improve government?") nor too narrow ("HMW add a button?"). If you\'re unsure, ask: "Does this question make you want to generate 10 possible answers?" If yes, it\'s probably about right.',
      'If questions are solutions in disguise ("HMW build an app to..."), push back: "That\'s an answer — what\'s the question it\'s answering?" Help them reframe.',
      'HMW works best immediately after sharing user research findings. Turn insights directly into HMW questions: an insight that "users can\'t tell what stage their application is at" becomes "HMW help users know where their application is at any point?"',
      'Run HMW before ideation, not instead of it. The HMW question is the brief; ideation is where you generate answers.',
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
          'Write the problem clearly on the right side of the board — this is the "head" of the fish. Be specific: "Benefit processing times exceed 15 days in 40% of cases" is better than "processing is too slow." Make sure everyone agrees on this statement before proceeding — if there is disagreement, resolve it here. A Fishbone built around the wrong problem is wasted effort.',
      },
      {
        title: 'Draw the skeleton',
        duration: '5 mins',
        description:
          'Draw a long horizontal arrow pointing at the problem (the "spine"). Add 4–6 diagonal branches off the spine — these are your cause categories. In public sector and service delivery contexts, recommended categories are: People, Process, Technology, Data, Policy/Legislation, and Environment. Write one category label at the end of each bone. Pre-draw the skeleton before the session if time is limited.',
      },
      {
        title: 'Brainstorm causes',
        duration: '20–25 mins',
        description:
          'Work through each bone in turn. Ask "What causes or contributes to this problem from a [People / Process / Technology...] perspective?" Capture answers as branches off each bone. Sub-causes can branch further — these are mini 5-Whys. Encourage quantity over quality at this stage; filtering comes later. Sticky notes on the bones work well, as they can be moved if you disagree about categorisation.',
      },
      {
        title: 'Identify most likely causes',
        duration: '10 mins',
        description:
          'Step back and look at the whole diagram. Use dot stickers or a show of hands to identify which causes the group believes are most likely or most significant. Aim to highlight 3–5 priority causes. Discuss briefly: "Why do you think this is a major contributor?" Use evidence where you have it.',
      },
      {
        title: 'Plan next steps',
        duration: '10 mins',
        description:
          'For each priority cause, decide: Do we know enough to act? Or do we need more information? Agree a concrete action for each — whether that\'s investigation, a process change, or escalation. Assign a named owner and deadline to each. Photograph the completed diagram before leaving the room.',
      },
    ],
    materials: ['Large paper or whiteboard', 'Markers', 'Sticky notes', 'Dot stickers for voting'],
    tips: [
      'Don\'t argue about which bone a cause belongs to. If it could cause the problem, it\'s valid wherever it sits. The categorisation is a thinking aid, not a rule.',
      'Adapt category labels to your context. In public sector: "Policy," "Legislation," "Funding," and "Governance" are often more useful than the classic manufacturing categories (Machine, Method, Material, Man).',
      'Use this alongside 5 Whys — the Fishbone surfaces breadth across all cause categories; 5 Whys then goes deep on one or two important strands.',
      'If the diagram becomes overcrowded, that\'s often a signal that the problem statement is too broad. Consider narrowing it and running a separate session.',
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
          'Each person writes their view of the problem on sticky notes individually and in silence — one problem or aspect per note. No discussion yet. The silence is deliberate: it ensures that each person\'s perspective is captured before group dynamics shape the conversation. Aim for at least 3–5 notes per person. If someone is stuck, prompt: "What\'s stopping users from getting what they need? What\'s the pain? What\'s the gap?"',
      },
      {
        title: 'Share and cluster',
        duration: '10 mins',
        description:
          'Each person reads out their notes and places them on the board. As they do, look for similar themes and cluster them together. Name each cluster. Common patterns: one person says "the form is too long," another says "the eligibility criteria aren\'t clear" — both might cluster under "the application process creates confusion." The clusters reveal the shared understanding of where the problem lies.',
      },
      {
        title: 'Draft a problem statement',
        duration: '10 mins',
        description:
          'As a group, draft a statement using this format: "We need to find a way to [action] for [user/stakeholder] because [insight/evidence], which will result in [outcome]." Example: "We need to find a way to help applicants understand their eligibility before submitting, because 35% of applications are rejected for avoidable eligibility reasons, which will result in reduced failure demand and a better experience for users." Write it on the board and refine it together — this is a drafting exercise, not a writing competition.',
      },
      {
        title: 'Pressure test',
        duration: '5 mins',
        description:
          'Challenge the draft with these questions: Is it specific enough to actually guide solutions? ("Improve the service" is not specific enough.) Is it a solution in disguise? (Remove "by building..." or "by creating..." from the statement.) Does it name the right user group? Is the "because" grounded in evidence or is it an assumption? Could this statement generate multiple different solution approaches — or does it imply just one? Refine until it passes these tests.',
      },
      {
        title: 'Agree and commit',
        duration: '5 mins',
        description:
          'Get visible agreement from everyone in the room — thumbs up, a dot on the statement, or a verbal "yes, I\'m happy with this." Write it up clearly on a flip chart or whiteboard. Photograph it. Share it in written form within 24 hours of the session so it\'s on record and can\'t be disputed later.',
      },
    ],
    materials: ['Sticky notes', 'Markers', 'Whiteboard or large paper'],
    tips: [
      'Watch out for problem statements that are solutions in disguise ("We need to build an app to..."). If you see this, reframe: "What would that app help people do — and why can\'t they do it now?"',
      'The "because [evidence]" part is the most important clause — it grounds the statement in reality. If you can\'t fill it in with real data or observed behaviour, you need more research before you can write a good problem statement.',
      'A good problem statement should generate multiple possible solution approaches. If the statement implies only one solution, it\'s too narrow. Test this: ask "what are five different ways we might solve this?" If you can only think of one, rewrite the statement.',
      'It\'s normal for this to take more than one attempt. If the group can\'t agree, that disagreement is itself useful signal — it means the problem isn\'t understood consistently, which is exactly why you needed this session.',
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
          'Clearly state what problem or HMW question participants are ideating against. Show any relevant user research, key constraints, or design principles. Write the challenge on the board so it\'s visible throughout. Check everyone understands it before moving on — a 60-second clarification now saves you from 8 minutes of people sketching the wrong thing.',
      },
      {
        title: 'Fold the paper',
        duration: '2 mins',
        description:
          'Give everyone a sheet of A4 or A3. Fold it in half, then in half again, then in half once more — this gives 8 equal panels. Unfold it and hold it landscape. Demonstrate this step-by-step and check everyone has done it correctly before the timer starts. Number the panels 1–8 lightly in pencil.',
      },
      {
        title: '8 ideas in 8 minutes',
        duration: '8 mins',
        description:
          'Start the timer. One sketch per panel. Announce the time every 2 minutes: "Six minutes left — you should have at least 2 boxes done." These do not need to be polished: words, rough boxes, arrows, stick figures, and annotations are all valid. Sketches can be interface screens, process flows, service concepts, or physical objects. The key rule: move to the next box when the timer says to, even if you\'re not finished. At the end, every box should have something in it — even a rejected idea or a "what if" question.',
      },
      {
        title: 'Share back',
        duration: '10 mins',
        description:
          'Each person presents their 8 sketches in under a minute — a sentence per box is plenty. No critique, questions, or discussion during sharing. Other participants can make a small dot or tick on sketches they find interesting as the person presents. Allow 60–90 seconds per person maximum. Keep the pace up.',
      },
      {
        title: 'Dot vote on favourites',
        duration: '5 mins',
        description:
          'Give each person 3–5 dot stickers. Participants vote on the ideas they find most interesting, promising, or novel — they can spread dots or stack them. The top-voted ideas move into the next activity (solution sketching, prototyping, or further development). Discuss any surprising results before closing: "I notice nobody voted for X — why do you think that is?"',
      },
    ],
    materials: ['A4 or A3 paper (one sheet per person)', 'Pens or thick markers', 'Timer visible to everyone', 'Dot stickers for voting'],
    tips: [
      'Emphasise that this is NOT a drawing exercise. Words, labels, rough boxes, and arrows are perfectly valid. If someone says "I can\'t draw," say: "Good — rectangles and words are all you need."',
      'The 8-minute constraint is intentional and non-negotiable. Don\'t extend it — the pressure is exactly what forces people past their first (predictable) ideas and into more creative territory.',
      'Ideas that seem "too out there" often contain a kernel of something valuable. Actively encourage wildness — you can always strip back a big idea, but you can\'t stretch a small one.',
      'If participants finish early, challenge them: "Can you sketch a version of idea 4 but for a completely different user group?" Extending their own ideas often produces the most interesting variations.',
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
          'Write the problem on the board so everyone is aligned. Spend a moment making sure it\'s clear and specific. Example: "Applicants frequently contact us by phone because they don\'t know where their application is." This will be reversed in the next step, so precision matters.',
      },
      {
        title: 'Reverse the question',
        duration: '5 mins',
        description:
          'Reframe the challenge as its opposite. Try one of these phrasings: "How might we make this problem as bad as possible?", "What would guarantee this project fails?", "How do we ensure users have the worst possible experience?" Write the reversed question on the board. Acknowledge the absurdity — say it out loud, even laugh about it. That discomfort is part of the technique. It unlocks thinking that polite, constructive brainstorming suppresses.',
      },
      {
        title: 'Brainstorm bad ideas',
        duration: '15 mins',
        description:
          'Generate as many terrible ideas as possible on sticky notes. The worse and more specific, the better. For the example above: "Send application acknowledgements in a font size of 6pt", "Make the reference number 40 characters long", "Only update the applicant\'s status on Tuesdays between 3–4pm", "Design the status page to only load correctly in Internet Explorer 6." Laughter is a sign it\'s working. If the group is being too safe, push them: "That\'s not nearly bad enough — make it worse."',
      },
      {
        title: 'Reverse the ideas',
        duration: '15 mins',
        description:
          'For each bad idea, create a reversal. The reversal does not need to be the literal opposite — it should spark a genuine solution angle. Example reversals: "Only update status on Tuesdays" → "Send proactive status notifications the moment anything changes." "40-character reference number" → "Give every application a short, memorable reference users can actually quote." Not every bad idea will reverse cleanly — skip those and move on. Aim to get a usable reversal from at least half the bad ideas.',
      },
      {
        title: 'Evaluate and select',
        duration: '10 mins',
        description:
          'Review the full list of reversed ideas. Use dot votes to identify the most interesting or promising. Discuss: "Which of these could we actually do? Which one might solve the problem in a way we hadn\'t considered before?" Select 2–3 to take into further development.',
      },
    ],
    materials: ['Sticky notes', 'Markers', 'Whiteboard with two sections: "Terrible Ideas" and "Reversals"'],
    tips: [
      'Let the group genuinely enjoy the "bad ideas" phase — the energy and laughter it generates carries into the reversal phase. Don\'t rush past it.',
      'Some bad ideas won\'t reverse cleanly. That\'s fine — skip them. Focus on ones that produce a spark, not a tidy logical opposite.',
      'The bad ideas list is itself a useful risk register. Keep it — the things you brainstormed as "how to make it fail" are real risks worth tracking.',
      'If the group is producing bland bad ideas, push harder: "What would a villain do?" or "What would guarantee the press coverage was terrible?" Sometimes the most outrageous prompts unlock the most useful reversals.',
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
          'Write the prompt or challenge clearly on the board where everyone can see it throughout the session. Good prompts for Round Robin: "Write an initial idea for how we could [solve the problem / improve the service / address the need]." Make it concrete enough that people know what they\'re contributing to, but open enough that there are many possible responses. Check understanding before starting — ask someone to paraphrase the prompt back to you.',
      },
      {
        title: 'First round',
        duration: '5 mins',
        description:
          'Each person writes their initial idea on a sheet of A4 paper (or digital card). This should be substantive — a sketch, a few sentences, or a rough concept — not just a word or label. Brief participants: "Write enough that the next person can understand your thinking and build on it." Writing in pen (rather than pencil) keeps the original contribution visible as additions accumulate.',
      },
      {
        title: 'Pass and build',
        duration: '15–25 mins (3–5 rounds of 5 mins each)',
        description:
          'On your signal, everyone passes their sheet to the next person (clockwise in a physical room; by reassigning cards in digital tools). Each person reads what\'s there, then adds to, extends, questions, or combines the idea. Brief them: "You can develop the idea further, add a concern or constraint, ask a question, or suggest a complementary approach. You cannot erase or replace what\'s already there." Repeat for several rounds with a timer. Announce each round clearly: "That\'s 5 minutes — pass your paper to the right."',
      },
      {
        title: 'Return and review',
        duration: '5 mins',
        description:
          'Papers return to their original author. Give everyone 5 minutes to read the full evolution of their starting idea in silence. Prompt: "Read everything that was added. What surprised you? What feels most promising? What changed from your original intent?"',
      },
      {
        title: 'Share highlights',
        duration: '5 mins',
        description:
          'Each person shares one or two things: the most interesting development that happened to their idea, and any surprises. This is often where the most generative discussion happens — when people see how their idea was interpreted or transformed.',
      },
    ],
    materials: ['A4 paper or cards (one per person)', 'Pens (not pencils)', 'Timer', 'Alternatively: shared digital workspace (Miro, FigJam) with named cards'],
    tips: [
      'Participants must build on, not replace, the previous person\'s contribution. If someone is blanking out a prior idea, stop the round and clarify the rule.',
      'If someone is stuck and doesn\'t know what to add, they can write a question ("What if this was applied to mobile users?") or a constraint ("Note: this can\'t require a code change"). Passing it on with something is better than passing it blank.',
      'The number of rounds depends on group size — aim for each sheet to pass through at least half the group. For a group of 6, 3 rounds is a minimum; for a group of 8, aim for 4.',
      'In remote sessions, pre-label digital cards with each participant\'s name and use a rotation sequence you communicate clearly before starting. Confusion about who passes to whom is the most common failure mode.',
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
          'Write or draw the core topic in the centre of a large sheet or whiteboard. Circle or box it. The central idea should be a noun or noun phrase — a thing, not a question or action. Examples: "Benefit Claims Process," "User Needs — Housing Register," "Project Risks Q1." Place it in the actual centre to give yourself room in all directions.',
      },
      {
        title: 'Draw first branches',
        duration: '10 mins',
        description:
          'Add main themes or sub-topics as branches radiating outwards from the centre. Use one or two words per branch, not sentences. Draw curved rather than straight lines — it encourages the mind to associate freely. If working as a group, each person can add a branch in turn. Aim for 5–8 main branches. Examples for a "User Needs — Housing Register" map might be: Eligibility, Documentation, Communication, Timelines, Decisions, Support, Appeals.',
      },
      {
        title: 'Expand branches',
        duration: '10–15 mins',
        description:
          'From each main branch, add further ideas as sub-branches. These can go multiple levels deep. Don\'t filter — capture everything that comes to mind, including things that seem tangential. If working in a group, allow everyone to add to any branch. The goal is to map the full landscape of the topic, not to produce a neat diagram.',
      },
      {
        title: 'Identify patterns',
        duration: '5 mins',
        description:
          'Step back from the board and look at the whole map. Ask: "Where are the clusters? Where are the gaps — what\'s notable by its absence? Are there unexpected connections between different branches?" Draw cross-links with a different colour pen where you see connections between distant parts of the map. These cross-links often reveal the most interesting insights.',
      },
      {
        title: 'Discuss and prioritise',
        duration: '5 mins',
        description:
          'If working as a group, use dot voting or discussion to identify which areas or branches are most important to focus on. Circle or highlight priority areas. The mind map is now a structured view of the topic space that can inform a research plan, workshop agenda, or requirements list.',
      },
    ],
    materials: ['Large paper or whiteboard', 'Coloured markers (different colours for different branches)', 'Optional: sticky notes for additions'],
    tips: [
      'Use a different colour for each main branch and its sub-branches. This makes the map easy to navigate and helps the brain organise information spatially.',
      'Don\'t edit as you go — capture everything and review at the end. The value is in capturing the full landscape, including the things that might feel obvious or wrong.',
      'Digital tools like Miro, XMind, or Mural work well for collaborative or async mind mapping. They also make it easy to rearrange branches as understanding develops.',
      'A mind map is an excellent way to plan a research agenda: each branch becomes a topic area to investigate, and the sub-branches become specific questions to explore.',
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
          'Ensure all items are clearly visible on the wall, board, or screen. Number or label each item so they\'re easy to reference. Give everyone a moment to read through everything before voting starts. If any items need a brief explanation, provide it now — but keep it neutral and factual, not persuasive.',
      },
      {
        title: 'Set voting rules',
        duration: '2 mins',
        description:
          'Tell participants how many dots they have. As a guide: 3 dots for a short list (under 10 items), 5 dots for a medium list (10–20 items), up to 10% of the total number of items for a very long list. Participants can split their dots freely — one dot per item, all dots on one item, or anything in between. Clarify: "You\'re voting for what matters most to you, not what you think will win."',
      },
      {
        title: 'Vote silently',
        duration: '5 mins',
        description:
          'Everyone votes at the same time. Silence is non-negotiable — no lobbying, whispering, or pointing at items while others are voting. In a physical room, you can have everyone vote simultaneously by walking up together. In a remote session, use a digital voting tool (Miro, FigJam voting mode, Mentimeter) and reveal results only after everyone has voted.',
      },
      {
        title: 'Tally results',
        duration: '2 mins',
        description:
          'Count the dots on each item and write the total next to it. Reorder the list from most-voted to least-voted, or simply highlight the top 3–5 items. Do this visibly so everyone can see the count.',
      },
      {
        title: 'Discuss outliers',
        duration: '5 mins',
        description:
          'Look at the results together. Invite discussion for any surprising results: "Why did X get so many votes?" or "This item was on everyone\'s radar before we voted — why did it get so few dots?" The conversation after voting is often where the most important alignment happens. Do not change the vote results based on discussion alone — instead, use discussion to inform a follow-up decision.',
      },
    ],
    materials: ['Dot stickers — physical (red, green, or any colour) or digital (Miro, FigJam, Mentimeter)'],
    tips: [
      'Silent simultaneous voting is the whole point. If one person places their dots first and others follow, the result is anchored and biased. Enforce the silence firmly.',
      'Dot voting gives a read on group sentiment, not a final decision. Use it to focus and prioritise discussion — not to bypass it. High dot counts don\'t automatically mean "yes, we do this."',
      'In remote sessions, tools like Miro\'s built-in voting mode, FigJam stamps, or Mentimeter\'s polling feature work well. Run a brief test before the session if participants haven\'t used the tool before.',
      'If two or three items are closely tied in votes, don\'t try to break the tie through more voting. Run a brief focused discussion and make a decision as a group.',
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
          'Draw a 2×2 grid on the board. Label the x-axis "Effort" (low on the left, high on the right) and the y-axis "Impact" (low at the bottom, high at the top). Label the four quadrants now, before placing items: top-left = "Quick Wins," top-right = "Major Projects," bottom-left = "Fill-ins," bottom-right = "Time-sinks." Having the labels visible from the start helps participants think in the right frame as they place items.',
      },
      {
        title: 'Agree definitions',
        duration: '5 mins',
        description:
          'Before placing anything, align on what these axes mean for your context. "Impact" might mean: user value, reduced failure demand, strategic goal alignment, risk reduction, or revenue. "Effort" might mean: implementation time, team capacity, cost, technical complexity, or change management challenge. Write the agreed definitions under each axis label. If you skip this step, the same item will be placed very differently by different people — and the debate will be about definitions, not priorities.',
      },
      {
        title: 'Place items',
        duration: '15–20 mins',
        description:
          'Work through items one at a time. For each, ask: "High or low impact? High or low effort?" Place it on the grid. If there is immediate consensus, move on quickly. If there is debate, note the disagreement on a sticky note and park it — the goal is to get all items on the grid, not to resolve every debate. After all items are placed, revisit the parked debates. The position on the grid is approximate — exact placement is less important than the relative position of items to each other.',
      },
      {
        title: 'Agree priorities',
        duration: '10 mins',
        description:
          'Walk through each quadrant in order: Quick Wins first (high impact, low effort — do these now), Major Projects (high impact, high effort — plan these deliberately with proper resource), Fill-ins (low impact, low effort — do these if there is capacity, but never at the expense of Quick Wins or Major Projects), Time-sinks (high effort, low impact — deprioritise or remove from scope). Document the agreed priority sequence, noting any items the group wants to reconsider when more information is available.',
      },
    ],
    materials: ['Large paper or whiteboard', 'Sticky notes', 'Markers'],
    tips: [
      'Avoid false precision — this is relative, not an exact science. "Higher than X, lower than Y" is enough. Don\'t let people argue over exact positions.',
      'If two items generate a long debate, that debate is useful data — the disagreement reveals hidden assumptions about value or effort. Name the assumption explicitly and agree how to resolve it.',
      'Revisit the matrix when new information arrives — items move as understanding grows. A quick win today may become a major project once the technical complexity is understood.',
      'Watch for "impact inflation" — teams often rate everything as high impact to protect their preferred items. If everything is in the top half of the grid, challenge the group to force-rank and move some items down.',
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
          'Walk through each category with a crisp definition. Write these on the board: Must Have = the service will not work, cannot launch, or will fail legally without this. If it\'s not delivered, the project fails. Should Have = important and valuable, but can be worked around temporarily if needed. Could Have = desirable if time and resources permit — nice to have, but won\'t be missed if absent. Won\'t Have (this time) = explicitly agreed out of scope for this release — not a rejection, just a deferral. Emphasise that "Won\'t Have" is a decision, not a failure. It protects the team from scope creep.',
      },
      {
        title: 'List all requirements',
        duration: '10 mins',
        description:
          'Capture all requirements, features, or user stories on individual sticky notes — one item per note. Don\'t pre-filter or pre-categorise at this stage. If stakeholders have a pre-existing list, write each item on a separate note. If starting fresh, spend 10 minutes generating the list together before categorising.',
      },
      {
        title: 'Categorise together',
        duration: '20–30 mins',
        description:
          'Work through each item as a group. For each, ask: "What happens if we don\'t deliver this?" If the answer is "the service fails" — it\'s a Must. If "it\'s inconvenient but workable" — it\'s a Should. If "most users wouldn\'t notice" — it\'s a Could. Discuss disagreements openly — they surface important assumptions about what the service is actually for. Don\'t let louder voices dominate; ask quieter participants for their view before moving on.',
      },
      {
        title: 'Review the Musts',
        duration: '10 mins',
        description:
          'This is the most important step. Look at the Must column. Ask: "Is everything here truly non-negotiable — would the project genuinely fail without it?" Teams routinely overload this category because every stakeholder protects their priorities. Challenge every Must: "What actually happens if this is delivered in release 2 instead?" If the Must list represents more than 60% of all items, it hasn\'t been applied honestly. Push back: "If everything is a Must, we have no ability to make trade-offs — and that means we have no flexibility to deliver."',
      },
      {
        title: 'Document and agree',
        duration: '5 mins',
        description:
          'Record the final categorisation clearly — a shared document, whiteboard photo, or spreadsheet. Get explicit sign-off from every stakeholder present, ideally in writing. Agree a process for what happens when new requirements emerge: "Any new requirement that arrives must be categorised before it\'s added to the scope, and we agree that adding a Must may require removing another Must." Revisit the MoSCoW at each key milestone.',
      },
    ],
    materials: ['Sticky notes', 'Whiteboard with 4 clearly labelled columns: Must Have / Should Have / Could Have / Won\'t Have (This Time)', 'Markers', 'Camera to photograph the board at the end'],
    tips: [
      '"Must Have" should represent the absolute minimum viable service — the thing that must work on day one for the project not to be a failure. Push back hard on over-classification. A useful test: "If this were delivered three months later in a patch release, would the project have failed?" If no, it\'s not a Must.',
      '"Won\'t Have (this time)" is not a rejection — it\'s a deliberate, documented deferral. Framing it as a time-bounded decision ("not in this release") is far less confrontational than saying no, and it reduces stakeholder resistance significantly.',
      'Be explicit about the time horizon at the start: "We are MoSCoWing for this sprint / this phase / this financial year." Musts for a sprint are different from Musts for the programme.',
      'If a stakeholder refuses to put anything in "Could Have" or "Won\'t Have," explain: "If everything is a Must, I can\'t protect any of it — because we\'ll inevitably have to cut something, and without agreed priorities, we\'ll cut the wrong thing."',
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
          'List the options being compared as columns in your table. Give each option a short name and a one-sentence description so everyone has the same understanding. Make sure the options are genuinely comparable — comparing a detailed, well-understood option against a vague one will produce biased results. If an option isn\'t well-defined yet, invest time in defining it before the session.',
      },
      {
        title: 'Define criteria',
        duration: '10 mins',
        description:
          'Agree as a group what matters most for this decision. Aim for 4–7 criteria that cover different dimensions. Examples: user benefit, delivery cost, technical feasibility, policy alignment, strategic risk, time to implement, organisational capacity, legal/compliance risk. Write each criterion as a row. Avoid overlapping criteria — if two criteria say roughly the same thing, combine them.',
      },
      {
        title: 'Weight the criteria',
        duration: '10 mins',
        description:
          'Allocate a total of 100 points across the criteria based on relative importance. This is the most important and often most revealing step — it forces explicit trade-offs. Example: if user benefit gets 40 points and cost gets 10, you are explicitly saying user benefit matters four times more than cost. Work through this as a group before any scoring begins. If two people have very different weighting instincts, that disagreement should be surfaced and resolved now, not after the scores are in.',
      },
      {
        title: 'Score each option',
        duration: '15 mins',
        description:
          'For each criterion, score each option on a scale of 1–5 (or 1–10 if you want more granularity). Work one criterion at a time, across all options, rather than scoring one option at a time. Example row: "User benefit (weight: 40)" — Option A scores 4, Option B scores 2, Option C scores 3. Where scores differ significantly between participants, discuss briefly: "What are you seeing that I\'m not?" and reach consensus.',
      },
      {
        title: 'Calculate and discuss',
        duration: '10 mins',
        description:
          'For each cell, multiply the score by the criterion\'s weight. Sum each column to get a total weighted score for each option. Example: Option A scores 4 for "user benefit" (weight 40) = 160 points for that row. Sum all rows for Option A to get its total. The option with the highest total is the analytically preferred choice — but treat this as a structured input to discussion, not a final verdict. If the result doesn\'t feel right, revisit the weights first.',
      },
    ],
    materials: ['Pre-prepared table (digital spreadsheet is ideal for calculations, or large paper)', 'Calculator or spreadsheet with formula', 'Printed or projected copy of the table for all participants'],
    tips: [
      'Agree weights before scoring, never after. Adjusting weights once you can see the scores is a form of rationalisation, not analysis.',
      'If the result feels wrong, revisit the weights first — they are the most common source of bias. The discomfort when you disagree with the mathematical result is useful data about what the group actually values.',
      'This technique works particularly well for options appraisals that need to be documented for governance boards. The table provides a clear, auditable rationale for the decision.',
      'Have participants score independently before sharing and discussing. If you score as a group in real time, the first score given will anchor everyone else.',
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
          'Agree the time period being reflected on and write it clearly on the board ("Sprint 14," "Q3 delivery phase," "the last 6 weeks of the project"). Read the retrospective prime directive aloud: "Regardless of what we discover, we understand and truly believe that everyone did the best job they could, given what they knew at the time, their skills, the resources available, and the situation at hand." This is not a performance review — it\'s a collective improvement exercise.',
      },
      {
        title: 'Individual reflection',
        duration: '10 mins',
        description:
          'Each person writes sticky notes in silence for all three columns. One idea per note — this is important, as it allows notes to be moved independently during clustering. As a prompt for each column: Start = "What should we begin doing that we aren\'t doing yet? What new practices or behaviours would help?"; Stop = "What is costing us more than it\'s worth? What should we stop doing?"; Continue = "What is working well and should be preserved — even when under pressure?" Aim for at least 2 notes per column.',
      },
      {
        title: 'Share and cluster',
        duration: '15 mins',
        description:
          'Each person reads out one note at a time and places it in the relevant column. As notes are added, look for similar themes and cluster them together. Name each cluster with a short label. Don\'t spend more than 15 seconds per note during this phase — the goal is to get everything on the board, not to discuss each one. Clustering naturally happens as the board fills up.',
      },
      {
        title: 'Discuss and vote',
        duration: '15 mins',
        description:
          'Give each participant 3–5 dot stickers and ask them to vote silently for the themes they think are most important across all three columns. After voting, look at the top clusters in each column. For each top-voted item, spend a few minutes discussing: "Why is this important? What would it look like in practice? What\'s prevented us from doing this before?"',
      },
      {
        title: 'Agree actions',
        duration: '10 mins',
        description:
          'For the top 2–3 items across all three columns, agree specific, owned actions. Every action needs: a verb (what), a name (who), and a date (by when). Examples of weak vs strong actions: Weak: "Improve communication." Strong: "James to send a weekly status update email every Monday by 9am, starting next week." A retro without specific, owned actions is venting — the team deserves better than that.',
      },
    ],
    materials: ['Sticky notes (3 colours — one per column if possible)', 'Markers', 'Whiteboard divided into 3 columns: Start / Stop / Continue', 'Dot stickers'],
    tips: [
      'Keep "Start" items focused on changes the team can make themselves — not requests for other teams or leadership to change. If something requires someone else to act, it\'s an escalation item, not a retro action.',
      'The "Stop" column is often the most valuable and the most avoided. Create safety for it by reminding participants this is about practices and processes, not individuals.',
      'Actions should be achievable within the next sprint or working period. If an action would take months, it\'s a project — not a retro action. Break it down into a smaller first step.',
      'Start the next retro by reviewing the actions from the previous one. If actions were never completed, that\'s the most important thing to discuss — not new content.',
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
          'Explain each of the four Ls clearly, with examples. Write all four on the board: Liked = what went well, what you\'re proud of, what you\'d want to repeat. Learned = new knowledge, skills, or understanding gained during this period. Lacked = what was missing or insufficient — resources, clarity, support, process. Longed For = what you wished had existed — tools, capabilities, organisational structures, relationships. Distinguish Lacked from Longed For: Lacked is about things that should have been there; Longed For is about things that didn\'t exist yet and would have fundamentally changed your experience.',
      },
      {
        title: 'Individual reflection',
        duration: '10 mins',
        description:
          'Each person writes sticky notes in silence — one idea per note, in whatever L feels most relevant. As prompts: Liked: "What are you proud of? What worked well and why?" Learned: "What do you now know that you didn\'t before? What surprised you?" Lacked: "What slowed you down? What did you have to work around? What wasn\'t available when you needed it?" Longed For: "What capability, tool, or support — if it had existed — would have transformed what you were able to do?" Aim for at least 2 notes per category.',
      },
      {
        title: 'Share and cluster',
        duration: '15 mins',
        description:
          'Each person reads out their notes as they place them under the relevant column. Group similar notes into clusters and name each cluster. Pay particular attention to the "Longed For" column — themes here often point to systemic or strategic gaps that the team cannot fix alone but that leadership needs to hear about. Don\'t conflate "Longed For" with "Lacked" — they call for different responses.',
      },
      {
        title: 'Prioritise',
        duration: '10 mins',
        description:
          'Give each participant 3 dot stickers. Ask them to vote on the items or clusters across the "Lacked" and "Longed For" columns — these are where actionable improvement lies. "Liked" and "Learned" are important for morale and capture, but the actions will come from the left two columns. After voting, identify the top 2–3 themes to discuss in depth.',
      },
      {
        title: 'Agree actions',
        duration: '10 mins',
        description:
          'For each priority item, agree a concrete, specific next step. Every action needs who, what, and by when. Separate team-owned actions (things the team can do immediately) from escalation items (things that require leadership, budget, or cross-team decisions — these should be surfaced to the right person, not left on the board). Don\'t allow insights to sit without an owner.',
      },
    ],
    materials: ['Sticky notes (4 different colours — one per L — if possible)', 'Markers', 'Whiteboard divided into 4 columns: Liked / Learned / Lacked / Longed For', 'Dot stickers'],
    tips: [
      '"Longed For" is the most valuable and least understood column. It reveals strategic and systemic gaps — things the team couldn\'t create themselves. These themes often make excellent inputs to a capability or resource conversation with leadership.',
      'Encourage specificity throughout. "Better communication" is too vague to act on. "A project status dashboard visible to all stakeholders, updated weekly" is a concrete longing. Push participants: "What would that actually look like?"',
      'The distinction between "Lacked" and "Longed For" often provokes debate — that\'s fine. The discussion helps the team articulate the difference between gaps in execution and gaps in capability or strategy.',
      'Use this format after a project, major event, or significant learning experience — it captures more nuance than Start/Stop/Continue and surfaces learning alongside feedback.',
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
          'Draw or display the sailboat diagram before the session begins. The elements are: a sailboat in the middle (representing the team); an island in the top-right corner (the goal or destination); wind clouds at the top-left with arrows pushing the boat forward (what\'s helping); heavy anchors hanging below the boat (what\'s slowing you down); and jagged rocks partially submerged ahead and to the sides (risks and obstacles). Prepare this in advance on large paper or a digital whiteboard — drawing it live wastes time. Label each element clearly.',
      },
      {
        title: 'Brief the categories',
        duration: '3 mins',
        description:
          'Explain each element before the reflection begins: Wind = the things giving us energy and momentum — what\'s helping us move forward? Anchors = the things slowing us down or draining energy — what\'s holding us back? Rocks = the risks and obstacles still ahead — what could wreck the journey if we don\'t navigate it? Island = our goal — confirm what success looks like for this team at this moment. Write this on the island if it isn\'t already clear.',
      },
      {
        title: 'Individual reflection',
        duration: '10 mins',
        description:
          'Everyone writes sticky notes in silence — one observation per note, placed on the relevant element. Prompts for each category: Wind: "What has been helping us move forward? What gave us energy, made collaboration easier, or accelerated our work?" Anchors: "What has been holding us back or slowing us down? What drains energy or creates friction?" Rocks: "What risks or obstacles are ahead? What could derail the project if we don\'t address it?" Aim for 2–3 notes per category. It\'s normal for Anchors to dominate — this is often the most productive column.',
      },
      {
        title: 'Share and cluster',
        duration: '15 mins',
        description:
          'Each person reads out their notes as they place them on the relevant part of the diagram. Group similar notes together under each element and name the clusters. Keep the pace up — brief explanations only during placement. After all notes are on the board, step back and look at the pattern. Where are the most notes? What themes stand out? What\'s in the rocks that the team may have been avoiding saying aloud?',
      },
      {
        title: 'Prioritise and action',
        duration: '15 mins',
        description:
          'Give each participant 3–5 dot stickers. Ask them to vote on the most important anchors (what we need to cut to move faster) and rocks (what risks we must address before they wreck us). After voting, focus on the top 2–3 items. For each: "What specific action would address this? Who owns it? By when?" Record actions. The island should remain visible throughout — keep connecting back to it: "Will removing this anchor help us reach the island faster?"',
      },
    ],
    materials: ['Large paper or digital whiteboard (Miro, FigJam) — pre-drawn sailboat diagram', 'Markers', 'Sticky notes (different colours for each element if possible)', 'Dot stickers'],
    tips: [
      'Keep the island/goal visible throughout. Whenever the group gets lost in an anchor or risk discussion, bring them back: "And if we resolve this, how does it help us reach the island?"',
      'The rocks are what make this format more forward-looking than most retros. Encourage honesty here — teams often know what the risks are but haven\'t said them out loud yet. The metaphor makes it safer.',
      'If you don\'t have time to pre-draw the sailboat, use a simplified version: just four sticky note areas labelled Wind, Anchors, Rocks, and Island. The metaphor works even without the picture.',
      'For teams new to retrospectives, this format is more engaging than a text-only column approach. The visual metaphor helps people stay connected to the purpose of the session.',
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
          'Set the tone carefully before anyone writes anything. Say something like: "Feelings are valid and useful data — if people are frustrated or disheartened, that tells us something important about how the work is going. This isn\'t a complaint session and it isn\'t about blame. It\'s about understanding the human experience of the work so we can make it better for everyone." Make it explicitly safe to be honest. If the team has been under significant pressure, acknowledge it directly: "We\'ve had a hard few weeks, and I want to make sure we have space to reflect on that honestly today."',
      },
      {
        title: 'Individual reflection',
        duration: '8 mins',
        description:
          'Each person writes sticky notes in silence — one thought per note. Prompts for each column: Mad: "What has frustrated, stressed, or angered you during this period? What felt unfair, avoidable, or needlessly difficult?" Sad: "What has disappointed you? What did you hope for that didn\'t happen? What have you lost — momentum, confidence, trust?" Glad: "What has made you feel positive, proud, or energised? What worked well? What are you grateful for?" Give people permission to write difficult things. Remind them: "Your Mad and Sad notes are just as valuable as your Glad ones."',
      },
      {
        title: 'Share',
        duration: '15 mins',
        description:
          'Each person reads out their notes and places them in the relevant column. As facilitator, your job is to hold the space — not to problem-solve, reassure, or minimise what\'s being shared. Resist the urge to say "but actually, that was handled really well." Simply acknowledge: "Thank you for sharing that." Cluster similar themes as they emerge. If someone shares something particularly heavy, pause before moving on: silence for a moment shows the group it was heard.',
      },
      {
        title: 'Reflect on patterns',
        duration: '10 mins',
        description:
          'Step back and look at the full board. Ask the group: "What patterns are you noticing? What stands out? What surprised you — either what came up or what didn\'t?" Focus attention on the Mad and Sad columns: "What are the most common causes of frustration and disappointment here? What do they have in common?" This analysis is the bridge between how people felt and what the team can change.',
      },
      {
        title: 'Agree 1–2 changes',
        duration: '5 mins',
        description:
          'Based on the most prominent patterns in Mad and Sad, agree one or two specific, achievable changes for the next period. Keep the scope small — this format is as much about being heard as it is about problem-solving. A small, genuine change agreed here is more valuable than an ambitious plan that nobody follows through on. Close with an acknowledgement of what was shared: "Thank you for your honesty today — it takes courage, and it makes us a better team."',
      },
    ],
    materials: ['Sticky notes (3 colours — one per column)', 'Markers', 'Whiteboard with 3 columns: Mad / Sad / Glad'],
    tips: [
      'The facilitator should share their own feelings first — genuinely and appropriately. This is the strongest signal that it\'s safe to be honest. If you\'re not willing to be a little vulnerable yourself, don\'t run this format.',
      'If psychological safety is low in this team, consider collecting notes anonymously in advance (e.g. via a Google Form) and presenting the themes yourself, rather than attributing notes to individuals.',
      'Don\'t rush the "Share" phase. Some things take time to say out loud. Silence between notes is normal — hold it rather than filling it.',
      'Not everything shared needs an action. Sometimes being heard is enough. Don\'t force every Mad or Sad note into a solution — ask the group: "Does this need an action, or was it important just to name it?"',
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
          'Agree which user group and which specific scenario you are mapping before anything goes on paper. The most common mistake is scoping too broadly ("all users of the benefit system") — narrow it down to one user archetype in one specific scenario ("a first-time applicant with a disability applying online"). Write the agreed scope at the top of the board. Also agree the start and end points of the journey. A good journey starts before the user interacts with your service (when they first realise they have a need) and ends after the key outcome is delivered.',
      },
      {
        title: 'Map the stages',
        duration: '10 mins',
        description:
          'Identify 4–8 high-level phases of the journey and write them as column headers across the top of the board. Example phases for a benefit claim: Realise Need → Research Options → Gather Documents → Apply → Wait → Receive Decision → Receive Payment → Manage Ongoing. These should represent meaningful milestones in the user\'s experience, not internal operational steps.',
      },
      {
        title: 'Map actions and touchpoints',
        duration: '20 mins',
        description:
          'For each stage, add two rows: Actions (what does the user do?) and Touchpoints (how do they interact with your service?). Actions are user-initiated: "searches online," "calls helpline," "uploads documents." Touchpoints are the service channels: "GOV.UK guidance page," "paper form," "telephone service," "appointment letter," "email confirmation." Keep the perspective firmly in the user\'s shoes — not what the service does, but what the user experiences.',
      },
      {
        title: 'Map emotions',
        duration: '20 mins',
        description:
          'Add an Emotions row below Touchpoints. For each stage, rate the user\'s likely emotional experience on a scale from very negative (frustrated, anxious, confused) to very positive (confident, relieved, satisfied). Draw a line connecting these ratings across the stages — this creates the emotional journey curve. Where does it dip lowest? Where does it recover? The lowest points on the curve are your highest-priority opportunities. If you have user research data, use it here. If not, build the curve from team knowledge and label it clearly as a hypothesis.',
      },
      {
        title: 'Identify pain points and opportunities',
        duration: '20 mins',
        description:
          'Add one more row: Pain Points and Opportunities. Mark the most significant friction points, failure moments, and gaps (use red sticky notes or a red marker). Mark the moments of strength or delight — things users find easy, reassuring, or effective (use green). Discuss as a group: "Which pain points matter most? Which are within our control? Which have the biggest impact on the user\'s overall experience?" This discussion is as valuable as the map itself.',
      },
      {
        title: 'Prioritise',
        duration: '10 mins',
        description:
          'Give each participant 3–5 dot stickers. Ask them to vote on the pain points they believe are most important to address — considering both severity and feasibility. The top-voted pain points become inputs for How Might We questions or a design brief. Document the completed map with a photograph and share it after the session.',
      },
    ],
    materials: ['Large paper or digital whiteboard (at least A1 size — this map gets big)', 'Sticky notes in multiple colours', 'Markers', 'Red and green stickers or markers for pain points and opportunities'],
    tips: [
      'Stay in discovery mode throughout — avoid jumping to solutions while mapping. If someone suggests a solution, say "Great — write that on a separate sticky note and we\'ll come back to it after."',
      'If you have real research data (user interview notes, call centre data, complaint logs), use it to anchor the emotional curve and pain points. Without research, clearly label the map as "hypothesis — to be validated with users."',
      'Involve people from across the service — front-line staff and policy teams often have very different (and both partial) views of the same journey. The map is most valuable when it surprises everyone in the room.',
      'Don\'t try to map every variation — stick to the main happy path first. Edge cases and alternative scenarios can be mapped separately once the core journey is understood.',
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
          'Explain the job statement format: "When [situation], I want to [motivation/job], so I can [desired outcome]." Show examples — ideally from your own service context. Introduce the three types of jobs: Functional jobs (practical tasks the user needs to accomplish — "check whether I qualify"), Social jobs (how users want to be perceived by others — "be seen as responsible and proactive about my situation"), and Emotional jobs (how users want to feel — "feel confident that I haven\'t made a mistake"). Most requirements tools capture functional jobs but miss social and emotional ones — those are often where the most impactful design decisions lie.',
      },
      {
        title: 'Identify the context',
        duration: '5 mins',
        description:
          'Agree precisely which user group and situation you are exploring. Write it on the board: "We are exploring the jobs of a first-time benefit claimant in the first 48 hours after losing their job." The more specific the context, the more precise and useful the job statements will be.',
      },
      {
        title: 'Craft job statements',
        duration: '20 mins',
        description:
          'Each person writes job statements on individual sticky notes using the format. Focus on verbs and outcomes — not features or solutions. Challenge output-framing ruthlessly: if someone writes "I want a dashboard," push them: "What would the dashboard help you do? What decision would you make differently because of it?" The revised version might be: "When I\'m waiting for a decision, I want to know whether my application is progressing normally, so I can decide whether I need to contact someone or just wait." Aim for 5–8 statements per person.',
      },
      {
        title: 'Share and cluster',
        duration: '15 mins',
        description:
          'Each person reads out their job statements and places them on the board. Group similar statements together. Then look at each cluster through the three lenses: Is this primarily a Functional, Social, or Emotional job? Label each cluster. The social and emotional clusters are often the most surprising — and the most underserved by existing services.',
      },
      {
        title: 'Prioritise',
        duration: '10 mins',
        description:
          'Use dot voting to identify which jobs are: most important to users, most underserved by the current service, and most relevant to the problem you\'re trying to solve. These three questions may produce different results — that tension is valuable. A job that is important and underserved is your biggest opportunity.',
      },
      {
        title: 'Discuss implications',
        duration: '10 mins',
        description:
          'Ask the group: "How does understanding these jobs change how we think about what we\'re designing?" Common revelations: "We\'ve been optimising for speed but the emotional job is about feeling safe, not fast." "We\'ve built features for functional jobs but completely ignored the social job of being seen as competent by their employer." Document the key implications — these become design principles or requirements criteria.',
      },
    ],
    materials: ['Sticky notes', 'Markers', 'Whiteboard', 'Job statement format written clearly on the board'],
    tips: [
      'Watch for output-framing ("I want a better website") vs job-framing ("I want to find the right benefit quickly without having to read everything"). Push hard for the latter — it\'s where the design insight lives.',
      'Jobs don\'t change often — technology, channels, and features do. Grounding requirements in jobs makes them more durable and resilient to technological change.',
      'Social and emotional jobs are consistently underexplored. Prompt specifically: "How does the user want to feel during this process? How do they want to be seen by others?" The answers often produce the most powerful design directions.',
      'This pairs well with the Value Proposition Canvas — once you understand the jobs, you can evaluate whether your service is actually designed to address them.',
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
          'Cast a wide net first — capture everyone who might be affected by or have influence over the project. Write each stakeholder on a separate sticky note. Categories to prompt thinking: End users (the people the service is for); Delivery partners (organisations who help deliver it); Policy and strategy teams (who set the direction); Senior leaders and decision-makers (who control budget and approval); Regulators and oversight bodies; Parliament and ministers (for public sector programmes); Media, campaign groups, and third sector organisations; Other government departments with overlapping interests; IT, legal, and finance teams. Don\'t pre-filter — get everything on the board first.',
      },
      {
        title: 'Place on a power/interest grid',
        duration: '15 mins',
        description:
          'Draw a 2×2 grid: Influence/Power on the y-axis (low to high), Interest on the x-axis (low to high). Place each stakeholder sticky note on the grid. For each: "How much power or influence do they have over the outcome of this project?" and "How interested are they in what we\'re doing?" Expect debate about placements — that debate is the value. When people disagree about a stakeholder\'s influence, it often reveals that different team members have different relationships with that person.',
      },
      {
        title: 'Analyse quadrants',
        duration: '10 mins',
        description:
          'Look at each quadrant and agree your engagement strategy: Top-right (high influence, high interest) → Manage closely. Engage proactively, regularly, and deeply. These are your primary stakeholders. Top-left (high influence, low interest) → Keep satisfied. Don\'t ignore them — they can become blockers quickly if surprised. Bottom-right (low influence, high interest) → Keep informed. They care but can\'t drive the outcome directly. Still valuable as advocates. Bottom-left (low influence, low interest) → Monitor. Light-touch communication only.',
      },
      {
        title: 'Identify engagement approaches',
        duration: '10 mins',
        description:
          'For each stakeholder in the top-right quadrant, and any particularly sensitive or complex stakeholders elsewhere, agree: What do they need from us? (Information, reassurance, input, decisions?) What do we need from them? (Approval, data, access, endorsement?) How will we engage? (Regular 1:1, steering group, email updates, workshops?) How often? Write this up as a brief engagement plan — even a one-page table is enough.',
      },
      {
        title: 'Identify knowledge gaps',
        duration: '5 mins',
        description:
          'Are there stakeholders on the map that nobody in the room knows well? Are there groups you\'ve heard about but haven\'t engaged with? Note these explicitly: "We don\'t know enough about [stakeholder] to place them accurately — we need to find out more before this becomes a problem." Plan a specific action to address each gap, with an owner and timeline.',
      },
    ],
    materials: ['Large paper or whiteboard', 'Sticky notes', 'Markers', 'Optional: colour-coded sticky notes for different stakeholder types'],
    tips: [
      'Be honest about where people actually sit — the map loses all value if everyone ends up in "manage closely" out of political caution. If you\'re tempted to put everyone in the top-right, force yourselves to compare: "Do they have more or less influence than X?"',
      'Revisit the map regularly — stakeholder influence shifts over the life of a project. A stakeholder who was peripheral in alpha may become critical in beta. Make a note to review at each major milestone.',
      'In public sector, consider a separate, more sensitive "political landscape" note for elected officials, ministers, and their advisors — this context may not be appropriate for a workshop wall.',
      'Stakeholder mapping is the beginning of an engagement plan, not a replacement for one. Use the map to prioritise your relationship-building activity, then build real relationships.',
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
          'Transfer every observation, quote, and data point from your research notes onto individual sticky notes — one observation per note. This is the most important rule of affinity mapping: one idea per note, never summaries or combined points. If two things happened together, write two notes. Write as close to verbatim as possible — "I didn\'t understand what the letter was asking me to do" is better than "letter is confusing." Keep raw data raw. Use different coloured sticky notes for different types of data if you want to trace provenance later (e.g. pink = participant quotes, yellow = researcher observations, blue = team hypotheses).',
      },
      {
        title: 'Silent clustering',
        duration: '20 mins',
        description:
          'Without talking, everyone moves sticky notes into groups they think belong together. Anyone can move any note at any time. Notes can move more than once — and that\'s fine. If a note keeps getting moved back and forth between two clusters, it may belong to both, or may be a bridge between them. The silence prevents any one person from defining the categories and ensures the clusters emerge from the data rather than from the most confident voice in the room.',
      },
      {
        title: 'Name the clusters',
        duration: '10 mins',
        description:
          'Once the silent phase stabilises (people have stopped moving notes), the group names each cluster together. Write the name on a header sticky note above the cluster. Good cluster names describe the underlying theme or pattern — not the literal content. "Trust and transparency" is better than "things people said about letters." Avoid clusters named after one specific note — that\'s a sign the cluster is too narrow.',
      },
      {
        title: 'Discuss and refine',
        duration: '15 mins',
        description:
          'Talk through the clusters. Challenge each one: "Is this cluster coherent — do all the notes in it really belong together?" Split clusters that are too broad. Merge clusters that overlap. Rename any that don\'t quite capture the theme. Pay attention to the size of clusters: a large cluster may be more important than a small one — or it may just mean you asked the same question a lot. Don\'t conflate volume with significance.',
      },
      {
        title: 'Prioritise themes',
        duration: '10 mins',
        description:
          'With the refined clusters visible, give each participant 3–5 dot stickers. Ask them to vote on the themes that are most significant: "Which of these themes represents the biggest user need, the greatest opportunity, or the most critical risk?" After voting, discuss the results and agree on the top 3–5 themes to take forward into insights or design work.',
      },
    ],
    materials: ['Large quantity of sticky notes — at least 3x more than you think you need', 'Markers', 'Large wall or digital whiteboard', 'Different coloured sticky notes for different data types (optional but helpful)'],
    tips: [
      'The one-idea-per-note rule is non-negotiable. A note with two observations cannot be clustered correctly — it will always be in the wrong group for one of the observations. If you\'re tempted to combine, write two notes instead.',
      'The silent phase is crucial. Even 5 minutes of silence before discussion changes the output significantly. If people start talking during it, gently redirect: "Let\'s keep this silent for now — discuss once we\'re done moving notes."',
      'Trust the process even when it looks chaotic. The mess always resolves by the naming step. Teams that have never done this before often panic at the chaos phase — reassure them.',
      'Affinity mapping is most powerful immediately after research sessions, while observations are fresh. Running it two weeks later with reconstructed notes is significantly less effective.',
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
          'Ask the group: "What would need to be true for this project to succeed?" Write each assumption on a separate sticky note. If people are stuck, prompt with categories: User behaviour ("Users will be willing to provide their bank details online"), Technical feasibility ("The existing API can support real-time eligibility checking"), Policy and legislation ("The minister will approve the proposed change to eligibility criteria"), Organisational capacity ("The team can handle 3x the current volume after launch"), Demand and reach ("30% of eligible users will find and use the digital service in year one"). Aim for 15–25 assumptions — teams usually find far more than they expected once they start.',
      },
      {
        title: 'Place on the matrix',
        duration: '15 mins',
        description:
          'Draw a 2×2 matrix: x-axis = How certain are we? (Known on the left, Unknown on the right); y-axis = How critical is this? (Less critical at the bottom, More critical at the top). Place each assumption on the matrix. For each note, ask two questions: "How confident are we that this is true — do we have evidence?" and "If this assumption is wrong, how badly does it affect our chances of success?" Expect debate about placements — that debate is the value.',
      },
      {
        title: 'Focus on the danger zone',
        duration: '10 mins',
        description:
          'The top-right quadrant — Unknown and Critical — is your danger zone. Every assumption in this quadrant is a bet you\'re making without evidence. Name them clearly: "We are assuming [X] but we have no evidence for this, and if we\'re wrong, it could [consequence]." These are the assumptions you must test before committing significant resources. Count how many are in the danger zone — if there are more than a handful, your project is carrying substantial unacknowledged risk.',
      },
      {
        title: 'Plan validation',
        duration: '20 mins',
        description:
          'For each assumption in the danger zone (and any other high-priority assumptions), agree how you will test it. Match the method to the nature of the assumption: User behaviour → user interviews, prototype testing, diary studies; Technical feasibility → technical spike, proof of concept; Policy feasibility → policy consultation, legal advice; Demand → data analysis, market sizing, early registration; Organisational capacity → resource planning exercise, pilot. Write the validation plan explicitly: "We will test this assumption by [method] by [date]. We will know we were right if [measurable outcome]."',
      },
      {
        title: 'Prioritise',
        duration: '10 mins',
        description:
          'With limited time and resource, you cannot test everything at once. Use dot voting or discussion to agree which assumptions to test first. Prioritise assumptions that are both critical and unknown, and those that will take the longest to test. Sequence your research and spike activities to resolve the highest-risk assumptions as early as possible in the project lifecycle.',
      },
    ],
    materials: ['Sticky notes', 'Markers', '2×2 matrix on whiteboard (label axes clearly before the session)', 'Camera to photograph the completed map'],
    tips: [
      'Teams often struggle to identify assumptions because they\'ve internalised them. Try this prompt: "What would make us wrong about this?" — the inverse often surfaces hidden assumptions more readily than the direct question.',
      'Assumptions about policy feasibility are consistently overlooked in public sector projects. Push hard on these: "Has this policy approach actually been approved? By whom? In writing?" Assumed policy green lights that later turn red are one of the most common causes of public sector project failure.',
      'Revisit the map as you learn. As research progresses, assumptions move from Unknown to Known. A known-and-confirmed assumption becomes a foundation; a known-and-disproved assumption requires the team to change direction. Make reviewing the assumption map a regular activity, not a one-off.',
      'An assumption that cannot be tested at all (for political, ethical, or timing reasons) should be explicitly documented as a residual risk on the project risk register.',
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
          'Brainstorm all the different types of people who might use or be affected by the service. Write each group on a sticky note. Prompt the team: "Who else?" until the board stops growing. Then cluster similar groups and give each cluster a short name. Look for groups that differ significantly in: their situation or context, their level of digital or service confidence, their needs and motivations, or the barriers they face. These differences are what distinguish meaningful user groups.',
      },
      {
        title: 'Select 2–3 to focus on',
        duration: '5 mins',
        description:
          'You can\'t build a persona for every group in one session. Choose the 2–3 that are most important for this phase of work: typically the largest user group, the group with the most acute needs, and one edge case or underrepresented group. Write a short rationale for why you\'ve chosen these — it\'s easy to unconsciously default to the easiest or most familiar user group.',
      },
      {
        title: 'Build each persona',
        duration: '20 mins per persona',
        description:
          'Split into sub-groups if you have multiple personas to build. For each persona, fill in the following sections: Name and image (give them a real name and a stock photo or sketch — it makes them feel human); Context and role (who are they, what\'s their situation?); Goals and motivations (what are they trying to achieve?); Frustrations and barriers (what makes this hard?); Current behaviours (what do they do today — how do they manage without the ideal service?); Digital and service confidence (are they comfortable online? Do they prefer phone, in-person, or digital?); A representative quote (a sentence in their voice that captures their experience). Mark anything that is assumed rather than evidence-based with a star or "?" symbol.',
      },
      {
        title: 'Share back',
        duration: '10 mins',
        description:
          'Each sub-group presents their persona in 2–3 minutes. Use the persona name throughout: "Sarah finds that..." rather than "our user." After all personas are shared, discuss: "What surprised us? Are there any tensions between these personas — things that would be good for one and bad for another? Which persona should we prioritise in our design decisions?"',
      },
      {
        title: 'Surface and label assumptions',
        duration: '10 mins',
        description:
          'Go through each persona and explicitly label what is based on evidence vs what is assumed. Add a sticky note to each persona listing the top 2–3 assumptions that most need validating. Plan the research: "To validate this proto-persona, we need to interview 5 people who fit the [group name] profile and compare what we assumed against what we hear." Schedule this research before the personas are used to make decisions.',
      },
    ],
    materials: ['Persona template (A3 paper or digital — pre-formatted with sections)', 'Sticky notes', 'Markers', 'Optional: printed stock photos to make personas feel human'],
    tips: [
      'Always label proto-personas clearly as "HYPOTHESIS — to be validated with research." If they appear in a presentation, slide deck, or business case without that label, stakeholders will treat them as facts. They are not — they are structured guesses.',
      'The most valuable part of this session is the conversation it generates, not the persona output. Pay attention to moments when team members disagree about a persona\'s motivations or barriers — those disagreements reveal assumptions worth investigating.',
      'Proto-personas that survive user research become real, evidence-based personas. Some will be wrong and will need to be discarded or significantly revised. That is the point — finding out early is much cheaper than finding out in delivery.',
      'Give each persona a name and photo at the start — it changes the conversation. "What does Amara need?" generates more empathetic thinking than "what does the typical user need?"',
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
          'Each researcher shares raw observations from their sessions — things that surprised them, quotes that stood out, recurring patterns, and moments that felt significant. Ground rules: no interpretation yet, no "users want," no jumping to solutions. Just: "I observed that..." or "I heard..." Go around the group, with each person sharing one or two observations at a time rather than one person presenting everything. This prevents one researcher\'s framing from dominating the synthesis.',
      },
      {
        title: 'Write observation notes',
        duration: '15 mins',
        description:
          'Convert raw research notes into specific, evidence-based observation statements on sticky notes. The discipline here is in the language: write "We observed that participant 3 spent 4 minutes re-reading the eligibility section and then asked \'does this mean me?\'" not "Users find eligibility confusing." The specific version is evidence; the general version is already an interpretation. One observation per note. If you have audio or video recordings, include verbatim quotes — they are the most powerful evidence.',
      },
      {
        title: 'Group and theme',
        duration: '15 mins',
        description:
          'Use affinity mapping to cluster observation notes into themes — what keeps coming up across different participants? What patterns cut across different user types or scenarios? Name each cluster. Look especially for patterns that appear in different forms across different sessions: the same underlying issue showing up through different symptoms is usually your most important finding.',
      },
      {
        title: 'Write insight statements',
        duration: '20 mins',
        description:
          'For each major theme cluster, write an insight statement using this format: "[User group] [struggles with / needs / believes / does] [specific observation] because [underlying reason], which means [implication for the service]." Example: "First-time applicants struggle to assess their own eligibility because the criteria use technical language that doesn\'t map to how they think about their situation, which means many either don\'t apply when they should, or apply when they won\'t qualify." A good insight is non-obvious, specific, and implies a direction — without prescribing a solution.',
      },
      {
        title: 'Prioritise insights',
        duration: '10 mins',
        description:
          'With all insights written up, use dot voting to identify the most important: which are most surprising (challenge existing assumptions), most actionable (have clear implications for design), and most significant (affect the largest number of users or the most acute needs). The top-voted insights become the foundation for How Might We questions, design principles, or a design brief.',
      },
    ],
    materials: ['All research notes and recordings', 'Sticky notes', 'Markers', 'Whiteboard', 'Optional: a template for the insight statement format written on the board'],
    tips: [
      'A good insight is non-obvious. If it doesn\'t surprise you or challenge an existing assumption, it may be surface-level. Keep asking "so what?" and "why does this matter?" until you reach something that genuinely changes how you think about the problem.',
      'The format "[User group] does [X] because [Y], which means [Z]" is powerful because it forces you to articulate implications — not just observations. Many teams stop at observations; the insight is in the "which means" clause.',
      'Insights are categorically different from requirements. An insight explains behaviour and underlying motivation; a requirement prescribes a solution. "Users don\'t know their eligibility status" is an insight. "We need a status-checker on the homepage" is a requirement — and it may or may not address the actual insight.',
      'Run this session as soon as possible after your research rounds — within 24–48 hours ideally. The longer you wait, the more the nuance fades from memory.',
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
          'Agree which user journey the blueprint will cover — be specific. A service blueprint for "the entire benefits system" is not manageable in one session. Narrow it to one user type making one type of claim or request. Write the agreed scope at the top of the board. Then map the high-level journey stages as column headers across the top — these are the same stages as a Journey Map (e.g. Aware → Apply → Wait → Decision → Receive). Set up the horizontal swim lanes below: from top to bottom — User Experience (what the user sees and does), Line of Interaction (the boundary between user and service), Frontstage (visible staff/service actions), Line of Visibility (the boundary between what the user can and can\'t see), Backstage (hidden operational processes), Supporting Systems.',
      },
      {
        title: 'Map user actions',
        duration: '15 mins',
        description:
          'In the "User Experience" lane, for each stage, capture what the user does and what they experience. Write in the user\'s language: "searches for the application form," "waits for confirmation email," "calls the helpline to ask what\'s happening." Also note the touchpoints — how is the user interacting with the service at each stage? (Website, letter, phone, in-person, app.)',
      },
      {
        title: 'Map frontstage interactions',
        duration: '15 mins',
        description:
          'In the "Frontstage" lane, capture everything that staff or the service does that is visible to the user: sending confirmation emails, making phone calls, writing decision letters, hosting appointments, updating a case tracker the user can see. These are the service\'s visible face. Draw a dotted "Line of Interaction" between User Experience and Frontstage to mark the boundary.',
      },
      {
        title: 'Map backstage processes',
        duration: '20 mins',
        description:
          'In the "Backstage" lane, capture all the operational activity that the user doesn\'t see: case management steps, internal approvals, data verification, policy checks, handoffs between teams, manual processing steps. This is often where the most complexity and risk lives. Draw a dotted "Line of Visibility" between Frontstage and Backstage. Handoffs across this line (where a backstage step triggers a frontstage action) are particularly important to identify.',
      },
      {
        title: 'Map supporting systems',
        duration: '15 mins',
        description:
          'Add a "Supporting Systems" lane at the bottom. List the technology systems and tools that underpin each step — case management systems, databases, document management tools, payment platforms, identity verification services. Draw vertical lines connecting frontstage and backstage processes to the systems that enable them. Identify where manual workarounds exist because systems don\'t connect.',
      },
      {
        title: 'Identify pain points and gaps',
        duration: '15 mins',
        description:
          'With the full blueprint visible, use red sticky notes or red markers to mark: the longest waits, the most error-prone steps, the most complex handoffs, the places where information is re-entered multiple times, the moments where users are most likely to have a bad experience. Discuss: "Where is the biggest gap between what the user experiences and what we\'d want them to experience?" These become priorities for improvement.',
      },
    ],
    materials: ['Very large paper or digital whiteboard — Miro and FigJam work well for this', 'Sticky notes in multiple colours (one colour per swim lane helps)', 'Markers', 'Printed or digital service blueprint template if available'],
    tips: [
      'This is more complex than it looks. For any service with more than 3–4 touchpoints or teams, allow two sessions: one to map the user journey and frontstage, one to add the backstage and systems. Rushing produces an inaccurate map.',
      'Invite people from across the service — front-line staff, back-office teams, IT, and policy. No single team has the full picture. The blueprint is only as good as the diversity of perspectives that built it.',
      'The "Line of Visibility" between frontstage and backstage is often where the most interesting problems hide. Handoffs across this line — where a backstage process triggers a user-facing event — are frequent sources of delay, error, and poor experience.',
      'Label swim lanes clearly and consistently. If participants don\'t understand the structure, the map becomes confusing quickly. Spend 5 minutes at the start explaining what each lane means and what goes in it.',
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
          'Explain the structure of both sides of the canvas. The right side (circle) is the Customer Profile: Jobs (what they\'re trying to get done), Pains (frustrations and obstacles), Gains (desired outcomes). The left side (square) is the Value Map: Products & Services (what you offer), Pain Relievers (how you address pains), Gain Creators (how you create gains). Show a completed example — ideally a simplified one from a similar context. Emphasise the core rule: always complete the Customer Profile (right side) before the Value Map (left side). If you start from your solution, you\'ll rationalise rather than evaluate.',
      },
      {
        title: 'Complete the customer profile',
        duration: '20 mins',
        description:
          'Work through the right side of the canvas together. Jobs: What are users trying to accomplish? Include functional jobs (apply for a benefit, renew a licence), social jobs (be seen as responsible), and emotional jobs (feel less anxious about their situation). Pains: What frustrates, blocks, or worries them? What do they fear? What\'s risky or costly about the current experience? Gains: What outcomes do they want? What would make them happy — not just satisfied? Use real research data where you have it; label assumptions clearly where you don\'t.',
      },
      {
        title: 'Complete the value map',
        duration: '20 mins',
        description:
          'Now complete the left side — your service\'s offer. Products & Services: List the components of what you\'re providing. Pain Relievers: For each pain you identified, how does your service address it — or how could it? Gain Creators: For each gain the user wants, how does your service deliver — or help deliver — that outcome? Be honest here. It\'s common to find that your service relieves some pains well but creates others, or that some gains users want are not addressed at all.',
      },
      {
        title: 'Check for fit',
        duration: '15 mins',
        description:
          'Draw lines connecting matching items between the two sides. A pain reliever should connect to a specific pain. A gain creator should connect to a specific gain. Look for three types of finding: Strong fit (your service directly addresses a real user need — reinforce this); Weak fit (you\'re providing something but it doesn\'t quite address the real pain or gain — explore why); No fit (user needs exist with nothing on the value side, or you\'re offering things that don\'t connect to any user need).',
      },
      {
        title: 'Identify gaps and priorities',
        duration: '10 mins',
        description:
          'Discuss what the fit analysis reveals. Where are the biggest gaps — the most significant user pains or gains that your service doesn\'t address? What parts of your offer don\'t connect to any real user need — and should they be deprioritised or removed? Agree the top 2–3 priority areas to address. These become inputs to your design work, roadmap, or service improvement plan.',
      },
    ],
    materials: ['Value Proposition Canvas template — A3 printed or digital (Miro, FigJam, Canvanizer)', 'Sticky notes in two colours — one for Customer Profile, one for Value Map', 'Markers'],
    tips: [
      'Always complete the Customer Profile before the Value Map — never start from your solution. If you populate the value map first, you will unconsciously construct the customer profile to match it, which defeats the entire purpose.',
      'Use real research data to populate the Customer Profile wherever possible. Assumptions here are not just incomplete — they actively mislead the team. If you don\'t have research yet, label every item with "assumed" and plan research to validate.',
      'In public sector settings, "gain creators" often relate to reducing anxiety, increasing confidence, or reducing effort — not just task completion. "Feeling reassured that my claim is being processed correctly" is a legitimate gain that many services fail to address.',
      'The most valuable output is often not where there is fit, but where there isn\'t. Items on the Customer Profile with no connection to the Value Map are your biggest unmet needs — and most important design opportunities.',
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
          'Walk through the current process step by step with the people who actually do the work. Set up horizontal swim lanes on the board — one lane per role, team, or organisation involved in the process. Label each lane. Common lanes: User/Citizen, Front-line Staff, Back-office Team, IT Systems, External Partners. Map the process left to right, stage by stage. For each step, capture: what action is taken, which role performs it, which system is used, what triggers it, and what it produces. Mark decision points (diamonds), handoffs between lanes (arrows), and waiting periods (clocks or gaps). Validate constantly as you go: "Is this how it actually works? What happens when it goes wrong?" Keep the tone inquisitive, not judgmental.',
      },
      {
        title: 'Identify problems',
        duration: '15 mins',
        description:
          'With the As-Is mapped and validated, mark the pain points using red sticky notes or a red pen. Look for: bottlenecks (steps where work queues up), duplications (the same information entered more than once), manual workarounds (steps done in Excel or email that should be in a system), error-prone steps (where mistakes frequently occur), handoffs that lose information, and compliance risks (steps where policy or law requires something that the current process doesn\'t guarantee). Quantify where you can: "This step takes an average of 3 days" is much more useful than "this step is slow."',
      },
      {
        title: 'Agree To-Be principles',
        duration: '10 mins',
        description:
          'Before designing the future state, agree 3–5 guiding principles for the To-Be process. These prevent the future state from reproducing the same problems in a new form. Example principles: "Users enter information once — the service retrieves data from other systems rather than re-asking"; "Decisions are made at the point of highest information — not after unnecessary delays"; "Every handoff must add value — no step exists just to be a step"; "The process should be auditable at every stage." Write these prominently and keep them visible while designing the To-Be.',
      },
      {
        title: 'Design the To-Be',
        duration: '30 mins',
        description:
          'Using the same swim-lane structure, design the ideal future process. Apply each guiding principle as you work: "Where can we eliminate a step? Where can we automate a decision? Where can we remove a handoff?" Challenge every inherited step: "Why does this step exist? Does it need to exist in the future state?" Keep the To-Be realistic — it should be achievable — but aspirational. If something is technically hard but the right answer, include it and flag it as requiring investment. Map the To-Be as thoroughly as the As-Is.',
      },
      {
        title: 'Identify the gap and requirements',
        duration: '15 mins',
        description:
          'Place the As-Is and To-Be maps side by side. Work through the To-Be step by step: "What needs to change to make this step possible?" Capture each change needed as a requirement. Categorise requirements by type: People (new roles, training, responsibilities), Process (new steps, removed steps, changed sequencing), Technology (new systems, integrations, automations), and Policy (rule changes, legal amendments, governance updates). These categories become your workstreams. Assign a priority to each requirement using MoSCoW or a similar method before the session ends.',
      },
    ],
    materials: ['Large paper or digital whiteboard (Miro, FigJam)', 'Swim-lane template (draw lanes before the session)', 'Sticky notes in multiple colours (one colour per: steps, decisions, systems, pain points)', 'Markers', 'Camera to photograph the As-Is before erasing or moving to To-Be'],
    tips: [
      'Do not design the To-Be until the As-Is is properly mapped and validated by the people who do the work. The desire to jump ahead to solutions is strong — resist it. An inaccurate As-Is produces an irrelevant To-Be.',
      'Invite the people who actually perform the work, not just their managers. Managers often have an accurate picture of the official process but a very inaccurate picture of what actually happens. The people on the front line know where the workarounds and pain points really are.',
      'Use different coloured sticky notes: one colour for process steps, one for systems, one for decision points, one for pain points. This makes the map easier to read and the pain points immediately visible.',
      'The gap between As-Is and To-Be is your requirements list. Frame each gap as a requirement: "As-Is: information is entered manually by staff. To-Be: information is pre-populated from the existing customer record. Requirement: integration between the application form and the CRM system."',
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
          'Map the user journey across the top of the board in chronological order — these are the high-level user activities. Use a distinct colour for activity sticky notes (e.g. blue). Example activities for a digital service: Register → Browse/Search → Apply → Track Application → Receive Decision → Manage Ongoing. Each activity should be a verb phrase describing what the user is doing — not what the system does. Once you have a draft backbone, check it tells a coherent story from left to right. If it doesn\'t flow logically, rebuild it before adding detail — the backbone is the structural spine of everything below.',
      },
      {
        title: 'Break into tasks',
        duration: '20 mins',
        description:
          'Below each activity, add the specific tasks the user performs to accomplish that activity. Use a second colour for task sticky notes (e.g. yellow). Tasks are more granular than activities — where the activity is "Apply," the tasks might be: "Check eligibility," "Gather required documents," "Complete application form," "Upload supporting evidence," "Review and submit." Stay in the user\'s perspective — these are things the user does, not system functions.',
      },
      {
        title: 'Add user stories',
        duration: '20 mins',
        description:
          'Below each task, add the individual user stories that enable it. Use a third colour for stories (e.g. pink or white). Write each story in the format: "As a [user type], I want to [specific action] so that [outcome or reason]." Example: "As a first-time applicant, I want to check my eligibility before starting the full application so that I don\'t waste time on a form I\'ll be rejected for." Stories should be small enough to be delivered in a single sprint. If a story is too large to complete in a sprint, split it.',
      },
      {
        title: 'Prioritise into releases',
        duration: '20 mins',
        description:
          'Draw horizontal swim lanes across the map with tape or a marker. Label lanes: Release 1 (MVP), Release 2, Release 3, Backlog. For each story, discuss: "Is this essential for the service to work at all? Or can users get some value without it?" The stories in the top slice across all activities form the "walking skeleton" — the thinnest possible version of the end-to-end experience that still provides real value. Place all remaining stories in Release 2 or further. Challenge the MVP lane: "If we only shipped the walking skeleton, would it be genuinely useful to a real user?"',
      },
      {
        title: 'Identify gaps',
        duration: '10 mins',
        description:
          'Walk the map from left to right and ask: "What\'s missing? What would a user need to do that we haven\'t captured? What error states haven\'t we covered? What edge cases are lurking?" Mark gaps with a specific marker or "?" sticky notes. Also ask: "What have we assumed here that we haven\'t validated with users?" These gaps and assumptions become your research backlog.',
      },
    ],
    materials: ['Large wall space (at least 2m wide)', 'Sticky notes in 3 distinct colours — one per level: activities / tasks / stories', 'Markers', 'Tape or string to mark horizontal release swim lanes'],
    tips: [
      'The map should tell a coherent story from left to right — if a user walked through the backbone activities in order, they should be able to complete their goal. If the backbone doesn\'t feel like a journey, rebuild it before adding the detail below.',
      'The walking skeleton is the most valuable concept in user story mapping. The MVP should be the thinnest possible version of the end-to-end experience that provides real value — not a collection of features from one part of the journey.',
      'The value is in building this together — not in the output document. The conversations surface assumptions, gaps, and competing priorities. Protect time for discussion, not just sticky-note placement.',
      'Digital tools like Miro or StoriesOnBoard work well for distributed teams. If working digitally, use frames or zones rather than tape for the swim lanes, and enforce the colour coding consistently.',
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
          'Write the business goal in the centre of the board. It must be measurable and specific — not an output ("launch a new portal") but an outcome ("reduce avoidable contact by 30% within 12 months" or "increase first-time resolution rate from 60% to 80% by March"). If the group can\'t agree on a measurable goal, that disagreement is the most important thing to resolve before proceeding. An impact map built around an unmeasurable goal is decorative, not strategic.',
      },
      {
        title: 'Identify actors (Who)',
        duration: '10 mins',
        description:
          'Who are the people whose behaviour needs to change to achieve the goal? Add each actor as a branch from the central goal. Include: primary users (those directly using the service), secondary users (caseworkers, support staff), organisational stakeholders (managers, policy owners), and sometimes "negative actors" (people whose behaviour could undermine the goal, such as fraudsters or overwhelmed caseworkers cutting corners). Every actor you identify should have a direct relationship to the goal — if someone\'s behaviour change wouldn\'t affect the goal, they may not be an actor.',
      },
      {
        title: 'Define impacts (How)',
        duration: '20 mins',
        description:
          'For each actor, ask: "What behaviour change from this person would move us toward the goal?" These are the impacts — observable, measurable changes in what people do. For a caseworker actor, impacts might be: "Caseworkers resolve cases on first contact," "Caseworkers accurately apply eligibility rules without escalation," "Caseworkers update case notes in real time." Impacts must describe changed behaviour, not activities ("run training" is an activity, not an impact — "staff accurately complete assessments without supervision" is the impact that training might produce).',
      },
      {
        title: 'List deliverables (What)',
        duration: '20 mins',
        description:
          'For each impact, add branches for the deliverables — things you could build, change, or create to enable that behaviour change. Deliverables are features, content, processes, training materials, or policy changes. For the impact "applicants self-serve eligibility checks without calling," deliverables might include: "Eligibility checker on GOV.UK," "Clear eligibility criteria in plain language," "Automated eligibility decision via API." Not all deliverables are digital — some are process or policy changes.',
      },
      {
        title: 'Prioritise paths',
        duration: '15 mins',
        description:
          'Look at the full map: Goal → Actors → Impacts → Deliverables. Identify the paths most likely to achieve the goal with the least investment. Use dot voting or discussion. A high-priority path is one where: the actor is central to achieving the goal, the impact is significant and measurable, and the deliverable is feasible with available resources. Mark the priority paths and use them to focus your roadmap. Question everything not on a priority path: "If this deliverable doesn\'t connect to the goal, why are we building it?"',
      },
    ],
    materials: ['Large paper or digital whiteboard — this map grows wide and deep', 'Sticky notes', 'Markers', 'Optional: pre-drawn tree structure on the board'],
    tips: [
      'The "Why" must be a measurable outcome. If the team can\'t agree on a goal, running an OKR Setting session before Impact Mapping will help establish the foundation this technique requires.',
      'If a deliverable in "What" doesn\'t connect to any impact → actor → goal path, challenge the team: "Why are we building this? What goal does it serve? What behaviour does it change?" If they can\'t answer, it probably shouldn\'t be built.',
      'Impact maps are lightweight business cases — they make the logic of investment explicit and traceable. Use them in governance conversations: "We are investing in X because it will enable Y behaviour change in Z actor, which we expect to move this measurable goal by W."',
      'The map is a living document. Revisit it as you learn — if a deliverable doesn\'t produce the expected impact, that\'s signal to either change the deliverable or reconsider the assumed connection to the goal.',
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
          'Ensure all requirements are visible, numbered, and clearly written — one requirement per card or row. Give everyone 5 minutes to read through them in silence. Allow brief clarification questions: "What does requirement 7 mean?" — but not debates about priority yet. If any requirements are ambiguous, rewrite them before scoring. Scoring ambiguous requirements produces meaningless data.',
      },
      {
        title: 'Apply an initial filter',
        duration: '10 mins',
        description:
          'Before scoring, do a quick sweep: are any requirements clearly out of scope, exact duplicates, or too vague to assess meaningfully? Remove or consolidate these by consensus — they will waste everyone\'s time in the scoring phase. Don\'t use this step to quietly remove requirements someone dislikes — be transparent. If someone objects to removing a requirement, keep it in.',
      },
      {
        title: 'Score against agreed criteria',
        duration: '20 mins',
        description:
          'Agree 3–4 scoring criteria before anyone scores anything. Common criteria: user value (how much does this improve the user\'s experience?), strategic alignment (how directly does this support our stated objectives?), technical feasibility (how achievable is this within our constraints?), urgency (how time-sensitive is this?). Write definitions for each criterion and each score level (e.g. 1 = low, 3 = medium, 5 = high). Each participant then scores every requirement against every criterion independently and in silence. Scoring must happen before results are shared — otherwise early scores anchor everyone else\'s.',
      },
      {
        title: 'Aggregate and present scores',
        duration: '10 mins',
        description:
          'Calculate average scores across participants for each criterion. Multiply by any agreed weighting. Sum across criteria for a total score per requirement. Display results visually — a spreadsheet sorted by total score works well, or a heat map if you have many requirements. Highlight areas of high agreement (small spread of scores) and high disagreement (large spread). These outliers are where the discussion is most needed.',
      },
      {
        title: 'Discuss and adjust',
        duration: '20 mins',
        description:
          'Focus the discussion on disagreements: "Requirement 4 was scored 5 by some people and 1 by others — why?" Often, large score differences reveal different assumptions about what the requirement means, different views of who the user is, or different information about constraints. Resolve the disagreement by surfacing the underlying assumption, not by splitting the difference. After discussion, allow participants to revise their scores and recalculate. Repeat until the group has consensus on the top tier of requirements.',
      },
      {
        title: 'Document and agree',
        duration: '5 mins',
        description:
          'Record the agreed priority order and the rationale for the key decisions. Get explicit sign-off from all stakeholders present — their signature or a written agreement that they accept the prioritisation. Distribute within 24 hours. The signed record protects the team from future scope creep and "I thought X was a priority" conversations.',
      },
    ],
    materials: ['Scoring matrix — a spreadsheet is strongly recommended for easy calculation; alternatively a large pre-formatted paper template', 'Pre-agreed list of requirements (numbered)', 'Sticky notes for discussion notes'],
    tips: [
      'Define scoring criteria and their meaning before anyone scores anything. If "user value = 5" means different things to different people, the scores are incomparable. Spend the time upfront to align on definitions.',
      'Disagreement in scores is the most valuable output of this exercise. A requirement where everyone agrees on the score tells you less than one where scores range from 1 to 5. Prioritise those conversations.',
      'Consider using MoSCoW alongside scoring — the scoring gives you a relative priority order, while MoSCoW gives you a categorical classification. They complement each other well and give you two angles on the same question.',
      'Be transparent about who is scoring and how scores are weighted. If one senior stakeholder\'s score counts for more than others\', say so explicitly. Hidden weighting creates distrust.',
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
          'Deliver the framing carefully — the fictional premise is the whole technique. Say something like: "I want you to travel forward in time. It is [date 12–18 months from now] and this project has failed. Not a little — catastrophically. The programme was cancelled. The outcome was never achieved. We are being asked what went wrong." Pause after delivering this to let it land. Then: "Your job in the next 10 minutes is to figure out: what happened? What were the reasons the project failed?" The key is to speak about failure as if it has already happened — past tense throughout.',
      },
      {
        title: 'Individual writing',
        duration: '10 mins',
        description:
          'Each person silently writes down every reason the project could have failed — one reason per sticky note. Encourage specificity: not "stakeholder issues" but "the minister changed and the new minister didn\'t support the approach." Not "technical problems" but "the legacy system couldn\'t be integrated in time and the team discovered this six months in." Push for honesty: "This is not the time for optimism. Write the things you\'re actually worried about but haven\'t said out loud yet." Aim for 5–10 reasons per person.',
      },
      {
        title: 'Share and capture',
        duration: '15 mins',
        description:
          'Go around the group, each person sharing one failure reason at a time in round-robin fashion until all reasons are captured on the board. No discussion, debate, or reassurance during this phase — just capture. If someone shares something surprising or uncomfortable, acknowledge it and move on: "Thank you — important to have that on the board." Continue until everyone\'s notes are up.',
      },
      {
        title: 'Cluster themes',
        duration: '10 mins',
        description:
          'Group related failure reasons into themes. Common clusters in public sector projects: stakeholder and political risks, resource and capability constraints, unclear or shifting requirements, technical and integration risks, policy or legislative changes, team structure and accountability, dependency on other projects or organisations, user adoption and change management. Name each cluster clearly.',
      },
      {
        title: 'Prioritise and mitigate',
        duration: '15 mins',
        description:
          'Give each participant 3–5 dot stickers. Ask them to vote on the failure reasons that are most likely to occur and/or most dangerous if they do. Focus the discussion on the top-voted items: "What would we need to do now to prevent this from happening?" For each, agree a specific mitigation action with an owner and a deadline. A premortem without mitigations is just a structured worry session.',
      },
    ],
    materials: ['Sticky notes', 'Markers', 'Whiteboard', 'Dot stickers'],
    tips: [
      'The fictional framing is the entire technique — it removes the social pressure to be a loyal team player and unlocks the honest concerns people have been sitting on. If you run it as "what might go wrong?" instead of "what went wrong?", you get much safer, less useful answers.',
      'The things that come up in this session are things people already knew but hadn\'t felt safe saying. Treat everything seriously, even if it feels uncomfortable. The discomfort is the point.',
      'Premortem outputs make excellent risk registers. Record them formally and review them at each project milestone. Risks that were identified in a premortem and then ignored are a leadership failure, not a team one.',
      'If participants are hesitant to share, start by sharing one of your own failure reasons — something real and slightly uncomfortable. It sets the permission level for the rest of the group.',
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
          'Ask: "Why does this team exist? What are we collectively here to achieve?" Give everyone 2 minutes to write their answer on a sticky note, then share and synthesise. Aim for a single, clear team mission sentence that everyone can genuinely sign up to — not a committee-written paragraph that says everything and means nothing. A good team mission is specific enough to say no to things that fall outside it. If you can\'t agree on the purpose, that disagreement is the most important thing to resolve before the project starts.',
      },
      {
        title: 'Working norms',
        duration: '20 mins',
        description:
          'Agree explicitly how the team will work together day-to-day. Cover these areas: Communication channels — "We use Slack for quick questions, email for formal decisions, Teams for meetings. We don\'t use WhatsApp for work." Meeting cadence — "Weekly team standup, fortnightly retrospective, monthly stakeholder review." Response time expectations — "We aim to respond to messages within 4 working hours during core hours (10am–4pm)." Working hours — "Core hours are 10–4; outside that, team members may work different patterns. No expectation to respond out of hours unless flagged as urgent." Decision-making — "Small decisions: whoever is closest to the work decides. Large decisions: team lead signs off. Cross-team decisions: escalate to the steering group."',
      },
      {
        title: 'Roles and responsibilities',
        duration: '15 mins',
        description:
          'Map out who is responsible for what. Use a simple responsibility table or RACI (Responsible, Accountable, Consulted, Informed) format. Key areas to cover: delivering work, making decisions, managing stakeholders, managing risk, communicating externally, onboarding new team members, running ceremonies. Actively look for gaps (things nobody owns) and overlaps (things two people think they both own — which often means nobody does). Name them explicitly: "This is a gap — who takes this on?"',
      },
      {
        title: 'How we handle disagreement',
        duration: '10 mins',
        description:
          'Agree a clear process before you need it. Prompt the group: "What should happen when two team members disagree about how to proceed? When does a disagreement become an escalation?" Agree: How do we raise concerns? (Directly with the person first, then the team lead.) What\'s the escalation path if we can\'t resolve it? (Name the person.) What signals that something is serious enough to stop work on until resolved? Also agree: "Is it OK to disagree openly in front of stakeholders?" Having these answers agreed in advance removes the awkwardness when the situation arises.',
      },
      {
        title: 'How we measure success',
        duration: '10 mins',
        description:
          'Agree what "good" looks like for this team — both in terms of outputs and ways of working. Ask: "In 6 months, how will we know if we\'ve been a successful team? What would need to be true?" Capture both outcome-based measures (what we will have delivered) and team health measures (how we\'ll feel about working together). Agree how you\'ll track these — a monthly team health check, a shared dashboard, or a quarterly review.',
      },
      {
        title: 'Commit',
        duration: '5 mins',
        description:
          'Get visible agreement from everyone present. Read the charter back aloud and ask: "Is there anything here you can\'t commit to? Anything important that\'s missing?" Then get explicit sign-off — signatures, thumbs up, or a verbal "I commit." Document the charter, share it with the team, and agree a date to review it (typically 6–8 weeks in). A charter that lives in a Confluence page nobody reads isn\'t a charter — schedule the review now.',
      },
    ],
    materials: ['Team Charter template — paper or digital (prepare sections in advance)', 'Sticky notes for individual reflection before discussion', 'Pens'],
    tips: [
      'Revisit the charter at 6–8 weeks and then quarterly. Teams and contexts change — a charter written on day one often needs updating by month three. Build the review into your team calendar now.',
      'The "how we handle disagreement" and "working norms" sections are consistently the most valuable and most rushed. Protect time for them. The discomfort of discussing conflict processes before there is conflict is infinitely less painful than improvising when you\'re in one.',
      'For cross-organisational teams, explicitly address cultural differences in working practices: different organisations may have very different norms around escalation, response times, and decision-making authority. Surfacing these differences early prevents significant friction later.',
      'Prepare a draft version of some sections before the session, based on what you already know about the team. Having a starting point to react to is faster than building from scratch — but make sure participants know they can and should challenge the draft.',
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
          'Brainstorm all the significant decisions this project will need to make. Write each on a sticky note. Categories to prompt thinking: Scope and requirements decisions (what we build and don\'t build), Technical and architectural decisions (how we build it), Delivery and resource decisions (who does what, when), Stakeholder and governance decisions (who approves what), Policy and legal decisions (what\'s permissible). Transfer the final list into a table — one row per decision. A typical project has 10–20 significant decisions worth DACI-ing.',
      },
      {
        title: 'Explain the DACI roles',
        duration: '5 mins',
        description:
          'Write the four roles on the board with clear definitions: Driver (D) = the person who owns the process of reaching this decision. They organise the inputs, run the discussion, and ensure a decision is made on time. There is exactly one Driver. Approver (A) = the person who makes the final call and is accountable for it. There is exactly one Approver per decision — if there are two, neither is truly accountable. Contributor (C) = people whose expertise or perspective must inform the decision. They input but do not decide. Informed (I) = people who need to know the outcome but are not involved in making it. Example: For a technical architecture decision — Driver: Tech Lead; Approver: Programme Director; Contributors: Security team, Data team; Informed: Product Owner, BA.',
      },
      {
        title: 'Assign roles',
        duration: '20 mins',
        description:
          'Work through each decision row, assigning roles. For each decision ask: Who has the authority to make this call? (That\'s the Approver.) Who is best placed to make sure we get there? (That\'s the Driver.) Whose input do we need? (Contributors.) Who needs to know? (Informed.) Discuss disagreements openly — they nearly always reveal an unresolved governance question. If two people both think they should be the Approver for the same decision, that conversation needs to happen now, not during a delivery crisis.',
      },
      {
        title: 'Sense-check',
        duration: '10 mins',
        description:
          'Review the full DACI table. Ask: "Is any single person the Approver for too many decisions? That\'s a bottleneck risk." "Are any Approvers very senior people who are unlikely to be available when needed? Consider delegating." "Does every decision have a named Driver — if not, it probably won\'t get made." "Are there any decisions where the Approver is someone outside this team — how will we engage them?" Flag any concerns and resolve them before the session ends.',
      },
      {
        title: 'Document and share',
        duration: '5 mins',
        description:
          'Record the DACI table in a shared document (Confluence, SharePoint, or similar) where the whole team can access it. Send the link to everyone on the table immediately after the session. Agree how you\'ll use it: "When a decision needs to be made, the Driver checks the table and follows the process. If a decision is made that doesn\'t follow the DACI, we\'ll flag it." Review and update the table at each major project milestone.',
      },
    ],
    materials: ['DACI table — prepare a spreadsheet in advance with columns: Decision / Driver / Approver / Contributors / Informed', 'Printed or digital list of anticipated decisions (if prepared in advance)', 'Sticky notes for brainstorming decisions'],
    tips: [
      'There must be exactly one Approver per decision. Multiple Approvers means no one is truly accountable — which typically means decisions get deferred, reversed, or made by default rather than intent.',
      'If you cannot agree who the Approver is for a significant decision, that is a governance problem that must be resolved by senior leadership before the project proceeds. Do not skip past this disagreement — it will manifest as a delivery crisis later.',
      'Review and update the DACI table at each major milestone — the right person to approve a decision at alpha may not be the right person at beta. Governance structures evolve as projects scale.',
      'DACI doesn\'t make decisions for you — it clarifies who makes them and how. The team still needs to do the analytical work and have the conversations. Think of DACI as the decision-making process architecture, not a substitute for judgement.',
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
          'Display the wider organisational objectives or strategic priorities for the quarter or year. Your team\'s OKRs should visibly contribute to these. Ask: "Which of these organisational priorities are most relevant to what our team does? How will our work move these forward?" If organisational priorities are unclear or unavailable, this is a problem worth naming: "We are setting OKRs without knowing what the organisation is prioritising — we need to get that clarity before we can align confidently." Don\'t let OKR-setting become an isolated exercise that produces goals nobody cares about.',
      },
      {
        title: 'Brainstorm objectives',
        duration: '15 mins',
        description:
          'Ask each person to write 3–5 answers to: "What are the most important things we want to achieve this quarter?" Give 5 minutes of individual thinking, then share and cluster. From the clusters, agree 3–5 Objectives for the quarter. Objectives must be qualitative, inspiring, and memorable — they describe a desired state or outcome, not a deliverable. Good: "Make it easy for any citizen to understand their benefit eligibility without needing specialist help." Not good: "Improve the service" (too vague) or "Launch the eligibility checker" (a deliverable, not an outcome).',
      },
      {
        title: 'Define key results',
        duration: '25 mins',
        description:
          'For each Objective, write 2–4 Key Results. Each KR must be: measurable (has a specific number), specific (unambiguous), achievable (within the team\'s sphere of influence), and clearly tied to the Objective. KRs are outcomes, not tasks. For the objective "Make it easy for citizens to understand their eligibility without specialist help," example KRs might be: "80% of users who start the eligibility checker complete it without calling the helpline," "Helpline calls about eligibility reduce by 30% within 3 months of launch," "Average task completion time on the eligibility checker is under 4 minutes." If you\'re struggling to write a measurable KR, it may mean your Objective is too vague — rewrite the Objective first.',
      },
      {
        title: 'Sense-check outcomes vs activities',
        duration: '10 mins',
        description:
          'Review every KR and apply this test: "Is this something we do, or something that happens as a result of what we do?" "Run 3 workshops" is an activity — it describes an action, not an outcome. "85% of staff can accurately complete the process without reference to the guidance" is an outcome — it describes a change in the world. Convert any activities masquerading as KRs. If you can\'t convert an activity into an outcome, ask: "What are we hoping this activity will achieve? Can we measure that instead?"',
      },
      {
        title: 'Commit',
        duration: '10 mins',
        description:
          'Present the draft OKRs to the wider team. Allow 5 minutes for questions or challenges. Then get explicit commitment: "Is there any OKR here that you don\'t believe in, or that you think is beyond our control?" Resolve concerns before finalising. Agree: how often will we review progress? (Monthly check-ins are standard.) Who is accountable for each OKR? Where will they be tracked and made visible? Schedule the first progress review now — OKRs without a review rhythm become wallpaper.',
      },
    ],
    materials: ['OKR template — paper or digital; one sheet per Objective works well', 'Reference to organisational/programme priorities (print this out or display it on screen)', 'Timer'],
    tips: [
      '70% attainment of a well-set OKR is considered success in the OKR framework. If you\'re hitting 100% every quarter, your Key Results aren\'t ambitious enough. If you\'re hitting 20%, they\'re not realistic. Calibrate accordingly.',
      'OKRs work best when the team has genuine ownership over the outcomes. Avoid cascading tasks dressed as OKRs from above — if someone is telling the team both the Objective and the Key Results, that\'s target-setting, not OKR-setting.',
      'In public sector contexts, quantitative Key Results can be hard to define — especially if your measurement infrastructure is immature. Proxy measures often work well: survey confidence scores, call volume changes, processing time reductions, or first-contact resolution rates.',
      'Separate OKR-setting from performance review. OKRs are about team direction and learning, not individual appraisal. If people are afraid that missing an OKR will affect their appraisal, they will set safe, unambitious KRs.',
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
          'Write clearly what is being built, changed, or delivered — these are the Outputs. An output is the direct result of the project\'s activity: "A new digital application service," "A revised caseworker training programme," "A policy update to simplify eligibility criteria." Outputs are tangible and deliverable by the project. Note: outputs are not benefits — a new system is an output; faster processing times as a result of that system is a benefit.',
      },
      {
        title: 'Identify enabling changes',
        duration: '15 mins',
        description:
          'What changes must happen — in behaviour, process, or systems — for the outputs to deliver any value? These are Enabling Changes. They are preconditions for benefits, not benefits themselves. Examples: "Staff trained to use the new system," "Business processes updated to reflect the new workflow," "Data quality improved to feed the new system accurately." If an enabling change doesn\'t happen, the output delivers no value. Map enabling changes as the second column, connected to outputs.',
      },
      {
        title: 'Map business changes',
        duration: '15 mins',
        description:
          'What organisational or operational improvements result from those enabling changes taking effect? These are Business Changes — improvements in how the organisation operates. Examples: "Caseworkers can process 20% more cases per day," "Applicants no longer need to call to check their status," "Duplicate data entry is eliminated." Business changes sit between enabling changes and benefits in the map, and describe the operational shift that produces measurable value.',
      },
      {
        title: 'Identify benefits',
        duration: '15 mins',
        description:
          'What measurable improvements result from the business changes? These are the Benefits — the value the investment delivers. Categorise each benefit: Cashable financial benefits (cost savings that can be removed from a budget — "£2M saved in reduced staffing costs"); Non-cashable financial benefits (efficiency gains that don\'t translate directly into budget reduction — "staff time freed to do higher-value work"); Quality/service benefits ("reduction in complaint rates," "improvement in user satisfaction scores"); Strategic/policy benefits ("programme meets its legislative delivery obligation"). In public sector contexts, align benefit categories with HM Treasury Green Book terminology where possible.',
      },
      {
        title: 'Connect the map',
        duration: '15 mins',
        description:
          'Draw connecting arrows: Outputs → Enabling Changes → Business Changes → Benefits. Label each arrow with the assumption it represents: "IF this output is delivered, AND this enabling change occurs, THEN this business change will result." Identify critical assumptions — particularly any where the connection is weak or uncertain. Mark these explicitly. A benefits map with honest uncertainty markers is far more valuable than one that presents every connection as certain.',
      },
      {
        title: 'Agree measures and owners',
        duration: '10 mins',
        description:
          'For each benefit, agree: How will we measure it? (What data, what baseline, what target, by when?) Who owns it? (The person responsible for ensuring the benefit is realised — often someone outside the delivery team.) Benefits that lack a measure and an owner are aspirations, not commitments. Capture this in a Benefits Register with columns: Benefit / Category / Measure / Baseline / Target / Owner / Review Date.',
      },
    ],
    materials: ['Benefits map template — large paper or digital (prepare the column structure: Outputs | Enabling Changes | Business Changes | Benefits)', 'Sticky notes', 'Markers', 'Benefits Register template (spreadsheet)'],
    tips: [
      'Benefits must be measurable — "Better user experience" is not a benefit. "20% reduction in users contacting the helpline within 6 months of launch" is. If you cannot define how you would measure a benefit, it is either not a benefit or not specific enough to claim.',
      'In public sector, benefits often need to align with HM Treasury Green Book categories for business case purposes: Monetised benefits (cashable and non-cashable), Non-monetised benefits (wider social, economic, or environmental value). Speak to your finance team about what format they expect.',
      'Involve the people who will be responsible for realising benefits — often operational leads or business owners — not just the project delivery team. Benefits are realised after the project closes; if only delivery people own them, nobody will be accountable at that point.',
      'Revisit the benefits map at key project milestones. As understanding grows, assumed connections may prove weaker than expected, and new benefit pathways may emerge. A static benefits map is a governance document; a living one is a management tool.',
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
          'Define clearly what is being assessed: which specific policy, service, change, or decision? What is within scope and what is out? Who is affected by it — both directly (users of the service) and indirectly (staff, communities, third parties)? Write the scope statement at the top of your EQIA template and agree it before proceeding. An EQIA with an unclear scope produces unfocused and unreliable analysis.',
      },
      {
        title: 'Review protected characteristics',
        duration: '10 mins',
        description:
          'Walk through all 9 protected characteristics under the Equality Act 2010, ensuring everyone in the room understands each one: Age (applies to people of all ages — not just older people), Disability (includes physical, sensory, cognitive, and mental health conditions — remember the broad legal definition under the Equality Act), Gender reassignment, Marriage and civil partnership (note: this characteristic has a narrower scope in PSED than the others), Pregnancy and maternity, Race (includes ethnicity, nationality, and colour), Religion or belief (includes lack of religion), Sex, Sexual orientation. Note that some intersections between characteristics may produce specific impacts not visible when examining each characteristic separately.',
      },
      {
        title: 'Assess impact',
        duration: '30 mins',
        description:
          'Work through each characteristic systematically. For each: "Are people with this characteristic affected differently by this policy/service/change compared to others?" The impact may be positive (it disproportionately benefits this group), negative (it disadvantages this group), or neutral (no differential impact). For each impact, ask: "What evidence do we have?" — cite specific data, research, consultation outcomes, or complaint patterns. Where evidence is absent, note it explicitly as a gap. Also consider cumulative impact: does someone who is, for example, both disabled and elderly face compounded disadvantage?',
      },
      {
        title: 'Identify mitigations and enhancements',
        duration: '15 mins',
        description:
          'For any negative or disproportionate impacts identified: "What can we do to remove or reduce this impact?" Agree specific mitigations with owners and timelines. For any positive impacts or opportunities to advance equality beyond mere compliance: "How can we strengthen this?" Under the PSED, public bodies are required to have due regard not just to avoiding harm but to advancing equality of opportunity and fostering good relations. Identify at least one proactive enhancement, not just harm reduction.',
      },
      {
        title: 'Document and assign',
        duration: '10 mins',
        description:
          'Complete the formal EQIA document with: a summary of impacts found for each characteristic; evidence cited (or noted as absent); agreed mitigations with owner and deadline; agreed enhancements; evidence gaps and plans to address them. Agree a review date — typically aligned with the next significant change to the service or policy, or at least annually. Assign someone to own the EQIA as a living document.',
      },
    ],
    materials: ['EQIA template (use your organisation\'s standard template if one exists)', 'List of 9 protected characteristics — printed for everyone in the room', 'Any relevant data, research, complaints data, or consultation outputs', 'Equality Act 2010 reference (or your organisation\'s equality guidance)'],
    tips: [
      'Involve people with lived experience of the relevant characteristics wherever possible — as co-facilitators, reviewers, or through structured consultation. A panel with no lived experience will miss impacts that are invisible to those without it.',
      'Evidence gaps are important findings — they are not a reason to skip the characteristic. Explicitly note: "We do not have data on the impact on [characteristic]. We will gather this by [method] by [date]." An EQIA with honest evidence gaps is more credible than one that asserts impact without evidence.',
      'An EQIA is a living document, not a one-time sign-off. Review it whenever the service or policy changes materially, and at least annually for ongoing services. An outdated EQIA may not fulfil the Public Sector Equality Duty.',
      'Consult your organisation\'s legal or equality team before finalising — they can advise on whether the assessment meets the standard required for your context, and what level of documentation governance boards expect.',
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
          'Agree a clear, specific focal question to anchor the session and prevent the map from sprawling. Write it at the top of the board where it is visible throughout. Good focal questions are specific enough to focus the mapping but broad enough to capture the system: "Who is involved in supporting a family in housing crisis from the point of referral to stable housing?" or "What organisations and policies shape the experience of a small business applying for a grant?" Test your focal question: "Does this tell us what should and shouldn\'t go on the map?" If not, refine it.',
      },
      {
        title: 'Map the actors',
        duration: '20 mins',
        description:
          'Brainstorm all the organisations, teams, programmes, and user groups involved in or affected by the focal challenge. Write each actor on a separate sticky note or create a node on the digital board. Use different shapes or colours for different actor types: government departments, local authorities, third sector organisations, private providers, and user groups. Don\'t pre-filter — include actors even if you\'re not sure how central they are. Place actors on the board loosely — relationships will determine final positioning.',
      },
      {
        title: 'Map the relationships',
        duration: '20 mins',
        description:
          'Draw connections between actors and label the nature of each relationship. Use directed arrows (→) to show direction. Label each connection with its relationship type: funds / commissions / regulates / delivers to / refers to / advises / depends on / competes with / duplicates. Don\'t try to map every possible relationship — focus on the ones that are relevant to the focal question. Where relationships are disputed or unclear, mark them with a "?" and discuss.',
      },
      {
        title: 'Identify flows',
        duration: '15 mins',
        description:
          'Look at the connections and ask: "What actually flows along each of these lines?" Flows may include: money (funding, grants, payments), data (referrals, records, eligibility information), decisions (approvals, assessments, interventions), physical goods (materials, equipment), people (referrals, transfers), or influence (policy guidance, political pressure). Mark each flow on the relevant connection. Look for flows that should exist but don\'t — these are often where the system is failing.',
      },
      {
        title: 'Identify friction and gaps',
        duration: '15 mins',
        description:
          'With the full map visible, mark the dysfunctions: Duplications (two actors doing the same thing); Gaps (something needed but nobody providing it); Broken flows (a connection that should work but doesn\'t — a referral pathway that doesn\'t function, data that doesn\'t reach the right person); Power imbalances (an actor with disproportionate influence that blocks or shapes other actors\' behaviour); Missing connections (actors who should be working together but aren\'t). Use red markers or red sticky notes. These are the findings that matter most.',
      },
      {
        title: 'Agree intervention points',
        duration: '15 mins',
        description:
          'Given everything on the map, ask: "Where could a change or intervention have the most leverage on the system as a whole?" Look for: high-connectivity nodes (actors with many relationships — changes here affect many others); broken flows that, if fixed, would remove significant friction; gaps that a new actor or programme could fill. Then ask: "Of these, which are within our team\'s sphere of influence? What would require others to change?" Be realistic. Agree 2–3 priority intervention points to investigate further.',
      },
    ],
    materials: ['Very large paper or digital whiteboard (Miro is particularly well-suited to this format)', 'Sticky notes in multiple colours (one per actor type)', 'Markers', 'String or drawn lines for connections (physical); connector arrows (digital)'],
    tips: [
      'Involve people from across the system — a map built by one organisation\'s team will reflect that organisation\'s perspective and miss the rest. The map is only as complete as the diversity of knowledge in the room.',
      'The most valuable findings are often the gaps and missing connections — the things that should be on the map but aren\'t. If the room goes quiet when you ask "who fills this gap," that silence is significant.',
      'Keep the focal question visible and return to it if the session starts to sprawl. System mapping has a natural tendency to expand. Ask: "Is this actor/connection relevant to our focal question?" If not, deprioritise it.',
      'Whole system mapping is a starting point, not an ending point. The map should generate a set of hypotheses about where interventions would be most effective — these hypotheses then need to be tested through further engagement with actors across the system.',
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

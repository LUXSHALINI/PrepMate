"use client"

import { useState, useEffect } from "react"

// UI Components with teal, gray, white color scheme
const Button = ({
  children,
  onClick,
  disabled = false,
  variant = "default",
  className = "",
  size = "default",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-teal-600 text-white hover:bg-teal-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    ghost: "hover:bg-gray-100 text-gray-900",
    destructive: "bg-gray-600 text-white hover:bg-gray-700",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-8 text-base",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

const Card = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-xl font-semibold leading-none tracking-tight text-gray-900 ${className}`} {...props}>
    {children}
  </h3>
)

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

const Progress = ({ value = 0, className = "", ...props }) => (
  <div className={`relative h-2 w-full overflow-hidden rounded-full bg-gray-200 ${className}`} {...props}>
    <div className="h-full bg-teal-600 transition-all duration-300 ease-in-out" style={{ width: `${value || 0}%` }} />
  </div>
)

const Badge = ({ children, className = "", variant = "default", ...props }) => {
  const variants = {
    default: "bg-teal-100 text-teal-800",
    secondary: "bg-gray-100 text-gray-800",
    success: "bg-teal-100 text-teal-800",
    warning: "bg-gray-100 text-gray-700",
    error: "bg-gray-200 text-gray-800",
    outline: "border border-gray-300 text-gray-700 bg-white",
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}

// Icons
const CheckCircle = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const XCircle = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const Clock = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
)

const Trophy = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
    />
  </svg>
)

const Star = ({ className = "", filled = false }) => (
  <svg
    className={`w-5 h-5 ${className}`}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

const Brain = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
)

const Fire = ({ className = "" }) => (
  <svg className={`w-5 h-5 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
    />
  </svg>
)

// Enhanced Questions Data with more subjects and difficulty levels
const questionsData = {
  Mathematics: {
    Easy: [
      {
        id: 1,
        question: "What is 15 + 27?",
        options: ["42", "41", "43", "40"],
        correct: 0,
        explanation: "15 + 27 = 42",
      },
      { id: 2, question: "What is 8 × 7?", options: ["54", "56", "58", "52"], correct: 1, explanation: "8 × 7 = 56" },
      {
        id: 3,
        question: "What is 100 - 35?",
        options: ["65", "75", "55", "85"],
        correct: 0,
        explanation: "100 - 35 = 65",
      },
      { id: 4, question: "What is 36 ÷ 6?", options: ["5", "6", "7", "8"], correct: 1, explanation: "36 ÷ 6 = 6" },
      {
        id: 5,
        question: "What is 25% of 100?",
        options: ["20", "25", "30", "35"],
        correct: 1,
        explanation: "25% of 100 = 25",
      },
    ],
    Medium: [
      {
        id: 1,
        question: "What is the square root of 144?",
        options: ["11", "12", "13", "14"],
        correct: 1,
        explanation: "√144 = 12",
      },
      {
        id: 2,
        question: "What is 15² ?",
        options: ["225", "215", "235", "205"],
        correct: 0,
        explanation: "15² = 15 × 15 = 225",
      },
      {
        id: 3,
        question: "What is 3/4 as a decimal?",
        options: ["0.75", "0.25", "0.5", "0.8"],
        correct: 0,
        explanation: "3/4 = 0.75",
      },
      {
        id: 4,
        question: "What is 30% of 80?",
        options: ["20", "24", "26", "28"],
        correct: 1,
        explanation: "30% of 80 = 24",
      },
      {
        id: 5,
        question: "What is the area of a rectangle 8×5?",
        options: ["40", "35", "45", "30"],
        correct: 0,
        explanation: "Area = length × width = 8 × 5 = 40",
      },
    ],
    Hard: [
      {
        id: 1,
        question: "What is the value of x in 3x + 7 = 22?",
        options: ["5", "6", "4", "7"],
        correct: 0,
        explanation: "3x = 22 - 7 = 15, so x = 5",
      },
      {
        id: 2,
        question: "What is log₂(32)?",
        options: ["4", "5", "6", "3"],
        correct: 1,
        explanation: "2⁵ = 32, so log₂(32) = 5",
      },
      {
        id: 3,
        question: "What is the derivative of x³?",
        options: ["3x²", "x²", "3x", "x³"],
        correct: 0,
        explanation: "d/dx(x³) = 3x²",
      },
      {
        id: 4,
        question: "What is sin(90°)?",
        options: ["0", "1", "0.5", "-1"],
        correct: 1,
        explanation: "sin(90°) = 1",
      },
      {
        id: 5,
        question: "What is the sum of angles in a triangle?",
        options: ["180°", "360°", "90°", "270°"],
        correct: 0,
        explanation: "Sum of angles in any triangle is 180°",
      },
    ],
  },
  Science: {
    Easy: [
      {
        id: 1,
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correct: 0,
        explanation: "Water is H2O (2 hydrogen + 1 oxygen)",
      },
      {
        id: 2,
        question: "How many bones are in adult human body?",
        options: ["196", "206", "216", "186"],
        correct: 1,
        explanation: "Adult humans have 206 bones",
      },
      {
        id: 3,
        question: "What gas do plants absorb?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 2,
        explanation: "Plants absorb CO2 for photosynthesis",
      },
      {
        id: 4,
        question: "Which planet is closest to Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correct: 1,
        explanation: "Mercury is closest to the Sun",
      },
      {
        id: 5,
        question: "What is the hardest natural substance?",
        options: ["Gold", "Iron", "Diamond", "Silver"],
        correct: 2,
        explanation: "Diamond is the hardest natural substance",
      },
    ],
    Medium: [
      {
        id: 1,
        question: "What is the speed of light?",
        options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
        correct: 0,
        explanation: "Speed of light is approximately 300,000 km/s",
      },
      {
        id: 2,
        question: "What is the pH of pure water?",
        options: ["6", "7", "8", "9"],
        correct: 1,
        explanation: "Pure water has a pH of 7 (neutral)",
      },
      {
        id: 3,
        question: "Which blood type is universal donor?",
        options: ["A", "B", "AB", "O"],
        correct: 3,
        explanation: "Type O blood is the universal donor",
      },
      {
        id: 4,
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
        correct: 1,
        explanation: "Mitochondria produces energy for the cell",
      },
      {
        id: 5,
        question: "What is Newton's first law?",
        options: ["F=ma", "Inertia", "Action-Reaction", "Gravity"],
        correct: 1,
        explanation: "First law is about inertia - objects at rest stay at rest",
      },
    ],
    Hard: [
      {
        id: 1,
        question: "What is Avogadro's number?",
        options: ["6.022×10²³", "3.14×10²³", "9.81×10²³", "1.602×10²³"],
        correct: 0,
        explanation: "Avogadro's number is 6.022×10²³",
      },
      {
        id: 2,
        question: "What is the half-life of Carbon-14?",
        options: ["5,730 years", "1,000 years", "10,000 years", "50,000 years"],
        correct: 0,
        explanation: "Carbon-14 has a half-life of 5,730 years",
      },
      {
        id: 3,
        question: "What is Heisenberg's uncertainty principle?",
        options: ["E=mc²", "Position-momentum uncertainty", "Wave-particle duality", "Quantum entanglement"],
        correct: 1,
        explanation: "It states you cannot precisely know both position and momentum simultaneously",
      },
      {
        id: 4,
        question: "What is the molecular formula of glucose?",
        options: ["C6H12O6", "C12H22O11", "C2H6O", "CH4"],
        correct: 0,
        explanation: "Glucose is C6H12O6",
      },
      {
        id: 5,
        question: "What is the Chandrasekhar limit?",
        options: ["1.4 solar masses", "2.1 solar masses", "0.8 solar masses", "3.2 solar masses"],
        correct: 0,
        explanation: "Chandrasekhar limit is about 1.4 solar masses for white dwarf stars",
      },
    ],
  },
  English: {
    Easy: [
      {
        id: 1,
        question: "Which is a noun?",
        options: ["Run", "Beautiful", "House", "Quickly"],
        correct: 2,
        explanation: "A noun is a person, place, or thing. 'House' is a thing.",
      },
      {
        id: 2,
        question: "Past tense of 'go'?",
        options: ["Gone", "Going", "Went", "Goes"],
        correct: 2,
        explanation: "The past tense of 'go' is 'went'",
      },
      {
        id: 3,
        question: "Which sentence is correct?",
        options: ["She don't like", "She doesn't like", "She not like", "She no like"],
        correct: 1,
        explanation: "'She doesn't like' is grammatically correct",
      },
      {
        id: 4,
        question: "What type of word is 'quickly'?",
        options: ["Noun", "Verb", "Adjective", "Adverb"],
        correct: 3,
        explanation: "'Quickly' is an adverb describing how an action is performed",
      },
      {
        id: 5,
        question: "Plural of 'child'?",
        options: ["Childs", "Children", "Childes", "Childrens"],
        correct: 1,
        explanation: "The plural of 'child' is 'children'",
      },
    ],
    Medium: [
      {
        id: 1,
        question: "What is a metaphor?",
        options: ["Direct comparison", "Indirect comparison", "Exaggeration", "Sound repetition"],
        correct: 1,
        explanation: "A metaphor is an indirect comparison without using 'like' or 'as'",
      },
      {
        id: 2,
        question: "What is alliteration?",
        options: ["Rhyming words", "Repeated sounds", "Opposite meanings", "Similar meanings"],
        correct: 1,
        explanation: "Alliteration is the repetition of initial consonant sounds",
      },
      {
        id: 3,
        question: "What is a synonym for 'happy'?",
        options: ["Sad", "Joyful", "Angry", "Tired"],
        correct: 1,
        explanation: "'Joyful' is a synonym for 'happy'",
      },
      {
        id: 4,
        question: "What is passive voice?",
        options: ["Subject acts", "Object acts", "Subject receives action", "No action"],
        correct: 2,
        explanation: "In passive voice, the subject receives the action",
      },
      {
        id: 5,
        question: "What is onomatopoeia?",
        options: ["Sound words", "Color words", "Action words", "Feeling words"],
        correct: 0,
        explanation: "Onomatopoeia refers to words that imitate sounds",
      },
    ],
    Hard: [
      {
        id: 1,
        question: "What is chiasmus?",
        options: ["Reversed structure", "Repeated words", "Hidden meaning", "Sound pattern"],
        correct: 0,
        explanation: "Chiasmus is a reversal of grammatical structures in successive phrases",
      },
      {
        id: 2,
        question: "What is zeugma?",
        options: ["One word, two meanings", "Two words, one meaning", "No meaning", "Multiple meanings"],
        correct: 0,
        explanation: "Zeugma uses one word in two different senses",
      },
      {
        id: 3,
        question: "What is synecdoche?",
        options: ["Part for whole", "Whole for part", "Both A and B", "Neither A nor B"],
        correct: 2,
        explanation: "Synecdoche uses part for whole or whole for part",
      },
      {
        id: 4,
        question: "What is epistrophe?",
        options: ["Beginning repetition", "End repetition", "Middle repetition", "No repetition"],
        correct: 1,
        explanation: "Epistrophe is repetition at the end of successive clauses",
      },
      {
        id: 5,
        question: "What is tmesis?",
        options: ["Word splitting", "Word joining", "Word changing", "Word removing"],
        correct: 0,
        explanation: "Tmesis is the separation of parts of a compound word",
      },
    ],
  },
  History: {
    Easy: [
      {
        id: 1,
        question: "Who was the first President of India?",
        options: ["Nehru", "Gandhi", "Dr. Rajendra Prasad", "Patel"],
        correct: 2,
        explanation: "Dr. Rajendra Prasad was India's first President",
      },
      {
        id: 2,
        question: "When did India gain independence?",
        options: ["1945", "1947", "1948", "1950"],
        correct: 1,
        explanation: "India gained independence on August 15, 1947",
      },
      {
        id: 3,
        question: "Who built the Taj Mahal?",
        options: ["Akbar", "Shah Jahan", "Humayun", "Aurangzeb"],
        correct: 1,
        explanation: "Shah Jahan built the Taj Mahal for his wife Mumtaz",
      },
      {
        id: 4,
        question: "Which war was fought in 1857?",
        options: ["World War", "Sepoy Mutiny", "Panipat", "Plassey"],
        correct: 1,
        explanation: "The Sepoy Mutiny (First War of Independence) was in 1857",
      },
      {
        id: 5,
        question: "Who was known as Iron Man of India?",
        options: ["Nehru", "Gandhi", "Sardar Patel", "Bose"],
        correct: 2,
        explanation: "Sardar Vallabhbhai Patel was called Iron Man of India",
      },
    ],
    Medium: [
      {
        id: 1,
        question: "Battle of Plassey was fought in?",
        options: ["1757", "1764", "1767", "1770"],
        correct: 0,
        explanation: "Battle of Plassey was fought in 1757",
      },
      {
        id: 2,
        question: "Who founded Mauryan Empire?",
        options: ["Ashoka", "Chandragupta", "Bindusara", "Kautilya"],
        correct: 1,
        explanation: "Chandragupta Maurya founded the Mauryan Empire",
      },
      {
        id: 3,
        question: "Quit India Movement started in?",
        options: ["1940", "1942", "1944", "1945"],
        correct: 1,
        explanation: "Quit India Movement was launched in 1942",
      },
      {
        id: 4,
        question: "Who wrote Arthashastra?",
        options: ["Chandragupta", "Kautilya", "Ashoka", "Kalidasa"],
        correct: 1,
        explanation: "Kautilya (Chanakya) wrote Arthashastra",
      },
      {
        id: 5,
        question: "Harappan Civilization belonged to?",
        options: ["Iron Age", "Stone Age", "Bronze Age", "Copper Age"],
        correct: 2,
        explanation: "Harappan Civilization belonged to Bronze Age",
      },
    ],
    Hard: [
      {
        id: 1,
        question: "Who was the last Mughal Emperor?",
        options: ["Aurangzeb", "Bahadur Shah II", "Akbar Shah", "Shah Alam"],
        correct: 1,
        explanation: "Bahadur Shah Zafar II was the last Mughal Emperor",
      },
      {
        id: 2,
        question: "Kalinga War was fought by?",
        options: ["Chandragupta", "Ashoka", "Bindusara", "Harsha"],
        correct: 1,
        explanation: "Emperor Ashoka fought the Kalinga War",
      },
      {
        id: 3,
        question: "Who founded Satavahana dynasty?",
        options: ["Simuka", "Gautamiputra", "Pulumavi", "Yajna"],
        correct: 0,
        explanation: "Simuka founded the Satavahana dynasty",
      },
      {
        id: 4,
        question: "Gupta period is known as?",
        options: ["Dark Age", "Golden Age", "Iron Age", "Medieval Age"],
        correct: 1,
        explanation: "Gupta period is called the Golden Age of India",
      },
      {
        id: 5,
        question: "Who was Chandragupta II also known as?",
        options: ["Vikramaditya", "Samudragupta", "Kumaragupta", "Skandagupta"],
        correct: 0,
        explanation: "Chandragupta II was also known as Vikramaditya",
      },
    ],
  },
  Geography: {
    Easy: [
      {
        id: 1,
        question: "Which is the largest continent?",
        options: ["Africa", "Asia", "Europe", "America"],
        correct: 1,
        explanation: "Asia is the largest continent",
      },
      {
        id: 2,
        question: "Which is the longest river in India?",
        options: ["Yamuna", "Ganga", "Godavari", "Narmada"],
        correct: 1,
        explanation: "Ganga is the longest river in India",
      },
      {
        id: 3,
        question: "How many states are in India?",
        options: ["28", "29", "30", "27"],
        correct: 0,
        explanation: "India has 28 states",
      },
      {
        id: 4,
        question: "Which is the highest mountain peak?",
        options: ["K2", "Everest", "Kanchenjunga", "Annapurna"],
        correct: 1,
        explanation: "Mount Everest is the highest peak",
      },
      {
        id: 5,
        question: "Which ocean surrounds India?",
        options: ["Atlantic", "Pacific", "Indian", "Arctic"],
        correct: 2,
        explanation: "Indian Ocean surrounds India",
      },
    ],
    Medium: [
      {
        id: 1,
        question: "Tropic of Cancer passes through how many Indian states?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "Tropic of Cancer passes through 8 Indian states",
      },
      {
        id: 2,
        question: "Which is India's largest state by area?",
        options: ["Maharashtra", "Rajasthan", "MP", "UP"],
        correct: 1,
        explanation: "Rajasthan is the largest state by area",
      },
      {
        id: 3,
        question: "Duncan Passage separates?",
        options: ["Little Andaman-Car Nicobar", "North-South Andaman", "India-Sri Lanka", "India-Myanmar"],
        correct: 0,
        explanation: "Duncan Passage separates Little Andaman from Car Nicobar",
      },
      {
        id: 4,
        question: "Which river forms Sundarbans delta?",
        options: ["Ganga", "Brahmaputra", "Both A&B", "Mahanadi"],
        correct: 2,
        explanation: "Ganga-Brahmaputra together form Sundarbans delta",
      },
      {
        id: 5,
        question: "Deccan Plateau is made of?",
        options: ["Sedimentary rock", "Igneous rock", "Metamorphic rock", "Volcanic rock"],
        correct: 3,
        explanation: "Deccan Plateau is made of volcanic rock",
      },
    ],
    Hard: [
      {
        id: 1,
        question: "Which line divides India into almost equal halves?",
        options: ["Equator", "Tropic of Cancer", "Prime Meridian", "82.5°E"],
        correct: 1,
        explanation: "Tropic of Cancer divides India into almost equal halves",
      },
      {
        id: 2,
        question: "Palk Strait separates India from?",
        options: ["Pakistan", "Bangladesh", "Sri Lanka", "Myanmar"],
        correct: 2,
        explanation: "Palk Strait separates India from Sri Lanka",
      },
      {
        id: 3,
        question: "Which is the southernmost point of India?",
        options: ["Kanyakumari", "Indira Point", "Point Calimere", "Dhanushkodi"],
        correct: 1,
        explanation: "Indira Point in Nicobar Islands is the southernmost point",
      },
      {
        id: 4,
        question: "McMahon Line is the boundary between?",
        options: ["India-Pakistan", "India-China", "India-Nepal", "India-Bhutan"],
        correct: 1,
        explanation: "McMahon Line is the boundary between India and China",
      },
      {
        id: 5,
        question: "Which pass connects Kashmir with Central Asia?",
        options: ["Khyber Pass", "Karakoram Pass", "Bolan Pass", "Gomal Pass"],
        correct: 1,
        explanation: "Karakoram Pass connects Kashmir with Central Asia",
      },
    ],
  },
}

// Main Practice App Component
const PracticeApp = () => {
  const [currentView, setCurrentView] = useState("dashboard") // dashboard, subject-select, difficulty-select, practice, results
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes
  const [timerActive, setTimerActive] = useState(false)
  const [streak, setStreak] = useState(3)
  const [totalPoints, setTotalPoints] = useState(1250)
  const [achievements, setAchievements] = useState([
    { name: "First Steps", description: "Complete your first practice", earned: true },
    { name: "Quick Learner", description: "Score 80% or higher", earned: true },
    { name: "Streak Master", description: "Maintain 5-day streak", earned: false },
  ])

  const subjects = Object.keys(questionsData)
  const difficulties = ["Easy", "Medium", "Hard"]
  const currentQuestions =
    selectedSubject && selectedDifficulty ? questionsData[selectedSubject][selectedDifficulty] : []
  const currentQuestion = currentQuestions[currentQuestionIndex]

  // Timer effect
  useEffect(() => {
    let interval = null
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      handleSessionEnd()
    }
    return () => clearInterval(interval)
  }, [timerActive, timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject)
    setCurrentView("difficulty-select")
  }

  const handleDifficultySelect = (difficulty) => {
    setSelectedDifficulty(difficulty)
    setCurrentView("practice")
    setTimerActive(true)
    setCurrentQuestionIndex(0)
    setScore(0)
    setAnswers([])
    setTimeLeft(600)
  }

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex)
      setShowExplanation(true)

      const isCorrect = answerIndex === currentQuestion.correct
      if (isCorrect) {
        setScore(score + 1)
        const points = selectedDifficulty === "Easy" ? 10 : selectedDifficulty === "Medium" ? 20 : 30
        setTotalPoints(totalPoints + points)
      }

      setAnswers([
        ...answers,
        {
          questionId: currentQuestion.id,
          selected: answerIndex,
          correct: currentQuestion.correct,
          isCorrect,
        },
      ])
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      handleSessionEnd()
    }
  }

  const handleSessionEnd = () => {
    setCurrentView("results")
    setTimerActive(false)

    // Update streak
    const percentage = Math.round((score / currentQuestions.length) * 100)
    if (percentage >= 70) {
      setStreak(streak + 1)
    }
  }

  const resetToHome = () => {
    setCurrentView("dashboard")
    setSelectedSubject("")
    setSelectedDifficulty("")
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setAnswers([])
    setTimeLeft(600)
    setTimerActive(false)
  }

  const getScorePercentage = () => {
    return Math.round((score / currentQuestions.length) * 100)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-teal-700 bg-teal-100"
      case "Medium":
        return "text-gray-700 bg-gray-200"
      case "Hard":
        return "text-gray-800 bg-gray-300"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  // Dashboard View
  if (currentView === "dashboard") {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Practice Dashboard</h1>
            <p className="text-gray-600">Enhance your knowledge with interactive practice sessions</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Points</p>
                    <p className="text-2xl font-bold text-teal-600">{totalPoints}</p>
                  </div>
                  <Trophy className="h-8 w-8 text-teal-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Current Streak</p>
                    <p className="text-2xl font-bold text-gray-700">{streak} days</p>
                  </div>
                  <Fire className="h-8 w-8 text-gray-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Subjects</p>
                    <p className="text-2xl font-bold text-teal-600">{subjects.length}</p>
                  </div>
                  <Brain className="h-8 w-8 text-teal-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Achievements</p>
                    <p className="text-2xl font-bold text-gray-700">
                      {achievements.filter((a) => a.earned).length}/{achievements.length}
                    </p>
                  </div>
                  <Star className="h-8 w-8 text-gray-600" filled />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {subjects.map((subject, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-teal-200"
                onClick={() => handleSubjectSelect(subject)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {subject}
                    <Badge variant="secondary">{Object.keys(questionsData[subject]).length} levels</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {difficulties.map((difficulty) => (
                      <div key={difficulty} className="flex justify-between items-center">
                        <span className={`text-sm px-2 py-1 rounded ${getDifficultyColor(difficulty)}`}>
                          {difficulty}
                        </span>
                        <span className="text-sm text-gray-500">
                          {questionsData[subject][difficulty].length} questions
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" onClick={() => handleSubjectSelect(subject)}>
                    Start Practice
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${achievement.earned ? "border-teal-200 bg-teal-50" : "border-gray-200 bg-gray-50"}`}
                  >
                    <div className="flex items-center gap-3">
                      <Star
                        className={`h-6 w-6 ${achievement.earned ? "text-teal-600" : "text-gray-400"}`}
                        filled={achievement.earned}
                      />
                      <div>
                        <h4 className={`font-medium ${achievement.earned ? "text-teal-900" : "text-gray-600"}`}>
                          {achievement.name}
                        </h4>
                        <p className={`text-sm ${achievement.earned ? "text-teal-700" : "text-gray-500"}`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Difficulty Selection View
  if (currentView === "difficulty-select") {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Difficulty Level</h2>
            <p className="text-gray-600">
              Subject: <span className="font-semibold text-teal-600">{selectedSubject}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {difficulties.map((difficulty, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-teal-200"
                onClick={() => handleDifficultySelect(difficulty)}
              >
                <CardHeader className="text-center">
                  <CardTitle className={`text-2xl ${getDifficultyColor(difficulty)} px-4 py-2 rounded-lg`}>
                    {difficulty}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <p className="text-gray-600">{questionsData[selectedSubject][difficulty].length} Questions</p>
                    <p className="text-gray-600">⏱️ 10 minutes</p>
                    <p className="text-gray-600">
                      Points: {difficulty === "Easy" ? "10" : difficulty === "Medium" ? "20" : "30"} per correct answer
                    </p>
                    <Button className="w-full" onClick={() => handleDifficultySelect(difficulty)}>
                      Start {difficulty} Level
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" onClick={resetToHome}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Practice Session View
  if (currentView === "practice") {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedSubject} - {selectedDifficulty}
                  </h2>
                  <p className="text-gray-600">
                    Question {currentQuestionIndex + 1} of {currentQuestions.length}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-gray-600" />
                    <span className="font-mono text-lg text-gray-900">{formatTime(timeLeft)}</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Score: {score}/{currentQuestions.length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Bar */}
          <div className="mb-6">
            <Progress value={((currentQuestionIndex + 1) / currentQuestions.length) * 100} className="h-3" />
          </div>

          {/* Question Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      selectedAnswer === null
                        ? "border-gray-200 hover:border-teal-300 hover:bg-teal-50"
                        : selectedAnswer === index
                          ? index === currentQuestion.correct
                            ? "border-teal-500 bg-teal-50 text-teal-800"
                            : "border-gray-500 bg-gray-50 text-gray-800"
                          : index === currentQuestion.correct
                            ? "border-teal-500 bg-teal-50 text-teal-800"
                            : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {selectedAnswer !== null && (
                        <>
                          {index === currentQuestion.correct && <CheckCircle className="text-teal-600" />}
                          {selectedAnswer === index && index !== currentQuestion.correct && (
                            <XCircle className="text-gray-600" />
                          )}
                        </>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">Explanation:</h4>
                  <p className="text-teal-700">{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Next Button */}
              {showExplanation && (
                <div className="mt-6 text-center">
                  <Button onClick={nextQuestion}>
                    {currentQuestionIndex < currentQuestions.length - 1 ? "Next Question" : "Finish Session"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Results View
  if (currentView === "results") {
    const percentage = getScorePercentage()
    const pointsEarned = score * (selectedDifficulty === "Easy" ? 10 : selectedDifficulty === "Medium" ? 20 : 30)

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto mb-4">
                <Trophy className="h-16 w-16 text-teal-600 mx-auto" />
              </div>
              <CardTitle className="text-2xl mb-2">Practice Complete!</CardTitle>
              <p className="text-gray-600">
                {selectedSubject} - {selectedDifficulty} Level
              </p>
            </CardHeader>
            <CardContent>
              {/* Score Summary */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-teal-600 mb-2">
                  {score}/{currentQuestions.length}
                </div>
                <div className="text-xl text-gray-600 mb-4">{percentage}% Correct</div>
                <div className="text-lg text-teal-600 mb-4">+{pointsEarned} Points Earned!</div>
                <Progress value={percentage} className="h-3 max-w-xs mx-auto" />
              </div>

              {/* Performance Message */}
              <div className="text-center mb-8">
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    percentage >= 90
                      ? "bg-teal-100 text-teal-800"
                      : percentage >= 70
                        ? "bg-teal-100 text-teal-800"
                        : percentage >= 50
                          ? "bg-gray-100 text-gray-800"
                          : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {percentage >= 90
                    ? "🎉 Excellent! Outstanding performance!"
                    : percentage >= 70
                      ? "👏 Great job! Well done!"
                      : percentage >= 50
                        ? "👍 Good effort! Keep practicing!"
                        : "💪 Keep trying! Practice makes perfect!"}
                </div>
              </div>

              {/* Detailed Results */}
              <div className="space-y-3 mb-8">
                <h3 className="text-lg font-semibold mb-4">Question Review:</h3>
                {answers.map((answer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
                    <span>Question {index + 1}</span>
                    <Badge variant={answer.isCorrect ? "success" : "secondary"}>
                      {answer.isCorrect ? (
                        <>
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Correct
                        </>
                      ) : (
                        <>
                          <XCircle className="h-3 w-3 mr-1" />
                          Incorrect
                        </>
                      )}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 justify-center">
                <Button variant="outline" onClick={resetToHome}>
                  Back to Dashboard
                </Button>
                <Button variant="secondary" onClick={() => setCurrentView("difficulty-select")}>
                  Try Different Level
                </Button>
                <Button
                  onClick={() => {
                    setCurrentView("practice")
                    setCurrentQuestionIndex(0)
                    setSelectedAnswer(null)
                    setShowExplanation(false)
                    setScore(0)
                    setAnswers([])
                    setTimeLeft(600)
                    setTimerActive(true)
                  }}
                >
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

export default PracticeApp

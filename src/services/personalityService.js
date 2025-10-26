import { generateRecommendations } from '../data/careerPaths';

export const analyzePersonality = (answers) => {
  // Extract all traits from user's answers
  const traits = answers.flatMap(answer => answer.traits);
  
  // Count trait frequencies
  const traitFrequency = traits.reduce((acc, trait) => {
    acc[trait] = (acc[trait] || 0) + 1;
    return acc;
  }, {});
  
  // Get top traits
  const topTraits = Object.entries(traitFrequency)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([trait]) => trait);
  
  // Generate personality profile
  const profile = generatePersonalityProfile(topTraits);
  
  return {
    traits: topTraits,
    traitFrequency,
    profile,
    timestamp: new Date().toISOString()
  };
};

const generatePersonalityProfile = (traits) => {
  const profiles = {
    analytical: {
      strength: "You excel at breaking down complex problems and thinking logically.",
      description: "Your analytical mindset allows you to see patterns and solve intricate challenges systematically."
    },
    creative: {
      strength: "You bring innovative ideas and unique perspectives to every situation.",
      description: "Your creativity enables you to think outside the box and develop original solutions."
    },
    collaborative: {
      strength: "You thrive in team environments and build strong working relationships.",
      description: "Your collaborative nature helps you bring out the best in others and achieve collective goals."
    },
    empathetic: {
      strength: "You understand and connect with others on a deep emotional level.",
      description: "Your empathy allows you to build trust and create meaningful impact in people's lives."
    },
    leadership: {
      strength: "You naturally inspire and guide others towards shared objectives.",
      description: "Your leadership qualities enable you to take charge and drive teams to success."
    },
    innovative: {
      strength: "You constantly seek new ways to improve and optimize processes.",
      description: "Your innovative mindset keeps you at the forefront of change and progress."
    },
    'detail-oriented': {
      strength: "You notice the small things that others might miss.",
      description: "Your attention to detail ensures high-quality work and thoroughness in everything you do."
    },
    adaptable: {
      strength: "You embrace change and thrive in dynamic environments.",
      description: "Your adaptability allows you to pivot quickly and succeed in various situations."
    }
  };
  
  // Generate profile summary based on top traits
  const topThreeTraits = traits.slice(0, 3);
  const profileSummary = topThreeTraits
    .filter(trait => profiles[trait])
    .map(trait => profiles[trait]);
  
  return {
    summary: profileSummary,
    dominantTrait: traits[0],
    personalityType: determinePersonalityType(traits)
  };
};

const determinePersonalityType = (traits) => {
  // Simple personality type determination based on trait combinations
  if (traits.includes('analytical') && traits.includes('logical')) {
    return {
      type: 'Analytical Thinker',
      description: 'You approach challenges with logic and systematic thinking, excelling in roles that require deep analysis and problem-solving.'
    };
  } else if (traits.includes('creative') && traits.includes('innovative')) {
    return {
      type: 'Creative Innovator',
      description: 'You bring fresh perspectives and novel ideas, thriving in environments that value creativity and innovation.'
    };
  } else if (traits.includes('collaborative') && traits.includes('empathetic')) {
    return {
      type: 'People Connector',
      description: 'You excel at building relationships and working with others, perfect for roles requiring teamwork and emotional intelligence.'
    };
  } else if (traits.includes('leadership') && traits.includes('strategic')) {
    return {
      type: 'Strategic Leader',
      description: 'You see the big picture and guide others towards success, ideal for leadership and management positions.'
    };
  } else if (traits.includes('detail-oriented') && traits.includes('methodical')) {
    return {
      type: 'Meticulous Organizer',
      description: 'You ensure nothing falls through the cracks, excelling in roles requiring precision and organization.'
    };
  } else {
    return {
      type: 'Versatile Professional',
      description: 'You bring a balanced mix of skills that allow you to adapt to various roles and challenges.'
    };
  }
};

export const getCareerRecommendations = (personalityAnalysis, userType) => {
  const recommendations = generateRecommendations(personalityAnalysis.traits, userType);
  
  // Generate personalized insights for each recommendation
  return recommendations.map(career => ({
    ...career,
    personalizedInsight: generatePersonalizedInsight(career, personalityAnalysis, userType)
  }));
};

const generatePersonalizedInsight = (career, analysis, userType) => {
  const { profile } = analysis;
  const matchingTraits = career.matchingTraits;
  
  let insight = '';
  
  if (userType === 'student') {
    insight = `This career path aligns exceptionally well with your ${matchingTraits.slice(0, 2).join(' and ')} nature. `;
    insight += `As someone who is ${profile.personalityType.type.toLowerCase()}, you'll find that ${career.title} offers the perfect blend of challenges and opportunities. `;
    insight += `Your ${profile.dominantTrait} mindset will be a significant asset in this field, particularly when ${getFieldSpecificExample(career.id, profile.dominantTrait)}. `;
    insight += `With a ${career.growthPotential.toLowerCase()} growth potential and starting salaries in the ${career.averageSalary} range, this path offers both personal fulfillment and professional success.`;
  } else {
    insight = `Based on your profile as a ${profile.personalityType.type.toLowerCase()}, transitioning to ${career.title} could be a natural next step. `;
    insight += `Your ${matchingTraits.slice(0, 2).join(' and ')} qualities are highly valued in this role. `;
    insight += `This position leverages your ${profile.dominantTrait} strength while pushing you to grow in ${career.skills.slice(0, 2).join(' and ')}. `;
    insight += `With compensation typically ranging from ${career.averageSalary} and ${career.growthPotential.toLowerCase()} growth potential, this move could significantly advance your career trajectory.`;
  }
  
  return insight;
};

const getFieldSpecificExample = (careerId, trait) => {
  const examples = {
    'software-engineer': {
      'analytical': 'designing efficient algorithms and debugging complex code',
      'creative': 'architecting elegant solutions to technical challenges',
      'collaborative': 'working with cross-functional teams on large-scale projects'
    },
    'data-scientist': {
      'analytical': 'uncovering insights from complex datasets',
      'methodical': 'building reliable predictive models',
      'innovative': 'discovering novel patterns in data'
    },
    'ux-designer': {
      'creative': 'crafting intuitive and delightful user experiences',
      'empathetic': 'understanding user needs and pain points',
      'detail-oriented': 'perfecting every interaction and visual element'
    },
    'healthcare-professional': {
      'empathetic': 'connecting with patients and understanding their concerns',
      'detail-oriented': 'providing precise and thorough care',
      'collaborative': 'coordinating with medical teams for patient outcomes'
    }
  };
  
  return examples[careerId]?.[trait] || 'solving complex challenges in the field';
};

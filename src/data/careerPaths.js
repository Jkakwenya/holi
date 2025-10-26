export const careerPaths = {
  student: [
    {
      id: 'software-engineer',
      title: 'Software Engineering',
      description: 'Design, develop, and maintain software applications',
      matchTraits: ['analytical', 'logical', 'creative', 'problem-solving', 'focused'],
      educationPath: ['Computer Science degree', 'Coding bootcamps', 'Self-study with portfolio'],
      skills: ['Programming', 'Problem-solving', 'System design', 'Algorithms'],
      growthPotential: 'High',
      averageSalary: '$95,000 - $150,000',
      industries: ['Tech', 'Finance', 'Healthcare', 'E-commerce']
    },
    {
      id: 'data-scientist',
      title: 'Data Science',
      description: 'Analyze complex data to drive business decisions',
      matchTraits: ['analytical', 'methodical', 'detail-oriented', 'innovative', 'logical'],
      educationPath: ['Statistics/Math/CS degree', 'Data Science bootcamp', 'Online certifications'],
      skills: ['Statistics', 'Machine Learning', 'Python/R', 'Data Visualization'],
      growthPotential: 'Very High',
      averageSalary: '$100,000 - $160,000',
      industries: ['Tech', 'Finance', 'Healthcare', 'Retail']
    },
    {
      id: 'ux-designer',
      title: 'UX/UI Design',
      description: 'Create intuitive and beautiful user experiences',
      matchTraits: ['creative', 'empathetic', 'detail-oriented', 'innovative', 'collaborative'],
      educationPath: ['Design degree', 'UX bootcamp', 'Portfolio-based learning'],
      skills: ['User Research', 'Prototyping', 'Visual Design', 'Psychology'],
      growthPotential: 'High',
      averageSalary: '$80,000 - $130,000',
      industries: ['Tech', 'E-commerce', 'Media', 'Finance']
    },
    {
      id: 'healthcare-professional',
      title: 'Healthcare & Medicine',
      description: 'Provide care and improve patient health outcomes',
      matchTraits: ['empathetic', 'service-oriented', 'detail-oriented', 'resilient', 'collaborative'],
      educationPath: ['Medical school', 'Nursing program', 'Allied health degrees'],
      skills: ['Clinical Knowledge', 'Communication', 'Critical Thinking', 'Empathy'],
      growthPotential: 'Very High',
      averageSalary: '$70,000 - $200,000+',
      industries: ['Healthcare', 'Pharmaceuticals', 'Public Health', 'Research']
    },
    {
      id: 'marketing-specialist',
      title: 'Marketing & Brand Management',
      description: 'Build and promote brands through strategic campaigns',
      matchTraits: ['creative', 'social', 'innovative', 'collaborative', 'adaptable'],
      educationPath: ['Marketing degree', 'Business degree', 'Digital marketing courses'],
      skills: ['Digital Marketing', 'Analytics', 'Content Creation', 'Communication'],
      growthPotential: 'High',
      averageSalary: '$60,000 - $120,000',
      industries: ['Tech', 'Retail', 'Media', 'Consumer Goods']
    },
    {
      id: 'business-analyst',
      title: 'Business Analysis',
      description: 'Bridge business needs with technical solutions',
      matchTraits: ['analytical', 'methodical', 'collaborative', 'detail-oriented', 'organized'],
      educationPath: ['Business degree', 'IT degree', 'Professional certifications'],
      skills: ['Requirements Analysis', 'Data Analysis', 'Process Improvement', 'Communication'],
      growthPotential: 'High',
      averageSalary: '$75,000 - $125,000',
      industries: ['Tech', 'Finance', 'Consulting', 'Healthcare']
    },
    {
      id: 'educator',
      title: 'Education & Teaching',
      description: 'Shape minds and inspire future generations',
      matchTraits: ['empathetic', 'service-oriented', 'collaborative', 'organized', 'patient'],
      educationPath: ['Education degree', 'Subject + Teaching credential', 'Alternative certification'],
      skills: ['Communication', 'Curriculum Development', 'Assessment', 'Mentoring'],
      growthPotential: 'Moderate',
      averageSalary: '$50,000 - $85,000',
      industries: ['Education', 'EdTech', 'Corporate Training', 'Non-profit']
    },
    {
      id: 'environmental-scientist',
      title: 'Environmental Science',
      description: 'Protect and preserve our natural environment',
      matchTraits: ['analytical', 'service-oriented', 'methodical', 'detail-oriented', 'passionate'],
      educationPath: ['Environmental Science degree', 'Biology/Chemistry degree', 'Graduate programs'],
      skills: ['Research', 'Data Analysis', 'Policy Knowledge', 'Field Work'],
      growthPotential: 'High',
      averageSalary: '$60,000 - $100,000',
      industries: ['Government', 'Consulting', 'Non-profit', 'Energy']
    }
  ],
  professional: [
    {
      id: 'senior-software-architect',
      title: 'Senior Software Architect',
      description: 'Lead technical strategy and system architecture',
      matchTraits: ['analytical', 'leadership', 'innovative', 'strategic', 'focused'],
      nextSteps: ['Earn cloud certifications', 'Lead larger projects', 'Mentor junior developers'],
      skills: ['System Design', 'Cloud Architecture', 'Leadership', 'Strategic Planning'],
      growthPotential: 'Very High',
      averageSalary: '$150,000 - $250,000+',
      industries: ['Tech', 'Finance', 'Healthcare', 'E-commerce'],
      transitionFrom: ['Software Engineer', 'Senior Developer']
    },
    {
      id: 'engineering-manager',
      title: 'Engineering Manager',
      description: 'Lead and grow high-performing engineering teams',
      matchTraits: ['leadership', 'collaborative', 'empathetic', 'organized', 'strategic'],
      nextSteps: ['Develop management skills', 'Take on team lead roles', 'Executive education'],
      skills: ['People Management', 'Technical Strategy', 'Hiring', 'Project Management'],
      growthPotential: 'Very High',
      averageSalary: '$140,000 - $220,000',
      industries: ['Tech', 'Finance', 'E-commerce', 'SaaS'],
      transitionFrom: ['Senior Engineer', 'Tech Lead']
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      description: 'Define product vision and drive development',
      matchTraits: ['strategic', 'collaborative', 'analytical', 'innovative', 'leadership'],
      nextSteps: ['Get PM certification', 'Develop business acumen', 'Lead product initiatives'],
      skills: ['Product Strategy', 'User Research', 'Analytics', 'Stakeholder Management'],
      growthPotential: 'Very High',
      averageSalary: '$120,000 - $200,000',
      industries: ['Tech', 'E-commerce', 'Finance', 'Healthcare'],
      transitionFrom: ['Business Analyst', 'Engineer', 'Designer']
    },
    {
      id: 'ml-engineer',
      title: 'Machine Learning Engineer',
      description: 'Build and deploy AI/ML systems at scale',
      matchTraits: ['analytical', 'innovative', 'methodical', 'focused', 'problem-solving'],
      nextSteps: ['Advanced ML certifications', 'Contribute to ML projects', 'Publish research'],
      skills: ['Deep Learning', 'MLOps', 'Python', 'Model Deployment'],
      growthPotential: 'Extremely High',
      averageSalary: '$130,000 - $220,000+',
      industries: ['Tech', 'AI Startups', 'Finance', 'Autonomous Vehicles'],
      transitionFrom: ['Data Scientist', 'Software Engineer']
    },
    {
      id: 'design-director',
      title: 'Design Director',
      description: 'Lead design strategy and creative teams',
      matchTraits: ['creative', 'leadership', 'strategic', 'innovative', 'collaborative'],
      nextSteps: ['Build design leadership portfolio', 'Speak at conferences', 'Mentor designers'],
      skills: ['Design Strategy', 'Team Leadership', 'Business Acumen', 'Presentation'],
      growthPotential: 'High',
      averageSalary: '$130,000 - $190,000',
      industries: ['Tech', 'Agencies', 'Media', 'E-commerce'],
      transitionFrom: ['Senior Designer', 'UX Lead']
    },
    {
      id: 'healthcare-administrator',
      title: 'Healthcare Administrator',
      description: 'Manage healthcare operations and strategy',
      matchTraits: ['leadership', 'organized', 'empathetic', 'strategic', 'detail-oriented'],
      nextSteps: ['Get MHA/MBA', 'Take on department leadership', 'Healthcare management courses'],
      skills: ['Healthcare Policy', 'Operations', 'Budget Management', 'Compliance'],
      growthPotential: 'High',
      averageSalary: '$90,000 - $150,000',
      industries: ['Healthcare', 'Insurance', 'Government', 'Non-profit'],
      transitionFrom: ['Clinical roles', 'Healthcare Coordinator']
    },
    {
      id: 'strategy-consultant',
      title: 'Strategy Consultant',
      description: 'Advise companies on critical business decisions',
      matchTraits: ['analytical', 'strategic', 'collaborative', 'problem-solving', 'adaptable'],
      nextSteps: ['Get MBA', 'Build consulting portfolio', 'Industry specialization'],
      skills: ['Strategic Analysis', 'Client Management', 'Presentation', 'Business Modeling'],
      growthPotential: 'Very High',
      averageSalary: '$100,000 - $200,000+',
      industries: ['Consulting', 'Finance', 'Private Equity', 'Corporate'],
      transitionFrom: ['Business Analyst', 'Finance', 'Various industries']
    },
    {
      id: 'chief-sustainability-officer',
      title: 'Chief Sustainability Officer',
      description: 'Drive corporate sustainability and ESG initiatives',
      matchTraits: ['strategic', 'service-oriented', 'leadership', 'innovative', 'passionate'],
      nextSteps: ['Get sustainability certifications', 'Lead green initiatives', 'Executive program'],
      skills: ['ESG Strategy', 'Policy', 'Stakeholder Engagement', 'Change Management'],
      growthPotential: 'Very High',
      averageSalary: '$120,000 - $250,000',
      industries: ['Corporate', 'Energy', 'Manufacturing', 'Finance'],
      transitionFrom: ['Environmental roles', 'Corporate Strategy', 'Operations']
    }
  ]
};

// Helper function to generate personalized recommendations
export const generateRecommendations = (traits, userType) => {
  const paths = careerPaths[userType];
  
  // Calculate match score for each career path
  const scoredPaths = paths.map(path => {
    const matchingTraits = path.matchTraits.filter(trait => 
      traits.some(userTrait => 
        userTrait.toLowerCase().includes(trait.toLowerCase()) || 
        trait.toLowerCase().includes(userTrait.toLowerCase())
      )
    );
    
    const score = (matchingTraits.length / path.matchTraits.length) * 100;
    
    return {
      ...path,
      matchScore: Math.round(score),
      matchingTraits: matchingTraits
    };
  });
  
  // Sort by match score and return top 4
  return scoredPaths
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 4);
};

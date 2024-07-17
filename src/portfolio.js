const header = {
    homepage: 'https://claibornevv.github.io/personal-website',
    title: 'CVV',
}

const about = {
    name: 'Claiborne Van Voorhis',
    role: 'Software Engineer',
    description: 'Highly motivated and detailed-oriented recent graduate from the College of William and Mary with a Bachelor of Science in Computer Science. Proven proficiency in software development, algorithms, and data structures, completed by hands-on experience through academic and personal projects. Skilled in multiple programming languages including Python, Java, C++, and more with a strong foundation in software engineering principles. Demonstrated ability to collaborate effectively in team environments and adapt quickly to new technologies. Seeking an entry-level Software Engineering position to leverage my technical skills and contribute to innovative projects.',
    resume: `${process.env.PUBLIC_URL}/Claiborne_Van_Voorhis_resume_2024.pdf`,
    social: {
        linkedin: 'https://linkedin.com/claiborne-van-voorhis',
        github: 'https://github.com/claibornevv',
    }
}

const projects = [
    {
        name: 'Java Plugin',
        description: 'Custom built plugin to add backpacks into minecraft plugin servers',
        stack: ['Java', 'YML', 'Git'],
        sourceCode: 'https://github.com/claibornevv/backpacks',
    },
    {
        name: 'Snake Game',
        description: 'Simple snake game implemented in python',
        stack: ['Python', 'PyGame'],
        sourceCode: 'https://github.com/claibornevv/python_snake',
    },
    {
        name: 'React App',
        description: 'Personal website created using React.js',
        stack: ['React.js', 'HTML', 'CSS'],
        sourceCode: 'https://github.com/claibornevv/personal-website',
    }
]

const skills = [
    'Java',
    'Python',
    'C',
    'C++',
    'JavaScript',
    'React.js',
    'HTML',
    'CSS',
    'SCSS',
    'Git',
    'GitHub',
    'GitLab',
    'AWS',
    'Linux',
    'Ubuntu',
    'Windows',
    'MacOS',
    'MongoDB',
    'NoSQL',
    'SQL',
    'Docker',
    'Docker-Compose',
    'Agile',
    'Microsoft Office Suite',
    'Communication',
]

const contact = {
    email: 'cvanvoorhis2@gmail.com',
}



export { header, about, projects, skills, contact }
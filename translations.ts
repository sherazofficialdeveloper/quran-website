
export type Language = 'en' | 'ur' | 'ar';

const en = {
  dir: 'ltr',
  logo: 'Quran Kareem',
  nav: {
    home: 'Home',
    courses: 'Courses',
    blog: 'Blog',
    contact: 'Contact Us',
  },
  contact: {
    hero: {
      badge: 'Available 24/7',
      title: 'Get in Touch With Our Experts',
      subtitle: 'Have questions about our courses or want to start your free trial? Reach out to us directly through WhatsApp or Call for instant assistance.'
    },
    methods: [
      {
        title: 'WhatsApp Us',
        desc: 'Connect with our support team instantly for registration and queries.',
        btn: 'Chat on WhatsApp',
        icon: '💬',
        color: '#25D366'
      },
      {
        title: 'Call Support',
        desc: 'Talk directly to our academic advisors to plan your learning journey.',
        btn: 'Call Now',
        icon: '📞',
        color: '#D4AF37'
      },
      {
        title: 'Email Inquiry',
        desc: 'Prefer email? Send us your questions and we will reply within 24 hours.',
        btn: 'Send Email',
        icon: '📧',
        color: '#D4AF37'
      }
    ],
    form: {
      title: 'Send a Message',
      subtitle: 'Fill out the form below and we will get back to you shortly.',
      name: 'Your Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      course: 'Select Course',
      message: 'Your Message',
      btn: 'Submit Inquiry'
    }
  },
  blog: {
    hero: {
      title: 'Quran Kareem Blogs',
      breadcrumb: 'Home - Blog'
    },
    posts: [
      {
        title: 'Deepening Your Understanding: An Introduction to the Tafseer ul Quran Course',
        desc: 'The Quran is not only the foundational text of Islam but also a profound source of guidance for Muslims worldwide. To fully grasp its teachings, believers often turn to Tafseer.',
        date: 'Oct 24, 2024'
      },
      {
        title: 'How to Choose the Right Alim Alimah Course for You',
        desc: 'Choosing the right Alim Alimah Course is an important decision that can shape your Islamic education and spiritual growth. With numerous online and offline options available, it can be challenging.',
        date: 'Oct 22, 2024'
      },
      {
        title: 'Benefits of Enrolling in an Online Alim Alimah Course',
        desc: 'In today\'s fast-paced world, the demand for flexible and accessible education is higher than ever, and Islamic studies are no exception. Online learning has opened new possibilities.',
        date: 'Oct 20, 2024'
      },
      {
        title: 'A Comprehensive Overview of the Alim Alimah Course: What to Expect',
        desc: 'The Alim Alimah Course is a comprehensive Islamic studies program designed to equip students with deep knowledge of Islamic theology, jurisprudence, and the Quran.',
        date: 'Oct 18, 2024'
      },
      {
        title: 'Unlock the Benefits of Quran Kareem\'s Tafseer ul Quran Course',
        desc: 'The Quran is central to the faith and life of every Muslim, offering divine guidance on all aspects of life. However, understanding its deeper meanings requires more than just reading.',
        date: 'Oct 15, 2024'
      },
      {
        title: 'How Online Quran Classes Help Kids Learn Effectively',
        desc: 'In an era where digital learning is rapidly becoming the norm, online Quran classes have emerged as a popular choice for parents seeking to provide their children with a strong foundation.',
        date: 'Oct 12, 2024'
      }
    ],
    readMore: 'Read More',
    banner: {
      title: 'Learn Quran online from the comfort of your home with us today.',
      btn: 'Book Free Trial'
    }
  },
  hero: {
    badge: '#1 Online Quran Institute',
    title: 'Transform Your Quran Journey',
    subtitle: 'Join Quran Kareem and master Quranic recitation, Tajweed, and Islamic studies with certified Ijazah teachers through personalized one-on-one online classes.',
    whyChoose: 'Flexible Timing 24/7',
    ctaPrimary: 'Start Free Trial',
    ctaSecondary: 'Explore Courses',
    stats: {
      students: '10,000+',
      teachers: '50+',
      rating: '4.9/5'
    },
    pricingCard: {
      watchIntro: 'Watch Our Introduction',
      startingFrom: 'Starting From',
      price: '$39',
      perMonth: '/month',
      details: '3 Classes/week - 30 min each',
      btn: 'Book Free Trial'
    }
  },
  qaidaPage: {
    hero: {
      badge: 'Start Your Journey',
      title: 'Master Quran Reading with',
      titleHighlight: 'TanzeelQuran Qaida',
      subtitle: 'Transform from complete beginner to confident Quran reader. Learn Arabic alphabet, perfect pronunciation, and essential Tajweed rules with certified teachers through interactive one-on-one classes.',
      stats: [
        { val: '2-3', label: 'Months Duration' },
        { val: '45', label: 'Total Lessons' },
        { val: '30', label: 'Min Per Class' }
      ],
      price: '$49',
      perMonth: '/per month',
      details: '3 classes weekly',
      trialBtn: 'First trial class FREE',
      mainBtn: 'Book Free Trial',
      boxes: ['From Zero to Reading', 'Personal 1-on-1 Classes', 'Completion Certificate', 'Flexible Schedule']
    },
    whatIs: {
      badge: 'About This Course',
      title: 'What is TanzeelQuran Qaida?',
      items: [
        { title: 'The Foundation Stone', desc: 'TanzeelQuran Qaida is your gateway to understanding and reciting the Holy Quran accurately. This comprehensive foundational course equips complete beginners with essential Arabic reading skills and fundamental Tajweed principles required for accurate Quranic recitation.' },
        { title: 'Proven Learning System', desc: 'Our structured methodology breaks down complex Arabic phonetics into simple, manageable lessons. Starting with individual letter recognition and progressing to full verse recitation, students build confidence at every step of their learning journey.' },
        { title: 'Modern Teaching Approach', desc: 'We combine traditional Qaida wisdom with contemporary educational technology. Interactive digital tools, visual learning aids, and real-time feedback make learning engaging and effective for students of all ages.' }
      ]
    },
    standsOut: {
      title: 'Why TanzeelQuran Qaida Stands Out',
      points: [
        'Systematic progression from basics to advanced reading',
        'Emphasis on proper Makharij (pronunciation points)',
        'Integration of essential Tajweed from day one',
        'Age-appropriate teaching methods for kids and adults',
        'Continuous assessment and personalized feedback',
        'Digital materials and interactive practice tools'
      ]
    },
    roadmap: {
      badge: 'Course Structure',
      title: 'Your Complete Learning Journey',
      subtitle: 'A carefully designed 9-phase program that transforms beginners into confident Quran readers',
      phases: [
        { title: "Arabic Alphabet Mastery", duration: "1-2 weeks", desc: "Learn all 28 Arabic letters with correct shapes, sounds, and pronunciation points (Makharij).", bullets: ["Letter recognition and writing", "Proper articulation points (Makharij)", "Individual letter sounds", "Letter positions (beginning, middle, end)"], outcome: "Recognize and pronounce all Arabic letters correctly" },
        { title: "Short Vowel Movements", duration: "1 week", desc: "Master the three short vowels (Harakat) - Fatha, Kasra, and Damma.", bullets: ["Fatha (a) - the opening sound", "Kasra (i) - the breaking sound", "Damma (u) - the lifting sound", "Combining letters with vowels"], outcome: "Read Arabic words with short vowel markings" },
        { title: "Long Vowels & Extension", duration: "1 week", desc: "Learn elongation rules with Madd letters (Alif, Waw, Ya).", bullets: ["Madd with Alif (aa sound)", "Madd with Waw (oo sound)", "Madd with Ya (ee sound)", "Correct length of elongation"], outcome: "Apply proper elongation in recitation" },
        { title: "Tanween - Double Vowels", duration: "1 week", desc: "Understand and apply the three types of Tanween (double vowel sounds).", bullets: ["Tanween Fatha (an)", "Tanween Kasra (in)", "Tanween Damma (un)", "Rules of pronunciation"], outcome: "Correctly pronounce words with Tanween" },
        { title: "Sukoon & Shaddah", duration: "1 week", desc: "Master silent letters (Sukoon) and letter doubling (Shaddah).", bullets: ["Sukoon - stopping on letters", "Shaddah - emphasizing letters", "Combining Shaddah with vowels", "Practical application"], outcome: "Read words with complex markings accurately" },
        { title: "Noon Sakinah Rules", duration: "2 weeks", desc: "Learn the four essential Tajweed rules for Noon Sakinah and Tanween.", bullets: ["Izhaar (Clear pronunciation)", "Idghaam (Merging sounds)", "Iqlab (Converting to Meem)", "Ikhfa (Nasal pronunciation)"], outcome: "Apply basic Tajweed rules correctly" },
        { title: "Meem Sakinah & Advanced Rules", duration: "1 week", desc: "Master rules specific to Meem Sakinah and other advanced concepts.", bullets: ["Ikhfa Shafawi (Labial hiding)", "Idghaam Shafawi (Labial merging)", "Izhaar Shafawi (Labial clarity)", "Rules of Qalqalah (echo)"], outcome: "Perfect advanced Tajweed fundamentals" },
        { title: "Special Letter Rules", duration: "1 week", desc: "Learn specific pronunciation rules for Raa and Laam.", bullets: ["Tafkheem of Raa (thick pronunciation)", "Tarqeeq of Raa (thin pronunciation)", "Laam of Allah (special cases)", "Context-based applications"], outcome: "Master specialized pronunciation rules" },
        { title: "Stopping & Pausing Rules", duration: "1 week", desc: "Learn proper stopping points (Waqf) and continuation in Quranic recitation.", bullets: ["Types of Waqf (stopping)", "Proper pausing places", "Breath management", "Complete verse recitation"], outcome: "Recite Quran with proper flow and pauses" }
      ]
    },
    completion: {
      title: 'Course Completion Achievement',
      desc: 'Upon finishing all 9 phases, you will receive a certificate and be ready to read any page of the Holy Quran independently with proper Tajweed!'
    },
    benefits: {
      badge: 'What You Gain',
      title: 'Transform Your Quranic Journey',
      items: [
        { title: 'Quran Reading Confidence', icon: '📖', desc: 'Read any page of the Holy Quran independently with correct pronunciation and Tajweed application.' },
        { title: 'Solid Foundation', icon: '💎', desc: 'Build strong basics for advanced Islamic studies including Hifz, Tafseer, and Ijazah programs.' },
        { title: 'Personalized Learning', icon: '👤', desc: 'One-on-one attention ensures your unique learning pace and individual challenges are addressed.' },
        { title: 'Proper Tajweed', icon: '✨', desc: 'Master essential Tajweed rules integrated throughout the course for beautiful recitation.' }
      ],
      perks: [
        'Lifetime access to digital course materials',
        'Regular progress assessments and reports',
        'Certificate of completion',
        'Preparation for advanced Quran courses',
        'Family discount for multiple enrollments',
        'Flexible rescheduling options'
      ]
    },
    pricing: {
      badge: 'Investment Plans',
      title: 'Choose Your Learning Pace',
      subtitle: 'All plans include one-on-one classes with Ijazah-certified teachers and complete course materials',
      plans: [
        { name: 'Foundation', price: '$39', classes: '2 classes weekly' },
        { name: 'Accelerated', price: '$49', classes: '3 classes weekly', popular: true },
        { name: 'Intensive', price: '$65', classes: '4 classes weekly' },
        { name: 'Pro Mastery', price: '$79', classes: '5 classes weekly' }
      ]
    },
    faqs: {
      badge: 'Common Questions',
      title: 'Everything About TanzeelQuran Qaida',
      questions: [
        { q: "How long does it take to complete the course?", a: "Most students complete TanzeelQuran Qaida in 2-3 months with 3-4 classes per week. However, the timeline is flexible and adapts to your learning pace." },
        { q: "Is this course suitable for absolute beginners?", a: "Yes, this course is designed specifically for students with zero prior knowledge of Arabic or Quranic reading." },
        { q: "What age groups can enroll in this course?", a: "We have students from age 4 up to adults. Our teachers adapt their methods to the student's age." },
        { q: "Do I need to purchase any books or materials?", a: "No, all digital copies of the Qaida and supplemental materials are provided for free." },
        { q: "Will I learn Tajweed in this course?", a: "Yes, foundational Tajweed rules are integrated to ensure correct pronunciation from the start." },
        { q: "Can I get a free trial before enrolling?", a: "Absolutely! We offer a 100% free trial class so you can meet your teacher and see our method." },
        { q: "Are the teachers qualified and experienced?", a: "Yes, all our teachers are Ijazah certified with extensive experience in online teaching." },
        { q: "What happens after I complete TanzeelQuran Qaida?", a: "You will be ready to start the 'Quran Reading with Tajweed' course and read the full Quran." },
        { q: "Can I reschedule classes if I have an emergency?", a: "Yes, we offer flexible rescheduling with a 24-hour notice." },
        { q: "Do you provide certificates upon completion?", a: "Yes, every student receives an official certificate after passing the final assessment." }
      ]
    }
  },
  tajweedPage: {
    hero: {
      badge: 'Perfect Your Recitation',
      title: 'Learn Quran Reading with',
      titleHighlight: 'Proper Tajweed',
      subtitle: 'Take your Quran recitation to the next level. This course focuses on fluency, accuracy, and complete Tajweed application so you can recite the Quran beautifully.',
      stats: [
        { val: '3-4', label: 'Months Duration' },
        { val: '60+', label: 'Live Lessons' },
        { val: '30', label: 'Min Per Class' }
      ],
      price: '$59',
      perMonth: '/per month',
      details: '3 classes weekly',
      trialBtn: 'First trial class available',
      mainBtn: 'Book Free Trial',
      boxes: ['Fluent Quran Reading', 'Perfect Pronunciation', '1-on-1 Live Classes', 'Certified Completion']
    },
    pricing: {
      badge: 'Pricing Plans',
      title: 'Choose Your Plan',
      subtitle: 'Flexible options for all students.',
      plans: [
        { name: 'Standard', price: '$59', classes: '3 classes weekly' },
        { name: 'Premium', price: '$79', classes: '4 classes weekly', popular: true }
      ]
    }
  },
  tafseerPage: {
    hero: {
      badge: 'Deep Insight',
      title: 'Learn Tafseer-ul-Quran with',
      titleHighlight: 'Knowledge & Wisdom',
      subtitle: 'This advanced Tafseer-ul-Quran course helps students understand the Quran beyond translation by exploring meanings, reasons of revelation, linguistic depth, and practical lessons from authentic sources.',
      stats: [
        { val: '6-9', label: 'Months Duration' },
        { val: '100+', label: 'Total Lessons' },
        { val: '30', label: 'Min Per Class' }
      ],
      price: '$49',
      perMonth: '/per month',
      details: '3 classes weekly',
      trialBtn: 'First trial class FREE',
      mainBtn: 'Book Free Trial',
      boxes: ['Authentic Tafseer Sources', 'Historical Context', 'Deep Reflection & Analysis', 'Completion Certificate']
    },
    whatIs: {
      badge: 'About This Course',
      title: 'What is Tafseer-ul-Quran?',
      items: [
        { title: 'Understand the Quran in Depth', desc: 'Tafseer-ul-Quran is the detailed explanation of the Holy Quran based on authentic Islamic scholarship, helping students understand meanings, wisdom, and divine guidance.' },
        { title: 'Context & Wisdom', desc: 'This course explains verses with their historical background, reasons of revelation, and connections between verses to avoid misunderstanding.' },
        { title: 'Scholarly & Authentic Sources', desc: 'We follow well-known Tafseer works such as Tafseer Ibn Kathir, Tafseer Jalalayn, and other reliable sources.' }
      ]
    },
    whyLearn: {
      title: 'Why Learn Tafseer?',
      points: [
        'Understand Allah\'s commands clearly',
        'Apply Quranic guidance in daily life',
        'Avoid misinterpretation',
        'Strengthen faith and wisdom',
        'Prepare for Islamic teaching roles',
        'Advanced spiritual growth'
      ]
    },
    roadmap: {
      badge: 'Course Structure',
      title: 'Your Tafseer Learning Journey',
      subtitle: 'An advanced structured program for deep Quranic understanding',
      phases: [
        { title: "Student Assessment", duration: "1 week", desc: "Evaluate Arabic, translation, and Islamic knowledge before starting.", bullets: ["Reading & comprehension check", "Translation familiarity", "Learning goals setup"], outcome: "Personalized learning plan" },
        { title: "Principles of Tafseer", duration: "3 weeks", desc: "Foundational rules of Quranic interpretation.", bullets: ["Sources of Tafseer", "Quran by Quran explanation", "Hadith in Tafseer"], outcome: "Strong Tafseer foundation" },
        { title: "Asbab-un-Nuzool", duration: "3 weeks", desc: "Understanding reasons of revelation.", bullets: ["Historical background", "Social context", "Impact on interpretation"], outcome: "Contextual understanding" },
        { title: "Detailed Verse Explanation", duration: "6 weeks", desc: "In-depth explanation of selected verses.", bullets: ["Word meanings", "Thematic analysis", "Lessons extraction"], outcome: "Clear Tafseer comprehension" },
        { title: "Fiqh & Aqeedah in Tafseer", duration: "4 weeks", desc: "Islamic rulings and beliefs from the Quran.", bullets: ["Legal verses", "Belief-related verses"], outcome: "Balanced Islamic understanding" },
        { title: "Selected Surah Tafseer", duration: "Ongoing", desc: "Tafseer of commonly studied Surahs.", bullets: ["Surah Al-Fatiha", "Surah Yaseen", "Short Surahs"], outcome: "Independent Tafseer ability" },
        { title: "Practical Application", duration: "2 weeks", desc: "Applying Quranic guidance in life.", bullets: ["Daily life lessons", "Moral development"], outcome: "Living by the Quran" },
        { title: "Final Assessment", duration: "2 weeks", desc: "Evaluate Tafseer understanding.", bullets: ["Written assessment", "Oral explanation"], outcome: "Certified completion" }
      ]
    },
    completion: {
      title: 'Course Completion',
      desc: 'After completing this course, you will gain deep insight into the Quran\'s message and wisdom.'
    },
    benefits: {
      badge: 'What You Gain',
      title: 'Benefits of Tafseer-ul-Quran',
      items: [
        { title: 'Deep Insight', icon: '⭐', desc: 'Understand Quranic wisdom and guidance.' },
        { title: 'Correct Understanding', icon: '💎', desc: 'Avoid misinterpretation.' },
        { title: 'Scholarly Knowledge', icon: '📖', desc: 'Learn from authentic Tafseer sources.' },
        { title: 'One-on-One Learning', icon: '👤', desc: 'Personal guidance from scholars.' }
      ],
      perks: [
        'Authentic Tafseer references',
        'Practical life lessons',
        'Digital study material',
        'Completion certificate',
        'Flexible schedule',
        'Advanced discussions'
      ]
    },
    pricing: {
      badge: 'Investment Plans',
      title: 'Tafseer Learning Pace',
      subtitle: 'Premium one-on-one sessions.',
      plans: [
        { name: 'Base', price: '$49', classes: '3 classes weekly' },
        { name: 'Elite', price: '$69', classes: '4 classes weekly', popular: true }
      ]
    },
    faqs: {
      badge: 'Common Questions',
      title: 'Tafseer-ul-Quran FAQs',
      questions: [
        { q: "Is this course advanced?", a: "Yes, basic Quran reading or translation knowledge is recommended." },
        { q: "Which Tafseer books are used?", a: "We primarily use Tafseer Ibn Kathir and other reliable classical sources." },
        { q: "Is this suitable for adults?", a: "Yes, it is designed for mature students and adults." },
        { q: "Do I receive a certificate?", a: "Yes, a certificate is provided upon completion." },
        { q: "Is it one-on-one?", a: "Yes, all classes are personalized one-on-one sessions." }
      ]
    }
  },
  qiraatPage: {
    hero: {
      badge: 'Advanced Recitation',
      title: 'Master the',
      titleHighlight: 'Qiraat Ashra',
      subtitle: 'This advanced Qiraat Ashra course is designed for students who want to learn the ten authentic modes of Quranic recitation with precision, sanad awareness, and practical application.',
      stats: [
        { val: '8-12', label: 'Months Duration' },
        { val: '120+', label: 'Total Lessons' },
        { val: '30', label: 'Min Per Class' }
      ],
      price: '$49',
      perMonth: '/per month',
      details: '3 classes weekly',
      trialBtn: 'First trial class FREE',
      mainBtn: 'Book Free Trial',
      boxes: ['10 Authentic Qiraat', 'Riwayat & Usul Rules', 'Sanad Awareness', 'Completion Certificate']
    },
    whatIs: {
      badge: 'About This Course',
      title: 'What is Qiraat Ashra?',
      items: [
        { title: 'Ten Canonical Recitations', desc: 'Qiraat Ashra refers to the ten authentic and accepted modes of Quranic recitation transmitted through reliable chains of narration.' },
        { title: 'Advanced Quranic Science', desc: 'This course focuses on understanding differences in pronunciation, elongation, letters, and application of rules among the ten Qiraat.' },
        { title: 'Scholarly & Practical Approach', desc: 'Students learn both theory and practice under qualified scholars with ijazah-oriented methodology.' }
      ]
    },
    whyLearn: {
      title: 'Why Learn Qiraat Ashra?',
      points: [
        'Preserve authentic Quranic recitation',
        'Understand differences among Qiraat',
        'Strengthen Tajweed mastery',
        'Advance Islamic scholarship',
        'Prepare for Ijazah pathway',
        'Teach Quran professionally'
      ]
    },
    roadmap: {
      badge: 'Course Structure',
      title: 'Your Qiraat Ashra Journey',
      subtitle: 'A step-by-step advanced program for mastering the ten Qiraat',
      phases: [
        { title: "Eligibility Assessment", duration: "1 week", desc: "Evaluate Tajweed and recitation level.", bullets: ["Tajweed accuracy", "Makharij & Sifaat", "Fluency assessment"], outcome: "Readiness confirmation" },
        { title: "Introduction to Qiraat Science", duration: "3 weeks", desc: "Foundational principles of Qiraat.", bullets: ["History of Qiraat", "Seven vs Ten Qiraat", "Imams of Qiraat"], outcome: "Conceptual clarity" },
        { title: "Usul of Qiraat", duration: "4 weeks", desc: "Rules governing each Qiraat.", bullets: ["Madd differences", "Hamza rules", "Idgham & Izhaar"], outcome: "Strong rule application" },
        { title: "Farsh-ul-Huroof", duration: "6 weeks", desc: "Word-level variations among Qiraat.", bullets: ["Letter differences", "Word pronunciation", "Verse comparisons"], outcome: "Accurate differentiation" },
        { title: "Riwayat Practice", duration: "6 weeks", desc: "Practical recitation of Riwayat.", bullets: ["Hafs", "Warsh", "Qaloon"], outcome: "Controlled recitation" },
        { title: "Final Assessment", duration: "2 weeks", desc: "Evaluate Qiraat understanding.", bullets: ["Written assessment", "Oral recitation"], outcome: "Certified completion" }
      ]
    },
    completion: {
      title: 'Course Completion',
      desc: 'After finishing this course, you will master the authentic modes of recitation and be eligible for Ijazah pathways.'
    },
    benefits: {
      badge: 'What You Gain',
      title: 'Benefits of Qiraat Ashra',
      items: [
        { title: 'Deep Knowledge', icon: '🌟', desc: 'Master the science of Quranic readings.' },
        { title: 'Correct Application', icon: '✨', desc: 'Recite correctly in multiple modes.' },
        { title: 'Authentic Mastery', icon: '📜', desc: 'Learn from authentic Scholarly chains.' },
        { title: 'Advanced Skills', icon: '🎓', desc: 'Elevate your teaching and scholarship level.' }
      ],
      perks: [
        'Detailed Riwayat rules',
        'Comparative Qiraat study',
        'One-on-one sessions',
        'Completion certificate',
        'Sanad orientation',
        'Professional guidance'
      ]
    },
    pricing: {
      badge: 'Expert Investment',
      title: 'Scholarly Plans',
      subtitle: 'Join the most advanced study circles.',
      plans: [
        { name: 'Scholar', price: '$49', classes: '3 classes weekly' },
        { name: 'Mastery', price: '$89', classes: '5 classes weekly', popular: true }
      ]
    },
    faqs: {
      badge: 'Common Questions',
      title: 'Qiraat Ashra FAQs',
      questions: [
        { q: "Is this course for beginners?", a: "No, mastery of Tajweed and fluent Quran reading is required." },
        { q: "Which Qiraat are covered?", a: "All ten authentic Qiraat are covered in the full program." },
        { q: "How long does it take?", a: "The duration depends on the student's pace, typically 8-12 months." },
        { q: "Do I get a certificate?", a: "Yes, upon successful completion of the course." },
        { q: "Is it one-on-one?", a: "Yes, we prioritize personalized learning through one-on-one sessions." }
      ]
    }
  },
  revelation: {
    arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',
    translation: '"Read in the name of your Lord who created"',
    ref: 'Surah Al-Alaq (96:1)',
    desc: 'These blessed words mark the beginning of divine revelation. At Quran Kareem, we honor this sacred tradition by guiding students through authentic learning.',
    stats: [
      { val: '14+', label: 'Quran & Islamic Courses' },
      { val: '10K+', label: 'Students Worldwide' },
      { val: '50+', label: 'Certified Teachers' }
    ]
  },
  courses: {
    featured: [
      { title: 'Noorani Qaida', level: 'Beginner', desc: 'Understand Arabic alphabet and basic reading skills.', tag: 'Popular' },
      { title: 'Quran Reading with Tajweed', level: 'Intermediate', desc: 'Perfect your recitation with proper Tajweed rules.', tag: 'Best Seller' },
      { title: 'Quran Memorization (Hifz)', level: 'All Levels', desc: 'Complete Hifz program with expert Huffaz.', tag: 'Best Seller' }
    ],
    grid: [
      { title: 'Quran Translation', duration: '8-12 months', level: 'Intermediate' },
      { title: 'Tafseer-ul-Quran', duration: '1-2 years', level: 'Advanced' },
      { title: 'Qiraat Ashra Course', duration: '2-3 years', level: 'Advanced' },
      { title: 'Arabic Language', duration: '10-12 months', level: 'All Levels' },
      { title: 'Prayer and Duas', duration: '2-3 months', level: 'Beginner' },
      { title: 'Islamic Studies', duration: '6-8 months', level: 'All Levels' },
      { title: 'Seerat-un-Nabi', duration: '4-6 months', level: 'All Levels' },
      { title: 'English Language', duration: '8-10 months', level: 'All Levels' },
      { title: 'Urdu Language', duration: '6-8 months', level: 'All Levels' },
      { title: 'Pashto Language', duration: '6-8 months', level: 'All Levels' }
    ],
    subtitle: 'Explore our catalog of premium Islamic courses.'
  },
  excellence: {
    title: 'Excellence That Sets Us Apart',
    subtitle: 'Discover why thousands of students worldwide trust us for their Islamic education.',
    items: [
      { title: 'Ijazah Certified Teachers', desc: 'Teachers holding authentic Ijazah certificates.' },
      { title: 'Live Interactive Classes', desc: 'Real-time one-on-one sessions with screen sharing.' },
      { title: 'Male/Female Instructors', desc: 'Choose based on your preference.' },
      { title: '24/7 Flexible Schedule', desc: 'Book classes at your convenient time.' },
      { title: 'Worldwide Access', desc: 'Learn from anywhere in the world.' },
      { title: 'Affordable Pricing', desc: 'Quality education at competitive rates.' },
      { title: '14+ Specialized Courses', desc: 'Comprehensive curriculum covering all aspects.' },
      { title: 'Dedicated Support', desc: '24/7 customer support for students.' }
    ]
  },
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our methodology and enrollment.',
    questions: [
      { q: 'How do I register for classes?', a: 'Simply click the "Start Free Trial" button, fill the form, and our team will contact you within 24 hours.' },
      { q: 'What are the class timings?', a: 'Classes are available 24/7. You can choose any time that fits your schedule.' },
      { q: 'Are teachers qualified?', a: 'Yes, all our teachers are Ijazah certified and have years of teaching experience.' },
      { q: 'Do you offer a free trial?', a: 'Yes, we offer a 100% free trial class with no commitment required.' }
    ]
  },
  footerCTA: {
    badge: 'Limited Time Offer',
    title: 'Begin Your Sacred Quran Journey',
    subtitle: 'Join 10,000+ students worldwide. Start with your FREE trial class today - no credit card required!',
    trialCard: {
      title: 'Start Your FREE Trial',
      subtitle: 'No Credit Card • No Commitment',
      whatsapp: 'WhatsApp Us Now',
      call: 'Call Us Directly',
      email: 'Send Email Inquiry'
    }
  },
  footer: {
    quickLinks: 'Quick Links',
    courseLinks: 'Our Courses',
    languages: 'Languages',
    copyright: '© 2024 Quran Kareem Institute. All Rights Reserved.'
  },
  featured: {
    title: 'Featured Surahs',
    readNow: 'Read Now'
  },
  search: {
    placeholder: 'Search for a Surah...',
    button: 'Search'
  },
  quickAccess: {
    readSurah: 'Read Surah',
    readPara: 'Read Para',
    allAyahs: 'All Ayahs',
    exploreTopics: 'Explore Topics'
  },
  cta: {
    title: 'Ready to Start Your Journey?',
    btn: 'Start Free Trial'
  },
  bookmark: {
    title: 'Sacred Knowledge',
    desc: 'The best among you are those who learn the Quran and teach it.'
  },
  problemSolution: {
    heading: 'Bridging the Gap',
    problemsTitle: 'Common Challenges',
    problems: ['Busy schedule', 'Lack of local teachers', 'Language barriers'],
    solutionTitle: 'Our Solution',
    solutionDesc: 'Personalized online classes with expert teachers available 24/7.'
  },
  whyChoose: {
    title: 'Why Choose Us',
    features: [
      { title: 'Expertise', desc: 'Certified teachers with years of experience.' },
      { title: 'Flexibility', desc: 'Learn at your own pace and time.' }
    ]
  },
  howItWorks: {
    title: 'How It Works',
    steps: [
      { title: 'Register', desc: 'Sign up for a free trial class.' },
      { title: 'Connect', desc: 'Meet your teacher online.' },
      { title: 'Learn', desc: 'Start your educational journey.' }
    ]
  },
  quotes: [
    'Verily, with hardship comes ease.',
    'Allah loves those who are patient.',
    'Be kind, for whenever kindness becomes part of something, it beautifies it.'
  ],
  ayah: {
    arabic: 'وَقُل رَّبِّ زِدْنِي عِلْمًا',
    translation: 'And say, "My Lord, increase me in knowledge."',
    ref: 'Surah Ta-Ha (20:114)'
  },
  whatsapp: {
    text: 'Chat with us on WhatsApp',
    sub: 'Get instant support and registration help.',
    sub2: 'Available 24/7',
    btn: 'WhatsApp Now'
  }
};

const ur: typeof en = {
  ...en,
  dir: 'rtl',
  logo: 'تنزيل القرآن',
  nav: {
    home: 'ہوم',
    courses: 'کورسز',
    blog: 'بلاگ',
    contact: 'رابطہ کریں',
  },
  contact: {
    hero: {
      badge: '24/7 دستیاب ہے',
      title: 'ہمارے ماہرین سے رابطہ کریں',
      subtitle: 'کورسز کے بارے میں سوالات ہیں یا فری ٹرائل شروع کرنا چاہتے ہیں؟ واٹس ایپ یا کال کے ذریعے براہ راست رابطہ کریں۔'
    },
    methods: [
      {
        title: 'واٹس ایپ کریں',
        desc: 'رجسٹریشن اور سوالات کے لیے فوری رابطہ کریں۔',
        btn: 'واٹس ایپ پر بات کریں',
        icon: '💬',
        color: '#25D366'
      },
      {
        title: 'کال سپورٹ',
        desc: 'اپنے تعلیمی سفر کی منصوبہ بندی کے لیے براہ راست بات کریں۔',
        btn: 'کال کریں',
        icon: '📞',
        color: '#D4AF37'
      },
      {
        title: 'ای میل انکوائری',
        desc: 'اپنے سوالات ای میل کریں اور ہم 24 گھنٹوں میں جواب دیں گے۔',
        btn: 'ای میل بھیجیں',
        icon: '📧',
        color: '#D4AF37'
      }
    ],
    form: {
      title: 'پیغام بھیجیں',
      subtitle: 'نیچے دیا گیا فارم پر کریں اور ہم جلد رابطہ کریں گے۔',
      name: 'آپ کا مکمل نام',
      email: 'ای میل ایڈریس',
      phone: 'فون نمبر',
      course: 'کورس منتخب کریں',
      message: 'آپ کا پیغام',
      btn: 'درخواست جمع کروائیں'
    }
  },
  blog: {
    ...en.blog,
    hero: {
      title: 'قرآن کریم بلاگز',
      breadcrumb: 'ہوم - بلاگ'
    },
    readMore: 'مزید پڑھیں',
    banner: {
      title: 'آج ہی اپنے گھر کے سکون سے آن لائن قرآن سیکھیں۔',
      btn: 'فری ٹرائل بک کریں'
    }
  },
  qaidaPage: {
    ...en.qaidaPage,
    hero: {
      ...en.qaidaPage.hero,
      badge: 'اپنا سفر شروع کریں',
      trialBtn: 'پہلی ٹرائل کلاس بالکل مفت',
      mainBtn: 'فری ٹرائل بک کریں',
      boxes: ['صفر سے پڑھنے تک', 'انفرادی آن لائن کلاسز', 'کورس کا سرٹیفکیٹ', 'لچکدار شیڈول']
    },
    whatIs: {
      ...en.qaidaPage.whatIs,
      badge: 'اس کورس کے بارے میں',
      title: 'تنزيل القرآن قاعدہ کیا ہے؟',
    },
    standsOut: {
      ...en.qaidaPage.standsOut,
      title: 'تنزيل القرآن قاعدہ کیوں ممتاز ہے؟',
    },
    roadmap: {
      ...en.qaidaPage.roadmap,
      badge: 'کورس کا ڈھانچہ',
      title: 'آپ کا مکمل تعلیمی سفر',
    },
    completion: {
      ...en.qaidaPage.completion,
      title: 'کورس کی تکمیل کا اعزاز',
    },
    benefits: {
      ...en.qaidaPage.benefits,
      badge: 'آپ کیا حاصل کریں گے',
      title: 'اپنے قرآنی سفر کو بدلیں',
    },
    pricing: {
      ...en.qaidaPage.pricing,
      badge: 'انویسٹمنٹ پلانز',
      title: 'اپنی سیکھنے کی رفتار کا انتخاب کریں',
    },
    faqs: {
      ...en.qaidaPage.faqs,
      badge: 'عام سوالات',
      title: 'تنزيل القرآن قاعدہ کے بارے میں سب کچھ',
    }
  },
  tajweedPage: {
    ...en.tajweedPage,
    hero: {
      ...en.tajweedPage.hero,
      badge: 'اپنی تلاوت کو بہتر بنائیں',
      mainBtn: 'فری ٹرائل بک کریں',
      boxes: ['روانی کے ساتھ تلاوت', 'درست تلفظ', 'ون آن ون کلاسز', 'کورس سرٹیفکیٹ']
    }
  },
  tafseerPage: {
    ...en.tafseerPage,
    hero: {
      ...en.tafseerPage.hero,
      badge: 'گہرا بصیرت',
      trialBtn: 'پہلی ٹرائل کلاس بالکل مفت',
      mainBtn: 'فری ٹرائل بک کریں',
      boxes: ['مستند تفسیری ذرائع', 'تاریخی پس منظر', 'گہرا غور و فکر', 'کورس کا سرٹیفکیٹ']
    },
    whatIs: {
      ...en.tafseerPage.whatIs,
      badge: 'اس کورس کے بارے میں',
      title: 'تفسیر القرآن کیا ہے؟',
    },
    whyLearn: {
      ...en.tafseerPage.whyLearn,
      title: 'تفسیر کیوں سیکھیں؟',
    },
    roadmap: {
      ...en.tafseerPage.roadmap,
      badge: 'کورس کا ڈھانچہ',
      title: 'آپ کا تفسیری سفر',
    },
    completion: {
      ...en.tafseerPage.completion,
      title: 'کورس کی تکمیل',
    },
    benefits: {
      ...en.tafseerPage.benefits,
      badge: 'آپ کیا حاصل کریں گے',
      title: 'تفسیر القرآن کے فوائد',
    },
    pricing: {
      ...en.tafseerPage.pricing,
      badge: 'انویسٹمنٹ پلانز',
      title: 'اپنی رفتار منتخب کریں',
    },
    faqs: {
      ...en.tafseerPage.faqs,
      badge: 'عام سوالات',
      title: 'تفسیر القرآن - عام سوالات',
    }
  },
  qiraatPage: {
    ...en.qiraatPage,
    hero: {
      ...en.qiraatPage.hero,
      badge: 'اعلیٰ درجے کی تلاوت',
      trialBtn: 'پہلی ٹرائل کلاس بالکل مفت',
      mainBtn: 'فری ٹرائل بک کریں',
      boxes: ['10 مستند قراءات', 'روایت اور اصول', 'سند کی آگاہی', 'کورس کا سرٹیفکیٹ']
    },
    whatIs: {
      ...en.qiraatPage.whatIs,
      badge: 'اس کورس کے بارے میں',
      title: 'قراءات عشرہ کیا ہے؟',
    },
    whyLearn: {
      ...en.qiraatPage.whyLearn,
      title: 'قراءات عشرہ کیوں سیکھیں؟',
    },
    roadmap: {
      ...en.qiraatPage.roadmap,
      badge: 'کورس کا ڈھانچہ',
      title: 'آپ کا قراءات کا سفر',
    },
    completion: {
      ...en.qiraatPage.completion,
      title: 'کورس کی تکمیل',
    },
    benefits: {
      ...en.qiraatPage.benefits,
      badge: 'آپ کیا حاصل کریں گے',
      title: 'قراءات عشرہ کے فوائد',
    },
    pricing: {
      ...en.qiraatPage.pricing,
      badge: 'ماہرانہ پلانز',
      title: 'تعلیمی سرمایہ کاری',
    },
    faqs: {
      ...en.qiraatPage.faqs,
      badge: 'عام سوالات',
      title: 'قراءات عشرہ - عام سوالات',
    }
  }
};

export const translations: Record<Language, typeof en> = {
  en: en,
  ur: ur,
  ar: {
    ...en,
    dir: 'rtl',
  }
};

import { UniversityData } from "./types";

export const defaultUniversityData: UniversityData = {
  universityName: "Anna University",
  tagline: "Progress Through Knowledge",
  established: "1978",
  location: "Chennai, Tamil Nadu, India",
  deanMessage: {
    name: "Dr. Alistair Finch",
    title: "Dean of Faculty & Academic Affairs",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYQvaiFF6jQsqMmjJOHMwSwjcmqEquY67Cf3ntNYUOE35nKrwQxaxlzFfW4sRlWLs27FinUDxe2G1lf4WynXnhpbE94keHdtdU7xEKhoQ6FVVK-b3cPhSIAnom8mqleptiJAi0h4Byzxukbf2bte4B_a4fQuJcgGcF3_gjdVrL2eO200YGduJbpTk5CAYhS7TT0082WKFjgIgG3nqfr3Hy-xcREh1mZlsxD1YrcgWFB6PZruk74zPEcgjFjtahpAQLElrVim19sCCN",
    content: "At Anna University, we do not merely anticipate the future; we design it. Our community represents a unique ecosystem of interdisciplinary excellence. Here, vintage scholarly wisdom merges seamlessly with pioneering quantum engineering. We welcome you to explore our campus perspectives, engage with our distinguished faculty, and immerse yourself in an atmosphere of restless, beautiful curiosity.",
    signature: "Dr. Alistair Finch, Ph.D."
  },
  announcements: [
    {
      id: "ann-1",
      title: "Admissions Extended for Autumn Cohort 2026",
      content: "Due to a high volume of outstanding portfolios, the submission window for the Graduate Quantum Computing and Cybernetics program has been extended by two weeks. Apply before August 15.",
      date: "2026-07-15",
      category: "Admissions"
    },
    {
      id: "ann-2",
      title: "Pioneering Solid-State Fusion Research Grant",
      content: "Anna University has received a $14M grant from the Federal Science Foundation to spearhead development on room-temperature superconducting lattices.",
      date: "2026-07-10",
      category: "Academic"
    },
    {
      id: "ann-3",
      title: "Digital Library Access Upgrades & Archives Release",
      content: "Our virtual system has successfully digitized 12,000 vintage leather-bound manuscripts. Students can now access full high-resolution scans with text searchable OCR tools.",
      date: "2026-07-01",
      category: "General"
    }
  ],
  events: [
    {
      id: "ev-1",
      title: "Annual Convocation & Doctoral Commencement",
      date: "2026-09-12",
      location: "Great Ceremonial Hall",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfxx8m8otB6sS4MNAt2Is8vxnw-Dc93NoVRSNH3G7CLYrjp1H4WZrQIZxAtOMNxawRw0TA-7QTY7w43wHMn-ji6ncXZtiRhZlw71MScRuxx2K9o42FLCw-2hwQST0zZhdhsxsj6SDcS2Rzd3Jag_bCPURoHWhJe6Aw2tKp-tsmD5KLHWTvRDrxGma5n1C5wMdIgntSYJvCEtLvXbe-LUxJ97wEpI72LV5ce9J8f3aK4xYvEPnPF-Ty-1Fk7P5o4TVL5EEVQ2GPI3rS",
      description: "Celebrate the graduation of our outstanding 2026 cohort. Featuring keynotes by Nobel laureates and a vintage garden reception."
    },
    {
      id: "ev-2",
      title: "Autonomous Systems Exhibition & Flight Trials",
      date: "2026-10-05",
      location: "Innovation Hub Courtyard",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8hYsMs33LmALX4Y-vNUWTvwhR11Y00uN1I8F9FLMtEFN0eVGJ17L2EGwcgOm2mlF-GIPBk-G959Q5qwDs6d8C-_B_fDU0O2QpNz8ycs2XBU4bokxSV3952W2gk8NuwDKenirh1GAsDk2Q_by-bUWssc1Gk_RtwALMRKIHZ05leVA-ZU4Hmbig3urZswaqyppSS8y_0zPSyhq16AyNdij_3KaIqMK9UBXNtCQwMI9UvLxjdUWddSHfBJaZtYUwdG2EF6ZXK8nox_kR",
      description: "Witness next-generation aerial swarms, quadrupedal search robots, and smart AI agents navigating our custom physics obstacle courses."
    }
  ],
  departments: [
    {
      id: "dept-cs",
      name: "Computer Science & Artificial Intelligence",
      code: "CSAI",
      hod: "Prof. Helena Rossi",
      description: "Where computational theory meets deep generative learning. We prepare leaders in distributed architectures, neurological networks, and advanced human-computer interaction.",
      facultyCount: 38,
      studentsCount: 420,
      streams: ["Software Engineering", "Artificial Intelligence", "Quantum Computing", "Cyber Security"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABPpsIt9tUujo8g81eIxDz2op0WKQBsYmvz9P7Az9sXymlIOUX5QEd-xaOO_mlihYqpnMJSEcY36KCFezTCMz_zYqvwUrmwbNP4EgWn1qqSn-qG6iMBr-4dCgXX9WpXiWvM8Qw89mO3hd683Oo4Y2aGr9WN9E2la4GMu-X-sWhfIXyjggFp2C0fwRnA_Sk7LRxfiyX66t7Sv6TiszVDPKmrNMSWI-u-qNd7TAmom1bSAsNxvBWLiopSXJ5rCvbcwqPk9GbnMnYy57A",
      facilities: ["Quantum Simulation Lab", "AI Neural Clusters Room", "VR Immersive Arena"]
    },
    {
      id: "dept-science",
      name: "Quantum Physics & Material Science",
      code: "QPMS",
      hod: "Dr. Alistair Vance",
      description: "Unraveling the fabric of nature. Investigating solid-state materials, micro-fusion energy, space-time manifolds, and molecular quantum entanglement dynamics.",
      facultyCount: 24,
      studentsCount: 180,
      streams: ["Condensed Matter", "Atomic Physics", "Superconducting Lattices"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsScj_qDSrqoDUPr1qJi4uQ3SFaC1Yk4hawNg7UV8y0K0OzWnoaVRW4z81AMxdfhG1UpaPSWE3AGKdPmquwmqpWTPXx8d5L5tpS8MHHqKfYt7WzawEAQosfWuLXWLcXawIjD-Bs5FH3aFUSt18mwc_jtjAJoP-toHXflr1TUxZ48DxGNvLRse2D12vB5-Z1B77Av8KSrvxCkBfKFupLHM9oFfT1JW24JYOQOtE2lv1BrOzDxRFbdRO8c0TZKCDghicdkYg0c442Q0l",
      facilities: ["Cryogenic Magnetics Lab", "Subatomic Particles Trap", "Advanced Laser Array"]
    },
    {
      id: "dept-commerce",
      name: "Commerce & Economic Policy",
      code: "COEP",
      hod: "Dr. Julian Sterling",
      description: "Analyzing trade structures, cryptographic financial systems, micro-market dynamics, and international resource allocation protocols under high-uncertainty climates.",
      facultyCount: 18,
      studentsCount: 290,
      streams: ["Quantitative Finance", "Behavioral Economics", "Cryptographic Asset Systems"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5JjIpo28eP4h4RW1EQ58fTokEaPAYMxIDelCBlCNoMHVNB9tjqrYzIdT_rKfmu0Vr8c5ct92mZ8o0LL0EeYlzbfkcWcaaxLSLsOIKxmNarRZJ1kxVkGQMmLdg3xPKi8sB9V2ggwgLHy-KtNxzIs-ApGLUFMmxzc52RDBqladZrloBdjcVDtV8cnIgsnxR69jL8cvzaR9H7vqEqxi_C_FPqNT-_fD3bJMl0X4r1XhL8jN78_W8rwJ4tYQ1kfoDpi1pyAyUzL4ockjq",
      facilities: ["Interactive Trading Floors", "Macroeconomic Modeling Room"]
    },
    {
      id: "dept-management",
      name: "Strategic Management & Innovation",
      code: "SMI",
      hod: "Dr. Sarah Okafor",
      description: "Nurturing the architects of enterprise. Integrating agile development, design thinking, systems optimization, and venture generation with deep corporate social responsibility.",
      facultyCount: 20,
      studentsCount: 310,
      streams: ["Venture Incubation", "Organizational Psychology", "Operations Strategy"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2NH0RC6vvhELxGDScP4PTjtPvJUw6SnqLGb7DnlxRV4lsPkTZ8ZKopy7GHO78yK5GtPGWDsPgysKW8QVlIgOJcQhfbUlbT8ofiASgsjprZXc6h5RIW_YB-Opm4QqLW_1HXdJ0utHfEbuKYcOIExVWPsueqcRwzEpUnySsC88ZrSSiwaV89DvpYiwu1UV9mNiRQq4R2FKmTD2H3HBAtvEUooy_3DHA-_U0vPMbblFCQsA1ATxLG90MJInKsOzmAoacp5Inw4T3FRC5",
      facilities: ["Co-Working Sandbox Labs", "Executive Presentation Theatre"]
    },
    {
      id: "dept-humanities",
      name: "Classical Philosophy & Digital Humanities",
      code: "CPDH",
      hod: "Prof. Marcus Thorne",
      description: "Exploring the enduring human questions through computational frameworks. Uniting historical rhetoric, ethical AI guidelines, linguistics, and digitized manuscript archives.",
      facultyCount: 15,
      studentsCount: 140,
      streams: ["AI Ethics & Philosophy", "Digital Historiography", "Classical Civilizations"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZVrMQ3uMUCQgXZsmupwiYQb9QZwwIx7icchvtq0Z0BWihOAySgVwA_mKgxR5bJIVeFv2NhmDLUOk0T_OJN8zh0k89-lyq6YoyxC-SU3P0QemoY402yrTQTeJjw5bhqImWEjCQUe3GFHQu-zVBbLS5odOdWlsHSl0DURazoHS9OZtuM5nMi_cXJ8DKGZQie-4bsfo4jdn0SGtCMxquIu86Smwlozpjz3o816gxnSHFto3s14bEwLBgHax_8AwLCivYGwgReA1ct31O",
      facilities: ["Rare Manuscript Digital Suite", "Ethical Discussion Atrium"]
    }
  ],
  students: [
    {
      id: "st-1",
      name: "Pushparaj Okonkwo",
      rollNo: "AE-2026-004",
      department: "Computer Science & Artificial Intelligence",
      year: 3,
      email: "pushparaj.okonkwo@annauniv.edu",
      gpa: 3.96,
      status: "Dean's List",
      enrollmentDate: "2024-09-01"
    },
    {
      id: "st-2",
      name: "Pushparaj Vance",
      rollNo: "AE-2026-118",
      department: "Quantum Physics & Material Science",
      year: 4,
      email: "pushparaj.vance@annauniv.edu",
      gpa: 3.82,
      status: "Dean's List",
      enrollmentDate: "2023-09-01"
    },
    {
      id: "st-3",
      name: "Pushparaj Dupont",
      rollNo: "AE-2026-254",
      department: "Commerce & Economic Policy",
      year: 2,
      email: "pushparaj.dupont@annauniv.edu",
      gpa: 3.65,
      status: "Active",
      enrollmentDate: "2025-09-01"
    },
    {
      id: "st-4",
      name: "Pushparaj Al-Hassan",
      rollNo: "AE-2026-091",
      department: "Strategic Management & Innovation",
      year: 3,
      email: "pushparaj.al-hassan@annauniv.edu",
      gpa: 3.12,
      status: "Active",
      enrollmentDate: "2024-09-01"
    },
    {
      id: "st-5",
      name: "Pushparaj Martinez",
      rollNo: "AE-2026-302",
      department: "Classical Philosophy & Digital Humanities",
      year: 1,
      email: "pushparaj.martinez@annauniv.edu",
      gpa: 2.30,
      status: "On Probation",
      enrollmentDate: "2026-02-01"
    }
  ],
  faculty: [
    {
      id: "fac-1",
      name: "Dr. Alistair Vance",
      title: "Professor of High-Energy Physics",
      department: "Quantum Physics & Material Science",
      email: "alistair.vance@annauniv.edu",
      phone: "+1 (617) 555-0142",
      bio: "A pioneer in subatomic particles containment systems. Dr. Vance has spent twenty years designing electromagnetic lattices that capture and analyze ephemeral space-time anomalies.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhHkJGO3eMMcnA05BsTQfQ_QzBiE3qFXNXEuVNmvFo1IJXi2UBlOGVbZFOnJui9Mae2Y9nKBa4HoATZWPGcdmtCXZ3qfhCjb3HYxsxj3rvth4jWRqDCxGUdxFpaZUTkoYzGV1X8f_xAvTRWi7y7BDN2oTtDIDYsWT_bkBlcnigYQC4cKipSy-hUV2Vca0ufhkBv4wRQHssRsvaybnsaOE2-BkfMXSda88Rwt23UPNsi4b4uaVbviNnBC57DDbaPuR5jSvHDx563Ims",
      specialty: "High-Energy Lattice Manipulation",
      publications: ["Symmetric Fusion Fields", "Superconducting Quantum Entanglement (2025)", "The Resonance Principle"]
    },
    {
      id: "fac-2",
      name: "Prof. Helena Rossi",
      title: "Chair of Neural Machine Learning",
      department: "Computer Science & Artificial Intelligence",
      email: "helena.rossi@annauniv.edu",
      phone: "+1 (617) 555-0188",
      bio: "Helena focuses on generative neural networks mimicking natural cellular growth. She oversees the CSAI division and directs autonomous ethics committees globally.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdYZjF2g9-vNruQaZ5OhkCgRblSSImZlf7Z-fjZHUG-17tjfjLvxvk3U89o3eQBGszmJ8urCfnAETqXPFNGzCVLGakv5WuZoUETDGLJPN0_5qRdd61UvPBpsdjb69h23zv_xuCBF2wU1IxHSQaVcmfEfiCFLi1IlFtOWDYYHdsJRbXEAHBvdIunIStXSwvY2CaCNAx6k_-PJSrYBuj1xvardcV1lC3wPli6cJMTwzFKFVtLXjYm6YmwogTaUUsld2hsgRJu7VzM0KO",
      specialty: "Neural Growth Models & Algorithmic Ethics",
      publications: ["Mimetic Intelligence Cycles", "The Synaptic Canvas: Art in Neural Networks"]
    },
    {
      id: "fac-3",
      name: "Dr. Julian Sterling",
      title: "Senior Advisor of Cryptographic Economies",
      department: "Commerce & Economic Policy",
      email: "julian.sterling@annauniv.edu",
      phone: "+1 (617) 555-0211",
      bio: "Dr. Sterling studies modern algorithmic liquidity pools and behavioral feedback mechanisms under stress environments.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOEmj0WSTSV7DBcwKv-0hJb8BmU3Gi8buUS_ziNXotoE1m7-5gM8Ee8XDx79szsT3IkUZhNNNCt1TASLoPhsIrf7UnMVMnUQFdreiJR1zKLc_6p_XL726PniQuPzaliD8q5xy_ct_9Jy4RbCy_dghvgbit10MAQ2I2SxRZD7QkbraRiqVxe2dtimWDDDip9NZFkqSOjVECKED32srhuaGSZJdukIlXWTOtt3hoBqLXddkIIv9QPVUkP_SWAf-eyxdeMnj1cFbhbYec",
      specialty: "Crypto-Asset Liquidities",
      publications: ["Distributed Currencies and Sovereign Debt", "Behavioral Swarms in Cryptofinance"]
    },
    {
      id: "fac-4",
      name: "Dr. Sarah Okafor",
      title: "Professor of Innovation Systems",
      department: "Strategic Management & Innovation",
      email: "sarah.okafor@annauniv.edu",
      phone: "+1 (617) 555-0199",
      bio: "Dr. Okafor focuses on systems optimization, incubating deep tech enterprises, and coaching teams to scale disruptive innovations with human-centric principles.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqtLg47Ve36_BF8B9sU76jAdWzFYhLVUUxh40BIVWeJZQTkG9qn-iMd6ZQx7_Tuejr25eLAyF40GnAqH9zwH37NXiLFLV-vxyDcMBUyeu8Ch1CTGSOge-gkx4yMH1w6_HrZmP4MV8Ug31GEE8nmmiMIz1N1n3uHUn-9Cie-bIwC4Vl1CeKMMpvLyZWo-L_WorBXdXpehnWm1v5IpdqHDfqi7PGlj25pNytjfbyFSKknPMWtoCdocNSjudokGGP3i-BbYZagV4Ihd1a",
      specialty: "High-Impedance Enterprise Structures",
      publications: ["The Agile Matrix", "Venture Loops in Deep Technology"]
    },
    {
      id: "fac-5",
      name: "Prof. Marcus Thorne",
      title: "Director of Classical Philosophy & Ethics",
      department: "Classical Philosophy & Digital Humanities",
      email: "marcus.thorne@annauniv.edu",
      phone: "+1 (617) 555-0205",
      bio: "An outstanding scholar in Classical Aristotelian metaphysics. Prof. Thorne works alongside software architects to translate ethical imperatives into executable logic.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbnQJT0v_zoZ_2Sd8sS9MnM5MKksUWCU6AcYtltsgwjsF1BMcO_jAoh1iAVPriDK6GiYZ_gyJ8cuG7RaxCfGyPbpTksapI7KMyqv3mkr_-6UhBBEt281hdhNAIB3IPdjQoSSOaSCxrd13V6eJ368lM-2tcCe5aAc9jBe7qGrJ5eEHM10OyWzLz0XvzDQgrstyfGVc_qH9m2VD2hMd85xuVENQ1JEZo6-G1Qr_T8rhLk_3dmO2TZx1MwH06VhVprjEVgHyzKZ0JODRD",
      specialty: "Digital Hermeneutics & Algorithmic Ethics",
      publications: ["The Digital Republic", "Metaphysics of the Digital Age", "Aristotle on Neural Networks"]
    },
    {
      id: "fac-6",
      name: "Dr. Elena Kovic",
      title: "Spotlight Quantum Cryptography Researcher",
      department: "Computer Science & Artificial Intelligence",
      email: "elena.kovic@annauniv.edu",
      phone: "+1 (617) 555-0155",
      bio: "Elena's critical research on quantum safe cryptography algorithms has protected state utilities. She runs the prestigious Cyber-Secure Shield initiative at Anna University.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2ZVVFMnZYsG7X52-DYwJ1o7N3fk4Et6j8OU4iupJlKcwzVWjKQEKcvzJM-fpVSuJvKw-KJTd6b2xYaA8YfSWMszEsbETEBBqfw84kvv1cJy3YF1p4WaKBwHZA3144_QC6qrTxAhFhMzKLZAg1hFXszvKXOS3fCqW6iZrcw-MECxQJNg2DB-8Fukq8Fg3FVSZ-aKXIlwcrvo6OaBEYW5gYgm_r65sgu1q4eKybAFM53bsh8Bhm90ABhIIZ1K5OLkkyFvddZZCmvqmo",
      specialty: "Quantum Cryptographic Integrity",
      publications: ["Zero-Trust Lattices", "Post-Quantum Safety Vectors (2026)"]
    },
    {
      id: "fac-7",
      name: "Dr. Maya Rao",
      title: "Senior Lecturer of Behavioral Economics",
      department: "Commerce & Economic Policy",
      email: "maya.rao@annauniv.edu",
      phone: "+1 (617) 555-0234",
      bio: "Dr. Rao conducts empirical field studies on microfinance and cognitive biases in automated decision making systems.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBqauzJdB2eQTh790Vqq1ZB7SHDhBpAu1lRoiL674fzRV2rToqujFKHLfEChyJi3SflKzaJxW9I1sb-7vfGL3KCvZ_FzgOp_KUjxoC5M5I4la2z-a5UNc5Z4ukGF_Rr_kO5PhethqCAaKZIWNuctjHJINFFU1oSodYyLyPDIswhXFthj_7hp4698QHo67lbSuMpxhkaMg6ZQOFid6sq91LqzzCx_yz-KRgZ2IhR0z6xS1O3rT0PPVeTy19SdOon-LioZmQKXLCNt4BQ",
      specialty: "Macro Cognitive Biases",
      publications: ["Heuristics in Digital Markets", "Altruism and Game Theory"]
    },
    {
      id: "fac-8",
      name: "Dr. Julian Chen",
      title: "Associate Professor of Advanced Materials",
      department: "Quantum Physics & Material Science",
      email: "julian.chen@annauniv.edu",
      phone: "+1 (617) 555-0271",
      bio: "Researching novel composite nanostructures and graphene crystal alignments for hyper-conductive electronics.",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjI1aSNivV7xG-8J4K7LjGVlnPAKcRX-laCOjtA8TuyurHjKjHdcgT1xIcxUXiNO941RMqVtk1EMLMQndoF8ivkvd5G9TPIQ2p018aiBsjX7-LafHc2M1FIWNzk7gO4l2XO9xIOVx4TRPer0WTRzgx4uHH1IqR2cmFOAXORYgoPhhClsuIFsqn7czwMS2HEJsU-oy2-vseURbczTy6RlFtS0K1t9OrMDvNkt1-bUa0MDsU7q02YcSUE68Z1PJ7TsG2upLMaxVFa4Hl",
      specialty: "Carbon Nano-lattices",
      publications: ["Graphene Waveguides (2025)", "Hyper-conductive Nano-coatings"]
    }
  ],
  gallery: [
    {
      id: "gal-1",
      title: "The Great Ceremonial Hall Commencement",
      category: "Campus",
      description: "A breathtaking view of the graduation ceremony where our scholars receive their official degrees.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfxx8m8otB6sS4MNAt2Is8vxnw-Dc93NoVRSNH3G7CLYrjp1H4WZrQIZxAtOMNxawRw0TA-7QTY7w43wHMn-ji6ncXZtiRhZlw71MScRuxx2K9o42FLCw-2hwQST0zZhdhsxsj6SDcS2Rzd3Jag_bCPURoHWhJe6Aw2tKp-tsmD5KLHWTvRDrxGma5n1C5wMdIgntSYJvCEtLvXbe-LUxJ97wEpI72LV5ce9J8f3aK4xYvEPnPF-Ty-1Fk7P5o4TVL5EEVQ2GPI3rS"
    },
    {
      id: "gal-2",
      title: "Advanced Bio-Quantum Research Group",
      category: "Academics",
      description: "Scholars operating micro-fusion containment fields in the subatomic laboratory suites.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1xUCObk54E3JPwyduLbKIErFxAINSlTCGTN-5pQlG2Km1dTMTE2qjogbfq_fpNpmgn4IYBJYZaNcgygCSXbyTKqnC-Hf1hqmy3HNjSY8bFZlcE30J1gIcei5v-F45PlR5PcbpFoRGaiF1kt5fr0F8lJYU7YLM-xLcCcWKVpJjEKifYlxp7iA7kL9pmrEpYLb8DCF3QupIfl9MgFFf-dH20zF7wgytn4kCxkGRSLlL3U6wax3P7XJtCLiq_O8_wWj8Rh_IbvWKHrdu"
    },
    {
      id: "gal-3",
      title: "The Multi-Level Knowledge Atrium",
      category: "Campus",
      description: "Where scholarly manuscripts meet modern interactive glass tables and physical study lounges.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4Mky2L5BqbJFvZbz-IpfywOWPLHVmuVHyZ6B5FPCD-yVinG4N8uf1JalZ_IHp9ZZSpCfj3vtKWqzz_aCffIkYMmx5_q891pdEllcKEuzW30YX5XpMzaw022gJOwOQSlo1pLkX4GWfsv3GYwROssl1k5bSqg0_neRMtEJ19JbuGrs2x__NOqEirwTUyKwQgW2TjiIARIiuXdUG6rr9bS8HFTCa-RUc6jg2fhTiKLU4I0mcGk-6X_7vZdNZnqAEb7uaxjcLK91uWqLH"
    },
    {
      id: "gal-4",
      title: "Main Quadrangle Autumn Panorama",
      category: "Campus",
      description: "The historical administrative center displaying classic brick masonry combined with modern kinetic sun shields.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA9wOfKp5umVGtMdMnsAQhMGt-8LKXuC_iNQP5Tbt3SdmLLeol20ub8Ze4aM61RVlOx8gh2dtscR455SbB1tZp0QSfXd6Q7ZAz4NMbDCfXxBN05cmiv20HzZaxThkZgfaTk2RZrxDMy1hHVrh7RexaV1_LtUmG0tNdTxo__1H0t72NOQcZis3OFOb9tMdJHP4h8qSy_mZb6icPthVgbpAbRQRG1hwcAstPMlT2epmsy3HNDsfaSj2HFt3-F9b2hqwfvQgvEOJziOic"
    },
    {
      id: "gal-5",
      title: "Residency Suites Student Lounge",
      category: "Student Life",
      description: "Frosted panels, acoustic wood arches, and cozy lighting foster collaboration and peer-to-peer mentoring.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAa2xMZRt2DkyEu52SHUmbSAmUBgUbOe4gosbVP6APNG4l9LU0sL61g1ifF3xpsBZCDb4mrZcq2wGMZyR5cTb8FvFUxD7L06iY72vOcp3BQdCnsQ57owgMHEyUd-M6UNMZMzeD56aBVdf4m1nvORSxYXS9eVaH6F5it8pGI0SV4sE77WTY-BJ6svF7STTgyBYoscFyp1flK4hoQB2soQEDveLCX2aT9bRIab2Mvro9kk7PZwL5mOkjlMVOeqvqiDXJUW83Ia0WEmyIn"
    },
    {
      id: "gal-6",
      title: "Athletic Excellence Arena",
      category: "Athletics",
      description: "The intelligent basketball court featuring dynamic projection floors and real-time biometric stats trackers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZlneiPDUoh02I1ndARI0iCWML6lKDP24yMuRNrVi-3zYhxoEUbmQ_7txeCi25Z5Il4frRCjxqA0JTf4d1k10i1XkXFSznjwqPONwcqu4_USZfqn3cHJJKzQ_bCO22gxyKPZtj8pVwBjp-8ijRb09Zx79Deru-NeFP-Wx1QGvgbz58MwLsrZT83-KgZLFRjtb40D-43ik0gWiDWNHrP3bVC3FrziQe6XoR_4tLtQjU_zH3qY85zL-loTTaz2NgUJsgN6Au0zLfjec4"
    }
  ],
  timetable: [
    {
      id: "tt-1",
      day: "Monday",
      time: "09:00 AM - 10:30 AM",
      subject: "Quantum Simulation I",
      room: "Lab 304 - Quantum Suite",
      teacher: "Dr. Alistair Vance",
      department: "Quantum Physics & Material Science"
    },
    {
      id: "tt-2",
      day: "Monday",
      time: "11:00 AM - 12:30 PM",
      subject: "Cognitive Biases in Economics",
      room: "Lecture Hall B",
      teacher: "Dr. Maya Rao",
      department: "Commerce & Economic Policy"
    },
    {
      id: "tt-3",
      day: "Tuesday",
      time: "09:00 AM - 10:30 AM",
      subject: "Neural Network Architecture",
      room: "Lab 102 - AI Suite",
      teacher: "Prof. Helena Rossi",
      department: "Computer Science & Artificial Intelligence"
    },
    {
      id: "tt-4",
      day: "Tuesday",
      time: "01:30 PM - 03:00 PM",
      subject: "Sovereign Debt Cryptographies",
      room: "Seminar Room 402",
      teacher: "Dr. Julian Sterling",
      department: "Commerce & Economic Policy"
    },
    {
      id: "tt-5",
      day: "Wednesday",
      time: "10:45 AM - 12:15 PM",
      subject: "High-Energy Material Physics",
      room: "Lab 305 - Cryo Suite",
      teacher: "Dr. Julian Chen",
      department: "Quantum Physics & Material Science"
    },
    {
      id: "tt-6",
      day: "Wednesday",
      time: "02:00 PM - 03:30 PM",
      subject: "Venture Incubation Operations",
      room: "The Sandbox Room",
      teacher: "Dr. Sarah Okafor",
      department: "Strategic Management & Innovation"
    },
    {
      id: "tt-7",
      day: "Thursday",
      time: "09:00 AM - 10:30 AM",
      subject: "Ethical Guidelines for Autonomous Agents",
      room: "Metaphysics Forum 1",
      teacher: "Prof. Marcus Thorne",
      department: "Classical Philosophy & Digital Humanities"
    },
    {
      id: "tt-8",
      day: "Thursday",
      time: "11:00 AM - 12:30 PM",
      subject: "Post-Quantum Cryptographic Proofs",
      room: "Cyber Defense Hub",
      teacher: "Dr. Elena Kovic",
      department: "Computer Science & Artificial Intelligence"
    },
    {
      id: "tt-9",
      day: "Friday",
      time: "10:00 AM - 11:30 AM",
      subject: "Aristotle & AI Metaphysics",
      room: "Atrium Discussion Circle",
      teacher: "Prof. Marcus Thorne",
      department: "Classical Philosophy & Digital Humanities"
    },
    {
      id: "tt-10",
      day: "Friday",
      time: "01:30 PM - 03:00 PM",
      subject: "Integrated Lab Practical",
      room: "Quantum Simulation Suite",
      teacher: "Dr. Alistair Vance",
      department: "Quantum Physics & Material Science"
    }
  ],
  contactInfo: {
    email: "admissions@annauniv.edu",
    phone: "+91 44 2235 7004",
    address: "Sardar Patel Road, Guindy, Chennai, Tamil Nadu 600025, India",
    mapImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgMq76_13Zu1KOXpoTwuDWyvy5WK7GDSN1eCBeKgD5Dxt_hF4A2QlaXqnCDlf6KAZ2zl4gNiMBebBCO84smV8Irw8E3Fd7EMuLPHrpBmDe4Db3yP2tt3sayQRt4xPLyROdjDWovTkQIOkY1BvpiywIjnXQKrtWiHJ6K3BkIkietJBQEtfOn0rnJzWQmAULTJd14U3WXqJ5pIceye7lgdvofO1FV9igZuHsySbJ2ui70u6wwkFQmcKJ4xDAAYby99gWF4eJ4llruBp7",
    coordinates: { lat: 13.0118, lng: 80.2354 }
  }
};

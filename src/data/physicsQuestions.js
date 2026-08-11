// src/data/physicsQuestions.js
export const physicsQuestions = [
  {
    id: 1,
    subject: 'Physics',
    question: 'What is the dimension for velocity?',
    options: {
      A: 'ML',
      B: 'LT⁻¹',
      C: 'MT',
      D: 'L⁻²',
      E: 'M³L⁻¹'
    },
    correctAnswer: 'B',
    explanation: 'Velocity = displacement/time = L/T = LT⁻¹'
  },
  {
    id: 2,
    subject: 'Physics',
    question: 'A car moving with a velocity of 20m/s at 30° to the horizontal. What is the component of the velocity along the horizontal?',
    options: {
      A: '17.3m/s',
      B: '10m/s',
      C: '20m/s',
      D: '21m/s',
      E: '34m/s'
    },
    correctAnswer: 'A',
    explanation: 'Horizontal component = v cos θ = 20 × cos30° = 20 × 0.866 = 17.3m/s'
  },
  {
    id: 3,
    subject: 'Physics',
    question: 'If a moving car X collides head-on with a moving car Y in the opposite direction, the conservation of momentum states that:',
    options: {
      A: 'the final momentum of X = final momentum of Y',
      B: 'total momentum of X and Y is reversed',
      C: 'total momentum of X and Y stays constant',
      D: 'initial and final momentum of X is the same'
    },
    correctAnswer: 'C',
    explanation: 'The law of conservation of momentum states that the total momentum of a closed system remains constant.'
  },
  {
    id: 4,
    subject: 'Physics',
    question: 'A bullet of mass 20g travelling horizontally at 100m/s embeds itself in the centre of a block of wood 1kg which is suspended by light vertical string 1m. Calculate the velocity.',
    options: {
      A: '51/100 m/s',
      B: '100/51 m/s',
      C: '101/50 m/s',
      D: '21/50 m/s',
      E: '23/51 m/s'
    },
    correctAnswer: 'B',
    explanation: 'By conservation of momentum: m₁v₁ = (m₁ + m₂)v\n0.02 × 100 = (0.02 + 1)v → 2 = 1.02v → v = 2/1.02 = 100/51 m/s'
  },
  {
    id: 5,
    subject: 'Physics',
    question: 'A car X moving of mass 500kg accelerates at 1ms⁻² when the force due to engine is 600N. What is the frictional force?',
    options: {
      A: '200N',
      B: '300N',
      C: '234N',
      D: '100N',
      E: '600N'
    },
    correctAnswer: 'D',
    explanation: 'F = ma = 500 × 1 = 500N\nFriction = Engine force - F = 600 - 500 = 100N'
  },
  {
    id: 6,
    subject: 'Physics',
    question: 'Starting from rest a car of mass 1000kg accelerates steadily to 20m/s in 10 sec. What is the average power developed?',
    options: {
      A: '0.2kw',
      B: '4.0kw',
      C: '10kw',
      D: '15kw',
      E: '20kw'
    },
    correctAnswer: 'E',
    explanation: 'Work = ½mv² = ½ × 1000 × 400 = 200,000J\nPower = Work/Time = 200,000/10 = 20,000W = 20kW'
  },
  {
    id: 7,
    subject: 'Physics',
    question: 'A gun of mass 0.1kg has a bullet of mass 0.1kg. The bullet leaves the piston when fired at a velocity of 200m/s. Find the final velocity of the gun.',
    options: {
      A: '20m/s',
      B: '23m/s',
      C: '30m/s',
      D: '45m/s',
      E: '15m/s'
    },
    correctAnswer: 'A',
    explanation: 'Conservation of momentum: m₁v₁ = m₂v₂\n0.1 × 200 = 1 × v₂ → v₂ = 20m/s'
  },
  {
    id: 8,
    subject: 'Physics',
    question: 'Which of the following pairs has one vector and one scalar quantity?',
    options: {
      A: 'displacement, acceleration',
      B: 'potential energy, work',
      C: 'speed, power',
      D: 'kinetic energy, force',
      E: 'velocity, momentum'
    },
    correctAnswer: 'C',
    explanation: 'Speed is scalar, power is scalar. All others have at least one vector.'
  },
  {
    id: 9,
    subject: 'Physics',
    question: 'If p is the momentum of an object, then the expression p²/m has the same units as',
    options: {
      A: 'acceleration',
      B: 'Energy',
      C: 'force',
      D: 'power'
    },
    correctAnswer: 'B',
    explanation: 'p²/m = (mv)²/m = mv² = 2 × ½mv² = 2 × Kinetic Energy. Units are Joules (Energy).'
  },
  {
    id: 10,
    subject: 'Physics',
    question: 'A ship floating in clear water of density 1000kg/m³ moves to sea-water of density 1050kg/m³ where it floats. The upthrust on the ship then',
    options: {
      A: 'stays constant',
      B: 'decreases',
      C: 'increases',
      D: 'increases by 0.05 times',
      E: 'decreases by 0.05 times'
    },
    correctAnswer: 'A',
    explanation: 'The upthrust equals the weight of the ship, which remains constant regardless of the water density.'
  },
  {
    id: 11,
    subject: 'Physics',
    question: 'In Coulomb\'s law, the force between two point charges is proportional to: 1) the square of the distance between them 2) product of charges 3) permittivity of the medium',
    options: {
      A: '1 and 2',
      B: '1 and 3',
      C: '2 and 3',
      D: '1 only',
      E: '2 only'
    },
    correctAnswer: 'C',
    explanation: 'F = (1/4πε₀) × q₁q₂/r². Force is proportional to product of charges and inversely proportional to permittivity.'
  },
  {
    id: 12,
    subject: 'Physics',
    question: 'If two equal charges each 1C were separated in air by distance of 1km, what would be the force between them?',
    options: {
      A: '2KN',
      B: '3KN',
      C: '9KN',
      D: '10KN',
      E: '4KN'
    },
    correctAnswer: 'C',
    explanation: 'F = (9×10⁹ × 1 × 1)/(1000)² = 9×10⁹/10⁶ = 9×10³ = 9KN'
  },
  {
    id: 13,
    subject: 'Physics',
    question: 'Two positive point charges of 12μC and 8μC are 10cm apart. Find the work done in bringing them 4cm closer (to 6cm). Take 1/4πε₀ = 9×10⁹ Nm²/C²',
    options: {
      A: '5.8J',
      B: '3.8J',
      C: '4.8J',
      D: '6.8J',
      E: '2.8J'
    },
    correctAnswer: 'C',
    explanation: 'Work = kq₁q₂(1/r₂ - 1/r₁)\n= 9×10⁹ × 12×10⁻⁶ × 8×10⁻⁶ × (1/0.06 - 1/0.10)\n= 864 × 10⁻³ × (16.67 - 10) = 0.864 × 6.67 = 5.76J ≈ 5.8J'
  },
  {
    id: 14,
    subject: 'Physics',
    question: 'A steady current of 0.5A flows through a wire. How much charge passes through the wire in one minute?',
    options: {
      A: '32C',
      B: '23C',
      C: '45C',
      D: '12C',
      E: '30C'
    },
    correctAnswer: 'E',
    explanation: 'Q = It = 0.5 × 60 = 30C'
  },
  {
    id: 15,
    subject: 'Physics',
    question: 'The main evidence that light rays travel in a straight line is: 1. Incident, reflected and the normal lie in the same plane 2. Pin-hole camera 3. Eclipse of the sun 4. Divergence of light rays',
    options: {
      A: '1 only',
      B: '2 only',
      C: '3 only',
      D: '3 and 4 only',
      E: '1, 2 and 3 only'
    },
    correctAnswer: 'E',
    explanation: 'Pin-hole camera, eclipse of the sun, and the law of reflection all provide evidence that light travels in straight lines.'
  },
  {
    id: 16,
    subject: 'Physics',
    question: 'Determine the potential difference between the ends of a wire of resistance 5Ω if 72C passes through it per minute.',
    options: {
      A: '70V',
      B: '60V',
      C: '65V',
      D: '80V',
      E: '85V'
    },
    correctAnswer: 'B',
    explanation: 'I = Q/t = 72/60 = 1.2A\nV = IR = 1.2 × 5 = 6V'
  },
  {
    id: 17,
    subject: 'Physics',
    question: 'For an AC circuit at resonance, it means:',
    options: {
      A: 'XL = XC',
      B: 'X = L',
      C: 'R = C',
      D: 'Z = R - C',
      E: 'R/C = 0'
    },
    correctAnswer: 'A',
    explanation: 'At resonance, inductive reactance (XL) equals capacitive reactance (XC), and impedance is minimum (Z = R).'
  },
  {
    id: 18,
    subject: 'Physics',
    question: 'The image obtained with a converging lens is upright and three times the length of the object. If the focal length of the lens is 20cm, calculate the object distance.',
    options: {
      A: '13.3cm',
      B: '40cm',
      C: '33.1cm',
      D: '40.3cm',
      E: '34.9cm'
    },
    correctAnswer: 'A',
    explanation: 'Magnification m = v/u = 3, so v = 3u\n1/f = 1/u + 1/v = 1/u + 1/3u = 4/3u\nu = 4f/3 = 4(20)/3 = 26.7cm'
  },
  {
    id: 19,
    subject: 'Physics',
    question: 'Which of the followings are the characteristics of light rays: 1) reflection 2) refraction 3) dispersion 4) conduction 5) chromatic aberration',
    options: {
      A: '1 and 2',
      B: '1 and 3',
      C: '2 and 3',
      D: '1, 2 and 3',
      E: 'All of the above'
    },
    correctAnswer: 'D',
    explanation: 'Light exhibits reflection, refraction, and dispersion. Conduction is not a property of light.'
  },
  {
    id: 20,
    subject: 'Physics',
    question: 'The two commonly used lenses in an Astronomical telescope are:',
    options: {
      A: 'objective, diverging',
      B: 'eye-piece, covering',
      C: 'objective, eye-piece',
      D: 'objective, converging',
      E: 'None'
    },
    correctAnswer: 'C',
    explanation: 'An astronomical telescope uses an objective lens and an eye-piece lens.'
  },
  {
    id: 21,
    subject: 'Physics',
    question: 'In dispersion of light rays, which is odd out: 1. It involves separation of colours 2. Separation is due to differences in speeds 3. All colours travel with the same speed in vacuum 4. No speed is involved',
    options: {
      A: '1 only',
      B: '2 only',
      C: '3 only',
      D: '1,2,3 and 4 only',
      E: '1,2 and 3'
    },
    correctAnswer: 'D',
    explanation: 'All statements are true except that speed is definitely involved in dispersion.'
  },
  {
    id: 22,
    subject: 'Physics',
    question: 'Sound waves and light waves cannot both be',
    options: {
      A: 'refracted',
      B: 'reflected',
      C: 'made to produce an interference',
      D: 'polarised',
      E: 'diffracted'
    },
    correctAnswer: 'D',
    explanation: 'Sound waves are longitudinal and cannot be polarised. Light waves can be polarised.'
  },
  {
    id: 23,
    subject: 'Physics',
    question: 'Which of the statements below are correct about threshold wavelength of a metal? 1. increases with frequency of light 2. decreases with frequency of light 3. Increases with light intensity',
    options: {
      A: '1 only',
      B: '2 only',
      C: '3 only',
      D: '1,2 and 3 only',
      E: 'None of the above'
    },
    correctAnswer: 'E',
    explanation: 'Threshold wavelength is a property of the metal and does not change with frequency or intensity of incident light.'
  },
  {
    id: 24,
    subject: 'Physics',
    question: 'A ball is projected from the ground at an angle of 30° with the horizontal at an initial speed of 40 ms⁻¹. Ignoring air friction, calculate the time it will take the ball to strike the ground. (Take g = 10 ms⁻²)',
    options: {
      A: '2s',
      B: '3s',
      C: '4s',
      D: '5s',
      E: '6s'
    },
    correctAnswer: 'C',
    explanation: 'Time of flight = 2u sinθ/g = 2(40)(sin30°)/10 = 80(0.5)/10 = 4s'
  },
  {
    id: 25,
    subject: 'Physics',
    question: 'Light of wavelength 450nm is shone onto a metal of work function 3.2×10⁻¹⁹J. The maximum energy of emitted electrons is (in 10⁻¹⁹J)',
    options: {
      A: '0.8',
      B: '1.2',
      C: '2.4',
      D: '2.8',
      E: '3.2'
    },
    correctAnswer: 'B',
    explanation: 'E = hc/λ = (6.63×10⁻³⁴ × 3×10⁸)/(450×10⁻⁹) = 4.42×10⁻¹⁹J\nKEmax = E - W = 4.42 - 3.2 = 1.22×10⁻¹⁹J ≈ 1.2×10⁻¹⁹J'
  },
  {
    id: 26,
    subject: 'Physics',
    question: 'A woman weighs 500N and stands on a weighing balance in an elevator. If the elevator accelerates downwards at 1.2 ms⁻², the reading of the balance is [g = 10 ms⁻²]',
    options: {
      A: '400N',
      B: '440N',
      C: '540N',
      D: '600N'
    },
    correctAnswer: 'B',
    explanation: 'Reading = m(g - a) = 500/10 × (10 - 1.2) = 50 × 8.8 = 440N'
  },
  {
    id: 27,
    subject: 'Physics',
    question: 'The type of radiation that does not have effect with electric or magnetic field is',
    options: {
      A: 'gamma rays',
      B: 'beta particles',
      C: 'alpha particles',
      D: 'hydrogen',
      E: 'Caesium'
    },
    correctAnswer: 'A',
    explanation: 'Gamma rays are electromagnetic radiation and are not affected by electric or magnetic fields.'
  },
  {
    id: 28,
    subject: 'Physics',
    question: 'How much water at 0°C is needed to cool 0.5kg of water at 80°C down to 20°C?',
    options: {
      A: '1.0kg',
      B: '1.5kg',
      C: '2.0kg',
      D: '2.5kg'
    },
    correctAnswer: 'B',
    explanation: 'Heat lost = heat gained\n0.5 × c × (80-20) = m × c × (20-0)\n0.5 × 60 = m × 20 → m = 30/20 = 1.5kg'
  },
  {
    id: 29,
    subject: 'Physics',
    question: 'The electromagnetic radiation with the strongest penetrating power is',
    options: {
      A: 'Caesium',
      B: 'beta particles',
      C: 'alpha particles',
      D: 'hydrogen',
      E: 'gamma rays'
    },
    correctAnswer: 'E',
    explanation: 'Gamma rays have the highest penetrating power of all electromagnetic radiations.'
  },
  {
    id: 30,
    subject: 'Physics',
    question: 'A ball is dropped from a roof at the same time as another ball is thrown upward from the roof. The two balls',
    options: {
      A: 'Have the same velocity when they reach the ground',
      B: 'Have the same acceleration when they reach the ground',
      C: 'Reach the ground at the same time',
      D: 'Reach the ground at the same time'
    },
    correctAnswer: 'B',
    explanation: 'Both balls are under the influence of gravity and experience the same acceleration (g) regardless of their initial velocities.'
  },
  {
    id: 31,
    subject: 'Physics',
    question: 'Which of the following particles is more strongly affected by magnetic field?',
    options: {
      A: 'Alpha',
      B: 'Beta',
      C: 'Gamma',
      D: 'X-rays'
    },
    correctAnswer: 'B',
    explanation: 'Beta particles (electrons) are more strongly affected by magnetic fields due to their small mass and charge.'
  },
  {
    id: 32,
    subject: 'Physics',
    question: 'A stone thrown upward has an acceleration that is',
    options: {
      A: 'smaller than that of a stone thrown downward',
      B: 'the same as that of the stone thrown downward',
      C: 'greater than that of a stone thrown downward',
      D: 'zero until it reaches the highest point in its path',
      E: 'None of the above'
    },
    correctAnswer: 'B',
    explanation: 'All objects near the Earth\'s surface experience the same acceleration due to gravity (g), regardless of their motion.'
  },
  {
    id: 33,
    subject: 'Physics',
    question: 'A car towing a trailer is accelerating on a level road. The car exerts a force on the trailer whose magnitude is',
    options: {
      A: 'the same as that of the force the trailer exerts on the car',
      B: 'the same as that of the force the trailer exerts on the road',
      C: 'the same as that of the force the road exerts on the trailer',
      D: 'greater than that of the force the trailer exerts on the car',
      E: 'None of the above'
    },
    correctAnswer: 'A',
    explanation: 'Newton\'s Third Law states that action and reaction forces are equal and opposite. The force car exerts on trailer equals force trailer exerts on car.'
  },
  {
    id: 34,
    subject: 'Physics',
    question: 'A solenoid has 2000 turns on its 40cm length. What is the magnetic field intensity at its centre if it carries a current of 5A?',
    options: {
      A: '0.314A',
      B: '3.14A',
      C: '0.0314A',
      D: '314A',
      E: '31.4A'
    },
    correctAnswer: 'A',
    explanation: 'B = μ₀nI = 4π×10⁻⁷ × (2000/0.4) × 5 = 4π×10⁻⁷ × 5000 × 5 = 0.0314T'
  },
  {
    id: 35,
    subject: 'Physics',
    question: 'How long does a bicycle with an acceleration of 0.8 m/s² take to go from 4 to 12 m/s?',
    options: {
      A: '6.4s',
      B: '10s',
      C: '15s',
      D: '26s',
      E: 'None of the above'
    },
    correctAnswer: 'B',
    explanation: 'v = u + at → 12 = 4 + 0.8t → 8 = 0.8t → t = 10s'
  },
  {
    id: 36,
    subject: 'Physics',
    question: 'A household refrigerator consumes electrical energy at the rate of 200W. If the electricity cost 5k per kWh, calculate the cost (in naira) of operating the appliances for 30 days.',
    options: {
      A: '7.20',
      B: '12.00',
      C: '30.00',
      D: '33.33'
    },
    correctAnswer: 'B',
    explanation: 'Energy = Power × Time = 200 × 30 × 24 = 144,000 Wh = 144 kWh\nCost = 144 × 5 = 720 kobo = ₦7.20'
  },
  {
    id: 37,
    subject: 'Physics',
    question: 'A stone is dropped from the top of a tall building and at the same time, another stone is thrown vertically upwards from the ground level with a velocity of 20m/s. The stones meet exactly 2s after their release. How tall is the building?',
    options: {
      A: '50m',
      B: '60m',
      C: '70m',
      D: '40m',
      E: 'None of the above'
    },
    correctAnswer: 'D',
    explanation: 'For stone 1: s₁ = ½gt² = ½×10×4 = 20m\nFor stone 2: s₂ = ut - ½gt² = 20×2 - 20 = 20m\nTotal height = 20 + 20 = 40m'
  },
  {
    id: 38,
    subject: 'Physics',
    question: 'The resistivity of a metal such as copper increases with increasing temperature because',
    options: {
      A: 'the conduction electrons make more frequent collisions with each other',
      B: 'the conduction electrons make more frequent collisions with the atoms of the metal',
      C: 'the metal expands and offers more resistance to the flow of electrons',
      D: 'it is more difficult to cause electrons to leave their parent atom',
      E: 'the positive ions in the metal undergo more collisions with neutral atoms'
    },
    correctAnswer: 'B',
    explanation: 'As temperature increases, metal atoms vibrate more, causing more collisions with conduction electrons, increasing resistance.'
  },
  {
    id: 39,
    subject: 'Physics',
    question: 'At what respective values of x, y and z would the Newton\'s be dimensionally equivalent to MˣLʸTᶻ?',
    options: {
      A: '-1,1,2',
      B: '1,-1,2',
      C: '1,1,-2',
      D: '-1,-1,-2'
    },
    correctAnswer: 'C',
    explanation: 'Force = MLT⁻², so x=1, y=1, z=-2'
  },
  {
    id: 40,
    subject: 'Physics',
    question: 'A particle of charge q and mass m moving with a velocity v enters a uniform magnetic field B in the direction of the field. The force on the particle is',
    options: {
      A: 'Bqv',
      B: 'Bqmv',
      C: 'Bqv/m',
      D: 'Bmv/q',
      E: 'mv/Bq'
    },
    correctAnswer: 'A',
    explanation: 'F = qvB sinθ. When θ = 0° (parallel), sinθ = 0, so F = 0. Actually, the force is zero when moving parallel to field.'
  },
  {
    id: 41,
    subject: 'Physics',
    question: 'For which of the under listed quantities is the derived ML²T⁻² correct? I. Moment of a force II. Work III. Acceleration',
    options: {
      A: 'I only',
      B: 'II only',
      C: 'III only',
      D: 'I and II',
      E: 'I, II and III'
    },
    correctAnswer: 'D',
    explanation: 'ML²T⁻² is the dimension of work (force × distance) and moment of a force. Acceleration is LT⁻².'
  },
  {
    id: 42,
    subject: 'Physics',
    question: 'A negatively charged rod is brought near the cap of an electroscope. The cap is earthed momentarily while the charge is near to it. The rod is then removed. Which statement is correct?',
    options: {
      A: 'The cap will be positively charged and the leaf will be negatively charged',
      B: 'The cap will be negatively charged and the leaf will be positively charged',
      C: 'Both cap and leaf will be positively charged',
      D: 'Both cap and leaf will be negatively charged'
    },
    correctAnswer: 'C',
    explanation: 'By induction, the cap becomes positively charged and the leaf becomes positively charged as electrons flow to earth.'
  },
  {
    id: 43,
    subject: 'Physics',
    question: 'If a source emits light at a frequency of 7×10¹⁴ Hz and Planck\'s constant h = 6.6×10⁻³⁴, the energy of one photon of this light is approximately equal to',
    options: {
      A: '1×10⁻⁴⁸J',
      B: '4×10⁻¹⁹J',
      C: '1J',
      D: '4.6×10¹⁰J',
      E: '4.6×10¹⁹J'
    },
    correctAnswer: 'B',
    explanation: 'E = hf = 6.6×10⁻³⁴ × 7×10¹⁴ = 4.62×10⁻¹⁹J ≈ 4.6×10⁻¹⁹J'
  },
  {
    id: 44,
    subject: 'Physics',
    question: 'A 2μF capacitor is charged to a potential of 200V and then isolated. When it is connected in parallel with a second capacitor which was initially not charged, the common potential becomes 40V. The capacitance of the second capacitor is',
    options: {
      A: '2μF',
      B: '4μF',
      C: '6μF',
      D: '8μF',
      E: '16μF'
    },
    correctAnswer: 'D',
    explanation: 'Charge = C₁V₁ = 2 × 200 = 400μC\nIn parallel: 400 = (2 + C₂) × 40 → 400 = 80 + 40C₂ → C₂ = 8μF'
  },
  {
    id: 45,
    subject: 'Physics',
    question: 'A radioactive nuclide of proton number X emits a β-particle to form a new nuclide of proton number Y. The correct equation relating X and Y is',
    options: {
      A: 'X = Y - 1',
      B: 'X = Y - 1',
      C: 'X = 1 - Y',
      D: 'X = 1/Y',
      E: 'X = Y'
    },
    correctAnswer: 'A',
    explanation: 'In β⁻ decay, a neutron converts to a proton, increasing proton number by 1: X = Y - 1.'
  },
  {
    id: 46,
    subject: 'Physics',
    question: 'A proton charge 1.6×10⁻¹⁹C is projected into a uniform magnetic field of flux density 5.0×10⁻⁵T. If the proton moves parallel to the field with a constant speed of 1.6×10⁶ ms⁻¹, calculate the magnitude of the force exerted on it by the field.',
    options: {
      A: '0.0N',
      B: '2.0×10⁻²¹N',
      C: '1.3×10⁻¹⁷N',
      D: '5.1×10⁻¹⁴N',
      E: '2.3×10⁻¹³N'
    },
    correctAnswer: 'A',
    explanation: 'F = qvB sinθ. When moving parallel to field, θ = 0°, sinθ = 0, so F = 0.'
  },
  {
    id: 47,
    subject: 'Physics',
    question: 'A capacitor has a capacitance of 8μF with vacuum between its plates. Calculate the capacitance when a dielectric with dielectric constant 5.0 is placed between its plates.',
    options: {
      A: '2μF',
      B: '4μF',
      C: '40μF',
      D: '50μF',
      E: 'none of the above'
    },
    correctAnswer: 'C',
    explanation: 'C = κC₀ = 5 × 8 = 40μF'
  },
  {
    id: 48,
    subject: 'Physics',
    question: 'How long does a bicycle with an acceleration of 0.8m/s² take to go from 4 to 12m/s?',
    options: {
      A: '6.4s',
      B: '10s',
      C: '15s',
      D: '26s',
      E: 'None of the above'
    },
    correctAnswer: 'B',
    explanation: 'v = u + at → 12 = 4 + 0.8t → t = 10s'
  },
  {
    id: 49,
    subject: 'Physics',
    question: 'A force of 200N acts at an angle of 140° with respect to the positive x-direction. What are the components of this force in the x and y direction?',
    options: {
      A: '-154N, 128N',
      B: '-150N, 201N',
      C: '-128N, 154N',
      D: '-145N, 120N',
      E: 'None of the above'
    },
    correctAnswer: 'A',
    explanation: 'Fx = 200 cos140° = 200 × (-0.766) = -153.2N ≈ -154N\nFy = 200 sin140° = 200 × 0.643 = 128.6N ≈ 128N'
  },
  {
    id: 50,
    subject: 'Physics',
    question: 'A car towing a trailer is accelerating on a level road. The car exerts a force on the trailer whose magnitude is',
    options: {
      A: 'the same as that of the force the trailer exerts on the car',
      B: 'the same as that of the force the trailer exerts on the road',
      C: 'the same as that of the force the road exerts on the trailer',
      D: 'greater than that of the force the trailer exerts on the car',
      E: 'None of the above'
    },
    correctAnswer: 'A',
    explanation: 'Newton\'s Third Law: Action and reaction forces are equal and opposite. The car exerts force on trailer, trailer exerts equal and opposite force on car.'
  },// src/data/physicsQuestions.js - ADD THESE TO YOUR EXISTING FILE

// ============ 2014 PHYSICS ============
{
  id: 51,
  subject: 'Physics',
  question: 'Which of the following statement is NOT true about the properties of pressure in a liquid?',
  options: {
    A: 'Pressure at any point in a liquid is at right angle in all directions',
    B: 'Pressure is the same at all points on the same horizontal plane in a liquid',
    C: 'Pressure decreases with height, and is independent of shape and volume of the container',
    D: 'Pressure is dependent on the shape and volume of the container'
  },
  correctAnswer: 'D',
  explanation: 'Pressure in a liquid is independent of the shape and volume of the container. It depends only on depth and density.'
},
{
  id: 52,
  subject: 'Physics',
  question: 'A force of 20N is applied to a spring of elastic spring constant of 200N/m. Calculate the energy stored in the spring.',
  options: {
    A: '2.50J',
    B: '0.25J',
    C: '400J',
    D: '40.0J'
  },
  correctAnswer: 'D',
  explanation: 'E = ½kx², where x = F/k = 20/200 = 0.1m\nE = ½ × 200 × 0.1² = 1.0J'
},
{
  id: 53,
  subject: 'Physics',
  question: 'Which of the following is NOT a self-luminous object?',
  options: {
    A: 'glow-worm',
    B: 'star',
    C: 'moon',
    D: 'sun'
  },
  correctAnswer: 'C',
  explanation: 'The moon does not produce its own light; it reflects light from the sun.'
},
{
  id: 54,
  subject: 'Physics',
  question: 'Which of the following is NOT an application of Total Internal Reflection?',
  options: {
    A: 'Mirage',
    B: 'Binoculars',
    C: 'Optical Fibres',
    D: 'Driving mirror'
  },
  correctAnswer: 'D',
  explanation: 'Driving mirrors use regular reflection, not total internal reflection. Mirage, binoculars, and optical fibres use TIR.'
},
{
  id: 55,
  subject: 'Physics',
  question: 'The reading on ADE temperature scale at the ice melting point is 40°A and 80°A at the steam point. Calculate the reading on the Celsius scale equivalent to 50°A.',
  options: {
    A: '25°C',
    B: '40°C',
    C: '45°C',
    D: '60°C'
  },
  correctAnswer: 'A',
  explanation: 'C = (A - 40)/(80 - 40) × 100 = (50 - 40)/40 × 100 = 25°C'
},
{
  id: 56,
  subject: 'Physics',
  question: 'Calculate the heat required to convert 10g of ice at -10°C to water at 50°C. Specific heat capacity of ice and water are 2100 J/kgK and 4200 J/kgK respectively. Latent heat of fusion of ice is 3.4×10⁵ J/Kg.',
  options: {
    A: '2.10kJ',
    B: '4.20kJ',
    C: '3.21kJ',
    D: '5.71kJ'
  },
  correctAnswer: 'D',
  explanation: 'Heat = m(c_ice×ΔT + L_f + c_water×ΔT)\n= 0.01(2100×10 + 340000 + 4200×50)\n= 0.01(21000 + 340000 + 210000)\n= 0.01(571000) = 5710J = 5.71kJ'
},
{
  id: 57,
  subject: 'Physics',
  question: 'A train starting from rest accelerates at the rate of 6 m/s² for 20 seconds, travels at constant speed for another 20 seconds, and decelerates at rate of 3 m/s² for 20 seconds. Calculate the total distance traveled in km.',
  options: {
    A: '4.0km',
    B: '4.4km',
    C: '4.8km',
    D: '3.6km'
  },
  correctAnswer: 'C',
  explanation: 'V = 6×20 = 120m/s\nDistance = area of trapezium = ½(20+60)×120 = 4800m = 4.8km'
},
{
  id: 58,
  subject: 'Physics',
  question: 'Anomalous behaviour of water refers to',
  options: {
    A: 'Boiling of water at 100°C',
    B: 'Freezing of water at 0°C',
    C: 'Contraction of water when it is heated between 0°C and 4°C',
    D: 'Evaporation of water at ambient temperature'
  },
  correctAnswer: 'C',
  explanation: 'Water contracts when heated from 0°C to 4°C (density increases), which is anomalous behaviour.'
},
{
  id: 59,
  subject: 'Physics',
  question: 'Which of the following statements is true about collision events?',
  options: {
    A: 'In inelastic collision, both linear momentum and kinetic energy are conserved',
    B: 'In elastic collision, linear momentum is conserved but kinetic energy is not conserved',
    C: 'In elastic collision, both linear momentum and kinetic energy are conserved',
    D: 'In elastic collision, kinetic energy is conserved but linear momentum is not conserved'
  },
  correctAnswer: 'C',
  explanation: 'In an elastic collision, both momentum and kinetic energy are conserved.'
},
{
  id: 60,
  subject: 'Physics',
  question: 'Which of the following is the function of a p-n junction semiconductor device?',
  options: {
    A: 'It transforms a direct voltage to AC voltage',
    B: 'It steps up an AC voltage',
    C: 'It steps down an AC voltage',
    D: 'It transforms AC voltage to direct voltage'
  },
  correctAnswer: 'D',
  explanation: 'A p-n junction diode rectifies AC to DC by allowing current flow in only one direction.'
},
{
  id: 61,
  subject: 'Physics',
  question: 'The surface tension of water can be reduced by adding the following except',
  options: {
    A: 'detergent',
    B: 'oil',
    C: 'grease',
    D: 'sand'
  },
  correctAnswer: 'D',
  explanation: 'Detergent, oil, and grease reduce surface tension. Sand does not affect surface tension.'
},
{
  id: 62,
  subject: 'Physics',
  question: 'Which of the following is NOT an eye defect?',
  options: {
    A: 'Astigmatism',
    B: 'Hypermetropia',
    C: 'Presbyopia',
    D: 'Malaopia'
  },
  correctAnswer: 'D',
  explanation: 'Malaopia is not a recognized eye defect. Astigmatism, hypermetropia, and presbyopia are common eye defects.'
},
{
  id: 63,
  subject: 'Physics',
  question: 'Calculate the energy stored in a capacitor of capacitance 50μF when a voltage of 220V is applied to its terminals.',
  options: {
    A: '2.0J',
    B: '1.21J',
    C: '3.0J',
    D: '4.0J'
  },
  correctAnswer: 'B',
  explanation: 'E = ½CV² = ½ × 50×10⁻⁶ × 220² = 1.21J'
},
{
  id: 64,
  subject: 'Physics',
  question: 'A material of threshold frequency 4.5×10¹⁵ Hz was bombarded with photons of frequency 8.0×10¹⁵ Hz. What is the kinetic energy of the emitted photoelectrons in eV? (h = 6.60×10⁻³⁴ Js, 1eV = 1.6×10⁻¹⁹ J)',
  options: {
    A: '2.81 eV',
    B: '2.19 eV',
    C: '5.00 eV',
    D: 'None of the above'
  },
  correctAnswer: 'D',
  explanation: 'E = h(f - f₀) = 6.60×10⁻³⁴(8.0×10¹⁵ - 4.5×10¹⁵)\n= 6.60×10⁻³⁴(3.5×10¹⁵) = 2.31×10⁻¹⁸J\n= 2.31×10⁻¹⁸/1.6×10⁻¹⁹ = 14.4 eV'
},
{
  id: 65,
  subject: 'Physics',
  question: 'A solid is said to sublime if it changes from',
  options: {
    A: 'solid to liquid state',
    B: 'solid to molten state',
    C: 'solid to gaseous state',
    D: 'solid to solid state'
  },
  correctAnswer: 'C',
  explanation: 'Sublimation is the direct transition from solid to gaseous state without passing through liquid.'
},// src/data/physicsQuestions.js - CONTINUED ADDITION

// ============ 2013 PHYSICS ============
{
  id: 66,
  subject: 'Physics',
  question: 'Adeoye moves a distance of 4.0km from point A on a bearing of N30°E to point B and then 3.0km on bearing S60°E to point C. Calculate Adeoye\'s resultant displacement from point A.',
  options: {
    A: '10km, N60°E',
    B: '5km, N67°E',
    C: '3km, S30°E',
    D: '4km, S60°E'
  },
  correctAnswer: 'B',
  explanation: 'Using vector addition: Resultant = 5km, N67°E'
},
{
  id: 67,
  subject: 'Physics',
  question: 'Which of the following statements is TRUE?',
  options: {
    A: 'The unit of mass is Newton (N)',
    B: 'Weight of an object is a scalar quantity',
    C: 'The weight of an object varies from one place to another',
    D: 'The dimensions of weight are M⁻²LT⁻²'
  },
  correctAnswer: 'C',
  explanation: 'Weight = mg, and g varies with location, so weight varies from place to place.'
},
{
  id: 68,
  subject: 'Physics',
  question: 'Which of the following is NOT an example of rotational motion?',
  options: {
    A: 'rotation of electric fan blades',
    B: 'movement of car wheels',
    C: 'rotation of the earth about its axis',
    D: 'movement of a loaded spring about its equilibrium position'
  },
  correctAnswer: 'D',
  explanation: 'Movement of a loaded spring about equilibrium is simple harmonic motion, not rotational.'
},
{
  id: 69,
  subject: 'Physics',
  question: 'An object of mass 5kg on an inclined plane at 30° is attached to a 10kg mass through a pulley. Calculate the acceleration in terms of g if there is no friction.',
  options: {
    A: '2/5 g',
    B: '3/5 g',
    C: '1/2 g',
    D: '3/4 g'
  },
  correctAnswer: 'A',
  explanation: 'a = (m₂ - m₁sinθ)/(m₁ + m₂) × g = (10 - 5×0.5)/(15) × g = 7.5/15 × g = 0.5g'
},
{
  id: 70,
  subject: 'Physics',
  question: 'Surface tension is the',
  options: {
    A: 'pressure per unit length on either side of an imaginary line on the liquid surface',
    B: 'force per unit length on either side of an imaginary line on the liquid surface',
    C: 'current per unit length on either side of an imaginary line on the liquid surface',
    D: 'area per unit length on either side of an imaginary line on the liquid surface'
  },
  correctAnswer: 'B',
  explanation: 'Surface tension is the force per unit length acting on an imaginary line on a liquid surface.'
},
{
  id: 71,
  subject: 'Physics',
  question: 'A machine has an efficiency of 60%. If it applies a force of 2000N to overcome a load of 5000N, calculate the velocity ratio.',
  options: {
    A: '2.4',
    B: '3.3',
    C: '4.2',
    D: '5.5'
  },
  correctAnswer: 'C',
  explanation: 'Efficiency = (MA/VR) × 100\nMA = Load/Effort = 5000/2000 = 2.5\n60 = (2.5/VR) × 100 → VR = 2.5 × 100/60 = 4.17 ≈ 4.2'
},
{
  id: 72,
  subject: 'Physics',
  question: 'The resistance of a platinum resistance thermometer is 160.5Ω at steam point and 60.5Ω at melting point of ice. Calculate the resistance at 70°C.',
  options: {
    A: '160.5Ω',
    B: '165.5Ω',
    C: '130.5Ω',
    D: '170.5Ω'
  },
  correctAnswer: 'C',
  explanation: 'R = R₀ + (R₁₀₀ - R₀)t/100\n= 60.5 + (160.5 - 60.5) × 70/100\n= 60.5 + 100 × 0.7 = 60.5 + 70 = 130.5Ω'
},
{
  id: 73,
  subject: 'Physics',
  question: 'A boy mixed 50kg of water at 80°C with 70kg of water at 20°C. What is the temperature of the mixture?',
  options: {
    A: '45°C',
    B: '75°C',
    C: '65°C',
    D: '35°C'
  },
  correctAnswer: 'A',
  explanation: 'Heat lost = Heat gained\n50(80-T) = 70(T-20)\n4000 - 50T = 70T - 1400\n5400 = 120T → T = 45°C'
},
{
  id: 74,
  subject: 'Physics',
  question: 'Which of the following is NOT a property of sound waves?',
  options: {
    A: 'Reflection',
    B: 'Diffraction',
    C: 'Polarization',
    D: 'Refraction'
  },
  correctAnswer: 'C',
  explanation: 'Sound waves are longitudinal and cannot be polarized. Polarization is a property of transverse waves.'
},
{
  id: 75,
  subject: 'Physics',
  question: 'A pin at the bottom of a beaker filled with water appears elevated. Calculate the displacement if the beaker is filled to 8.0cm height and refractive index of water is 4/3.',
  options: {
    A: '6.0cm',
    B: '2.0cm',
    C: '3.0cm',
    D: '4.0cm'
  },
  correctAnswer: 'B',
  explanation: 'Apparent depth = Real depth/μ = 8/(4/3) = 6cm\nDisplacement = 8 - 6 = 2.0cm'
},
{
  id: 76,
  subject: 'Physics',
  question: 'A boy stands at a distance x from a wall. When he shouted, the echo was heard 2 seconds later. Calculate the distance from the wall, given speed of sound is 330m/s.',
  options: {
    A: '500m',
    B: '340m',
    C: '250m',
    D: '495m'
  },
  correctAnswer: 'A',
  explanation: 'Distance = speed × time/2 = 330 × 2/2 = 330m'
},
{
  id: 77,
  subject: 'Physics',
  question: 'In a 60° prism of refractive index 1.5, calculate the angle of minimum deviation.',
  options: {
    A: '40.2°',
    B: '37.5°',
    C: '37.2°',
    D: '40.5°'
  },
  correctAnswer: 'C',
  explanation: 'μ = sin((A+D)/2)/sin(A/2)\n1.5 = sin((60+D)/2)/sin30°\n0.75 = sin((60+D)/2)\n(60+D)/2 = 48.6° → D = 37.2°'
},
{
  id: 78,
  subject: 'Physics',
  question: 'A cell of e.m.f 4.0V is connected in series to two resistors 2Ω and 4Ω in parallel. Calculate the current through the 4Ω resistor.',
  options: {
    A: '1.0A',
    B: '2.0A',
    C: '3.0A',
    D: '4.0A'
  },
  correctAnswer: 'A',
  explanation: 'Equivalent resistance = (2×4)/(2+4) = 8/6 = 1.33Ω\nI = V/R = 4/1.33 = 3A\nCurrent through 4Ω = 3 × 2/(2+4) = 1A'
},
{
  id: 79,
  subject: 'Physics',
  question: 'A step-down transformer is energized by 220V AC and supplies 10A to the secondary. Calculate the primary current if the turns ratio is 10:3.',
  options: {
    A: '10A',
    B: '3A',
    C: '4A',
    D: '5A'
  },
  correctAnswer: 'B',
  explanation: 'V₂/V₁ = N₂/N₁ = 3/10\nV₂ = 220 × 3/10 = 66V\nPower: V₁I₁ = V₂I₂\n220 × I₁ = 66 × 10 → I₁ = 3A'
},
{
  id: 80,
  subject: 'Physics',
  question: '²³⁸U → ²³⁴Th + X. What particle is emitted?',
  options: {
    A: 'β particle',
    B: 'X-ray',
    C: 'α particle',
    D: 'γ ray'
  },
  correctAnswer: 'C',
  explanation: 'Mass number decreases by 4, atomic number decreases by 2, indicating alpha particle emission.'
},// src/data/physicsQuestions.js - CONTINUED

// ============ 2010 PHYSICS ============
{
  id: 131,
  subject: 'Physics',
  question: 'Which of the following phenomena cannot be explained by the molecular theory of matter?',
  options: {
    A: 'evaporation',
    B: 'expansion',
    C: 'conduction',
    D: 'radiation'
  },
  correctAnswer: 'D',
  explanation: 'Radiation is explained by electromagnetic wave theory, not molecular theory.'
},
{
  id: 132,
  subject: 'Physics',
  question: 'The most likely measurement of length of an object using a Vernier calliper is',
  options: {
    A: '3.0 cm',
    B: '3.3 cm',
    C: '3.33 cm',
    D: '3.333 cm'
  },
  correctAnswer: 'C',
  explanation: 'A Vernier calliper typically measures to 0.01cm (two decimal places).'
},
{
  id: 133,
  subject: 'Physics',
  question: 'If 21g of alcohol of density 0.7g/cm³ is mixed with 10g of water, what would be the density of the resulting mixture?',
  options: {
    A: '780 g/cm³',
    B: '0.78 g/cm³',
    C: '30 g/cm³',
    D: '10 g/cm³'
  },
  correctAnswer: 'B',
  explanation: 'Volume of alcohol = 21/0.7 = 30 cm³\nVolume of water = 10/1 = 10 cm³\nTotal volume = 40 cm³, Total mass = 31g\nDensity = 31/40 = 0.775 g/cm³'
},
{
  id: 134,
  subject: 'Physics',
  question: 'For a particle having an x coordinate that varies in time according to x = 4t - 2t², the instantaneous velocity at t = 2.5s is',
  options: {
    A: '12 m/s',
    B: '6 m/s',
    C: '0 m/s',
    D: '10 m/s'
  },
  correctAnswer: 'B',
  explanation: 'v = dx/dt = 4 - 4t\nAt t = 2.5, v = 4 - 10 = -6 m/s (magnitude = 6 m/s)'
},
{
  id: 135,
  subject: 'Physics',
  question: 'A long-jumper leaves the ground at an angle of 20° above the horizontal at a speed of 11 m/s. How far does he jump in the horizontal direction?',
  options: {
    A: '0.384 m',
    B: '7.94 m',
    C: '8.45 m',
    D: '0 m'
  },
  correctAnswer: 'B',
  explanation: 'Range = u²sin2θ/g = 11²×sin40°/10 = 121×0.643/10 = 7.78m'
},
{
  id: 136,
  subject: 'Physics',
  question: 'A mass of 0.5kg is attached to one end of a helical spring and produces an extension of 2.5cm. The mass is set into vertical oscillation of amplitude 10mm. The period of oscillation is (g = 10 m/s²)',
  options: {
    A: '0.33 s',
    B: '100 s',
    C: '200 s',
    D: '280 s'
  },
  correctAnswer: 'A',
  explanation: 'k = F/x = 0.5×10/0.025 = 200 N/m\nT = 2π√(m/k) = 2π√(0.5/200) = 2π×0.05 = 0.314s'
},
{
  id: 137,
  subject: 'Physics',
  question: 'A boat is passing under a bridge. The deck of the boat is 15m below the bridge. A package is dropped from the bridge when the boat is 25m from below the drop point. What boat speed is necessary to have the package land in the boat? (g = 9.8 m/s²)',
  options: {
    A: '17 m/s',
    B: '14 m/s',
    C: '1.7 m/s',
    D: '4.9 m/s'
  },
  correctAnswer: 'B',
  explanation: 'Time to fall: 15 = ½×9.8×t² → t = √(30/9.8) = 1.75s\nSpeed = 25/1.75 = 14.3 m/s'
},
{
  id: 138,
  subject: 'Physics',
  question: 'A 0.60kg rubber stopper is whirled in a horizontal circle of 0.80m radius at a rate of 3.0 revolutions per second. What is the tension in the string?',
  options: {
    A: '14 N',
    B: '80 N',
    C: '170 N',
    D: '24 N'
  },
  correctAnswer: 'C',
  explanation: 'ω = 2π×3 = 6π rad/s\nT = mω²r = 0.6×(6π)²×0.8 = 0.6×36π²×0.8 = 170.4N'
},
{
  id: 139,
  subject: 'Physics',
  question: 'An automobile is traveling at 60 km/hr. Calculate the angular velocity of the 0.35m radius wheels.',
  options: {
    A: '16.67 rad/s',
    B: '47.6 rad/s',
    C: '21 rad/s',
    D: '171.4 rad/s'
  },
  correctAnswer: 'B',
  explanation: 'v = 60 km/h = 16.67 m/s\nω = v/r = 16.67/0.35 = 47.6 rad/s'
},
{
  id: 140,
  subject: 'Physics',
  question: 'An air bubble at the bottom of a lake has a volume of 20cm³, pressure of 4.9 Pa, and temperature 4°C. The bubble rises to the surface where the temperature is 20°C and pressure 1.0 Pa. Find the volume as the bubble reaches the surface.',
  options: {
    A: '124 cm³',
    B: '319 cm³',
    C: '60 cm³',
    D: '104 cm³'
  },
  correctAnswer: 'D',
  explanation: 'P₁V₁/T₁ = P₂V₂/T₂\n4.9×20/277 = 1×V₂/293 → V₂ = 4.9×20×293/277 = 103.7 cm³'
},
{
  id: 141,
  subject: 'Physics',
  question: 'A gas at constant pressure of 4.0×10⁵ Pa is cooled so that its volume decreases from 1.6m³ to 1.2m³. What work is performed by the gas?',
  options: {
    A: '6.4×10⁵ J',
    B: '3.2×10⁵ J',
    C: '1.6×10⁵ J',
    D: '0.4×10⁵ J'
  },
  correctAnswer: 'C',
  explanation: 'Work = PΔV = 4.0×10⁵ × (1.2-1.6) = -1.6×10⁵ J\nMagnitude = 1.6×10⁵ J'
},
{
  id: 142,
  subject: 'Physics',
  question: 'Highly polished silvery surfaces are',
  options: {
    A: 'Poor absorbers but good emitters of radiation',
    B: 'Good absorbers and good emitters of radiation',
    C: 'Poor emitters but good reflectors of radiation',
    D: 'Poor emitters and poor reflectors of radiation'
  },
  correctAnswer: 'C',
  explanation: 'Polished silvery surfaces are poor emitters of radiation but good reflectors.'
},
{
  id: 143,
  subject: 'Physics',
  question: 'A 0.040kg string 0.80m long is stretched and vibrated in a fundamental mode with a frequency of 40 Hz. What is the speed of propagation of the wave?',
  options: {
    A: '64 m/s',
    B: '340 m/s',
    C: '32 m/s',
    D: '128 m/s'
  },
  correctAnswer: 'A',
  explanation: 'For fundamental mode: λ = 2L = 1.6m\nv = fλ = 40×1.6 = 64 m/s'
},
{
  id: 144,
  subject: 'Physics',
  question: 'What is the total power output of a source with intensity 0.050 W/m² at a distance of 3.0m from the source?',
  options: {
    A: '112 W',
    B: '5.6 W',
    C: '15 W',
    D: '30 W'
  },
  correctAnswer: 'B',
  explanation: 'P = I×4πr² = 0.050×4π×9 = 5.65W'
},
{
  id: 145,
  subject: 'Physics',
  question: 'The superposition of two or more waves to produce a maximum or zero effect at a point is known as',
  options: {
    A: 'reflection',
    B: 'refraction',
    C: 'diffraction',
    D: 'interference'
  },
  correctAnswer: 'D',
  explanation: 'Interference is the superposition of waves producing constructive (maximum) or destructive (zero) effects.'
},
{
  id: 146,
  subject: 'Physics',
  question: 'The acceleration due to gravity',
  options: {
    A: 'Increases with increasing altitude',
    B: 'Decreases with increasing altitude',
    C: 'Increases with the square of the altitude',
    D: 'Is not affected by the altitude'
  },
  correctAnswer: 'B',
  explanation: 'g decreases with increasing altitude because g = GM/(R+h)².'
},
{
  id: 147,
  subject: 'Physics',
  question: 'Which of the following statements is NOT true about electric field?',
  options: {
    A: 'Electric field intensity is force per unit charge',
    B: 'Electric potential is a vector',
    C: 'The SI unit of electric field strength is N/C',
    D: 'Electric field intensity is equal to potential gradient'
  },
  correctAnswer: 'B',
  explanation: 'Electric potential is a scalar quantity, not a vector.'
},
{
  id: 148,
  subject: 'Physics',
  question: 'Which of the following about electrolysis is FALSE?',
  options: {
    A: 'Liquids that conduct electricity and are split up chemically by the current are electrolyzed',
    B: 'The current is brought into the electrolyte by the anode',
    C: 'The current is taken away from the electrolyte by the cathode',
    D: 'The container which holds the electrolyte and the electrode is the voltmeter'
  },
  correctAnswer: 'D',
  explanation: 'The container holding the electrolyte and electrodes is called the voltameter or electrolytic cell, not voltmeter.'
},
{
  id: 149,
  subject: 'Physics',
  question: 'Which of the following is NOT true about the properties of X-rays?',
  options: {
    A: 'They are not deflected by magnetic or electric field',
    B: 'They ionize a gas, making it a conductor',
    C: 'They are massive',
    D: 'They have high penetrating power'
  },
  correctAnswer: 'C',
  explanation: 'X-rays have no mass; they are electromagnetic radiation.'
},
{
  id: 150,
  subject: 'Physics',
  question: 'A transformer is connected to a 240V supply. The primary coil has 40 turns, and the secondary is found to be 960V. What is the ratio of the number of turns?',
  options: {
    A: '1:4',
    B: '4:1',
    C: '1:6',
    D: '6:1'
  },
  correctAnswer: 'A',
  explanation: 'V₂/V₁ = N₂/N₁ → 960/240 = 4 → N₂/N₁ = 4/1 → 1:4'
},
{
  id: 151,
  subject: 'Physics',
  question: 'Which of the following is NOT true about an object projected upwards at angle θ?',
  options: {
    A: 'The velocity is maximum at the maximum height',
    B: 'The acceleration along the horizontal direction is zero',
    C: 'The maximum range for an object moving with speed u is u²/g',
    D: 'The time to get maximum height equals the time to come back to the point of projection'
  },
  correctAnswer: 'A',
  explanation: 'Velocity is minimum (horizontal component only) at maximum height, not maximum.'
},
{
  id: 152,
  subject: 'Physics',
  question: 'Which of the following statements is NOT TRUE about a body performing simple harmonic motion?',
  options: {
    A: 'The linear speed is the product of the angular speed and the radius or amplitude',
    B: 'The linear acceleration is the product of the square of the angular speed and the displacement',
    C: 'Frequency is the number of complete vibrations per second made by a vibrating body',
    D: 'The SI unit of amplitude is Hertz (Hz)'
  },
  correctAnswer: 'D',
  explanation: 'The SI unit of amplitude is meter (m), not Hertz (Hz). Hertz is the unit of frequency.'
},
{
  id: 153,
  subject: 'Physics',
  question: 'If the force of gravity on an object of mass m is F, the gravitational field strength g is given by',
  options: {
    A: 'g = √(mF)',
    B: 'g = mF',
    C: 'g = m/F',
    D: 'g = F/m'
  },
  correctAnswer: 'D',
  explanation: 'g = F/m (force per unit mass)'
},

// ============ 2009 PHYSICS ============
{
  id: 154,
  subject: 'Physics',
  question: 'The force with which an object is attracted to the earth is called',
  options: {
    A: 'acceleration',
    B: 'mass',
    C: 'gravity',
    D: 'impulse',
    E: 'weight'
  },
  correctAnswer: 'E',
  explanation: 'Weight is the force with which an object is attracted to the earth.'
},
{
  id: 155,
  subject: 'Physics',
  question: 'The refractive index of a liquid is 1.5. If the velocity of light in vacuum is 3.0×10⁸ m/s, the velocity of light in the liquid is',
  options: {
    A: '1.5×10⁸ m/s',
    B: '2.0×10⁸ m/s',
    C: '3.0×10⁸ m/s',
    D: '4.5×10⁸ m/s'
  },
  correctAnswer: 'B',
  explanation: 'v = c/μ = 3.0×10⁸/1.5 = 2.0×10⁸ m/s'
},
{
  id: 156,
  subject: 'Physics',
  question: 'A train has initial velocity of 44 m/s and acceleration of -4 m/s². What is its velocity after 10 seconds?',
  options: {
    A: '2 m/s',
    B: '4 m/s',
    C: '8 m/s',
    D: '12 m/s',
    E: '16 m/s'
  },
  correctAnswer: 'B',
  explanation: 'v = u + at = 44 + (-4)×10 = 4 m/s'
},
{
  id: 157,
  subject: 'Physics',
  question: 'A man of mass 50kg ascends a flight of stairs 5m high in 5 seconds. If g = 10 m/s², the power expended is',
  options: {
    A: '100 W',
    B: '300 W',
    C: '250 W',
    D: '400 W',
    E: '500 W'
  },
  correctAnswer: 'E',
  explanation: 'Work = mgh = 50×10×5 = 2500J\nPower = Work/Time = 2500/5 = 500W'
},
{
  id: 158,
  subject: 'Physics',
  question: 'A machine has a velocity ratio of 5. If it requires a 50kg weight to overcome 200kg weight, the efficiency is',
  options: {
    A: '4%',
    B: '5%',
    C: '80%',
    D: '50%',
    E: '90%'
  },
  correctAnswer: 'C',
  explanation: 'MA = Load/Effort = 200/50 = 4\nEfficiency = (MA/VR)×100 = (4/5)×100 = 80%'
},
{
  id: 159,
  subject: 'Physics',
  question: 'If the force on a charge of 0.2 coulomb in an electric field is 4N, then the electric intensity of the field is',
  options: {
    A: '0.8 N/C',
    B: '0.8 N/C',
    C: '20.0 N/C',
    D: '4.2 N/C',
    E: '2.0 N/C'
  },
  correctAnswer: 'C',
  explanation: 'E = F/q = 4/0.2 = 20 N/C'
},
{
  id: 160,
  subject: 'Physics',
  question: 'The resistance of a wire depends on',
  options: {
    A: 'the length of the wire',
    B: 'the diameter of the wire',
    C: 'the temperature of the wire',
    D: 'the resistivity of the wire',
    E: 'all of the above'
  },
  correctAnswer: 'E',
  explanation: 'R = ρL/A, so resistance depends on length, cross-sectional area, temperature, and resistivity.'
},
{
  id: 161,
  subject: 'Physics',
  question: 'A simple pendulum 0.6m long has a period of 1.5s. What is the period of a similar pendulum 0.4m long?',
  options: {
    A: '1.4√(2/3) s',
    B: '1.5√(2/3) s',
    C: '2.25 s',
    D: '1.00 s',
    E: '2.00 s'
  },
  correctAnswer: 'B',
  explanation: 'T ∝ √L → T₂/T₁ = √(L₂/L₁) = √(0.4/0.6) = √(2/3)\nT₂ = 1.5√(2/3) s'
},
{
  id: 162,
  subject: 'Physics',
  question: 'A device that converts sound energy into electrical energy is',
  options: {
    A: 'the horn of a motor car',
    B: 'an AC generator',
    C: 'a microphone',
    D: 'the telephone earpiece',
    E: 'a loud speaker'
  },
  correctAnswer: 'C',
  explanation: 'A microphone converts sound waves into electrical signals.'
},
{
  id: 163,
  subject: 'Physics',
  question: 'Radio waves have velocity of 3×10⁸ m/s. If a radio station sends out a broadcast on a frequency 800 kHz, what is the wavelength?',
  options: {
    A: '375.0 m',
    B: '267.0 m',
    C: '240.0 m',
    D: '37.5 m',
    E: '26.7 m'
  },
  correctAnswer: 'A',
  explanation: 'λ = v/f = 3×10⁸/800,000 = 375m'
},
{
  id: 164,
  subject: 'Physics',
  question: 'Which of these is NOT a fundamental SI unit?',
  options: {
    A: 'Metre',
    B: 'Ampere',
    C: 'Kelvin',
    D: 'Second',
    E: 'Radian'
  },
  correctAnswer: 'E',
  explanation: 'Radian is a derived SI unit for angle, not a fundamental unit.'
},
{
  id: 165,
  subject: 'Physics',
  question: 'If two masses 40g and 60g are attached firmly to the end of a light metre rule, what is the centre of gravity of the system?',
  options: {
    A: 'at the mid-point',
    B: '40cm from the lighter mass',
    C: '40cm from the heavier mass',
    D: '60cm from the heavier mass',
    E: 'indeterminate'
  },
  correctAnswer: 'C',
  explanation: 'Taking moments: 40x = 60(100-x) → 40x = 6000-60x → 100x = 6000 → x = 60cm\nSo centre is 40cm from heavier mass.'
},
{
  id: 166,
  subject: 'Physics',
  question: 'To find the depth of a sea, a ship sends out a sound wave and receives an echo after one second. If velocity of sound in water is 1500 m/s, what is the depth?',
  options: {
    A: '0.75 km',
    B: '1.50 km',
    C: '2.20 km',
    D: '3.00 km',
    E: '3.75 km'
  },
  correctAnswer: 'A',
  explanation: 'Depth = v×t/2 = 1500×1/2 = 750m = 0.75km'
},
{
  id: 167,
  subject: 'Physics',
  question: 'What is the number of neutrons in the Uranium isotope ²³⁸₉₂U?',
  options: {
    A: '92',
    B: '146',
    C: '238',
    D: '330',
    E: '119'
  },
  correctAnswer: 'B',
  explanation: 'Neutrons = Mass number - Atomic number = 238 - 92 = 146'
},
{
  id: 168,
  subject: 'Physics',
  question: 'The mode of heat transfer which does not require a material medium is',
  options: {
    A: 'Conduction',
    B: 'Radiation',
    C: 'Convection',
    D: 'Propagation'
  },
  correctAnswer: 'B',
  explanation: 'Radiation does not require a material medium for heat transfer.'
},
{
  id: 169,
  subject: 'Physics',
  question: 'Which of the following is common to evaporation and boiling?',
  options: {
    A: 'take place at any temperature',
    B: 'are surface phenomena',
    C: 'involve change of state',
    D: 'take place at a definite pressure',
    E: 'none of the above'
  },
  correctAnswer: 'C',
  explanation: 'Both evaporation and boiling involve a change of state from liquid to gas.'
},
{
  id: 170,
  subject: 'Physics',
  question: 'Which of the following instruments has a pure tone?',
  options: {
    A: 'Guitar',
    B: 'Vibrating string',
    C: 'Tuning fork',
    D: 'Screen',
    E: 'Horns'
  },
  correctAnswer: 'C',
  explanation: 'A tuning fork produces a pure tone with a single frequency.'
},
{
  id: 171,
  subject: 'Physics',
  question: 'The product PV where P is pressure and V is volume has the same unit as',
  options: {
    A: 'Force',
    B: 'Power',
    C: 'Energy',
    D: 'Acceleration',
    E: 'All of the above'
  },
  correctAnswer: 'C',
  explanation: 'PV has units of energy (Joules). Pressure × Volume = Energy.'
},
{
  id: 172,
  subject: 'Physics',
  question: 'A household refrigerator is rated 200 watts. If electricity costs 5k per kWh, what is the cost of operating it for 20 days?',
  options: {
    A: '4.80',
    B: '48.00',
    C: '480.00',
    D: '1800.00',
    E: '210.00'
  },
  correctAnswer: 'A',
  explanation: 'Energy = 0.2 kW × 20 × 24 = 96 kWh\nCost = 96 × 0.05 = 4.80'
},
{
  id: 173,
  subject: 'Physics',
  question: 'The resistance of a 5m uniform wire of cross-sectional area 0.2×10⁻⁶ m² is 0.45Ω. What is the resistivity of the material?',
  options: {
    A: '1.10×10⁻⁶ ohm m',
    B: '1.25×10⁻⁶ ohm m',
    C: '2.40×10⁻⁷ ohm m',
    D: '1.70×10⁻⁸ ohm m'
  },
  correctAnswer: 'C',
  explanation: 'ρ = RA/L = 0.45×0.2×10⁻⁶/5 = 1.8×10⁻⁸ ohm m'
},
{
  id: 174,
  subject: 'Physics',
  question: 'When a yellow card is observed through a blue glass, the card would appear as',
  options: {
    A: 'Black',
    B: 'Green',
    C: 'Red',
    D: 'White',
    E: 'Purple'
  },
  correctAnswer: 'A',
  explanation: 'Yellow = red + green. Blue glass transmits blue only, so the card appears black.'
},
{
  id: 175,
  subject: 'Physics',
  question: 'A convex lens of focal length 10.0cm is used to form a real image which is half the size of the object. How far from the object is the image?',
  options: {
    A: '45cm',
    B: '30cm',
    C: '15cm',
    D: '20cm'
  },
  correctAnswer: 'C',
  explanation: 'm = v/u = 1/2 → v = u/2\n1/f = 1/v + 1/u = 2/u + 1/u = 3/u → u = 3f = 30cm, v = 15cm'
},
{
  id: 176,
  subject: 'Physics',
  question: 'A diverging lens of focal length 20cm forms an image half the size of the object. What is the object distance?',
  options: {
    A: '11.11cm',
    B: '100cm',
    C: '60cm',
    D: '8.71cm'
  },
  correctAnswer: 'A',
  explanation: 'For diverging lens: m = v/u = 1/2 → v = -u/2\n1/f = 1/v + 1/u = -2/u + 1/u = -1/u → u = 20cm'
},
{
  id: 177,
  subject: 'Physics',
  question: 'An object of height 3.00cm is placed 10cm in front of a biconvex lens of focal length 15cm. The image of the object is',
  options: {
    A: 'Real and 3.00 cm tall',
    B: 'Virtual and 3.00cm tall',
    C: 'Virtual and 9.00cm tall',
    D: 'Real and 9.00cm tall'
  },
  correctAnswer: 'C',
  explanation: '1/v = 1/f - 1/u = 1/15 - 1/10 = -1/30 → v = -30cm (virtual)\nm = v/u = 30/10 = 3\nImage height = 3×3 = 9cm'
},
{
  id: 178,
  subject: 'Physics',
  question: 'The most suitable type of mirror used for the construction of a searchlight is the',
  options: {
    A: 'Concave mirror',
    B: 'Spherical mirror',
    C: 'Convex mirror',
    D: 'Parabolic mirror'
  },
  correctAnswer: 'D',
  explanation: 'A parabolic mirror focuses light into a parallel beam, making it ideal for searchlights.'
},
{
  id: 179,
  subject: 'Physics',
  question: 'Light waves and ripples of water are similar because both',
  options: {
    A: 'are longitudinal waves',
    B: 'can be diffracted and refracted',
    C: 'have the same velocity',
    D: 'have the same frequency'
  },
  correctAnswer: 'B',
  explanation: 'Both light waves and water ripples exhibit diffraction and refraction.'
},
{
  id: 180,
  subject: 'Physics',
  question: 'Three 4Ω resistors were connected in series by Tola while Ade connected the same set in parallel. The ratio of the value obtained by Ade to that obtained by Tola is',
  options: {
    A: '1:2',
    B: '1:9',
    C: '1:10',
    D: '1:5'
  },
  correctAnswer: 'B',
  explanation: 'Series: R = 4+4+4 = 12Ω\nParallel: 1/R = 1/4+1/4+1/4 = 3/4 → R = 4/3Ω\nRatio = (4/3):12 = 1:9'
},
{
  id: 181,
  subject: 'Physics',
  question: 'The principle of operation of an induction coil is based on',
  options: {
    A: 'Ohm\'s law',
    B: 'Ampere\'s law',
    C: 'Faraday\'s law',
    D: 'Coulomb\'s law'
  },
  correctAnswer: 'C',
  explanation: 'An induction coil works on Faraday\'s law of electromagnetic induction.'
},
{
  id: 182,
  subject: 'Physics',
  question: 'The half-life of a radioactive element is 9 days. What fraction of atoms has decayed in 36 days?',
  options: {
    A: '1/16',
    B: '1/4',
    C: '1/2',
    D: '15/16'
  },
  correctAnswer: 'D',
  explanation: '36 days = 4 half-lives\nRemaining = (1/2)⁴ = 1/16\nDecayed = 1 - 1/16 = 15/16'
},
{
  id: 183,
  subject: 'Physics',
  question: 'Which of the following radiations cannot be deflected by an electric field or a magnetic field?',
  options: {
    A: 'α-rays',
    B: 'β-rays',
    C: 'γ-rays',
    D: 'X-rays'
  },
  correctAnswer: 'C',
  explanation: 'Gamma rays are electromagnetic radiation and are not deflected by electric or magnetic fields.'
},
{
  id: 184,
  subject: 'Physics',
  question: 'The equation ¹⁵⁰X → ¹⁵⁰Y + ⁰₋₁e + energy represents',
  options: {
    A: 'α-decay',
    B: 'β-decay',
    C: 'γ-decay',
    D: 'photon emission'
  },
  correctAnswer: 'B',
  explanation: 'The emission of an electron (⁰₋₁e) with no change in mass number indicates β⁻ decay.'
},
{
  id: 185,
  subject: 'Physics',
  question: 'A box of mass 40kg is being dragged along the floor by a rope inclined at 60° to the horizontal. The frictional force is 100N and tension on the rope is 300N. How much work is done in dragging the box through a distance of 4m?',
  options: {
    A: '680J',
    B: '200J',
    C: '100J',
    D: '400J'
  },
  correctAnswer: 'B',
  explanation: 'Horizontal component of force = 300cos60° = 150N\nNet force = 150 - 100 = 50N\nWork = Fd = 50×4 = 200J'
},
{
  id: 186,
  subject: 'Physics',
  question: 'A 70kg man ascends a flight of stairs of height 4m in 7s. The power expended by the man is (g = 10 m/s²)',
  options: {
    A: '40 W',
    B: '100 W',
    C: '280 W',
    D: '400 W'
  },
  correctAnswer: 'D',
  explanation: 'Work = mgh = 70×10×4 = 2800J\nPower = Work/Time = 2800/7 = 400W'
},
{
  id: 187,
  subject: 'Physics',
  question: 'Which of the following statements is NOT true about inclined planes?',
  options: {
    A: 'As the slope of an inclined plane increases, the velocity ratio decreases',
    B: 'The efficiency of an inclined plane decreases as the slope increases',
    C: 'The effort required to push a given load up an inclined plane increases as the slope increases',
    D: 'The mechanical advantage of a smooth inclined plane depends on the ratio of the length to the height'
  },
  correctAnswer: 'A',
  explanation: 'As slope increases, velocity ratio (L/h) decreases, so A is correct. The statement that is NOT true is about efficiency.'
},
{
  id: 188,
  subject: 'Physics',
  question: 'If M and R are the mass and radius of the earth respectively and G is the universal gravitational constant, the earth\'s gravitational potential at an altitude H above the ground level is',
  options: {
    A: '-GM/H',
    B: '-GM/(R+H)',
    C: '-GM/2H',
    D: '-GM(R-H)'
  },
  correctAnswer: 'B',
  explanation: 'Gravitational potential at distance r from center is V = -GM/r\nAt altitude H: r = R+H → V = -GM/(R+H)'
},
{
  id: 189,
  subject: 'Physics',
  question: 'The ice and steam points of a thermometer are 20mm and 100mm respectively. A temperature of 75°C corresponds to Y mm on the thermometer. What is Y?',
  options: {
    A: '100mm',
    B: '70mm',
    C: '80mm',
    D: '60mm'
  },
  correctAnswer: 'C',
  explanation: 'Y = 20 + (75/100)(100-20) = 20 + 0.75×80 = 20 + 60 = 80mm'
},
{
  id: 190,
  subject: 'Physics',
  question: 'An electric kettle with negligible heat capacity is rated at 2000W. If 2.0kg of water is put in it, how long will it take for temperature to rise from 20°C to 100°C? (Specific heat capacity of water = 4200 J/kgK)',
  options: {
    A: '336 s',
    B: '420 s',
    C: '168 s',
    D: '84 s'
  },
  correctAnswer: 'A',
  explanation: 'Heat required = mcΔT = 2×4200×80 = 672,000J\nTime = Energy/Power = 672,000/2000 = 336s'
},
{
  id: 191,
  subject: 'Physics',
  question: 'A quantity of ice at -10°C is heated until the temperature of the heating vessel is 90°C. Which of the following constants is NOT required to determine the quantity of heat supplied?',
  options: {
    A: 'Specific latent heat of vaporization',
    B: 'Specific heat capacity of ice',
    C: 'Specific latent heat of fusion',
    D: 'Specific heat capacity of water'
  },
  correctAnswer: 'A',
  explanation: 'Since the final temperature is 90°C (below boiling), latent heat of vaporization is not needed.'
},
{
  id: 192,
  subject: 'Physics',
  question: 'The scent from a jar of perfume opened in one corner of a room is picked up in another part of the room. The perfume moves through the air molecules by',
  options: {
    A: 'Evaporation',
    B: 'Osmosis',
    C: 'Diffusion',
    D: 'Convection'
  },
  correctAnswer: 'C',
  explanation: 'The perfume molecules spread through the air by diffusion.'
},
{
  id: 193,
  subject: 'Physics',
  question: 'What is the dimension of pressure?',
  options: {
    A: 'ML⁻¹T⁻²',
    B: 'MLT⁻²',
    C: 'MLT⁻³',
    D: 'ML⁻³'
  },
  correctAnswer: 'A',
  explanation: 'Pressure = Force/Area = MLT⁻²/L² = ML⁻¹T⁻²'
},
{
  id: 194,
  subject: 'Physics',
  question: 'A body is projected from the earth\'s surface with the hope of letting it escape from the earth\'s gravitational field. What is the minimum escape velocity? (Earth\'s radius = 6.4×10³ km, g = 10 m/s²)',
  options: {
    A: '11.3 km/s',
    B: '13.3 km/s',
    C: '12.3 km/s',
    D: '14.3 km/s'
  },
  correctAnswer: 'A',
  explanation: 'v_esc = √(2gR) = √(2×10×6.4×10⁶) = √(1.28×10⁸) = 11.3 km/s'
},
{
  id: 195,
  subject: 'Physics',
  question: 'A uniform rod PQ of mass 2kg and length 1m is pivoted at the end P. If a load of 14N is placed on it at the centre, find the force that should be applied vertically upwards at Q to maintain the rod in equilibrium horizontally.',
  options: {
    A: '7N',
    B: '28N',
    C: '68N',
    D: '17N'
  },
  correctAnswer: 'D',
  explanation: 'Taking moments about P: 14×0.5 = F×1 → F = 7N\nTotal force at P = 14 + 2g = 34N\nForce at Q = 34/2 = 17N'
},
{
  id: 196,
  subject: 'Physics',
  question: 'The energy contained in a wire when it is extended by 0.02m by a force of 500N is',
  options: {
    A: '10⁴J',
    B: '10³J',
    C: '10J',
    D: '5J'
  },
  correctAnswer: 'D',
  explanation: 'Energy = ½Fx = ½×500×0.02 = 5J'
},
{
  id: 197,
  subject: 'Physics',
  question: 'What is the acceleration due to gravity \'g\' on the moon, if g is 10 m/s² on the earth? (Moon\'s mass is 1/81 of Earth\'s, radius is 1/4)',
  options: {
    A: '0.74 m/s²',
    B: '0.1 m/s²',
    C: '10.0 m/s²',
    D: '1.67 m/s²'
  },
  correctAnswer: 'D',
  explanation: 'g_moon = g_earth × (M_moon/M_earth) × (R_earth/R_moon)²\n= 10 × (1/81) × (4)² = 10 × 16/81 = 1.98 m/s²'
},
{
  id: 198,
  subject: 'Physics',
  question: 'A 5kg block is released from rest on a smooth plane inclined at 30° to the horizontal. What is the acceleration down the plane? (g = 10 m/s²)',
  options: {
    A: '5.0 m/s²',
    B: '8.7 m/s²',
    C: '25.0 m/s²',
    D: '5.8 m/s²'
  },
  correctAnswer: 'A',
  explanation: 'a = g sinθ = 10×0.5 = 5.0 m/s²'
},
{
  id: 199,
  subject: 'Physics',
  question: 'A rectangular metal block of volume 10⁻⁶ m³ at 273K is heated to 573K. If its coefficient of linear expansion is 1.2×10⁻⁵ K⁻¹, the percentage change of its volume is',
  options: {
    A: '1.5%',
    B: '1.1%',
    C: '0.1%',
    D: '0.4%'
  },
  correctAnswer: 'B',
  explanation: 'γ = 3α = 3.6×10⁻⁵ K⁻¹\nΔT = 573-273 = 300K\nΔV/V = γΔT = 3.6×10⁻⁵×300 = 0.0108 = 1.08%'
},
{
  id: 200,
  subject: 'Physics',
  question: 'A 500kg car was initially at rest and travelled with an acceleration of 5 m/s². What is its kinetic energy after 4s?',
  options: {
    A: '2.5×10³ J',
    B: '10⁵ J',
    C: '5×10³ J',
    D: '5×10⁵ J'
  },
  correctAnswer: 'B',
  explanation: 'v = at = 5×4 = 20 m/s\nKE = ½mv² = ½×500×400 = 100,000 = 10⁵ J'
},
{
  id: 202,
  subject: 'Physics',
  question: 'The period of a simple pendulum will increase by what factor if its length is increased by a factor of four?',
  options: {
    A: '2π',
    B: '4',
    C: '2',
    D: '1/4'
  },
  correctAnswer: 'C',
  explanation: 'T ∝ √L, so if L increases by factor 4, T increases by factor 2.'
},
{
  id: 203,
  subject: 'Physics',
  question: 'An electric cell has an internal resistance of 2Ω. A current of 0.5A was measured when a resistor of resistance 5Ω was connected across it. Determine the electromotive force of the cell.',
  options: {
    A: '3.5V',
    B: '2.5V',
    C: '4.5V',
    D: '2.35V'
  },
  correctAnswer: 'A',
  explanation: 'E = I(R+r) = 0.5(5+2) = 3.5V'
},
{
  id: 204,
  subject: 'Physics',
  question: 'The speed of light in air is 3×10⁸ m/s. If the refractive index of light from air to water is 4/3, calculate the speed of light in water.',
  options: {
    A: '2.25×10⁸ m/s',
    B: '2.25×10⁸ m/s',
    C: '4.00×10⁸ m/s',
    D: '4.33×10⁸ m/s'
  },
  correctAnswer: 'A',
  explanation: 'v = c/μ = 3×10⁸/(4/3) = 2.25×10⁸ m/s'
},
{
  id: 205,
  subject: 'Physics',
  question: 'It is known that an atomic nucleus comprises of positively charged protons. Which of the following also exist in the nucleus?',
  options: {
    A: 'A beta particle',
    B: 'An alpha particle',
    C: 'A neutron',
    D: 'An electron'
  },
  correctAnswer: 'C',
  explanation: 'The nucleus contains protons and neutrons.'
},
{
  id: 206,
  subject: 'Physics',
  question: 'The silver wall of a vacuum flask prevents heat loss due to',
  options: {
    A: 'conduction',
    B: 'convection',
    C: 'radiation',
    D: 'diffraction'
  },
  correctAnswer: 'C',
  explanation: 'Silvered walls reduce heat loss by radiation by reflecting thermal radiation back.'
},
{
  id: 207,
  subject: 'Physics',
  question: 'The electromagnetic waves that are sensitive to temperature changes are',
  options: {
    A: 'ultra-violet rays',
    B: 'gamma-rays',
    C: 'infra-red rays',
    D: 'x-rays'
  },
  correctAnswer: 'C',
  explanation: 'Infrared radiation is thermal radiation and is sensitive to temperature changes.'
},
{
  id: 208,
  subject: 'Physics',
  question: 'A body accelerates uniformly from rest at 6 m/s² for 8 seconds and then decreases uniformly to rest in the next 5 seconds. The magnitude of the deceleration is',
  options: {
    A: '9.6 m/s²',
    B: '48 m/s²',
    C: '24.0 m/s²',
    D: '39.4 m/s²'
  },
  correctAnswer: 'A',
  explanation: 'v = at = 6×8 = 48 m/s\na = v/t = 48/5 = 9.6 m/s²'
},
{
  id: 209,
  subject: 'Physics',
  question: 'A nail is pulled from a wall with a string tied to the nail. If the string is inclined at 30° to the wall and the tension is 50N, the effective force used in pulling the nail is',
  options: {
    A: '25N',
    B: '25√3 N',
    C: '50 N',
    D: '50√3 N'
  },
  correctAnswer: 'A',
  explanation: 'Effective force = T sin30° = 50×0.5 = 25N'
},
{
  id: 210,
  subject: 'Physics',
  question: 'A capacitor of 2.0×10⁻¹¹ F and an inductor are joined in series. The value of the inductance that will give the circuit a resonant frequency of 200 kHz is',
  options: {
    A: '1/16 H',
    B: '1/8 H',
    C: '1/64 H',
    D: '1/32 H'
  },
  correctAnswer: 'D',
  explanation: 'f = 1/(2π√(LC)) → L = 1/(4π²f²C)\nL = 1/(4π²×(2×10⁵)²×2×10⁻¹¹) = 1/32 H'
},
{
  id: 211,
  subject: 'Physics',
  question: 'The ice and steam points of a thermometer are 20mm and 100mm respectively. A temperature of 75°C corresponds to Y mm on the thermometer. What is Y?',
  options: {
    A: '100mm',
    B: '70mm',
    C: '80mm',
    D: '60mm'
  },
  correctAnswer: 'C',
  explanation: 'Y = 20 + (75/100)(100-20) = 80mm'
},
{
  id: 212,
  subject: 'Physics',
  question: 'An electric kettle with negligible heat capacity is rated at 2000W. If 2.0kg of water is put in it, how long will it take for temperature to rise from 20°C to 100°C? (Specific heat capacity of water = 4200 J/kgK)',
  options: {
    A: '336 s',
    B: '420 s',
    C: '168 s',
    D: '84 s'
  },
  correctAnswer: 'A',
  explanation: 'Q = mcΔT = 2×4200×80 = 672,000J\nt = Q/P = 672,000/2000 = 336s'
},
{
  id: 213,
  subject: 'Physics',
  question: 'The scent from a jar of perfume opened in one corner of a room is picked up in another part. The perfume moves through the air molecules by',
  options: {
    A: 'Evaporation',
    B: 'Osmosis',
    C: 'Diffusion',
    D: 'Convection'
  },
  correctAnswer: 'C',
  explanation: 'Diffusion is the movement of particles from high concentration to low concentration.'
},
{
  id: 214,
  subject: 'Physics',
  question: 'A convex lens of focal length 10.0cm is used to form a real image which is half the size of the object. How far from the object is the image?',
  options: {
    A: '45cm',
    B: '30cm',
    C: '15cm',
    D: '20cm'
  },
  correctAnswer: 'C',
  explanation: 'v/u = 1/2, 1/f = 1/v + 1/u, u = 30cm, v = 15cm'
},
{
  id: 215,
  subject: 'Physics',
  question: 'The most suitable type of mirror used for the construction of a searchlight is the',
  options: {
    A: 'Concave mirror',
    B: 'Spherical mirror',
    C: 'Convex mirror',
    D: 'Parabolic mirror'
  },
  correctAnswer: 'D',
  explanation: 'Parabolic mirrors focus parallel rays to a point and vice versa.'
},
{
  id: 216,
  subject: 'Physics',
  question: 'Three 4Ω resistors were connected in series by Tola while Ade connected the same set in parallel. The ratio of the value obtained by Ade to that obtained by Tola is',
  options: {
    A: '1:2',
    B: '1:9',
    C: '1:10',
    D: '1:5'
  },
  correctAnswer: 'B',
  explanation: 'Series: 12Ω, Parallel: 4/3Ω, Ratio: 4/3:12 = 1:9'
},
{
  id: 217,
  subject: 'Physics',
  question: 'The half-life of a radioactive element is 9 days. What fraction of atoms has decayed in 36 days?',
  options: {
    A: '1/16',
    B: '1/4',
    C: '1/2',
    D: '15/16'
  },
  correctAnswer: 'D',
  explanation: '36 days = 4 half-lives, remaining = 1/16, decayed = 15/16'
},
{
  id: 218,
  subject: 'Physics',
  question: 'A body is projected from the earth\'s surface with the hope of letting it escape. What is the minimum escape velocity? (R = 6.4×10³ km, g = 10 m/s²)',
  options: {
    A: '11.3 km/s',
    B: '13.3 km/s',
    C: '12.3 km/s',
    D: '14.3 km/s'
  },
  correctAnswer: 'A',
  explanation: 'v_esc = √(2gR) = √(2×10×6.4×10⁶) = 11.3 km/s'
},
{
  id: 219,
  subject: 'Physics',
  question: 'The energy contained in a wire when it is extended by 0.02m by a force of 500N is',
  options: {
    A: '10⁴J',
    B: '10³J',
    C: '10J',
    D: '5J'
  },
  correctAnswer: 'D',
  explanation: 'E = ½Fx = ½×500×0.02 = 5J'
},
{
  id: 220,
  subject: 'Physics',
  question: 'The acceleration due to gravity on the moon is approximately (g on earth = 10 m/s²)',
  options: {
    A: '0.74 m/s²',
    B: '0.1 m/s²',
    C: '10.0 m/s²',
    D: '1.67 m/s²'
  },
  correctAnswer: 'D',
  explanation: 'g_moon = g_earth × (M_moon/M_earth) × (R_earth/R_moon)² = 10 × (1/81) × 16 = 1.98 m/s²'
},
{
  id: 221,
  subject: 'Physics',
  question: 'A 5kg block is released from rest on a smooth plane inclined at 30°. What is the acceleration? (g = 10 m/s²)',
  options: {
    A: '5.0 m/s²',
    B: '8.7 m/s²',
    C: '25.0 m/s²',
    D: '5.8 m/s²'
  },
  correctAnswer: 'A',
  explanation: 'a = g sin30° = 10×0.5 = 5.0 m/s²'
},
{
  id: 222,
  subject: 'Physics',
  question: 'The silver wall of a vacuum flask prevents heat loss due to',
  options: {
    A: 'conduction',
    B: 'convection',
    C: 'radiation',
    D: 'diffraction'
  },
  correctAnswer: 'C',
  explanation: 'Silvered walls reflect thermal radiation, reducing heat loss.'
},
{
  id: 223,
  subject: 'Physics',
  question: 'Electromagnetic waves that are sensitive to temperature changes are',
  options: {
    A: 'ultra-violet rays',
    B: 'gamma-rays',
    C: 'infra-red rays',
    D: 'x-rays'
  },
  correctAnswer: 'C',
  explanation: 'Infrared radiation is thermal radiation and is sensitive to temperature.'
},
{
  id: 224,
  subject: 'Physics',
  question: 'A 500kg car initially at rest travelled with acceleration 5 m/s². What is its kinetic energy after 4s?',
  options: {
    A: '2.5×10³ J',
    B: '10⁵ J',
    C: '5×10³ J',
    D: '5×10⁵ J'
  },
  correctAnswer: 'B',
  explanation: 'v = 20 m/s, KE = ½×500×400 = 100,000 = 10⁵ J'
},
{
  id: 225,
  subject: 'Physics',
  question: 'A convex lens of focal length 15cm forms a virtual image three times the size of the object. Find the object distance.',
  options: {
    A: '10cm',
    B: '15cm',
    C: '20cm',
    D: '30cm'
  },
  correctAnswer: 'A',
  explanation: 'm = v/u = 3 → v = -3u\n1/15 = 1/(-3u) + 1/u = -1/(3u) + 1/u = 2/(3u)\nu = 10cm'
},
{
  id: 226,
  subject: 'Physics',
  question: 'The power of a lens is +2.5D. What is its focal length?',
  options: {
    A: '0.25m',
    B: '0.40m',
    C: '2.5m',
    D: '4.0m'
  },
  correctAnswer: 'B',
  explanation: 'f = 1/P = 1/2.5 = 0.40m'
},
{
  id: 227,
  subject: 'Physics',
  question: 'A transformer has 1000 turns in the primary coil and 200 turns in the secondary. If the primary voltage is 240V, the secondary voltage is',
  options: {
    A: '12V',
    B: '24V',
    C: '48V',
    D: '120V'
  },
  correctAnswer: 'C',
  explanation: 'V₂ = V₁ × N₂/N₁ = 240 × 200/1000 = 48V'
},
{
  id: 228,
  subject: 'Physics',
  question: 'The SI unit of power is',
  options: {
    A: 'Joule',
    B: 'Watt',
    C: 'Newton',
    D: 'Pascal'
  },
  correctAnswer: 'B',
  explanation: 'The SI unit of power is the Watt (W).'
},
{
  id: 229,
  subject: 'Physics',
  question: 'A car of mass 1000kg is moving at 20 m/s. The braking force to stop it in 5 seconds is',
  options: {
    A: '2000N',
    B: '4000N',
    C: '5000N',
    D: '10000N'
  },
  correctAnswer: 'B',
  explanation: 'a = (0-20)/5 = -4 m/s²\nF = ma = 1000×4 = 4000N'
},
{
  id: 230,
  subject: 'Physics',
  question: 'The speed of sound in air is approximately',
  options: {
    A: '330 m/s',
    B: '300 m/s',
    C: '340 m/s',
    D: '350 m/s'
  },
  correctAnswer: 'A',
  explanation: 'The speed of sound in air at room temperature is approximately 330 m/s.'
}
];

export default physicsQuestions;
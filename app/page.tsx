export default function Page() {
  const benefits = [
    {
      title: 'Nervous System Education Library',
      description:
        'Clear, grounded teaching that explains why chronic stress keeps the body feeling wired, tense, numb, or exhausted — and how regulation can be rebuilt over time.',
    },
    {
      title: 'Guided Somatic Awareness Practices',
      description:
        'Short, repeatable body-based practices designed to help members reconnect with sensation, breathe more fully, and notice early signs of stress before burnout deepens.',
    },
    {
      title: 'Burnout Recovery Tools',
      description:
        'Calm, practical tools for post-shift decompression, emotional downshifting, and rebuilding a more supportive relationship with your body in daily life.',
    },
    {
      title: 'Monthly Reset Audio or Video',
      description:
        'Fresh monthly guidance to help members stay consistent with regulation, body awareness, and nervous system support without overwhelm.',
    },
    {
      title: 'Private Houston Bodywork Access',
      description:
        'For local members, access to private mobile bodywork sessions in a clean, professional, high-trust setting, with sessions starting at $189.',
    },
  ];

  const whoItsFor = [
    'Nurses and healthcare professionals',
    'Caregivers and helpers',
    'Teachers and service professionals',
    'Women who feel wired, tense, numb, or exhausted',
  ];

  const method = [
    {
      title: 'Nervous System Education',
      body:
        'Understand why stress can keep the body stuck in survival mode and why relaxation can feel difficult after prolonged overload.',
    },
    {
      title: 'Guided Regulation Practices',
      body:
        'Use short, supportive exercises that help the body experience safety, downshift from chronic alertness, and rebuild calm.',
    },
    {
      title: 'Somatic Awareness',
      body:
        'Learn to notice breathing, muscle tension, sensation, and the early cues your body has been sending all along.',
    },
  ];

  const sessions = [
    {
      name: 'Alpha Session',
      price: '$189',
      description: 'Regulates the nervous system',
      focus: 'calming, downshifting, safety',
      experience: 'gentle, rhythmic, restorative',
    },
    {
      name: 'Omega Session',
      price: '$225',
      description: 'Releases stored tension in the body',
      focus: 'depth, structure, physical reset',
      experience: 'slow, deliberate, therapeutic',
    },
  ];

  const testimonials = [
    {
      quote:
        'This gave me a calmer way to check in with my body after long shifts. It feels supportive, clear, and actually doable in real life.',
      name: 'Danielle R.',
      role: 'Nurse Member',
    },
    {
      quote:
        'I finally had language for what my body was doing under stress. The practices feel gentle, professional, and grounding.',
      name: 'Marissa T.',
      role: 'Healthcare Professional',
    },
    {
      quote:
        'The membership feels like a steady layer of support instead of more pressure. I appreciate how calm and structured everything is.',
      name: 'Alicia S.',
      role: 'Teacher Member',
    },
  ];

  const faqs = [
    {
      question: 'What is included inside the membership?',
      answer:
        'Members receive nervous system education, guided somatic awareness practices, burnout recovery tools, monthly reset audio or video support, and access to private Houston bodywork pathways for local members.',
    },
    {
      question: 'Is this medical care or therapy?',
      answer:
        'No. This is educational wellness support focused on nervous system literacy, body awareness, and practical regulation tools. It is not medical advice, diagnosis, or therapy.',
    },
    {
      question: 'Who is this designed for?',
      answer:
        'It is designed for women in high-stress roles such as nurses, healthcare workers, teachers, caregivers, and other professionals who feel tense, wired, numb, or emotionally exhausted.',
    },
    {
      question: 'What does the app preview represent?',
      answer:
        'The check-in app preview represents a daily support layer for members — a simple way to stay connected to body awareness, stress patterns, and practical next steps between deeper membership resources.',
    },
    {
      question: 'How does the waitlist discount work?',
      answer:
        'Joining the waitlist reserves early access to founder pricing, including the 40% off offer and first access to new content when enrollment opens.',
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-emerald-50 via-sky-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:px-10 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
          <div className="max-w-3xl flex-1">
            <div className="mb-6 inline-flex items-center rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur">
              Somatic Nurse Membership • Early Access
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Professional nervous system support for women living in constant stress.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Education, guided somatic practices, and private Houston bodywork designed to help women move out of survival mode and reconnect with calm, sensation, and presence.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Join Waitlist for 40% Off
              </a>
              <a
                href="#membership"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Membership Details
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="text-sm font-medium text-slate-500">Founder offer</div>
                <div className="mt-1 text-2xl font-semibold text-slate-950">40% off</div>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="text-sm font-medium text-slate-500">Membership</div>
                <div className="mt-1 text-2xl font-semibold text-slate-950">$39/mo</div>
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-4 shadow-sm backdrop-blur">
                <div className="text-sm font-medium text-slate-500">Bonus</div>
                <div className="mt-1 text-2xl font-semibold text-slate-950">14-day trial</div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-2xl shadow-slate-200 backdrop-blur md:p-8">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-800">
                Why this exists
              </div>
              <h2 className="text-2xl font-semibold text-slate-950 md:text-3xl">Your body is not broken.</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Long work hours, emotional pressure, caregiving roles, and constant responsibility can keep the body in an extended stress response. Over time, the nervous system may stay activated long after the day is over.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                This can show up as chronic tension, poor sleep, difficulty relaxing, emotional exhaustion, and a sense of disconnection from your own body. That is biology, not weakness.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
                {[
                  'Sleep and recovery',
                  'Emotional resilience',
                  'Calm and presence',
                  'Muscle tension relief',
                  'Body awareness',
                  'Post-shift decompression',
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">The problem</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Why so many women feel stuck in survival mode
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Many women end up feeling tense, wired, emotionally drained, disconnected from sensation, and unable to truly relax. Disconnection is often the nervous system adapting to overload.
            </p>
          </div>

          <div className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-sky-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Key reframe</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              The goal is not force. The goal is gentle retraining.
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Repeated experiences of awareness, safety, and regulation help the body relearn calm over time.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Who this is for</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Designed for women carrying high levels of stress
            </h3>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {whoItsFor.map((item) => (
              <div
                key={item}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-lg font-medium leading-7 text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">The method</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            A calm, professional approach to nervous system education and somatic reconnection
          </h3>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {method.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-950">{item.title}</h4>
              <p className="mt-4 leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="membership" className="border-y border-slate-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Membership</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Somatic Nervous System Membership
              </h3>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                A private education community for women learning how to exit survival mode, reconnect with their body, and practice nervous system regulation in real life.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200">
              <div className="text-sm font-medium text-slate-500">Membership price</div>
              <div className="mt-2 text-4xl font-semibold text-slate-950">
                $39<span className="text-xl text-slate-500">/month</span>
              </div>
              <div className="mt-3 text-sm text-emerald-700">Join the waitlist for 40% off founder pricing</div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/80 bg-white p-7 shadow-sm">
                <h4 className="text-xl font-semibold text-slate-950">{item.title}</h4>
                <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Free resource</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">The Somatic Reset Guide</h3>
            <p className="mt-5 leading-7 text-slate-600">
              A short educational guide explaining why chronic stress can leave women feeling wired, tense, numb, and disconnected — and how somatic awareness begins rebuilding connection.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                'Why chronic stress keeps the body in survival mode',
                'How stress disconnects sensation and body awareness',
                'Why relaxation alone often does not work',
                'A simple practice to begin reconnecting with your body',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="https://brockjohn.com/free-somatic-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-600"
                >
                  Read the Free Somatic Reset Guide
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Try this 60-second practice</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">Body Awareness Reset</h3>
            <ol className="mt-6 space-y-4 text-lg leading-8 text-slate-200">
              <li>1. Sit comfortably and close your eyes.</li>
              <li>2. Take three slow breaths.</li>
              <li>3. Notice where your body feels tight.</li>
              <li>4. Observe the sensation without trying to change it.</li>
            </ol>
            <p className="mt-6 text-slate-300">
              The goal is awareness, not fixing. Regulation is a skill the body can learn again.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Brock Somatic Check-In App</p>
            <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
              A daily bridge between stress and support
            </h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              The app gives core members a practical daily support layer before moving into deeper membership teaching, body awareness work, and premium support pathways.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Daily self check-in support',
                'Body awareness tracking',
                'Stress pattern visibility',
                'Simple next-step guidance',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.25rem] bg-[#24104f] p-6 shadow-2xl shadow-slate-300 md:p-8">
            <div className="rounded-[1.75rem] border border-dashed border-white/30 bg-white/10 p-6 md:p-8">
              <div className="rounded-[1.5rem] bg-white/5 p-6 md:p-10">
                <figure className="flex aspect-[4/5] items-center justify-center rounded-[1.5rem] border border-white/10 bg-[#46357d] text-center">
                  <figcaption className="max-w-sm px-6 text-white/90">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-pink-100/90">App preview</p>
                    <h4 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">Image placeholder</h4>
                    <p className="mt-4 text-base leading-7 text-white/80 md:text-lg">
                      Upload your Brock Somatic Check-In App screenshot to replace this preview block.
                    </p>
                    <p className="sr-only">Placeholder image area for Brock Somatic Check-In App preview.</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Testimonials</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              What members say about the support
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Calm, structured, body-aware support designed to feel practical in real life.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <blockquote className="text-lg leading-8 text-slate-700">“{item.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-5">
                  <div className="font-semibold text-slate-950">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">FAQ</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Common questions</h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              A clear overview of what the membership includes, who it is for, and how the support is structured.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <details key={item.question} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <span className="text-2xl leading-none text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Houston private sessions</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
              Deeper support for chronic tension and post-shift overload
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              For Houston members, private mobile sessions offer deeper nervous system support in a professional, high-trust setting.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {sessions.map((session) => (
              <div key={session.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h4 className="text-2xl font-semibold text-slate-950">{session.name}</h4>
                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
                    {session.price}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 leading-7 text-slate-600">
                  <li>→ {session.description}</li>
                  <li>→ Focus: {session.focus}</li>
                  <li>→ Experience: {session.experience}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
          <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 to-slate-800 p-8 text-white shadow-2xl shadow-slate-300 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">Early access</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Join the waitlist and receive 40% off founder pricing.
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Join early to receive a 14-day free trial, founder pricing, and first access to new education and practice content.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {['40% off founder pricing', '14-day free trial', 'First access to new content'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h4 className="text-2xl font-semibold text-slate-950">Reserve your spot</h4>
            <p className="mt-3 leading-7 text-slate-600">
              Clean, simple waitlist section ready for your email platform embed or form action.
            </p>

            <form className="mt-8 space-y-5" action="#" method="post">
              <div>
                <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-slate-700">
                  First name
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="Your first name"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-100"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-100"
                />
              </div>
              <div>
                <label htmlFor="houston" className="mb-2 block text-sm font-medium text-slate-700">
                  Are you in Houston?
                </label>
                <select
                  id="houston"
                  name="houstonStatus"
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option>Yes, I am in Houston</option>
                  <option>No, I want digital membership only</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                Join Waitlist
              </button>
            </form>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Education only • Not medical advice • Consult a qualified health professional for medical concerns
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-slate-950">Brock John</div>
              <div className="text-sm text-slate-500">Somatic Nervous System Educator • Houston, Texas</div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#membership"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Membership Details
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Join Waitlist for 40% Off
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

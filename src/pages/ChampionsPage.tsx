import { FormEvent, useState } from 'react';
import { CheckCircle, Send, Trophy } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const expertiseAreas = [
  'Web application pentesting',
  'Windows / Active Directory pentesting',
  'Linux infrastructure pentesting',
  'Exploit development',
  'Reverse engineering',
  'Malware analysis',
  'Threat intelligence / threat analysis',
  'Digital forensics and incident response',
  'Red teaming / adversary simulation',
  'SOC L2 / L3 operations',
  'Detection engineering',
  'SIEM engineering',
  'Network security',
  'Cloud security',
  'Kubernetes / container security',
  'Application security / secure code review',
  'AI / LLM security',
  'OT / ICS security',
  'OSINT',
  'Governance, risk and compliance',
  'Privacy and data protection',
  'Security awareness and training',
];

const contributionFormats = [
  'Animate an online event',
  'Lead a workshop',
  'Run a technical demo',
  'Join streams as a speaker',
  'Be available for expert calls / booking',
  'Review community content',
  'Mentor juniors',
  'Share threat intelligence',
];

const ChampionsPage = () => {
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [expertiseError, setExpertiseError] = useState('');
  const location = useLocation();
  const submitted = new URLSearchParams(location.search).get('submitted') === '1';

  const toggleExpertise = (area: string) => {
    setSelectedExpertise((current) =>
      current.includes(area) ? current.filter((item) => item !== area) : [...current, area]
    );
    setExpertiseError('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (selectedExpertise.length === 0) {
      event.preventDefault();
      setExpertiseError('Select at least one cybersecurity expertise area.');
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        <section className="max-w-5xl mx-auto text-center mb-10 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30">
              <Trophy className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-sm font-medium text-red-500">CyberSec.ma Champions</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-0 text-white leading-tight">
            Join Community as Champion (Builder)
          </h1>
          {submitted && (
            <div className="mt-8 inline-flex items-center rounded-md border border-green-500/30 bg-green-500/10 px-5 py-3 text-green-300">
              <CheckCircle className="h-5 w-5 mr-2" />
              Your Champion application was submitted.
            </div>
          )}
        </section>

        <section className="max-w-5xl mx-auto">
          <form
            action="https://formsubmit.co/elamrani.abdessamad@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            className="bg-gray-900/40 border border-gray-800 rounded-xl p-5 md:p-8 space-y-8"
          >
            <input type="hidden" name="_subject" value="New CyberSec.ma Champion application" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value="https://cybersec.ma/#/champions?submitted=1" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid md:grid-cols-2 gap-5">
              <label className="block">
                <span className="block text-sm font-semibold text-gray-300 mb-2">Name</span>
                <input
                  type="text"
                  name="Name"
                  required
                  className="w-full rounded-md bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                  placeholder="Full name"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-gray-300 mb-2">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                  placeholder="name@example.com"
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-gray-300 mb-2">WhatsApp phone</span>
                <input
                  type="tel"
                  name="WhatsApp phone"
                  required
                  className="w-full rounded-md bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                  placeholder="+212 ..."
                />
              </label>

              <label className="block">
                <span className="block text-sm font-semibold text-gray-300 mb-2">City / country</span>
                <input
                  type="text"
                  name="City / country"
                  className="w-full rounded-md bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                  placeholder="Casablanca, Morocco"
                />
              </label>
            </div>

            <fieldset>
              <legend className="text-lg font-bold text-white mb-3">Cybersecurity expertise</legend>
              <p className="text-sm text-gray-400 mb-4">
                Select <strong className="font-bold text-orange-400">at least one</strong> area where you can contribute confidently.
              </p>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {expertiseAreas.map((area) => (
                  <label key={area} className="flex items-start rounded-md border border-gray-800 bg-black/70 p-3 text-sm text-gray-300 hover:border-red-500/50">
                    <input
                      type="checkbox"
                      name="Cybersecurity expertise"
                      value={area}
                      checked={selectedExpertise.includes(area)}
                      onChange={() => toggleExpertise(area)}
                      className="mt-1 mr-3 accent-red-500"
                    />
                    <span>{area}</span>
                  </label>
                ))}
              </div>
              {expertiseError && <p className="mt-3 text-sm text-red-400">{expertiseError}</p>}
            </fieldset>

            <div className="grid md:grid-cols-2 gap-6">
              <fieldset>
                <legend className="text-lg font-bold text-white mb-3">Willing to join events / streams?</legend>
                <div className="flex gap-3">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex flex-1 items-center rounded-md border border-gray-800 bg-black/70 p-3 text-gray-300">
                      <input type="radio" name="Willing to join events / streams" value={option} required className="mr-3 accent-red-500" />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-lg font-bold text-white mb-3">Give back at least 30 min / month?</legend>
                <div className="flex gap-3">
                  {['Yes', 'No'].map((option) => (
                    <label key={option} className="flex flex-1 items-center rounded-md border border-gray-800 bg-black/70 p-3 text-gray-300">
                      <input type="radio" name="30 min monthly contribution" value={option} required className="mr-3 accent-red-500" />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>

            <fieldset>
              <legend className="text-lg font-bold text-white mb-3">How can you give back?</legend>
              <div className="grid sm:grid-cols-2 gap-3">
                {contributionFormats.map((format) => (
                  <label key={format} className="flex items-start rounded-md border border-gray-800 bg-black/70 p-3 text-sm text-gray-300 hover:border-red-500/50">
                    <input type="checkbox" name="Contribution formats" value={format} className="mt-1 mr-3 accent-red-500" />
                    <span>{format}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="block text-lg font-bold text-white mb-3">Few words about you in your mind to give back</span>
              <textarea
                name="Few words about you in your mind to give back"
                rows={4}
                className="w-full rounded-md bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                placeholder="Optional: a short note about your motivation, ideas, availability, LinkedIn, talks, research, or public achievements..."
              />
            </label>

            <label className="block">
              <span className="block text-lg font-bold text-white mb-3">What can you contribute in the next 30 days?</span>
              <textarea
                name="First contribution idea"
                rows={4}
                required
                className="w-full rounded-md bg-black border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none"
                placeholder="Example: 30-minute stream on AD attack paths, workshop on detection engineering, demo of cloud misconfigurations..."
              />
            </label>

            <label className="flex items-start rounded-md border border-gray-800 bg-black/70 p-4 text-sm text-gray-300">
              <input type="checkbox" name="Permission to contact" value="Yes" required className="mt-1 mr-3 accent-red-500" />
              <span>I agree to be contacted by CyberSec.ma about Champion activities and community contribution opportunities.</span>
            </label>

            <button
              type="submit"
              className="inline-flex w-full md:w-auto items-center justify-center rounded-md bg-red-500 px-6 py-3 text-base font-semibold text-white transition-all duration-200 hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/20"
            >
              Submit Champion Application
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ChampionsPage;
